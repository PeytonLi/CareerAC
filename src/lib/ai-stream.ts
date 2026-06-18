/**
 * AI streaming module.
 * Handles message conversion, DeepSeek API calls, and SSE response encoding.
 * This is the ONLY file that knows about the DeepSeek wire protocol.
 */

import { createUIMessageStreamResponse } from "ai";
import type { UIMessage } from "ai";

// ---------------------------------------------------------------------------
// Message conversion
// ---------------------------------------------------------------------------

export interface AnthropicMessage {
  role: "user" | "assistant";
  content: Array<{ type: "text"; text: string }>;
}

interface DeepSeekMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface DeepSeekMessageResponse {
  choices?: Array<{
    message?: { content?: string };
    delta?: { content?: string };
    finish_reason?: string | null;
  }>;
}

export class MiniMaxApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "MiniMaxApiError";
  }
}

function getDeepSeekToken(): string {
  return process.env.DEEPSEEK_API_KEY ?? "YOUR_API_KEY";
}

function buildDeepSeekRequestBody(
  systemPrompt: string,
  messages: AnthropicMessage[],
  stream: boolean,
) {
  const systemMessage: DeepSeekMessage = { role: "system", content: systemPrompt };
  const convertedMessages: DeepSeekMessage[] = messages.map((msg) => ({
    role: msg.role,
    content: msg.content.map((c) => c.text).join(""),
  }));

  return {
    model: "deepseek-chat",
    messages: [systemMessage, ...convertedMessages],
    max_tokens: 8192,
    temperature: 1,
    stream,
  };
}

const DEEPSEEK_STREAM_TIMEOUT_MS = 30_000;
const DEEPSEEK_GENERATE_TIMEOUT_MS = 90_000;

function getDeepSeekTimeoutMs(stream: boolean): number {
  const envKey = stream
    ? process.env.MINIMAX_STREAM_TIMEOUT_MS
    : process.env.MINIMAX_GENERATE_TIMEOUT_MS;

  const parsed = envKey ? Number(envKey) : Number.NaN;
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  return stream ? DEEPSEEK_STREAM_TIMEOUT_MS : DEEPSEEK_GENERATE_TIMEOUT_MS;
}

async function callDeepSeek(
  systemPrompt: string,
  messages: AnthropicMessage[],
  stream: boolean,
): Promise<Response> {
  const controller = new AbortController();
  const timeoutMs = getDeepSeekTimeoutMs(stream);
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  let response: Response;
  try {
    response = await fetch(
      "https://api.deepseek.com/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${getDeepSeekToken()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(buildDeepSeekRequestBody(systemPrompt, messages, stream)),
        signal: controller.signal,
      },
    );
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new MiniMaxApiError(
        `DeepSeek API timeout after ${timeoutMs}ms`,
        504,
      );
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new MiniMaxApiError(
      `MiniMax API error: ${response.status} - ${errorText}`,
      response.status,
    );
  }

  return response;
}

/**
 * Converts UIMessage[] (from @ai-sdk/react) → message format for the DeepSeek API,
 * filtering out system messages.
 */
export function convertToAnthropicMessages(
  messages: UIMessage[],
): AnthropicMessage[] {
  return messages
    .map((msg) => {
      let content = "";
      if (Array.isArray(msg.parts)) {
        content = msg.parts
          .filter(
            (part): part is { type: "text"; text: string } =>
              part.type === "text",
          )
          .map((part) => part.text)
          .join("");
      }
      return {
        role: msg.role as "system" | "user" | "assistant",
        content,
      };
    })
    .filter((msg) => msg.role !== "system")
    .map((msg) => ({
      role: msg.role as "user" | "assistant",
      content: [{ type: "text" as const, text: msg.content }],
    }));
}

// ---------------------------------------------------------------------------
// DeepSeek streaming
// ---------------------------------------------------------------------------

/**
 * Calls the DeepSeek API with the assembled system prompt and messages,
 * then returns a streaming SSE Response suitable for the frontend.
 */
export async function streamFromMiniMax(
  systemPrompt: string,
  messages: AnthropicMessage[],
): Promise<Response> {
  let deepSeekResponse: Response;

  try {
    deepSeekResponse = await callDeepSeek(systemPrompt, messages, true);
  } catch (error) {
    if (error instanceof MiniMaxApiError) {
      console.error("DeepSeek API error:", error.status, error.message);
      return Response.json(
        { error: "AI service error" },
        { status: error.status },
      );
    }

    throw error;
  }

  const messageId = `msg-${Date.now()}`;
  const textId = `text-${Date.now()}`;

  const stream = new ReadableStream({
    async start(controller) {
      const reader = deepSeekResponse.body?.getReader();

      if (!reader) {
        controller.error(new Error("No response body"));
        return;
      }

      let started = false;
      let buffer = "";

      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          buffer += new TextDecoder().decode(value);
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const data = line.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data) as DeepSeekMessageResponse;
                const content = parsed.choices?.[0]?.delta?.content ?? "";

                if (!started && content) {
                  started = true;
                  controller.enqueue({ type: "start", messageId });
                  controller.enqueue({ type: "text-start", id: textId });
                }

                if (content) {
                  controller.enqueue({ type: "text-delta", id: textId, delta: content });
                }
              } catch {
                // SSE chunks may be incomplete, ignore parse errors
              }
            }
          }
        }

        if (started) {
          controller.enqueue({ type: "text-end", id: textId });
        }
        controller.enqueue({ type: "finish", finishReason: "stop" });
        controller.close();
      } catch (error) {
        console.error("Streaming error:", error);
        controller.error(error);
      }
    },
  });

  return createUIMessageStreamResponse({ stream });
}

export async function generateTextFromMiniMax(
  systemPrompt: string,
  messages: AnthropicMessage[],
): Promise<string> {
  console.log("[DeepSeek] Calling API...");
  const deepSeekResponse = await callDeepSeek(systemPrompt, messages, false);
  console.log("[DeepSeek] Response received, status:", deepSeekResponse.status);

  let data: DeepSeekMessageResponse;
  try {
    data = (await deepSeekResponse.json()) as DeepSeekMessageResponse;
    console.log("[DeepSeek] JSON parsed, choices:", data.choices?.length ?? 0);
  } catch (parseError) {
    console.error("[DeepSeek] JSON parse error:", parseError);
    throw new MiniMaxApiError("Failed to parse AI response", 502);
  }

  const text = data.choices?.[0]?.message?.content ?? "";

  console.log("[DeepSeek] Text extracted, length:", text.length);

  if (!text.trim()) {
    console.error("[DeepSeek] No text content in response");
    throw new MiniMaxApiError("No content returned from DeepSeek", 502);
  }

  console.log("[DeepSeek] Returning text, first 200 chars:", text.substring(0, 200));
  return text;
}

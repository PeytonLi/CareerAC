import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { parseTranscriptWithGemini as parseTranscriptWithGeminiText } from "../transcript-gemini-parser";

// Mock the @google/genai SDK
vi.mock("@google/genai", () => {
  const generateContentMock = vi.fn().mockResolvedValue({
    candidates: [
      {
        content: {
          parts: [
            {
              text: JSON.stringify({
                institution: "De Anza College",
                courses: [
                  {
                    code: "CIS 22A",
                    title: "C++ Programming",
                    units: 4.5,
                    grade: "A",
                    status: "completed",
                    semester: "Fall 2023",
                  },
                  {
                    code: "MATH 1B",
                    title: "Calculus II",
                    units: 5.0,
                    grade: "IP",
                    status: "in_progress",
                    semester: "Spring 2024",
                  },
                ],
              }),
            },
          ],
        },
      },
    ],
  });

  return {
    GoogleGenAI: vi.fn().mockImplementation(function() {
      return {
        models: {
          generateContent: generateContentMock,
        },
      };
    }),
  };
});

describe("parseTranscriptWithGeminiText", () => {
  const originalKey = process.env.GEMINI_API_KEY;

  beforeEach(() => {
    process.env.GEMINI_API_KEY = "test-gemini-key";
  });

  afterEach(() => {
    process.env.GEMINI_API_KEY = originalKey;
    vi.clearAllMocks();
  });

  it("successfully parses transcript text into TranscriptData", async () => {
    const result = await parseTranscriptWithGeminiText("Some raw transcript text");

    expect(result.institution).toBe("De Anza College");
    expect(result.courses).toHaveLength(2);
    expect(result.courses[0].code).toBe("CIS 22A");
    expect(result.totalUnitsCompleted).toBe(4.5);
    expect(result.totalUnitsInProgress).toBe(5.0);
    expect(result.gpa).toBe(4.0);
  });

  it("throws error when GEMINI_API_KEY is missing", async () => {
    delete process.env.GEMINI_API_KEY;
    await expect(parseTranscriptWithGeminiText("text")).rejects.toThrow(/GEMINI_API_KEY is not configured/);
  });

  it("throws error when rawText is empty", async () => {
    await expect(parseTranscriptWithGeminiText("  ")).rejects.toThrow(/No readable text found/);
  });
});

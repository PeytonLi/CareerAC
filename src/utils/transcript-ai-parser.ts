import type { TranscriptCourse, TranscriptData } from "@/types/transcript";

interface DeepSeekMessage {
  role: "system" | "user";
  content: string;
}

/**
 * Parses transcript text using DeepSeek AI model.
 * Falls back to regex parser if AI fails.
 */
export async function parseTranscriptWithAI(rawText: string): Promise<TranscriptData> {
  if (!rawText || !rawText.trim()) {
    throw new Error("No readable text found in the transcript. It may be a scanned image or empty.");
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    throw new Error("DEEPSEEK_API_KEY is not configured");
  }

  const systemPrompt = `You are a transcript parsing expert. Extract all courses from the provided transcript text and return ONLY valid JSON in this exact format:
{
  "institution": "University Name",
  "courses": [
    {
      "code": "CS 101",
      "title": "Introduction to Computer Science",
      "units": 3.0,
      "grade": "A",
      "status": "completed",
      "semester": "Fall 2023"
    }
  ]
}

Rules:
- status must be "completed", "in_progress", or "withdrawn"
- For in-progress courses use status "in_progress"
- For withdrawn use status "withdrawn"
- grade can be: A+, A, A-, B+, B, B-, C+, C, C-, D+, D, D-, F, IP, W, P, NP, CR, NC
- Extract the institution name from the transcript header
- Return ONLY the JSON, no explanation or markdown`;

  const messages: DeepSeekMessage[] = [
    { role: "system", content: systemPrompt },
    { role: "user", content: `Parse this transcript:\n\n${rawText}` }
  ];

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages,
      max_tokens: 4096,
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error: ${response.status} - ${errorText}`);
  }

  const data = (await response.json()) as {
    choices?: Array<{
      message?: {
        content?: string;
      };
    }>;
  };

  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    console.error("DeepSeek full response for debugging:", JSON.stringify(data, null, 2));
    throw new Error(`No content returned from DeepSeek. Choices length: ${data.choices?.length || 0}`);
  }

  // Parse JSON from response (handle potential markdown code blocks)
  const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/) || [null, content];
  const jsonStr = jsonMatch[1]?.trim() || content.trim();

  try {
    const parsed = JSON.parse(jsonStr) as {
      institution: string;
      courses: TranscriptCourse[];
    };

    // Validate structure
    if (!parsed.institution || !Array.isArray(parsed.courses)) {
      throw new Error("Invalid response structure from AI");
    }

    // Calculate totals
    const totalUnitsCompleted = parsed.courses
      .filter((c: TranscriptCourse) => c.status === "completed")
      .reduce((sum: number, c: TranscriptCourse) => sum + c.units, 0);

    const totalUnitsInProgress = parsed.courses
      .filter((c: TranscriptCourse) => c.status === "in_progress")
      .reduce((sum: number, c: TranscriptCourse) => sum + c.units, 0);

    // Calculate GPA
    const GRADE_POINTS: Record<string, number> = {
      "A+": 4.0, "A": 4.0, "A-": 3.7,
      "B+": 3.3, "B": 3.0, "B-": 2.7,
      "C+": 2.3, "C": 2.0, "C-": 1.7,
      "D+": 1.3, "D": 1.0, "D-": 0.7,
      "F": 0.0,
    };

    let totalPoints = 0;
    let totalUnits = 0;
    for (const course of parsed.courses) {
      if (course.status !== "completed") continue;
      const points = GRADE_POINTS[course.grade];
      if (points !== undefined) {
        totalPoints += points * course.units;
        totalUnits += course.units;
      }
    }

    return {
      institution: parsed.institution,
      courses: parsed.courses,
      totalUnitsCompleted,
      totalUnitsInProgress,
      gpa: totalUnits > 0 ? Math.round((totalPoints / totalUnits) * 100) / 100 : undefined
    };
  } catch (parseError) {
    throw new Error(`Failed to parse AI response: ${parseError}`);
  }
}

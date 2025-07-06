import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API,
});

export async function POST(req: Request) {
  const body = await req.json();
  const prompt =
    body.prompt ||
    "Give me a 1–2 sentence sustainability tip to reduce personal carbon footprint. Make it specific, friendly, and include a small action with a quick impact example.";

  try {
    const completion = await openai.chat.completions.create({
      model: "openrouter/cypher-alpha:free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    return NextResponse.json({
      suggestion: completion.choices[0].message.content,
    });
  } catch (error: any) {
    console.error("OpenAI API error:", error); // <-- Add this
    return NextResponse.json(
      { error: "Failed to generate suggestion", detail: error.message },
      { status: 500 }
    );
  }
}

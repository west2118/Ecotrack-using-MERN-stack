import { verifyToken } from "@/lib/middleware/verifyToken";
import Act from "@/models/act.model";
import User from "@/models/user.model";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API,
});

export async function GET(req: Request) {
  const result = await verifyToken(req);

  if (!result.success) return result.response;

  const { decoded } = result;

  try {
    const user = await User.findOne({ uid: decoded.uid });
    if (!user) {
      return NextResponse.json(
        { message: "User didn't exist" },
        { status: 400 }
      );
    }

    const acts = await Act.find({ userUid: decoded.uid })
      .sort({ createdAt: -1 })
      .limit(5)
      .select("activity category CO2 note");

    const prompt = `You are an assistant that returns only a valid JSON array of objects. Do not include any code declarations, variable assignments, explanations, or comments.

    Based on the user's 5 most recent activities (provided below), return a **JSON array** that includes:
    - One motivational object at the top and make it 2-3sentences:
      { "motivational": "..." }
    
    - Followed by six tip objects:
      {
        "title": "Category",
        "tip": "Personalized eco-friendly suggestion based on the category",
        "potentialSavings": "Xkg/month"
      }
    
    Rules:
    - The JSON must be valid and parseable with JSON.parse().
    - Use double quotes around all keys and string values.
    - Do not include trailing commas.
    - All tip objects should be based on the categories present in the activity data.
    - Keep the tone friendly and actionable.
    
    Example format:
    [
      { "motivational": "..." },
      { "title": "Foods", "tip": "...", "potentialSavings": "..." },
      { "title": "Transport", "tip": "...", "potentialSavings": "..." },
      ...
    ]
    
    User's recent activities:
    ${JSON.stringify(acts)}
    `;

    const completion = await openai.chat.completions.create({
      model: "openrouter/cypher-alpha:free",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const raw = completion.choices[0].message.content || "";

    const match = raw.match(/\[\s*{[\s\S]*}\s*\]/);
    let parsedArray;

    try {
      parsedArray = match ? JSON.parse(match[0]) : [];
    } catch (parseError) {
      console.error("Failed to parse AI array:", parseError);
      return NextResponse.json(
        { error: "AI returned invalid array format" },
        { status: 500 }
      );
    }

    return NextResponse.json(parsedArray);
  } catch (error: any) {
    console.error("OpenAI API error:", error); // <-- Add this
    return NextResponse.json(
      { error: "Failed to generate suggestion", detail: error.message },
      { status: 500 }
    );
  }
}

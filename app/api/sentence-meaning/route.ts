import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { sentence } = await req.json();

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([
      `Explain this sentence in simple terms: "${sentence}"`,
    ]);

    const text = result.response.text();
    return NextResponse.json({ meaning: text });
  } catch {
    return NextResponse.json(
      { meaning: "Error generating explanation." },
      { status: 500 }
    );
  }
}

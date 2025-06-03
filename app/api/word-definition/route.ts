import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { word } = await req.json();
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  const data = await res.json();

  const definition =
    data?.[0]?.meanings?.[0]?.definitions?.[0]?.definition ||
    "No definition found.";
  return NextResponse.json({ definition });
}

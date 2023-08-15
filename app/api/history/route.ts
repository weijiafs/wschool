import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = [{ item: "a1" }, { item: "b1" } ];
  return NextResponse.json({ data });
}

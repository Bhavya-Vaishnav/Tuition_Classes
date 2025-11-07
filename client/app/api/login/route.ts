import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Login removed" }, { status: 404 });
}

export async function GET() {
  return NextResponse.json({ message: "Login removed" }, { status: 404 });
}

import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    { message: "Registration removed" },
    { status: 404 }
  );
}

export async function GET() {
  return NextResponse.json(
    { message: "Registration removed" },
    { status: 404 }
  );
}

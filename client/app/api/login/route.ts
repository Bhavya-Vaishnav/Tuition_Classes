import { NextResponse } from "next/server";

type LoginBody = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  try {
    const body: LoginBody = await request.json();
    const { email, password } = body || {};

    // Very small mock authentication for local dev.
    // Replace with your real auth logic / DB calls.
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password required" },
        { status: 400 }
      );
    }

    // Example credentials
    if (email === "student@example.com" && password === "password") {
      return NextResponse.json(
        {
          token: "mock-student-token",
          user: { id: 1, email, role: "student", name: "Student User" },
        },
        { status: 200 }
      );
    }

    if (email === "teacher@example.com" && password === "password") {
      return NextResponse.json(
        {
          token: "mock-teacher-token",
          user: { id: 2, email, role: "teacher", name: "Teacher User" },
        },
        { status: 200 }
      );
    }

    // Default: invalid credentials
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 }
    );
  } catch (err) {
    console.error("login route error", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  // Informational endpoint if someone visits /api/login by GET in the browser
  return NextResponse.json(
    { message: "POST to this endpoint with { email, password }" },
    { status: 200 }
  );
}

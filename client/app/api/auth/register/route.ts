import { NextResponse } from "next/server";

type RegisterBody = {
  name?: string;
  email?: string;
  password?: string;
  role?: string;
  className?: string;
};

export async function POST(req: Request) {
  try {
    const body: RegisterBody = await req.json();
    const { name, email, password, role } = body || {};

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "name, email and password are required" },
        { status: 400 }
      );
    }

    // Mock behavior: if email already contains "exists" return 409
    if (email.includes("exists")) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    // Return a mocked created user + token
    const user = {
      id: Date.now(),
      name,
      email,
      role: role || "student",
      className: body.className || "",
    };
    const token = "mock-register-token";

    return NextResponse.json(
      { message: "Registered", user, token },
      { status: 201 }
    );
  } catch (err) {
    console.error("register route error", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "POST to this endpoint with { name, email, password, role }" },
    { status: 200 }
  );
}

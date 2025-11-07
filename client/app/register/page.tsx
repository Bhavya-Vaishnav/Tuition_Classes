"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  const router = useRouter();

  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student", 
    className: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Failed to register");
        setLoading(false);
        return;
      }

      alert("Registered successfully");
      router.push("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Error registering");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4 bg-linear-to-r from-indigo-600 to-blue-500">
      <Card className="w-full max-w-sm shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div>
            <Label>Full Name</Label>
            <Input
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Role</Label>
            <select
              name="role"
              className="w-full border p-2 rounded bg-white"
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>

          {form.role === "student" && (
            <div>
              <Label>Class (example: 10A)</Label>
              <Input
                name="className"
                placeholder="Enter class"
                onChange={handleChange}
              />
            </div>
          )}

          <Button
            className="w-full mt-2"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>

          <p className="text-center text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

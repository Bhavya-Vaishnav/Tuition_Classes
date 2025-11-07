"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "@/lib/auth";

export default function ProtectedRoute({ children, role }) {
  const router = useRouter();
  const { token, user } = getAuth();

  useEffect(() => {
    if (!token) router.replace("/login");
    if (role && user?.role !== role) router.replace("/login");
  }, []);

  if (!token) return null;

  return <>{children}</>;
}

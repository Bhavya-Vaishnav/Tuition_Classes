"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import { logout } from "@/lib/auth";
import { useRouter } from "next/router";

export default function TeacherDashboard() {
  const router = useRouter();
  const features = [
    "👨‍🎓 Student List",
    "📚 Upload Notes",
    "📝 Create Assignment",
    "✅ Attendance",
    "📢 Announcements",
  ];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    window.location.href = "/";
  };

  return (
    <ProtectedRoute role="teacher">
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Teacher Dashboard</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {features.map((item) => (
            <div
              key={item}
              className="p-4 border rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer font-medium"
            >
              {item}
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            logout();
            router.push("/login");
          }}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
}

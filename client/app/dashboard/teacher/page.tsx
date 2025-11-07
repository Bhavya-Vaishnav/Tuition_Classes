import ProtectedRoute from "@/components/ProtectedRoute";

export default function TeacherDashboard() {
  const features = [
    "👨‍🎓 Student List",
    "📚 Upload Notes",
    "📝 Create Assignment",
    "✅ Attendance",
    "📢 Announcements",
  ];

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
    </div>
    </ProtectedRoute>
  );
}

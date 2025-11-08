import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Progress } from "../../components/ui/progress";
import {
  BookOpen,
  Calendar,
  Clock,
  Award,
  Video,
  FileText,
  TrendingUp,
  PlayCircle,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";

export function StudentDashboard() {
  const upcomingClasses = [
    {
      subject: "Mathematics",
      teacher: "Dr. Smith",
      time: "Today, 2:00 PM",
      duration: "1 hour",
      color: "from-violet-500 to-purple-600",
    },
    {
      subject: "Physics",
      teacher: "Prof. Johnson",
      time: "Tomorrow, 10:00 AM",
      duration: "1.5 hours",
      color: "from-blue-500 to-cyan-600",
    },
    {
      subject: "Chemistry",
      teacher: "Dr. Williams",
      time: "Friday, 3:00 PM",
      duration: "1 hour",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const courseProgress = [
    {
      subject: "Mathematics",
      progress: 75,
      lessons: "15/20",
      gradient: "from-violet-600 to-purple-600",
    },
    {
      subject: "Physics",
      progress: 60,
      lessons: "12/20",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      subject: "Chemistry",
      progress: 85,
      lessons: "17/20",
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      subject: "Biology",
      progress: 45,
      lessons: "9/20",
      gradient: "from-pink-600 to-rose-600",
    },
  ];

  const recentGrades = [
    {
      subject: "Mathematics Quiz",
      grade: "A",
      score: "92/100",
      date: "Nov 5",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      subject: "Physics Test",
      grade: "B+",
      score: "87/100",
      date: "Nov 3",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      subject: "Chemistry Lab",
      grade: "A-",
      score: "90/100",
      date: "Nov 1",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <div className="py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-50/50 via-white to-blue-50/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Welcome back, Student!</h1>
          <p className="text-slate-600">
            Here's what's happening with your learning today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Active Courses
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">8</div>
              <p className="text-slate-500 text-xs">2 new this month</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Hours Learned
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">42</div>
              <p className="text-slate-500 text-xs">This month</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Average Grade
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Award className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">A-</div>
              <p className="text-slate-500 text-xs">88.5% overall</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Completed
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">68%</div>
              <p className="text-slate-500 text-xs">Overall progress</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Classes */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-900">
                      Upcoming Classes
                    </CardTitle>
                    <CardDescription>Your scheduled sessions</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingClasses.map((classItem, index) => (
                    <div
                      key={index}
                      className="group flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl hover:bg-white transition-all border border-slate-100"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`h-14 w-14 bg-linear-to-br ${classItem.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                        >
                          <Video className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <div className="text-slate-900">
                            {classItem.subject}
                          </div>
                          <div className="text-slate-500 text-sm">
                            {classItem.teacher}
                          </div>
                          <div className="text-slate-600 text-sm flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {classItem.time}
                            </span>
                            <span>• {classItem.duration}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="gap-2 bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/30"
                      >
                        <PlayCircle className="h-4 w-4" />
                        Join
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900">
                  Course Progress
                </CardTitle>
                <CardDescription>Track your learning journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {courseProgress.map((course, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-slate-50/50 border border-slate-100"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-900">{course.subject}</span>
                        <span className="text-slate-600 text-sm">
                          {course.lessons} lessons
                        </span>
                      </div>
                      <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`absolute inset-y-0 left-0 bg-linear-to-r ${course.gradient} rounded-full transition-all duration-500`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-slate-500 text-sm mt-2">
                        {course.progress}% complete
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Grades */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900">Recent Grades</CardTitle>
                <CardDescription>Your latest assessments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentGrades.map((grade, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-10 w-10 rounded-xl bg-linear-to-br ${grade.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <span className="text-white text-sm">
                            {grade.grade}
                          </span>
                        </div>
                        <div>
                          <div className="text-slate-900 text-sm">
                            {grade.subject}
                          </div>
                          <div className="text-slate-500 text-xs">
                            {grade.date}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-500 text-xs">
                          {grade.score}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-slate-200"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View All Grades
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-linear-to-br from-violet-500 to-purple-600 shadow-xl text-white">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="secondary"
                  className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button
                  variant="secondary"
                  className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Class
                </Button>
                <Button
                  variant="secondary"
                  className="w-full justify-start bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Study Materials
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

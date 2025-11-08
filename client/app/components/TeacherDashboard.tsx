import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Users,
  BookOpen,
  Clock,
  DollarSign,
  Video,
  Calendar,
  FileText,
  TrendingUp,
  Plus,
  MessageSquare,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";

export function TeacherDashboard() {
  const upcomingClasses = [
    {
      subject: "Advanced Mathematics",
      students: 15,
      time: "Today, 2:00 PM",
      duration: "1 hour",
      color: "from-violet-500 to-purple-600",
    },
    {
      subject: "Physics 101",
      students: 22,
      time: "Tomorrow, 10:00 AM",
      duration: "1.5 hours",
      color: "from-blue-500 to-cyan-600",
    },
    {
      subject: "Calculus Workshop",
      students: 12,
      time: "Friday, 3:00 PM",
      duration: "2 hours",
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const recentStudents = [
    {
      name: "Sarah Johnson",
      course: "Mathematics",
      progress: 85,
      initials: "SJ",
      color: "from-purple-400 to-purple-600",
    },
    {
      name: "Michael Chen",
      course: "Physics",
      progress: 92,
      initials: "MC",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Emily Rodriguez",
      course: "Mathematics",
      progress: 78,
      initials: "ER",
      color: "from-pink-400 to-pink-600",
    },
    {
      name: "David Thompson",
      course: "Calculus",
      progress: 88,
      initials: "DT",
      color: "from-green-400 to-green-600",
    },
  ];

  const pendingTasks = [
    {
      task: "Grade Mathematics Quiz 5",
      students: 15,
      deadline: "Due today",
      urgent: true,
    },
    {
      task: "Review Physics Lab Reports",
      students: 22,
      deadline: "Due tomorrow",
      urgent: false,
    },
    {
      task: "Prepare Calculus Lesson Plan",
      students: 12,
      deadline: "Due in 3 days",
      urgent: false,
    },
  ];

  return (
    <div className="py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-white to-violet-50/50"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-slate-900 mb-2">Welcome back, Professor!</h1>
            <p className="text-slate-600">
              Here's an overview of your teaching activities.
            </p>
          </div>
          <Button className="gap-2 w-fit bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/30">
            <Plus className="h-4 w-4" />
            Create New Class
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Total Students
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Users className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">127</div>
              <p className="text-slate-500 text-xs">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Active Courses
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">6</div>
              <p className="text-slate-500 text-xs">Across all subjects</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Hours This Week
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">24</div>
              <p className="text-slate-500 text-xs">Teaching hours</p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all group">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-slate-600">
                Avg. Rating
              </CardTitle>
              <div className="h-10 w-10 rounded-xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-slate-900 text-3xl">4.8</div>
              <p className="text-slate-500 text-xs">From 89 reviews</p>
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
                    <CardDescription>
                      Your scheduled teaching sessions
                    </CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    View Schedule
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
                          <div className="text-slate-600 text-sm flex items-center gap-3 mt-1">
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {classItem.students} students
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {classItem.time}
                            </span>
                          </div>
                          <div className="text-slate-500 text-sm mt-1">
                            {classItem.duration}
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-linear-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/30"
                      >
                        Start Class
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Students */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-slate-900">
                      Student Performance
                    </CardTitle>
                    <CardDescription>Recent student activity</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-200"
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentStudents.map((student, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl hover:bg-white transition-all border border-slate-100"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback
                            className={`bg-linear-to-br ${student.color} text-white`}
                          >
                            {student.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-slate-900">{student.name}</div>
                          <div className="text-slate-500 text-sm">
                            {student.course}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-slate-900">
                          {student.progress}%
                        </div>
                        <div className="text-slate-500 text-xs">Progress</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Pending Tasks */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900">Pending Tasks</CardTitle>
                <CardDescription>Things that need attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingTasks.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border ${
                        item.urgent
                          ? "bg-orange-50 border-orange-200"
                          : "bg-slate-50/50 border-slate-100"
                      }`}
                    >
                      <div className="text-slate-900 text-sm mb-2">
                        {item.task}
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">
                          {item.students} students
                        </span>
                        <span
                          className={
                            item.urgent ? "text-orange-600" : "text-slate-500"
                          }
                        >
                          {item.deadline}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-4 border-slate-200"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  View All Tasks
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 bg-white/60 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-slate-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-200"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Assignment
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-200"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Message Students
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-200"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Materials
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-slate-200"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Class
                </Button>
              </CardContent>
            </Card>

            {/* Earnings Summary */}
            <Card className="border-0 bg-linear-to-br from-violet-500 to-purple-600 shadow-xl text-white">
              <CardHeader>
                <CardTitle className="text-white">This Month</CardTitle>
                <CardDescription className="text-white/80">
                  Earnings summary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="h-6 w-6" />
                  <span className="text-4xl">4,250</span>
                </div>
                <p className="text-white/80 text-sm">+18% from last month</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  GraduationCap,
  Users,
  Building2,
  DollarSign,
  Trophy,
  Heart,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Faculty",
      description:
        "Learn from highly qualified and experienced teachers who are dedicated to your success.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Users,
      title: "Personalized Attention",
      description:
        "Small batch sizes ensure each student receives the guidance they need.",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description:
        "Enjoy a comfortable learning environment with up-to-date educational resources.",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description:
        "Quality education at a reasonable price, making excellence accessible to all.",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description:
        "Our students consistently achieve outstanding academic performance.",
      gradient: "from-rose-500 to-red-600",
      bgGradient: "from-rose-50 to-red-50",
    },
    {
      icon: Heart,
      title: "Supportive Community",
      description:
        "A collaborative and encouraging atmosphere that nurtures growth.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-linear-to-b from-white via-slate-50/50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Us?
            </span>
          </div>
          <h2 className="text-slate-900 mb-6 text-4xl sm:text-5xl">
            Excellence in Every Aspect
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Discover what makes P.H. Sodha Classes the premier choice for
            students seeking academic excellence and personal growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative border-0 bg-white shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Gradient accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r ${feature.gradient}`}
                ></div>

                <CardHeader className="relative pt-8">
                  <div
                    className={`h-16 w-16 rounded-2xl bg-linear-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-xl shadow-slate-900/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-slate-900 text-xl mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Decorative corner element */}
                <div
                  className={`absolute bottom-0 right-0 w-24 h-24 bg-linear-to-br ${feature.gradient} opacity-5 rounded-tl-full group-hover:opacity-10 transition-opacity`}
                ></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

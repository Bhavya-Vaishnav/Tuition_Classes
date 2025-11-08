import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      name: "Raj Patel",
      role: "Grade 12 Student",
      content:
        "P.H. Sodha Classes transformed my academic journey. The personalized attention and expert guidance helped me achieve my dream college.",
      rating: 5,
      initials: "RP",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      name: "Priya Shah",
      role: "Parent",
      content:
        "The dedication of teachers and modern teaching methods have made a significant impact on my daughter's performance and confidence.",
      rating: 5,
      initials: "PS",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      name: "Ankit Desai",
      role: "Grade 11 Student",
      content:
        "Best decision I made for my studies. The supportive community and excellent faculty make learning enjoyable and effective.",
      rating: 5,
      initials: "AD",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      name: "Kiran Modi",
      role: "Grade 10 Student",
      content:
        "The structured curriculum and regular assessments helped me stay on track. Highly recommend to all serious students.",
      rating: 5,
      initials: "KM",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      name: "Neha Mehta",
      role: "Parent",
      content:
        "Exceptional teaching quality and affordable fees. My son has shown remarkable improvement in just a few months.",
      rating: 5,
      initials: "NM",
      gradient: "from-rose-500 to-red-600",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-indigo-50/30 to-purple-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full mb-6">
            <span className="text-sm bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Student Success Stories
            </span>
          </div>
          <h2 className="text-slate-900 mb-6 text-4xl sm:text-5xl">
            Hear From Our Students
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Real stories from students and parents who have experienced
            excellence at P.H. Sodha Classes.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="group relative border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden hover:-translate-y-1">
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${testimonial.gradient}`}
                    ></div>

                    <CardContent className="p-8 flex flex-col h-full">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${testimonial.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}
                      >
                        <Quote className="h-7 w-7 text-white" />
                      </div>

                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <p className="text-slate-700 mb-8 grow leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                        <Avatar className="h-14 w-14 ring-2 ring-slate-100">
                          <AvatarFallback
                            className={`bg-linear-to-br ${testimonial.gradient} text-white text-lg`}
                          >
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-slate-900">
                            {testimonial.name}
                          </div>
                          <div className="text-slate-500 text-sm">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    {/* Decorative corner */}
                    <div
                      className={`absolute bottom-0 right-0 w-32 h-32 bg-linear-to-br ${testimonial.gradient} opacity-5 rounded-tl-full`}
                    ></div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

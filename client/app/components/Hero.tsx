import { Button } from "../../components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useTranslation } from "../TranslationProvider";

export function Hero() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700">
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.15),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_60%)]"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-2xl rotate-12 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 border-2 border-white/10 rotate-45 animate-pulse delay-500"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full pb-23">
        <div className="text-center space-y-8 mt-7 max-w-4xl mx-auto">
          {/* Main heading with better typography */}
          <h1 className="text-white leading-tight text-5xl sm:text-6xl mt-3  lg:text-7xl">
            {t.heroTitle}
          </h1>

          <p className="text-blue-50/90 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            {t.heroDesc}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-0">
            <Button
              size="sm"
              className="gap-2 bg-white text-blue-700 hover:bg-blue-50 shadow-2xl shadow-black/20 px-4 py-3 text-lg h-auto group"
            >
              {t.getStarted}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-4 py-3 text-lg h-auto"
            >
              <Play className="h-5 w-5" />
              {t.whyChoose}
            </Button>
          </div>

          {/* Stats with modern design */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-white text-4xl sm:text-5xl">500+</div>
              <div className="text-blue-100 text-sm sm:text-base">
                {t.expertFaculty}
              </div>
            </div>
            <div className="space-y-2 border-x border-white/20">
              <div className="text-white text-4xl sm:text-5xl">10K+</div>
              <div className="text-blue-100 text-sm sm:text-base">
                {t.personalizedAttention}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-white text-4xl sm:text-5xl">98%</div>
              <div className="text-blue-100 text-sm sm:text-base">
                {t.modernFacilities}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 45C840 40 960 30 1080 26.7C1200 23.3 1320 26.7 1380 28.3L1440 30V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

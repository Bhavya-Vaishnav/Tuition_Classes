"use client";
import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FooterSection from "./components/FooterSection";

import { useTranslation } from "./TranslationProvider";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col relative">
      <HeroSection t={t} />
      <FeaturesSection t={t} />
      <TestimonialsCarousel
        testimonials={t.testimonialsList}
        title={t.testimonials}
      />
      <FooterSection t={t} />
    </main>
  );
}

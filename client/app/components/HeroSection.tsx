import React from "react";

export default function HeroSection({ t }: { t: any }) {
  return (
    <section className="flex flex-col mt-0 items-center justify-center pt-5 pb-7 px-4 text-center bg-linear-to-r from-indigo-600 to-blue-500 text-white">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        {t.heroTitle}
      </h1>
      <p className="text-xl mb-8  max-w-2xl mx-auto">{t.heroDesc}</p>
      <a
        href="/register"
        className="inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition"
      >
        {t.getStarted}
      </a>
    </section>
  );
}

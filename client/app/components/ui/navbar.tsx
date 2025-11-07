"use client";
import React, { useState } from "react";
import { useTranslation } from "../../TranslationProvider";
import Link from "next/link";

interface NavbarProps {
  t: any;
  lang: "en" | "gu";
}

export default function Navbar({ t, lang }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setLang } = useTranslation();
  const courses = [
    {
      label: t.gujMedium,
      value: "guj-medium",
      sub: Array.from(
        { length: lang === "gu" ? 12 : 12 },
        (_, i) => `${t.std} ${i + 1}`
      ),
    },
    {
      label: t.engMedium,
      value: "eng-medium",
      sub: Array.from(
        { length: lang === "gu" ? 10 : 10 },
        (_, i) => `${t.std} ${i + 1}`
      ),
    },
  ];
  return (
    <div className="bg-linear-to-r from-indigo-600 to-blue-500 pt-5 pb-0 mb-0">
      <nav className=" mx-auto w-fit rounded-xl bg-white/70 top-500 backdrop-blur-lg shadow-xl border border-white/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-blue-700">
              {t.title}
            </Link>
            <Link
              href="/results"
              className="hover:text-blue-600 font-medium duration-300"
            >
              {t.pastResults}
            </Link>
            <Link
              href="/faculties"
              className="hover:text-blue-600 font-medium duration-300"
            >
              {t.faculties}
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 font-medium duration-300"
            >
              {t.contactUs}
            </Link>
            <div className="relative">
              <button
                className="hover:text-blue-600 duration-300 font-medium flex items-center gap-1"
                onClick={() => setDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
              >
                {t.totalCourses}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border rounded shadow-lg z-10">
                  {courses.map((course) => (
                    <div
                      key={course.value}
                      className="border-b last:border-b-0"
                    >
                      <div className="px-4 py-2 font-semibold text-gray-700">
                        {course.label}
                      </div>
                      <div className="grid grid-cols-4 gap-2 px-4 pb-2">
                        {course.sub.map((std) => (
                          <span
                            key={std}
                            className="text-sm text-gray-600 bg-gray-100 rounded px-2 py-1"
                          >
                            {std}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center ml-8">
            <button
              className="bg-white text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-indigo-50 transition border border-indigo-200"
              onClick={() => setLang(lang === "en" ? "gu" : "en")}
            >
              {lang === "en" ? "ગુજરાતી" : "English"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

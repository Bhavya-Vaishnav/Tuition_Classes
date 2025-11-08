"use client";

import { Menu, X, GraduationCap, ChevronDown, Languages } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Page = "home" | "contact" | "student-dashboard" | "teacher-dashboard";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  t: {
    title: string;
    pastResults: string;
    faculties: string;
    contactUs: string;
    totalCourses: string;
    gujMedium: string;
    engMedium: string;
  };
  lang: "en" | "gu";
  setLang: (lang: "en" | "gu") => void;
}

export function Navbar({
  currentPage,
  onNavigate,
  t,
  lang,
  setLang,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    {
      id: "pastResults" as Page,
      label: t.pastResults,
    },
    {
      id: "faculties" as Page,
      label: t.faculties,
    },
    {
      id: "contact" as Page,
      label: t.contactUs,
    },
  ];

  const handleNavigate = (page: Page | string) => {
    if (
      typeof page === "string" &&
      (page.startsWith("guj-std-") || page.startsWith("eng-std-"))
    ) {
      router.push(`/standards/${page}`);
      setCoursesDropdownOpen(false);
      setMobileMenuOpen(false);
      return;
    }
    onNavigate(page as Page);
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl shadow-black/5 border border-white/20 px-6 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <button
              onClick={() => handleNavigate("home")}
              className="flex items-center gap-3 group"
              aria-label="Go to home page"
            >
              <div className="h-11 w-11 rounded-xl bg-linear-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-blue-600/50 transition-shadow">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-slate-900 text-lg hidden sm:block">
                {t.title}
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => {
                    router.push(`/${item.id}`);
                  }}
                  className="text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                >
                  {item.label}
                </Button>
              ))}
              <div className="relative" tabIndex={0}>
                <Button
                  variant="ghost"
                  className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 gap-1 flex items-center"
                  onClick={() => setCoursesDropdownOpen((open) => !open)}
                  aria-expanded={coursesDropdownOpen}
                  aria-haspopup="true"
                >
                  {t.totalCourses}
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {coursesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="mb-2 font-semibold text-blue-700">
                        Gujarati Medium
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(12)].map((_, i) => (
                          <Button
                            key={`guj-${i + 1}`}
                            size="sm"
                            className="bg-blue-50 text-blue-700 rounded-lg shadow hover:bg-blue-100"
                            onClick={() =>
                              handleNavigate(`guj-std-${i + 1}` as Page)
                            }
                          >
                            Std {i + 1}
                          </Button>
                        ))}
                      </div>
                      <div className="mb-2 font-semibold text-indigo-700">
                        English Medium
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[...Array(10)].map((_, i) => (
                          <Button
                            key={`eng-${i + 1}`}
                            size="sm"
                            className="bg-indigo-50 text-indigo-700 rounded-lg shadow hover:bg-indigo-100"
                            onClick={() =>
                              handleNavigate(`eng-std-${i + 1}` as Page)
                            }
                          >
                            Std {i + 1}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Language Switcher and Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button
                onClick={() => setLang(lang === "en" ? "gu" : "en")}
                className="hidden sm:flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-600/30"
              >
                <Languages className="h-4 w-4" />
                {lang === "en" ? "ગુજરાતી" : "English"}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden pt-4 mt-4 border-t border-slate-200">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => handleNavigate(item.id)}
                    className="w-full justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="relative">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 flex items-center"
                  >
                    {t.totalCourses}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                  <div className="absolute left-0 mt-2 w-full bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                    <div className="p-4">
                      <div className="mb-2 font-semibold text-blue-700">
                        Gujarati Medium
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {[...Array(12)].map((_, i) => (
                          <Button
                            key={`guj-m-${i + 1}`}
                            size="sm"
                            className="bg-blue-50 text-blue-700 rounded-lg shadow hover:bg-blue-100"
                            onClick={() =>
                              handleNavigate(`guj-std-${i + 1}` as Page)
                            }
                          >
                            Std {i + 1}
                          </Button>
                        ))}
                      </div>
                      <div className="mb-2 font-semibold text-indigo-700">
                        English Medium
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[...Array(10)].map((_, i) => (
                          <Button
                            key={`eng-m-${i + 1}`}
                            size="sm"
                            className="bg-indigo-50 text-indigo-700 rounded-lg shadow hover:bg-indigo-100"
                            onClick={() =>
                              handleNavigate(`eng-std-${i + 1}` as Page)
                            }
                          >
                            Std {i + 1}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    setLang(lang === "en" ? "gu" : "en");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center gap-2 justify-center"
                >
                  <Languages className="h-4 w-4" />
                  {lang === "en" ? "ગુજરાતી" : "English"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

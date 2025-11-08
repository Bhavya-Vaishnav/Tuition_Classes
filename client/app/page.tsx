"use client";
import { useState } from "react";
import { Navbar } from "./components/ui/navbar";
import { HomePage } from "./components/HomePage";
import ContactPage from "./contact/page";
import { StudentDashboard } from "./components/StudentDashboard";
import { TeacherDashboard } from "./components/TeacherDashboard";
import TranslationProvider, { useTranslation } from "./TranslationProvider";

type Page = "home" | "contact" | "student-dashboard" | "teacher-dashboard";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const { t, lang, setLang } = useTranslation();

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "contact":
        return <ContactPage />;
      case "student-dashboard":
        return <StudentDashboard />;
      case "teacher-dashboard":
        return <TeacherDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        t={t.navbar}
        lang={lang as "en" | "gu"}
        setLang={setLang}
      />
      <main>{renderPage()}</main>
    </div>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}

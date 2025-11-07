import React from "react";

export default function FooterSection({ t }: { t: any }) {
  return (
    <footer className="mt-auto py-6 bg-indigo-700 text-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        <span className="font-semibold">
          © {new Date().getFullYear()} P.H. Sodha Classes
        </span>
        <span>{t.footer}</span>
      </div>
    </footer>
  );
}

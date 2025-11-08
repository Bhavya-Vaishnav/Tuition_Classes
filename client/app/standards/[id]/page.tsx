"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

const timings = {
  guj: {
    1: [
      "9:00A.M. to 12:00A.M.",
      "1:00P.M. to 5:00P.M.",
      "5:00P.M. to 9:00P.M.",
    ],
    2: [
      "10:00A.M. to 1:00P.M.",
      "2:00P.M. to 6:00P.M.",
      "6:00P.M. to 10:00P.M.",
    ],
    3: [
      "8:00A.M. to 11:00A.M.",
      "11:00A.M. to 2:00P.M.",
      "2:00P.M. to 5:00P.M.",
    ],
    4: [
      "9:30A.M. to 12:30P.M.",
      "1:30P.M. to 4:30P.M.",
      "5:30P.M. to 8:30P.M.",
    ],
    5: [
      "8:30A.M. to 11:30A.M.",
      "12:30P.M. to 3:30P.M.",
      "4:30P.M. to 7:30P.M.",
    ],
    6: [
      "10:30A.M. to 1:30P.M.",
      "2:30P.M. to 5:30P.M.",
      "6:30P.M. to 9:30P.M.",
    ],
    7: ["9:00A.M. to 12:00P.M.", "5:00P.M. to 8:00P.M."],
    8: ["8:00A.M. to 11:00A.M."],
    9: [
      "10:00A.M. to 1:00P.M.",
      "2:00P.M. to 5:00P.M.",
      "6:00P.M. to 9:00P.M.",
    ],
    10: [
      "9:30A.M. to 12:30P.M.",
      "1:30P.M. to 4:30P.M.",
      "5:30P.M. to 8:30P.M.",
    ],
    11: [
      "8:30A.M. to 11:30A.M.",
      "12:30P.M. to 3:30P.M.",
      "4:30P.M. to 7:30P.M.",
    ],
    12: [
      "10:30A.M. to 1:30P.M.",
      "2:30P.M. to 5:30P.M.",
      "6:30P.M. to 9:30P.M.",
    ],
  },
  eng: {
    1: ["9:00A.M. to 11:00A.M.", "12:00P.M. to 2:00P.M."],
    2: ["10:00A.M. to 12:00P.M.", "1:00P.M. to 3:00P.M."],
    3: ["8:00A.M. to 10:00A.M.", "11:00A.M. to 1:00P.M."],
    4: ["9:30A.M. to 11:30A.M.", "12:30P.M. to 2:30P.M."],
    5: ["8:30A.M. to 10:30A.M.", "11:30A.M. to 1:30P.M."],
    6: ["10:30A.M. to 12:30P.M.", "1:30P.M. to 3:30P.M."],
    7: ["9:00A.M. to 11:00A.M.", "12:00P.M. to 2:00P.M."],
    8: ["8:00A.M. to 10:00A.M.", "11:00A.M. to 1:00P.M."],
    9: ["10:00A.M. to 12:00P.M.", "1:00P.M. to 3:00P.M."],
    10: ["9:30A.M. to 11:30A.M.", "12:30P.M. to 2:30P.M."],
  },
};

const subjects: Record<string, Record<number, string[]>> = {
  guj: {
    1: ["Gujarati", "Maths", "EVS"],
    2: ["Gujarati", "Maths", "EVS"],
    3: ["Gujarati", "Maths", "Science", "Social Science"],
    4: ["Gujarati", "Maths", "Science", "Social Science"],
    5: ["Gujarati", "Maths", "Science", "Social Science"],
    6: ["Gujarati", "Maths", "Science", "Social Science", "English"],
    7: ["Gujarati", "Maths", "Science", "Social Science", "English"],
    8: ["Gujarati", "Maths", "Science", "Social Science", "English"],
    9: [
      "Gujarati",
      "Maths",
      "Science",
      "Social Science",
      "English",
      "Sanskrit",
    ],
    10: [
      "Gujarati",
      "Maths",
      "Science",
      "Social Science",
      "English",
      "Sanskrit",
    ],
    11: [
      "Accountancy",
      "Statistics",
      "Economics",
      "Business Studies",
      "Gujarati",
      "English",
    ],
    12: [
      "Accountancy",
      "Statistics",
      "Economics",
      "Business Studies",
      "Gujarati",
      "English",
    ],
  },
  eng: {
    1: ["English", "Maths", "EVS"],
    2: ["English", "Maths", "EVS"],
    3: ["English", "Maths", "Science", "Social Science"],
    4: ["English", "Maths", "Science", "Social Science"],
    5: ["English", "Maths", "Science", "Social Science"],
    6: ["English", "Maths", "Science", "Social Science", "Gujarati"],
    7: ["English", "Maths", "Science", "Social Science", "Gujarati"],
    8: ["English", "Maths", "Science", "Social Science", "Gujarati"],
    9: [
      "English",
      "Maths",
      "Science",
      "Social Science",
      "Gujarati",
      "Sanskrit",
    ],
    10: [
      "English",
      "Maths",
      "Science",
      "Social Science",
      "Gujarati",
      "Sanskrit",
    ],
  },
};

export default function StandardPage() {
  const params = useParams();
  const router = useRouter();
  const [showContact, setShowContact] = useState(false);
  const { id } = params;
  const medium = typeof id === "string" ? id.slice(0, 3) : "";
  const standardNum = typeof id === "string" ? parseInt(id.slice(8), 10) : NaN;
  type MediumType = "guj" | "eng";
  const timingsList: string[] =
    medium && !isNaN(standardNum) && ["guj", "eng"].includes(medium)
      ? (timings[medium as MediumType] as any)[standardNum]
      : [];
  const subjectsList: string[] =
    medium && !isNaN(standardNum) && ["guj", "eng"].includes(medium)
      ? (subjects[medium as MediumType] as any)[standardNum] || []
      : [];

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 py-10 px-4">
      <div className="w-full max-w-xl bg-white/90 rounded-2xl shadow-2xl p-8 border border-blue-100">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-extrabold text-blue-700 mb-2 ">
            {medium === "guj"
              ? "Gujarati Medium"
              : medium === "eng"
              ? "English Medium"
              : "Standard Info"}
          </h1>
          <h2 className="text-xl font-semibold text-indigo-700">
            Standard {standardNum}
          </h2>
        </div>
        <div className="mb-6">
          <p className="text-lg font-bold text-slate-800 mb-2">
            Timing of Batches:
          </p>
          <ul className="flex flex-wrap gap-3 justify-center">
            {timingsList.length > 0 ? (
              timingsList.map((time: string, idx: number) => (
                <li
                  key={idx}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl border border-blue-200 shadow hover:bg-blue-100 transition-all"
                >
                  {time}
                </li>
              ))
            ) : (
              <li className="text-slate-500">No timings available.</li>
            )}
          </ul>
        </div>
        <div className="mb-6">
          <p className="text-lg font-bold text-slate-800 mb-2">
            Course Content:
          </p>
          <ul className="list-disc pl-6 text-slate-700 space-y-1">
            {subjectsList.length > 0 ? (
              subjectsList.map((subj: string, idx: number) => (
                <li key={idx}>{subj}</li>
              ))
            ) : (
              <li className="text-slate-500">No subjects available.</li>
            )}
          </ul>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => router.push("/contact")}
            className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-indigo-700 transition-all"
          >
            Contact Us for Admission
          </button>
        </div>
      </div>
    </div>
  );
}

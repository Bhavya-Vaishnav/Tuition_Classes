"use client";
import React, { useState, createContext, useContext } from "react";
import Navbar from "./components/ui/navbar";

const gu = {
  navbar: {
    title: "પી.એચ. સોઢા ક્લાસીસ",
    pastResults: "પાછલા પરિણામો",
    faculties: "શિક્ષકમંડળ",
    contactUs: "સંપર્ક કરો",
    totalCourses: "કુલ કોર્સ",
    gujMedium: "ધોરણ 1 થી 12 (કલા અને કોમર્સ, ગુજરાતી માધ્યમ)",
    engMedium: "ધોરણ 1 થી 10 (અંગ્રેજી માધ્યમ)",
    std: "ધોરણ",
  },
  heroTitle: "પી.એચ. સોઢા ક્લાસીસમાં આપનું સ્વાગત છે",
  heroDesc:
    "તમારી ક્ષમતા અનલોક કરો, નિષ્ણાત શિક્ષકો, વ્યક્તિગત શિક્ષણ અને જીવંત વિદ્યાર્થી સમુદાય સાથે. અમારો ભાગ બનો અને તમારી ભવિષ્યને આકાર આપો!",
  getStarted: "શરૂ કરો",
  whyChoose: "શા માટે અમને પસંદ કરો?",
  expertFaculty: "નિષ્ણાત શિક્ષકમંડળ",
  expertFacultyDesc:
    "અતિ નિષ્ણાત અને અનુભવી શિક્ષકો પાસેથી શીખો, જે તમારી સફળતા માટે પ્રતિબદ્ધ છે.",
  personalizedAttention: "વ્યક્તિગત ધ્યાન",
  personalizedAttentionDesc:
    "નાના બેચ સાઇઝથી દરેક વિદ્યાર્થીને જરૂરી માર્ગદર્શન મળે છે.",
  modernFacilities: "આધુનિક સુવિધાઓ",
  modernFacilitiesDesc:
    "આધુનિક શૈક્ષણિક સાધનો સાથે આરામદાયક શૈક્ષણિક વાતાવરણ માણો.",
  testimonials: "અમારા વિદ્યાર્થીઓ શું કહે છે",
  affordableFees: "વાજબી ફી",
  affordableFeesDesc:
    "ગુણવત્તાયુક્ત શિક્ષણ માટે વાજબી અને પારદર્શક ફી સ્ટ્રક્ચર.",
  provenResults: "પ્રમાણિત પરિણામો",
  provenResultsDesc: "અમારા વિદ્યાર્થીઓએ સતત ઉત્તમ પરિણામો મેળવ્યા છે.",
  supportiveCommunity: "સહાયક સમુદાય",
  supportiveCommunityDesc:
    "વિદ્યાર્થીઓ અને શિક્ષકોનું સહયોગી અને પ્રોત્સાહક વાતાવરણ.",
  testimonialsList: [
    {
      text: "પી.એચ. સોઢા ક્લાસીસે મારા ગુણ અને આત્મવિશ્વાસ વધારવામાં મદદ કરી. શિક્ષકો અદ્ભુત છે!",
      by: "— પ્રિયા એસ., ધોરણ ૧૦",
    },
    {
      text: "વ્યક્તિગત ધ્યાન અને મિત્રતાપૂર્વક વાતાવરણથી શીખવું આનંદદાયક બન્યું.",
      by: "— રાહુલ એમ., ધોરણ ૧૨",
    },
    {
      text: "અહીંના શિક્ષકો ખૂબ જ સહાયક છે અને દરેક વિદ્યાર્થીનું ધ્યાન રાખે છે.",
      by: "— હર્ષિલ પટેલ, ધોરણ ૧૧",
    },
    {
      text: "આધુનિક સુવિધાઓ અને શાંતિપૂર્ણ વાતાવરણથી અભ્યાસમાં વધુ રસ આવ્યો.",
      by: "— કિરણબેન દેસાઈ, ધોરણ ૯",
    },
    {
      text: "મારા પરિણામોમાં નોંધપાત્ર સુધારો થયો છે. ખૂબ ખૂબ આભાર!",
      by: "— મયંક શાહ, ધોરણ ૧૨",
    },
  ],
  footer: "વિદ્યાર્થીઓને સશક્ત બનાવવું, ભવિષ્યને આકાર આપવું",
};
const en = {
  navbar: {
    title: "P H Sodha Classes",
    pastResults: "Past Results",
    faculties: "Faculties",
    contactUs: "Contact Us",
    totalCourses: "Total Courses",
    gujMedium: "Std 1 to 12 Arts & Commerce (Gujarati Medium)",
    engMedium: "Std 1 to 10 (English Medium)",
    std: "Std",
  },
  heroTitle: "Welcome to P.H. Sodha Classes",
  heroDesc:
    "Unlock your potential with expert teachers, personalized learning, and a vibrant student community. Join us to excel in your studies and shape your future!",
  getStarted: "Get Started",
  whyChoose: "Why Choose Us?",
  expertFaculty: "Expert Faculty",
  expertFacultyDesc:
    "Learn from highly qualified and experienced teachers who are dedicated to your success.",
  personalizedAttention: "Personalized Attention",
  personalizedAttentionDesc:
    "Small batch sizes ensure each student receives the guidance they need.",
  modernFacilities: "Modern Facilities",
  modernFacilitiesDesc:
    "Enjoy a comfortable learning environment with up-to-date educational resources.",
  testimonials: "What Our Students Say",
  affordableFees: "Affordable Fees",
  affordableFeesDesc:
    "Quality education at a reasonable and transparent fee structure.",
  provenResults: "Proven Results",
  provenResultsDesc: "Our students consistently achieve excellent results.",
  supportiveCommunity: "Supportive Community",
  supportiveCommunityDesc:
    "A collaborative and encouraging environment for students and teachers.",
  testimonialsList: [
    {
      text: "P.H. Sodha Classes helped improve my grades and confidence. The teachers are excellent!",
      by: "— Priya S., Grade 10",
    },
    {
      text: "Learning became enjoyable with personalized attention and a friendly atmosphere.",
      by: "— Rahul M., Grade 12",
    },
    {
      text: "The teachers here are very supportive and take care of every student's needs.",
      by: "— Harshil Patel, Grade 11",
    },
    {
      text: "Modern facilities and a peaceful environment made studying much more interesting.",
      by: "— Kiranben Desai, Grade 9",
    },
    {
      text: "I saw a significant improvement in my results. Thank you so much!",
      by: "— Mayank Shah, Grade 12",
    },
  ],
  footer: "Empowering students, shaping the future",
};

const TranslationContext = createContext({
  t: en,
  lang: "en",
  setLang: (_: "en" | "gu") => {},
});

export function useTranslation() {
  return useContext(TranslationContext);
}

export default function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<"en" | "gu">("en");
  const t = lang === "gu" ? gu : en;
  return (
    <TranslationContext.Provider value={{ t, lang, setLang }}>
      <Navbar t={t.navbar} lang={lang} />
      {children}
    </TranslationContext.Provider>
  );
}

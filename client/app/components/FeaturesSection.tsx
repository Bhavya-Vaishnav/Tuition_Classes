import React from "react";

export default function FeaturesSection({ t }: { t: any }) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-700">
          {t.whyChoose}
        </h2>
        {/* First row: 3 reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{t.expertFaculty}</h3>
            <p>{t.expertFacultyDesc}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">
              {t.personalizedAttention}
            </h3>
            <p>{t.personalizedAttentionDesc}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{t.modernFacilities}</h3>
            <p>{t.modernFacilitiesDesc}</p>
          </div>
        </div>
        {/* Second row: 3 reasons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{t.affordableFees}</h3>
            <p>{t.affordableFeesDesc}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{t.provenResults}</h3>
            <p>{t.provenResultsDesc}</p>
          </div>
          <div className="bg-indigo-50 rounded-xl p-8 shadow-md text-center hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">
              {t.supportiveCommunity}
            </h3>
            <p>{t.supportiveCommunityDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

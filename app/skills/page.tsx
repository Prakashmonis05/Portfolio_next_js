import React from "react";
import type { Metadata } from "next";
import { SKILLS_CATEGORIES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Skills - Prakash Portfolio",
  description: "Technical skills and technologies mastered by Prakash Monis, spanning Frontend, Backend, Databases, and Data Science.",
};

export default function SkillsPage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white text-black min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">
            My Skills
          </h2>
          <p className="text-gray-500 text-base">
            Technologies and tools I work with
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {Object.entries(SKILLS_CATEGORIES).map(([category, skillList], idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl font-bold text-[#ff0000] border-l-4 border-[#ff0000] pl-3.5 flex items-center">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                {skillList.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 text-center font-semibold text-sm sm:text-base text-gray-800 shadow-sm hover:bg-black hover:text-white hover:border-[#ff0000] hover:-translate-y-1 transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

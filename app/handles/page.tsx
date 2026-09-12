import React from "react";
import type { Metadata } from "next";
import { SOCIAL_HANDLES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Social Handles - Prakash Portfolio",
  description: "Connect with Prakash Monis on GitHub, LinkedIn, WhatsApp, and Email.",
};

export default function HandlesPage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white text-black min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">
            Connect With Me
          </h2>
          <p className="text-gray-500 text-base">
            Let’s stay connected on social platforms
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SOCIAL_HANDLES.map((handle, idx) => (
            <a
              key={idx}
              href={handle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 rounded-2xl bg-white border border-gray-200 text-center shadow-md hover:shadow-xl hover:-translate-y-2 hover:border-[#ff0000] transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {handle.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-1 group-hover:text-[#ff0000] transition-colors">
                {handle.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                {handle.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

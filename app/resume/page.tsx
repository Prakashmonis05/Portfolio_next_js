import React from "react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Prakash Portfolio",
  description: "View and download the professional resume of Prakash Monis - Full Stack Developer.",
};

export default function ResumePage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mb-2">
            My Resume
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 text-base">
            Professional overview and qualifications
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Resume Preview Card */}
        <div className="bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-zinc-800">
          <div className="relative w-full aspect-[1/1.4] sm:aspect-[1/1.3] overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800">
            <Image
              src="/resume/prakash_resume.jpg"
              alt="Prakash Monis Resume Preview"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          <a
            href="/resume/prakash_resume.pdf"
            download="prakash_resume.pdf"
            className="mt-6 block w-full py-4 text-center bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-base rounded-xl shadow-lg shadow-red-500/20 hover:-translate-y-0.5 transition-all"
          >
            📄 Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

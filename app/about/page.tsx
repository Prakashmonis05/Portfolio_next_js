import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Prakash Portfolio",
  description: "Get to know Prakash Monis - Full Stack Developer focused on building fast, scalable, and real-world web applications.",
};

export default function AboutPage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white text-black min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">
            About Me
          </h2>
          <p className="text-gray-500 text-base">
            Get to know me better
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
          <p>
            Hi, I’m <strong className="text-[#ff0000] font-semibold">Prakash</strong> — a full-stack developer focused on building{" "}
            <strong className="text-black">fast</strong>,{" "}
            <strong className="text-black">scalable</strong>, and{" "}
            <strong className="text-black">real-world</strong> web applications.
            I enjoy solving problems and turning ideas into clean, production-ready code.
          </p>

          <p>
            I work with <strong className="text-black">Python</strong>,{" "}
            <strong className="text-black">Flask</strong>,{" "}
            <strong className="text-black">PHP</strong>, and modern backend patterns.
            My priority is simple: write code that is <strong className="text-black">maintainable</strong>,{" "}
            <strong className="text-black">efficient</strong>, and easy to scale.
          </p>

          <p>
            I also strengthen my fundamentals in <strong className="text-[#ff0000] font-semibold">DSA</strong>, system thinking, and performance optimization —
            because good engineering is about long-term reliability, not just “making it work.”
          </p>

          <p>
            I also have strong hands-on experience with databases, including{" "}
            <strong className="text-black">MySQL</strong>,{" "}
            <strong className="text-black">SQLite</strong>,{" "}
            <strong className="text-black">PostgreSQL</strong>, and{" "}
            <strong className="text-black">MongoDB</strong>.
            I can design efficient schemas, write optimized queries, and build secure CRUD-based systems with proper validation.
            I understand key database concepts like <strong className="text-[#ff0000] font-semibold">normalization</strong>,{" "}
            <strong className="text-[#ff0000] font-semibold">indexes</strong>, and{" "}
            <strong className="text-[#ff0000] font-semibold">relationships</strong>.
          </p>

          {/* Highlight Box */}
          <div className="mt-10 p-6 sm:p-8 bg-gray-50 border-l-4 border-[#ff0000] rounded-r-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-black mb-2">
              What I Bring
            </h3>
            <p className="text-gray-700 font-medium text-base">
              Strong fundamentals • Clean architecture • Practical problem-solving • Growth mindset
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-base shadow-lg shadow-red-500/25 hover:-translate-y-0.5 transition-all"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import TypewriterRole from "@/components/TypewriterRole";
import { SOCIAL_HANDLES } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="w-full bg-white text-black">
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-80px)] flex items-center py-12 md:py-20 px-6 sm:px-12 bg-gradient-to-br from-white via-gray-50 to-red-50/20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Right Image Section */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            {/* Pulsing Glow Background */}
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-radial from-red-500/20 via-red-500/5 to-transparent animate-pulseGlow pointer-events-none" />

            {/* Profile Picture Frame */}
            <div className="relative w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full p-2 bg-gradient-to-br from-[#ff0000] to-[#cc0000] shadow-2xl shadow-red-500/30 z-10 border-4 border-[#ff0000]">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                <Image
                  src="/images/profile.png"
                  alt="Prakash Monis"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 260px, 360px"
                />
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="order-2 lg:order-1 flex flex-col text-center lg:text-left">
            <p className="text-gray-500 font-medium text-lg mb-2">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight mb-3">
              Prakash Monis
            </h1>
            
            <p className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 flex items-center justify-center lg:justify-start gap-2">
              And I&apos;m a <TypewriterRole />
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 max-w-2xl">
              Result-driven Full Stack Developer with over 1+ years of experience,
              specializing in modern web technologies and data structures. Proven track
              record of leveraging cutting-edge frameworks to build intuitive solutions.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl">
              I build clean, scalable web applications with a strong focus on performance, security, and
              maintainability. From backend APIs to modern UI, I deliver end-to-end solutions that solve real business problems and ship fast.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start mb-8">
              {SOCIAL_HANDLES.map((handle) => (
                <a
                  key={handle.name}
                  href={handle.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={handle.name}
                  className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-xl shadow-sm hover:-translate-y-1 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all text-black"
                >
                  {handle.icon}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/projects"
                className="px-8 py-3.5 rounded-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-base shadow-lg shadow-red-500/25 hover:-translate-y-0.5 transition-all text-center"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-transparent hover:bg-black hover:text-white text-black font-semibold text-base border-2 border-zinc-800 hover:-translate-y-0.5 transition-all text-center"
              >
                Hire Me
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-12 px-6 sm:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:-translate-y-1 transition-all shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-[#ff0000] mb-1">6+</p>
            <p className="font-semibold text-sm text-gray-800">Projects Built</p>
            <p className="text-xs text-gray-500">Full Stack & Web Apps</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:-translate-y-1 transition-all shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-[#ff0000] mb-1">10+</p>
            <p className="font-semibold text-sm text-gray-800">Technologies</p>
            <p className="text-xs text-gray-500">Python, PHP, React, SQL</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:-translate-y-1 transition-all shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-[#ff0000] mb-1">1+ Year</p>
            <p className="font-semibold text-sm text-gray-800">Experience</p>
            <p className="text-xs text-gray-500">Web Development</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 text-center hover:-translate-y-1 transition-all shadow-sm">
            <p className="text-3xl sm:text-4xl font-black text-[#ff0000] mb-1">100%</p>
            <p className="font-semibold text-sm text-gray-800">Dedication</p>
            <p className="text-xs text-gray-500">Clean & Scalable Code</p>
          </div>
        </div>
      </section>
    </div>
  );
}

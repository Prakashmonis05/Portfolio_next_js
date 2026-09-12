import React from "react";
import { SOCIAL_HANDLES, CONTACT_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-[#fff3f1] text-black pt-14 pb-8 border-t border-red-500/10 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl font-extrabold tracking-tight text-black">
            Portfolio
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Crafting digital experiences with passion and precision. Building clean, scalable web applications.
          </p>
          <div className="flex gap-2.5 mt-2 justify-center md:justify-start">
            {SOCIAL_HANDLES.map((handle) => (
              <a
                key={handle.name}
                href={handle.url}
                target="_blank"
                rel="noopener noreferrer"
                title={handle.name}
                className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-lg shadow-sm hover:-translate-y-1 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all text-black"
              >
                {handle.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h3 className="text-2xl font-extrabold tracking-tight text-black">
            Get In Touch
          </h3>
          <div className="flex flex-col gap-3 text-sm text-gray-600 items-center md:items-start">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white border border-gray-200 text-[#ff0000] flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                ✉️
              </span>
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white border border-gray-200 text-[#ff0000] flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                📞
              </span>
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white border border-gray-200 text-[#ff0000] flex items-center justify-center text-sm shadow-sm flex-shrink-0">
                📍
              </span>
              <span>{CONTACT_INFO.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Portfolio. Made with{" "}
        <span className="text-[#ff0000] font-bold">❤</span> by{" "}
        <strong className="text-black font-semibold">PRAKASH</strong>
      </div>
    </footer>
  );
}

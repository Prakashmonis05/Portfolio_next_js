import React from "react";
import type { Metadata } from "next";
import { CONTACT_INFO } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Contact - Prakash Portfolio",
  description: "Get in touch with Prakash Monis for freelance work, project discussions, or full-time opportunities.",
};

export default function ContactPage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white text-black min-h-[calc(100vh-80px)]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-base">
            Let’s discuss your next project
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">
              Let’s work together
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              I’m always open to discussing new projects, creative ideas, or opportunities to be part of something impactful.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md shadow-red-500/20">
                  📧
                </div>
                <div>
                  <strong className="block text-sm font-bold text-black">
                    Email
                  </strong>
                  <span className="text-sm text-gray-600">
                    {CONTACT_INFO.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md shadow-red-500/20">
                  📱
                </div>
                <div>
                  <strong className="block text-sm font-bold text-black">
                    Phone
                  </strong>
                  <span className="text-sm text-gray-600">
                    {CONTACT_INFO.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md shadow-red-500/20">
                  📍
                </div>
                <div>
                  <strong className="block text-sm font-bold text-black">
                    Location
                  </strong>
                  <span className="text-sm text-gray-600">
                    {CONTACT_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Actions */}
          <div className="p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-md">
            <h3 className="text-2xl font-bold text-black mb-2">
              Contact Me Directly
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Click below to message me instantly on WhatsApp or send an email.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <a
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 hover:-translate-y-0.5 transition-all text-center"
              >
                <span>💬</span> Message on WhatsApp
              </a>

              {/* Email Button */}
              <a
                href={CONTACT_INFO.emailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 hover:-translate-y-0.5 transition-all text-center"
              >
                <span>✉️</span> Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

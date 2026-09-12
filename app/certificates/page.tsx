import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { CERTIFICATES } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: "Certificates - Prakash Portfolio",
  description: "Verified credentials and certificates earned by Prakash Monis in Python, JavaScript, AI/ML, Data Science, and DevOps.",
};

export default function CertificatesPage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white text-black min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-2">
            Certifications
          </h2>
          <p className="text-gray-500 text-base">
            Professional credentials and verified achievements
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full h-48 bg-gray-100">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-black mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#ff0000] mb-3">
                    {cert.issuer} • {cert.year}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={cert.credential}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-full border-2 border-[#ff0000] text-[#ff0000] hover:bg-[#ff0000] hover:text-white font-semibold text-xs transition-all text-center"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

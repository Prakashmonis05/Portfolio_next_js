"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MOBILE_NAV = [
  { name: "Home", href: "/", icon: "🏠" },
  { name: "About", href: "/about", icon: "👤" },
  { name: "Projects", href: "/projects", icon: "💼" },
  { name: "Skills", href: "/skills", icon: "⚡" },
  { name: "Resume", href: "/resume", icon: "📄" },
  { name: "Certificates", href: "/certificates", icon: "🎓" },
  { name: "Handles", href: "/handles", icon: "🔗" },
  { name: "Contact", href: "/contact", icon: "✉️" },
];

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className={`fixed top-4 left-4 z-[1500] w-12 h-12 rounded-xl flex flex-col justify-center items-center gap-1.5 shadow-lg backdrop-blur-md border transition-all ${
          isOpen
            ? "bg-[#ff0000] border-[#ff0000] text-white"
            : "bg-white/95 border-black/10 text-black"
        }`}
      >
        <span
          className={`w-6 h-[2.5px] rounded-full transition-all duration-300 ${
            isOpen ? "bg-white rotate-45 translate-y-[6.5px]" : "bg-black"
          }`}
        />
        <span
          className={`w-6 h-[2.5px] rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0" : "bg-black"
          }`}
        />
        <span
          className={`w-6 h-[2.5px] rounded-full transition-all duration-300 ${
            isOpen ? "bg-white -rotate-45 -translate-y-[6.5px]" : "bg-black"
          }`}
        />
      </button>

      {/* Backdrop Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[1999] transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-over Sidebar Drawer */}
      <aside
        className={`fixed top-0 left-0 w-[300px] h-full bg-white text-black z-[2000] shadow-2xl transition-transform duration-300 ease-in-out border-r border-black/10 flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Profile Info */}
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 pt-16">
          <div className="flex items-center gap-3.5">
            <div className="w-14 h-14 rounded-full bg-[#ff0000] text-white font-bold text-2xl flex items-center justify-center shadow-md shadow-red-500/30 flex-shrink-0">
              P
            </div>
            <div>
              <h3 className="font-bold text-lg text-black leading-snug">
                Prakash Monis
              </h3>
              <p className="text-xs font-medium text-gray-500">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>

        {/* Menu Links */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {MOBILE_NAV.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                      isActive
                        ? "bg-red-500/10 text-[#ff0000] font-semibold border-l-4 border-[#ff0000]"
                        : "text-zinc-700 hover:bg-gray-100 text-black"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

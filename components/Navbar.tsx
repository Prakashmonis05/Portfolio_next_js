"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Resume", href: "/resume" },
  { name: "Certificates", href: "/certificates" },
  { name: "Handles", href: "/handles" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/10 shadow-sm py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 bg-[#ff0000] text-white font-extrabold text-lg rounded-xl flex items-center justify-center shadow-md shadow-red-500/20 group-hover:scale-105 transition-transform">
            P
          </div>
          <span className="font-bold text-lg text-black tracking-tight">
            Prakash Monis
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-1.5 lg:gap-3 list-none m-0 p-0">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg font-medium text-sm transition-all relative block ${
                    isActive
                      ? "text-[#ff0000] bg-red-500/10 font-semibold"
                      : "text-zinc-700 hover:text-[#ff0000] hover:bg-red-500/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#ff0000] rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

"use client";

import React, { useState, useEffect } from "react";

const ROLES = [
  "PHP Developer",
  "Python Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Software Developer",
];

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev + 1);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setCharIndex((prev) => prev - 1);
        }, 60);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        timer = setTimeout(() => {}, 400);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className="text-[#ff0000] font-bold border-r-4 border-[#ff0000] pr-1.5 animate-pulse inline-block min-h-[1.2em]">
      {ROLES[roleIndex].substring(0, charIndex)}
    </span>
  );
}

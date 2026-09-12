"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectSliderProps {
  images: string[];
  title: string;
}

export default function ProjectSlider({ images, title }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-gray-100 border border-gray-200 shadow-md group my-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex-grow-0 basis-full min-w-full h-[260px] sm:h-[380px] md:h-[420px] relative bg-[#f5f5f5] p-2 sm:p-4 flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <Image
                src={imgSrc}
                alt={`${title} screenshot ${idx + 1}`}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
                priority={idx === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#ff0000] text-white flex items-center justify-center backdrop-blur-sm transition-all z-10 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-sm"
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-[#ff0000] text-white flex items-center justify-center backdrop-blur-sm transition-all z-10 opacity-80 group-hover:opacity-100 hover:scale-110 shadow-sm"
          >
            &#10095;
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-[#ff0000] scale-125"
                    : "bg-white/60 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

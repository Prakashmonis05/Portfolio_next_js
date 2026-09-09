import React from "react";
import type { Metadata } from "next";
import { PROJECTS } from "@/data/portfolioData";
import ProjectSlider from "@/components/ProjectSlider";

export const metadata: Metadata = {
  title: "Projects - Prakash Portfolio",
  description: "Explore web development projects built by Prakash Monis, including E-vote, AgriReach, Expense Tracker, WordWander, and Shop X.",
};

export default function ProjectsPage() {
  return (
    <section className="py-16 px-6 sm:px-12 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mb-2">
            My Projects
          </h2>
          <p className="text-gray-500 dark:text-zinc-400 text-base">
            Detailed view of my work and implementations
          </p>
          <div className="w-16 h-1 bg-[#ff0000] mx-auto mt-3 rounded-full" />
        </div>

        {/* Project Blocks */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="pb-12 border-b border-gray-200 dark:border-zinc-800 last:border-0 last:pb-0"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-4">
                {project.title}
              </h3>

              {/* Interactive Screenshot Slider */}
              <ProjectSlider images={project.images} title={project.title} />

              {/* Description */}
              <p className="text-gray-600 dark:text-zinc-300 text-base leading-relaxed my-4">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 my-5">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 border border-gray-200 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-semibold text-sm transition-all"
                >
                  View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-semibold text-sm shadow-md shadow-red-500/20 transition-all"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

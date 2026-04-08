"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "Atlas Forecasting Engine",
    client: "Series B Fintech",
    year: "2025",
    gradient: "from-blue-900 via-indigo-900 to-stone-900",
  },
  {
    title: "Aurora Vision Platform",
    client: "Industrial Robotics",
    year: "2025",
    gradient: "from-amber-900 via-rose-900 to-stone-900",
  },
  {
    title: "Lumen Document Intelligence",
    client: "Global Insurer",
    year: "2024",
    gradient: "from-emerald-900 via-teal-900 to-stone-900",
  },
  {
    title: "Helix RAG Search",
    client: "Healthcare SaaS",
    year: "2024",
    gradient: "from-purple-900 via-violet-900 to-stone-900",
  },
]

const clients = [
  "STRIPE", "OPENAI", "NVIDIA", "PALANTIR", "ANTHROPIC",
  "DATABRICKS", "SCALE AI", "VERCEL", "FIGMA", "NOTION",
  "LINEAR", "RAMP", "MERCURY", "RETOOL", "RUNWAY",
]

export function Projects() {
  const [hovered, setHovered] = useState<number | null>(0)

  return (
    <section id="projects" className="bg-[#0e0e0e] text-stone-100 relative overflow-hidden">
      {/* Top edge accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-stone-700/40" />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <h2 className="font-light tracking-[-0.02em] text-stone-50 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Case Studies
          <sup className="text-xs align-super text-stone-500 ml-1 tracking-normal">[02]</sup>
        </h2>

        {/* Project list */}
        <div className="mt-10 sm:mt-16 lg:mt-20 border-t border-stone-800/80">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href="#"
              onMouseEnter={() => setHovered(i)}
              className={cn(
                "group flex items-center justify-between gap-4 md:gap-6 py-6 md:py-7 lg:py-9 border-b border-stone-800/80 transition-colors",
                hovered === i ? "text-stone-50" : "text-stone-600"
              )}
            >
              <div className="flex items-center gap-3 sm:gap-5 lg:gap-7 min-w-0 flex-1">
                {/* Tiny preview */}
                <div
                  className={cn(
                    "shrink-0 w-10 sm:w-16 lg:w-24 h-6 sm:h-9 lg:h-12 bg-gradient-to-br transition-all duration-500",
                    p.gradient,
                    hovered === i ? "opacity-100 scale-100" : "opacity-50 scale-95"
                  )}
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-light tracking-[-0.02em] text-xl sm:text-3xl md:text-5xl lg:text-6xl truncate">
                    {p.title}
                  </h3>
                  <div className="md:hidden mt-1 text-[10px] uppercase tracking-wider text-stone-500 truncate">
                    {p.client} · {p.year}
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-8 shrink-0 text-[11px] uppercase tracking-wider">
                <span className="text-stone-500">{p.client}</span>
                <span
                  className={cn(
                    "transition-all duration-300",
                    hovered === i ? "text-stone-300 translate-x-0" : "text-stone-600 -translate-x-2"
                  )}
                >
                  View Project →
                </span>
              </div>
              <span className="md:hidden text-stone-500 text-lg shrink-0">→</span>
            </a>
          ))}
        </div>

        {/* View all */}
        <div className="flex justify-center mt-14 lg:mt-16">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 border border-stone-700 bg-stone-900/50 px-6 py-2.5 text-[11px] uppercase tracking-wider text-stone-300 hover:bg-stone-800 hover:text-white transition-colors"
          >
            View All Works
          </a>
        </div>

        {/* Clients grid */}
        <div className="mt-16 sm:mt-20 lg:mt-28 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10 items-center justify-items-center">
          {clients.map((c) => (
            <div
              key={c}
              className="text-stone-500 text-[11px] md:text-sm font-semibold tracking-[0.15em] hover:text-stone-200 transition-colors"
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-stone-700/40" />
    </section>
  )
}

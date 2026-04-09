import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { caseStudies } from "@/lib/content"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Production AI work shipped by Overflow Labs — forecasting, computer vision, document intelligence, and RAG search across fintech, manufacturing, insurance, and healthcare.",
  keywords: [
    "AI case studies",
    "machine learning case studies",
    "production AI",
    "AI consulting portfolio",
    "RAG case study",
    "computer vision case study",
    "Overflow Labs",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Overflow Labs",
    description: "Production AI work shipped across fintech, manufacturing, insurance, and healthcare.",
    url: "/case-studies",
    type: "website",
  },
}

export default function CaseStudiesIndex() {
  return (
    <PageShell
      eyebrow="Case Studies"
      marker="2024 — 2026"
      title="Production AI, in plain sight"
      description="A selection of recent engagements. Every project here shipped to production, was measured against business outcomes, and is something the client lets us talk about."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {caseStudies.map((cs, i) => (
          <Link
            key={cs.slug}
            href={`/case-studies/${cs.slug}`}
            className="group flex flex-col"
          >
            <div
              className={`aspect-[4/3] bg-gradient-to-br ${cs.gradient} relative overflow-hidden border border-stone-300`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.12),transparent_60%)]" />
              <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id={`csg-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#csg-${i})`} />
              </svg>
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between text-[10px] uppercase tracking-[0.15em] text-white/80">
                <span>{cs.sector}</span>
                <span>{cs.year}</span>
              </div>
              <div className="absolute bottom-4 right-4 flex items-center justify-center size-10 border border-white/30 text-white group-hover:bg-white group-hover:text-stone-950 transition-colors">
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2">
                {cs.client}
              </div>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl lg:text-4xl leading-[1.1] group-hover:text-stone-600 transition-colors">
                {cs.title}
              </h2>
              <p className="mt-4 text-[13px] leading-[1.7] text-stone-700 max-w-md">
                {cs.summary}
              </p>
              <div className="mt-6 pt-5 border-t border-stone-300/70 flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] text-stone-500">
                <span>{cs.duration}</span>
                <span className="size-1 bg-stone-400" />
                <span>{cs.team}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

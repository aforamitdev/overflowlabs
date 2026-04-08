"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AiMockup } from "@/components/ai-mockup"

const variants = ["hero", "training", "agents", "embeddings"] as const

const items = [
  {
    title: "AI Strategy & Advisory",
    summary:
      "From C-suite to engineering org — we help leaders identify where AI compounds value and where it doesn't, then translate that into a concrete, sequenced plan.",
    solutions: [
      "AI opportunity audit & prioritisation",
      "Buy-vs-build technical due diligence",
      "Roadmaps with measurable KPIs",
      "Executive workshops & enablement",
    ],
  },
  {
    title: "Applied Machine Learning",
    summary:
      "End-to-end model development — research, training, evaluation, and deployment. Forecasting, vision, NLP, and multi-modal systems built for production reliability.",
    solutions: [
      "Forecasting & recommender systems",
      "Computer vision pipelines",
      "Domain-specific fine-tuning",
      "Model evaluation & monitoring",
    ],
  },
  {
    title: "LLM & Agentic Systems",
    summary:
      "Production RAG, copilots, and autonomous agents. We build the retrieval layer, orchestration, evals, and guardrails to make LLM systems trustworthy.",
    solutions: [
      "Retrieval-augmented generation (RAG)",
      "Agent orchestration & tool use",
      "Eval harnesses & regression tests",
      "Prompt engineering & guardrails",
    ],
  },
  {
    title: "Data & Platform Engineering",
    summary:
      "The unglamorous foundation that makes everything above possible. Pipelines, feature stores, vector databases, and the platform glue holding it all together.",
    solutions: [
      "ETL & streaming pipelines",
      "Feature & vector stores",
      "MLOps & CI/CD for models",
      "Cloud infrastructure as code",
    ],
  },
]

export function Expertise() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="expertise" className="pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <h2 className="font-light tracking-[-0.02em] text-stone-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Our Expertise
          <sup className="text-xs align-super text-stone-500 ml-1 tracking-normal">[03]</sup>
        </h2>

        <div className="mt-10 sm:mt-14 lg:mt-20 border-t border-stone-300/70">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.title} className="border-b border-stone-300/70">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 sm:gap-6 py-6 sm:py-7 lg:py-9 text-left"
                >
                  <h3 className="font-light tracking-[-0.02em] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-950 flex-1 min-w-0">
                    {item.title}
                  </h3>
                  <div className="shrink-0 flex size-9 items-center justify-center border border-stone-400 text-stone-700">
                    {isOpen ? <X className="size-4" /> : <Plus className="size-4" />}
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 pb-10" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid md:grid-cols-12 gap-8 lg:gap-12 pt-2">
                      {/* AI mockup */}
                      <div className="md:col-span-4 aspect-[4/3] relative overflow-hidden border border-stone-300">
                        <AiMockup variant={variants[i % variants.length]} />
                      </div>
                      {/* Copy */}
                      <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-stone-500 mb-3">
                            What we do
                          </div>
                          <p className="text-[13px] leading-[1.75] text-stone-700">
                            {item.summary}
                          </p>
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-stone-500 mb-3">
                            Solutions
                          </div>
                          <ul className="space-y-2">
                            {item.solutions.map((s) => (
                              <li
                                key={s}
                                className="flex items-start gap-2 text-[13px] text-stone-800"
                              >
                                <span className="mt-1.5 size-1 bg-stone-500 shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                          <a
                            href="/contact"
                            className="mt-6 inline-flex items-center gap-2 bg-stone-950 text-white text-[11px] uppercase tracking-wider px-5 py-2.5 hover:bg-stone-800 transition-colors"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import {
  Sparkles,
  Search,
  Bot,
  Workflow,
  Gauge,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI for SaaS Startups",
  description:
    "We help SaaS startups ship AI features their users actually want — RAG, copilots, agents, and platform foundations — without rebuilding the product or hiring a research team.",
  keywords: [
    "AI for SaaS",
    "AI features for startups",
    "RAG for SaaS",
    "AI copilots",
    "AI agents for startups",
    "AI consulting for startups",
    "make app AI ready",
    "Overflow Labs",
  ],
  alternates: { canonical: "/for-startups" },
  openGraph: {
    title: "AI for SaaS Startups — Overflow Labs",
    description:
      "Ship AI features your users actually want — without rebuilding the product or hiring a research team.",
    url: "/for-startups",
    type: "website",
  },
}

const capabilities = [
  {
    icon: Search,
    title: "Semantic search & RAG",
    body: "Turn your docs, tickets, and product data into a retrieval layer your users can ask questions of in plain English.",
  },
  {
    icon: Sparkles,
    title: "In-product copilots",
    body: "Context-aware assistants embedded where your users already work — drafting, summarising, and acting on their data.",
  },
  {
    icon: Bot,
    title: "Agents & workflow automation",
    body: "Multi-step agents that take real actions inside your product, with the guardrails and evals to make them trustworthy.",
  },
  {
    icon: Workflow,
    title: "Smart onboarding & defaults",
    body: "Replace static forms and empty states with models that infer intent and pre-fill the boring parts.",
  },
  {
    icon: Gauge,
    title: "Usage intelligence",
    body: "Forecasting, anomaly detection, and recommendations baked into the dashboards your customers already pay for.",
  },
  {
    icon: ShieldCheck,
    title: "Evals, guardrails & cost control",
    body: "The unglamorous infra that keeps an LLM feature from regressing, leaking data, or burning your margin overnight.",
  },
]

const sprints = [
  {
    tag: "Sprint 01",
    name: "AI Readiness Audit",
    duration: "2 weeks · fixed fee",
    summary:
      "We map your product, data, and users to the highest-leverage AI surfaces — and tell you honestly which ones are real and which are demos.",
    deliverables: [
      "Opportunity map ranked by impact + effort",
      "Data & infra gap analysis",
      "Reference architecture for the top 2 bets",
      "Sequenced 90-day build plan",
    ],
  },
  {
    tag: "Sprint 02",
    name: "Prototype to Production",
    duration: "4 — 8 weeks",
    summary:
      "Ship one AI feature end-to-end. We embed with your team, build the retrieval and orchestration layers, and harden it until you can put it in front of paying customers.",
    deliverables: [
      "Production RAG, copilot, or agent feature",
      "Eval harness wired into your CI",
      "Cost, latency, and quality dashboards",
      "Runbook handed off to your engineers",
    ],
  },
  {
    tag: "Sprint 03",
    name: "AI Platform Foundations",
    duration: "6 — 12 weeks",
    summary:
      "The platform layer underneath everything else — vector stores, feature pipelines, prompt versioning, model gateways — so your team can ship AI features without reinventing infra each time.",
    deliverables: [
      "Vector + feature store deployed in your cloud",
      "Model gateway with provider failover",
      "Prompt + dataset versioning",
      "Internal SDK for your product engineers",
    ],
  },
]

const steps = [
  {
    n: "01",
    title: "Listen",
    body: "A working session with your founders and product team. We come back with a one-pager: what's worth building, what isn't, and why.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "A focused build sprint against real user data. The goal isn't a demo — it's something you can ship behind a flag in week three.",
  },
  {
    n: "03",
    title: "Harden",
    body: "Evals, guardrails, observability, and cost controls. The boring work that decides whether an AI feature survives contact with users.",
  },
  {
    n: "04",
    title: "Hand off",
    body: "Documentation, runbooks, and pairing with your engineers until they own it. No vendor lock-in, no perpetual retainer.",
  },
]

const stack = [
  "OpenAI",
  "Anthropic",
  "Vercel AI SDK",
  "LangChain",
  "LlamaIndex",
  "Pinecone",
  "Weaviate",
  "pgvector",
  "Modal",
  "Replicate",
  "Braintrust",
  "LangSmith",
]

const proof = [
  { value: "3 wks", label: "From kickoff to first feature in production" },
  { value: "70%", label: "Average reduction in time-to-value for end users" },
  { value: "12+", label: "SaaS companies shipped to production" },
]

export default function ForStartupsPage() {
  return (
    <PageShell
      eyebrow="For SaaS Startups"
      marker="[05]"
      title="Make your app AI-ready — without betting the company on it."
      description="We help Series Seed to Series B SaaS teams ship the AI features their users actually want. No moonshots, no research projects — just production work that moves retention, activation, and pricing power."
    >
      {/* Why now */}
      <section className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-16 sm:pb-20 lg:pb-28 border-b border-stone-300/70">
        <div className="lg:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
            Why now
          </div>
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Your users already expect AI inside your product.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[14px] leading-[1.8] text-stone-700">
          <p>
            Two years ago, an AI feature was a differentiator. Today it's the
            baseline. The startups winning category are the ones turning their
            product surface into something that thinks alongside the user —
            answering questions, drafting work, and quietly automating the
            grind.
          </p>
          <p>
            But most SaaS teams don't have a research org, a vector database
            specialist, or six months of runway to figure out evals from
            scratch. That's the gap we fill. We've shipped retrieval, agent,
            and copilot features into a dozen production SaaS apps — and we
            bring the playbook with us.
          </p>
          <p>
            We're not a body shop and we're not a model lab. We're a small
            team of engineers who plug into yours, ship the thing, and hand
            you the keys.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            What &ldquo;AI-ready&rdquo; actually means
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [a] Capabilities
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone-300/70">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="border-r border-b border-stone-300/70 p-6 sm:p-8 lg:p-10"
            >
              <c.icon className="size-5 text-stone-700" strokeWidth={1.5} />
              <h3 className="mt-6 text-lg sm:text-xl font-light tracking-[-0.01em] text-stone-950">
                {c.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-stone-600">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sprints */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            How we engage
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [b] Packaged sprints
          </div>
        </div>
        <div className="border-t border-stone-300/70">
          {sprints.map((s) => (
            <div
              key={s.name}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-stone-300/70"
            >
              <div className="lg:col-span-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3">
                  {s.tag} · {s.duration}
                </div>
                <h3 className="font-light tracking-[-0.01em] text-stone-950 text-2xl sm:text-3xl lg:text-4xl leading-[1.05]">
                  {s.name}
                </h3>
              </div>
              <p className="lg:col-span-5 text-[14px] leading-[1.8] text-stone-700">
                {s.summary}
              </p>
              <ul className="lg:col-span-4 space-y-2.5">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-[13px] text-stone-800"
                  >
                    <span className="mt-1.5 size-1 bg-stone-500 shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            The process
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [c] How it runs
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-300/70 border border-stone-300/70">
          {steps.map((s) => (
            <div key={s.n} className="bg-[#ece6d6] p-6 sm:p-8 lg:p-10">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                {s.n}
              </div>
              <h3 className="mt-6 text-xl font-light tracking-[-0.01em] text-stone-950">
                {s.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-stone-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof / numbers */}
      <section className="mt-16 sm:mt-20 lg:mt-28 bg-[#0e0e0e] text-stone-100 -mx-5 sm:-mx-6 lg:-mx-10">
        <div className="px-5 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-10">
            What we've shipped
          </div>
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-6">
            {proof.map((p) => (
              <div key={p.label} className="border-t border-stone-700/70 pt-6">
                <div className="font-light tracking-[-0.02em] text-stone-50 text-5xl sm:text-6xl lg:text-7xl">
                  {p.value}
                </div>
                <div className="mt-4 text-[12px] leading-[1.7] text-stone-400 max-w-[20ch]">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
              [d] Stack
            </div>
            <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              We meet your stack where it lives.
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-[1.8] text-stone-700">
              We deploy inside your cloud, your repo, and your CI. No
              proprietary runtime, no lock-in. If you're already on a
              provider, we'll use it.
            </p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 border-t border-l border-stone-300/70 self-start">
            {stack.map((s) => (
              <div
                key={s}
                className="border-r border-b border-stone-300/70 px-4 py-6 text-[11px] uppercase tracking-[0.15em] text-stone-700 text-center"
              >
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 sm:mt-20 lg:mt-28 border-t border-stone-300/70 pt-14 sm:pt-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <h2 className="lg:col-span-8 font-light tracking-[-0.025em] text-stone-950 text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Bring us the messiest version of your idea.
          </h2>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-stone-950 text-white text-[11px] uppercase tracking-[0.18em] px-7 py-4 hover:bg-stone-800 transition-colors"
            >
              Start a conversation
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </Link>
            <p className="mt-4 text-[11px] text-stone-500 leading-[1.7]">
              Or email{" "}
              <a
                href="mailto:hello@overflowlabs.org"
                className="underline hover:text-stone-950"
              >
                hello@overflowlabs.org
              </a>
              . A partner replies within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

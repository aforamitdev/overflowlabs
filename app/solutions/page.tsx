import type { Metadata } from "next"
import Link from "next/link"
import {
  Brain,
  Plug,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Layers,
  RefreshCw,
  Terminal,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"
import {
  PipelineDiagram,
  McpDiagram,
  ChatDiagram,
  ProductivityChart,
} from "@/components/solutions-graphics"

export const metadata: Metadata = {
  title: "AI Business Solutions",
  description:
    "End-to-end AI enablement for modern businesses — from AI-ready infrastructure and MCP tooling to ChatGPT and chat app integrations that slot into the tools your team already uses.",
  keywords: [
    "AI business solutions",
    "AI enablement",
    "MCP tools",
    "ChatGPT integration",
    "AI for business",
    "enterprise AI solutions",
    "chat app AI",
    "Overflow Labs",
  ],
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "AI Business Solutions — Overflow Labs",
    description:
      "AI enablement, MCP tooling, and chat app integrations for modern businesses.",
    url: "/solutions",
    type: "website",
  },
}

const pillars = [
  {
    id: "01",
    icon: Brain,
    tag: "AI Enablement",
    title: "We make your business run on AI — end to end.",
    body: "Most businesses know they need AI. Few know where it actually compounds. We shadow how your team works — the queues, the decisions, the bottlenecks — then build the AI layer that absorbs them. Not a pilot. Not a dashboard. A production system your people use every day.",
    capabilities: [
      "Operations audit & opportunity mapping",
      "Custom model training on your data",
      "Internal AI assistant for your team",
      "Workflow automation & decision support",
      "AI governance, policy & change management",
      "Continuous monitoring & model refresh",
    ],
    accent: "border-t-2 border-stone-950",
    Diagram: PipelineDiagram,
    diagramLabel: "Five-stage AI enablement pipeline",
  },
  {
    id: "02",
    icon: Plug,
    tag: "MCP Tools & Solutions",
    title: "Your data, spoken fluently by every AI model.",
    body: "Model Context Protocol (MCP) is the open standard that lets AI models read and act on your business data — databases, CRMs, file stores, internal APIs — without leaking credentials or violating data boundaries. We build the MCP servers that make your company knowable to any model: Claude, GPT-4, Gemini, or whatever comes next.",
    capabilities: [
      "Custom MCP server design & deployment",
      "Database & CRM connectors (Postgres, Salesforce, HubSpot)",
      "File system & document store integration",
      "Internal API tool exposure via MCP",
      "Authentication, rate-limiting & audit logging",
      "Multi-model MCP gateway for Claude, GPT-4, Gemini",
    ],
    accent: "border-t-2 border-stone-700",
    Diagram: McpDiagram,
    diagramLabel: "MCP architecture — data sources, gateway, and AI outputs",
  },
  {
    id: "03",
    icon: MessageSquare,
    tag: "Chat App Integration",
    title: "AI assistants inside the apps your team lives in.",
    body: "An AI in a separate tab gets ignored. We drop GPT-4, Claude, and custom models straight into Slack, Teams, WhatsApp, and your own product chat — so answers, summaries, and actions happen inside the tools your people open a hundred times a day.",
    capabilities: [
      "ChatGPT & Claude plugins and connectors",
      "Slack & Microsoft Teams AI assistants",
      "WhatsApp & SMS AI bot deployment",
      "In-product chat copilot (React, Webflow, custom)",
      "Knowledge-base RAG wired into every channel",
      "Unified conversation history & analytics",
    ],
    accent: "border-t-2 border-stone-500",
    Diagram: ChatDiagram,
    diagramLabel: "One AI brain, every channel — Slack, ChatGPT, MS Teams",
  },
]

const process = [
  {
    n: "01",
    title: "Discover",
    body: "We spend time with your team to map existing tools, data, and workflows before touching any code.",
  },
  {
    n: "02",
    title: "Design",
    body: "Architecture, data contracts, integration points, and the human workflow around every AI touchpoint.",
  },
  {
    n: "03",
    title: "Build",
    body: "Iterative delivery — working software every two weeks, validated against real users before we move on.",
  },
  {
    n: "04",
    title: "Connect",
    body: "Wire into your existing stack: ERP, CRM, chat apps, and data warehouse — no forklift upgrade needed.",
  },
  {
    n: "05",
    title: "Measure",
    body: "Evals, cost dashboards, and business metrics tracked from day one so you know the investment is paying off.",
  },
  {
    n: "06",
    title: "Hand off",
    body: "Your team leaves owning the system — runbooks, training, and direct support from the engineers who built it.",
  },
]

const integrations = [
  { group: "Chat & Comms", items: ["Slack", "Microsoft Teams", "WhatsApp", "Discord", "Intercom"] },
  { group: "AI Models", items: ["OpenAI / ChatGPT", "Anthropic / Claude", "Google Gemini", "Mistral", "Llama 3"] },
  { group: "MCP Connectors", items: ["PostgreSQL", "Salesforce", "HubSpot", "Notion", "Google Drive"] },
  { group: "Infrastructure", items: ["AWS", "GCP", "Azure", "Vercel", "Cloudflare Workers"] },
]

const reasons = [
  {
    icon: Zap,
    title: "Faster than hiring",
    body: "A senior AI team in weeks, not months of recruiting. We bring the playbook; you focus on the outcome.",
  },
  {
    icon: Shield,
    title: "Your data stays yours",
    body: "Every system deploys inside your cloud boundary. No vendor training on your data, no third-party retention.",
  },
  {
    icon: Layers,
    title: "No lock-in",
    body: "We build on open standards (MCP, REST, standard SDKs). Swap models, swap providers — no rebuild.",
  },
  {
    icon: RefreshCw,
    title: "Maintained, not abandoned",
    body: "Models drift, APIs change, usage grows. We offer ongoing SLAs so your AI keeps working as your business does.",
  },
  {
    icon: Terminal,
    title: "Engineered, not demo-ware",
    body: "Everything we ship has evals, error handling, observability, and fallbacks. Built for production from day one.",
  },
  {
    icon: CheckCircle2,
    title: "Outcome-based pricing",
    body: "Fixed-fee sprints scoped to deliverables — not an open-ended retainer that grows with scope.",
  },
]

export default function SolutionsPage() {
  return (
    <PageShell
      eyebrow="Solutions"
      marker="[07]"
      title="We make your business AI-native — in weeks, not years."
      description="Three things every modern business needs: AI built into its operations, MCP tools that connect AI safely to company data, and AI assistants inside the chat apps the team already uses. We ship all three."
    >
      {/* Big statement overview */}
      <section className="pb-16 sm:pb-20 lg:pb-28 border-b border-stone-300/70">
        <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-8 sm:mb-10">
          What we ship
        </div>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {[
            {
              n: "01",
              head: "AI Enablement",
              punch: "Custom AI built into your operations — not bolted on.",
            },
            {
              n: "02",
              head: "MCP Tools",
              punch: "Secure bridge from your data to any AI model on the market.",
            },
            {
              n: "03",
              head: "Chat Integrations",
              punch: "AI that lives inside Slack, Teams, ChatGPT — where work happens.",
            },
          ].map((item) => (
            <div key={item.n} className="border-t border-stone-950 pt-6">
              <div className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-4">
                {item.n} — {item.head}
              </div>
              <p className="font-light tracking-[-0.015em] text-stone-950 text-xl sm:text-2xl lg:text-3xl leading-[1.15]">
                {item.punch}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Three pillars */}
      <section className="pt-16 sm:pt-20 lg:pt-28 space-y-0">
        {pillars.map((p) => (
          <div
            key={p.id}
            className={`grid lg:grid-cols-12 gap-8 lg:gap-16 py-14 sm:py-16 lg:py-20 border-b border-stone-300/70 ${p.accent}`}
          >
            {/* Left — label + icon */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 border border-stone-300 flex items-center justify-center text-stone-700 shrink-0">
                  <p.icon className="size-4" strokeWidth={1.5} />
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                  {p.tag}
                </div>
              </div>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
                {p.title}
              </h2>
              <p className="mt-5 text-[13px] leading-[1.8] text-stone-700">
                {p.body}
              </p>
            </div>

            {/* Right — capabilities */}
            <div className="lg:col-span-8 lg:col-start-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-6">
                What&apos;s included
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {p.capabilities.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <span className="mt-2 size-1 bg-stone-500 shrink-0" />
                    <span className="text-[13px] leading-[1.7] text-stone-800">{c}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 bg-stone-950 text-white text-[11px] uppercase tracking-[0.18em] px-5 py-2.5 hover:bg-stone-800 transition-colors"
              >
                Talk to us about this
                <ArrowRight className="size-3.5" strokeWidth={1.5} />
              </Link>
            </div>

            {/* Full-width diagram */}
            <div className="lg:col-span-12 mt-4">
              <div className="border border-stone-300/70 bg-[#fbfaf4] p-6 sm:p-8 lg:p-10">
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-400 mb-6">
                  {p.diagramLabel}
                </div>
                <p.Diagram />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            How we deliver
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [a] Process
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-300/70 border border-stone-300/70">
          {process.map((s) => (
            <div key={s.n} className="bg-[#ece6d6] p-6 sm:p-8 lg:p-10">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                {s.n}
              </div>
              <h3 className="mt-5 text-xl font-light tracking-[-0.01em] text-stone-950">
                {s.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-stone-600">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            What we connect to
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [b] Integrations
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-stone-300/70">
          {integrations.map((group) => (
            <div key={group.group} className="border-r border-b border-stone-300/70 p-6 sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-5">
                {group.group}
              </div>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] text-stone-800 flex items-center gap-2.5"
                  >
                    <span className="size-1 bg-stone-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Overflow */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            Why Overflow Labs
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [c] Differentiators
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone-300/70">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="border-r border-b border-stone-300/70 p-6 sm:p-8 lg:p-10"
            >
              <r.icon className="size-5 text-stone-700" strokeWidth={1.5} />
              <h3 className="mt-5 text-lg font-light tracking-[-0.01em] text-stone-950">
                {r.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-stone-600">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark proof strip */}
      <section className="mt-16 sm:mt-20 lg:mt-28 bg-[#0e0e0e] text-stone-100 -mx-5 sm:-mx-6 lg:-mx-10">
        <div className="px-5 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
          {/* Bar chart */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2">
                  [d] Impact metrics
                </div>
                <h3 className="font-light tracking-[-0.02em] text-stone-100 text-2xl sm:text-3xl lg:text-4xl">
                  Before vs. after AI enablement
                </h3>
              </div>
            </div>
            {/* Chart on dark bg — wrap in light panel */}
            <div className="bg-[#161614] border border-stone-800/60 p-6 sm:p-8 lg:p-10">
              <ProductivityChart />
              <p className="mt-4 text-[10px] tracking-[0.1em] text-stone-600 uppercase text-center">
                Typical results across Overflow Labs engagements · Index 0–100
              </p>
            </div>
          </div>

          {/* Numbers + CTA */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end border-t border-stone-800/60 pt-12 lg:pt-16">
            <div className="lg:col-span-6">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-6">
                By the numbers
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { v: "3 wks", l: "Average time from kickoff to first production AI feature" },
                  { v: "12+", l: "Businesses made AI-ready across SaaS, enterprise, and ops" },
                  { v: "40+", l: "MCP connectors and chat integrations shipped to date" },
                ].map((s) => (
                  <div key={s.l} className="border-t border-stone-700/70 pt-5">
                    <div className="font-light tracking-[-0.02em] text-stone-50 text-3xl sm:text-4xl lg:text-5xl">
                      {s.v}
                    </div>
                    <div className="mt-3 text-[11px] leading-[1.6] text-stone-400">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="font-light tracking-[-0.02em] text-stone-50 text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
                Ready to make your business AI-enabled?
              </h3>
              <p className="mt-5 text-[13px] leading-[1.8] text-stone-400">
                Start with a free 30-minute scoping call. We&apos;ll tell you honestly what&apos;s worth building, what&apos;s not, and how fast we can get you there.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 bg-white text-stone-950 text-[11px] uppercase tracking-[0.18em] px-7 py-4 hover:bg-stone-100 transition-colors"
              >
                Book a scoping call
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mt-16 sm:mt-20 lg:mt-28 border-t border-stone-300/70 pt-14 sm:pt-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <h2 className="lg:col-span-8 font-light tracking-[-0.025em] text-stone-950 text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Your competitors ship AI next quarter.
            <br />
            You can ship it this one.
          </h2>
          <div className="lg:col-span-4 lg:text-right space-y-3">
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-stone-950 text-white text-[11px] uppercase tracking-[0.18em] px-7 py-4 hover:bg-stone-800 transition-colors"
              >
                Start the conversation
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </div>
            <p className="text-[11px] text-stone-500 leading-[1.7]">
              Or email{" "}
              <a href="mailto:hello@overflowlabs.org" className="underline hover:text-stone-950">
                hello@overflowlabs.org
              </a>
              . Partner replies within 24 hrs.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

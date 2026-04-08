import Link from "next/link"
import {
  Microscope,
  Workflow,
  Cpu,
  GitBranch,
  LineChart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "For Enterprise — Overflow Labs",
  description:
    "We embed with operations teams, study how work actually gets done, and ship custom AI systems that compress the busywork — so your people can focus on the work that compounds.",
}

const principles = [
  {
    icon: Microscope,
    title: "Operations first, models second",
    body: "We start by walking the floor — sitting with the people doing the work, mapping every handoff and rework loop. The model is whatever the workflow needs; sometimes a 7B classifier earns more than a frontier LLM.",
  },
  {
    icon: Workflow,
    title: "Streamline before you automate",
    body: "Automating a broken process scales the dysfunction. We redesign the workflow first, then introduce AI at the points where humans were always the bottleneck.",
  },
  {
    icon: Cpu,
    title: "Custom over off-the-shelf",
    body: "Generic copilots leave value on the table. We build solutions tuned to your data, your taxonomy, and your edge cases — because that's where the productivity actually lives.",
  },
  {
    icon: GitBranch,
    title: "Built into your systems",
    body: "AI that lives in a separate tab gets ignored. We integrate with your ERP, CRM, ticketing, and data warehouse so the assistance shows up inside the tools your team already opens every day.",
  },
  {
    icon: LineChart,
    title: "Measured, not assumed",
    body: "Every engagement starts with a baseline — cycle time, error rate, cost per case — and ends with the same metrics re-measured. If the numbers don't move, we didn't ship.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance, audit, and control",
    body: "SOC 2, HIPAA, GDPR, internal data residency — we deploy inside your boundary, with role-based access, audit trails, and human-in-the-loop where regulation requires it.",
  },
]

const phases = [
  {
    tag: "Phase 01",
    name: "Operations Study",
    duration: "3 — 4 weeks",
    summary:
      "We embed with one business unit, shadow the work, and instrument the process. The output is a map of where time and money actually go — not where the org chart says they go.",
    deliverables: [
      "Workflow map with cycle times and rework loops",
      "Inventory of tools, data sources, and decision points",
      "Ranked opportunity register with ROI estimates",
      "Risk, compliance, and change-management read",
    ],
  },
  {
    tag: "Phase 02",
    name: "Custom Solution Design",
    duration: "2 — 3 weeks",
    summary:
      "From the opportunity register, we pick the bets with the cleanest ROI and design the end-state. Architecture, data contracts, integration points, and the human workflow around the model.",
    deliverables: [
      "Reference architecture and data flow diagrams",
      "Build-vs-buy decisions with vendor evaluations",
      "Sequenced delivery plan with gating metrics",
      "Stakeholder sign-off package",
    ],
  },
  {
    tag: "Phase 03",
    name: "Build & Integrate",
    duration: "8 — 16 weeks",
    summary:
      "We build the solution inside your environment, wire it into your existing stack, and roll it out with the team that will use it. Pilot first, then expand once the metrics confirm the bet.",
    deliverables: [
      "Production AI system deployed in your cloud",
      "Integrations with ERP / CRM / data warehouse",
      "Eval suite, observability, and cost dashboards",
      "Training sessions and runbooks for ops + IT",
    ],
  },
  {
    tag: "Phase 04",
    name: "Operate & Compound",
    duration: "Ongoing — optional",
    summary:
      "We stay close while the system beds in, retrain as your data drifts, and help you replicate the playbook across the next business unit. By month six, your team owns it.",
    deliverables: [
      "Monthly drift, quality, and ROI reviews",
      "Model retraining and prompt regression",
      "Enablement for adjacent teams",
      "Hand-off to internal AI/platform owners",
    ],
  },
]

const useCases = [
  {
    sector: "Operations",
    title: "Back-office throughput",
    body: "Document intake, classification, extraction, and routing — the unsexy 60% of ops work that swallows headcount. We've cut handling time by 70% in claims, AP, and KYC pipelines.",
  },
  {
    sector: "Customer support",
    title: "Tier-1 deflection & agent assist",
    body: "RAG copilots sitting inside the agent desktop, drafting replies grounded in your knowledge base. Plus deflection at the contact form for the cases that don't need a human at all.",
  },
  {
    sector: "Sales & RevOps",
    title: "Pipeline intelligence",
    body: "Forecasts that actually correlate with cash, deal-risk scoring, and account research generated from the same data your reps already log — without asking them to log more.",
  },
  {
    sector: "Engineering",
    title: "Internal developer copilots",
    body: "Code search, incident triage, and runbook agents trained on your monorepo and your postmortems. The kind of context generic copilots can't reach.",
  },
  {
    sector: "Compliance & risk",
    title: "Policy-aware review",
    body: "LLM systems that read contracts, flag clauses, and explain themselves in language the legal team will sign off on — with a human-in-the-loop on every decision that matters.",
  },
  {
    sector: "Supply chain",
    title: "Demand & inventory forecasting",
    body: "Hybrid statistical + ML forecasting that beats the spreadsheet, plus anomaly detection on the noisy signals nobody has time to watch.",
  },
]

const proof = [
  { value: "70%", label: "Reduction in manual handling time on document workflows" },
  { value: "4×", label: "Throughput on a tier-1 support queue after agent assist" },
  { value: "$2.4M", label: "Annualised cost reclaimed across one ops org in year one" },
]

const faqs = [
  {
    q: "Where does the AI actually run?",
    a: "Inside your cloud account — AWS, GCP, or Azure — using your existing identity, secrets, and observability. We don't run a separate SaaS layer between your data and the model.",
  },
  {
    q: "What about our data leaving the building?",
    a: "It doesn't have to. We'll architect to your data residency and provider constraints, including private VPC endpoints, on-prem inference, and BYO-key arrangements with model providers.",
  },
  {
    q: "How do you handle change management?",
    a: "Most failed enterprise AI projects fail at adoption, not at the model. We work with your ops leads from week one, ship narrow pilots, and only scale once the team using it asks us to.",
  },
  {
    q: "Do you replace our team or augment them?",
    a: "Augment. We embed alongside your engineers and operators, transfer the work back to them, and leave you with the artifacts to keep building once we step away.",
  },
]

export default function ForEnterprisePage() {
  return (
    <PageShell
      eyebrow="For Enterprise"
      marker="[06]"
      title="We study how your business actually runs — then engineer the AI that makes it run faster."
      description="Overflow Labs embeds with enterprise operations teams, maps the work end-to-end, and ships custom AI systems that compress the busywork. No platform license, no off-the-shelf copilot — just bespoke automation built around the way your company actually works."
    >
      {/* Premise */}
      <section className="grid lg:grid-cols-12 gap-10 lg:gap-16 pb-16 sm:pb-20 lg:pb-28 border-b border-stone-300/70">
        <div className="lg:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
            The premise
          </div>
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Productivity hides in the workflow, not the model.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[14px] leading-[1.8] text-stone-700">
          <p>
            Most enterprises have already bought a copilot license, signed
            with a model provider, and stood up a centre of excellence. And
            most are still waiting for the productivity number to move.
          </p>
          <p>
            The reason is almost always the same: the AI was bolted onto a
            workflow nobody bothered to study first. Generic tools land on
            top of bespoke processes, miss the edge cases, and quietly become
            a tab nobody opens.
          </p>
          <p>
            We do it the other way around. We start by sitting next to the
            people doing the work — for days, not hours — until we
            understand every queue, handoff, exception, and rework loop.
            Then, and only then, do we design the AI system that absorbs
            them. The result is custom, integrated, and measurable from week
            one.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            How we think about it
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [a] Principles
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-stone-300/70">
          {principles.map((p) => (
            <div
              key={p.title}
              className="border-r border-b border-stone-300/70 p-6 sm:p-8 lg:p-10"
            >
              <p.icon className="size-5 text-stone-700" strokeWidth={1.5} />
              <h3 className="mt-6 text-lg sm:text-xl font-light tracking-[-0.01em] text-stone-950">
                {p.title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.75] text-stone-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement phases */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            How an engagement runs
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [b] Phases
          </div>
        </div>
        <div className="border-t border-stone-300/70">
          {phases.map((p) => (
            <div
              key={p.name}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 py-10 lg:py-14 border-b border-stone-300/70"
            >
              <div className="lg:col-span-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3">
                  {p.tag} · {p.duration}
                </div>
                <h3 className="font-light tracking-[-0.01em] text-stone-950 text-2xl sm:text-3xl lg:text-4xl leading-[1.05]">
                  {p.name}
                </h3>
              </div>
              <p className="lg:col-span-5 text-[14px] leading-[1.8] text-stone-700">
                {p.summary}
              </p>
              <ul className="lg:col-span-4 space-y-2.5">
                {p.deliverables.map((d) => (
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

      {/* Use cases */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-14">
          <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl">
            Where this lands inside the org
          </h2>
          <div className="hidden sm:block text-[10px] uppercase tracking-[0.18em] text-stone-500">
            [c] Use cases
          </div>
        </div>
        <div className="grid md:grid-cols-2 border-t border-l border-stone-300/70">
          {useCases.map((u) => (
            <div
              key={u.title}
              className="border-r border-b border-stone-300/70 p-6 sm:p-8 lg:p-12"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                {u.sector}
              </div>
              <h3 className="mt-4 font-light tracking-[-0.01em] text-stone-950 text-2xl sm:text-3xl">
                {u.title}
              </h3>
              <p className="mt-4 text-[13px] leading-[1.8] text-stone-600 max-w-md">
                {u.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Proof strip */}
      <section className="mt-16 sm:mt-20 lg:mt-28 bg-[#0e0e0e] text-stone-100 -mx-5 sm:-mx-6 lg:-mx-10">
        <div className="px-5 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-10">
            What the numbers look like
          </div>
          <div className="grid sm:grid-cols-3 gap-10 sm:gap-6">
            {proof.map((p) => (
              <div key={p.label} className="border-t border-stone-700/70 pt-6">
                <div className="font-light tracking-[-0.02em] text-stone-50 text-5xl sm:text-6xl lg:text-7xl">
                  {p.value}
                </div>
                <div className="mt-4 text-[12px] leading-[1.7] text-stone-400 max-w-[24ch]">
                  {p.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-16 sm:pt-20 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
              [d] FAQ
            </div>
            <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
              The questions enterprise buyers actually ask.
            </h2>
          </div>
          <div className="lg:col-span-8 border-t border-stone-300/70">
            {faqs.map((f) => (
              <div
                key={f.q}
                className="border-b border-stone-300/70 py-8 grid sm:grid-cols-12 gap-4"
              >
                <h3 className="sm:col-span-5 text-[15px] font-medium text-stone-950 tracking-[-0.01em]">
                  {f.q}
                </h3>
                <p className="sm:col-span-7 text-[13px] leading-[1.8] text-stone-700">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 sm:mt-20 lg:mt-28 border-t border-stone-300/70 pt-14 sm:pt-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <h2 className="lg:col-span-8 font-light tracking-[-0.025em] text-stone-950 text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
            Show us one process you'd pay to never run again.
          </h2>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-stone-950 text-white text-[11px] uppercase tracking-[0.18em] px-7 py-4 hover:bg-stone-800 transition-colors"
            >
              Book an operations study
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

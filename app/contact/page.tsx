import { Mail, Phone, MapPin, Calendar } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Contact — Overflow Labs",
  description: "Tell us about your project. We reply to every enquiry within 24 hours.",
}

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@overflowlabs.org",
    href: "mailto:hello@overflowlabs.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (415) 555 0199",
    href: "tel:+14155550199",
  },
  {
    icon: Calendar,
    label: "Schedule",
    value: "Book a 30-minute intro call",
    href: "https://cal.com/overflowlabs",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "548 Market St, Suite 200, San Francisco",
    href: "#",
  },
]

const projectTypes = [
  "AI Strategy Audit",
  "Build a RAG system",
  "ML feasibility study",
  "Computer vision pipeline",
  "Agent prototype",
  "Fine-tuning",
  "Data infrastructure",
  "Something else",
]

const budgets = ["< $50k", "$50k — $150k", "$150k — $500k", "$500k+", "Not sure yet"]

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      marker="[04]"
      title="Tell us what you're building"
      description="Every enquiry lands in front of a partner — not a sales team. We reply within 24 hours, in plain language, with whether we think we're a fit."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Form */}
        <form className="lg:col-span-8 flex flex-col gap-10">
          <Field label="Name" required>
            <input
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full bg-transparent border-b border-stone-400/60 py-3 text-lg sm:text-xl font-light text-stone-950 placeholder:text-stone-400 focus:outline-none focus:border-stone-950 transition-colors"
            />
          </Field>

          <Field label="Work email" required>
            <input
              type="email"
              required
              placeholder="jane@company.com"
              className="w-full bg-transparent border-b border-stone-400/60 py-3 text-lg sm:text-xl font-light text-stone-950 placeholder:text-stone-400 focus:outline-none focus:border-stone-950 transition-colors"
            />
          </Field>

          <Field label="Company">
            <input
              type="text"
              placeholder="Acme Inc."
              className="w-full bg-transparent border-b border-stone-400/60 py-3 text-lg sm:text-xl font-light text-stone-950 placeholder:text-stone-400 focus:outline-none focus:border-stone-950 transition-colors"
            />
          </Field>

          <Field label="What kind of project?">
            <div className="flex flex-wrap gap-2 pt-2">
              {projectTypes.map((p) => (
                <label
                  key={p}
                  className="cursor-pointer border border-stone-400/60 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-700 hover:border-stone-950 hover:text-stone-950 has-checked:bg-stone-950 has-checked:text-white has-checked:border-stone-950 transition-colors"
                >
                  <input type="checkbox" name="projectType" value={p} className="sr-only" />
                  {p}
                </label>
              ))}
            </div>
          </Field>

          <Field label="Budget range">
            <div className="flex flex-wrap gap-2 pt-2">
              {budgets.map((b) => (
                <label
                  key={b}
                  className="cursor-pointer border border-stone-400/60 px-3 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-700 hover:border-stone-950 hover:text-stone-950 has-checked:bg-stone-950 has-checked:text-white has-checked:border-stone-950 transition-colors"
                >
                  <input type="radio" name="budget" value={b} className="sr-only" />
                  {b}
                </label>
              ))}
            </div>
          </Field>

          <Field label="Tell us more" required>
            <textarea
              rows={6}
              required
              placeholder="A few sentences on what you're trying to do, what you've already tried, and what success looks like."
              className="w-full bg-transparent border-b border-stone-400/60 py-3 text-base sm:text-lg font-light text-stone-950 placeholder:text-stone-400 focus:outline-none focus:border-stone-950 transition-colors resize-none"
            />
          </Field>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4">
            <p className="text-[11px] text-stone-500 max-w-xs leading-[1.6]">
              By submitting, you agree to our{" "}
              <a href="/privacy" className="underline hover:text-stone-950">
                privacy policy
              </a>
              . We never share your information.
            </p>
            <button
              type="submit"
              className="self-start sm:self-auto inline-flex items-center gap-2 bg-stone-950 text-white text-[11px] uppercase tracking-[0.18em] px-7 py-4 hover:bg-stone-800 transition-colors"
            >
              Send Enquiry →
            </button>
          </div>
        </form>

        {/* Sidebar */}
        <aside className="lg:col-span-4 lg:border-l lg:border-stone-300/70 lg:pl-12">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-6">
            Other ways to reach us
          </div>
          <ul className="space-y-6">
            {channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="group flex items-start gap-4"
                >
                  <div className="shrink-0 size-9 border border-stone-400/60 flex items-center justify-center text-stone-700 group-hover:bg-stone-950 group-hover:text-white group-hover:border-stone-950 transition-colors">
                    <c.icon className="size-4" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-1">
                      {c.label}
                    </div>
                    <div className="text-[14px] text-stone-900 group-hover:text-stone-700 transition-colors break-words">
                      {c.value}
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 pt-8 border-t border-stone-300/70">
            <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3">
              Working hours
            </div>
            <div className="text-[13px] text-stone-800 leading-[1.7]">
              Mon — Fri · 09:00 — 18:00 PT
              <br />
              Replies within 24 hours.
            </div>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3">
        {label}
        {required && <span className="text-stone-700 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

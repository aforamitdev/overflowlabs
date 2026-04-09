import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/sections/footer"
import { caseStudies } from "@/lib/content"

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) return {}
  const url = `/case-studies/${cs.slug}`
  return {
    title: cs.title,
    description: cs.summary,
    keywords: [
      cs.title,
      cs.client,
      cs.sector,
      "AI case study",
      "Overflow Labs",
      ...cs.stack,
    ],
    alternates: { canonical: url },
    openGraph: {
      title: `${cs.title} — Overflow Labs`,
      description: cs.summary,
      url,
      type: "article",
      publishedTime: `${cs.year}-01-01`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.title} — Overflow Labs`,
      description: cs.summary,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cs = caseStudies.find((c) => c.slug === slug)
  if (!cs) notFound()

  const idx = caseStudies.findIndex((c) => c.slug === slug)
  const next = caseStudies[(idx + 1) % caseStudies.length]

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.summary,
    author: { "@type": "Organization", name: "Overflow Labs" },
    publisher: {
      "@type": "Organization",
      name: "Overflow Labs",
      logo: {
        "@type": "ImageObject",
        url: "https://overflowlabs.org/favicon.ico",
      },
    },
    datePublished: `${cs.year}-01-01`,
    mainEntityOfPage: `https://overflowlabs.org/case-studies/${cs.slug}`,
    keywords: [cs.sector, cs.client, ...cs.stack].join(", "),
    about: cs.sector,
  }

  return (
    <>
      <Script
        id={`ld-case-${cs.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-40">
        {/* Hero */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-stone-600 hover:text-stone-950 transition-colors mb-8"
          >
            <ArrowLeft className="size-3" strokeWidth={1.5} />
            All Case Studies
          </Link>

          <div className="border-b border-stone-300/70 pb-10 lg:pb-14">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-6">
              <span>{cs.sector}</span>
              <span className="size-1 bg-stone-400" />
              <span>{cs.client}</span>
              <span className="size-1 bg-stone-400" />
              <span>{cs.year}</span>
            </div>
            <h1 className="font-light tracking-[-0.025em] text-stone-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              {cs.title}
            </h1>
            <p className="mt-6 sm:mt-8 max-w-xl text-[14px] leading-[1.75] text-stone-700">
              {cs.summary}
            </p>
          </div>
        </div>

        {/* Hero image */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10 mt-10 lg:mt-14">
          <div
            className={`aspect-[16/8] bg-gradient-to-br ${cs.gradient} relative overflow-hidden border border-stone-300`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,255,255,0.15),transparent_60%)]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cs-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cs-grid)" />
            </svg>
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10 py-14 lg:py-20">
          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 pb-12 lg:pb-16 mb-12 lg:mb-16 border-b border-stone-300/70">
            <Meta label="Client" value={cs.client} />
            <Meta label="Sector" value={cs.sector} />
            <Meta label="Duration" value={cs.duration} />
            <Meta label="Team" value={cs.team} />
          </div>

          {/* Challenge + Approach */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 lg:mb-24">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
                The Challenge
              </div>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                The starting point.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-[14px] leading-[1.85] text-stone-800">{cs.challenge}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 lg:mb-24">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
                The Approach
              </div>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                What we built.
              </h2>
            </div>
            <div className="md:col-span-7">
              <ol className="space-y-5">
                {cs.approach.map((step, i) => (
                  <li key={i} className="flex gap-5 pb-5 border-b border-stone-300/60 last:border-b-0">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-stone-500 shrink-0 pt-1">
                      0{i + 1}
                    </div>
                    <div className="text-[14px] leading-[1.75] text-stone-800">{step}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Results */}
          <div className="bg-stone-950 text-stone-50 -mx-5 sm:-mx-6 lg:-mx-10 px-5 sm:px-6 lg:px-10 py-14 lg:py-20 mb-16 lg:mb-24">
            <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
              Results
            </div>
            <h2 className="font-light tracking-[-0.02em] text-stone-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1] mb-12 lg:mb-16">
              What shipped, what changed.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
              {cs.results.map((r) => (
                <div key={r.label}>
                  <div className="font-light tracking-[-0.02em] text-stone-50 text-4xl sm:text-5xl md:text-6xl leading-none">
                    {r.value}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.15em] text-stone-400">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 lg:mb-20">
            <div className="md:col-span-5">
              <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
                Stack
              </div>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                What's running in production.
              </h2>
            </div>
            <div className="md:col-span-7">
              <div className="flex flex-wrap gap-2">
                {cs.stack.map((tool) => (
                  <span
                    key={tool}
                    className="border border-stone-400/60 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-stone-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Next case study */}
          <Link
            href={`/case-studies/${next.slug}`}
            className="group block border-t border-stone-300/70 pt-10 lg:pt-14"
          >
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2">
                  Next case study
                </div>
                <div className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl md:text-4xl group-hover:text-stone-600 transition-colors">
                  {next.title}
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center size-12 border border-stone-400 text-stone-700 group-hover:bg-stone-950 group-hover:text-white group-hover:border-stone-950 transition-colors">
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </div>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-2">{label}</div>
      <div className="text-[14px] text-stone-900">{value}</div>
    </div>
  )
}

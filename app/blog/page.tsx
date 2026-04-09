import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { blogPosts } from "@/lib/content"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes on shipping AI systems in production — engineering, research, and process from the Overflow Labs team. RAG, agents, evals, MLOps, and applied LLMs.",
  keywords: [
    "AI engineering blog",
    "applied AI",
    "RAG",
    "LLM evals",
    "MLOps",
    "AI agents",
    "Overflow Labs journal",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Journal — Overflow Labs",
    description: "Notes on shipping AI systems in production from the Overflow Labs team.",
    url: "/blog",
    type: "website",
  },
}

const categories = ["All", "Engineering", "Research", "Strategy", "Process"]

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <PageShell
      eyebrow="Journal"
      marker="2026"
      title="Field notes from the production trenches"
      description="Engineering, research, and process essays from the Overflow Labs team. Published when we've got something worth saying — usually monthly."
    >
      {/* Category filter */}
      <div className="flex flex-wrap items-center gap-2 mb-12 lg:mb-16 pb-6 border-b border-stone-300/70">
        {categories.map((c, i) => (
          <button
            key={c}
            className={
              "border px-3 sm:px-4 py-1.5 text-[10px] uppercase tracking-[0.15em] transition-colors " +
              (i === 0
                ? "border-stone-950 bg-stone-950 text-white"
                : "border-stone-400/60 text-stone-700 hover:border-stone-950 hover:text-stone-950")
            }
          >
            {c}
          </button>
        ))}
      </div>

      {/* Featured post */}
      <Link
        href={`/blog/${featured.slug}`}
        className="group block border-b border-stone-300/70 pb-12 lg:pb-16 mb-12 lg:mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          <div className="md:col-span-6 aspect-[4/3] bg-gradient-to-br from-amber-200 via-amber-300 to-stone-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.15em] bg-stone-950 text-white px-2 py-1">
              Featured
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-5">
                <span>{featured.category}</span>
                <span className="size-1 bg-stone-400" />
                <span>{featured.date}</span>
                <span className="size-1 bg-stone-400" />
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-3xl sm:text-4xl lg:text-5xl leading-[1.05] group-hover:text-stone-700 transition-colors">
                {featured.title}
              </h2>
              <p className="mt-5 text-[13px] leading-[1.75] text-stone-700 max-w-md">
                {featured.excerpt}
              </p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <div className="text-[11px] uppercase tracking-wider text-stone-600">
                {featured.author}
              </div>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone-950">
                Read essay
                <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Article list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-300 via-stone-400 to-stone-700 relative overflow-hidden mb-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
            </div>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-3">
              <span>{post.category}</span>
              <span className="size-1 bg-stone-400" />
              <span>{post.readTime}</span>
            </div>
            <h3 className="font-light tracking-[-0.015em] text-stone-950 text-xl sm:text-2xl leading-[1.15] group-hover:text-stone-600 transition-colors">
              {post.title}
            </h3>
            <p className="mt-3 text-[13px] leading-[1.7] text-stone-600 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="mt-5 pt-4 border-t border-stone-300/70 flex items-center justify-between text-[10px] uppercase tracking-[0.15em] text-stone-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  )
}

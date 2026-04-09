import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Expertise } from "@/components/sections/expertise"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export const metadata: Metadata = {
  title: { absolute: "Overflow Labs — Custom AI Engineering & Consulting" },
  description:
    "Overflow Labs is an AI engineering studio. We help SaaS startups and enterprises ship production AI — RAG, copilots, agents, and bespoke automation that moves the business.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Overflow Labs — Custom AI Engineering & Consulting",
    description:
      "AI engineering studio shipping production RAG, copilots, agents, and custom automation for SaaS startups and enterprises.",
    url: "/",
    type: "website",
  },
}

export default function Home() {
  return (
    <div className="bg-[#ece6d6] text-stone-900 antialiased font-sans selection:bg-stone-900 selection:text-stone-50">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Expertise />
      <CTA />
      <Footer />
    </div>
  )
}

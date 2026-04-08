import { Header } from "@/components/header"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Expertise } from "@/components/sections/expertise"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

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

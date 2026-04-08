import { HeroChat } from "@/components/hero-chat"

export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-40 pb-10 sm:pb-12 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10 text-center">
        <h1 className="font-light tracking-[-0.035em] text-stone-950 leading-[0.95] text-[clamp(2.5rem,7.2vw,7rem)] md:whitespace-nowrap">
          Intelligence
          <span className="inline-block px-2 sm:px-3 lg:px-5 align-middle text-stone-400">—</span>
          Engineered
        </h1>

        <p className="mt-8 sm:mt-10 lg:mt-14 mx-auto max-w-md text-[13px] leading-[1.7] text-stone-700">
          Overflow Labs partners with ambitious teams to design, build, and deploy
          AI systems that move the business — grounded in research, shipped with
          engineering rigor.
        </p>
      </div>

      {/* Hero chat */}
      <div className="mt-10 sm:mt-12 lg:mt-16 mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
        <HeroChat />
      </div>
    </section>
  )
}

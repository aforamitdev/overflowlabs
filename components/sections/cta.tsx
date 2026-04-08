import { AiMockup } from "@/components/ai-mockup"

export function CTA() {
  return (
    <section id="contact" className="px-5 sm:px-6 lg:px-10 pb-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative overflow-hidden min-h-[420px] sm:min-h-0 sm:aspect-[16/9] md:aspect-[21/9] bg-stone-950 border border-stone-300">
          {/* Mockup as background */}
          <div className="absolute inset-0 opacity-90">
            <AiMockup variant="hero" />
          </div>
          {/* Dark wash for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-stone-950/40" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-12 lg:p-16">
            <div className="max-w-xl">
              <h2 className="font-light tracking-[-0.02em] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1]">
                Shape Your Vision
                <br />
                Into Reality
              </h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-6">
              <p className="max-w-md text-[12px] leading-[1.7] text-stone-300">
                We partner with founders, operators, and product leaders ready to
                deploy AI that delivers — not slideware. If you have a project in
                mind, we'd love to hear about it.
              </p>
              <a
                href="mailto:hello@overflowlabs.org"
                className="self-start md:self-auto inline-flex items-center gap-2 bg-white text-stone-950 text-[11px] sm:text-[12px] uppercase tracking-wider px-5 sm:px-6 py-3 hover:bg-stone-200 transition-colors shrink-0"
              >
                Get in Touch →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

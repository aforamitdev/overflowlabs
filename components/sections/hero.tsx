export function Hero() {
  return (
    <section className="relative pt-32 lg:pt-40 pb-12 lg:pb-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h1 className="font-light tracking-[-0.035em] text-stone-950 leading-[0.95] text-[clamp(2.75rem,7.2vw,7rem)] md:whitespace-nowrap">
          Intelligence
          <span className="inline-block px-3 lg:px-5 align-middle text-stone-400">—</span>
          Engineered
        </h1>

        <p className="mt-10 lg:mt-14 mx-auto max-w-md text-[13px] leading-[1.7] text-stone-700">
          Overflow Labs partners with ambitious teams to design, build, and deploy
          AI systems that move the business — grounded in research, shipped with
          engineering rigor.
        </p>
      </div>

      {/* Hero image plate */}
      <div className="mt-12 lg:mt-16 mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative">
          <div className="flex items-end justify-between text-[10px] uppercase tracking-wider text-stone-600 pb-3">
            <div>
              <div>Featured Engagement</div>
              <div className="text-stone-500 mt-0.5">Series B Fintech, NYC</div>
            </div>
            <div className="text-stone-500">2025</div>
          </div>

          {/* Image placeholder — replace with real photo/asset */}
          <div className="relative aspect-[16/7] w-full overflow-hidden bg-gradient-to-br from-stone-700 via-stone-800 to-stone-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(120,160,200,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,200,120,0.1),transparent_50%)]" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="border border-white/30 bg-white/5 backdrop-blur-sm px-5 py-2 text-[11px] uppercase tracking-widest text-white/90">
                Now Playing
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-1.5 pt-5">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={
                  "h-1 transition-all " +
                  (i === 0 ? "w-6 bg-stone-800" : "w-1 bg-stone-400")
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

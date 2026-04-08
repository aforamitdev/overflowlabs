const stats = [
  { value: "60", suffix: "+", label: "Models shipped" },
  { value: "12", suffix: "", label: "Years in AI" },
  { value: "30", suffix: "+", label: "Enterprise clients" },
  { value: "9", suffix: "", label: "PhDs on staff" },
]

export function About() {
  return (
    <section id="about" className="relative pt-20 lg:pt-32 pb-16 lg:pb-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Heading */}
        <h2 className="font-light tracking-[-0.02em] text-stone-950 text-5xl md:text-6xl lg:text-7xl">
          About Us<sup className="text-xs align-super text-stone-500 ml-1 tracking-normal">[01]</sup>
        </h2>

        {/* 3-column row */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Image left */}
          <div className="md:col-span-3 aspect-[4/5] md:aspect-square bg-gradient-to-br from-amber-200 via-stone-300 to-stone-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
          </div>

          {/* Copy middle */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <p className="text-[13px] leading-[1.75] text-stone-700 max-w-md">
              Founded with a singular conviction — that AI should compound value
              for the businesses that adopt it. Overflow Labs brings together
              research scientists, product engineers, and strategists. Each
              engagement is a partnership: we co-design the roadmap, ship the
              system, and stay close enough to measure the outcome.
            </p>
            <div className="pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-stone-950 text-white text-[12px] uppercase tracking-wider px-5 py-3 hover:bg-stone-800 transition-colors"
              >
                Get to Know Us
              </a>
            </div>
          </div>

          {/* Image right */}
          <div className="md:col-span-4 aspect-[4/3] md:aspect-square bg-gradient-to-br from-stone-800 via-stone-700 to-amber-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(255,200,140,0.25),transparent_60%)]" />
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="g2" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#g2)" />
            </svg>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 lg:mt-28 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-stone-950 font-light tracking-[-0.02em] text-5xl md:text-6xl">
                {s.value}
                <sup className="text-xl text-stone-500 align-super">{s.suffix}</sup>
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-wider text-stone-600">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

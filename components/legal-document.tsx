interface LegalSection {
  heading: string
  body: string[]
}

interface LegalDocumentProps {
  sections: LegalSection[]
}

/**
 * Two-column legal document layout — section nav left, content right.
 */
export function LegalDocument({ sections }: LegalDocumentProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Sticky TOC */}
      <aside className="lg:col-span-3">
        <div className="lg:sticky lg:top-32">
          <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-4">
            Contents
          </div>
          <ol className="space-y-2 text-[12px] text-stone-700">
            {sections.map((s, i) => (
              <li key={s.heading}>
                <a
                  href={`#section-${i + 1}`}
                  className="flex gap-3 hover:text-stone-950 transition-colors"
                >
                  <span className="text-stone-400 tabular-nums">0{i + 1}</span>
                  <span>{s.heading}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </aside>

      {/* Body */}
      <article className="lg:col-span-9 space-y-14 lg:space-y-20">
        {sections.map((s, i) => (
          <section key={s.heading} id={`section-${i + 1}`} className="scroll-mt-32">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-500 tabular-nums">
                0{i + 1}
              </span>
              <h2 className="font-light tracking-[-0.02em] text-stone-950 text-2xl sm:text-3xl md:text-4xl leading-[1.1]">
                {s.heading}
              </h2>
            </div>
            <div className="space-y-5 text-[14px] leading-[1.85] text-stone-800 max-w-2xl">
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </div>
  )
}

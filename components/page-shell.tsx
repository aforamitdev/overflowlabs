import { Header } from "@/components/header"
import { Footer } from "@/components/sections/footer"

interface PageShellProps {
  eyebrow: string
  marker: string
  title: string
  description?: string
  children: React.ReactNode
}

/**
 * Editorial wrapper used by every inner page (blog, case studies, legal, contact).
 * Renders the global header, a consistent page-hero block, the children, and the footer.
 */
export function PageShell({ eyebrow, marker, title, description, children }: PageShellProps) {
  return (
    <>
      <Header />
      <main className="pt-24 sm:pt-28 lg:pt-40">
        {/* Page hero */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10">
          <div className="border-b border-stone-300/70 pb-10 sm:pb-12 lg:pb-16">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-stone-500 mb-6 sm:mb-8">
              <div>{eyebrow}</div>
              <div>{marker}</div>
            </div>
            <h1 className="font-light tracking-[-0.025em] text-stone-950 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              {title}
            </h1>
            {description && (
              <p className="mt-6 sm:mt-8 max-w-xl text-[13px] leading-[1.75] text-stone-700">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10 py-14 sm:py-20 lg:py-24">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}

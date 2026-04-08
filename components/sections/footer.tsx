const footerCols = [
  {
    title: "Navigation",
    links: ["Home", "Studio", "Works", "Services", "Process", "Contact"],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] text-stone-200">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-16 lg:pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Wordmark */}
          <div className="md:col-span-5">
            <div className="font-light tracking-[-0.04em] text-stone-50 text-6xl md:text-7xl lg:text-8xl leading-[0.85]">
              OVERFLOW
              <br />
              LABS<span className="text-stone-500">.</span>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 text-[11px] uppercase tracking-wider text-stone-500 space-y-6">
            <div>
              <div className="text-stone-400 mb-2">Contact</div>
              <div className="text-stone-200 normal-case tracking-normal text-[13px]">
                hello@overflowlabs.org
              </div>
              <div className="text-stone-400 mt-1 normal-case tracking-normal text-[13px]">
                +1 (415) 555 0199
              </div>
            </div>
            <div>
              <div className="text-stone-400 mb-2">Address</div>
              <div className="text-stone-200 normal-case tracking-normal text-[13px] leading-[1.6]">
                548 Market Street, Suite 200
                <br />
                San Francisco, CA 94104
              </div>
            </div>
            <div>
              <div className="text-stone-400 mb-2">Working Hours</div>
              <div className="text-stone-200 normal-case tracking-normal text-[13px]">
                Mon – Fri · 09:00 – 18:00 PT
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-2 text-[11px] uppercase tracking-wider">
            <div className="text-stone-500 mb-4">Navigation</div>
            <ul className="space-y-2 text-stone-200">
              {footerCols[0].links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2 text-[11px] uppercase tracking-wider">
            <div className="text-stone-500 mb-4">Follow Us</div>
            <ul className="space-y-2 text-stone-200">
              {["LinkedIn", "X / Twitter", "GitHub", "Substack"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-6 border-t border-stone-800/80 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-stone-500">
          <div>© 2026 Overflow Labs. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-stone-200 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-stone-200 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-stone-200 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

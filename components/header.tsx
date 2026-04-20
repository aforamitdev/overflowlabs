"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const colA = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Journal", href: "/blog" },
]

const colB = [
  { label: "For Startups", href: "/for-startups" },
  { label: "For Enterprise", href: "/for-enterprise" },
]

const colC = [
  { label: "Services", href: "/#expertise" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-10 pt-5 sm:pt-6 lg:pt-8">
        <div className="flex items-start justify-between gap-4">
          {/* Mobile hamburger (left) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex size-9 items-center justify-center border border-stone-400/60 text-stone-800 hover:bg-stone-200/50 transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>

          {/* Left columns (desktop) */}
          <div className="hidden md:flex items-start gap-10 text-[10px] leading-[1.6] tracking-[0.18em] uppercase text-stone-700">
            <ul className="space-y-0.5">
              {colA.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="hover:text-stone-950 transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-0.5">
              {colB.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="hover:text-stone-950 transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-0.5">
              {colC.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="hover:text-stone-950 transition-colors">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Wordmark right */}
          <Link
            href="/"
            className="text-[11px] md:text-xs font-bold tracking-[0.08em] text-stone-950 leading-[1.15] text-right shrink-0"
          >
            OVERFLOW
            <br />
            LABS<span className="text-stone-500">.</span>
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-stone-950/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 left-0 right-0 bg-[#ece6d6] border-b border-stone-300 transition-transform duration-300 pt-20 pb-10 px-5 sm:px-6",
            open ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <nav className="flex flex-col gap-1 text-stone-900">
            {[...colA, ...colB, ...colC].map((i) => (
              <Link
                key={i.label}
                href={i.href}
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-light tracking-tight border-b border-stone-300/60"
              >
                {i.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

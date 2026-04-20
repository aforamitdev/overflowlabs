"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUp, Paperclip, Sparkles, AudioLines } from "lucide-react"

const PROMPTS = [
  "How can AI cut my support costs by 40%?",
  "Build me a forecasting model for inventory.",
  "Deploy a RAG system on our internal docs.",
  "Audit my data pipeline for ML readiness.",
  "Ship a customer-facing AI agent in 6 weeks.",
  "Fine-tune a model on our domain data.",
  "Replace our legacy OCR with vision LLMs.",
]

const CHIPS = [
  "AI Strategy Audit",
  "Build a RAG system",
  "ML feasibility study",
  "Agent prototype",
]

const TYPE_SPEED = 38 // ms per char
const ERASE_SPEED = 18
const HOLD_MS = 1800

export function HeroChat() {
  const [text, setText] = useState("")
  const [placeholder, setPlaceholder] = useState("")
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement | null>(null)

  // Cycling typewriter placeholder — pauses while user is typing or focused
  useEffect(() => {
    if (focused || text.length > 0) return
    let cancelled = false
    let promptIdx = 0
    let charIdx = 0
    let phase: "typing" | "holding" | "erasing" = "typing"

    const tick = () => {
      if (cancelled) return
      const current = PROMPTS[promptIdx]

      if (phase === "typing") {
        charIdx++
        setPlaceholder(current.slice(0, charIdx))
        if (charIdx >= current.length) {
          phase = "holding"
          setTimeout(tick, HOLD_MS)
          return
        }
        setTimeout(tick, TYPE_SPEED)
      } else if (phase === "holding") {
        phase = "erasing"
        setTimeout(tick, ERASE_SPEED)
      } else {
        charIdx--
        setPlaceholder(current.slice(0, Math.max(0, charIdx)))
        if (charIdx <= 0) {
          promptIdx = (promptIdx + 1) % PROMPTS.length
          phase = "typing"
          setTimeout(tick, 250)
          return
        }
        setTimeout(tick, ERASE_SPEED)
      }
    }
    tick()
    return () => { cancelled = true }
  }, [focused, text])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    // Hand off to email or contact endpoint — for now, mailto.
    window.location.href = `mailto:hello@overflowlabs.org?subject=${encodeURIComponent(
      "New project enquiry"
    )}&body=${encodeURIComponent(value)}`
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      {/* Card — editorial bordered plate on cream */}
      <div
        className={
          "relative w-full bg-[#fbfaf4] border transition-all duration-300 " +
          (focused
            ? "border-stone-900 shadow-[0_0_0_3px_rgba(28,25,23,0.04)]"
            : "border-stone-400/60")
        }
      >
        {/* Top label row */}
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-7 pt-4 sm:pt-5 pb-1 border-b border-stone-300/60">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-stone-600 min-w-0">
            <Sparkles className="size-3 text-stone-700 shrink-0" strokeWidth={1.5} />
            <span className="truncate">Ask Overflow</span>
            <sup className="text-[8px] tracking-normal text-stone-500 ml-0.5 shrink-0">[00]</sup>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-stone-500 shrink-0">
            <div className="size-1 bg-stone-800" />
            Replies in &lt; 24h
          </div>
        </div>

        {/* Textarea */}
        <textarea
          ref={inputRef}
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder + (focused || text ? "" : "▍")}
          className="w-full resize-none bg-transparent px-4 sm:px-6 lg:px-7 pt-4 sm:pt-5 pb-4 text-lg sm:text-xl lg:text-2xl font-light tracking-[-0.015em] text-stone-950 placeholder:text-stone-400 focus:outline-none leading-snug"
        />

        {/* Divider */}
        <div className="mx-4 sm:mx-6 lg:mx-7 border-t border-stone-300/60" />

        {/* Toolbar */}
        <div className="flex items-center justify-between gap-2 px-3 sm:px-4 lg:px-5 py-3">
          <div className="flex items-center gap-1 min-w-0">
            <button
              type="button"
              className="flex size-9 items-center justify-center text-stone-500 hover:text-stone-950 transition-colors shrink-0"
              aria-label="Attach file"
            >
              <Paperclip className="size-4" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              className="hidden sm:flex size-9 items-center justify-center text-stone-500 hover:text-stone-950 transition-colors shrink-0"
              aria-label="Voice input"
            >
              <AudioLines className="size-4" strokeWidth={1.5} />
            </button>
            <div className="ml-1 sm:ml-2 flex items-center gap-2 border border-stone-400/60 px-2.5 sm:px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] text-stone-700 shrink-0">
              <div className="size-1 bg-stone-900" />
              Overflow · v4
            </div>
          </div>

          <button
            type="submit"
            disabled={!text.trim()}
            className={
              "inline-flex items-center gap-2 px-4 sm:px-5 h-9 text-[11px] uppercase tracking-[0.15em] transition-colors shrink-0 " +
              (text.trim()
                ? "bg-stone-950 text-white hover:bg-stone-800"
                : "bg-stone-200/70 text-stone-400 cursor-not-allowed")
            }
          >
            Send
            <ArrowUp className="size-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Suggestion chips */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2">
        {CHIPS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => {
              setText(c)
              inputRef.current?.focus()
            }}
            className="border border-stone-400/60 bg-transparent hover:bg-stone-950 hover:border-stone-950 hover:text-white text-stone-700 px-3 sm:px-4 py-2 text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] transition-colors"
          >
            {c}
          </button>
        ))}
      </div>
    </form>
  )
}

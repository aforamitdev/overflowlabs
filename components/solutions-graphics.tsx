"use client"

import { useEffect, useRef, useState } from "react"

/* ─── 1. AI Enablement — Pipeline Flow Diagram ──────────────────────────── */

const PIPELINE_STAGES = [
  { n: "01", label: "Audit", sub: "Map ops & data" },
  { n: "02", label: "Prepare", sub: "Clean & connect" },
  { n: "03", label: "Train", sub: "Custom models" },
  { n: "04", label: "Deploy", sub: "Production infra" },
  { n: "05", label: "Iterate", sub: "Evals & retrain" },
]

export function PipelineDiagram() {
  const W = 860
  const H = 200
  const R = 30
  const xs = [86, 236, 430, 624, 774]
  const cy = 80

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      aria-label="AI Enablement pipeline diagram"
    >
      {/* Connecting dashed lines */}
      {xs.slice(0, -1).map((x, i) => (
        <line
          key={i}
          x1={x + R}
          y1={cy}
          x2={xs[i + 1] - R}
          y2={cy}
          stroke="#a8a29e"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
      ))}

      {/* Arrowheads */}
      {xs.slice(0, -1).map((x, i) => {
        const ax = xs[i + 1] - R - 2
        return (
          <polygon
            key={i}
            points={`${ax},${cy - 4} ${ax + 7},${cy} ${ax},${cy + 4}`}
            fill="#a8a29e"
          />
        )
      })}

      {/* Stage nodes */}
      {xs.map((x, i) => (
        <g key={i}>
          {/* Outer ring */}
          <circle cx={x} cy={cy} r={R + 4} fill="none" stroke="#d6d3d1" strokeWidth="1" />
          {/* Filled circle */}
          <circle cx={x} cy={cy} r={R} fill={i === 0 ? "#1c1917" : "#faf9f7"} stroke="#1c1917" strokeWidth="1.5" />
          {/* Number */}
          <text
            x={x}
            y={cy + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="10"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="0.1em"
            fill={i === 0 ? "#fafaf9" : "#1c1917"}
          >
            {PIPELINE_STAGES[i].n}
          </text>
          {/* Label */}
          <text
            x={x}
            y={cy + R + 18}
            textAnchor="middle"
            fontSize="11"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="0.05em"
            fill="#1c1917"
            fontWeight="400"
          >
            {PIPELINE_STAGES[i].label}
          </text>
          {/* Sub-label */}
          <text
            x={x}
            y={cy + R + 34}
            textAnchor="middle"
            fontSize="9.5"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            letterSpacing="0.03em"
            fill="#a8a29e"
          >
            {PIPELINE_STAGES[i].sub}
          </text>
        </g>
      ))}

      {/* Progress indicator — first stage filled = "you are here" */}
      <text x={86} y={H - 8} textAnchor="middle" fontSize="9" fill="#78716c" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.12em">
        START
      </text>
      <text x={774} y={H - 8} textAnchor="middle" fontSize="9" fill="#78716c" fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.12em">
        OUTCOME
      </text>
    </svg>
  )
}


/* ─── 2. MCP — Architecture Hub Diagram ─────────────────────────────────── */

const MCP_LEFT = [
  { label: "PostgreSQL", sub: "Database" },
  { label: "Salesforce", sub: "CRM" },
  { label: "Google Drive", sub: "Files" },
  { label: "Internal API", sub: "REST / GraphQL" },
]

const MCP_RIGHT = [
  { label: "Claude", sub: "Anthropic" },
  { label: "GPT-4", sub: "OpenAI" },
  { label: "Slack", sub: "Chat" },
  { label: "Teams", sub: "Chat" },
]

export function McpDiagram() {
  const W = 700
  const H = 280
  const cx = W / 2
  const cy = H / 2
  const boxW = 120
  const boxH = 52
  const nodeH = 38
  const nodeW = 110
  const leftX = 30
  const rightX = W - leftX - nodeW

  const leftYs = [40, 100, 160, 220]
  const rightYs = [40, 100, 160, 220]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="MCP architecture diagram">
      {/* Center MCP box */}
      <rect
        x={cx - boxW / 2}
        y={cy - boxH / 2}
        width={boxW}
        height={boxH}
        fill="#1c1917"
        rx="0"
      />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="11" fill="#fafaf9"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.18em" fontWeight="600">
        MCP
      </text>
      <text x={cx} y={cy + 9} textAnchor="middle" fontSize="9" fill="#a8a29e"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.1em">
        GATEWAY
      </text>

      {/* Left nodes (data sources) */}
      {MCP_LEFT.map((node, i) => {
        const ny = leftYs[i]
        const nodeCY = ny + nodeH / 2
        return (
          <g key={node.label}>
            {/* Line to MCP box */}
            <line
              x1={leftX + nodeW}
              y1={nodeCY}
              x2={cx - boxW / 2}
              y2={cy}
              stroke="#d6d3d1"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {/* Node box */}
            <rect x={leftX} y={ny} width={nodeW} height={nodeH} fill="#faf9f7" stroke="#d6d3d1" strokeWidth="1" />
            <text x={leftX + nodeW / 2} y={ny + 14} textAnchor="middle" fontSize="10" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.04em">
              {node.label}
            </text>
            <text x={leftX + nodeW / 2} y={ny + 27} textAnchor="middle" fontSize="8.5" fill="#a8a29e"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.06em">
              {node.sub}
            </text>
          </g>
        )
      })}

      {/* Right nodes (outputs) */}
      {MCP_RIGHT.map((node, i) => {
        const ny = rightYs[i]
        const nodeCY = ny + nodeH / 2
        return (
          <g key={node.label}>
            {/* Line from MCP box */}
            <line
              x1={cx + boxW / 2}
              y1={cy}
              x2={rightX}
              y2={nodeCY}
              stroke="#d6d3d1"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
            {/* Arrowhead on right side */}
            <polygon
              points={`${rightX - 1},${nodeCY - 4} ${rightX + 6},${nodeCY} ${rightX - 1},${nodeCY + 4}`}
              fill="#a8a29e"
            />
            {/* Node box */}
            <rect x={rightX} y={ny} width={nodeW} height={nodeH} fill="#faf9f7" stroke="#d6d3d1" strokeWidth="1" />
            <text x={rightX + nodeW / 2} y={ny + 14} textAnchor="middle" fontSize="10" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.04em">
              {node.label}
            </text>
            <text x={rightX + nodeW / 2} y={ny + 27} textAnchor="middle" fontSize="8.5" fill="#a8a29e"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.06em">
              {node.sub}
            </text>
          </g>
        )
      })}

      {/* Section labels */}
      <text x={leftX + nodeW / 2} y={H - 6} textAnchor="middle" fontSize="8" fill="#a8a29e"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.14em">
        DATA SOURCES
      </text>
      <text x={rightX + nodeW / 2} y={H - 6} textAnchor="middle" fontSize="8" fill="#a8a29e"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.14em">
        AI + CHANNELS
      </text>
    </svg>
  )
}


/* ─── 3. Chat Integration — Three-channel mockup ─────────────────────────── */

const CHANNELS = [
  {
    name: "Slack",
    color: "#1c1917",
    messages: [
      { user: true, text: "Who closed the most deals this quarter?" },
      { user: false, text: "Sarah — $420k, up 34% vs Q3. Full breakdown in CRM." },
    ],
  },
  {
    name: "ChatGPT",
    color: "#10a37f",
    messages: [
      { user: true, text: "Summarise our support tickets from last week." },
      { user: false, text: "412 tickets — 67% resolved by AI, avg CSAT 4.6/5. Top issue: onboarding." },
    ],
  },
  {
    name: "MS Teams",
    color: "#464eb8",
    messages: [
      { user: true, text: "Draft a follow-up for the Acme proposal." },
      { user: false, text: "Hi James — following up on the proposal we sent Tuesday. Happy to jump on a 20-min call." },
    ],
  },
]

export function ChatDiagram() {
  const W = 840
  const cardW = 252
  const cardH = 200
  const gap = 18
  const startX = (W - (cardW * 3 + gap * 2)) / 2

  return (
    <svg viewBox={`0 0 ${W} 240`} className="w-full h-auto" aria-label="Chat integration mockup">
      {CHANNELS.map((ch, ci) => {
        const x = startX + ci * (cardW + gap)
        return (
          <g key={ch.name}>
            {/* Card border */}
            <rect x={x} y={0} width={cardW} height={cardH} fill="#faf9f7" stroke="#e7e5e4" strokeWidth="1" />
            {/* Header bar */}
            <rect x={x} y={0} width={cardW} height={32} fill={ch.color} />
            {/* Channel name */}
            <text x={x + 12} y={20} fontSize="10" fill="white"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.1em" fontWeight="600">
              {ch.name.toUpperCase()}
            </text>
            {/* Status dot */}
            <circle cx={x + cardW - 16} cy={16} r={4} fill="#4ade80" />

            {/* Message 1 — user (right aligned) */}
            <rect x={x + 80} y={44} width={cardW - 92} height={36} fill="#e7e5e4" rx="0" />
            <text x={x + 88} y={57} fontSize="8.5" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif">
              {ch.messages[0].text.length > 34
                ? ch.messages[0].text.slice(0, 34) + "…"
                : ch.messages[0].text.slice(0, 34)}
            </text>
            <text x={x + 88} y={71} fontSize="8.5" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif">
              {ch.messages[0].text.slice(34, 68)}
            </text>
            <text x={x + 100} y={87} fontSize="7.5" fill="#a8a29e"
              fontFamily="ui-sans-serif, system-ui, sans-serif">You</text>

            {/* AI indicator dot */}
            <circle cx={x + 16} cy={120} r={8} fill={ch.color} />
            <text x={x + 16} y={124} textAnchor="middle" fontSize="8" fill="white"
              fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="700">AI</text>

            {/* Message 2 — AI response */}
            <rect x={x + 30} y={106} width={cardW - 42} height={48} fill="#f5f5f4" stroke="#e7e5e4" strokeWidth="0.5" />
            <text x={x + 38} y={121} fontSize="8.5" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif">
              {ch.messages[1].text.slice(0, 36)}
            </text>
            <text x={x + 38} y={134} fontSize="8.5" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif">
              {ch.messages[1].text.slice(36, 72)}
            </text>
            <text x={x + 38} y={147} fontSize="8.5" fill="#1c1917"
              fontFamily="ui-sans-serif, system-ui, sans-serif">
              {ch.messages[1].text.slice(72, 108)}
            </text>

            {/* Input bar */}
            <rect x={x + 10} y={162} width={cardW - 20} height={26} fill="white" stroke="#d6d3d1" strokeWidth="1" />
            <text x={x + 18} y={178} fontSize="8.5" fill="#d6d3d1"
              fontFamily="ui-sans-serif, system-ui, sans-serif">
              Ask anything…
            </text>
            {/* Send button */}
            <rect x={x + cardW - 34} y={164} width={22} height={22} fill="#1c1917" />
            <text x={x + cardW - 23} y={178} textAnchor="middle" fontSize="8" fill="white"
              fontFamily="ui-sans-serif, system-ui, sans-serif">↑</text>

            {/* Channel label below card */}
            <text x={x + cardW / 2} y={cardH + 18} textAnchor="middle" fontSize="9" fill="#78716c"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.14em">
              {ch.name.toUpperCase()}
            </text>
          </g>
        )
      })}

      {/* Unified AI brain label */}
      <text x={W / 2} y={225} textAnchor="middle" fontSize="9" fill="#a8a29e"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.14em">
        ONE AI BRAIN — EVERY CHANNEL
      </text>
    </svg>
  )
}


/* ─── 4. Productivity Bar Chart ─────────────────────────────────────────── */

const METRICS = [
  { label: "Processing\nTime", before: 85, after: 24, unit: "min", betterLow: true },
  { label: "Throughput", before: 38, after: 94, unit: "%", betterLow: false },
  { label: "Error Rate", before: 12, after: 2, unit: "%", betterLow: true },
  { label: "Cost / Task", before: 78, after: 22, unit: "%", betterLow: true },
]

export function ProductivityChart() {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<SVGSVGElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (!mounted) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [mounted])

  const W = 700
  const H = 240
  const chartH = 160
  const chartTop = 20
  const barGap = 6
  const groupW = 120
  const groups = METRICS.length
  const totalW = groups * groupW
  const startX = (W - totalW) / 2

  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" aria-label="Productivity before vs after AI chart">
      {/* Y-axis gridlines */}
      {[0, 25, 50, 75, 100].map((pct) => {
        const y = chartTop + chartH - (pct / 100) * chartH
        return (
          <g key={pct}>
            <line x1={startX - 8} y1={y} x2={startX + totalW} y2={y} stroke="#e7e5e4" strokeWidth="0.5" />
            <text x={startX - 12} y={y + 3} textAnchor="end" fontSize="8" fill="#a8a29e"
              fontFamily="ui-sans-serif, system-ui, sans-serif">{pct}</text>
          </g>
        )
      })}

      {/* Bars */}
      {METRICS.map((m, gi) => {
        const gx = startX + gi * groupW
        const bw = (groupW - barGap * 3) / 2

        const beforeH = (m.before / 100) * chartH
        const afterH = (m.after / 100) * chartH

        const beforeY = chartTop + chartH - (visible ? beforeH : 0)
        const afterY = chartTop + chartH - (visible ? afterH : 0)
        const beforeDisplayH = visible ? beforeH : 0
        const afterDisplayH = visible ? afterH : 0

        return (
          <g key={m.label}>
            {/* Before bar */}
            <rect
              x={gx + barGap}
              y={beforeY}
              width={bw}
              height={beforeDisplayH}
              fill="#d6d3d1"
              style={{ transition: visible ? "y 0.8s ease, height 0.8s ease" : "none" }}
            />
            {/* Before value */}
            {visible && (
              <text x={gx + barGap + bw / 2} y={beforeY - 4} textAnchor="middle" fontSize="9" fill="#78716c"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                {m.before}
              </text>
            )}

            {/* After bar */}
            <rect
              x={gx + barGap * 2 + bw}
              y={afterY}
              width={bw}
              height={afterDisplayH}
              fill="#1c1917"
              style={{ transition: visible ? "y 1s ease, height 1s ease" : "none" }}
            />
            {/* After value */}
            {visible && (
              <text x={gx + barGap * 2 + bw + bw / 2} y={afterY - 4} textAnchor="middle" fontSize="9" fill="#1c1917"
                fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="600">
                {m.after}
              </text>
            )}

            {/* Group label */}
            <text x={gx + groupW / 2} y={chartTop + chartH + 16} textAnchor="middle" fontSize="8.5" fill="#78716c"
              fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.04em">
              {m.label.split("\n")[0]}
            </text>
            {m.label.includes("\n") && (
              <text x={gx + groupW / 2} y={chartTop + chartH + 27} textAnchor="middle" fontSize="8.5" fill="#78716c"
                fontFamily="ui-sans-serif, system-ui, sans-serif">
                {m.label.split("\n")[1]}
              </text>
            )}
          </g>
        )
      })}

      {/* Baseline */}
      <line x1={startX - 8} y1={chartTop + chartH} x2={startX + totalW} y2={chartTop + chartH}
        stroke="#1c1917" strokeWidth="1" />

      {/* Legend */}
      <rect x={startX} y={H - 18} width={10} height={10} fill="#d6d3d1" />
      <text x={startX + 14} y={H - 9} fontSize="9" fill="#78716c"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.08em">BEFORE AI</text>
      <rect x={startX + 100} y={H - 18} width={10} height={10} fill="#1c1917" />
      <text x={startX + 114} y={H - 9} fontSize="9" fill="#1c1917"
        fontFamily="ui-sans-serif, system-ui, sans-serif" letterSpacing="0.08em">AFTER AI</text>
    </svg>
  )
}

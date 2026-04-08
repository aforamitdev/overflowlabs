import { ArrowUpRight, Bell, MessageSquare, Sparkles, Zap, Activity, Bot, Network } from "lucide-react"

type Variant = "hero" | "training" | "agents" | "embeddings" | "compact"

interface AiMockupProps {
  variant?: Variant
  className?: string
}

/**
 * Bento-style AI dashboard mockups used as placeholder imagery throughout the site.
 * Pure HTML/CSS so they scale fluidly to any container aspect ratio.
 */
export function AiMockup({ variant = "hero", className = "" }: AiMockupProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden bg-stone-100 ${className}`}>
      {variant === "hero" && <HeroBento />}
      {variant === "training" && <TrainingBento />}
      {variant === "agents" && <AgentsBento />}
      {variant === "embeddings" && <EmbeddingsBento />}
      {variant === "compact" && <CompactBento />}
    </div>
  )
}

/* ----------------------------- Hero variant ------------------------------ */

function HeroBento() {
  return (
    <div className="absolute inset-0 p-[2%] grid grid-cols-12 grid-rows-6 gap-[1%] bg-stone-100">
      {/* Workspace card (top-left) */}
      <div className="col-span-5 row-span-3 bg-white border border-stone-200 p-[3%] flex flex-col justify-between relative">
        <div className="flex items-start justify-between">
          <div className="text-[0.65vw] uppercase tracking-wider text-stone-500 font-medium">
            Your Workspace
          </div>
          <div className="flex gap-1">
            <div className="size-1 bg-stone-300" />
            <div className="size-1 bg-stone-300" />
            <div className="size-1 bg-stone-300" />
          </div>
        </div>
        <div className="-mt-[2%]">
          <div className="text-[3vw] font-light tracking-tight text-stone-950 leading-none">
            GPT-5
          </div>
          <div className="text-[0.7vw] text-stone-500 mt-[1%]">Production · us-east-1</div>
        </div>
        <div className="grid grid-cols-2 gap-[3%]">
          <div className="bg-stone-100 border border-stone-200 p-[6%]">
            <div className="flex items-center justify-between">
              <MessageSquare className="size-[1.2vw] text-stone-600" />
              <div className="text-[0.6vw] bg-stone-950 text-white px-1 py-0.5">12</div>
            </div>
            <div className="text-[0.65vw] text-stone-600 mt-[8%]">Threads</div>
          </div>
          <div className="bg-lime-200 border border-lime-300 p-[6%]">
            <div className="flex items-center justify-between">
              <Bell className="size-[1.2vw] text-stone-700" />
              <ArrowUpRight className="size-[1vw] text-stone-700" />
            </div>
            <div className="text-[0.65vw] text-stone-700 mt-[8%]">Alerts</div>
          </div>
        </div>
      </div>

      {/* Update banner (top-right) */}
      <div className="col-span-7 row-span-1 bg-emerald-900 text-emerald-50 p-[1.5%] pl-[2.5%] flex items-center justify-between relative overflow-hidden">
        <div className="text-[0.85vw] font-light tracking-tight relative z-10">
          New model release · Claude 4.6
        </div>
        <div className="size-[2vw] border border-emerald-50/40 flex items-center justify-center relative z-10">
          <ArrowUpRight className="size-[1.1vw]" />
        </div>
        {/* Decorative leaves */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
          <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMaxYMid slice">
            <g fill="none" stroke="white" strokeWidth="1">
              {Array.from({ length: 12 }).map((_, i) => (
                <path
                  key={i}
                  d={`M ${20 + i * 15} 0 Q ${50 + i * 15} 40 ${20 + i * 15} 80`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      {/* Big yellow accuracy card */}
      <div className="col-span-7 row-span-3 bg-amber-300 p-[2%] flex flex-col justify-between relative overflow-hidden">
        <div className="flex items-start justify-between">
          <div className="text-[0.65vw] uppercase tracking-wider text-stone-700 font-medium">
            Model Accuracy
          </div>
          <div className="flex gap-1">
            <div className="size-1 bg-stone-700/40" />
            <div className="size-1 bg-stone-700/40" />
            <div className="size-1 bg-stone-700/40" />
          </div>
        </div>
        <div className="-mt-[1%]">
          <div className="text-[3.2vw] font-light tracking-tight text-stone-950 leading-none">
            99,4%
          </div>
          <div className="text-[0.65vw] text-stone-700 mt-[1%] max-w-[60%] leading-tight">
            Production eval suite across 14 domains, last 30 days
          </div>
        </div>
        {/* Bar chart */}
        <div>
          <div className="flex items-end gap-[1.2%] h-[35%]">
            {[55, 60, 65, 62, 70, 72, 78, 82, 85, 88, 92, 95, 99].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-white"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-center justify-between mt-[1.5%]">
            <div className="text-[0.6vw] text-stone-700">Mar 2025</div>
            <div className="flex gap-[2%] text-[0.6vw] text-stone-700">
              <span className="bg-white/40 px-[6px] py-[2px]">D</span>
              <span className="bg-white px-[6px] py-[2px]">M</span>
              <span className="bg-white/40 px-[6px] py-[2px]">Y</span>
            </div>
            <div className="text-[0.6vw] text-stone-700">Apr 2026</div>
          </div>
        </div>
      </div>

      {/* Profit/savings small cards row */}
      <div className="col-span-2 row-span-2 bg-white border border-stone-200 p-[6%] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="text-[0.6vw] text-stone-600">Latency</div>
          <Zap className="size-[1vw] text-stone-500" />
        </div>
        <div>
          <div className="text-[1.4vw] font-light text-stone-950 leading-none">47ms</div>
          <div className="text-[0.55vw] text-stone-500 mt-[6%]">p95 inference</div>
        </div>
      </div>
      <div className="col-span-3 row-span-2 bg-white border border-stone-200 p-[5%] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div className="text-[0.6vw] text-stone-600">Active Agents</div>
          <Bot className="size-[1vw] text-stone-500" />
        </div>
        <div>
          <div className="text-[1.4vw] font-light text-stone-950 leading-none">24</div>
          <div className="text-[0.55vw] text-stone-500 mt-[6%]">Across 6 services</div>
        </div>
      </div>

      {/* Big green summary */}
      <div className="col-span-7 row-span-2 bg-lime-200 p-[2%] flex flex-col justify-between relative">
        <div className="flex items-start justify-between">
          <div className="text-[0.65vw] uppercase tracking-wider text-stone-700 font-medium">
            Monthly Savings
          </div>
          <div className="flex gap-1">
            <div className="size-1 bg-stone-700/40" />
            <div className="size-1 bg-stone-700/40" />
            <div className="size-1 bg-stone-700/40" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[2.4vw] font-light tracking-tight text-stone-950 leading-none">
              $129,540
            </div>
            <div className="text-[0.6vw] text-stone-600 mt-[2%]">vs. legacy stack · USD</div>
          </div>
          <div className="size-[2.2vw] border border-stone-700/30 flex items-center justify-center">
            <ArrowUpRight className="size-[1.2vw] text-stone-800" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* --------------------------- Training variant --------------------------- */

function TrainingBento() {
  const points = [80, 65, 70, 55, 48, 42, 38, 32, 30, 27, 24, 22, 20, 18, 16, 14, 13, 12, 11, 10]
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 100} ${p}`)
    .join(" ")
  return (
    <div className="absolute inset-0 p-[3%] bg-stone-100 grid grid-cols-6 grid-rows-6 gap-[2%]">
      <div className="col-span-6 row-span-4 bg-white border border-stone-200 p-[3%] flex flex-col">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[0.7vw] uppercase tracking-wider text-stone-500">
              Training Loss
            </div>
            <div className="text-[1.6vw] font-light text-stone-950 mt-[1%]">0.0124</div>
          </div>
          <div className="text-[0.6vw] text-stone-500">Epoch 18 / 20</div>
        </div>
        <div className="flex-1 mt-[2%] relative">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <path d={`${path} L 100 100 L 0 100 Z`} fill="rgb(254 240 138)" opacity="0.6" />
            <path d={path} fill="none" stroke="rgb(202 138 4)" strokeWidth="0.6" />
          </svg>
        </div>
      </div>
      <div className="col-span-3 row-span-2 bg-amber-300 p-[5%] flex flex-col justify-between">
        <Activity className="size-[1.2vw] text-stone-800" />
        <div>
          <div className="text-[1.6vw] font-light text-stone-950 leading-none">94.2%</div>
          <div className="text-[0.6vw] text-stone-700 mt-[3%]">Eval accuracy</div>
        </div>
      </div>
      <div className="col-span-3 row-span-2 bg-white border border-stone-200 p-[5%] flex flex-col justify-between">
        <Sparkles className="size-[1.2vw] text-stone-500" />
        <div>
          <div className="text-[1.6vw] font-light text-stone-950 leading-none">12B</div>
          <div className="text-[0.6vw] text-stone-500 mt-[3%]">Tokens trained</div>
        </div>
      </div>
    </div>
  )
}

/* ---------------------------- Agents variant ---------------------------- */

function AgentsBento() {
  const agents = [
    { name: "Sales Triage", status: "Running", color: "bg-lime-200" },
    { name: "Doc Indexer", status: "Running", color: "bg-amber-200" },
    { name: "Support Copilot", status: "Idle", color: "bg-white" },
    { name: "Lead Enricher", status: "Running", color: "bg-lime-200" },
  ]
  return (
    <div className="absolute inset-0 p-[3%] bg-stone-100 flex flex-col gap-[2%]">
      <div className="bg-white border border-stone-200 p-[3%] flex items-center justify-between">
        <div>
          <div className="text-[0.7vw] uppercase tracking-wider text-stone-500">
            Active Agents
          </div>
          <div className="text-[2vw] font-light text-stone-950 mt-[1%] leading-none">04</div>
        </div>
        <Bot className="size-[2vw] text-stone-400" />
      </div>
      <div className="flex-1 flex flex-col gap-[2%]">
        {agents.map((a) => (
          <div
            key={a.name}
            className={`${a.color} border border-stone-200 px-[3%] py-[2%] flex items-center justify-between flex-1`}
          >
            <div className="flex items-center gap-[3%]">
              <div className="size-[1.5vw] bg-white border border-stone-200 flex items-center justify-center">
                <Bot className="size-[0.9vw] text-stone-700" />
              </div>
              <div className="text-[0.85vw] text-stone-900">{a.name}</div>
            </div>
            <div className="flex items-center gap-[6px]">
              <div
                className={`size-[6px] ${
                  a.status === "Running" ? "bg-emerald-500" : "bg-stone-400"
                }`}
              />
              <div className="text-[0.6vw] uppercase tracking-wider text-stone-600">
                {a.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------- Embeddings variant -------------------------- */

function EmbeddingsBento() {
  // pseudo-random points for the embedding scatter
  const dots = Array.from({ length: 60 }).map((_, i) => {
    const seed = i * 9301 + 49297
    const x = (seed % 233280) / 233280
    const y = ((seed * 1.7) % 233280) / 233280
    const cluster = i % 3
    return { x: x * 100, y: y * 100, cluster }
  })
  const colors = ["bg-amber-400", "bg-lime-400", "bg-stone-800"]
  return (
    <div className="absolute inset-0 p-[3%] bg-stone-100 grid grid-cols-6 grid-rows-6 gap-[2%]">
      <div className="col-span-6 row-span-5 bg-white border border-stone-200 p-[3%] relative">
        <div className="flex items-start justify-between">
          <div className="text-[0.7vw] uppercase tracking-wider text-stone-500">
            Vector Space
          </div>
          <Network className="size-[1.2vw] text-stone-400" />
        </div>
        <div className="absolute inset-[10%] top-[18%]">
          {dots.map((d, i) => (
            <div
              key={i}
              className={`absolute size-[0.8vw] ${colors[d.cluster]}`}
              style={{ left: `${d.x}%`, top: `${d.y}%` }}
            />
          ))}
        </div>
      </div>
      <div className="col-span-6 row-span-1 bg-amber-300 px-[3%] flex items-center justify-between">
        <div className="text-[0.7vw] text-stone-800">2.4M embeddings · 1536 dims</div>
        <ArrowUpRight className="size-[1vw] text-stone-800" />
      </div>
    </div>
  )
}

/* --------------------------- Compact variant --------------------------- */

function CompactBento() {
  return (
    <div className="absolute inset-0 p-[5%] bg-stone-100 flex flex-col gap-[3%]">
      <div className="bg-amber-300 p-[6%] flex-1 flex flex-col justify-between">
        <div className="text-[0.8vw] uppercase tracking-wider text-stone-700">Inference</div>
        <div>
          <div className="text-[2.2vw] font-light text-stone-950 leading-none">47ms</div>
          <div className="text-[0.7vw] text-stone-700 mt-[3%]">p95 latency</div>
        </div>
      </div>
      <div className="bg-white border border-stone-200 p-[6%] flex-1 flex flex-col justify-between">
        <div className="text-[0.8vw] uppercase tracking-wider text-stone-500">Throughput</div>
        <div>
          <div className="text-[2.2vw] font-light text-stone-950 leading-none">2.4k</div>
          <div className="text-[0.7vw] text-stone-500 mt-[3%]">req/sec</div>
        </div>
      </div>
    </div>
  )
}

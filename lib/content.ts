export type CaseStudy = {
  slug: string
  title: string
  client: string
  sector: string
  year: string
  duration: string
  team: string
  summary: string
  challenge: string
  approach: string[]
  results: { value: string; label: string }[]
  stack: string[]
  gradient: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "atlas-forecasting",
    title: "Atlas Forecasting Engine",
    client: "Series B Fintech",
    sector: "Financial Services",
    year: "2025",
    duration: "14 weeks",
    team: "3 engineers · 1 researcher",
    summary:
      "Replaced a brittle rules-based forecasting system with a hierarchical time-series model that improved cash-flow accuracy by 38% and unlocked treasury automation.",
    challenge:
      "The client's treasury team relied on a 12-year-old spreadsheet model to forecast working capital across 40 currencies. Forecasts drifted weekly and required constant manual reconciliation, blocking automated FX hedging.",
    approach: [
      "Audited two years of historical cash positions and identified seven seasonality regimes",
      "Built a hierarchical Prophet + LightGBM ensemble with currency-aware features",
      "Designed a continuous-evaluation harness running against live treasury actuals",
      "Shipped a FastAPI service with an auditable forecast lineage for compliance",
    ],
    results: [
      { value: "38%", label: "Forecast accuracy lift" },
      { value: "$4.2M", label: "Annual hedging savings" },
      { value: "92%", label: "Manual reconciliation removed" },
      { value: "14 wk", label: "From kickoff to production" },
    ],
    stack: ["Python", "Prophet", "LightGBM", "Snowflake", "FastAPI", "Airflow"],
    gradient: "from-blue-900 via-indigo-900 to-stone-900",
  },
  {
    slug: "aurora-vision",
    title: "Aurora Vision Platform",
    client: "Industrial Robotics",
    sector: "Manufacturing",
    year: "2025",
    duration: "22 weeks",
    team: "4 engineers · 2 researchers",
    summary:
      "Built a real-time defect detection system processing 4K video at 60fps across 12 production lines, replacing manual QA with sub-second automated triage.",
    challenge:
      "The client's existing QA process required two operators per line and missed an estimated 18% of defects. Latency budget for any automated solution was 200ms end-to-end.",
    approach: [
      "Collected and labeled 240k defect images across 9 categories",
      "Distilled a YOLOv9 detector into a 14M-parameter student model",
      "Deployed via NVIDIA Triton on-prem with hardware-accelerated preprocessing",
      "Built a feedback loop letting line operators flag false positives in one tap",
    ],
    results: [
      { value: "99.4%", label: "Defect recall" },
      { value: "47ms", label: "End-to-end latency" },
      { value: "12", label: "Production lines live" },
      { value: "$2.8M", label: "Yearly scrap reduction" },
    ],
    stack: ["PyTorch", "YOLOv9", "Triton", "TensorRT", "Kafka", "Grafana"],
    gradient: "from-amber-900 via-rose-900 to-stone-900",
  },
  {
    slug: "lumen-document-intelligence",
    title: "Lumen Document Intelligence",
    client: "Global Insurer",
    sector: "Insurance",
    year: "2024",
    duration: "18 weeks",
    team: "3 engineers · 1 product manager",
    summary:
      "Replaced a 90-person document review team's intake bottleneck with a multi-model OCR + LLM pipeline that handles 14 document types with full audit trails.",
    challenge:
      "Claims documents arrived in 11 languages and 14 formats. The existing OCR vendor produced 76% accuracy and the review team was 5 weeks behind on backlog.",
    approach: [
      "Benchmarked 4 vision-language models on a stratified sample",
      "Designed a confidence-routing pipeline with human-in-the-loop fallback",
      "Built a regulator-friendly audit log capturing every model decision",
      "Migrated reviewers from data-entry to exception-handling roles",
    ],
    results: [
      { value: "94%", label: "End-to-end extraction accuracy" },
      { value: "8x", label: "Throughput vs. legacy OCR" },
      { value: "0", label: "Backlog days, post-launch" },
      { value: "11", label: "Languages supported" },
    ],
    stack: ["Claude", "GPT-4o", "AWS Textract", "Postgres", "Temporal", "Datadog"],
    gradient: "from-emerald-900 via-teal-900 to-stone-900",
  },
  {
    slug: "helix-rag-search",
    title: "Helix RAG Search",
    client: "Healthcare SaaS",
    sector: "Healthcare",
    year: "2024",
    duration: "10 weeks",
    team: "2 engineers · 1 researcher",
    summary:
      "Designed and shipped a HIPAA-compliant retrieval-augmented search assistant for clinicians, indexing 2.1M internal protocols, journals, and patient summaries.",
    challenge:
      "Clinicians spent an average of 11 minutes per shift searching internal protocols. Off-the-shelf RAG vendors couldn't satisfy the client's HIPAA, audit, and on-prem deployment requirements.",
    approach: [
      "Built a hybrid BM25 + dense retriever fine-tuned on medical literature",
      "Designed prompt scaffolding with citation enforcement and refusal guards",
      "Created an evaluation suite with 1,200 expert-labeled question/answer pairs",
      "Deployed via Kubernetes inside the client's existing HIPAA-compliant VPC",
    ],
    results: [
      { value: "8.4 min", label: "Search time saved per shift" },
      { value: "97%", label: "Citation correctness" },
      { value: "2.1M", label: "Documents indexed" },
      { value: "10 wk", label: "Concept to production" },
    ],
    stack: ["LlamaIndex", "Qdrant", "Llama 3", "Kubernetes", "Vault", "Langfuse"],
    gradient: "from-purple-900 via-violet-900 to-stone-900",
  },
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "evals-are-the-product",
    title: "Evals are the product",
    excerpt:
      "Most LLM systems fail in production not because the model is wrong, but because no one defined what 'right' looks like. Here's how we approach evaluation as a first-class deliverable.",
    category: "Engineering",
    author: "Amit Singh",
    date: "Mar 12, 2026",
    readTime: "8 min",
  },
  {
    slug: "rag-isnt-magic",
    title: "RAG isn't magic — it's information retrieval with extra steps",
    excerpt:
      "Why teams keep shipping disappointing RAG systems, and what 30 years of IR research can teach us about building ones that actually work.",
    category: "Research",
    author: "Priya Menon",
    date: "Feb 28, 2026",
    readTime: "12 min",
  },
  {
    slug: "buy-vs-build-2026",
    title: "Buy vs. build vs. fine-tune in 2026",
    excerpt:
      "A decision framework for technical leaders evaluating AI infrastructure, with real cost models for the three most common architectures.",
    category: "Strategy",
    author: "Marco Reyes",
    date: "Feb 14, 2026",
    readTime: "10 min",
  },
  {
    slug: "agents-without-frameworks",
    title: "Agents without frameworks",
    excerpt:
      "Why the most reliable agentic systems we've shipped contain less than 200 lines of orchestration code — and what that says about the current framework landscape.",
    category: "Engineering",
    author: "Sara Lindqvist",
    date: "Jan 30, 2026",
    readTime: "7 min",
  },
  {
    slug: "the-quiet-rise-of-small-models",
    title: "The quiet rise of small models",
    excerpt:
      "Frontier models get the headlines, but a 7B model fine-tuned on the right 50k examples is still the right answer for half the problems we see.",
    category: "Research",
    author: "Daniel Cho",
    date: "Jan 16, 2026",
    readTime: "9 min",
  },
  {
    slug: "shipping-on-day-90",
    title: "Why we ship on day 90",
    excerpt:
      "Every Overflow Labs engagement targets a production milestone in the first quarter. Here's the operating system that makes it possible.",
    category: "Process",
    author: "Amit Singh",
    date: "Jan 4, 2026",
    readTime: "6 min",
  },
]

import { PageShell } from "@/components/page-shell"
import { LegalDocument } from "@/components/legal-document"

export const metadata = {
  title: "Privacy Policy — Overflow Labs",
}

const sections = [
  {
    heading: "Overview",
    body: [
      "This Privacy Policy explains what information Overflow Labs collects when you interact with our website or services, how we use it, and what rights you have over your data.",
      "We collect as little personal information as possible and only retain it for as long as it serves the purpose for which it was collected.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "When you submit our contact form or email us, we collect the information you provide — typically your name, work email, company, and a description of your project.",
      "When you visit our website, we collect anonymised usage data such as page views, browser type, and approximate location. We use this only to improve the site.",
      "We do not use third-party advertising trackers and we do not sell your data.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "Information you submit through the contact form is used solely to respond to your enquiry and, if a project moves forward, to deliver the engagement.",
      "Aggregated usage data helps us understand how visitors find and use our content so we can improve it.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "We use a small number of essential cookies required for the site to function. We use a privacy-preserving analytics provider that does not set persistent identifying cookies.",
      "You can block cookies in your browser settings. The site will continue to function normally.",
    ],
  },
  {
    heading: "Data Sharing",
    body: [
      "We do not share your information with third parties except: (a) where required by law, (b) with our hosting and infrastructure providers under data-processing agreements, or (c) with explicit written consent.",
      "We never use your data to train machine learning models.",
    ],
  },
  {
    heading: "Data Retention",
    body: [
      "Contact form submissions are retained for up to 24 months unless an engagement is initiated, in which case retention is governed by the engagement contract.",
      "You can request deletion of your data at any time by emailing privacy@overflowlabs.org.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "Depending on your jurisdiction, you may have rights to access, correct, delete, or port the personal data we hold about you. To exercise these rights, contact privacy@overflowlabs.org.",
      "Residents of the EEA, UK, and California have additional rights under GDPR, UK GDPR, and CCPA respectively. We honor all valid requests within 30 days.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We use industry-standard technical and organisational measures to protect your information, including encryption in transit, role-based access controls, and regular security reviews.",
      "No system is perfectly secure. If we ever discover a breach affecting your data, we will notify you promptly and explain what happened.",
    ],
  },
  {
    heading: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. Material changes will be announced on this page. The effective date below indicates when the current version took effect.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "For privacy questions or to exercise your rights, email privacy@overflowlabs.org.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Legal"
      marker="Effective 1 Jan 2026"
      title="Privacy Policy"
      description="What we collect, what we do with it, and the rights you have over your data."
    >
      <LegalDocument sections={sections} />
    </PageShell>
  )
}

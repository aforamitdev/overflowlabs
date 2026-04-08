import { PageShell } from "@/components/page-shell"
import { LegalDocument } from "@/components/legal-document"

export const metadata = {
  title: "Terms of Service — Overflow Labs",
}

const sections = [
  {
    heading: "Agreement",
    body: [
      "These Terms of Service govern your access to and use of the Overflow Labs website and any services we provide (collectively, the \"Services\"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, do not use the Services.",
      "Overflow Labs is a registered consultancy operating from San Francisco, California. References to \"we\", \"us\", and \"our\" refer to Overflow Labs.",
    ],
  },
  {
    heading: "Engagements & Statements of Work",
    body: [
      "Any consulting, engineering, or research services we provide are governed by a separate Statement of Work (SOW) signed by both parties. In the event of a conflict between these Terms and an SOW, the SOW controls.",
      "Pricing, deliverables, intellectual property assignment, and confidentiality obligations are defined per engagement in the relevant SOW.",
    ],
  },
  {
    heading: "Acceptable Use",
    body: [
      "You agree not to use the Services in any way that violates applicable law, infringes the rights of others, or interferes with the operation of the Services. You may not attempt to reverse-engineer, scrape, or automate the website beyond what is permitted by our published interfaces.",
      "We reserve the right to suspend or terminate access for any user who violates these Terms.",
    ],
  },
  {
    heading: "Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, software, and case studies — is the property of Overflow Labs or its licensors and is protected by copyright and trademark laws.",
      "Open-source materials we publish are governed by the licenses included in their respective repositories.",
    ],
  },
  {
    heading: "Confidentiality",
    body: [
      "Information shared with us during a sales conversation or engagement is treated as confidential by default. We will not disclose client information without written consent, except where required by law.",
    ],
  },
  {
    heading: "Disclaimers",
    body: [
      "The website and any general-purpose content are provided \"as is\" without warranties of any kind. We make no representations about the suitability of any information or services for any particular purpose.",
      "Our consulting work is governed by the warranties expressly stated in the relevant SOW.",
    ],
  },
  {
    heading: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Overflow Labs shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website. Liability for paid engagements is limited per the relevant SOW.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these Terms from time to time. The most current version will always be posted on this page with the effective date noted below. Continued use of the Services after changes constitutes acceptance.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these Terms can be directed to legal@overflowlabs.org.",
    ],
  },
]

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Legal"
      marker="Effective 1 Jan 2026"
      title="Terms of Service"
      description="The plain-language ground rules for using the Overflow Labs website and engaging our team."
    >
      <LegalDocument sections={sections} />
    </PageShell>
  )
}

import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Trauma-Informed Workforce System",
  description: "Build the foundation for stability with consistent trauma response protocols.",
}

export default function WorkforceSystemPage() {
  return (
    <SolutionDetail
      icon={Shield}
      title="Build the Foundation for Stability"
      tagline="Most organizations are 'trauma-informed' in principle — but lack operational structure."
      intro="The Recess Workforce System translates trauma awareness into consistent action. Establish shared language, leader training, and practical response protocols so trauma exposure is addressed consistently across teams."
      howTitle="What We Implement"
      howItems={[
        "Shared language for trauma exposure",
        "Leader education on nervous system impact",
        "Practical response pathways after difficult events",
        "Structured escalation and support protocols",
        "Integration into existing policies and workflows",
      ]}
      withoutTitle="Without structure"
      withoutItems={[
        "Support is inconsistent",
        "Managers respond differently",
        "Strain accumulates informally",
        "Instability becomes normalized",
      ]}
      withTitle="With structure"
      withItems={[
        "Response becomes predictable",
        "Leaders feel equipped",
        "Teams know what to expect",
        "Duty-of-care strengthens",
      ]}
      closerLine="Trauma exposure is structural. Your response should be too."
      ctaLabel="Talk to Our Team"
      ctaHref="/get-started"
    />
  )
}

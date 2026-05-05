import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Recess Foundation | Trauma-Informed Training & Workforce Standards | Recess",
  description:
    "Build trauma-informed workforce standards with leadership training on vicarious trauma, secondary trauma, and compassion fatigue. Consistent protocols for high-exposure environments.",
  openGraph: {
    title: "Recess Foundation | Trauma-Informed Training & Workforce Standards | Recess",
    description:
      "Build trauma-informed workforce standards with leadership training on vicarious trauma and compassion fatigue.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function WorkforceSystemPage() {
  return (
    <SolutionDetail
      icon={Shield}
      color="#F0ECF5"
      num="01"
      title={"Recess Foundation\u2122"}
      tagline="Trauma-Informed Workforce Standards & Training"
      intro="Trauma-informed principles are widespread. Operational structure is not. Recess Foundation translates trauma-informed awareness into consistent, system-level practice. We come in without commitment, sharing foundational knowledge about what repeated exposure does to the nervous system before building operational standards around it."
      howTitle={"What's Included"}
      howItems={[
        "Workforce-wide trauma-informed workshops",
        "Leadership calibration & nervous system education",
        "Practical response pathways after difficult events",
        "Integration into existing policies and workflows",
        "Shared language for trauma exposure across teams",
        "Structured escalation and support protocols",
      ]}
      withoutTitle="Without Structure"
      withoutItems={[
        "Managers respond inconsistently to staff distress",
        "Strain accumulates informally with no pathway",
        "Emotional overload becomes normalized",
        "Duty-of-care gaps increase organizational risk",
      ]}
      withTitle={"With Recess Foundation\u2122"}
      withItems={[
        "Response becomes predictable and consistent",
        "Leaders feel equipped to support their teams",
        "Teams know what to expect after difficult events",
        "Trauma exposure is addressed proactively",
      ]}
      closerLine={"Trauma exposure is structural. Your standards should be too."}
      ctaLabel="Talk to Our Team"
      ctaHref="/get-started"
    />
  )
}

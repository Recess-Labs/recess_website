import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Frontline Ally | Real-Time Vicarious Trauma & Compassion Fatigue Relief | Recess",
  description:
    "Repair emotional overload in minutes with neuroscience-based stabilization protocols. Built specifically for secondary trauma, vicarious trauma, and compassion fatigue in frontline workers.",
  openGraph: {
    title: "Frontline Ally | Real-Time Vicarious Trauma & Compassion Fatigue Relief | Recess",
    description:
      "Repair emotional overload in minutes with neuroscience-based stabilization protocols for frontline workers.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function AllyAppPage() {
  return (
    <SolutionDetail
      icon={Smartphone}
      color="#AAF5D4"
      num="02"
      title={"Recess Frontline Ally\u2122"}
      tagline="Real-Time Trauma Stabilization for Professionals"
      intro="Training builds awareness. It does not repair nervous system activation after repeated exposure. Recess Frontline Ally provides short, neuroscience-informed stabilization protocols designed specifically for secondary trauma, moral injury, compassion fatigue, and acute emotional overload. Sessions take ~10 minutes and fit into real shifts."
      howTitle="How It Works"
      howItems={[
        "Staff complete a brief emotional check-in",
        "The system detects strain patterns using AI",
        "Personalized stabilization protocols are delivered",
        "Sessions take ~10 minutes and fit into real workflows",
        "Built on AIP theory and polyvagal-informed regulation",
        "Tracks recovery patterns over time",
      ]}
      withoutTitle="Without Repair"
      withoutItems={[
        "Stress accumulates biologically after each shift",
        "Emotional reactivity increases over time",
        "Decision quality declines under pressure",
        "Burnout accelerates into turnover",
      ]}
      withTitle={"With Recess Frontline Ally\u2122"}
      withItems={[
        "Strain is reduced in real time between shifts",
        "Recovery becomes structured and predictable",
        "Cumulative overload decreases measurably",
        "Stability improves across the workforce",
      ]}
      closerLine={"Built specifically for secondary trauma and repeated exposure \u2014 not general stress."}
      ctaLabel="Explore the Science"
      ctaHref="/science"
    />
  )
}

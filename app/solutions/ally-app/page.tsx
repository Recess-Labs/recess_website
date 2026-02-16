import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "Frontline Ally App",
  description: "Repair overload in minutes with neuroscience-based stabilization protocols.",
}

export default function AllyAppPage() {
  return (
    <SolutionDetail
      icon={Smartphone}
      title="Repair Overload in Minutes"
      tagline="Training improves awareness. It doesn't repair the biological impact after repeated exposure."
      intro="The Frontline Ally App provides short, science-based protocols designed specifically for secondary trauma, moral injury, and acute emotional overload. Staff complete a brief emotional check-in, the app identifies strain patterns, and personalized stabilization protocols are delivered. Sessions take ~10 minutes and fit into real shifts."
      howTitle="How It Works"
      howItems={[
        "Staff complete a brief emotional check-in",
        "The app identifies strain patterns",
        "Personalized stabilization protocols are delivered",
        "Sessions take ~10 minutes and fit into real shifts",
      ]}
      withoutTitle="Without repair"
      withoutItems={[
        "Stress accumulates biologically",
        "Emotional reactivity increases",
        "Decision quality declines",
        "Burnout accelerates",
      ]}
      withTitle="With repair"
      withItems={[
        "Strain is reduced in real time",
        "Recovery becomes structured",
        "Cumulative overload decreases",
        "Stability improves over time",
      ]}
      closerLine="Built on evidence-informed trauma protocols. Learn more about the science behind the approach."
      ctaLabel="Explore the Science"
      ctaHref="/science"
    />
  )
}

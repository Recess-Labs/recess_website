import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Recess Signal\u2122 | AI-Powered Workforce Intelligence",
  description: "Predict and prevent workforce instability with early visibility into trauma load trends.",
}

export default function DashboardPage() {
  return (
    <SolutionDetail
      icon={BarChart3}
      color="#D4EDF9"
      num="03"
      title={"Recess Signal\u2122"}
      tagline="AI-Powered Trauma Load & Turnover Risk Intelligence"
      intro="Turnover and extended leave are lagging indicators. Recess Signal uses AI to detect emerging trauma load patterns and forecast workforce instability before it becomes visible in HR metrics. Leaders move from reactive crisis management to proactive stabilization."
      howTitle="What Leaders See"
      howItems={[
        "Rising emotional strain patterns across teams",
        "Overload risk signals before they become exits",
        "Turnover vulnerability indicators by department",
        "Team-level stability and recovery metrics",
        "Targeted intervention recommendations",
        "Organizational trend analysis over time",
      ]}
      withoutTitle="Without Visibility"
      withoutItems={[
        "Instability is discovered too late to prevent",
        "Turnover feels unpredictable and unmanageable",
        "Leaders react instead of prevent",
        "Crisis management consumes resources and morale",
      ]}
      withTitle={"With Recess Signal\u2122"}
      withItems={[
        "Intervene before exits and leaves occur",
        "Adjust staffing and support proactively",
        "Deploy targeted stabilization strategies",
        "Reduce reactive crisis management significantly",
      ]}
      closerLine={"Instability becomes measurable. Prevention becomes actionable."}
      ctaLabel="Request a Demo"
      ctaHref="/get-started"
    />
  )
}

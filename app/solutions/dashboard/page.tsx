import type { Metadata } from "next"
import { SolutionDetail } from "@/components/solution-detail"
import { BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Emotional Operating Dashboard",
  description: "Predict and prevent workforce instability with early visibility into trauma load trends.",
}

export default function DashboardPage() {
  return (
    <SolutionDetail
      icon={BarChart3}
      title="Predict & Prevent Workforce Instability"
      tagline="Turnover is a lagging indicator."
      intro="The Emotional Operating Dashboard provides early visibility into trauma load trends across teams. Leadership can identify rising emotional strain patterns, overload risk signals, turnover vulnerability indicators, and team stability metrics."
      howTitle="What Leaders See"
      howItems={[
        "Rising emotional strain patterns",
        "Overload risk signals",
        "Turnover vulnerability indicators",
        "Team stability metrics",
      ]}
      withoutTitle="Without visibility"
      withoutItems={[
        "Instability is discovered too late",
        "Turnover feels unpredictable",
        "Leaders react instead of prevent",
        "Crisis management consumes resources",
      ]}
      withTitle="With the dashboard"
      withItems={[
        "Intervene before exits occur",
        "Adjust staffing and support proactively",
        "Deploy targeted stabilization strategies",
        "Reduce reactive crisis management",
      ]}
      closerLine="Prevention becomes measurable. Recess turns trauma exposure from an invisible liability into actionable intelligence."
      ctaLabel="Request a Demo"
      ctaHref="/get-started"
    />
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { SystemMapIllustration } from "@/components/illustrations"
import { Shield, Smartphone, BarChart3, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Full Implementation | Recess",
  description: "Deploy the complete Recess system for full workforce stabilization.",
}

const phases = [
  {
    phase: "Phase 1",
    icon: Shield,
    title: "Foundation",
    description: "Establish trauma-informed workforce standards, shared language, and leader training across your organization.",
    items: ["Workforce assessment", "Standards deployment", "Leader education", "Protocol integration"],
  },
  {
    phase: "Phase 2",
    icon: Smartphone,
    title: "Real-Time Support",
    description: "Deploy the Frontline Ally App for staff to access neuroscience-based stabilization protocols during or after shifts.",
    items: ["App rollout", "Staff onboarding", "Session personalization", "Usage monitoring"],
  },
  {
    phase: "Phase 3",
    icon: BarChart3,
    title: "Leadership Intelligence",
    description: "Activate the Emotional Operating Dashboard for predictive insights, early risk signals, and proactive team management.",
    items: ["Dashboard configuration", "Metrics calibration", "Leader training", "Ongoing optimization"],
  },
]

export default function ImplementationPage() {
  return (
    <PageWrapper>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
              Full Implementation
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Deploy one layer to strengthen a specific gap or integrate all three for full workforce stabilization.
            </p>
            <div className="mt-8">
              <Button asChild className="rounded-full font-serif font-semibold px-7 h-12 bg-foreground text-background hover:bg-foreground/90">
                <Link href="/get-started">Schedule a Free Strategy Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 flex flex-col items-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground text-center mb-10">The Complete System</h2>
          <SystemMapIllustration />
        </div>
      </section>

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((p, i) => (
              <div key={i} className="bg-secondary rounded-2xl p-8 border border-border/50 flex flex-col">
                <span className="font-serif text-xs font-bold text-accent tracking-widest uppercase">{p.phase}</span>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mt-4 mb-4">
                  <p.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.description}</p>
                <ul className="mt-auto flex flex-col gap-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Expected Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "30%", label: "Reduction in turnover" },
              { metric: "Fewer", label: "Crisis-driven leaves" },
              { metric: "Stronger", label: "Decision quality" },
              { metric: "Better", label: "Service outcomes" },
            ].map((item, i) => (
              <div key={i} className="bg-background rounded-xl p-5 border border-border/50">
                <p className="font-serif text-2xl font-bold text-accent">{item.metric}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

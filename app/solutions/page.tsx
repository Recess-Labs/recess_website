import type { Metadata } from "next"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { SystemMapIllustration } from "@/components/illustrations"
import { FadeInSection } from "@/components/fade-in-section"
import { Shield, Smartphone, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Solutions | Recess",
  description: "Explore the Recess System: workforce standards, frontline stabilization, and leadership intelligence.",
}

const solutions = [
  {
    icon: Shield,
    num: "01",
    title: "Recess Foundation\u2122",
    tagline: "Trauma-Informed Workforce Standards & Training",
    desc: "Trauma-informed principles are widespread. Operational structure is not. Recess Foundation\u2122 translates trauma-informed awareness into consistent, system-level practice.",
    checks: [
      "Workforce-wide trauma-informed workshops",
      "Leadership calibration & nervous system education",
      "Practical response pathways after difficult events",
      "Integration into existing policies and workflows",
    ],
    withoutItems: ["Managers respond inconsistently", "Strain accumulates informally", "Emotional overload becomes normalized", "Duty-of-care gaps increase risk"],
    withItems: ["Response becomes predictable", "Leaders feel equipped", "Teams know what to expect", "Trauma exposure is addressed proactively"],
    closerLine: "Trauma exposure is structural. Your standards should be too.",
    href: "/solutions/workforce-system",
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Recess Frontline Ally\u2122",
    tagline: "Real-Time Trauma Stabilization for Professionals",
    desc: "Training builds awareness. It does not repair nervous system activation after repeated exposure. Recess Frontline Ally\u2122 provides short, neuroscience-informed stabilization protocols designed specifically for secondary trauma, moral injury, compassion fatigue, and acute emotional overload.",
    checks: [
      "Staff complete a brief check-in",
      "The system detects strain patterns",
      "Personalized stabilization protocols are delivered",
      "Sessions take ~10 minutes and fit into real workflows",
    ],
    withoutItems: ["Stress accumulates biologically", "Emotional reactivity increases", "Decision quality declines", "Burnout accelerates"],
    withItems: ["Strain is reduced in real time", "Recovery becomes predictable", "Cumulative overload decreases", "Stability improves over time"],
    closerLine: "Built specifically for secondary trauma and repeated exposure \u2014 not general stress.",
    href: "/solutions/ally-app",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Recess Signal\u2122",
    tagline: "AI-Powered Trauma Load & Turnover Risk Intelligence",
    desc: "Turnover and extended leave are lagging indicators. Recess Signal\u2122 uses AI to detect emerging trauma load patterns and forecast workforce instability before it becomes visible in HR metrics.",
    checks: [
      "Emotional strain indicators",
      "Engagement & usage patterns",
      "Biometric activation data",
      "Organizational trend analysis",
    ],
    withoutItems: ["Instability is discovered too late", "Turnover feels unpredictable", "Leaders react instead of prevent", "Crisis management consumes resources"],
    withItems: ["Intervene before exits occur", "Adjust staffing proactively", "Deploy targeted stabilization strategies", "Reduce reactive crisis management"],
    closerLine: "Instability becomes measurable. Prevention becomes actionable.",
    href: "/solutions/dashboard",
  },
]

export default function SolutionsPage() {
  return (
    <PageWrapper>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                {"The Recess System\u2122"}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Three layers of emotional infrastructure for trauma-exposed workforces. Deploy one layer to strengthen a specific gap — or integrate all three to stabilize your workforce at scale.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200} className="mt-12 flex justify-center">
            <SystemMapIllustration />
          </FadeInSection>
        </div>
      </section>

      {solutions.map((s, i) => (
        <section key={i} className={`${i % 2 === 0 ? "bg-secondary" : "bg-background"} py-16 lg:py-20`}>
          <div className="mx-auto max-w-7xl px-6">
            <FadeInSection>
              <div className="flex flex-col gap-10">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <s.icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="font-serif text-xs font-bold text-accent uppercase tracking-widest">{s.num}</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">{s.title}</h2>
                    <p className="mt-2 text-accent font-medium">{s.tagline}</p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                    <Link href={s.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-serif font-semibold text-foreground hover:text-accent transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-serif font-bold text-muted-foreground uppercase tracking-widest mb-3">What It Includes</p>
                    <ul className="flex flex-col gap-3">
                      {s.checks.map((c, j) => (
                        <li key={j} className="flex items-start gap-3 bg-background/60 rounded-xl p-4 border border-border/30">
                          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/40 rounded-xl p-6 border border-border/30">
                    <p className="text-xs font-serif font-bold text-muted-foreground uppercase tracking-widest mb-3">Without structure</p>
                    <ul className="flex flex-col gap-2">
                      {s.withoutItems.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-destructive mt-0.5 shrink-0">{"--"}</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background/40 rounded-xl p-6 border border-accent/20">
                    <p className="text-xs font-serif font-bold text-accent uppercase tracking-widest mb-3">With Recess</p>
                    <ul className="flex flex-col gap-2">
                      {s.withItems.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="text-center text-sm font-serif font-medium text-foreground italic">{s.closerLine}</p>
              </div>
            </FadeInSection>
          </div>
        </section>
      ))}

      <section className="bg-secondary py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <p className="font-serif text-lg font-semibold text-foreground">Not Sure Where to Start?</p>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              Recess can be implemented in phases — or deployed as a fully integrated system.<br />
              Foundation sets the standards. Frontline Ally stabilizes individuals. Signal protects the system.
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90">
                <Link href="/get-started">Schedule a Free Strategy Call</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

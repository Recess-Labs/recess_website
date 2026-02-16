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
    title: "Trauma-Informed Workforce System",
    tagline: "Build the foundation for consistent response.",
    desc: "Without shared standards, trauma exposure is addressed informally — and unevenly. Recess establishes practical workforce standards: shared language, leader training, response pathways, and stabilization protocols.",
    checks: ["Aligns leadership around trauma exposure", "Reduces reactive management", "Creates consistent response to overload", "Strengthens duty-of-care compliance"],
    href: "/solutions/workforce-system",
  },
  {
    icon: Smartphone,
    num: "02",
    title: "Recess Frontline Ally App",
    tagline: "Stabilize overload in real time.",
    desc: "Training builds awareness. It doesn't repair nervous system activation after a hard shift. The Frontline Ally App delivers short, neuroscience-based stabilization protocols designed for secondary trauma, moral injury, and acute overload.",
    checks: ["Personalized relief in minutes", "Designed for use during or after shifts", "Reduces trauma disturbance and cumulative strain", "Low lift — no therapy, no downtime required"],
    href: "/solutions/ally-app",
  },
  {
    icon: BarChart3,
    num: "03",
    title: "Emotional Operating Dashboard",
    tagline: "Lead before instability spreads.",
    desc: "Turnover and incidents are late signals. The Emotional Operating Dashboard gives leadership early visibility into trauma load, rising emotional risk, and emerging instability patterns.",
    checks: ["Identify risk trends early", "Forecast turnover vulnerability", "Receive trauma-informed recommendations", "Strengthen workforce stability proactively"],
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
                Explore the Recess System
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Recess provides full emotional infrastructure for trauma-exposed workforces. Deploy one layer to strengthen a specific gap or integrate all three for full workforce stabilization.
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
            </FadeInSection>
          </div>
        </section>
      ))}

      <section className="bg-secondary py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <p className="font-serif text-lg font-semibold text-foreground">Not sure where to start?</p>
            <p className="mt-2 text-muted-foreground">Recess can be implemented in phases or deployed as a fully integrated system.</p>
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

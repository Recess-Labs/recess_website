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

const phases = [
  {
    phase: "Phase 1",
    icon: Shield,
    title: "Educate & Align Leadership",
    product: "Recess Foundation\u2122",
    color: "#F0ECF5",
    tagline: "Start here, no commitment required",
    description: "We begin by sharing neuroscience-informed knowledge about trauma exposure with your leadership team. No contracts. No platform rollout. Just clarity about what repeated exposure does to the nervous system and how it shows up in your workforce. If it resonates, we work together to build operational standards around it. Foundation can be deployed as a standalone layer, many organizations start and stay here.",
    items: [
      "Trauma exposure education for leadership",
      "Workforce-wide awareness workshops",
      "Practical post-incident response pathways",
      "Integration into existing policies and workflows",
    ],
    href: "/solutions/workforce-system",
  },
  {
    phase: "Phase 2",
    icon: Smartphone,
    title: "Stabilize the Frontline",
    product: "Recess Frontline Ally\u2122",
    color: "#F0ECF5",
    tagline: "Repair the nervous system between shifts",
    description: "Once your leadership understands the biological impact of repeated exposure, we deploy individual stabilization tools to your staff. This is where science becomes daily practice. Staff complete a brief check-in, the system detects strain patterns, and personalized stabilization protocols are delivered in ~10 minutes, designed specifically for secondary trauma, moral injury, and compassion fatigue.",
    items: [
      "Brief emotional check-in for staff",
      "AI-driven strain pattern detection",
      "Personalized stabilization protocols (~10 min)",
      "Fits into real shifts and real workflows",
    ],
    href: "/solutions/ally-app",
  },
  {
    phase: "Phase 3",
    icon: BarChart3,
    title: "Predict & Prevent Instability",
    product: "Recess Signal\u2122",
    color: "#F0ECF5",
    tagline: "Move from reactive to proactive",
    description: "With standards in place and individuals stabilized, the final layer gives your leadership eyes on the system as a whole. AI-powered analytics detect emerging trauma load patterns and forecast workforce instability before it shows up in HR metrics. Leaders move from reactive crisis management to proactive stabilization.",
    items: [
      "Emotional strain & overload indicators",
      "Turnover vulnerability signals",
      "Team-level stability metrics",
      "Targeted intervention recommendations",
    ],
    href: "/solutions/dashboard",
  },
]

export default function SolutionsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FDF0ED" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                {"The Recess System\u2122"}
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Three layers of emotional infrastructure for trauma-exposed workforces. Deploy one layer to strengthen a specific gap, or integrate all three to stabilize your workforce at scale.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild className="rounded-full font-serif font-semibold px-7 h-12 bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/get-started">Schedule Free Strategy Call</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-serif font-semibold px-7 h-12 border-border hover:bg-[#8D7AA0] hover:text-background hover:border-[#8D7AA0] transition-all">
                  <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer">
                    Take the Frontline Emotional Health Index
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200} className="mt-14 flex justify-center">
            <SystemMapIllustration />
          </FadeInSection>
        </div>
      </section>

      {/* How We Come In section */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeInSection>
            <p className="font-serif text-xs font-bold text-accent uppercase tracking-widest mb-4">How We Work With Organizations</p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight text-balance">
              Deploy in phases. Start with zero commitment. Scale when ready.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {"We don't ask for commitment upfront. We begin with education, sharing what the science says about trauma exposure and how it shows up in your workforce. If it resonates, we build from there. Each phase can stand on its own or integrate into a full system. You choose the pace."}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Phase cards */}
      {phases.map((p, i) => (
        <section key={i} className={`${i % 2 === 0 ? "bg-[#F5F5FF]" : "bg-background"} py-16 lg:py-20`}>
          <div className="mx-auto max-w-7xl px-6">
            <FadeInSection>
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: p.color }}>
                      <p.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <div>
                      <span className="font-serif text-xs font-bold text-accent uppercase tracking-widest">{p.phase}</span>
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground tracking-tight">{p.title}</h2>
                  <p className="mt-1.5 text-sm text-accent font-serif font-semibold">Powered by {p.product}</p>
                  <p className="mt-2 text-base text-muted-foreground font-medium font-serif italic">{p.tagline}</p>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed">{p.description}</p>
                  <div className="mt-6">
                    <Link href={p.href} className="inline-flex items-center gap-1.5 text-sm font-serif font-semibold text-foreground hover:text-accent hover:gap-2.5 transition-all">
                      Learn more about {p.product} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Right: what's included */}
                <div>
                  <p className="text-xs font-serif font-bold text-muted-foreground uppercase tracking-widest mb-4">{"What's Included"}</p>
                  <ul className="flex flex-col gap-3">
                    {p.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border/30 shadow-sm hover:shadow-md transition-shadow">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-base text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>
      ))}

      {/* Expected outcomes */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Expected Outcomes</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { metric: "Up to 30%", label: "Reduction in turnover" },
                { metric: "Fewer", label: "Crisis-driven leaves" },
                { metric: "Stronger", label: "Decision quality under pressure" },
                { metric: "Better", label: "Service & care outcomes" },
              ].map((item, i) => (
                <div key={i} className="bg-background rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-serif text-2xl font-bold text-accent">{item.metric}</p>
                  <p className="text-sm text-muted-foreground mt-1.5">{item.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Not sure where to start CTA */}
      <section className="bg-foreground py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <p className="font-serif text-xl font-semibold text-background">Not Sure Where to Start?</p>
            <p className="mt-3 text-background/50 leading-relaxed">
              Recess can be implemented in phases, or deployed as a fully integrated system.<br />
              Foundation sets the standards. Frontline Ally stabilizes individuals. Signal protects the system.
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-full font-serif font-semibold px-7 bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] transition-all">
                <Link href="/get-started">Schedule Free Strategy Call</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { StepIcon, SystemMapIllustration } from "@/components/illustrations"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const steps = [
  {
    step: 1 as const,
    title: "Detect Risk Early",
    subtitle: "Make the invisible visible.",
    desc: "Establish baseline team strain and surface early risk signals before instability shows up in turnover or leave patterns.",
  },
  {
    step: 2 as const,
    title: "Relieve Overload in Real Time",
    subtitle: "Stabilize after hard moments.",
    desc: "Short, neuroscience-based protocols designed for use during or after difficult interactions — built for real shifts.",
  },
  {
    step: 3 as const,
    title: "Predict & Prevent Instability",
    subtitle: "Lead before crisis spreads.",
    desc: "Dashboard trends and clear leader actions. Prevention becomes proactive — not reactive.",
  },
]

const outcomes = [
  "Up to 30% reduction in turnover",
  "Fewer crisis-driven leaves and absences",
  "Stronger decision quality under pressure",
  "More consistent care, instruction, and service outcomes",
]

export function StepsSection() {
  return (
    <section className="bg-[#F5F5FF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center text-balance">
            Stabilize Trauma Exposure in Three Steps
          </h2>
        </FadeInSection>

        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <FadeInSection key={i} delay={i * 150}>
              <div className="relative flex flex-col items-start">
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%+4px)] w-[calc(100%-52px)] border-t border-dashed border-accent/30" />
                )}
                <StepIcon step={s.step} />
                <p className="mt-4 font-serif text-xs font-bold text-accent uppercase tracking-widest">Step {s.step}</p>
                <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{s.subtitle}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Outcomes */}
        <FadeInSection delay={500} className="mt-16 bg-background rounded-2xl p-8 lg:p-10 border border-border/30 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="lg:w-1/2">
              <p className="font-serif text-xs font-bold text-accent uppercase tracking-widest mb-3">The Result</p>
              <h3 className="font-serif text-2xl font-bold text-foreground">A low-lift system for detecting and reducing trauma-driven instability at scale.</h3>
              <ul className="mt-5 flex flex-col gap-2.5">
                {outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {o}
                  </li>
                ))}
              </ul>
              <Link href="/solutions" className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground hover:text-accent font-serif font-semibold transition-colors">
                Explore the Recess System <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <SystemMapIllustration />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

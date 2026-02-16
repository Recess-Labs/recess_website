import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { FadeInSection } from "@/components/fade-in-section"
import { CheckCircle2, ArrowRight } from "lucide-react"

interface IndustryDetailProps {
  icon: React.ReactNode
  title: string
  tagline: string
  intro: string
  seenTitle: string
  seenItems: string[]
  costLine?: string
  whyTitle: string
  whyDesc: string
  whyItems: string[]
  howTitle: string
  howSteps: { label: string; desc: string }[]
  outcomes: string[]
  extra?: React.ReactNode
}

export function IndustryDetail(props: IndustryDetailProps) {
  return (
    <PageWrapper>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-2xl">
              <div className="mb-6">{props.icon}</div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                {props.title}
              </h1>
              <p className="mt-3 text-lg text-accent font-medium">{props.tagline}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">{props.intro}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild className="rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/get-started">Schedule a Free Strategy Call</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-serif font-semibold px-7 border-border hover:bg-secondary">
                  <Link href="/solutions">Explore the Recess System</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">{props.seenTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {props.seenItems.map((item, i) => (
                <div key={i} className="bg-background rounded-xl p-5 border border-border/40 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0 mt-1.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            {props.costLine && (
              <p className="mt-6 text-sm text-accent font-medium">{props.costLine}</p>
            )}
          </FadeInSection>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{props.whyTitle}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">{props.whyDesc}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {props.whyItems.map((item, i) => (
                <div key={i} className="bg-secondary rounded-xl p-5 border border-border/40 text-sm text-foreground">{item}</div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">{props.howTitle}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {props.howSteps.map((step, i) => (
                <div key={i} className="bg-background rounded-2xl p-7 border border-border/50">
                  <span className="font-serif text-xs font-bold text-accent uppercase tracking-widest">{step.label}</span>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Outcomes That Matter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {props.outcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-secondary rounded-xl p-5 border border-border/40">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {props.extra}

      <SharedCTA />
    </PageWrapper>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { FadeInSection } from "@/components/fade-in-section"
import { CheckCircle2, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SolutionDetailProps {
  icon: LucideIcon
  title: string
  tagline: string
  intro: string
  howTitle: string
  howItems: string[]
  withoutTitle: string
  withoutItems: string[]
  withTitle: string
  withItems: string[]
  closerLine: string
  ctaLabel: string
  ctaHref: string
}

export function SolutionDetail(props: SolutionDetailProps) {
  const Icon = props.icon
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-2xl">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                {props.title}
              </h1>
              <p className="mt-3 text-lg text-accent font-medium">{props.tagline}</p>
              <p className="mt-5 text-muted-foreground leading-relaxed">{props.intro}</p>
              <div className="mt-8">
                <Button asChild className="rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/get-started">Schedule a Free Strategy Call</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">{props.howTitle}</h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {props.howItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border/40">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* Without vs With */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl bg-secondary p-7 border border-border/50">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">{props.withoutTitle}</h3>
                <ul className="flex flex-col gap-3">
                  {props.withoutItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-accent/5 p-7 border border-accent/20">
                <h3 className="font-serif text-lg font-bold text-foreground mb-4">{props.withTitle}</h3>
                <ul className="flex flex-col gap-3">
                  {props.withItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Closer + CTA */}
      <section className="bg-secondary py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <p className="text-muted-foreground leading-relaxed mb-6">{props.closerLine}</p>
            <Link href={props.ctaHref} className="inline-flex items-center gap-1.5 text-sm font-serif font-semibold text-foreground hover:text-accent transition-colors">
              {props.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeInSection>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

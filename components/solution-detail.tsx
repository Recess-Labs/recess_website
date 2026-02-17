import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { FadeInSection } from "@/components/fade-in-section"
import { CheckCircle2, ArrowRight, X as XIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface SolutionDetailProps {
  icon: LucideIcon
  color: string
  num: string
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
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#F5F5FF" }}>
        {/* Decorative flowing lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <path d="M-100 400 Q300 300 720 380 T1540 320" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.08">
            <animate attributeName="d" values="M-100 400 Q300 300 720 380 T1540 320;M-100 380 Q300 340 720 350 T1540 360;M-100 400 Q300 300 720 380 T1540 320" dur="10s" repeatCount="indefinite" />
          </path>
        </svg>

        <div className="mx-auto max-w-7xl px-6 relative">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ backgroundColor: props.color }}>
                <Icon className="w-7 h-7 text-foreground" />
              </div>
              <span className="font-serif text-xs font-bold text-accent uppercase tracking-widest">{props.num}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance max-w-3xl">
              {props.title}
            </h1>
            <p className="mt-3 text-lg text-accent font-medium max-w-2xl">{props.tagline}</p>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-2xl">{props.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild className="rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90">
                <Link href="/get-started">Schedule Free Strategy Call</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full font-serif font-semibold px-7 border-border hover:bg-[#8D7AA0] hover:text-background hover:border-[#8D7AA0] transition-all">
                <Link href="/solutions">View Full System</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">{props.howTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {props.howItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#F5F5FF] rounded-xl p-5 border border-border/30 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Without vs With -- visual comparison */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Without */}
              <div className="rounded-2xl bg-background p-7 border border-border/50 relative overflow-hidden">
                {/* Subtle red top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-red-300 to-red-200 opacity-60" />
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center">
                    <XIcon className="w-4 h-4 text-red-400" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{props.withoutTitle}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {props.withoutItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                        <XIcon className="w-3 h-3 text-red-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* With Recess -- branded purple */}
              <div className="rounded-2xl p-7 border-2 border-[#8D7AA0] relative overflow-hidden" style={{ backgroundColor: "#F0ECF5" }}>
                {/* Purple top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8D7AA0] via-[#A394B5] to-[#8D7AA0]" />
                {/* Recess wave logo watermark */}
                <svg className="absolute top-4 right-4 w-10 h-10 opacity-[0.12]" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="#8D7AA0" strokeWidth="1.5" />
                  <path d="M12 20 Q16 12 20 20 Q24 28 28 20" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#8D7AA0] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-background" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">{props.withTitle}</h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {props.withItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-foreground font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#8D7AA0] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-background" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Closer line */}
      <section className="bg-background py-12 lg:py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <p className="text-lg md:text-xl font-serif font-medium text-foreground italic leading-relaxed">{props.closerLine}</p>
            <div className="mt-6">
              <Link href={props.ctaHref} className="inline-flex items-center gap-1.5 text-sm font-serif font-semibold text-foreground hover:text-accent transition-colors">
                {props.ctaLabel} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
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
              Recess can be implemented in phases -- or deployed as a fully integrated system.<br />
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

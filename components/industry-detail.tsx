import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { FadeInSection } from "@/components/fade-in-section"
import { CheckCircle2, ArrowRight, ShieldAlert } from "lucide-react"

interface IndustryDetailProps {
  icon: React.ReactNode
  title: string
  tagline: string
  intro: string
  heroImage: string
  heroImageAlt: string
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
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#F5F5FF" }}>
        {/* Decorative flowing lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 600">
          <path d="M-100 450 Q300 350 720 400 T1540 350" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.08">
            <animate attributeName="d" values="M-100 450 Q300 350 720 400 T1540 350;M-100 430 Q300 380 720 370 T1540 380;M-100 450 Q300 350 720 400 T1540 350" dur="10s" repeatCount="indefinite" />
          </path>
          <path d="M-100 500 Q400 400 720 450 T1540 420" stroke="#8D7AA0" strokeWidth="0.8" fill="none" opacity="0.05">
            <animate attributeName="d" values="M-100 500 Q400 400 720 450 T1540 420;M-100 480 Q400 430 720 420 T1540 450;M-100 500 Q400 400 720 450 T1540 420" dur="12s" repeatCount="indefinite" />
          </path>
        </svg>

        <div className="mx-auto max-w-7xl px-6 relative">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="mb-6">{props.icon}</div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                  {props.title}
                </h1>
                <p className="mt-3 text-lg text-accent font-medium">{props.tagline}</p>
                <p className="mt-5 text-base text-muted-foreground leading-relaxed">{props.intro}</p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button asChild className="rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90">
                    <Link href="/get-started">Schedule Free Strategy Call</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full font-serif font-semibold px-7 border-border hover:bg-[#8D7AA0] hover:text-background hover:border-[#8D7AA0] transition-all">
                    <Link href="/solutions">Explore the Recess System</Link>
                  </Button>
                </div>
              </div>
              {/* Industry image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/20">
                  <Image
                    src={props.heroImage}
                    alt={props.heroImageAlt}
                    width={640}
                    height={420}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Decorative accent behind image */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-accent/20" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* What leaders are seeing */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">{props.seenTitle}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {props.seenItems.map((item, i) => (
                <div key={i} className="bg-[#F5F5FF] rounded-xl p-5 border border-border/40 flex items-start gap-3 hover:shadow-md transition-shadow">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#F0ECF5" }}>
                    <ShieldAlert className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            {props.costLine && (
              <div className="mt-8 rounded-xl border-l-4 border-[#8D7AA0] bg-[#F0ECF5] p-5">
                <p className="text-base text-foreground font-medium">{props.costLine}</p>
              </div>
            )}
          </FadeInSection>
        </div>
      </section>

      {/* Why traditional approaches fall short */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">{props.whyTitle}</h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{props.whyDesc}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-5">
              {props.whyItems.map((item, i) => (
                <div key={i} className="relative bg-background rounded-2xl p-6 border border-border/40 hover:shadow-lg transition-all group">
                  {/* Gap / crack visual */}
                  <div className="absolute top-0 left-6 right-6 h-1 rounded-b-full" style={{ background: "linear-gradient(90deg, transparent 0%, #FFCCE5 30%, #FFEDAC 70%, transparent 100%)", opacity: 0.6 }} />
                  <div className="w-10 h-10 rounded-full bg-[#F0ECF5] flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
                      <line x1="12" y1="8" x2="12" y2="13" stroke="#29285D" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="12" cy="16" r="1" fill="#29285D" />
                    </svg>
                  </div>
                  <p className="text-base text-foreground leading-relaxed font-medium">{item}</p>
                  <div className="mt-4 w-full h-px bg-border/40" />
                  <p className="mt-3 text-sm text-muted-foreground italic">Current systems leave this gap open.</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Heroes Journey Emotional Section */}
      <section className="relative py-16 lg:py-20 overflow-hidden" style={{ backgroundColor: "#29285D" }}>
        {/* Animated wave bg */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 400">
          <path d="M0 200 Q360 100 720 200 T1440 200 V400 H0Z" fill="#8D7AA0">
            <animate attributeName="d" values="M0 200 Q360 100 720 200 T1440 200 V400 H0Z;M0 200 Q360 280 720 200 T1440 200 V400 H0Z;M0 200 Q360 100 720 200 T1440 200 V400 H0Z" dur="8s" repeatCount="indefinite" />
          </path>
        </svg>
        <div className="mx-auto max-w-4xl px-6 relative text-center">
          <FadeInSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#8D7AA0]/20 mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                <circle cx="12" cy="12" r="10" stroke="#AAF5D4" strokeWidth="1.5" fill="none" />
                <path d="M8 14 Q12 6 16 14" stroke="#AAF5D4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <circle cx="12" cy="10" r="2" fill="#AAF5D4" opacity="0.5" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-background tracking-tight text-balance">
              Your people show up every day carrying more than anyone should ask.
            </h2>
            <p className="mt-5 text-lg text-background/60 leading-relaxed max-w-2xl mx-auto">
              Recess gives them a system that shows up for them in return -- stabilizing the nervous system, reducing the load, and keeping your best people on the floor, in the classroom, and on the line.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-[#AAF5D4]/30" />
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <circle cx="12" cy="12" r="8" stroke="#AAF5D4" strokeWidth="1" fill="none" opacity="0.4" />
                <path d="M8 12 Q10 8 12 12 Q14 16 16 12" stroke="#AAF5D4" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              </svg>
              <div className="w-16 h-px bg-[#AAF5D4]/30" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How Recess stabilizes -- staged steps */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">{props.howTitle}</h2>
          </FadeInSection>

          <div className="relative">
            {/* Connecting line between steps (desktop) */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[#D4CCE0] via-[#8D7AA0] to-[#D4CCE0]" />

            <div className="grid md:grid-cols-3 gap-8">
              {props.howSteps.map((step, i) => {
                const colors = ["#F0ECF5", "#E8E0F0", "#D4CCE0"]
                const labels = ["Step 1", "Step 2", "Step 3"]
                const icons = [
                  // Detect - radar
                  <svg key="detect" viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                    <circle cx="16" cy="16" r="12" stroke="#29285D" strokeWidth="1.5" fill="none" />
                    <circle cx="16" cy="16" r="7" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.5" />
                    <circle cx="16" cy="16" r="2.5" fill="#29285D" />
                    <line x1="16" y1="16" x2="24" y2="8" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>,
                  // Relieve - wave
                  <svg key="relieve" viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                    <circle cx="16" cy="16" r="12" stroke="#29285D" strokeWidth="1.5" fill="none" />
                    <path d="M8 16 Q11 10 16 16 Q21 22 24 16" stroke="#29285D" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>,
                  // Predict - chart
                  <svg key="predict" viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                    <rect x="4" y="4" width="24" height="24" rx="6" stroke="#29285D" strokeWidth="1.5" fill="none" />
                    <line x1="10" y1="24" x2="10" y2="16" stroke="#8D7AA0" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="16" y1="24" x2="16" y2="10" stroke="#29285D" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="22" y1="24" x2="22" y2="18" stroke="#8D7AA0" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>,
                ]
                return (
                  <FadeInSection key={i} delay={i * 150}>
                    <div className="relative bg-background rounded-2xl border border-border/50 p-8 hover:shadow-xl transition-all text-center group">
                      {/* Step number circle */}
                      <div className="relative mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: colors[i] }}>
                        {icons[i]}
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold font-serif">
                          {i + 1}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-accent uppercase tracking-widest font-serif">{labels[i]}</span>
                      <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{step.label}</h3>
                      <p className="mt-3 text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </FadeInSection>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-4xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Outcomes That Matter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {props.outcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-background rounded-xl p-5 border border-border/40 hover:shadow-md transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-base text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/get-started"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-serif font-semibold text-base bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-all shadow-md"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {props.extra}

      <SharedCTA />
    </PageWrapper>
  )
}

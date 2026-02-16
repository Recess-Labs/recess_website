import type { Metadata } from "next"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Get Started",
  description: "Schedule a free 30-minute strategy call and see how Recess stabilizes trauma-exposed teams.",
}

const benefits = [
  {
    step: "1",
    title: "Where Trauma Exposure Is Creating Hidden Risk",
    desc: "How repeated exposure translates into turnover, extended leave, and operational strain — and what signals to look for.",
  },
  {
    step: "2",
    title: "How Recess Detects and Reduces Trauma Load",
    desc: "A walkthrough of our Trauma-Informed Workforce System, Frontline Ally App, and Emotional Operating Dashboard.",
  },
  {
    step: "3",
    title: "What Implementation Looks Like Inside Your Institution",
    desc: "Deployment timeline, data privacy, leadership visibility, and measurable outcomes.",
  },
]

const roles = [
  "Clinical Directors",
  "HR & Workforce Leaders",
  "Superintendents & Education Executives",
  "Chiefs, Command Staff & Public Safety Leaders",
  "Behavioral Health & Senior Living Executives",
]

export default function GetStartedPage() {
  return (
    <PageWrapper>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeInSection>
              <div>
                <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-4">Connect with Recess</p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance leading-tight">
                  See How Recess Stabilizes Trauma-Exposed Teams
                </h1>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Recess helps trauma-exposed organizations detect risk early and stabilize teams before it leads to turnover, leave, or operational disruption. In this 30-minute call, you&#39;ll see how our system works — and whether it fits your workforce.
                </p>

                <h3 className="font-serif text-lg font-bold text-foreground mt-10 mb-6">
                  In Your First 30 Minutes, You&#39;ll Learn:
                </h3>
                <div className="space-y-4">
                  {benefits.map((b) => (
                    <div key={b.step} className="flex items-start gap-4 bg-secondary rounded-xl p-5 border border-border/40">
                      <span className="w-8 h-8 rounded-full bg-foreground text-primary-foreground font-serif font-bold text-sm flex items-center justify-center shrink-0">
                        {b.step}
                      </span>
                      <div>
                        <p className="font-serif font-semibold text-foreground text-sm">{b.title}</p>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4">Who This Is For</h3>
                  <div className="flex flex-wrap gap-2">
                    {roles.map((role, i) => (
                      <span key={i} className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border/40">
                        {role}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    If your workforce absorbs crisis as part of the job, this conversation is for you.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-secondary rounded-2xl border border-border/40 p-8 lg:sticky lg:top-28">
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">Schedule Your Free 30-Minute Strategy Call</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  We&#39;ll map your exposure, identify risk points, and show you what stabilization can look like.
                </p>

                {/* Placeholder for scheduling embed */}
                <div className="bg-background rounded-xl border border-border/40 p-10 text-center mb-6">
                  <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16 mx-auto mb-4">
                    <rect width="64" height="64" rx="16" fill="#FDF0ED" />
                    <rect x="16" y="14" width="32" height="36" rx="4" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
                    <line x1="16" y1="24" x2="48" y2="24" stroke="#8D7AA0" strokeWidth="1.5" />
                    <circle cx="26" cy="18" r="2" fill="#29285D" />
                    <circle cx="38" cy="18" r="2" fill="#29285D" />
                    <rect x="22" y="30" width="8" height="6" rx="1" fill="#8D7AA0" opacity="0.3" />
                    <rect x="34" y="30" width="8" height="6" rx="1" fill="#8D7AA0" opacity="0.3" />
                    <rect x="22" y="40" width="8" height="6" rx="1" fill="#29285D" opacity="0.15" />
                    <rect x="34" y="40" width="8" height="6" rx="1" fill="#8D7AA0" opacity="0.3" />
                  </svg>
                  <p className="text-sm text-muted-foreground mb-4">Calendar scheduling widget loads here</p>
                  <Button className="rounded-full font-serif font-semibold px-8 bg-foreground text-background hover:bg-foreground/90">
                    Schedule Your Free Strategy Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                <div className="border-t border-border/40 pt-5">
                  <p className="text-xs text-muted-foreground mb-2">Prefer to start with a diagnostic?</p>
                  <Button asChild variant="outline" className="rounded-full font-serif text-xs font-semibold w-full border-border hover:bg-background">
                    <Link href="https://pulse.withrecess.com" target="_blank">
                      Take the Frontline Team Emotional Health Index&#8482;
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { FadeInSection } from "@/components/fade-in-section"

export const metadata: Metadata = {
  title: "About Recess",
  description: "Our vision, manifesto, and the team building emotional infrastructure for trauma-exposed workforces.",
}

const advisors = [
  { name: "Dr. Sarah Mitchell", credential: "PhD, Clinical Psychology", affiliation: "Trauma Research Institute" },
  { name: "Dr. James Okafor", credential: "MD, Neuroscience", affiliation: "National Nervous System Lab" },
  { name: "Linda Torres", credential: "MSW, LCSW", affiliation: "Behavioral Health Systems Leadership" },
  { name: "David Park", credential: "MBA", affiliation: "Workforce Policy & Organizational Strategy" },
  { name: "Dr. Amira Hassan", credential: "PhD, AI Systems", affiliation: "Technology Architecture" },
  { name: "Robert Chen", credential: "MPA", affiliation: "Public Safety Operations" },
]

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Vision */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-4">Our Vision</p>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground tracking-tight text-balance leading-tight">
                To support 1 million frontline professionals by 2030 by embedding emotional infrastructure inside the institutions that depend on them.
              </h1>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About the Company */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">About the Company</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Recess is a neuroscience-informed technology company focused on stabilizing trauma-exposed workforces.
                </p>
                <p>
                  We partner with healthcare systems, schools, and public safety agencies to address the biological impact of repeated trauma exposure — before it becomes turnover, extended leave, incident risk, and operational instability.
                </p>
                <p>
                  By integrating trauma processing science, nervous system regulation principles, and AI-driven personalization, Recess makes invisible emotional strain measurable and manageable at workforce scale.
                </p>
              </div>
              <div className="mt-8 bg-foreground rounded-xl p-6">
                <p className="text-primary-foreground font-serif font-semibold text-lg">
                  We are not a wellness app.
                </p>
                <p className="text-primary-foreground/80 mt-1">
                  We are infrastructure built for high-exposure environments.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">Our Manifesto</h2>
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-foreground font-serif font-semibold text-lg">
                    Trauma exposure is not an individual weakness.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    It is a structural condition of high-impact work.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-muted-foreground leading-relaxed">
                    In healthcare, education, and public safety, people absorb crisis as part of their role. Over time, that exposure accumulates biologically.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When it is ignored, instability follows.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Extended leave", "Turnover", "Escalation", "Loss of trust"].map((item, i) => (
                    <div key={i} className="bg-secondary rounded-xl p-4 text-center">
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Most institutions respond with training and wellness programs. Few address the nervous system strain driving the instability.
                </p>
                <div className="bg-secondary rounded-xl border border-border/40 p-6">
                  <p className="text-sm text-foreground font-serif font-semibold mb-3">We believe:</p>
                  <ul className="space-y-2">
                    {[
                      "Stability is operational, not optional.",
                      "Emotional risk should be measurable.",
                      "Prevention must be proactive.",
                      "Infrastructure should protect the people who protect others.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-foreground font-serif font-semibold">
                  If exposure is structural, stabilization must be structural too. That is the future of workforce resilience.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Advisory Board</h2>
            <p className="text-muted-foreground mb-8">
              Recess is guided by experts across trauma research, neuroscience, behavioral health systems, workforce policy, and AI architecture.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {advisors.map((a, i) => (
                <div key={i} className="bg-background rounded-xl border border-border/40 p-6">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-accent">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="font-serif font-semibold text-foreground text-sm">{a.name}</p>
                  <p className="text-xs text-accent mt-1">{a.credential}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{a.affiliation}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Backed By */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Backed By</h2>
            <p className="text-center text-muted-foreground mb-10">
              Supported by leading partners and innovation ecosystems across digital health, workforce innovation, and behavioral science.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-24 h-14 rounded-xl bg-secondary border border-border/30 flex items-center justify-center">
                  <svg viewBox="0 0 80 32" fill="none" className="w-16 opacity-30">
                    <rect x="4" y="4" width="72" height="24" rx="4" stroke="#8D7AA0" strokeWidth="1" />
                    <text x="40" y="20" textAnchor="middle" fill="#8D7AA0" fontSize="8" fontFamily="system-ui">Partner {i + 1}</text>
                  </svg>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { RepairEngineDiagram, NervousSystemIllustration } from "@/components/illustrations"
import { WhitePaperModal } from "@/components/white-paper-modal"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Science",
  description: "The neuroscience and trauma-processing research behind Recess — built specifically for secondary trauma and repeated exposure.",
}

export default function SciencePage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FDF0ED" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-2xl">
              <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-4">Our Science</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                The Science Behind Recess
              </h1>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                A brain-based approach to stabilizing trauma exposure at work.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Repeated exposure to crisis, grief, and distress changes how the brain and nervous system respond to stress. Over time, the body stays more activated. Recovery becomes slower. Emotional reactivity increases. Decision quality declines.
              </p>
              <p className="mt-4 font-serif text-foreground font-semibold">
                This is not just burnout. It is accumulated biological strain.
              </p>
              <div className="mt-6 bg-secondary rounded-xl border border-border/40 p-5 inline-block">
                <p className="text-sm text-accent font-medium">
                  Built specifically for secondary trauma and repeated exposure — not general stress.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 1: Nervous System */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Trauma Exposure Is Stored in the Nervous System
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Research in secondary trauma and compassion fatigue shows that repeated exposure to distress impacts:
                </p>
                <ul className="space-y-3">
                  {["Emotional regulation", "Cognitive flexibility", "Stress recovery", "Behavioral response under pressure"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  When activation becomes chronic, instability becomes predictable. That is why stabilization must go beyond awareness and address the nervous system itself.
                </p>
              </div>
              <div className="flex justify-center">
                <NervousSystemIllustration />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 2: AIP Model */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Built on the Adaptive Information Processing (AIP) Model
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recess draws from the Adaptive Information Processing (AIP) model — the foundation behind EMDR. The AIP model proposes that distressing experiences can become maladaptively stored, leaving the body and brain more reactive in future situations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional therapy helps reprocess these experiences in clinical settings. Recess adapts core AIP principles into structured, guided protocols designed specifically for:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {["Secondary trauma", "Moral injury", "Compassion fatigue", "Acute overload in professional roles"].map((item, i) => (
                  <div key={i} className="bg-secondary rounded-xl p-4 border border-border/40 text-sm text-foreground">
                    {item}
                  </div>
                ))}
              </div>
              <div className="bg-foreground rounded-xl p-5">
                <p className="text-sm text-primary-foreground font-medium">
                  This is not therapy. It is structured stabilization built for real-world shifts.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3: Polyvagal + HRV */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nervous System Regulation, Not Just Resilience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recess protocols are also informed by:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Polyvagal theory — how the autonomic nervous system regulates safety and threat",
                  "Heart Rate Variability (HRV) research — a measurable indicator of stress and recovery",
                  "Secondary trauma and occupational stress literature",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground font-serif font-semibold">
                The goal is simple: Reduce nervous system activation. Support recovery. Prevent cumulative overload.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4: REPAIR Engine */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-xs font-serif font-bold text-accent uppercase tracking-widest mb-3">Real-Time Emotional Processing & Adaptive Intervention Response</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                The REPAIR&#8482; Engine
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                At the center of Recess is the REPAIR&#8482; Engine — our AI-driven personalization model that integrates three inputs to tailor stabilization in real time.
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <RepairEngineDiagram />
            </div>
            <p className="text-center text-muted-foreground text-sm max-w-2xl mx-auto">
              By synthesizing emotional signals, engagement patterns, and biometric input, REPAIR&#8482; adjusts pacing, modality, and protocol intensity — creating a self-paced experience matched to the user&#39;s current activation level.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Why This Matters</h2>
            <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              Most digital wellness tools deliver generic content. Recess integrates:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {[
                "Trauma-processing principles",
                "Nervous system regulation science",
                "Behavioral pattern recognition",
                "Biometric-informed personalization",
                "AI-driven adaptive delivery",
                "Mental health data set for frontline",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border/40">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* White Paper + Disclaimer */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Evidence & Research Base</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              The research foundations behind Recess — including secondary trauma literature, AIP processing theory, polyvagal research, and HRV-based stress science — are detailed in our White Paper.
            </p>
            <WhitePaperModal />
            <div className="mt-10 bg-secondary rounded-xl border border-border/40 p-6">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Important Note:</span> Recess is not a substitute for clinical therapy. It is designed to provide structured stabilization support within professional environments.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageWrapper>
  )
}

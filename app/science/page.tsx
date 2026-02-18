import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { RepairEngineDiagram, NervousSystemIllustration } from "@/components/illustrations"
import { WhitePaperModal } from "@/components/white-paper-modal"
import { CheckCircle2, AlertTriangle, ShieldAlert } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Science",
  description: "The neuroscience and trauma-processing research behind Recess, built specifically for secondary trauma and repeated exposure.",
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
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Repeated exposure to crisis, grief, and distress changes how the brain and nervous system respond to stress. Over time, the body stays more activated. Recovery becomes slower. Emotional reactivity increases. Decision quality declines.
              </p>
              <p className="mt-4 font-serif text-lg text-foreground font-semibold">
                This is not just burnout. It is accumulated biological strain.
              </p>

              {/* Callout styled like a nervous system signal */}
              <div className="mt-8 relative overflow-hidden rounded-2xl border-2 border-[#8D7AA0]/30" style={{ backgroundColor: "#F5F5FF" }}>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <svg className="absolute -right-4 -top-4 w-32 h-32 opacity-[0.06]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="#29285D" strokeWidth="1" fill="none" />
                    <path d="M30 50 Q40 30 50 50 Q60 70 70 50" stroke="#29285D" strokeWidth="1.5" fill="none" />
                  </svg>
                  <svg className="absolute -left-2 -bottom-2 w-24 h-24 opacity-[0.06]" viewBox="0 0 100 100">
                    <path d="M20 80 Q30 20 50 50 Q70 80 80 20" stroke="#8D7AA0" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <div className="flex items-start gap-4 p-6 relative z-10">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#8D7AA0]/10 flex items-center justify-center mt-0.5">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <circle cx="12" cy="8" r="5" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
                      <path d="M12 13v6" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M12 16 Q8 18 5 22" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round" />
                      <path d="M12 16 Q16 18 19 22" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.6" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-base text-foreground font-serif font-semibold leading-relaxed">
                    Built specifically for secondary trauma and repeated exposure, not general stress.
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#8D7AA0]/40 via-[#29285D]/20 to-[#8D7AA0]/40" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 1: Nervous System */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Trauma Exposure Is Stored in the Nervous System
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  Research in secondary trauma and compassion fatigue shows that repeated exposure to distress impacts:
                </p>
                <ul className="space-y-4">
                  {["Emotional regulation", "Cognitive flexibility", "Stress recovery", "Behavioral response under pressure"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-base text-foreground">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-base text-muted-foreground leading-relaxed">
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
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Built on the Adaptive Information Processing (AIP) Model
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                Recess draws from the Adaptive Information Processing (AIP) model, the foundation behind EMDR. The AIP model proposes that distressing experiences can become maladaptively stored, leaving the body and brain more reactive in future situations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Traditional therapy helps reprocess these experiences in clinical settings. Recess adapts core AIP principles into structured, guided protocols designed specifically for:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {["Secondary trauma", "Moral injury", "Compassion fatigue", "Acute overload in professional roles"].map((item, i) => (
                  <div key={i} className="bg-background rounded-xl p-5 border border-border/40 text-base text-foreground flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Caution callout for "not therapy" */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300/60 bg-amber-50">
                <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
                <div className="flex items-start gap-4 p-6">
                  <div className="shrink-0 w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center border border-amber-200">
                    <ShieldAlert className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-foreground text-base mb-1">Important Distinction</p>
                    <p className="text-base text-foreground/80 leading-relaxed">
                      This is not therapy. It is structured stabilization built for real-world shifts.
                    </p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400" />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 3: Polyvagal + HRV */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
                Nervous System Regulation, Not Just Resilience
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Recess protocols are also informed by:
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Polyvagal theory, how the autonomic nervous system regulates safety and threat",
                  "Heart Rate Variability (HRV) research, a measurable indicator of stress and recovery",
                  "Secondary trauma and occupational stress literature",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-foreground bg-[#F5F5FF] rounded-xl p-5 border border-border/30">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-foreground rounded-2xl p-6">
                <p className="text-base text-background font-serif font-semibold leading-relaxed">
                  The goal is simple: Reduce nervous system activation. Support recovery. Prevent cumulative overload.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Section 4: REPAIR Engine */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="text-center mb-10">
              <p className="text-xs font-serif font-bold text-accent uppercase tracking-widest mb-3">Real-Time Emotional Processing & Adaptive Intervention Response</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {"The REPAIR\u2122 Engine"}
              </h2>
              <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {"At the center of Recess is the REPAIR\u2122 Engine, our AI-driven personalization model that integrates three inputs to tailor stabilization in real time."}
              </p>
            </div>
            <div className="flex justify-center mb-10">
              <RepairEngineDiagram />
            </div>
            <p className="text-center text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {"By synthesizing emotional signals, engagement patterns, and biometric input, REPAIR\u2122 adjusts pacing, modality, and protocol intensity, creating a self-paced experience matched to the user\u2019s current activation level."}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Why This Matters</h2>
            <p className="text-center text-base text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
              Most digital wellness tools deliver generic content. Recess integrates:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Trauma-processing principles",
                "Nervous system regulation science",
                "Behavioral pattern recognition",
                "Biometric-informed personalization",
                "AI-driven adaptive delivery",
                "Mental health data set for frontline",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#F5F5FF] rounded-xl p-5 border border-border/30 hover:shadow-sm transition-shadow">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-base text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* White Paper + Disclaimer */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">Evidence & Research Base</h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              The research foundations behind Recess, including secondary trauma literature, AIP processing theory, polyvagal research, and HRV-based stress science, are detailed in our white paper: <span className="font-semibold text-foreground">Lost Productivity, Lost Profits Recess White Paper</span>.
            </p>
            <WhitePaperModal />

            {/* Disclaimer with caution styling */}
            <div className="mt-10 relative overflow-hidden rounded-2xl border border-amber-200/60 bg-amber-50/50 text-left">
              <div className="flex items-start gap-3 p-5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/70 leading-relaxed">
                  <span className="font-semibold text-foreground">Important Note:</span> Recess is not a substitute for clinical therapy. It is designed to provide structured stabilization support within professional environments.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageWrapper>
  )
}

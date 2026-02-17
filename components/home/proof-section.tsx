import { FadeInSection } from "@/components/fade-in-section"
import { Play } from "lucide-react"

export function ProofSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-center text-balance">
            Emotional Overload Is Often Invisible — Until It Isn{"'"}t
          </h2>
        </FadeInSection>

        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FadeInSection delay={100}>
            <div className="bg-[#F5F5FF] rounded-2xl p-7 border border-border/30 relative hover:shadow-md transition-shadow">
              {/* Avatar illustration */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#FFCCE5" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <circle cx="12" cy="8" r="4" stroke="#29285D" strokeWidth="1.5" fill="none" />
                    <path d="M4 20 C4 16 7 13 12 13 C17 13 20 16 20 20" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-foreground">Provider</p>
                  <p className="text-xs text-muted-foreground">Frontline care worker</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed italic">
                {"\"I didn't realize how much I was carrying until I couldn't sleep\u2026 and I started dreading work.\""}
              </blockquote>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-[#F5F5FF] rounded-2xl p-7 border border-border/30 relative hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#D4EDF9" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <rect x="3" y="6" width="18" height="12" rx="3" stroke="#29285D" strokeWidth="1.5" fill="none" />
                    <path d="M8 12h8M8 15h5" stroke="#29285D" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-sm font-semibold text-foreground">Leader</p>
                  <p className="text-xs text-muted-foreground">Operations director</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed italic">
                {"\"We were seeing leave spikes, scheduling chaos, and constant strain. Training didn't change what was happening day to day.\""}
              </blockquote>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={300} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Recess is built for the moment after the hardest moments — so trauma load doesn{"'"}t silently accumulate into exits and incidents.
          </p>
        </FadeInSection>

        {/* Video placeholder */}
        <FadeInSection delay={400} className="mt-10 max-w-2xl mx-auto">
          <div className="relative bg-foreground rounded-2xl aspect-video flex items-center justify-center overflow-hidden group cursor-pointer">
            {/* Abstract video poster */}
            <svg viewBox="0 0 640 360" fill="none" className="absolute inset-0 w-full h-full">
              <rect width="640" height="360" fill="#29285D" />
              <circle cx="320" cy="180" r="100" fill="#8D7AA0" opacity="0.1" />
              <circle cx="320" cy="180" r="60" fill="#8D7AA0" opacity="0.1" />
              <text x="320" y="320" textAnchor="middle" fill="#FFFFFF" fontSize="12" opacity="0.3" fontFamily="system-ui">Stabilization in Practice</text>
            </svg>
            <div className="relative z-10 w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Play className="w-7 h-7 text-accent-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

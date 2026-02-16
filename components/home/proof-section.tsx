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
            <div className="bg-secondary rounded-2xl p-7 border border-border/50 relative">
              {/* Avatar illustration */}
              <div className="flex items-center gap-3 mb-4">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0">
                  <circle cx="20" cy="20" r="20" fill="#8D7AA0" opacity="0.15" />
                  <circle cx="20" cy="16" r="6" fill="#8D7AA0" opacity="0.4" />
                  <path d="M8 36 C8 28 14 24 20 24 C26 24 32 28 32 36" fill="#8D7AA0" opacity="0.3" />
                </svg>
                <div>
                  <p className="font-serif text-sm font-semibold text-foreground">Provider</p>
                  <p className="text-xs text-muted-foreground">Frontline care worker</p>
                </div>
              </div>
              <blockquote className="text-muted-foreground leading-relaxed italic">
                {"\"I didn't realize how much I was carrying until I couldn't sleep… and I started dreading work.\""}
              </blockquote>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-secondary rounded-2xl p-7 border border-border/50 relative">
              <div className="flex items-center gap-3 mb-4">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10 shrink-0">
                  <circle cx="20" cy="20" r="20" fill="#29285D" opacity="0.1" />
                  <circle cx="20" cy="16" r="6" fill="#29285D" opacity="0.3" />
                  <path d="M8 36 C8 28 14 24 20 24 C26 24 32 28 32 36" fill="#29285D" opacity="0.2" />
                </svg>
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

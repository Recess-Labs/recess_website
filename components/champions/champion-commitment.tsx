import { FadeInSection } from "@/components/fade-in-section"

export function ChampionCommitment() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-3">
              Your Commitment
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-8 text-balance">
              More value than you think.
            </h2>

            <div className="relative pl-6 border-l-2 border-accent">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Use the app. Share what resonates and what doesn&apos;t. Join the monthly call when you can.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No extra workload. No formal reports. Just your honest perspective — from someone who knows what this work actually feels like.
              </p>
            </div>

            {/* Visual summary */}
            <div className="mt-12 grid sm:grid-cols-3 gap-4">
              <div className="bg-[#F5F5FF] rounded-xl p-6 border border-border/20 text-center">
                <p className="font-serif text-2xl font-bold text-foreground mb-2">Use</p>
                <p className="text-sm text-muted-foreground">Engage with the app regularly</p>
              </div>
              <div className="bg-[#F5F5FF] rounded-xl p-6 border border-border/20 text-center">
                <p className="font-serif text-2xl font-bold text-foreground mb-2">Share</p>
                <p className="text-sm text-muted-foreground">Tell us what works and what doesn&apos;t</p>
              </div>
              <div className="bg-[#F5F5FF] rounded-xl p-6 border border-border/20 text-center">
                <p className="font-serif text-2xl font-bold text-foreground mb-2">Connect</p>
                <p className="text-sm text-muted-foreground">Join monthly calls when able</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

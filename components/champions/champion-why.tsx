import { FadeInSection } from "@/components/fade-in-section"
import { Users, Lightbulb, Heart } from "lucide-react"

export function ChampionWhy() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-3">
              Why This Exists
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              We want to build this with you.
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The people who understand this work best are the ones living it. Recess Champions is a founding group of frontline professionals who get full access, shape what we build, and carry pricing no one else will ever see.
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              Your experience is the product. We want it in the room.
            </p>
          </div>
        </FadeInSection>

        {/* Visual cards */}
        <FadeInSection delay={200}>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            <div className="relative bg-[#F5F5FF] rounded-2xl p-8 border border-border/30 overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 shadow-md">
                <Users className="w-7 h-7 text-background" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Full Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get everything first. New features, protocols, and updates — no waitlists, no restrictions.
              </p>
            </div>

            <div className="relative bg-[#F5F5FF] rounded-2xl p-8 border border-border/30 overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 shadow-md">
                <Lightbulb className="w-7 h-7 text-background" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Direct Influence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your feedback shapes real product decisions. Monthly calls with the team mean your voice matters.
              </p>
            </div>

            <div className="relative bg-[#F5F5FF] rounded-2xl p-8 border border-border/30 overflow-hidden group hover:shadow-lg transition-all">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              <div className="w-14 h-14 rounded-xl bg-foreground flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-7 h-7 text-background" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">Locked Pricing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founding member rates that never change. Your loyalty today means lifetime savings.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

import { FadeInSection } from "@/components/fade-in-section"
import { Sparkles, Mic, Award, Gift, ArrowRight } from "lucide-react"

const perks = [
  {
    icon: Sparkles,
    title: "First access to every release",
    description: "New features and protocols reach you before anyone else. No waitlists.",
  },
  {
    icon: Mic,
    title: "A direct voice in what we build",
    description: "Monthly call with the Recess team. Your feedback shapes real product decisions.",
  },
  {
    icon: Award,
    title: "Recess Champion badge on LinkedIn",
    description: "Recognition as a founding member — for professionals who helped build something meaningful.",
  },
  {
    icon: Gift,
    title: "Recess swag",
    description: "For being here before anyone else.",
  },
]

export function ChampionPerks() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "#F5F5FF" }}>
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-accent/10" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-accent/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-3">
              What You Get
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Everything early. Everything discounted.
            </h2>
          </div>
        </FadeInSection>

        {/* Pricing banner */}
        <FadeInSection delay={100}>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative bg-background rounded-3xl border border-border/30 shadow-lg overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#D4CCE0] via-accent to-[#D4CCE0]" />
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center justify-between gap-6">
                  <div>
                    <span className="inline-block text-xs font-serif font-bold text-accent uppercase tracking-widest bg-[#F5F5FF] rounded-full px-3 py-1 mb-4">
                      Champion Pricing
                    </span>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="text-3xl text-muted-foreground/50 line-through font-serif">$249</span>
                      <ArrowRight className="w-5 h-5 text-accent" />
                      <span className="text-5xl font-serif font-bold text-foreground">$99</span>
                      <span className="text-muted-foreground">/ year, locked forever</span>
                    </div>
                  </div>
                  <div className="bg-[#F5F5FF] rounded-xl p-5 border border-border/20 max-w-xs">
                    <p className="text-foreground font-medium leading-relaxed">
                      Plus 12 months completely free to start. Your rate never changes — no matter what.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Perks list */}
        <FadeInSection delay={200}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl border border-border/30 shadow-md overflow-hidden divide-y divide-border/30">
              {perks.map((perk, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-5 p-6 hover:bg-[#F5F5FF]/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <perk.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{perk.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

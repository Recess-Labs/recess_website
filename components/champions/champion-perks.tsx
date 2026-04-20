"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { Sparkles, Mic, Award, Gift, ArrowRight, Check } from "lucide-react"

const perks = [
  {
    icon: Sparkles,
    title: "First access to every release",
    description: "New features and protocols reach you before anyone else. No waitlists.",
    color: "#FFCCE5",
  },
  {
    icon: Mic,
    title: "A direct voice in what we build",
    description: "Monthly call with the Recess team. Your feedback shapes real product decisions.",
    color: "#AAF5D4",
  },
  {
    icon: Award,
    title: "Recess Champion badge on LinkedIn",
    description: "Recognition as a founding member — for professionals who helped build something meaningful.",
    color: "#FFEDAC",
  },
  {
    icon: Gift,
    title: "Recess swag",
    description: "For being here before anyone else.",
    color: "#D4EDF9",
  },
]

export function ChampionPerks() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#F5F5FF]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8D7AA0]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FFCCE5]/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#8D7AA0]/10 border border-[#8D7AA0]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8D7AA0]" />
              <span className="text-xs font-sans font-semibold text-[#29285D] tracking-widest uppercase">
                What You Get
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Everything early.
              <br />
              <span className="bg-gradient-to-r from-[#8D7AA0] via-[#FFCCE5] to-[#AAF5D4] bg-clip-text text-transparent">Everything discounted.</span>
            </h2>
          </div>
        </FadeInSection>

        {/* Pricing banner - highlight card */}
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#29285D]">
              {/* Animated gradient overlays */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#8D7AA0]/30 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FFCCE5]/20 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#AAF5D4]/15 rounded-full blur-[50px] animate-pulse" style={{ animationDelay: "0.5s" }} />
              
              <div className="relative p-10 md:p-14">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div>
                    <div className="inline-block bg-gradient-to-r from-[#FFCCE5] to-[#AAF5D4] text-[#29285D] text-xs font-bold px-5 py-2 rounded-full mb-5 uppercase tracking-wide shadow-lg">
                      Champion Pricing
                    </div>
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <span className="text-4xl font-serif text-white/40 line-through">$249</span>
                      <ArrowRight className="w-6 h-6 text-[#AAF5D4]" />
                      <span className="text-7xl md:text-8xl font-serif font-bold text-white">$99</span>
                      <span className="text-xl text-white/60">/ year, locked forever</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm border border-white/20">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#AAF5D4] to-[#FFEDAC] flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-[#29285D]" />
                      </div>
                      <p className="text-white font-medium leading-relaxed text-lg">
                        Plus 12 months completely free to start
                      </p>
                    </div>
                    <p className="text-white/60 text-sm pl-14">
                      Your rate never changes — no matter what.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Perks grid */}
        <FadeInSection delay={200}>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {perks.map((perk, i) => (
              <div 
                key={i} 
                className="group relative bg-white rounded-2xl p-7 border border-[#E8E0EC] shadow-sm hover:shadow-xl hover:border-[#8D7AA0]/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: perk.color }}
                  >
                    <perk.icon className="w-7 h-7 text-[#29285D]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">{perk.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{perk.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

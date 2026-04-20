"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { Sparkles, Mic, Award, Gift, ArrowRight, Check } from "lucide-react"

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
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1D9E75]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1D9E75]/10 border border-[#1D9E75]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
              <span className="text-xs font-sans font-semibold text-[#04342C] tracking-widest uppercase">
                What You Get
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
              Everything early.
              <br />
              <span className="text-[#1D9E75]">Everything discounted.</span>
            </h2>
          </div>
        </FadeInSection>

        {/* Pricing banner - highlight card */}
        <FadeInSection delay={100}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-3xl" style={{ backgroundColor: "#04342C" }}>
              {/* Animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1D9E75]/0 via-[#1D9E75]/20 to-[#1D9E75]/0 animate-pulse" />
              
              <div className="relative p-8 md:p-12">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div>
                    <div className="inline-block bg-[#5DCAA5] text-[#04342C] text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
                      Champion Pricing
                    </div>
                    <div className="flex items-baseline gap-4 flex-wrap">
                      <span className="text-4xl font-serif text-[#9FE1CB]/60 line-through">$249</span>
                      <ArrowRight className="w-6 h-6 text-[#5DCAA5]" />
                      <span className="text-6xl md:text-7xl font-serif font-bold text-white">$99</span>
                      <span className="text-xl text-[#9FE1CB]">/ year, locked forever</span>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm border border-white/10">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#5DCAA5] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#04342C]" />
                      </div>
                      <p className="text-white font-medium leading-relaxed">
                        Plus 12 months completely free to start
                      </p>
                    </div>
                    <p className="text-[#9FE1CB] text-sm pl-11">
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
                className="group relative bg-white rounded-2xl p-6 border border-[#04342C]/10 shadow-sm hover:shadow-xl hover:border-[#1D9E75]/30 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1D9E75] to-[#04342C] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <perk.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">{perk.title}</h3>
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

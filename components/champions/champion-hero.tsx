"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { ArrowDown, Star, Zap, Shield } from "lucide-react"

export function ChampionHero() {
  const scrollToForm = () => {
    document.getElementById("champion-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ backgroundColor: "#04342C" }}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full bg-[#1D9E75]/30 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#5DCAA5]/20 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#AAF5D4]/10 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative mx-auto max-w-6xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column - content */}
          <div>
            <FadeInSection>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5DCAA5] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5DCAA5]" />
                </span>
                <span className="text-xs font-sans font-semibold text-[#5DCAA5] tracking-widest uppercase">
                  Exclusive Founding Group
                </span>
              </div>

              {/* Main headline */}
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Become a Recess
                <br />
                <span className="text-[#5DCAA5]">Champion</span>
              </h1>

              <p className="mt-6 text-xl text-[#9FE1CB] leading-relaxed max-w-lg">
                Early access. Locked pricing. A direct voice in what we build — for frontline professionals who want in from the start.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <button
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center gap-3 rounded-xl px-8 py-4 font-serif font-bold text-lg bg-[#1D9E75] text-white hover:bg-[#25B385] transition-all shadow-2xl shadow-[#1D9E75]/30 hover:shadow-[#1D9E75]/50 hover:-translate-y-0.5"
                >
                  Apply to Join
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
                <div className="flex items-center gap-2 text-[#5DCAA5]">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-[#1D9E75] border-2 border-[#04342C] flex items-center justify-center text-xs font-bold text-white">S</div>
                    <div className="w-8 h-8 rounded-full bg-[#25B385] border-2 border-[#04342C] flex items-center justify-center text-xs font-bold text-white">M</div>
                    <div className="w-8 h-8 rounded-full bg-[#5DCAA5] border-2 border-[#04342C] flex items-center justify-center text-xs font-bold text-[#04342C]">J</div>
                  </div>
                  <span className="text-sm">Join 47 founding members</span>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right column - stats cards */}
          <FadeInSection delay={200}>
            <div className="relative">
              {/* Main pricing card */}
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="absolute -top-3 -right-3 bg-[#5DCAA5] text-[#04342C] text-xs font-bold px-3 py-1 rounded-full">
                  FOUNDING RATE
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1D9E75]/20 flex items-center justify-center">
                    <Star className="w-7 h-7 text-[#5DCAA5]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#9FE1CB]">Champion Pricing</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl text-[#9FE1CB]/50 line-through">$249</span>
                      <span className="text-4xl font-serif font-bold text-white">$99</span>
                      <span className="text-[#9FE1CB]">/year</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <p className="text-3xl font-serif font-bold text-[#5DCAA5]">12</p>
                    <p className="text-sm text-[#9FE1CB] mt-1">months free</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 text-center">
                    <p className="text-3xl font-serif font-bold text-white">Forever</p>
                    <p className="text-sm text-[#9FE1CB] mt-1">rate locked</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3 text-[#9FE1CB] text-sm">
                  <Shield className="w-4 h-4 text-[#5DCAA5]" />
                  <span>Your rate never changes — no matter what</span>
                </div>
              </div>

              {/* Floating perks */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-[#1D9E75] text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-xl hidden lg:flex items-center gap-2">
                <Zap className="w-4 h-4" />
                First access
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

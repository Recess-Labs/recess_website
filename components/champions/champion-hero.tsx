"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { ArrowDown, Star, Zap, Shield, Sparkles } from "lucide-react"

export function ChampionHero() {
  const scrollToForm = () => {
    document.getElementById("champion-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#29285D]">
      {/* Animated gradient orbs - using brand pop colors */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] rounded-full bg-[#8D7AA0]/40 blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#FFCCE5]/30 blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-[#AAF5D4]/20 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#FFF2E2]/25 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />
      
      {/* Animated flowing lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 1400 800" fill="none">
        <path d="M-100 400 C200 200 400 600 700 350 S1000 100 1200 400 S1400 600 1600 400" stroke="#8D7AA0" strokeWidth="2" opacity="0.5" fill="none">
          <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
            M-100 400 C200 200 400 600 700 350 S1000 100 1200 400 S1400 600 1600 400;
            M-100 380 C200 280 400 500 700 400 S1000 200 1200 350 S1400 500 1600 380;
            M-100 400 C200 200 400 600 700 350 S1000 100 1200 400 S1400 600 1600 400
          " />
        </path>
        <path d="M-100 500 C300 300 500 700 800 450 S1100 200 1300 500" stroke="#FFCCE5" strokeWidth="1.5" opacity="0.3" fill="none">
          <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
            M-100 500 C300 300 500 700 800 450 S1100 200 1300 500;
            M-100 520 C300 400 500 600 800 480 S1100 300 1300 480;
            M-100 500 C300 300 500 700 800 450 S1100 200 1300 500
          " />
        </path>
      </svg>

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left column - content */}
          <div>
            <FadeInSection>
              {/* Eyebrow with glow */}
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-8 shadow-lg shadow-[#8D7AA0]/20">
                <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AAF5D4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-[#AAF5D4]" />
                </span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-white tracking-wide">
                  Exclusive Founding Group
                </span>
              </div>

              {/* Main headline - bigger and bolder */}
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.95]">
                Become a
                <br />
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-[#FFCCE5] via-[#AAF5D4] to-[#FFEDAC] bg-clip-text text-transparent">
                    Champion
                  </span>
                  <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#FFCCE5]/30 via-[#AAF5D4]/30 to-[#FFEDAC]/30 blur-lg" />
                </span>
              </h1>

              <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-lg">
                Early access. Locked pricing. A direct voice in what we build — for frontline professionals who want in from the start.
              </p>

              {/* CTA with hover effects */}
              <div className="mt-8 sm:mt-10">
                <button
                  onClick={scrollToForm}
                  className="group relative inline-flex items-center gap-3 rounded-2xl px-8 sm:px-10 py-4 sm:py-5 font-serif font-bold text-lg sm:text-xl bg-gradient-to-r from-[#8D7AA0] to-[#A08DB3] text-white hover:from-[#9D8AB0] hover:to-[#B09DC3] transition-all shadow-2xl shadow-[#8D7AA0]/40 hover:shadow-[#8D7AA0]/60 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  <Sparkles className="w-5 h-5" />
                  Apply to Join
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </FadeInSection>
          </div>

          {/* Right column - premium pricing card */}
          <FadeInSection delay={200}>
            <div className="relative mt-8 lg:mt-0">
              {/* Floating badges */}
              <div className="absolute -top-4 left-4 sm:-left-4 bg-[#AAF5D4] text-[#29285D] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-xl z-10 flex items-center gap-2">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                First access
              </div>
              
              {/* Main pricing card with glass effect */}
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl">
                <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-gradient-to-r from-[#FFCCE5] to-[#FFEDAC] text-[#29285D] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full shadow-lg">
                  FOUNDING RATE
                </div>
                
                <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8 pt-6 sm:pt-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#8D7AA0] to-[#29285D] flex items-center justify-center shadow-xl flex-shrink-0">
                    <Star className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-white/60 mb-1">Champion Pricing</p>
                    <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                      <span className="text-xl sm:text-2xl md:text-3xl text-white/40 line-through font-serif">$249</span>
                      <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white">$99</span>
                      <span className="text-white/60 text-sm sm:text-base">/year</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-6 sm:my-8" />

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center border border-white/10">
                    <p className="text-3xl sm:text-4xl font-serif font-bold bg-gradient-to-r from-[#AAF5D4] to-[#FFEDAC] bg-clip-text text-transparent">6</p>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">months free</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center border border-white/10">
                    <p className="text-2xl sm:text-4xl font-serif font-bold text-white">Forever</p>
                    <p className="text-xs sm:text-sm text-white/60 mt-1">rate locked</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/70 text-sm bg-[#AAF5D4]/10 rounded-xl p-4 border border-[#AAF5D4]/20">
                  <Shield className="w-5 h-5 text-[#AAF5D4] flex-shrink-0 mt-0.5" />
                  <span>Start with 6 months completely free. After that, you&apos;re locked in at $99/year — forever. No price increases, ever.</span>
                </div>
              </div>

              {/* Decorative floating element */}
              <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-[#FFCCE5] text-[#29285D] text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-xl hidden sm:flex items-center gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                Limited spots
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

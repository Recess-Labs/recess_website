"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Sparkles, Star } from "lucide-react"

export function ChampionsBanner() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#29285D]">
            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8D7AA0]/40 blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFCCE5]/25 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#AAF5D4]/15 blur-[60px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />
            
            {/* Flowing SVG lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" preserveAspectRatio="none" viewBox="0 0 1400 400" fill="none">
              <path d="M-100 200 C200 100 400 300 700 175 S1000 50 1200 200" stroke="#8D7AA0" strokeWidth="2" fill="none">
                <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
                  M-100 200 C200 100 400 300 700 175 S1000 50 1200 200;
                  M-100 180 C200 150 400 250 700 200 S1000 100 1200 175;
                  M-100 200 C200 100 400 300 700 175 S1000 50 1200 200
                " />
              </path>
            </svg>

            {/* Subtle dot pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

            <div className="relative px-8 py-14 md:px-16 md:py-20">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                {/* Left content */}
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8D7AA0] to-[#FFCCE5] flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AAF5D4] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#AAF5D4]" />
                      </span>
                      <span className="text-sm font-semibold text-white tracking-wide">
                        For Frontline Professionals
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                    Get early access as a
                    <br />
                    <span className="bg-gradient-to-r from-[#FFCCE5] via-[#AAF5D4] to-[#FFEDAC] bg-clip-text text-transparent">Recess Champion.</span>
                  </h3>
                  
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                    12 months free, founding member pricing locked forever, and a direct voice in what we build.
                  </p>

                  {/* Quick stats */}
                  <div className="flex flex-wrap items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-[#FFEDAC]" />
                      <span className="text-white font-semibold">$99/year locked</span>
                    </div>
                    <div className="w-px h-5 bg-white/20" />
                    <div className="flex items-center gap-2">
                      <span className="text-white/60">Limited founding spots</span>
                    </div>
                  </div>
                </div>

                {/* Right - CTA card */}
                <div className="flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center shadow-xl">
                    <div className="flex items-center justify-center gap-2 mb-5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: ["#FFCCE5", "#AAF5D4", "#FFEDAC", "#D4EDF9"][i-1] }} />
                      ))}
                      {[5, 6, 7].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-white/20" />
                      ))}
                    </div>
                    <p className="text-sm text-white/60 mb-6">A few founding spots left</p>
                    <Link
                      href="/champions"
                      className="group inline-flex items-center gap-3 rounded-xl px-10 py-5 font-serif font-bold text-lg bg-gradient-to-r from-[#8D7AA0] to-[#A08DB3] text-white hover:from-[#9D8AB0] hover:to-[#B09DC3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                      Apply to Join
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

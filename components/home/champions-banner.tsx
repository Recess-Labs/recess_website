"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Sparkles, Star } from "lucide-react"

export function ChampionsBanner() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="relative overflow-hidden rounded-3xl" style={{ backgroundColor: "#04342C" }}>
            {/* Animated gradient orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#1D9E75]/30 blur-[80px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#5DCAA5]/20 blur-[60px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

            <div className="relative px-8 py-12 md:px-14 md:py-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                {/* Left content */}
                <div className="flex-1 max-w-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#1D9E75] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5DCAA5] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5DCAA5]" />
                      </span>
                      <span className="text-xs font-semibold text-[#5DCAA5] tracking-wide uppercase">
                        For Frontline Professionals
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                    Get early access as a
                    <br />
                    <span className="text-[#5DCAA5]">Recess Champion.</span>
                  </h3>
                  
                  <p className="text-lg text-[#9FE1CB] leading-relaxed mb-6">
                    12 months free, founding member pricing locked forever, and a direct voice in what we build.
                  </p>

                  {/* Quick stats */}
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-[#5DCAA5]" />
                      <span className="text-white font-medium">$99/year locked</span>
                    </div>
                    <div className="w-px h-4 bg-white/20" />
                    <div className="flex items-center gap-2">
                      <span className="text-[#9FE1CB]">Limited spots</span>
                    </div>
                  </div>
                </div>

                {/* Right - CTA card */}
                <div className="flex-shrink-0">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-[#5DCAA5]" />
                      ))}
                      {[5, 6, 7].map((i) => (
                        <div key={i} className="w-3 h-3 rounded-full bg-white/20" />
                      ))}
                    </div>
                    <p className="text-sm text-[#9FE1CB] mb-5">A few founding spots left</p>
                    <Link
                      href="/champions"
                      className="group inline-flex items-center gap-2 rounded-xl px-8 py-4 font-serif font-bold text-base bg-[#1D9E75] text-white hover:bg-[#25B385] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      Apply to Join
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { Users, Lightbulb, Heart, ArrowRight } from "lucide-react"

export function ChampionWhy() {
  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeInSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#04342C]/5 border border-[#04342C]/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
              <span className="text-xs font-sans font-semibold text-[#04342C] tracking-widest uppercase">
                Why This Exists
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              We want to build this
              <br />
              <span className="text-[#1D9E75]">with you.</span>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="mt-10 max-w-2xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The people who understand this work best are the ones living it. Recess Champions is a founding group of frontline professionals who get full access, shape what we build, and carry pricing no one else will ever see.
            </p>
            <p className="mt-6 text-xl text-foreground font-medium leading-relaxed flex items-center gap-3">
              <span className="w-8 h-px bg-[#1D9E75]" />
              Your experience is the product. We want it in the room.
            </p>
          </div>
        </FadeInSection>

        {/* Bento-style cards */}
        <FadeInSection delay={200}>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            <div className="group relative bg-[#04342C] rounded-3xl p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1D9E75]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#1D9E75] flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Full Access</h3>
                <p className="text-[#9FE1CB] leading-relaxed">
                  Get everything first. New features, protocols, and updates — no waitlists, no restrictions.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#5DCAA5] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-[#1D9E75] to-[#04342C] rounded-3xl p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#5DCAA5]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Direct Influence</h3>
                <p className="text-white/80 leading-relaxed">
                  Your feedback shapes real product decisions. Monthly calls with the team mean your voice matters.
                </p>
                <div className="mt-6 flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="group relative bg-[#F0FDF4] border border-[#1D9E75]/20 rounded-3xl p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#1D9E75]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#1D9E75] flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#04342C] mb-3">Locked Pricing</h3>
                <p className="text-[#04342C]/70 leading-relaxed">
                  Founding member rates that never change. Your loyalty today means lifetime savings.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#1D9E75] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

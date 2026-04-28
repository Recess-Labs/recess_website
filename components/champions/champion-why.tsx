"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { Users, Lightbulb, Heart, ArrowRight } from "lucide-react"

export function ChampionWhy() {
  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8D7AA0]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFCCE5]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <FadeInSection>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#8D7AA0]/10 border border-[#8D7AA0]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#8D7AA0]" />
              <span className="text-xs font-sans font-semibold text-[#29285D] tracking-widest uppercase">
                Why This Exists
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              We want to build this
              <br />
              <span className="bg-gradient-to-r from-[#8D7AA0] to-[#FFCCE5] bg-clip-text text-transparent">with you.</span>
            </h2>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="mt-10 max-w-2xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              The people who understand this work best are the ones living it. Recess Champions is a founding group of frontline professionals who get full access, shape what we build, and carry pricing no one else will ever see.
            </p>
            <p className="mt-6 text-xl text-foreground font-medium leading-relaxed flex items-center gap-4">
              <span className="w-12 h-1 bg-gradient-to-r from-[#8D7AA0] to-[#FFCCE5] rounded-full" />
              Your experience is the product. We want it in the room.
            </p>
          </div>
        </FadeInSection>

        {/* Bento-style cards with brand colors */}
        <FadeInSection delay={200}>
          <div className="mt-16 grid md:grid-cols-3 gap-5">
            {/* Card 1 - Deep purple */}
            <div className="group relative bg-[#29285D] rounded-3xl p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#8D7AA0]/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFCCE5]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8D7AA0] to-[#FFCCE5] flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Full Access</h3>
                <p className="text-white/70 leading-relaxed">
                  Get everything first. New features, protocols, and updates — no waitlists, no restrictions.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#AAF5D4] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Join now</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 2 - Gradient purple to pink */}
            <div className="group relative bg-gradient-to-br from-[#8D7AA0] to-[#FFCCE5] rounded-3xl p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/30">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Direct Influence</h3>
                <p className="text-white/80 leading-relaxed">
                  Your feedback shapes real product decisions. Monthly calls with the team mean your voice matters.
                </p>
                <div className="mt-6 flex items-center gap-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Shape the future</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Card 3 - Light with mint/pink accents */}
            <div className="group relative bg-[#F5F5FF] border border-[#8D7AA0]/20 rounded-3xl p-8 overflow-hidden transition-all hover:scale-[1.02] hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#AAF5D4]/30 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#FFCCE5]/30 rounded-full blur-xl pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#AAF5D4] to-[#FFEDAC] flex items-center justify-center mb-6 shadow-lg">
                  <Heart className="w-7 h-7 text-[#29285D]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#29285D] mb-3">Locked Pricing</h3>
                <p className="text-[#777698] leading-relaxed">
                  6 months free, then $99/year — locked in permanently. The standard rate is already $249 and rising. Champions never see that number.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#8D7AA0] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Lock your rate</span>
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

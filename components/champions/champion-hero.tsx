"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { ArrowDown } from "lucide-react"

export function ChampionHero() {
  const scrollToForm = () => {
    document.getElementById("champion-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-foreground">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <FadeInSection>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 bg-background/5 border border-background/10 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#AAF5D4] animate-pulse" />
            <span className="text-xs font-sans font-medium text-background/60 tracking-wide uppercase">
              Exclusive Founding Group
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background tracking-tight leading-tight text-balance">
            Become a Recess
            <br />
            <span className="text-accent">Champions</span>
            <br />
            Founding Member.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto text-balance">
            Early access to Recess, locked pricing, and a direct voice in what we build — for frontline professionals who want in from the start.
          </p>

          {/* CTA button */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-2 rounded-full px-8 py-4 font-serif font-semibold text-lg bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] transition-all shadow-xl"
            >
              Apply to Join
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
            <p className="text-sm text-background/40">
              12 months free to start — Founding group only
            </p>
          </div>
        </FadeInSection>

        {/* Stats row */}
        <FadeInSection delay={200}>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-background">$99</p>
              <p className="text-xs text-background/40 mt-1">per year, locked</p>
            </div>
            <div className="text-center border-x border-background/10">
              <p className="font-serif text-3xl font-bold text-background">12</p>
              <p className="text-xs text-background/40 mt-1">months free</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl font-bold text-accent">Limited</p>
              <p className="text-xs text-background/40 mt-1">spots remaining</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

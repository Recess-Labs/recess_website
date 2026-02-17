"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [hoveredCta, setHoveredCta] = useState(false)

  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      {/* Subtle background orbs */}
      <div className="absolute top-20 -left-40 w-96 h-96 rounded-full bg-[#F5F5FF] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#FFF2E2] blur-3xl opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <FadeInSection>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5F5FF] rounded-full px-4 py-1.5 mb-6 border border-border/40">
                <span className="w-2 h-2 rounded-full bg-[#AAF5D4] animate-pulse" />
                <span className="text-xs font-sans font-medium text-muted-foreground tracking-wide">Trusted by frontline organizations globally</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.08] text-balance">
                Emotional Infrastructure for Trauma-Exposed Workforces
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Recess helps healthcare, education, and public safety organizations detect trauma exposure early and stabilize teams before it leads to turnover, extended leave, or operational disruption.
              </p>
              <p className="mt-3 text-base text-accent font-medium font-serif">
                Built for frontline organizations where crisis is part of the job.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Button
                    asChild
                    size="lg"
                    className="relative z-10 rounded-full font-serif font-semibold px-8 h-12 text-base bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.02] hover:shadow-lg"
                    onMouseEnter={() => setHoveredCta(true)}
                    onMouseLeave={() => setHoveredCta(false)}
                  >
                    <Link href="/get-started">
                      Schedule a Free Strategy Call
                      <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${hoveredCta ? "translate-x-1" : ""}`} />
                    </Link>
                  </Button>
                  <div className="absolute inset-0 rounded-full bg-foreground/20 animate-pulse-ring" />
                </div>
                <Button asChild variant="outline" size="lg" className="rounded-full font-serif font-semibold px-7 h-12 text-base border-border hover:bg-[#F5F5FF] transition-all hover:scale-[1.02]">
                  <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer">
                    <Play className="w-3.5 h-3.5 mr-1.5" fill="currentColor" />
                    Take the Frontline Team Emotional Health Index
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Animated illustration showing the pattern */}
          <FadeInSection delay={200}>
            <div className="relative flex items-center justify-center">
              <PatternIllustration />
            </div>
          </FadeInSection>
        </div>

        {/* Pattern visualization */}
        <FadeInSection delay={400} className="mt-24">
          <div className="relative bg-[#F5F5FF] rounded-3xl p-10 md:p-16 border border-border/30 overflow-hidden">
            {/* Decorative background wave */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]" preserveAspectRatio="none" viewBox="0 0 800 400">
              <path d="M0 300 Q200 200 400 300 T800 300 V400 H0Z" fill="#29285D" />
            </svg>

            <p className="font-serif text-sm md:text-base font-bold text-accent uppercase tracking-widest mb-10 text-center">The Pattern We Address</p>

            {/* Desktop: horizontal flow */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-0">
              {/* Exposure */}
              <div className="rounded-2xl border-2 p-8 text-center bg-background shadow-sm transition-all hover:shadow-md hover:-translate-y-1" style={{ borderColor: "#D4EDF9" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#D4EDF9" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="#29285D" strokeWidth="1.5" fill="none" /><path d="M12 8v4l3 3" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-foreground">Exposure</p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2">Crisis, grief, distress</p>
              </div>

              {/* Arrow 1 */}
              <div className="flex items-center justify-center px-2">
                <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
                  <path d="M0 12h48M44 6l6 6-6 6" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Overload */}
              <div className="relative rounded-2xl border-2 p-8 text-center bg-background shadow-sm transition-all hover:shadow-md hover:-translate-y-1" style={{ borderColor: "#FFEDAC" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFEDAC" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinejoin="round" /></svg>
                </div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-foreground">Overload</p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2">Nervous system activation</p>
                {/* Recess intervenes badge */}
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 z-10">
                  <div className="bg-[#AAF5D4] text-foreground rounded-full px-4 py-2 text-sm font-serif font-bold shadow-md whitespace-nowrap border border-[#AAF5D4]">
                    Recess intervenes here
                  </div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex items-center justify-center px-2">
                <svg width="56" height="24" viewBox="0 0 56 24" fill="none">
                  <path d="M0 12h48M44 6l6 6-6 6" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Instability */}
              <div className="rounded-2xl p-8 text-center bg-foreground text-background shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 border-2 border-foreground">
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-background/10">
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><path d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <p className="font-serif text-2xl lg:text-3xl font-bold">Instability</p>
                <p className="text-base lg:text-lg text-background/60 mt-2">Turnover, leave, errors</p>
              </div>
            </div>

            {/* Mobile: vertical flow */}
            <div className="flex md:hidden flex-col items-center gap-4">
              {[
                { label: "Exposure", desc: "Crisis, grief, distress", color: "#D4EDF9", dark: false },
                { label: "Overload", desc: "Nervous system activation", color: "#FFEDAC", dark: false },
                { label: "Instability", desc: "Turnover, leave, errors", color: "#FFCCE5", dark: true },
              ].map((step, i) => (
                <div key={step.label} className="flex flex-col items-center gap-4 w-full">
                  <div className={`w-full rounded-2xl border-2 p-6 text-center ${step.dark ? "bg-foreground text-background border-foreground" : "bg-background border-border/40"}`} style={!step.dark ? { borderColor: step.color } : {}}>
                    <p className={`font-serif text-2xl font-bold ${step.dark ? "" : "text-foreground"}`}>{step.label}</p>
                    <p className={`text-base mt-1 ${step.dark ? "text-background/60" : "text-muted-foreground"}`}>{step.desc}</p>
                  </div>
                  {i === 1 && (
                    <div className="bg-[#AAF5D4] text-foreground rounded-full px-5 py-2 text-sm font-serif font-bold shadow-md">
                      Recess intervenes here
                    </div>
                  )}
                  {i < 2 && (
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                      <path d="M12 0v24M6 20l6 6 6-6" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-10 text-lg md:text-xl text-foreground text-center max-w-3xl mx-auto font-serif leading-relaxed font-medium">
              Recess intervenes between overload and instability -- stabilizing staff before strain becomes turnover.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

/* Animated hero illustration - abstract nervous system with calm/active states */
function PatternIllustration() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square">
      {/* Base circle - representing organizational stability */}
      <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
        {/* Outer calm ring */}
        <circle cx="200" cy="200" r="180" stroke="#E8E0EC" strokeWidth="1" strokeDasharray="8 4" className="animate-[spin_60s_linear_infinite]" />
        <circle cx="200" cy="200" r="150" stroke="#8D7AA0" strokeWidth="1.5" opacity="0.3" />

        {/* Core brain/nervous system shape */}
        <ellipse cx="200" cy="170" rx="70" ry="60" fill="#F5F5FF" stroke="#8D7AA0" strokeWidth="2" />
        {/* Brain folds */}
        <path d="M160 155 Q180 140 200 155 Q220 170 240 155" stroke="#8D7AA0" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M165 175 Q185 160 205 175 Q225 190 245 175" stroke="#8D7AA0" strokeWidth="1.5" fill="none" opacity="0.5" />

        {/* Signal waves emanating - animated */}
        <circle cx="200" cy="170" r="85" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.2">
          <animate attributeName="r" values="85;110;85" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="170" r="95" stroke="#8D7AA0" strokeWidth="0.5" fill="none" opacity="0.15">
          <animate attributeName="r" values="95;125;95" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0;0.15" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </circle>

        {/* Foundation layer */}
        <rect x="50" y="290" width="100" height="56" rx="14" fill="#FFF2E2" stroke="#E8E0EC" strokeWidth="1.5" />
        <text x="100" y="314" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="11" fontFamily="system-ui">Foundation</text>
        <text x="100" y="330" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Standards</text>
        {/* Connector */}
        <path d="M100 290 Q100 240 160 200" stroke="#8D7AA0" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.4" />

        {/* Ally layer */}
        <rect x="155" y="310" width="90" height="56" rx="14" fill="#AAF5D4" stroke="#E8E0EC" strokeWidth="1.5" />
        <text x="200" y="334" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="11" fontFamily="system-ui">Ally</text>
        <text x="200" y="350" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Stabilize</text>
        <path d="M200 310 Q200 260 200 230" stroke="#8D7AA0" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.4" />

        {/* Signal layer */}
        <rect x="250" y="290" width="100" height="56" rx="14" fill="#D4EDF9" stroke="#E8E0EC" strokeWidth="1.5" />
        <text x="300" y="314" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="11" fontFamily="system-ui">Signal</text>
        <text x="300" y="330" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Predict</text>
        <path d="M300 290 Q300 240 240 200" stroke="#8D7AA0" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.4" />

        {/* Animated dot traveling paths */}
        <circle r="3" fill="#8D7AA0">
          <animateMotion dur="4s" repeatCount="indefinite" path="M100 290 Q100 240 160 200" />
        </circle>
        <circle r="3" fill="#8D7AA0">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M200 310 Q200 260 200 230" begin="0.5s" />
        </circle>
        <circle r="3" fill="#8D7AA0">
          <animateMotion dur="4.2s" repeatCount="indefinite" path="M300 290 Q300 240 240 200" begin="1s" />
        </circle>

        {/* Center glow */}
        <circle cx="200" cy="170" r="15" fill="#8D7AA0" opacity="0.15">
          <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.15;0.08;0.15" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="170" r="6" fill="#8D7AA0" opacity="0.3" />
      </svg>
    </div>
  )
}

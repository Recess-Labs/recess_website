"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [hoveredCta, setHoveredCta] = useState(false)

  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      {/* Decorative background lines and orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-[#F5F5FF] blur-[100px] opacity-70" />
        <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full bg-[#FFF2E2] blur-[80px] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#AAF5D4] blur-[120px] opacity-[0.08]" />

        {/* Decorative flowing lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 800" fill="none">
          {/* Curved flowing lines across hero */}
          <path d="M-100 400 C200 300 400 500 700 350 S1100 200 1500 400" stroke="#8D7AA0" strokeWidth="1" opacity="0.08" fill="none" />
          <path d="M-100 450 C200 350 400 550 700 400 S1100 250 1500 450" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.06" fill="none" />
          <path d="M-100 500 C200 400 400 600 700 450 S1100 300 1500 500" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.04" fill="none" />

          {/* Diagonal accent lines */}
          <line x1="1100" y1="0" x2="1400" y2="300" stroke="#E8E0EC" strokeWidth="1" opacity="0.3" />
          <line x1="1150" y1="0" x2="1450" y2="300" stroke="#E8E0EC" strokeWidth="0.5" opacity="0.2" />
          <line x1="1200" y1="0" x2="1500" y2="300" stroke="#E8E0EC" strokeWidth="0.5" opacity="0.15" />

          {/* Subtle dots pattern top right */}
          {Array.from({ length: 8 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={1050 + col * 28}
                cy={50 + row * 28}
                r="1.5"
                fill="#8D7AA0"
                opacity="0.1"
              />
            ))
          )}
        </svg>
      </div>

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

          {/* Real app phone image with decorative elements */}
          <FadeInSection delay={200}>
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Decorative ring behind phone */}
              <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-[#E8E0EC] opacity-40" />
              <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border border-accent/10 animate-[spin_40s_linear_infinite]" style={{ borderStyle: "dashed" }} />

              {/* Floating accent dots */}
              <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-[#AAF5D4] animate-float opacity-60" />
              <div className="absolute bottom-16 left-4 w-2 h-2 rounded-full bg-[#FFEDAC] animate-float-delayed opacity-60" />
              <div className="absolute top-1/3 left-0 w-2.5 h-2.5 rounded-full bg-[#FFCCE5] animate-float-slow opacity-50" />

              {/* Floating product tags */}
              <div className="absolute -left-2 md:left-0 top-16 bg-background rounded-xl px-3 py-2 shadow-lg border border-border/30 animate-float-delayed z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "#FFF2E2" }}>
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5"><path d="M8 2L2 8l6 6 6-6-6-6z" stroke="#29285D" strokeWidth="1.2" fill="none" /><path d="M8 5v3" stroke="#29285D" strokeWidth="1" strokeLinecap="round" /></svg>
                  </div>
                  <span className="text-xs font-serif font-semibold text-foreground">Foundation</span>
                </div>
              </div>

              <div className="absolute -right-2 md:right-4 bottom-28 bg-background rounded-xl px-3 py-2 shadow-lg border border-border/30 animate-float z-10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ backgroundColor: "#D4EDF9" }}>
                    <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5"><path d="M3 5h10v7a1 1 0 01-1 1H4a1 1 0 01-1-1V5z" stroke="#29285D" strokeWidth="1.2" fill="none" /><path d="M5 8h6M5 10.5h4" stroke="#29285D" strokeWidth="0.8" strokeLinecap="round" /></svg>
                  </div>
                  <span className="text-xs font-serif font-semibold text-foreground">Signal</span>
                </div>
              </div>

              {/* The actual phone image */}
              <div className="relative z-[5]">
                <Image
                  src="/images/recess-app-phone.png"
                  alt="Recess Frontline Ally app showing daily check-in, flow state tracking, and personalized stabilization protocols on a smartphone"
                  width={420}
                  height={520}
                  className="drop-shadow-2xl"
                  priority
                />
              </div>
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

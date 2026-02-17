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
    <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#FDF0ED" }}>
      {/* Animated decorative flowing lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-40" style={{ backgroundColor: "#F5F5FF" }} />
        <div className="absolute -bottom-20 right-0 w-96 h-96 rounded-full blur-[80px] opacity-30" style={{ backgroundColor: "#FFF2E2" }} />

        {/* Animated flowing SVG lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1400 800" fill="none">
          {/* Primary wave - animated */}
          <path d="M-100 350 C100 200 300 500 600 300 S900 100 1100 350 S1300 500 1500 350" stroke="#8D7AA0" strokeWidth="1.5" opacity="0.12" fill="none">
            <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
              M-100 350 C100 200 300 500 600 300 S900 100 1100 350 S1300 500 1500 350;
              M-100 380 C100 250 300 450 600 350 S900 150 1100 300 S1300 450 1500 380;
              M-100 350 C100 200 300 500 600 300 S900 100 1100 350 S1300 500 1500 350
            " />
          </path>
          {/* Secondary wave */}
          <path d="M-100 420 C150 300 350 550 650 380 S950 200 1150 420 S1350 550 1550 420" stroke="#8D7AA0" strokeWidth="1" opacity="0.08" fill="none">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
              M-100 420 C150 300 350 550 650 380 S950 200 1150 420 S1350 550 1550 420;
              M-100 440 C150 350 350 500 650 420 S950 250 1150 380 S1350 500 1550 440;
              M-100 420 C150 300 350 550 650 380 S950 200 1150 420 S1350 550 1550 420
            " />
          </path>
          {/* Tertiary wave */}
          <path d="M-100 490 C200 400 400 600 700 450 S1000 300 1200 490 S1400 600 1600 490" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.06" fill="none">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="
              M-100 490 C200 400 400 600 700 450 S1000 300 1200 490 S1400 600 1600 490;
              M-100 470 C200 380 400 560 700 430 S1000 320 1200 470 S1400 560 1600 470;
              M-100 490 C200 400 400 600 700 450 S1000 300 1200 490 S1400 600 1600 490
            " />
          </path>

          {/* Diagonal accents top right */}
          <line x1="1050" y1="0" x2="1400" y2="350" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.06">
            <animate attributeName="opacity" values="0.06;0.12;0.06" dur="6s" repeatCount="indefinite" />
          </line>
          <line x1="1100" y1="0" x2="1450" y2="350" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.04">
            <animate attributeName="opacity" values="0.04;0.09;0.04" dur="7s" repeatCount="indefinite" />
          </line>

          {/* Subtle dot grid */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={1080 + col * 30}
                cy={60 + row * 30}
                r="1.5"
                fill="#8D7AA0"
                opacity="0.08"
              />
            ))
          )}

          {/* Curving decorative arcs */}
          <path d="M0 700 Q350 600 700 700" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.05" fill="none">
            <animate attributeName="d" dur="9s" repeatCount="indefinite" values="
              M0 700 Q350 600 700 700;
              M0 700 Q350 650 700 700;
              M0 700 Q350 600 700 700
            " />
          </path>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <FadeInSection>
            <div>
              <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-1.5 mb-6 border border-border/40 shadow-sm">
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
                      Schedule Free Strategy Call
                      <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${hoveredCta ? "translate-x-1" : ""}`} />
                    </Link>
                  </Button>
                  <div className="absolute inset-0 rounded-full bg-foreground/20 animate-pulse-ring" />
                </div>
                <Button asChild variant="outline" size="lg" className="rounded-full font-serif font-semibold px-7 h-12 text-base border-border bg-background text-foreground hover:bg-[#8D7AA0] hover:text-background hover:border-[#8D7AA0] transition-all hover:scale-[1.02]">
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
              <div className="absolute w-[360px] h-[360px] md:w-[420px] md:h-[420px] rounded-full border border-[#8D7AA0]/15" />
              <div className="absolute w-[300px] h-[300px] md:w-[350px] md:h-[350px] rounded-full border border-[#8D7AA0]/10 animate-[spin_40s_linear_infinite]" style={{ borderStyle: "dashed" }} />
              {/* Extra decorative circle */}
              <div className="absolute w-[440px] h-[440px] md:w-[500px] md:h-[500px] rounded-full border border-[#8D7AA0]/5" />

              {/* Floating accent dots */}
              <div className="absolute top-4 right-12 w-3 h-3 rounded-full bg-[#AAF5D4] animate-float opacity-60" />
              <div className="absolute bottom-20 left-4 w-2 h-2 rounded-full bg-[#FFEDAC] animate-float-delayed opacity-60" />
              <div className="absolute top-1/3 -left-4 w-2.5 h-2.5 rounded-full bg-[#FFCCE5] animate-float-slow opacity-50" />
              <div className="absolute bottom-8 right-4 w-2 h-2 rounded-full bg-[#8D7AA0] animate-float opacity-40" />

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
                  className="drop-shadow-2xl w-auto h-auto max-w-[320px] md:max-w-[400px]"
                  priority
                />
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Pattern visualization */}
        <FadeInSection delay={400} className="mt-24">
          <div className="relative bg-background rounded-3xl p-10 md:p-16 border border-border/30 overflow-hidden shadow-sm">
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
              <div className="flex items-center justify-center px-3">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
                  <path d="M0 12h52M48 6l6 6-6 6" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Overload */}
              <div className="rounded-2xl border-2 p-8 text-center bg-background shadow-sm transition-all hover:shadow-md hover:-translate-y-1" style={{ borderColor: "#FFEDAC" }}>
                <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: "#FFEDAC" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinejoin="round" /></svg>
                </div>
                <p className="font-serif text-2xl lg:text-3xl font-bold text-foreground">Overload</p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2">Nervous system activation</p>
              </div>

              {/* Intervention arrow with Recess branding */}
              <div className="flex flex-col items-center justify-center px-3 gap-1">
                <svg width="60" height="50" viewBox="0 0 60 50" fill="none">
                  {/* Swirl indicating intervention */}
                  <path d="M0 25 C10 25, 15 10, 25 10 S35 20, 30 30 S20 40, 25 40 C30 40, 35 35, 40 25 L52 25" stroke="#8D7AA0" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <path d="M48 19l6 6-6 6" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  {/* Small Recess dot */}
                  <circle cx="30" cy="25" r="4" fill="#AAF5D4" stroke="#29285D" strokeWidth="1" />
                </svg>
                <span className="text-xs font-serif font-bold text-accent whitespace-nowrap">Recess</span>
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
                    <div className="flex flex-col items-center gap-1">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 0 C20 10, 10 15, 10 20 S15 30, 20 30 S30 25, 30 20 S25 10, 20 0" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
                        <circle cx="20" cy="20" r="4" fill="#AAF5D4" stroke="#29285D" strokeWidth="1" />
                      </svg>
                      <span className="text-xs font-serif font-bold text-accent">Recess intervenes</span>
                    </div>
                  )}
                  {i < 2 && i !== 1 && (
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

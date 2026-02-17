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

        {/* Pattern visualization with inline drawing */}
        <FadeInSection delay={400} className="mt-20">
          <div className="relative bg-[#F5F5FF] rounded-3xl p-8 md:p-12 border border-border/30">
            <p className="font-serif text-xs font-bold text-accent uppercase tracking-widest mb-6 text-center">The Pattern We Address</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {[
                { label: "Exposure", desc: "Crisis, grief, distress", color: "#D4EDF9" },
                { label: "Overload", desc: "Nervous system activation", color: "#FFEDAC" },
                { label: "Instability", desc: "Turnover, leave, errors", color: "#FFCCE5" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-4">
                  <div className={`px-8 py-5 rounded-2xl border text-center transition-all hover:scale-105 ${
                    i === 2 ? "bg-foreground text-background border-foreground shadow-lg" : "bg-background border-border/40 shadow-sm"
                  }`} style={i < 2 ? { borderColor: step.color, borderWidth: 2 } : {}}>
                    <p className={`font-serif text-xl md:text-2xl font-bold ${i === 2 ? "" : "text-foreground"}`}>{step.label}</p>
                    <p className={`text-sm mt-1 ${i === 2 ? "text-background/60" : "text-muted-foreground"}`}>{step.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:flex items-center">
                      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="text-accent">
                        <path d="M0 12h40M36 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {i === 0 && (
                        <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
                          <div className="bg-[#AAF5D4] text-foreground rounded-full px-4 py-1 text-xs font-serif font-bold shadow-sm whitespace-nowrap">
                            Recess intervenes here
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-8 text-base md:text-lg text-foreground text-center max-w-2xl mx-auto font-serif leading-relaxed">
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

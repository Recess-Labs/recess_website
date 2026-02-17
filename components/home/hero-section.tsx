"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DashboardMockup, MobileAppMockup } from "@/components/illustrations"
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
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-xs font-sans font-medium text-foreground tracking-wide">Trusted by frontline organizations</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground tracking-tight leading-[1.1] text-balance">
                Emotional Infrastructure for Trauma-Exposed Workforces
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Recess helps healthcare, education, and public safety organizations detect trauma exposure early and stabilize teams before it leads to turnover, extended leave, or operational disruption.
              </p>
              <p className="mt-3 text-sm text-accent font-medium font-serif">
                Built for frontline organizations where crisis is part of the job.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Button
                    asChild
                    size="lg"
                    className="relative z-10 rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.02] hover:shadow-lg"
                    onMouseEnter={() => setHoveredCta(true)}
                    onMouseLeave={() => setHoveredCta(false)}
                  >
                    <Link href="/get-started">
                      Schedule a Free Strategy Call
                      <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${hoveredCta ? "translate-x-1" : ""}`} />
                    </Link>
                  </Button>
                  {/* Pulse ring behind CTA */}
                  <div className="absolute inset-0 rounded-full bg-foreground/20 animate-pulse-ring" />
                </div>
                <Button asChild variant="outline" size="lg" className="rounded-full font-serif font-semibold px-7 border-border hover:bg-[#F5F5FF] transition-all hover:scale-[1.02]">
                  <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer">
                    <Play className="w-3.5 h-3.5 mr-1.5" fill="currentColor" />
                    Take the Pulse Assessment
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Mockups with floating animation */}
          <FadeInSection delay={200}>
            <div className="relative flex items-end justify-center gap-4">
              <div className="w-full max-w-[360px] drop-shadow-2xl animate-float-slow">
                <DashboardMockup />
              </div>
              <div className="absolute -right-2 bottom-4 drop-shadow-xl animate-float-delayed">
                <MobileAppMockup />
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Trust signals */}
        <FadeInSection delay={400} className="mt-16">
          <div className="flex flex-col items-center">
            <p className="text-xs text-muted-foreground/60 mb-5 font-sans font-medium uppercase tracking-widest">The Pattern We Address</p>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0">
              {["Exposure", "Overload", "Instability"].map((label, i) => (
                <div key={label} className="flex items-center gap-3">
                  <div className={`px-6 py-3 rounded-2xl border text-sm font-serif font-semibold transition-all ${
                    i === 2 ? "bg-foreground text-background border-foreground" : "bg-[#F5F5FF] text-foreground border-border/40"
                  }`}>
                    {label}
                  </div>
                  {i < 2 && (
                    <svg className="w-6 h-6 text-accent hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground text-center max-w-md">
              Recess intervenes between overload and instability -- stabilizing staff before strain becomes turnover.
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

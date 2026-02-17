"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function SharedCTA() {
  const [hoveredCta, setHoveredCta] = useState(false)

  return (
    <section className="relative bg-foreground py-20 lg:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-background/5 border border-background/10 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#AAF5D4] animate-pulse" />
          <span className="text-xs font-sans font-medium text-background/60 tracking-wide">30-minute discovery call</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background text-balance">
          {"If your workforce is exposed to trauma as part of the job, Let's Talk."}
        </h2>
        <p className="mt-5 text-lg text-background/50 leading-relaxed max-w-lg mx-auto">
          {"In 30 minutes, you'll see how the system works -- and whether it fits your environment."}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative">
            <Button
              asChild
              size="lg"
              className="relative z-10 rounded-full font-serif font-semibold px-8 bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] transition-all"
              onMouseEnter={() => setHoveredCta(true)}
              onMouseLeave={() => setHoveredCta(false)}
            >
              <Link href="/get-started">
                Schedule a Free Strategy Call
                <ArrowRight className={`w-4 h-4 ml-1 transition-transform ${hoveredCta ? "translate-x-1" : ""}`} />
              </Link>
            </Button>
            <div className="absolute inset-0 rounded-full bg-background/20 animate-pulse-ring" />
          </div>
          <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer" className="text-sm text-background/40 hover:text-background/70 underline underline-offset-4 transition-colors">
            Or start with the Frontline Emotional Risk Assessment
          </a>
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Sparkles } from "lucide-react"

export function ChampionsBanner() {
  return (
    <section className="bg-background py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="relative overflow-hidden rounded-3xl bg-foreground">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
            
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <defs>
                  <pattern id="champions-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.4" fill="white" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#champions-grid)" />
              </svg>
            </div>

            <div className="relative px-8 py-10 md:px-12 md:py-14">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-start gap-5 max-w-xl">
                  <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-accent/20 items-center justify-center shrink-0">
                    <Sparkles className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-background/5 border border-background/10 rounded-full px-3 py-1 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#AAF5D4] animate-pulse" />
                      <span className="text-xs font-sans font-medium text-background/60 tracking-wide uppercase">
                        For Frontline Professionals
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-background leading-tight text-balance">
                      Get early access as a Recess Champion.
                    </h3>
                    <p className="mt-3 text-background/50 leading-relaxed">
                      12 months free, founding member pricing locked forever, and a direct voice in what we build.
                    </p>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/champions"
                    className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-serif font-semibold text-base bg-background text-foreground hover:bg-background/90 hover:scale-[1.02] transition-all shadow-lg"
                  >
                    Apply to Join
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

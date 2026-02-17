"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { CostIcon } from "@/components/illustrations"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CostBand() {
  return (
    <section className="bg-foreground py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <p className="text-center font-serif text-sm font-semibold text-primary-foreground/50 uppercase tracking-widest mb-10">
            The Financial Impact Is Real
          </p>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-6">
          <FadeInSection delay={0}>
            <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-2xl p-7 border border-primary-foreground/10">
              <CostIcon type="nurse" />
              <div>
                <p className="font-serif text-3xl font-bold text-primary-foreground">
                  $<AnimatedCounter end={40} suffix="K" />-$<AnimatedCounter end={60} suffix="K" />
                </p>
                <p className="text-sm text-primary-foreground/50 mt-1">To replace one experienced nurse</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-2xl p-7 border border-primary-foreground/10">
              <CostIcon type="officer" />
              <div>
                <p className="font-serif text-3xl font-bold text-primary-foreground">
                  $<AnimatedCounter end={100} suffix="K+" />
                </p>
                <p className="text-sm text-primary-foreground/50 mt-1">To replace one experienced officer</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-2xl p-7 border border-primary-foreground/10">
              <CostIcon type="site" />
              <div>
                <p className="font-serif text-3xl font-bold text-primary-foreground">
                  $<AnimatedCounter end={1} suffix="M" />-$<AnimatedCounter end={2} suffix="M+" />
                </p>
                <p className="text-sm text-primary-foreground/50 mt-1">Per site annual preventable instability</p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection delay={300} className="mt-10 text-center">
          <a
            href="https://pulse.withrecess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-serif font-semibold text-lg border bg-primary-foreground/5 border-primary-foreground/20 text-primary-foreground hover:bg-[#8D7AA0] hover:text-background hover:border-[#8D7AA0] transition-all duration-300 hover:scale-[1.02] shadow-md"
          >
            Understand Your Operational Risk <ArrowRight className="w-5 h-5" />
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

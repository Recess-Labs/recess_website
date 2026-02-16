import { FadeInSection } from "@/components/fade-in-section"
import { AnimatedCounter } from "@/components/animated-counter"
import { CostIcon } from "@/components/illustrations"
import { ArrowRight } from "lucide-react"

export function CostBand() {
  return (
    <section className="bg-foreground py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <p className="text-center font-serif text-xs font-semibold text-primary-foreground/40 uppercase tracking-widest mb-8">
            The Financial Impact Is Real
          </p>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-6">
          <FadeInSection delay={0}>
            <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
              <CostIcon type="nurse" />
              <div>
                <p className="font-serif text-2xl font-bold text-primary-foreground">
                  $<AnimatedCounter end={40} suffix="K" />-$<AnimatedCounter end={60} suffix="K" />
                </p>
                <p className="text-xs text-primary-foreground/50 mt-0.5">To replace one experienced nurse</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
              <CostIcon type="officer" />
              <div>
                <p className="font-serif text-2xl font-bold text-primary-foreground">
                  $<AnimatedCounter end={100} suffix="K+" />
                </p>
                <p className="text-xs text-primary-foreground/50 mt-0.5">To replace one experienced officer</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="flex items-center gap-4 bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10">
              <CostIcon type="site" />
              <div>
                <p className="font-serif text-2xl font-bold text-primary-foreground">
                  $<AnimatedCounter end={1} suffix="M" />-$<AnimatedCounter end={2} suffix="M+" />
                </p>
                <p className="text-xs text-primary-foreground/50 mt-0.5">Per site annual preventable instability</p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection delay={300} className="mt-8 text-center">
          <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-medium transition-colors">
            Understand Your Operational Risk <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

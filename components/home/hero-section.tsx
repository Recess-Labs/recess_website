import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExposureDiagram, DashboardMockup, MobileAppMockup } from "@/components/illustrations"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <FadeInSection>
            <div>
              <p className="font-serif text-sm font-semibold text-accent tracking-wide uppercase mb-4">
                Emotional Infrastructure
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-foreground tracking-tight leading-[1.1] text-balance">
                Emotional Infrastructure for Trauma-Exposed Workforces
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-xl">
                Recess helps healthcare, education, and public safety organizations detect trauma exposure early and stabilize teams before it leads to turnover, extended leave, or operational disruption.
              </p>
              <p className="mt-3 text-sm text-accent font-medium">
                Built for frontline organizations where crisis is part of the job.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full font-serif font-semibold px-7 bg-foreground text-background hover:bg-foreground/90">
                  <Link href="/get-started">Schedule a Free 30-Minute Strategy Call</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full font-serif font-semibold px-7 border-border hover:bg-secondary">
                  <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer">
                    Understand Your Exposure <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* Mockups */}
          <FadeInSection delay={200}>
            <div className="relative flex items-end justify-center gap-4">
              <div className="w-full max-w-[360px] drop-shadow-2xl">
                <DashboardMockup />
              </div>
              <div className="absolute -right-2 bottom-4 drop-shadow-xl">
                <MobileAppMockup />
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Exposure Diagram */}
        <FadeInSection delay={400} className="mt-16 flex flex-col items-center">
          <p className="text-xs text-muted-foreground/60 mb-4 font-serif font-semibold uppercase tracking-widest">The pattern</p>
          <ExposureDiagram />
        </FadeInSection>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, ShieldCheck, Zap } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const LAYER_TONES = ["bg-sky", "bg-mint", "bg-butter"]

export function HowItWorks({ system, assistLabel }: { system: HomeContent["system"]; assistLabel: string }) {
  return (
    <section className="bg-secondary py-16 lg:py-28" aria-labelledby="how-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection className="flex flex-col items-center text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">How Recess works</p>
          <h2 id="how-title" className="mt-3 max-w-3xl font-serif text-[2rem] font-bold leading-[1.1] text-foreground text-balance md:text-5xl">
            Ten minutes. On their phone. Nothing to talk through.
          </h2>
        </FadeInSection>

        <div className="mt-10 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-center lg:gap-16">
          <FadeInSection className="relative mx-auto w-full max-w-xs lg:w-[40%] lg:max-w-md">
            <Image
              src="/images/recess-app-phone.png"
              alt="The Recess app on a phone, showing a staff member's stress trend for the week and a button to start today's check-in"
              width={1394}
              height={1748}
              sizes="(min-width: 1024px) 30vw, 80vw"
              className="h-auto w-full drop-shadow-2xl"
            />
          </FadeInSection>

          <div className="flex flex-col gap-3 lg:w-[60%]">
            {system.layers.map((l, i) => (
              <FadeInSection key={l.title} delay={i * 120}>
                <Link
                  href={l.href}
                  className="group flex items-start gap-4 rounded-3xl bg-background p-5 shadow-sm ring-1 ring-border/60 transition-all hover:shadow-md md:p-6"
                >
                  <span className={`flex size-11 shrink-0 items-center justify-center rounded-2xl font-serif text-base font-bold text-foreground ${LAYER_TONES[i]}`}>
                    {i + 1}
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="font-serif text-lg font-bold leading-snug text-foreground">{l.title}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{l.subtitle}</span>
                  </span>
                  <ArrowRight className="mt-1 size-5 shrink-0 text-accent transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </FadeInSection>
            ))}

            <FadeInSection delay={400} className="mt-3 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2 rounded-3xl border border-border bg-background/60 p-4 md:p-5">
                <Clock className="size-5 text-muted-foreground" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{assistLabel}</p>
                <p className="font-serif text-base font-bold leading-snug text-foreground/60">Days or weeks later</p>
              </div>
              <div className="flex flex-col gap-2 rounded-3xl bg-foreground p-4 text-primary-foreground md:p-5">
                <Zap className="size-5 text-mint" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wider text-mint">Recess</p>
                <p className="font-serif text-base font-bold leading-snug">During the shift</p>
              </div>
            </FadeInSection>

            <p className="flex items-start gap-2 px-1 pt-2 text-sm leading-relaxed text-foreground/80">
              <ShieldCheck className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {"Leaders see team trends, never an individual's sessions."}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

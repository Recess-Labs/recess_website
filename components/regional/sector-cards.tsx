import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent, SectorCard } from "@/lib/region-content"

const toneClass: Record<SectorCard["tone"], string> = {
  peach: "bg-peach",
  sky: "bg-sky",
  mint: "bg-mint",
  butter: "bg-butter",
}

export function SectorCards({ sectors }: { sectors: NonNullable<HomeContent["sectors"]> }) {
  return (
    <section className="bg-secondary py-20 lg:py-28" aria-labelledby="sectors-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 id="sectors-title" className="font-serif text-3xl font-bold text-foreground md:text-5xl">{sectors.title}</h2>
            <p className="max-w-md text-base leading-relaxed sm:text-lg text-muted-foreground">{sectors.intro}</p>
          </div>
        </FadeInSection>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {sectors.cards.map((c, i) => (
            <FadeInSection key={c.name} delay={i * 100}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/40 bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className={`flex items-center justify-between px-5 py-3.5 sm:px-7 sm:py-4 ${toneClass[c.tone]}`}>
                  <h3 className="font-serif text-lg font-bold text-foreground">{c.name}</h3>
                </div>
                <div className="flex flex-1 flex-col gap-6 p-5 sm:p-7">
                  <p className="font-serif text-xl font-semibold leading-snug text-foreground text-pretty md:text-2xl">{c.headline}</p>
                  <dl className="mt-auto grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-widest text-accent">{"Who's asking"}</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.asking}</dd>
                    </div>
                    <div>
                      <dt className="text-xs font-bold uppercase tracking-widest text-accent">The cost of waiting</dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.cost}</dd>
                    </div>
                  </dl>
                  <Link href={c.href} className="inline-flex items-center gap-2 font-serif text-sm font-semibold text-foreground">
                    {c.linkLabel}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

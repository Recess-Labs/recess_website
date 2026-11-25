import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { BookCta } from "@/components/regional/book-cta"
import type { HomeContent, Stat } from "@/lib/region-content"

const REASSURANCE = ["Free", "30 minutes", "With a founder"]

function SecondaryLink({ secondary }: { secondary: HomeContent["hero"]["secondary"] }) {
  const className =
    "inline-flex items-center justify-center gap-1.5 py-2 font-serif text-sm font-semibold text-foreground underline decoration-foreground/25 underline-offset-4 transition-colors hover:decoration-foreground"
  const content = (
    <>
      {secondary.label}
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </>
  )
  return secondary.external ? (
    <a href={secondary.href} target="_blank" rel="noopener noreferrer" className={className}>
      {content}
    </a>
  ) : (
    <Link href={secondary.href} className={className}>
      {content}
    </Link>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-foreground/10 sm:aspect-[5/4] lg:aspect-[4/5]">
        <Image
          src="/images/story/reset.png"
          alt="A care worker on her break in a parked car, calm, following a guided Recess session on her phone"
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/0 to-foreground/0" aria-hidden="true" />

        <div className="absolute left-3 top-3 w-44 rounded-2xl bg-background/95 p-3 shadow-xl backdrop-blur sm:left-5 sm:top-5 sm:w-56 sm:p-4 animate-float-delayed">
          <div className="flex items-center justify-between gap-2">
            <span className="font-serif text-xs font-semibold text-foreground">{"Frontline Ally\u2122"}</span>
            <span className="font-mono text-xs tabular-nums text-muted-foreground">10:00</span>
          </div>
          <p className="mt-1 text-xs leading-snug text-muted-foreground">Follow the dot with your eyes</p>
          <div className="relative mt-2.5 h-2.5 rounded-full bg-secondary" aria-hidden="true">
            <span className="absolute top-0 size-2.5 rounded-full bg-accent animate-track-dot" />
          </div>
        </div>

        <div className="absolute bottom-3 right-3 w-40 rounded-2xl bg-background/95 p-3 shadow-xl backdrop-blur sm:bottom-5 sm:right-5 sm:w-52 sm:p-4 animate-float">
          <span className="font-serif text-xs font-semibold text-foreground">{"Recess Signal\u2122"}</span>
          <p className="mt-0.5 text-xs leading-snug text-muted-foreground">Team strain, 6 weeks</p>
          <div className="mt-2.5 flex h-10 items-end gap-1 sm:h-12 sm:gap-1.5" aria-hidden="true">
            {[78, 92, 85, 64, 52, 40].map((h, i) => (
              <span key={i} className={`flex-1 rounded-sm ${i < 3 ? "bg-rose" : "bg-mint"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>

        <p className="absolute bottom-5 left-5 hidden max-w-[45%] font-serif text-lg font-semibold leading-snug text-primary-foreground text-balance sm:block">
          {"Ten minutes in the car. Back on the floor, steady."}
        </p>
      </div>
    </div>
  )
}

export function RegionalHero({ hero, stat }: { hero: HomeContent["hero"]; stat?: Stat }) {
  return (
    <section className="relative overflow-hidden bg-blush" aria-labelledby="hero-title">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 pb-12 pt-8 sm:px-6 md:pt-12 lg:flex-row lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <FadeInSection className="lg:w-[54%]">
          <div className="flex flex-col">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent sm:tracking-[0.14em]">
              <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {hero.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="mt-4 font-serif text-[2.5rem] font-bold leading-[1.02] tracking-tight text-foreground text-balance sm:text-6xl lg:text-[4.25rem]"
            >
              {hero.headline} <span className="text-accent">{hero.highlight}</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/75 text-pretty sm:text-lg">{hero.body}</p>

            <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <BookCta className="w-full sm:w-auto [&>a]:w-full" />
              <SecondaryLink secondary={hero.secondary} />
            </div>

            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start" aria-label="About the strategy call">
              {REASSURANCE.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                  <Check className="size-4 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground sm:text-left">{hero.microcopy}</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={150} className="lg:w-[46%]">
          <HeroVisual />
        </FadeInSection>
      </div>

      <div className="border-t border-foreground/10 bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10">
          {stat ? (
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl font-bold tracking-tight text-foreground tabular-nums">{stat.value}</span>
              <p className="text-sm leading-snug text-foreground/80">
                {stat.label}
                <span className="mt-0.5 block text-xs text-muted-foreground">{stat.source}</span>
              </p>
            </div>
          ) : (
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <ShieldCheck className="size-4 shrink-0 text-accent" aria-hidden="true" />
              Leaders see team trends, never individuals
            </p>
          )}
          <ul className="flex flex-wrap gap-2" aria-label="Who Recess is built for">
            {hero.sectors.map((s) => (
              <li key={s} className="rounded-full border border-foreground/10 bg-background px-3 py-1 text-xs font-medium text-foreground">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

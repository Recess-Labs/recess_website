import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
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
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-foreground/10 sm:aspect-[5/4] lg:aspect-[4/5]">
      <Image
        src="/images/story/reset.png"
        alt="A care worker on her break in a parked car, calm, following a guided Recess session on her phone"
        fill
        priority
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-transparent" aria-hidden="true" />

      <div className="absolute left-3 right-3 top-3 rounded-2xl bg-background/95 p-3 shadow-xl backdrop-blur sm:left-5 sm:right-auto sm:top-5 sm:w-60 sm:p-4 animate-float-delayed">
        <div className="flex items-center justify-between gap-2">
          <span className="font-serif text-xs font-semibold text-foreground">{"Frontline Ally\u2122"}</span>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">10:00</span>
        </div>
        <p className="mt-1 text-xs leading-snug text-muted-foreground">Follow the dot with your eyes</p>
        <div className="relative mt-2.5 h-2.5 rounded-full bg-secondary" aria-hidden="true">
          <span className="absolute top-0 size-2.5 rounded-full bg-accent animate-track-dot" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 sm:p-6">
        <span className="w-fit rounded-full bg-mint px-2.5 py-1 text-xs font-semibold text-foreground">On her break, in the car</span>
        <p className="font-serif text-xl font-semibold leading-snug text-primary-foreground text-balance sm:text-2xl">
          {"Ten minutes. Back on the floor, steady."}
        </p>
      </div>
    </div>
  )
}

export function RegionalHero({ hero, stat }: { hero: HomeContent["hero"]; stat?: Stat }) {
  return (
    <section className="relative overflow-hidden bg-blush" aria-labelledby="hero-title">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 pb-14 pt-8 sm:px-6 md:pt-12 lg:flex-row lg:items-center lg:gap-16 lg:pb-24 lg:pt-16">
        <FadeInSection className="lg:w-[52%]">
          <div className="flex flex-col">
            <p className="w-fit rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-accent shadow-sm">{hero.eyebrow}</p>

            <h1
              id="hero-title"
              className="mt-5 font-serif text-[2.25rem] font-bold leading-[1.04] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl"
            >
              {hero.headline} <span className="text-accent">{hero.highlight}</span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/75 text-pretty sm:text-xl">{hero.body}</p>

            <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <BookCta className="w-full sm:w-auto [&>a]:w-full" />
              <SecondaryLink secondary={hero.secondary} />
            </div>

            <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-start" aria-label="About the strategy call">
              {REASSURANCE.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                  <Check className="size-4 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={150} className="lg:w-[48%]">
          <HeroVisual />
          {stat && (
            <p className="mt-4 flex items-baseline gap-3 px-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground tabular-nums">{stat.value}</span>
              <span className="text-sm leading-snug text-foreground/75">{stat.label}</span>
            </p>
          )}
        </FadeInSection>
      </div>
    </section>
  )
}

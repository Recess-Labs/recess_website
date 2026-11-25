import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { BookCta } from "@/components/regional/book-cta"
import type { HomeContent } from "@/lib/region-content"

export function RegionalHero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-12 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24 lg:pt-20">
        <FadeInSection>
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground shadow-sm">
              <span className="size-2 animate-pulse rounded-full bg-mint" aria-hidden="true" />
              Emotional infrastructure for trauma-exposed workforces
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl xl:text-7xl">
              {hero.headline} <span className="relative whitespace-nowrap text-accent">{hero.highlight}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">{hero.body}</p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <BookCta />
              {hero.secondary.external ? (
                <a
                  href={hero.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-serif text-sm font-semibold text-foreground underline-offset-4 hover:underline"
                >
                  {hero.secondary.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              ) : (
                <Link href={hero.secondary.href} className="inline-flex items-center gap-1.5 font-serif text-sm font-semibold text-foreground underline-offset-4 hover:underline">
                  {hero.secondary.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{hero.microcopy}</p>

            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Who Recess is built for">
              {hero.sectors.map((s) => (
                <li key={s} className="rounded-full border border-foreground/10 bg-background/70 px-3 py-1 text-xs font-medium text-foreground">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-foreground/10">
              <Image
                src="/images/story/reset.png"
                alt="A care worker on her break in a parked car, calm, following a guided Recess session on her phone"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover animate-ken-burns"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/60 to-transparent" aria-hidden="true" />
              <p className="absolute bottom-5 left-5 right-5 font-serif text-lg font-semibold text-primary-foreground text-balance">
                {"Ten minutes in the car. Back on the floor, steady."}
              </p>
            </div>

            <div className="absolute -left-4 top-8 w-56 rounded-2xl border border-border/40 bg-background/95 p-4 shadow-xl backdrop-blur sm:-left-10 animate-float-delayed">
              <div className="flex items-center justify-between">
                <span className="font-serif text-xs font-semibold text-foreground">{"Frontline Ally\u2122"}</span>
                <span className="text-xs text-muted-foreground">10:00</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Follow the dot with your eyes</p>
              <div className="relative mt-3 h-3 rounded-full bg-secondary" aria-hidden="true">
                <span className="absolute top-0 size-3 rounded-full bg-accent animate-track-dot" />
              </div>
            </div>

            <div className="absolute -right-3 bottom-24 w-52 rounded-2xl border border-border/40 bg-background/95 p-4 shadow-xl backdrop-blur sm:-right-8 animate-float">
              <span className="font-serif text-xs font-semibold text-foreground">{"Recess Signal\u2122"}</span>
              <p className="mt-1 text-xs text-muted-foreground">Team strain, last 6 weeks</p>
              <div className="mt-3 flex h-12 items-end gap-1.5" aria-hidden="true">
                {[78, 92, 85, 64, 52, 40].map((h, i) => (
                  <span key={i} className={`flex-1 rounded-sm ${i < 3 ? "bg-rose" : "bg-mint"}`} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-full border border-border/40 bg-background px-4 py-2 shadow-lg">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              <span className="text-xs font-medium text-foreground">Leaders see team trends, never individuals</span>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

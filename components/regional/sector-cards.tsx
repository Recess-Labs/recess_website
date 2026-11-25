import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const IMAGES = [
  { src: "/images/industries/healthcare.jpg", alt: "A care worker supporting an older resident" },
  { src: "/images/story/shift.png", alt: "A health worker walking down a hospital corridor on a night shift" },
  { src: "/images/industries/education.jpg", alt: "A teacher in a classroom with pupils" },
  { src: "/images/industries/public-safety.jpg", alt: "Emergency responders at work" },
]

export function SectorCards({ sectors }: { sectors: NonNullable<HomeContent["sectors"]> }) {
  return (
    <section className="bg-background py-16 lg:py-28" aria-labelledby="sectors-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">{sectors.title}</p>
          <h2 id="sectors-title" className="mt-3 max-w-3xl font-serif text-[2rem] font-bold leading-[1.1] text-foreground text-balance md:text-5xl">
            {sectors.intro}
          </h2>
        </FadeInSection>

        <ul className="-mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 lg:grid-cols-4">
          {sectors.cards.map((card, i) => (
            <li key={card.name} className="w-[85%] shrink-0 snap-start md:w-auto">
              <FadeInSection delay={i * 100} className="h-full">
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-secondary ring-1 ring-border/60 transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={IMAGES[i % IMAGES.length].src}
                      alt={IMAGES[i % IMAGES.length].alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 85vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-background/95 px-3 py-1 text-xs font-semibold text-foreground shadow">{card.name}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="font-serif text-lg font-bold leading-snug text-foreground text-pretty">{card.headline}</h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-2 font-serif text-sm font-semibold text-accent">
                      {card.linkLabel}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

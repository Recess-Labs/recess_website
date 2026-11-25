import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const frames = [
  { src: "/images/story/shift.png", alt: "A care worker walking down a dim corridor on a night shift" },
  { src: "/images/story/hold.png", alt: "A care worker at a staff room sink, taking a breath after splashing water on her face" },
  { src: "/images/story/home.png", alt: "A care worker still in uniform at her kitchen table at 1:40am, unable to switch off" },
  { src: "/images/story/reset.png", alt: "A care worker in a parked car on her break, calm, using a ten-minute Recess session" },
]

export function StoryStrip({ story, note }: { story: HomeContent["story"]; note: string }) {
  return (
    <section className="bg-foreground py-20 text-primary-foreground lg:py-28" aria-labelledby="still-wired">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-widest text-mint">Still wired</p>
              <h2 id="still-wired" className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight text-balance md:text-5xl">
                The shift ends. The load doesn&apos;t.
              </h2>
            </div>
            <p className="max-w-sm leading-relaxed text-primary-foreground/60">{note}</p>
          </div>
        </FadeInSection>

        <ol className="mt-12 grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {story.map((s, i) => {
            const last = i === story.length - 1
            return (
              <li key={s.caption}>
               <FadeInSection delay={i * 150} className={`group relative aspect-[4/5] overflow-hidden rounded-2xl ${last ? "ring-2 ring-mint" : ""}`}>
                  <Image
                    src={frames[i].src}
                    alt={frames[i].alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${last ? "" : "grayscale-[35%]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/30 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-4 md:p-5">
                    <span className={`text-xs font-medium ${last ? "text-mint" : "text-primary-foreground/50"}`}>{s.voice}</span>
                    <p className="font-serif text-base font-semibold leading-snug text-primary-foreground text-pretty md:text-lg">{s.caption}</p>
                  </div>
               </FadeInSection>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

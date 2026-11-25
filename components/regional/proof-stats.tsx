import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const TONES = ["bg-peach", "bg-sky", "bg-mint"]

export function ProofStats({ recognition }: { recognition: HomeContent["recognition"] }) {
  return (
    <section className="bg-background py-16 lg:py-28" aria-labelledby="proof-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection>
          <h2 id="proof-title" className="max-w-3xl font-serif text-[2rem] font-bold leading-[1.1] text-foreground text-balance md:text-5xl">
            {recognition.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty md:text-lg">{recognition.workerLine}</p>
        </FadeInSection>

        <ul className="mt-10 flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
          {recognition.stats.map((s, i) => (
            <li key={s.value}>
              <FadeInSection delay={i * 120} className={`flex h-full flex-col gap-3 rounded-3xl p-6 md:p-8 ${TONES[i % TONES.length]}`}>
                <span className="font-serif text-5xl font-bold tracking-tight text-foreground tabular-nums md:text-6xl">{s.value}</span>
                <p className="text-base font-medium leading-snug text-foreground text-pretty">{s.label}</p>
                <p className="mt-auto pt-2 text-xs leading-relaxed text-foreground/60">{s.source}</p>
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

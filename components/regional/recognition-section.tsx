import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

export function RecognitionSection({ recognition }: { recognition: HomeContent["recognition"] }) {
  const hasStats = recognition.stats.length > 0
  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="recognition-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">{recognition.eyebrow}</p>
          <h2 id="recognition-title" className="mt-3 font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            {recognition.title}
          </h2>
          <ul className="mt-8 flex flex-col">
            {recognition.bullets.map((b) => (
              <li key={b} className="flex items-start gap-4 border-b border-border/60 py-4 text-lg leading-relaxed text-foreground">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <blockquote className="mt-8 border-l-4 border-mint pl-5 font-serif text-xl font-medium leading-relaxed text-foreground text-pretty">
            {recognition.workerLine}
          </blockquote>
        </FadeInSection>

        {hasStats ? (
          <div className="flex flex-col gap-4">
            {recognition.stats.map((s, i) => (
              <FadeInSection key={s.value} delay={i * 120}>
                <figure className={`rounded-3xl p-7 md:p-8 ${i === 0 ? "bg-foreground text-primary-foreground" : "bg-secondary text-foreground"}`}>
                  <p className="font-serif text-5xl font-bold tracking-tight md:text-6xl">{s.value}</p>
                  <p className={`mt-2 text-lg leading-relaxed ${i === 0 ? "text-primary-foreground/80" : "text-foreground"}`}>{s.label}</p>
                  <figcaption className={`mt-3 text-xs ${i === 0 ? "text-primary-foreground/50" : "text-muted-foreground"}`}>{`Source: ${s.source}`}</figcaption>
                </figure>
              </FadeInSection>
            ))}
          </div>
        ) : (
          <FadeInSection delay={150}>
            <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-foreground p-8 text-primary-foreground md:p-10">
              <p className="font-serif text-sm font-bold uppercase tracking-widest text-mint">What it costs when nobody catches it</p>
              <ol className="flex flex-col gap-6">
                {["Absence after the hard weeks", "Mistakes and conflict on the team", "Experienced people leaving the work altogether"].map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 font-serif text-sm font-bold">{i + 1}</span>
                    <span className="font-serif text-xl font-semibold leading-snug">{t}</span>
                  </li>
                ))}
              </ol>
              <p className="leading-relaxed text-primary-foreground/60">Each stage is cheaper to catch than the one after it.</p>
            </div>
          </FadeInSection>
        )}
      </div>
    </section>
  )
}

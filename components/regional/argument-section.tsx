import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

export function ArgumentSection({ argument }: { argument: NonNullable<HomeContent["argument"]> }) {
  return (
    <section className="bg-sky py-20 lg:py-28" aria-labelledby="argument-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">{argument.eyebrow}</p>
          <h2 id="argument-title" className="mt-3 max-w-3xl font-serif text-[1.75rem] font-bold leading-tight sm:text-3xl text-foreground text-balance md:text-5xl">
            {argument.title}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed sm:text-lg text-foreground/80">{argument.body}</p>
        </FadeInSection>
        {argument.chain && (
          <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {argument.chain.map((c, i) => (
              <li key={c.label}>
                <FadeInSection delay={i * 100} className="flex h-full flex-col gap-3 rounded-3xl bg-background p-6 shadow-sm">
                  <span className="font-serif text-xs font-bold uppercase tracking-widest text-accent">{`${i + 1} / ${c.label}`}</span>
                  <p className="leading-relaxed text-foreground">{c.text}</p>
                </FadeInSection>
              </li>
            ))}
          </ol>
        )}
        {argument.disclaimer && <p className="mt-6 max-w-3xl text-sm leading-relaxed text-foreground/60">{argument.disclaimer}</p>}
      </div>
    </section>
  )
}

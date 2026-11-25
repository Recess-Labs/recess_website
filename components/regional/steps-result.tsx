import { Lock } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const stepTones = ["bg-sky", "bg-butter", "bg-mint"]

export function StepsResult({ stepsTitle, steps, result }: { stepsTitle: string; steps: HomeContent["steps"]; result: HomeContent["result"] }) {
  return (
    <section className="bg-peach py-20 lg:py-28" aria-labelledby="steps-title">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">How it works</p>
          <h2 id="steps-title" className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            {stepsTitle}
          </h2>
        </FadeInSection>

        <ol className="relative mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <FadeInSection delay={i * 120} className="flex h-full flex-col gap-4 rounded-3xl bg-background p-7 shadow-sm">
                <span className={`flex size-12 items-center justify-center rounded-2xl font-serif text-lg font-bold text-foreground ${stepTones[i % 3]}`}>{i + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 font-serif text-sm font-semibold text-accent">{s.subtitle}</p>
                </div>
                <p className="leading-relaxed text-muted-foreground">{s.desc}</p>
              </FadeInSection>
            </li>
          ))}
        </ol>

        <FadeInSection delay={200} className="mt-16">
          <div className="overflow-hidden rounded-[2rem] bg-foreground text-primary-foreground shadow-2xl">
            <div className="grid gap-10 p-8 md:p-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <p className="font-serif text-sm font-bold uppercase tracking-widest text-mint">The result</p>
                <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-balance md:text-4xl">{result.headline}</h3>
                <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75">{result.track}</p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <p className="font-serif text-xs font-bold uppercase tracking-widest text-mint">For staff</p>
                  <p className="mt-2 leading-relaxed">{result.forStaff}</p>
                </div>
                <div className="rounded-2xl bg-primary-foreground/10 p-6">
                  <p className="font-serif text-xs font-bold uppercase tracking-widest text-mint">For leaders</p>
                  <p className="mt-2 leading-relaxed">{result.forLeaders}</p>
                </div>
              </div>
            </div>
            <p className="flex items-start gap-3 border-t border-primary-foreground/10 px-8 py-5 text-sm leading-relaxed text-primary-foreground/70 md:px-12">
              <Lock className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden="true" />
              {result.privacy}
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

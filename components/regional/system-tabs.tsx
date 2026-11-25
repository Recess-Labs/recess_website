"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const tones = ["bg-sky", "bg-mint", "bg-butter"]

export function SystemTabs({ system }: { system: HomeContent["system"] }) {
  const [active, setActive] = useState(0)
  const layer = system.layers[active]

  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="system-title">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">The Recess system</p>
          <h2 id="system-title" className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Three layers. One operating system for the emotional load.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{system.intro}</p>
        </FadeInSection>

        <FadeInSection delay={150} className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,22rem)_1fr]">
          <div role="tablist" aria-label="Recess system layers" aria-orientation="vertical" className="flex flex-col gap-3">
            {system.layers.map((l, i) => (
              <button
                key={l.title}
                role="tab"
                id={`layer-tab-${i}`}
                aria-selected={active === i}
                aria-controls="layer-panel"
                type="button"
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                  active === i ? "border-foreground bg-foreground text-primary-foreground shadow-lg" : "border-border/60 bg-secondary text-foreground hover:border-foreground/30"
                }`}
              >
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl font-serif text-sm font-bold text-foreground ${tones[i]}`}>{i + 1}</span>
                <span>
                  <span className="block font-serif text-lg font-bold">{l.title}</span>
                  <span className={`block text-sm ${active === i ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{l.subtitle}</span>
                </span>
              </button>
            ))}
          </div>

          <div id="layer-panel" role="tabpanel" aria-labelledby={`layer-tab-${active}`} className={`flex flex-col gap-6 rounded-3xl p-8 md:p-10 ${tones[active]}`}>
            <h3 className="font-serif text-2xl font-bold text-foreground md:text-3xl">{layer.title}</h3>
            <p className="max-w-2xl text-lg leading-relaxed text-foreground">{layer.desc}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {layer.checks.map((c) => (
                <li key={c} className="flex items-start gap-3 rounded-xl bg-background/70 p-4 text-sm font-medium leading-relaxed text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <Link href={layer.href} className="group mt-auto inline-flex items-center gap-2 self-start font-serif text-sm font-semibold text-foreground">
              {`Explore ${layer.title}`}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

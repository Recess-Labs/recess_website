import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { BookCta } from "@/components/regional/book-cta"
import { BOOK_MICROCOPY, LOW_COMMIT_URL, type HomeContent } from "@/lib/region-content"

export function WhyNowSection({ whyNow }: { whyNow: HomeContent["whyNow"] }) {
  return (
    <section className="bg-secondary py-20 lg:py-28" aria-labelledby="why-now-title">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">Why now</p>
          <h2 id="why-now-title" className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-5xl">{whyNow.title}</h2>
        </FadeInSection>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {whyNow.items.map((it, i) => (
            <FadeInSection key={it.title} delay={i * 100} className="flex h-full flex-col gap-3 rounded-3xl bg-background p-7 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-foreground">{it.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{it.text}</p>
            </FadeInSection>
          ))}
        </div>
        <p className="mt-10 max-w-3xl font-serif text-xl font-semibold leading-relaxed text-foreground text-pretty">{whyNow.closing}</p>
      </div>
    </section>
  )
}

export function PlanClosing({ planTitle, plan, finalCta }: { planTitle: string; plan: HomeContent["plan"]; finalCta: HomeContent["finalCta"] }) {
  return (
    <section className="bg-foreground py-20 text-primary-foreground lg:py-28" aria-labelledby="final-title">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection className="flex flex-col items-center text-center">
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-mint">{planTitle}</p>
          <h2 id="final-title" className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-balance md:text-6xl">{finalCta.title}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/70">{finalCta.body}</p>
        </FadeInSection>

        <ol className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {plan.map((p, i) => (
            <li key={p.title}>
              <FadeInSection delay={i * 120} className={`flex h-full flex-col gap-3 rounded-3xl p-7 ${i === 0 ? "bg-mint text-foreground" : "bg-primary-foreground/10"}`}>
                <span className="font-serif text-sm font-bold">{`Step ${i + 1}`}</span>
                <h3 className="font-serif text-xl font-bold">{p.title}</h3>
                <p className={`leading-relaxed ${i === 0 ? "text-foreground/80" : "text-primary-foreground/70"}`}>{p.text}</p>
              </FadeInSection>
            </li>
          ))}
        </ol>

        <FadeInSection delay={300} className="mt-12 flex flex-col items-center gap-4 text-center">
          <BookCta tone="light" />
          <p className="max-w-md text-sm leading-relaxed text-primary-foreground/60">{BOOK_MICROCOPY}</p>
          <Link href={LOW_COMMIT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground/80 underline-offset-4 hover:underline">
            {"Not ready to talk? Take the free 3-minute team check-in"}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { BookCta } from "@/components/regional/book-cta"
import { BOOK_MICROCOPY, LOW_COMMIT_URL, type HomeContent } from "@/lib/region-content"

export function WhyNowSection({ whyNow }: { whyNow: HomeContent["whyNow"] }) {
  return (
    <section className="bg-secondary py-16 lg:py-28" aria-labelledby="why-now-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">Why now</p>
          <h2 id="why-now-title" className="mt-3 max-w-3xl font-serif text-[2rem] font-bold leading-[1.1] text-foreground text-balance md:text-5xl">{whyNow.title}</h2>
        </FadeInSection>
        <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4">
          {whyNow.items.map((it, i) => (
            <FadeInSection key={it.title} delay={i * 100} className="flex h-full flex-col gap-2 rounded-3xl bg-background p-5 shadow-sm sm:p-7">
              <h3 className="font-serif text-lg font-bold text-foreground">{it.title}</h3>
              <p className="text-sm leading-relaxed">{it.text}</p>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PlanClosing({ plan, finalCta }: { planTitle?: string; plan: HomeContent["plan"]; finalCta: HomeContent["finalCta"] }) {
  return (
    <section className="relative overflow-hidden bg-foreground text-primary-foreground" aria-labelledby="final-title">
      <Image src="/images/story/home.png" alt="" fill sizes="100vw" className="object-cover opacity-30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/90 to-foreground" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:py-32">
        <FadeInSection className="flex flex-col items-center text-center">
          <h2 id="final-title" className="max-w-3xl font-serif text-[2.25rem] font-bold leading-[1.05] text-balance md:text-6xl">{finalCta.title}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75 text-pretty sm:text-lg">{finalCta.body}</p>
          <BookCta tone="light" className="mt-8 w-full sm:w-auto [&>a]:w-full" />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-primary-foreground/60">{BOOK_MICROCOPY}</p>
        </FadeInSection>

        <ol className="mt-12 flex flex-col gap-3 md:grid md:grid-cols-3 md:gap-4">
          {plan.map((p, i) => (
            <li key={p.title}>
              <FadeInSection delay={i * 120} className="flex h-full gap-4 rounded-3xl bg-primary-foreground/10 p-5 backdrop-blur md:flex-col md:gap-3 md:p-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-mint font-serif text-sm font-bold text-foreground">{i + 1}</span>
                <span className="flex flex-col gap-1">
                  <span className="font-serif text-base font-bold">{p.title}</span>
                  <span className="text-sm leading-relaxed text-primary-foreground/70">{p.text}</span>
                </span>
              </FadeInSection>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex justify-center">
          <Link
            href={LOW_COMMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-center text-sm font-medium text-primary-foreground/80 underline underline-offset-4 hover:text-primary-foreground"
          >
            {"Not ready to talk? Try the free 3-minute team check-in"}
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

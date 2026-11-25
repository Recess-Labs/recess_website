import { Check, Minus } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { BookCta } from "@/components/regional/book-cta"
import { BOOK_MICROCOPY, type HomeContent } from "@/lib/region-content"

export function DifferentiationTable({ diff }: { diff: HomeContent["differentiation"] }) {
  const cols = [diff.assistLabel, "Training", "Wellbeing app", "Recess"]
  const rows: { label: string; cells: string[] }[] = [
    { label: "When it helps", cells: ["Days or weeks later", "Before the shift", "When someone remembers", "During or right after the shift"] },
    { label: "What staff do", cells: ["Call and talk", "Attend a course", "Open it alone", "Ten minutes. No talking it through"] },
    { label: "What leaders see", cells: ["Usage numbers", "Attendance", "Downloads", diff.recessLeaders] },
  ]

  return (
    <section className="bg-background py-20 lg:py-28" aria-labelledby="diff-title">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">Why what you have isn&apos;t enough</p>
          <h2 id="diff-title" className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Most support arrives after the damage is done
          </h2>
        </FadeInSection>

        <FadeInSection delay={150} className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-border/50">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <caption className="sr-only">How Recess compares with an assistance line, training and a wellbeing app</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-44 bg-secondary p-5 text-sm font-medium text-muted-foreground">
                    <span className="sr-only">Comparison</span>
                  </th>
                  {cols.map((c, i) => (
                    <th
                      key={c}
                      scope="col"
                      className={`p-5 font-serif text-base font-bold ${i === 3 ? "bg-foreground text-primary-foreground" : "bg-secondary text-foreground"}`}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-border/50">
                    <th scope="row" className="p-5 text-sm font-semibold text-foreground">{r.label}</th>
                    {r.cells.map((cell, i) => (
                      <td key={i} className={`p-5 align-top text-sm leading-relaxed ${i === 3 ? "bg-foreground font-medium text-primary-foreground" : "text-muted-foreground"}`}>
                        <span className="flex items-start gap-2">
                          {i === 3 ? (
                            <Check className="mt-0.5 size-4 shrink-0 text-mint" aria-hidden="true" />
                          ) : (
                            <Minus className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" aria-hidden="true" />
                          )}
                          {cell}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeInSection>

        <FadeInSection delay={250} className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex flex-col gap-4">
            <p className="font-serif text-xl font-semibold leading-relaxed text-foreground text-pretty">
              {"Your EAP, occupational health and training aren't wrong. They just can't reach someone at 2am, mid-shift, after a hard call."}
            </p>
            {diff.note && <p className="max-w-3xl leading-relaxed text-muted-foreground">{diff.note}</p>}
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <BookCta />
            <p className="max-w-xs text-sm text-muted-foreground lg:text-right">{BOOK_MICROCOPY}</p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

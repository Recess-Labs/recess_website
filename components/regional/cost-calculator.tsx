"use client"

import { useId, useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { BookCta } from "@/components/regional/book-cta"
import { currencySymbol, formatMoney, type RegionId } from "@/lib/regions"
import type { HomeContent } from "@/lib/region-content"

function Field({ label, note, value, onChange, min, max, step, prefix, suffix }: {
  label: string
  note?: string
  value: number
  onChange: (n: number) => void
  min: number
  max: number
  step: number
  prefix?: string
  suffix?: string
}) {
  const id = useId()
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-sm font-semibold text-foreground">{label}</label>
        <span className="font-serif text-lg font-bold text-foreground">{`${prefix ?? ""}${value.toLocaleString("en")}${suffix ?? ""}`}</span>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[var(--accent)]" />
      {note && <p className="text-xs leading-relaxed text-muted-foreground">{note}</p>}
    </div>
  )
}

export function CostCalculator({ region, calc }: { region: RegionId; calc: HomeContent["calculator"] }) {
  const symbol = currencySymbol(region)
  const [team, setTeam] = useState(calc.defaultTeam)
  const [turnover, setTurnover] = useState(calc.defaultTurnover)
  const [cost, setCost] = useState(calc.defaultCost ?? 40000)

  const leavers = Math.round((team * turnover) / 100)
  const annual = leavers * cost
  const preventable = Math.round(annual * 0.2)

  return (
    <section className="bg-blush py-20 lg:py-28" aria-labelledby="calc-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <FadeInSection className="grid grid-cols-1 overflow-hidden rounded-3xl border border-border/40 bg-background shadow-xl sm:rounded-[2rem] lg:grid-cols-2">
          <div className="flex min-w-0 flex-col gap-7 p-5 sm:p-8 md:p-12">
            <div>
              <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">What waiting costs</p>
              <h2 id="calc-title" className="mt-3 font-serif text-[1.75rem] font-bold leading-tight sm:text-3xl text-foreground text-balance md:text-4xl">
                Every month you wait, someone else hands in their notice
              </h2>
            </div>
            <Field label={`Size of your ${calc.teamWord}`} value={team} onChange={setTeam} min={50} max={20000} step={50} />
            <Field label="Annual staff turnover" note={calc.turnoverNote} value={turnover} onChange={setTurnover} min={5} max={50} step={1} suffix="%" />
            <Field label="Cost to replace one person" note={calc.costNote} value={cost} onChange={setCost} min={5000} max={150000} step={1000} prefix={symbol} />
          </div>

          <div className="flex min-w-0 flex-col justify-between gap-8 bg-foreground p-5 text-primary-foreground sm:p-8 md:p-12" aria-live="polite">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm text-primary-foreground/60">People leaving each year</p>
                <p className="font-serif text-4xl font-bold">{leavers.toLocaleString("en")}</p>
              </div>
              <div>
                <p className="text-sm text-primary-foreground/60">What turnover costs you each year</p>
                <p className="font-serif text-4xl font-bold tracking-tight tabular-nums sm:text-5xl md:text-6xl">{formatMoney(region, annual)}</p>
              </div>
              <div className="rounded-2xl bg-mint p-5 text-foreground">
                <p className="text-sm font-medium">If you kept just one in five of them</p>
                <p className="mt-1 font-serif text-2xl font-bold tabular-nums sm:text-3xl">
                  {formatMoney(region, preventable)}
                  <span className="text-base font-semibold sm:text-lg">{" a year"}</span>
                </p>
                <p className="mt-1 text-xs text-foreground/70">{`Before counting ${calc.absenceWord}, overtime and agency cover.`}</p>
              </div>
            </div>
            <div className="flex flex-col items-stretch gap-3 sm:items-start">
              <BookCta tone="light" className="w-full sm:w-auto" />
              <p className="text-xs leading-relaxed text-primary-foreground/50">Illustrative estimate based on your inputs. Not a guarantee of results.</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

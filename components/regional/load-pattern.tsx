"use client"

import { useMemo, useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import type { HomeContent } from "@/lib/region-content"

const W = 800
const H = 300
const PAD = { top: 40, right: 20, bottom: 30, left: 20 }
const THRESHOLD = 70
const EVENTS = [
  { t: 14, amt: 22 },
  { t: 36, amt: 18 },
  { t: 57, amt: 26 },
  { t: 78, amt: 20 },
]

function loadAt(t: number, withRecess: boolean) {
  let load = 12
  for (const e of EVENTS) {
    if (t < e.t) continue
    const dt = t - e.t
    const ramp = Math.min(1, (dt + 1) / 3)
    load += withRecess ? e.amt * ramp * (dt < 3 ? 1 : Math.exp(-(dt - 3) / 2.2)) + 0.6 : e.amt * ramp * (0.74 + 0.26 * Math.exp(-dt / 6))
  }
  return Math.min(load, 96)
}

const x = (t: number) => PAD.left + (t / 100) * (W - PAD.left - PAD.right)
const y = (v: number) => H - PAD.bottom - (v / 100) * (H - PAD.top - PAD.bottom)

function buildPath(withRecess: boolean) {
  const pts: string[] = []
  for (let t = 0; t <= 100; t += 0.5) pts.push(`${x(t).toFixed(1)},${y(loadAt(t, withRecess)).toFixed(1)}`)
  return `M${pts.join(" L")}`
}

export function LoadPattern({ pattern }: { pattern: HomeContent["pattern"] }) {
  const [withRecess, setWithRecess] = useState(false)
  const paths = useMemo(() => ({ without: buildPath(false), with: buildPath(true) }), [])

  return (
    <section className="bg-blush pb-20 lg:pb-28" aria-labelledby="pattern-title">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="overflow-hidden rounded-[2rem] border border-border/40 bg-background shadow-xl">
            <div className="flex flex-col gap-6 border-b border-border/40 p-6 md:flex-row md:items-end md:justify-between md:p-10">
              <div>
                <p className="font-serif text-sm font-bold uppercase tracking-widest text-accent">The pattern we address</p>
                <h2 id="pattern-title" className="mt-3 max-w-xl font-serif text-3xl font-bold leading-tight text-foreground text-balance md:text-4xl">
                  Hard moments don&apos;t reset at the end of a shift. They stack.
                </h2>
              </div>
              <div role="group" aria-label="Compare load" className="inline-flex self-start rounded-full bg-secondary p-1 md:self-auto">
                {[
                  { v: false, label: pattern.withoutLabel },
                  { v: true, label: pattern.withLabel },
                ].map((o) => (
                  <button
                    key={o.label}
                    type="button"
                    aria-pressed={withRecess === o.v}
                    onClick={() => setWithRecess(o.v)}
                    className={`rounded-full px-5 py-2 font-serif text-sm font-semibold transition-all ${
                      withRecess === o.v ? (o.v ? "bg-mint text-foreground shadow" : "bg-foreground text-primary-foreground shadow") : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-2 pt-6 md:px-8">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="h-auto w-full"
                role="img"
                aria-label={
                  withRecess
                    ? "With Recess, each hard moment is followed by a ten-minute session and load returns to baseline, staying below the threshold."
                    : `Without Recess, load from each hard moment accumulates across the week until it crosses the threshold: ${pattern.threshold}.`
                }
              >
                <defs>
                  <linearGradient id="loadFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor={withRecess ? "var(--mint)" : "var(--rose)"} stopOpacity="0.7" />
                    <stop offset="100%" stopColor={withRecess ? "var(--mint)" : "var(--rose)"} stopOpacity="0" />
                  </linearGradient>
                </defs>

                <rect x={PAD.left} y={PAD.top} width={W - PAD.left - PAD.right} height={y(THRESHOLD) - PAD.top} fill="var(--rose)" opacity="0.18" />
                <line x1={PAD.left} x2={W - PAD.right} y1={y(THRESHOLD)} y2={y(THRESHOLD)} stroke="var(--foreground)" strokeDasharray="6 6" strokeWidth="1.5" opacity="0.5" />
                <text x={PAD.left + 4} y={y(THRESHOLD) - 8} className="fill-foreground font-sans text-[13px] font-medium">
                  {pattern.threshold}
                </text>

                <path d={`${withRecess ? paths.with : paths.without} L${x(100)},${y(0)} L${x(0)},${y(0)} Z`} fill="url(#loadFill)" className="transition-all duration-700" />
                <path d={withRecess ? paths.without : paths.with} fill="none" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.35" />
                <path
                  key={String(withRecess)}
                  d={withRecess ? paths.with : paths.without}
                  fill="none"
                  stroke={withRecess ? "var(--foreground)" : "var(--accent)"}
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{ strokeDasharray: 2000, ["--dash" as string]: 2000, animation: "draw-line 1.4s ease-out forwards" }}
                />

                {EVENTS.map((e, i) => (
                  <g key={e.t}>
                    <line x1={x(e.t)} x2={x(e.t)} y1={PAD.top - 6} y2={H - PAD.bottom} stroke="var(--foreground)" opacity="0.12" />
                    <text x={x(e.t)} y={PAD.top - 14} textAnchor="middle" className="hidden fill-foreground font-sans text-[12px] font-semibold md:inline">
                      {pattern.events[i]}
                    </text>
                    <circle cx={x(e.t)} cy={PAD.top - 18} r="11" fill="var(--foreground)" className="md:hidden" />
                    <text x={x(e.t)} y={PAD.top - 13} textAnchor="middle" className="fill-primary-foreground font-sans text-[14px] font-bold md:hidden">
                      {i + 1}
                    </text>
                    {withRecess && (
                      <g>
                        <circle cx={x(e.t + 3)} cy={y(loadAt(e.t + 3, true))} r="7" fill="var(--mint)" stroke="var(--foreground)" strokeWidth="1.5" />
                        <text x={x(e.t + 3) + 12} y={y(loadAt(e.t + 3, true)) + 4} className="fill-foreground font-sans text-[11px] font-medium">
                          10-min session
                        </text>
                      </g>
                    )}
                  </g>
                ))}
                <text x={PAD.left} y={H - 8} className="fill-muted-foreground font-sans text-[12px]">Monday</text>
                <text x={W - PAD.right} y={H - 8} textAnchor="end" className="fill-muted-foreground font-sans text-[12px]">Friday</text>
              </svg>
              <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 md:hidden" aria-label="Events on the chart">
                {pattern.events.map((ev, i) => (
                  <li key={ev} className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-primary-foreground" aria-hidden="true">
                      {i + 1}
                    </span>
                    {ev}
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid gap-px border-t border-border/40 bg-border/40 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
              {([
                { label: "Exposure", desc: "Crisis, grief, distress", tone: "bg-sky" },
                null,
                { label: "Overload", desc: "The body stays on alert", tone: "bg-butter" },
                "recess",
                { label: "Instability", desc: pattern.threshold, tone: "bg-rose" },
              ] as Array<{ label: string; desc: string; tone: string } | null | "recess">).map((s, i) =>
                s === null ? (
                  <div key={i} className="hidden items-center justify-center bg-background px-2 text-accent md:flex" aria-hidden="true">
                    {"\u2192"}
                  </div>
                ) : s === "recess" ? (
                  <div key={i} className={`flex items-center justify-center gap-2 px-4 py-3 font-serif text-xs font-bold uppercase tracking-widest transition-colors ${withRecess ? "bg-mint text-foreground" : "bg-background text-accent"}`}>
                    Recess steps in
                  </div>
                ) : (
                  <div key={i} className={`flex items-center gap-3 bg-background p-5 transition-opacity md:p-6 ${withRecess && s.label === "Instability" ? "opacity-40" : ""}`}>
                    <span className={`size-3 shrink-0 rounded-full ${s.tone}`} aria-hidden="true" />
                    <div>
                      <p className="font-serif text-lg font-bold text-foreground">{s.label}</p>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ),
              )}
            </div>
            <p className="border-t border-border/40 bg-secondary/60 px-6 py-5 text-center font-serif text-base font-medium leading-relaxed text-foreground text-balance md:text-lg">
              {pattern.summary}
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { REGIONS, REGION_ORDER } from "@/lib/regions"
import { saveRegionPref } from "@/lib/region-cookie"
import { useCurrentRegion } from "@/components/regional/region-selector"

export function RegionPicker() {
  const current = useCurrentRegion()
  return (
    <ul className="mt-12 grid gap-4 md:grid-cols-2">
      {REGION_ORDER.map((id) => {
        const r = REGIONS[id]
        const active = id === current
        return (
          <li key={id}>
            <Link
              href={r.path}
              hrefLang={r.locale}
              onClick={() => saveRegionPref(id)}
              className={`group flex h-full flex-col gap-4 rounded-3xl border p-5 sm:p-7 transition-all hover:-translate-y-1 hover:shadow-xl ${
                active ? "border-foreground bg-foreground text-primary-foreground" : "border-border/50 bg-background text-foreground"
              }`}
            >
              <span className="flex items-center justify-between">
                <span className="font-serif text-2xl font-bold">{r.name}</span>
                {active ? <Check className="size-5 text-mint" aria-label="Current region" /> : <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />}
              </span>
              <span className={`leading-relaxed ${active ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{r.description}</span>
              <span className={`mt-auto text-sm font-medium ${active ? "text-mint" : "text-accent"}`}>{`withrecess.com${r.path === "/" ? "" : r.path} \u00b7 ${r.currency} \u00b7 ${r.spelling === "us" ? "US" : "UK"} spelling`}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

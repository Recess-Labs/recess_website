"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe } from "lucide-react"
import { GEO_COOKIE, HOME_PATHS, REGIONS, regionForCountry, regionFromPath, type RegionId } from "@/lib/regions"
import { readCookie, readRegionPref, saveRegionPref } from "@/lib/region-cookie"

function placeName(country: string, region: RegionId) {
  if (region === "uk") return "the UK"
  if (country === "US") return "the US"
  try {
    return new Intl.DisplayNames(["en"], { type: "region" }).of(country) ?? REGIONS[region].inName
  } catch {
    return REGIONS[region].inName
  }
}

export function RegionBanner() {
  const pathname = usePathname()
  const [suggestion, setSuggestion] = useState<{ region: RegionId; place: string } | null>(null)

  useEffect(() => {
    const pageRegion = regionFromPath(pathname)
    if (!HOME_PATHS.has(pathname) || !pageRegion || readRegionPref()) {
      setSuggestion(null)
      return
    }
    const country = readCookie(GEO_COOKIE)
    const geoRegion = regionForCountry(country)
    if (country && geoRegion && geoRegion !== pageRegion) {
      setSuggestion({ region: geoRegion, place: placeName(country, geoRegion) })
    } else {
      setSuggestion(null)
    }
  }, [pathname])

  if (!suggestion) return null
  const pageRegion = regionFromPath(pathname) ?? "us"
  const target = REGIONS[suggestion.region]

  return (
    <div role="region" aria-label="Regional site suggestion" className="bg-foreground text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-6 py-2.5 text-sm">
        <span className="flex items-center gap-2">
          <Globe className="size-4 text-mint" aria-hidden="true" />
          {`It looks like you're in ${suggestion.place}.`}
        </span>
        <span className="flex items-center gap-2">
          <Link
            href={target.path}
            hrefLang={target.locale}
            onClick={() => {
              saveRegionPref(suggestion.region)
              setSuggestion(null)
            }}
            className="rounded-full bg-primary-foreground px-3 py-1 font-serif font-semibold text-foreground transition-opacity hover:opacity-90"
          >
            {`See the ${target.siteName}`}
          </Link>
          <button
            type="button"
            onClick={() => {
              saveRegionPref(pageRegion)
              setSuggestion(null)
            }}
            className="rounded-full px-3 py-1 text-primary-foreground/70 underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
          >
            Stay on this one
          </button>
        </span>
      </div>
    </div>
  )
}

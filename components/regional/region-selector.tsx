"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Check, Globe } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { REGIONS, REGION_ORDER, regionFromPath, type RegionId } from "@/lib/regions"
import { readRegionPref, saveRegionPref } from "@/lib/region-cookie"

export function useCurrentRegion(): RegionId {
  const pathname = usePathname()
  const fromPath = regionFromPath(pathname)
  const [pref, setPref] = useState<RegionId | null>(null)
  useEffect(() => setPref(readRegionPref()), [pathname])
  if (fromPath && (pathname !== "/" || !pref)) return fromPath
  return pref ?? fromPath ?? "us"
}

export function RegionSelector({ variant = "nav" }: { variant?: "nav" | "footer" }) {
  const current = useCurrentRegion()
  const dark = variant === "footer"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          dark
            ? "border border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/10"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
        }`}
        aria-label={`Region: ${REGIONS[current].name}. Change region`}
      >
        <Globe className="size-4" aria-hidden="true" />
        <span>{REGIONS[current].label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="font-serif">Choose your region</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {REGION_ORDER.map((id) => (
          <DropdownMenuItem key={id} asChild>
            <Link
              href={REGIONS[id].path}
              hrefLang={REGIONS[id].locale}
              onClick={() => saveRegionPref(id)}
              className="flex items-center justify-between gap-2"
            >
              <span className="flex flex-col">
                <span className="text-foreground">{REGIONS[id].name}</span>
              </span>
              {id === current && <Check className="size-4 text-accent" aria-hidden="true" />}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/region" className="text-muted-foreground">
            About our regions
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

"use client"

import { useSearchParams } from "next/navigation"
import { Check } from "lucide-react"

export function ChampionAppliedBanner() {
  const searchParams = useSearchParams()
  const showBanner = searchParams.get("applied") === "1"

  if (!showBanner) return null

  return (
    <section className="bg-green-50/70 py-4">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-xl border-2 border-green-400 bg-green-50 px-5 py-4 shadow-sm">
          <p className="flex items-center gap-3 text-base font-semibold text-green-900">
            <Check className="h-5 w-5 shrink-0" />
            Thank you for applying! We&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    </section>
  )
}

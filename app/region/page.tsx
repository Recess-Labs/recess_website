import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { RegionPicker } from "@/components/regional/region-picker"

export const metadata: Metadata = {
  title: "Choose your region",
  description: "Pick the Recess site for where you work: the US and Americas, the United Kingdom, Europe or International.",
  alternates: { canonical: "/region" },
}

export default function RegionPage() {
  return (
    <PageWrapper>
      <section className="bg-blush py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-serif text-4xl font-bold text-foreground text-balance md:text-6xl">Choose your region</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Same system everywhere. Each site uses local spelling, currency and the sectors we work with there. We&apos;ll remember your choice.
          </p>
          <RegionPicker />
        </div>
      </section>
    </PageWrapper>
  )
}

import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { RegionalHero } from "@/components/regional/regional-hero"
import { StoryStrip } from "@/components/regional/story-strip"
import { LoadPattern } from "@/components/regional/load-pattern"
import { ProofStats } from "@/components/regional/proof-stats"
import { SectorCards } from "@/components/regional/sector-cards"
import { HowItWorks } from "@/components/regional/how-it-works"
import { CostCalculator } from "@/components/regional/cost-calculator"
import { PlanClosing } from "@/components/regional/plan-closing"
import { StickyCta } from "@/components/regional/sticky-cta"
import { getHomeContent } from "@/lib/region-content"
import { REGIONS, hreflangAlternates, type RegionId } from "@/lib/regions"

export function regionalMetadata(region: RegionId): Metadata {
  const c = getHomeContent(region)
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: hreflangAlternates(region),
    openGraph: { title: c.metaTitle, description: c.metaDescription, url: REGIONS[region].path, locale: REGIONS[region].locale.replace("-", "_"), type: "website" },
  }
}

export function RegionalHome({ region }: { region: RegionId }) {
  const c = getHomeContent(region)
  return (
    <PageWrapper>
      <div lang={REGIONS[region].locale}>
        <RegionalHero hero={c.hero} stat={c.recognition.stats[0]} />
        <StoryStrip story={c.story} note={c.storyNote} />
        <ProofStats recognition={c.recognition} />
        <LoadPattern pattern={c.pattern} />
        <HowItWorks system={c.system} assistLabel={c.differentiation.assistLabel} />
        {c.sectors && <SectorCards sectors={c.sectors} />}
        <CostCalculator region={region} calc={c.calculator} />
        <PlanClosing plan={c.plan} finalCta={c.finalCta} />
      </div>
      <StickyCta />
    </PageWrapper>
  )
}

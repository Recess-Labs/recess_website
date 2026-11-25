import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { RegionalHero } from "@/components/regional/regional-hero"
import { StoryStrip } from "@/components/regional/story-strip"
import { LoadPattern } from "@/components/regional/load-pattern"
import { RecognitionSection } from "@/components/regional/recognition-section"
import { SectorCards } from "@/components/regional/sector-cards"
import { DifferentiationTable } from "@/components/regional/differentiation-table"
import { StepsResult } from "@/components/regional/steps-result"
import { SystemTabs } from "@/components/regional/system-tabs"
import { ArgumentSection } from "@/components/regional/argument-section"
import { CostCalculator } from "@/components/regional/cost-calculator"
import { PlanClosing, WhyNowSection } from "@/components/regional/plan-closing"
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
        <LoadPattern pattern={c.pattern} />
        <StoryStrip story={c.story} note={c.storyNote} />
        <RecognitionSection recognition={c.recognition} />
        {c.sectors && <SectorCards sectors={c.sectors} />}
        <DifferentiationTable diff={c.differentiation} />
        <StepsResult stepsTitle={c.stepsTitle} steps={c.steps} result={c.result} />
        <SystemTabs system={c.system} />
        {c.argument && <ArgumentSection argument={c.argument} />}
        <CostCalculator region={region} calc={c.calculator} />
        <WhyNowSection whyNow={c.whyNow} />
        <PlanClosing planTitle={c.planTitle} plan={c.plan} finalCta={c.finalCta} />
      </div>
      <StickyCta />
    </PageWrapper>
  )
}

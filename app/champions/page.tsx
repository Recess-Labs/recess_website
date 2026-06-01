import type { Metadata } from "next"
import { Suspense } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { ChampionHero } from "@/components/champions/champion-hero"
import { ChampionWhy } from "@/components/champions/champion-why"
import { ChampionPerks } from "@/components/champions/champion-perks"
import { ChampionCommitment } from "@/components/champions/champion-commitment"
import { ChampionForm } from "@/components/champions/champion-form"
import { ChampionAppliedBanner } from "@/components/champions/champion-applied-banner"

export const metadata: Metadata = {
  title: "Become a Recess Champion",
  description: "Join the founding group of frontline professionals. Get early access to Recess, locked pricing, and a direct voice in what we build.",
}

type ChampionsPageProps = {
  searchParams?: Promise<{
    applied?: string | string[]
  }>
}

export default async function ChampionsPage({ searchParams }: ChampionsPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const appliedParam = resolvedSearchParams?.applied
  const showAppliedBanner = Array.isArray(appliedParam)
    ? appliedParam.includes("1")
    : appliedParam === "1"

  return (
    <PageWrapper>
      <ChampionAppliedBanner show={showAppliedBanner} />
      <ChampionHero />
      <ChampionWhy />
      <ChampionPerks />
      <ChampionCommitment />
      <Suspense fallback={null}>
        <ChampionForm />
      </Suspense>
    </PageWrapper>
  )
}

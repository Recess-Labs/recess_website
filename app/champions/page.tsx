import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { ChampionHero } from "@/components/champions/champion-hero"
import { ChampionWhy } from "@/components/champions/champion-why"
import { ChampionPerks } from "@/components/champions/champion-perks"
import { ChampionCommitment } from "@/components/champions/champion-commitment"
import { ChampionForm } from "@/components/champions/champion-form"

export const metadata: Metadata = {
  title: "Become a Recess Champion",
  description: "Join the founding group of frontline professionals. Get early access to Recess, locked pricing, and a direct voice in what we build.",
}

export default function ChampionsPage() {
  return (
    <PageWrapper>
      <ChampionHero />
      <ChampionWhy />
      <ChampionPerks />
      <ChampionCommitment />
      <ChampionForm />
    </PageWrapper>
  )
}

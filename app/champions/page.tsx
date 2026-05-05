import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { ChampionHero } from "@/components/champions/champion-hero"
import { ChampionWhy } from "@/components/champions/champion-why"
import { ChampionPerks } from "@/components/champions/champion-perks"
import { ChampionCommitment } from "@/components/champions/champion-commitment"
import { ChampionForm } from "@/components/champions/champion-form"

export const metadata: Metadata = {
  title: "Become a Recess Champion | Join Our Founding Community",
  description:
    "Join the founding group of frontline professionals fighting vicarious trauma and compassion fatigue. Get 6 months free, locked pricing forever, and shape the future of trauma-informed support.",
  openGraph: {
    title: "Become a Recess Champion | Join Our Founding Community",
    description:
      "Join the founding group of frontline professionals. Get 6 months free, locked pricing, and a direct voice in what we build.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
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

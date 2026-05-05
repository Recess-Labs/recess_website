import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { CostBand } from "@/components/home/cost-band"
import { ProofSection } from "@/components/home/proof-section"
import { StepsSection } from "@/components/home/steps-section"
import { ChampionsBanner } from "@/components/home/champions-banner"
import { SystemSection } from "@/components/home/system-section"
import { IndustrySection } from "@/components/home/industry-section"
import { WhyNowSection } from "@/components/home/why-now-section"
import { ImageBreak } from "@/components/home/image-break"
import { SharedCTA } from "@/components/shared-cta"

export const metadata: Metadata = {
  title: "Vicarious Trauma & Compassion Fatigue Relief for Frontline Workers | Recess",
  description:
    "Combat burnout, vicarious trauma, and compassion fatigue with proven neuroscience-backed tools. Recess offers trauma-informed training and real-time stabilization for healthcare, education, and public safety teams.",
  openGraph: {
    title: "Vicarious Trauma & Compassion Fatigue Relief for Frontline Workers | Recess",
    description:
      "Combat burnout, vicarious trauma, and compassion fatigue with proven neuroscience-backed tools for care professionals.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <ProblemSection />
      <CostBand />
      <ProofSection />
      <StepsSection />
      <ChampionsBanner />
      <ImageBreak />
      <SystemSection />
      <IndustrySection />
      <WhyNowSection />
      <SharedCTA />
    </PageWrapper>
  )
}

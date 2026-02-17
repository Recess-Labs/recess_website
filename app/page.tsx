import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { HeroSection } from "@/components/home/hero-section"
import { ProblemSection } from "@/components/home/problem-section"
import { CostBand } from "@/components/home/cost-band"
import { ProofSection } from "@/components/home/proof-section"
import { StepsSection } from "@/components/home/steps-section"
import { SystemSection } from "@/components/home/system-section"
import { IndustrySection } from "@/components/home/industry-section"
import { WhyNowSection } from "@/components/home/why-now-section"
import { ImageBreak } from "@/components/home/image-break"
import { SharedCTA } from "@/components/shared-cta"

export const metadata: Metadata = {
  title: "Recess | Emotional Infrastructure for Trauma-Exposed Workforces",
}

export default function HomePage() {
  return (
    <PageWrapper>
      <HeroSection />
      <ProblemSection />
      <CostBand />
      <ProofSection />
      <StepsSection />
      <ImageBreak />
      <SystemSection />
      <IndustrySection />
      <WhyNowSection />
      <SharedCTA />
    </PageWrapper>
  )
}

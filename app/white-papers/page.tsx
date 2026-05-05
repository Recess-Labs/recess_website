import type { Metadata } from "next"
import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { SharedCTA } from "@/components/shared-cta"
import { WhitePaperModal } from "@/components/white-paper-modal"

export const metadata: Metadata = {
  title: "White Papers | Vicarious Trauma & Compassion Fatigue Research | Recess",
  description:
    "Download research white papers on vicarious trauma, secondary trauma, compassion fatigue, and neuroscience-backed solutions for healthcare, education, and public safety workforces.",
  openGraph: {
    title: "White Papers | Vicarious Trauma & Compassion Fatigue Research | Recess",
    description:
      "Download research white papers on vicarious trauma, secondary trauma, and compassion fatigue solutions.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

const whitePapers = [
  {
    title:
      "Lost Productivity, Lost Profits: A Trauma-Informed Model for Combatting Care Workforce Disengagement & Its Costs",
    description:
      "This white paper explores the hidden financial toll of workforce disengagement in care-intensive industries. Drawing on secondary trauma research, economic modeling, and organizational psychology, it presents a data-driven case for trauma-informed workforce stabilization and outlines the Recess approach to reducing preventable turnover, leave, and operational disruption.",
    coverImage: "/images/white-papers/lost-productivity-cover.jpg",
    fileName: "/lost_productivity_white_paper.pdf",
    downloadName: "Recess-White-Paper-Lost-Productivity-Lost-Profits.pdf",
    tags: ["Workforce Economics", "Disengagement", "Turnover Costs"],
  },
  {
    title:
      "Recess White Paper: Combatting Burnout, Secondary Trauma, and Compassion Fatigue with Brain-Based Science",
    description:
      "This paper details the neuroscience foundations behind the Recess platform, including Adaptive Information Processing (AIP), polyvagal theory, HRV-based stress science, and the REPAIR\u2122 architecture. It demonstrates how structured bilateral stimulation and nervous system regulation can reduce secondary traumatic stress, compassion fatigue, and burnout in high-exposure professionals.",
    coverImage: "/images/white-papers/burnout-trauma-cover.jpg",
    fileName: "/burnout_secondary_trauma_solution.pdf",
    downloadName: "Recess-White-Paper-Combatting-Burnout-Secondary-Trauma.pdf",
    tags: ["Neuroscience", "REPAIR\u2122 Architecture", "Brain-Based Solutions"],
  },
]

export default function WhitePapersPage() {
  return (
    <PageWrapper>
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
                Resources
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                White Papers
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Research-backed evidence and frameworks for workforce stability in high-exposure environments. Fill in your details to download.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-12 max-w-5xl mx-auto">
            {whitePapers.map((wp, i) => (
              <FadeInSection key={i}>
                <div className="flex flex-col md:flex-row gap-8 items-start p-6 md:p-8 rounded-2xl border border-border bg-secondary/30">
                  {/* Cover Image */}
                  <div className="w-full md:w-64 shrink-0">
                    <div className="rounded-xl overflow-hidden border border-border/40 shadow-sm aspect-[3/4] relative">
                      <Image
                        src={wp.coverImage}
                        alt={wp.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground leading-snug text-balance">
                      {wp.title}
                    </h2>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {wp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-background rounded-full text-muted-foreground border border-border/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                      {wp.description}
                    </p>

                    <div className="mt-6">
                      <WhitePaperModal
                        title={wp.title}
                        fileName={wp.fileName}
                        downloadName={wp.downloadName}
                        buttonLabel="Download White Paper"
                      />
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

import type { Metadata } from "next"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { SharedCTA } from "@/components/shared-cta"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog | Vicarious Trauma, Compassion Fatigue & Workforce Stability Insights | Recess",
  description:
    "Expert insights on vicarious trauma, secondary trauma, compassion fatigue, and workforce stability. Science-backed strategies for trauma-exposed professionals.",
  openGraph: {
    title: "Blog | Vicarious Trauma, Compassion Fatigue & Workforce Stability Insights | Recess",
    description:
      "Expert insights on vicarious trauma, secondary trauma, compassion fatigue, and workforce stability.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function BlogPage() {
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
                The Recess Blog
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Science, strategy, and workforce stability in high-exposure environments.
              </p>
            </div>
          </FadeInSection>

          <BlogGrid />
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

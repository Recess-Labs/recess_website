import type { Metadata } from "next"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { SharedCTA } from "@/components/shared-cta"
import { ArrowRight, BookOpen, Radio, BarChart3, HelpCircle, PenLine } from "lucide-react"

export const metadata: Metadata = {
  title: "Resources",
  description: "Help center, articles, podcast, assessments, and founder insights from Recess.",
}

const resources = [
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Help Center",
    desc: "Guides, FAQs, and support documentation for Recess users and administrators.",
    href: "#",
    label: "Visit Help Center",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Frontline Team Emotional Health Index\u2122",
    desc: "Assess your team's current trauma exposure level and see where hidden risk may be building.",
    href: "https://pulse.withrecess.com",
    label: "See your risk",
    highlight: true,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Articles",
    desc: "Research-informed insights on trauma exposure, workforce stability, and emotional infrastructure.",
    href: "#",
    label: "Read Articles",
  },
  {
    icon: <Radio className="w-6 h-6" />,
    title: "Flow with Recess",
    desc: "A podcast exploring the intersection of neuroscience, trauma, and workforce resilience.",
    href: "#",
    label: "Listen Now",
  },
  {
    icon: <PenLine className="w-6 h-6" />,
    title: "In Good Company",
    desc: "Writing by our founder on the future of emotional infrastructure and institutional care.",
    href: "#",
    label: "Read the Series",
    highlight: true,
  },
]

export default function ResourcesPage() {
  return (
    <PageWrapper>
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F5F5FF" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-2xl mb-12">
              <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-4">Resources</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Learn, Assess, Connect
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Explore research, tools, and insights to deepen your understanding of trauma exposure and workforce stabilization.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {resources.map((r, i) => (
                <Link
                  key={i}
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  className={`group rounded-2xl border p-7 transition-all hover:shadow-md ${
                    r.highlight
                      ? "bg-foreground text-primary-foreground border-foreground"
                      : "bg-background border-border/40 hover:border-accent/30"
                  }`}
                >
                  <div className={`mb-4 ${r.highlight ? "text-primary-foreground/80" : "text-accent"}`}>
                    {r.icon}
                  </div>
                  <h3 className={`font-serif font-semibold text-lg mb-2 ${r.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {r.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${r.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {r.desc}
                  </p>
                  <span className={`inline-flex items-center text-sm font-medium ${r.highlight ? "text-primary-foreground" : "text-accent"}`}>
                    {r.label}
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
      <SharedCTA />
    </PageWrapper>
  )
}

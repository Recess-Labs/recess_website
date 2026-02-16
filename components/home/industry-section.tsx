import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { HealthcareIcon, EducationIcon, PublicSafetyIcon } from "@/components/illustrations"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    icon: HealthcareIcon,
    title: "Healthcare & Behavioral Health",
    subtitle: "Hospitals, behavioral health, senior living",
    bullets: [
      "Turnover and vacancy strain",
      "Increased error risk under emotional fatigue",
      "Compassion fatigue and detachment",
    ],
    href: "/industries/healthcare",
  },
  {
    icon: EducationIcon,
    title: "Education",
    subtitle: "K-12 districts, charter schools, residency programs",
    bullets: [
      "Teacher attrition driving classroom instability",
      "Emotional exhaustion from repeated student crises",
      "Substitute dependency and learning disruption",
    ],
    href: "/industries/education",
  },
  {
    icon: PublicSafetyIcon,
    title: "Public Safety",
    subtitle: "Police, fire, EMS, corrections",
    note: "Includes corrections + VA-adjacent",
    bullets: [
      "Decision fatigue under chronic trauma exposure",
      "Escalation risk under nervous system overload",
      "Retention pressure in high-stress roles",
    ],
    href: "/industries/public-safety",
  },
]

export function IndustrySection() {
  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Where are you carrying risk?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Different sectors experience it differently. The pattern is the same: exposure, overload, instability.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <Link href={ind.href} className="block bg-background rounded-2xl p-7 border border-border/50 h-full hover:shadow-lg transition-all group">
                <ind.icon />
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground group-hover:text-accent transition-colors">{ind.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{ind.subtitle}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {ind.bullets.map((b, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5" />
                      {b}
                    </li>
                  ))}
                </ul>
                {ind.note && (
                  <p className="mt-3 text-[10px] text-accent/70 italic">{ind.note}</p>
                )}
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-serif font-semibold text-foreground group-hover:text-accent transition-colors">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

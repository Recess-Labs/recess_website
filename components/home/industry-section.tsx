"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight } from "lucide-react"

const industries = [
  {
    title: "Healthcare & Behavioral Health",
    subtitle: "Hospitals, behavioral health, senior living",
    bullets: [
      "Turnover and vacancy strain",
      "Increased error risk under emotional fatigue",
      "Compassion fatigue and detachment",
    ],
    href: "/industries/healthcare",
    color: "#FFCCE5",
    icon: (
      <svg viewBox="0 0 72 72" fill="none" className="w-16 h-16">
        <rect width="72" height="72" rx="18" fill="#FFCCE5" />
        {/* Stethoscope icon */}
        <path d="M26 28c0-4 3-7 7-7h0c4 0 7 3 7 7v8c0 4-3 7-7 7h0" stroke="#29285D" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="33" cy="48" r="4" stroke="#29285D" strokeWidth="2" fill="#8D7AA0" opacity="0.25" />
        <circle cx="44" cy="36" r="3" fill="#29285D" />
        <circle cx="44" cy="36" r="1.5" fill="#FFCCE5" />
        <path d="M40 28v4c0 2.2 1.8 4 4 4h0c2.2 0 4-1.8 4-4v-4" stroke="#29285D" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Education",
    subtitle: "K-12 districts, charter schools, residency programs",
    bullets: [
      "Teacher attrition driving classroom instability",
      "Emotional exhaustion from repeated student crises",
      "Substitute dependency and learning disruption",
    ],
    href: "/industries/education",
    color: "#FFEDAC",
    icon: (
      <svg viewBox="0 0 72 72" fill="none" className="w-16 h-16">
        <rect width="72" height="72" rx="18" fill="#FFEDAC" />
        <path d="M18 34 L36 24 L54 34 L36 44Z" fill="#8D7AA0" opacity="0.25" stroke="#29285D" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 38v10c0 0 5 5 12 5s12-5 12-5V38" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <line x1="54" y1="34" x2="54" y2="48" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Public Safety",
    subtitle: "Police, fire, EMS",
    bullets: [
      "Decision fatigue under chronic trauma exposure",
      "Escalation risk under nervous system overload",
      "Retention pressure in high-stress roles",
    ],
    href: "/industries/public-safety",
    color: "#D4EDF9",
    icon: (
      <svg viewBox="0 0 72 72" fill="none" className="w-16 h-16">
        <rect width="72" height="72" rx="18" fill="#D4EDF9" />
        <path d="M36 18 L50 25V37C50 47 36 54 36 54C36 54 22 47 22 37V25L36 18Z" fill="#8D7AA0" opacity="0.25" stroke="#29285D" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M30 36L34 40L42 32" stroke="#29285D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
]

export function IndustrySection() {
  return (
    <section className="bg-[#F5F5FF] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              Where Are You Carrying Risk?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Different sectors experience it differently. The pattern is the same: exposure, overload, instability.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <Link href={ind.href} className="block bg-background rounded-2xl overflow-hidden border border-border/30 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="h-2" style={{ backgroundColor: ind.color }} />
                <div className="p-8">
                  {ind.icon}
                  <h3 className="mt-5 font-serif text-xl font-bold text-foreground group-hover:text-accent transition-colors">{ind.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1.5">{ind.subtitle}</p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {ind.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: ind.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-serif font-semibold text-foreground group-hover:text-accent group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

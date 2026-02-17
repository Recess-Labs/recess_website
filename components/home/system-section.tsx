"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const popColors = ["#FFF2E2", "#AAF5D4", "#D4EDF9"]

const systems = [
  {
    key: "foundation",
    title: "Recess Foundation\u2122",
    subtitle: "Trauma-Informed Workforce Standards & Training",
    desc: "Establish shared language, leadership alignment, and structured response pathways -- so trauma exposure is addressed consistently across teams, not informally.",
    checks: ["Aligns leadership around trauma exposure", "Reduces reactive management", "Creates consistent response to overload", "Strengthens duty-of-care compliance"],
    href: "/solutions/workforce-system",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="24" width="32" height="16" rx="4" stroke="#29285D" strokeWidth="2" fill="none" />
        <rect x="14" y="12" width="20" height="16" rx="4" stroke="#29285D" strokeWidth="2" fill="none" />
        <line x1="24" y1="28" x2="24" y2="36" stroke="#8D7AA0" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="20" r="3" fill="#8D7AA0" />
      </svg>
    ),
  },
  {
    key: "ally",
    title: "Recess Frontline Ally\u2122",
    subtitle: "Real-Time Trauma Stabilization for Professionals",
    desc: "Deliver short, neuroscience-informed protocols staff can use during or after difficult moments to regulate nervous system overload and reduce cumulative strain.",
    checks: ["Personalized relief in minutes", "Designed for use during or after shifts", "Reduces trauma disturbance and cumulative strain", "Low lift -- no therapy, no downtime required"],
    href: "/solutions/ally-app",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="#29285D" strokeWidth="2" fill="none" />
        <path d="M16 24 Q20 16 24 24 Q28 32 32 24" stroke="#8D7AA0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="#29285D" opacity="0.15" />
      </svg>
    ),
  },
  {
    key: "signal",
    title: "Recess Signal\u2122",
    subtitle: "AI-Powered Trauma Load & Turnover Risk Intelligence",
    desc: "Detect emerging strain patterns, forecast turnover vulnerability, and give leaders early visibility into workforce instability -- before it shows up in HR data.",
    checks: ["Identify risk trends early", "Forecast turnover vulnerability", "Receive trauma-informed recommendations", "Strengthen workforce stability proactively"],
    href: "/solutions/dashboard",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="6" stroke="#29285D" strokeWidth="2" fill="none" />
        <line x1="16" y1="32" x2="16" y2="22" stroke="#8D7AA0" strokeWidth="3" strokeLinecap="round" />
        <line x1="24" y1="32" x2="24" y2="16" stroke="#29285D" strokeWidth="3" strokeLinecap="round" />
        <line x1="32" y1="32" x2="32" y2="26" stroke="#8D7AA0" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function SystemSection() {
  const [activeTab, setActiveTab] = useState(0)
  const active = systems[activeTab]

  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-serif text-sm font-bold text-accent uppercase tracking-widest mb-4">The Recess System</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground tracking-tight leading-[1.1] text-balance">
              Three Layers of Emotional Infrastructure
            </h2>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Each layer addresses a distinct operational gap. Together, they form a complete stabilization system for trauma-exposed workforces.
            </p>
          </div>
        </FadeInSection>

        {/* Tab switcher */}
        <FadeInSection delay={100}>
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-[#F5F5FF] rounded-2xl p-1.5 border border-border/30 shadow-sm">
              {systems.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => setActiveTab(i)}
                  className={`relative flex items-center gap-2 px-5 md:px-7 py-3 rounded-xl text-sm md:text-base font-serif font-semibold transition-all duration-300 ${
                    activeTab === i
                      ? "bg-foreground text-background shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: activeTab === i ? popColors[i] : "transparent", border: activeTab !== i ? `2px solid ${popColors[i]}` : "none" }} />
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Active product detail - only show selected tab */}
        <FadeInSection delay={200}>
          <div key={activeTab} className="rounded-3xl overflow-hidden border border-border/30 shadow-lg">
            <div className="h-2" style={{ backgroundColor: popColors[activeTab] }} />
            <div className="bg-background p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Left: content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ backgroundColor: popColors[activeTab] }}>
                      {active.icon}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">{active.title}</h3>
                      <p className="text-sm md:text-base font-medium text-accent mt-0.5">{active.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                    {active.desc}
                  </p>
                  <Link href={active.href} className="inline-flex items-center gap-2 text-base font-serif font-semibold text-foreground hover:text-accent transition-all group">
                    Learn more about {active.title}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Right: checklist */}
                <div>
                  <p className="text-xs font-serif font-bold text-muted-foreground uppercase tracking-widest mb-5">What It Delivers</p>
                  <ul className="flex flex-col gap-4">
                    {active.checks.map((c, j) => (
                      <li key={j} className="flex items-start gap-3 bg-[#F5F5FF] rounded-xl p-5 border border-border/20 hover:shadow-sm transition-shadow">
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-base text-foreground leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={400} className="mt-14 flex flex-col items-center gap-5">
          <Button asChild size="lg" className="rounded-full font-serif font-semibold px-10 h-14 text-base bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-all shadow-md">
            <Link href="/solutions">
              Explore the Full System <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground font-serif">{"Recess Foundation\u2122 \u2022 Recess Frontline Ally\u2122 \u2022 Recess Signal\u2122"}</p>
        </FadeInSection>
      </div>
    </section>
  )
}

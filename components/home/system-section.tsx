"use client"

import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { Shield, Smartphone, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const popColors = ["#FFF2E2", "#AAF5D4", "#D4EDF9"]

const systems = [
  {
    icon: Shield,
    title: "Recess Foundation\u2122",
    subtitle: "Trauma-Informed Workforce Standards & Training",
    desc: "Establish shared language, leadership alignment, and structured response pathways \u2014 so trauma exposure is addressed consistently across teams, not informally.",
    checks: ["Aligns leadership around trauma exposure", "Reduces reactive management", "Creates consistent response to overload", "Strengthens duty-of-care compliance"],
    href: "/solutions/workforce-system",
  },
  {
    icon: Smartphone,
    title: "Recess Frontline Ally\u2122",
    subtitle: "Real-Time Trauma Stabilization for Professionals",
    desc: "Deliver short, neuroscience-informed protocols staff can use during or after difficult moments to regulate nervous system overload and reduce cumulative strain.",
    checks: ["Personalized relief in minutes", "Designed for use during or after shifts", "Reduces trauma disturbance and cumulative strain", "Low lift \u2014 no therapy, no downtime required"],
    href: "/solutions/ally-app",
  },
  {
    icon: BarChart3,
    title: "Recess Signal\u2122",
    subtitle: "AI-Powered Trauma Load & Turnover Risk Intelligence",
    desc: "Detect emerging strain patterns, forecast turnover vulnerability, and give leaders early visibility into workforce instability \u2014 before it shows up in HR data.",
    checks: ["Identify risk trends early", "Forecast turnover vulnerability", "Receive trauma-informed recommendations", "Strengthen workforce stability proactively"],
    href: "/solutions/dashboard",
  },
]

function SystemCard({ s, i, isActive, onHover }: { s: typeof systems[0]; i: number; isActive: boolean; onHover: () => void }) {
  return (
    <div
      onMouseEnter={onHover}
      className={`bg-background rounded-2xl p-7 border h-full flex flex-col transition-all duration-300 cursor-pointer group ${
        isActive ? "shadow-lg -translate-y-1 border-accent/30" : "border-border/30 hover:shadow-md"
      }`}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110" style={{ backgroundColor: popColors[i] }}>
        <s.icon className="w-6 h-6 text-foreground" />
      </div>
      <h3 className="font-serif text-lg font-bold text-foreground">{s.title}</h3>
      <p className="text-xs font-medium mb-2" style={{ color: "#8D7AA0" }}>{s.subtitle}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
      <ul className="flex flex-col gap-2 mb-6">
        {s.checks.map((c, j) => (
          <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" /> {c}
          </li>
        ))}
      </ul>
      <Link href={s.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-serif font-semibold text-foreground hover:text-accent transition-colors group-hover:gap-2.5">
        Learn More <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}

export function SystemSection() {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <section className="bg-[#F5F5FF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-serif text-xs font-bold text-accent uppercase tracking-widest mb-3">How Recess Works</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Stabilize Trauma Exposure in Three Layers
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Recess provides emotional infrastructure designed specifically for trauma-exposed workforces.
            </p>
          </div>
        </FadeInSection>

        {/* Layer indicator */}
        <FadeInSection delay={100} className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 bg-background rounded-full p-1 border border-border/30">
            {systems.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveCard(i)}
                className={`px-4 py-2 rounded-full text-xs font-serif font-semibold transition-all ${
                  activeCard === i ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.title.replace("\u2122", "")}
              </button>
            ))}
          </div>
        </FadeInSection>

        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          {systems.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <SystemCard s={s} i={i} isActive={activeCard === i} onHover={() => setActiveCard(i)} />
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400} className="mt-10 flex flex-col items-center gap-4">
          <Button asChild className="rounded-full font-serif font-semibold px-8 bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.02] transition-all">
            <Link href="/solutions">
              Explore the Full System <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground">{"Foundation \u2022 Frontline Ally \u2022 Signal"}</p>
        </FadeInSection>
      </div>
    </section>
  )
}

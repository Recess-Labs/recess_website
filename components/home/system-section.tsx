import Link from "next/link"
import { FadeInSection } from "@/components/fade-in-section"
import { Shield, Smartphone, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react"

const systems = [
  {
    icon: Shield,
    title: "Trauma-Informed Workforce System",
    desc: "Establish shared language, leader training, and practical response protocols so trauma exposure is addressed consistently.",
    checks: ["Aligns leadership around trauma exposure", "Reduces reactive management", "Creates consistent response to overload", "Strengthens duty-of-care compliance"],
    href: "/solutions/workforce-system",
  },
  {
    icon: Smartphone,
    title: "Recess Frontline Ally App",
    desc: "Short, neuroscience-based stabilization protocols designed for secondary trauma, moral injury, and acute overload.",
    checks: ["Personalized relief in minutes", "Designed for use during or after shifts", "Reduces trauma disturbance and cumulative strain", "Low lift — no therapy, no downtime required"],
    href: "/solutions/ally-app",
  },
  {
    icon: BarChart3,
    title: "Emotional Operating Dashboard",
    desc: "Early visibility into trauma load, rising emotional risk, and emerging instability patterns for leadership.",
    checks: ["Identify risk trends early", "Forecast turnover vulnerability", "Receive trauma-informed recommendations", "Strengthen workforce stability proactively"],
    href: "/solutions/dashboard",
  },
]

export function SystemSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto">
            <p className="font-serif text-xs font-bold text-accent uppercase tracking-widest mb-3">How Recess Works</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              Explore the Recess System
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Deploy one layer to strengthen a specific gap or integrate all three for full workforce stabilization.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {systems.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-secondary rounded-2xl p-7 border border-border/50 h-full flex flex-col hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {s.checks.map((c, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" /> {c}
                    </li>
                  ))}
                </ul>
                <Link href={s.href} className="mt-auto inline-flex items-center gap-1.5 text-sm font-serif font-semibold text-foreground hover:text-accent transition-colors group-hover:gap-2">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400} className="mt-8 text-center">
          <Link href="/solutions/implementation" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-serif font-medium transition-colors">
            Explore the full system and implementation options <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </FadeInSection>
      </div>
    </section>
  )
}

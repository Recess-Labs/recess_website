import { FadeInSection } from "@/components/fade-in-section"
import { Clock, Brain, Zap, UserMinus } from "lucide-react"

const popColors = ["#FFF2E2", "#AAF5D4", "#FFCCE5", "#FFEDAC"]

const problems = [
  { icon: Clock, title: "Extended leave and call-out spikes", desc: "When activation becomes chronic, absence patterns emerge." },
  { icon: Brain, title: "Decision fatigue and preventable errors", desc: "Cognitive load under emotional strain increases risk." },
  { icon: Zap, title: "Escalations under pressure", desc: "Nervous system overload drives reactive responses." },
  { icon: UserMinus, title: "Turnover in hard-to-replace roles", desc: "Accumulated strain becomes the final push to exit." },
]

export function ProblemSection() {
  return (
    <section className="bg-[#F5F5FF] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
              The Hidden Operational Risk
            </h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              When frontline staff are repeatedly exposed to crisis, grief, and distress, the nervous system stays activated. Over time, that strain shows up at work.
            </p>
          </div>
        </FadeInSection>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-background rounded-2xl p-6 border border-border/30 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ backgroundColor: popColors[i] }}>
                  <p.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}

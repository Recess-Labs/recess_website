import { FadeInSection } from "@/components/fade-in-section"
import { WhyNowIcon } from "@/components/illustrations"
import { ArrowRight } from "lucide-react"

const popColors = ["#FFF2E2", "#AAF5D4", "#FFCCE5", "#D4EDF9"]

const items = [
  { type: "shortage" as const, title: "Workforce shortages are tightening", desc: "Fewer staff to absorb the same exposure load." },
  { type: "duty" as const, title: "Duty-of-care expectations are expanding", desc: "Institutional responsibility for employee wellbeing is increasing." },
  { type: "scrutiny" as const, title: "Scrutiny after incidents is increasing", desc: "Legal and public pressure demands proactive prevention." },
  { type: "labor" as const, title: "Managers are absorbing more emotional labor than ever", desc: "Middle leadership is becoming the emotional buffer." },
]

export function WhyNowSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground tracking-tight text-balance">
              The Cost of Waiting Is Rising
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If exposure is structural, stabilization has to be structural too.
            </p>
          </div>
        </FadeInSection>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div className="bg-[#F5F5FF] rounded-2xl p-6 border border-border/30 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: popColors[i] }}>
                  <WhyNowIcon type={item.type} />
                </div>
                <h3 className="font-serif text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={500} className="mt-10 text-center">
          <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent/80 font-serif font-medium transition-colors">
            Understand Your Exposure <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

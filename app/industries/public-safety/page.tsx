import type { Metadata } from "next"
import { IndustryDetail } from "@/components/industry-detail"
import { PublicSafetyIcon } from "@/components/illustrations"
import { FadeInSection } from "@/components/fade-in-section"

export const metadata: Metadata = {
  title: "First Responder Trauma & PTSD Prevention | Police, Fire, EMS | Recess",
  description:
    "Prevent PTSD, vicarious trauma, and burnout in first responders. Trauma-informed training and stabilization for police, fire, EMS, corrections, and public safety professionals.",
  openGraph: {
    title: "First Responder Trauma & PTSD Prevention | Police, Fire, EMS | Recess",
    description:
      "Prevent PTSD, vicarious trauma, and burnout in first responders with trauma-informed training and stabilization.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

function CorrectionsNote() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <FadeInSection>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Corrections</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Corrections environments concentrate trauma exposure: violence, threat, moral injury, and chronic hypervigilance.
              </p>
              <ul className="space-y-2">
                {["Higher burnout velocity", "Higher leave utilization", "Higher incident probability under staffing strain"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-accent">Stability is safety.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">Military & Veteran</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                For many military and veteran populations, seeking mental health support can carry perceived career risk. Recess offers a different pathway:
              </p>
              <ul className="space-y-2">
                {["Self-paced", "Confidential-feeling", "Non-disruptive", "Built for real-time stabilization without \"stepping out\" of role identity"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-muted-foreground text-sm">
                This matters in cultures where people avoid care until they are already in crisis.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

export default function PublicSafetyPage() {
  return (
    <IndustryDetail
      icon={<PublicSafetyIcon />}
      title="Public Safety"
      tagline="In public safety, emotional overload becomes legal exposure."
      intro="Police, fire, EMS, dispatch, and corrections operate in environments where trauma exposure is routine, and where a single moment of overload can escalate into incident, scrutiny, and consequence. In these roles, the biggest workforce stability driver is often extended leave: injury leave, stress leave, disability claims, and long recovery periods that tear holes in staffing and readiness."
      heroImage="/images/industries/public-safety.jpg"
      heroImageAlt="First responders at a station in a quiet moment between calls, showing the human side of public safety work"
      seenTitle="What leaders are seeing"
      seenItems={[
        "Extended absences that break coverage and increase overtime burden",
        "Decision fatigue that increases incident risk under pressure",
        "Escalations and reactive responses when nervous systems are overloaded",
        "Rising legal scrutiny, public pressure, and reputational risk after incidents",
        "High turnover in specialized roles that are hard to replace and train",
      ]}
      costLine="Many agencies absorb >$2M per site annually in preventable instability costs when absences, turnover, overtime, and disruption compound."
      whyTitle="Why traditional approaches fall short"
      whyDesc="Training and peer programs matter, but without a mechanism to:"
      whyItems={[
        "Detect rising overload early",
        "Provide real-time stabilization after exposure",
        "Give leadership visibility before leave spikes and incidents occur",
      ]}
      howTitle="How Recess stabilizes public safety systems"
      howSteps={[
        { label: "Detect", desc: "Baseline team strain and exposure risk early." },
        { label: "Relieve", desc: "Quick protocols for nervous system stabilization after calls/incidents." },
        { label: "Predict & Prevent", desc: "Leadership visibility + actionable recommendations before instability spreads." },
      ]}
      outcomes={[
        "Reduced turnover pressure and fewer instability cascades",
        "Fewer crisis-driven leave patterns over time",
        "Stronger decision quality under pressure",
        "Lower incident risk through earlier intervention and stabilization",
      ]}
      extra={<CorrectionsNote />}
    />
  )
}

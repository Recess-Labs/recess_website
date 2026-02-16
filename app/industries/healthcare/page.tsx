import type { Metadata } from "next"
import { IndustryDetail } from "@/components/industry-detail"
import { HealthcareIcon } from "@/components/illustrations"

export const metadata: Metadata = {
  title: "Healthcare & Behavioral Health",
  description: "Stabilize trauma-exposed care workforces before instability impacts care delivery.",
}

export default function HealthcarePage() {
  return (
    <IndustryDetail
      icon={<HealthcareIcon />}
      title="Healthcare & Behavioral Health"
      tagline="When trauma exposure is part of care delivery, workforce stability becomes a clinical risk."
      intro="In healthcare and behavioral health, crisis is not occasional — it's structural. Staff carry grief, violence, high acuity needs, moral injury, and constant emotional intensity. Over time, trauma exposure accumulates in the body and brain. The result isn't just burnout — it's operational instability that impacts care."
      seenTitle="What leaders are seeing"
      seenItems={[
        "Rising turnover and vacancy strain in hard-to-replace roles",
        "Increased error risk under fatigue and decision overload",
        "Leave spikes and extended absences that break staffing models",
        "Compassion fatigue and emotional detachment that degrade care experience",
      ]}
      costLine="Many sites absorb >$1M annually in preventable instability costs when turnover, absences, and disruption compound."
      whyTitle="Why traditional supports aren't enough"
      whyDesc="Training, EAP, and wellness programs can help — but they don't create a mechanism to:"
      whyItems={[
        "Detect trauma load early",
        "Reduce nervous system overload during real shifts",
        "Give leadership visibility before instability spreads",
      ]}
      howTitle="How Recess changes the equation"
      howSteps={[
        { label: "Detect", desc: "Establish a baseline view of team strain and exposure across units." },
        { label: "Relieve", desc: "Provide self-paced protocols staff can use after difficult moments." },
        { label: "Predict & Prevent", desc: "Give leadership early visibility and clear, trauma-informed actions." },
      ]}
      outcomes={[
        "Up to 30% reduction in turnover",
        "Fewer crisis-driven absences and leave spikes",
        "Improved decision quality under pressure",
        "More consistent care outcomes and team stability",
      ]}
    />
  )
}

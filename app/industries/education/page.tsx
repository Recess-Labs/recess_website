import type { Metadata } from "next"
import { IndustryDetail } from "@/components/industry-detail"
import { EducationIcon } from "@/components/illustrations"

export const metadata: Metadata = {
  title: "Education",
  description: "The stability of a school depends on the stability of the adults inside it.",
}

export default function EducationPage() {
  return (
    <IndustryDetail
      icon={<EducationIcon />}
      title="Education"
      tagline="The stability of a school depends on the stability of the adults inside it."
      intro="Schools are being asked to do more than teach. Educators are managing escalating student needs, chronic behavioral incidents, community crisis spillover, and the emotional weight of supporting children through instability. When exposure becomes constant, educator strain becomes predictable."
      seenTitle="What leaders are seeing"
      seenItems={[
        "Teacher attrition driving classroom instability",
        "Substitute dependency, disrupted learning, and uneven student support",
        "Increased behavioral escalations as staff capacity shrinks",
        "Rising sick leave and extended absences that destabilize scheduling",
      ]}
      costLine="Every exit creates replacement cost, training burden, and performance disruption — often repeating year after year."
      whyTitle="Why 'wellness' isn't enough"
      whyDesc="Educator wellbeing initiatives are common. But most systems still lack a way to:"
      whyItems={[
        "Measure emotional overload early",
        "Reduce nervous system activation after difficult incidents",
        "Support staff in real time without adding more work",
      ]}
      howTitle="How Recess supports school stability"
      howSteps={[
        { label: "Detect", desc: "Establish baseline risk and team strain patterns across buildings." },
        { label: "Relieve", desc: "Quick, self-paced protocols staff can use after hard moments." },
        { label: "Predict & Prevent", desc: "Visibility and actions that help leaders intervene early." },
      ]}
      outcomes={[
        "Increased retention stability (reduced trauma-driven exits)",
        "Fewer 'crisis leave' patterns and burnout cycles",
        "Stronger decision-making and emotional regulation under pressure",
        "More consistent classroom continuity and student-facing outcomes",
      ]}
    />
  )
}

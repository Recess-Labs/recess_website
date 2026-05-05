import type { Metadata } from "next"
import { IndustryDetail } from "@/components/industry-detail"
import { EducationIcon } from "@/components/illustrations"

export const metadata: Metadata = {
  title: "Teacher Burnout & Secondary Trauma Solutions for Schools | Recess",
  description:
    "Address teacher burnout, secondary trauma, and compassion fatigue in schools. Trauma-informed training and stabilization tools for educators, counselors, and school staff.",
  openGraph: {
    title: "Teacher Burnout & Secondary Trauma Solutions for Schools | Recess",
    description:
      "Address teacher burnout, secondary trauma, and compassion fatigue with trauma-informed training for educators.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function EducationPage() {
  return (
    <IndustryDetail
      icon={<EducationIcon />}
      title="Education"
      tagline="The stability of a school depends on the stability of the adults inside it."
      intro="Schools are being asked to do more than teach. Educators are managing escalating student needs, chronic behavioral incidents, community crisis spillover, and the emotional weight of supporting children through instability. When exposure becomes constant, educator strain becomes predictable."
      heroImage="/images/industries/education.jpg"
      heroImageAlt="Teachers in a school setting showing resilience and dedication in their daily work with students"
      seenTitle="What leaders are seeing"
      seenItems={[
        "Teacher attrition driving classroom instability",
        "Substitute dependency, disrupted learning, and uneven student support",
        "Increased behavioral escalations as staff capacity shrinks",
        "Rising sick leave and extended absences that destabilize scheduling",
      ]}
      costLine="Every exit creates replacement cost, training burden, and performance disruption, often repeating year after year."
      whyTitle="Why wellness is not enough"
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

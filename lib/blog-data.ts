export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  coverImage: string
  author: {
    name: string
    image: string
    role: string
  }
  publishedAt: string
  content: string[]
}

export const BLOG_CATEGORIES = [
  "Trauma Exposure Science",
  "Workforce Stability & Retention",
  "Healthcare & Behavioral Health",
  "Education",
  "Public Safety",
  "AI & Infrastructure",
] as const

export type BlogCategory = (typeof BLOG_CATEGORIES)[number]

export const blogPosts: BlogPost[] = [
  {
    slug: "why-burnout-isnt-the-real-driver-of-turnover",
    title: "Why Burnout Isn't the Real Driver of Turnover in Healthcare, Education, and Public Safety",
    excerpt: "The hidden operational risk most leaders are misdiagnosing. Across healthcare systems, school districts, and public safety agencies, turnover is often blamed on burnout. But the evidence suggests something deeper is at play.",
    category: "Workforce Stability & Retention",
    coverImage: "/images/blog/burnout-turnover-cover.jpg",
    author: {
      name: "Kelz Bethel",
      image: "/images/team/kelz-bethel.png",
      role: "Co-Founder, Recess",
    },
    publishedAt: "2026-02-15",
    content: [
      "## The hidden operational risk most leaders are misdiagnosing",
      "Across healthcare systems, school districts, and public safety agencies, turnover is often blamed on burnout.",
      "Leaders invest in wellness programs, resilience workshops, and employee assistance programs hoping to reduce attrition. Yet extended leave continues to rise. Vacancy rates remain high. Decision fatigue increases. Replacement costs compound.",
      "The question isn't whether burnout exists.",
      "The question is whether burnout is the real driver of instability.",
      "Increasingly, the evidence suggests it is not.",
      "---",
      "## Burnout Is a Symptom. Trauma Exposure Is the Structural Condition.",
      "Burnout is typically defined as emotional exhaustion, depersonalization, and reduced personal accomplishment.",
      "But in high-exposure professions, another force is at play: repeated exposure to crisis, grief, violence, and distress.",
      "Nurses witnessing acute suffering. Teachers navigating escalating student crises. Officers responding to high-threat environments. Behavioral health providers absorbing trauma narratives daily.",
      "Over time, this exposure accumulates biologically.",
      "The nervous system adapts to repeated threat signals. Stress recovery slows. Emotional reactivity increases. Decision-making under pressure degrades.",
      "This is not simply fatigue.",
      "**It is trauma load.**",
      "---",
      "## What Trauma Exposure Does to the Nervous System",
      "Research in secondary traumatic stress, compassion fatigue, and moral injury demonstrates that repeated exposure to distressing material impacts:",
      "- Emotional regulation\n- Cognitive flexibility\n- Stress recovery speed\n- Behavioral response under pressure",
      "When activation becomes chronic, stability becomes fragile.",
      "This is why turnover in healthcare, education, and public safety consistently outpaces many other sectors.",
      "It is not just dissatisfaction. It is accumulated strain.",
      "---",
      "## The Operational Cost of Misdiagnosing the Problem",
      "When institutions treat trauma exposure as generic burnout, the interventions often miss the mark.",
      "Wellness programming increases awareness. EAPs provide episodic support. Leadership messaging encourages resilience.",
      "But none of these approaches directly address nervous system overload during or after repeated exposure.",
      "The results show up in predictable patterns:",
      "- Extended leave and FMLA spikes\n- Increased call-outs\n- Decision fatigue leading to errors\n- Escalations under pressure\n- Turnover in hard-to-replace roles",
      "Replacing one experienced nurse can cost $40,000\u2013$60,000. Replacing one experienced officer can exceed $100,000. Many sites absorb $1M\u2013$2M+ annually in preventable instability.",
      "Most of that instability begins long before resignation.",
      "---",
      "## Why Traditional Retention Strategies Fall Short",
      "Most retention strategies focus on:",
      "- Compensation\n- Scheduling flexibility\n- Culture initiatives\n- Professional development",
      "These matter.",
      "But they do not reduce trauma load.",
      "If the nervous system remains chronically activated, stability remains vulnerable.",
      "**Retention improves when recovery becomes structured, not optional.**",
      "---",
      "## From Burnout Prevention to Trauma Load Stabilization",
      "If trauma exposure is structural in high-impact professions, stabilization must be structural too.",
      "That requires three shifts:",
      "**1. Early Detection**\nInstitutions need visibility into rising strain before it appears in HR metrics.",
      "**2. Real-Time Stabilization**\nProfessionals need structured tools to regulate nervous system activation during or after difficult moments.",
      "**3. Predictive Risk Insight**\nLeadership needs early signals of emerging instability, including turnover vulnerability and extended leave risk.",
      "This is not wellness.",
      "**It is workforce infrastructure.**",
      "---",
      "## A New Way to Think About Workforce Stability",
      "When crisis is part of the job, instability is predictable.",
      "But predictable does not mean inevitable.",
      "Organizations that treat trauma exposure as a measurable operational risk, rather than an individual resilience problem, begin to see different outcomes:",
      "- Reduced turnover velocity\n- Fewer crisis-driven leaves\n- Improved decision quality under pressure\n- Greater continuity in care, instruction, and service",
      "The future of workforce stability in high-exposure environments will not be driven by more programming.",
      "It will be driven by systems that understand the biology of exposure.",
      "---",
      "## Final Thought",
      "Burnout is visible.",
      "Trauma exposure is often not.",
      "But trauma load is what quietly drives instability beneath the surface.",
      "**Leaders who recognize this shift, from burnout management to trauma load stabilization, will be better positioned to protect both their people and their performance.**",
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (!category || category === "All") return blogPosts
  return blogPosts.filter((post) => post.category === category)
}

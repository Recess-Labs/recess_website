import type { RegionId } from "@/lib/regions"

export const LOW_COMMIT_URL = "https://pulse.withrecess.com"
export const BOOK_HREF = "/get-started"
export const BOOK_LABEL = "Book a free strategy call"
export const BOOK_MICROCOPY =
  "30 minutes with a founder. You'll leave knowing where strain is building in your team and what to do about it, whether or not you work with us."

export type Stat = { value: string; label: string; source: string }
export type SectorCard = { name: string; headline: string; asking: string; cost: string; href: string; linkLabel: string; tone: "peach" | "sky" | "mint" | "butter" }
export type ChainStep = { label: string; text: string }

export type HomeContent = {
  metaTitle: string
  metaDescription: string
  hero: {
    headline: string
    highlight: string
    body: string
    secondary: { label: string; href: string; external: boolean }
    microcopy: string
    sectors: string[]
  }
  story: { caption: string; voice: string }[]
  storyNote: string
  pattern: {
    events: [string, string, string, string]
    threshold: string
    summary: string
    withoutLabel: string
    withLabel: string
  }
  recognition: {
    eyebrow: string
    title: string
    bullets: string[]
    workerLine: string
    stats: Stat[]
  }
  sectors?: { title: string; intro: string; cards: SectorCard[] }
  differentiation: {
    assistLabel: string
    recessLeaders: string
    note?: string
  }
  differentiators: string
  steps: { title: string; subtitle: string; desc: string }[]
  stepsTitle: string
  system: {
    intro: string
    layers: { title: string; subtitle: string; desc: string; checks: string[]; href: string }[]
  }
  result: {
    headline: string
    track: string
    forStaff: string
    forLeaders: string
    privacy: string
  }
  plan: { title: string; text: string }[]
  planTitle: string
  argument?: { eyebrow: string; title: string; body: string; chain?: ChainStep[]; disclaimer?: string }
  calculator: {
    teamWord: string
    defaultTeam: number
    defaultTurnover: number
    turnoverNote: string
    defaultCost: number | null
    costNote: string
    absenceWord: string
  }
  whyNow: { title: string; items: { title: string; text: string }[]; closing: string }
  finalCta: { title: string; body: string }
}

const sharedPlan = (spelling: "us" | "uk") => [
  {
    title: BOOK_LABEL,
    text:
      spelling === "us"
        ? "30 minutes with a founder. We'll look at where exposure sits in your workforce and what to do first."
        : "30 minutes with a founder. We'll look at where the pressure sits in your teams and what to do first.",
  },
  {
    title: "Map the load",
    text: "Staff take a 3-minute check-in, and you see where strain is building, by team and by site.",
  },
  {
    title: "Put it down, every shift",
    text: "Staff start ten-minute sessions during the shift, and you see team trends within weeks.",
  },
]

const layers = (r: RegionId) => {
  const uk = r !== "us"
  const eu = r === "eu"
  return [
    {
      title: "Recess Foundation\u2122",
      subtitle: "Trauma-informed standards and manager training",
      desc: uk
        ? "Shared language for managers and a clear plan for what happens after an incident, a death or an assault, so support doesn't depend on who's on shift."
        : "Shared language for managers and a clear playbook for what happens after critical incidents, so support doesn't depend on who's on shift.",
      checks: [
        "Aligns leaders around trauma exposure",
        "A documented process after every hard incident",
        uk ? "Consistent response across homes, wards and sites" : "Consistent response across units, schools and shifts",
        uk ? "Evidence for your duty of care" : "Documented support you can point to after an incident",
      ],
      href: "/solutions/workforce-system",
    },
    {
      title: "Frontline Ally\u2122",
      subtitle: "Ten-minute sessions, during the shift",
      desc: "Guided eye movements, tones and taps that bring the body down after hard moments. No talking it through, no time off the floor, used privately on their own phone.",
      checks: [
        "Ten minutes, in the break room or the car",
        "Works on the body, not by talking it through",
        "Built for repeated trauma exposure",
        "Private by design. Nothing goes into a personnel file",
      ],
      href: "/solutions/ally-app",
    },
    {
      title: "Recess Signal\u2122",
      subtitle: eu ? "Anonymised team trends" : uk ? "Early warning by team and site" : "Early warning by unit, school or shift",
      desc: eu
        ? "Anonymised trends by team, based on what staff choose to share, so leaders can act on psychosocial risk early. Nothing feeds performance management."
        : uk
          ? "Team and site-level trends, so you can see strain building before it turns into sickness absence, agency cover or a resignation."
          : "Unit and team-level trends, so leaders see strain building before it turns into turnover, extended leave or an incident.",
      checks: eu
        ? ["Anonymised by team, never individual", "Staff choose what they share", "Supports your psychosocial risk assessment", "Never used for performance management"]
        : uk
          ? ["See strain by team and by site", "Act before the sick note", "Fewer surprises on the rota", "Show inspectors how you support staff"]
          : ["See strain by unit and shift", "Act before the resignation", "Steadier staffing", "Trends leaders can act on this week"],
      href: "/solutions/dashboard",
    },
  ]
}

const content: Record<RegionId, HomeContent> = {
  us: {
    metaTitle: "Recess | Emotional infrastructure for trauma-exposed workforces",
    metaDescription:
      "Frontline staff absorb other people's worst days, and it builds up until they quit. Recess gives them a ten-minute way to put it down during the shift, and gives leaders early warning before turnover.",
    hero: {
      headline: "Your people absorb everyone else's crisis.",
      highlight: "Then they quit.",
      body: "Recess is emotional infrastructure for trauma-exposed workforces. Staff get a ten-minute way to come down during the shift. Leaders get early warning before it turns into turnover, extended leave or an incident.",
      secondary: { label: "Check your team's exposure", href: LOW_COMMIT_URL, external: true },
      microcopy: "30 minutes with a founder. You'll leave knowing where strain is building in your team.",
      sectors: ["Behavioral health & residential treatment", "Hospitals", "K-12", "Police, fire & EMS", "Corrections"],
    },
    story: [
      { caption: "Every shift, they carry someone else's worst day.", voice: "A behavioral health unit, 2am" },
      { caption: "They hold it together. It's the job.", voice: "The break room, between calls" },
      { caption: "Then they get home. And they can't switch off.", voice: "Home, 1:40am" },
      { caption: "Recess: 10 minutes to put it down, during the shift.", voice: "The car, on a break" },
    ],
    storyNote: "What your staff carry home, and what Recess does about it.",
    pattern: {
      events: ["A patient death", "An assault", "A student in crisis", "A lockdown"],
      threshold: "Turnover, extended leave, errors",
      summary: "Recess intervenes between overload and instability, stabilizing staff before strain becomes turnover.",
      withoutLabel: "Without Recess",
      withLabel: "With Recess",
    },
    recognition: {
      eyebrow: "Recognition",
      title: "You've seen it before it shows up in HR data",
      bullets: [
        "The nurse who used to be steady starts snapping at families",
        "Call-outs spike the week after a patient death, an assault or a school lockdown",
        "Your best officers move to desk jobs, or out of the profession",
        "Exit interviews say \u201cburnout\u201d, but nobody saw it coming",
      ],
      workerLine: "They hold it together on shift. Then they get home and can't come down.",
      stats: [
        { value: "$60,090", label: "average cost of losing one bedside nurse", source: "NSI 2026 National Health Care Retention & RN Staffing Report" },
        { value: "22.5%", label: "annual turnover for behavioral health nurses, the highest of any specialty", source: "NSI 2026" },
        { value: "17.6%", label: "RN turnover in 2025, and rising", source: "NSI 2026" },
      ],
    },
    sectors: {
      title: "Where the risk sits",
      intro: "The load looks different in every setting. The cost of waiting doesn't.",
      cards: [
        {
          name: "Behavioral health",
          headline: "Your nurses leave faster than anyone else in healthcare. Each one costs you about $60,000.",
          asking: "Joint Commission workplace violence standards and state workplace violence laws",
          cost: "Losing one bedside RN costs an average of $60,090",
          href: "/industries/healthcare",
          linkLabel: "See behavioral health",
          tone: "peach",
        },
        {
          name: "Hospitals",
          headline: "Nurse turnover is rising again. Each percentage point costs the average hospital $295,000 a year.",
          asking: "The Joint Commission, and state laws such as California SB 553",
          cost: "The average hospital loses $4.2M to $6.2M a year to RN turnover",
          href: "/industries/healthcare",
          linkLabel: "See hospitals",
          tone: "sky",
        },
        {
          name: "K-12",
          headline: "Mid-year exits mean substitutes, and students lose the adult they trusted.",
          asking: "Your district's duty of care, and state requirements",
          cost: "Continuity in the classroom, and student outcomes",
          href: "/industries/education",
          linkLabel: "See education",
          tone: "mint",
        },
        {
          name: "Public safety",
          headline: "Every officer out is overtime for the rest. That's where the next absence starts.",
          asking: "Agency wellness programs and post-incident scrutiny",
          cost: "Overtime and mandatory shifts that push the next person out",
          href: "/industries/public-safety",
          linkLabel: "See public safety",
          tone: "butter",
        },
      ],
    },
    differentiation: {
      assistLabel: "EAP",
      recessLeaders: "Team trends, early enough to act before absence",
    },
    differentiators:
      "Built for the shift, not the therapy room. It reads where someone is right now, not where they were at onboarding. It works on the body with guided eye movements, tones and taps, not by talking it through. And it takes ten minutes, so it fits between calls, classes and shifts.",
    stepsTitle: "Stabilize trauma exposure in three steps",
    steps: [
      { title: "Detect risk early", subtitle: "Make the invisible visible.", desc: "Establish a baseline of team strain and surface early signals before instability shows up in turnover or leave." },
      { title: "Relieve overload in real time", subtitle: "Stabilize after hard moments.", desc: "Short, body-based protocols designed for use during or after difficult interactions, built for real shifts." },
      { title: "Predict and prevent instability", subtitle: "Lead before crisis spreads.", desc: "Team trends and clear leader actions. Leaders act before the exit, not after it." },
    ],
    system: { intro: "Each layer closes a distinct operational gap. Together, they form a complete stabilization system for trauma-exposed workforces.", layers: layers("us") },
    result: {
      headline: "A low-lift system for detecting and reducing trauma-driven instability at scale.",
      track: "What leaders can expect to track: turnover, extended leave and incident trends, measured against your own baseline.",
      forStaff: "Something that works in the time they actually have. Ten minutes, privately, on their own phone.",
      forLeaders: "Early warning, steadier staffing, and documented support you can point to after an incident.",
      privacy: "Leaders see team trends. They never see an individual's sessions. Nothing in the app reaches a personnel file, a clearance review or a promotion board.",
    },
    planTitle: "You made your organization trauma-informed for the people you serve. Now do it for your staff.",
    plan: sharedPlan("us"),
    calculator: {
      teamWord: "frontline staff",
      defaultTeam: 250,
      defaultTurnover: 17.6,
      turnoverNote: "Default: 2025 RN turnover, NSI 2026",
      defaultCost: 60090,
      costNote: "Default: average cost of one bedside RN, NSI 2026",
      absenceWord: "resignation",
    },
    whyNow: {
      title: "Why now",
      items: [
        { title: "It's now required", text: "Workplace violence prevention is required in many settings: the Joint Commission's hospital standards since 2022, and state laws like California's SB 553." },
        { title: "Hiring won't close the gap", text: "Staffing shortages in nursing, teaching and policing aren't closing with new hires. Keeping the people you have is the only lever left." },
        { title: "After an incident, everyone asks", text: "What support was in place? Have the answer ready before someone asks for it." },
        { title: "Budgets are being set now", text: "Next year's budgets are being planned now. Districts plan in spring for July. Get it in before the cycle closes." },
      ],
      closing: "Every shift the load builds, you get closer to the next resignation.",
    },
    finalCta: {
      title: "The next resignation is already building.",
      body: "It started with the last hard shift nobody had time to talk about. In 30 minutes we'll show you where it's building in your team, and what to do first.",
    },
  },

  uk: {
    metaTitle: "Recess UK | Emotional infrastructure for care homes, the NHS and blue light services",
    metaDescription:
      "Your staff carry everyone else's worst days. Then they leave. Recess gives care, NHS, school and blue light staff a ten-minute way to put the load down during the shift, and early warning before sickness absence.",
    hero: {
      headline: "Your staff carry everyone else's worst days.",
      highlight: "Then they leave.",
      body: "Recess is emotional infrastructure for care homes, children's homes, the NHS and emergency services. Staff get a ten-minute way to put the load down during the shift. You get early warning before it turns into sickness absence, agency cover or a resignation.",
      secondary: { label: "Check your team's exposure", href: LOW_COMMIT_URL, external: true },
      microcopy: "30 minutes with a founder. You'll leave knowing where strain is building in your team.",
      sectors: ["Residential & care homes", "Children's homes", "NHS & mental health", "Schools", "Blue light services"],
    },
    story: [
      { caption: "Every shift, they carry someone else's worst day.", voice: "A care home corridor, nights" },
      { caption: "They hold it together. It's the job.", voice: "The staff room, between rounds" },
      { caption: "Then they get home. And they can't switch off.", voice: "Home, 1:40am" },
      { caption: "Recess: 10 minutes to put it down, during the shift.", voice: "The car, on a break" },
    ],
    storyNote: "What your staff carry home, and what Recess does about it.",
    pattern: {
      events: ["A death", "An assault", "A child in crisis", "A safeguarding incident"],
      threshold: "Sickness absence, agency cover, resignation",
      summary: "Recess steps in between overload and instability, stabilising staff before strain becomes sickness absence or a resignation.",
      withoutLabel: "Without Recess",
      withLabel: "With Recess",
    },
    recognition: {
      eyebrow: "Recognition",
      title: "You already know what it looks like",
      bullets: [
        "The carer who never lost her temper snaps on a night shift",
        "Sick days after the hard weeks: a death, an assault, a safeguarding incident",
        "Agency staff covering shifts where residents need familiar faces",
        "Exit interviews that say \u201cit just got too much\u201d",
      ],
      workerLine: "They hold it together for everyone else. Then they get home and can't switch off.",
      stats: [
        { value: "25%", label: "of care home staff leave every year", source: "CQC State of Care 2024/25" },
        { value: "52%", label: "of care workers attacked physically or verbally at work in the last three years", source: "GMB survey of 1,600 care workers, June 2026" },
        { value: "1 in 4", label: "NHS sickness absences are down to anxiety, stress, depression and other mental health reasons", source: "NHS England data" },
      ],
    },
    sectors: {
      title: "Where the risk sits",
      intro: "Every sector carries the load differently. The cost of waiting is the same.",
      cards: [
        {
          name: "Residential & care homes",
          headline: "One in four care home staff leave every year. Your residents feel every one of those exits.",
          asking: "CQC asks whether you care about and promote staff wellbeing, including staff safety",
          cost: "Every carer who leaves takes relationships your residents rely on, and agency cover fills the gap",
          href: "/industries/healthcare",
          linkLabel: "See residential care",
          tone: "peach",
        },
        {
          name: "NHS & mental health",
          headline: "Four in ten staff finish their shift worn out. The bank shift is already booked.",
          asking: "HSE's stress duty, and CQC's workforce wellbeing quality statement",
          cost: "Absence gets covered by bank and agency shifts at premium rates",
          href: "/industries/healthcare",
          linkLabel: "See NHS & mental health",
          tone: "sky",
        },
        {
          name: "Schools & academy trusts",
          headline: "Three in four staff are stressed. Almost three in ten have tried to leave or change role.",
          asking: "HSE's stress duty, and the DfE education staff wellbeing charter",
          cost: "A teacher who leaves mid-year means supply cover, and pupils lose the adult they trusted",
          href: "/industries/education",
          linkLabel: "See schools",
          tone: "mint",
        },
        {
          name: "Blue light services",
          headline: "Long-term absence keeps rising. Every gap lands on the next shift.",
          asking: "HSE's duty on work-related violence, and RIDDOR reporting",
          cost: "Every officer on long-term absence means overtime for the rest, and that's where the next absence starts",
          href: "/industries/public-safety",
          linkLabel: "See blue light",
          tone: "butter",
        },
      ],
    },
    differentiation: {
      assistLabel: "Assistance line (EAP)",
      recessLeaders: "Team trends, early enough to act before absence",
      note: "Most care providers are small employers, and small employers are the least likely to have occupational health. The Keep Britain Working review found 86% of large employers offer it, against 30% of small and medium ones. Recess isn't an occupational health service. It's the support that comes before you need one.",
    },
    differentiators:
      "Built for the shift, not the therapy room. It reads where someone is right now, not where they were at onboarding. It works on the body with guided eye movements, tones and taps, not by talking it through. And it takes ten minutes, so it fits between rounds, lessons and shifts.",
    stepsTitle: "Stabilise trauma exposure in three steps",
    steps: [
      { title: "Detect risk early", subtitle: "Make the invisible visible.", desc: "Establish a baseline of team strain and surface early signals before it shows up as sickness absence or leavers." },
      { title: "Relieve overload in real time", subtitle: "Stabilise after hard moments.", desc: "Short, body-based protocols designed for use during or after difficult moments, built for real shifts and real rotas." },
      { title: "Predict and prevent instability", subtitle: "Lead before crisis spreads.", desc: "Team trends and clear actions for managers. Leaders act before the exit, not after it." },
    ],
    system: { intro: "Each layer closes a distinct gap. Together, they form a complete stabilisation system for trauma-exposed teams.", layers: layers("uk") },
    result: {
      headline: "A low-lift system for spotting and reducing trauma-driven instability at scale.",
      track: "What leaders can expect to track: turnover, sickness absence and incident trends, measured against your own baseline.",
      forStaff: "Something that actually helps, in ten minutes, that they can use privately.",
      forLeaders: "Early warning, fewer surprises on the rota, and evidence of how you support staff wellbeing when the inspector asks.",
      privacy: "Leaders see team trends. They never see an individual's sessions. Recess isn't therapy, and it doesn't replace your EAP or occupational health.",
    },
    planTitle: "Trauma-informed care, for the people giving it",
    plan: sharedPlan("uk"),
    argument: {
      eyebrow: "Your health and safety duty",
      title: "You can't take the trauma out of the job. You can control what it does to your staff.",
      body: "The law already asks you to assess the risk of stress and violence at work and act on it. In care, health, schools and emergency work, that risk is the job itself. So the question isn't whether your staff are exposed. It's what happens after. Recess gives you the control most risk assessments are missing: support during the shift, plus the data to show it's working.",
      chain: [
        { label: "The duty", text: "The Health and Safety at Work Act requires employers to protect the health, safety and welfare of workers, so far as reasonably practicable." },
        { label: "The assessment", text: "The Management Regulations 1999 require you to assess the risks. HSE says to assess stress like any other risk." },
        { label: "The known hazard", text: "Violence is the third biggest cause of RIDDOR-reported injuries in health and social care." },
        { label: "The gap", text: "A risk assessment alone won't reduce harm. Most organisations have the policy, but no support that reaches staff during the shift." },
        { label: "The control", text: "Frontline Ally is support after exposure. Recess Signal is the monitoring. Recess Foundation is the process managers follow." },
      ],
      disclaimer: "Recess supports your health and safety duty. It doesn't discharge it.",
    },
    calculator: {
      teamWord: "frontline staff",
      defaultTeam: 120,
      defaultTurnover: 25,
      turnoverNote: "Default: care home staff turnover, CQC State of Care 2024/25",
      defaultCost: null,
      costNote: "Add your own figure: recruitment, induction and agency cover for one leaver",
      absenceWord: "resignation",
    },
    whyNow: {
      title: "Why this can't wait until spring",
      items: [
        { title: "Inspectors are asking", text: "CQC assesses whether you care about and promote your staff's wellbeing, including their safety. Have your answer ready before they ask." },
        { title: "Government expects employers to lead", text: "The Keep Britain Working review says employers are best placed to prevent ill health, not wait for the fit note." },
        { title: "Winter is here", text: "Absence peaks and the load gets heavier from October to January. Start before it hits." },
        { title: "This financial year", text: "Plan it in before 31 March, while this year's budget is still open." },
      ],
      closing: "Every week the load builds, someone gets closer to the sick note or the resignation letter.",
    },
    finalCta: {
      title: "The next resignation is already building.",
      body: "It started with the last hard shift nobody had time to talk about. Let's find where it's building in your team before it costs you a carer, a manager or an inspection rating.",
    },
  },

  eu: {
    metaTitle: "Recess Europe | Support for frontline staff, built around psychosocial risk",
    metaDescription:
      "Your staff carry everyone else's worst days. Recess gives care, health, education and emergency-service staff a ten-minute way to come down, and gives leaders anonymised team trends to act on psychosocial risk early.",
    hero: {
      headline: "Your staff carry everyone else's worst days.",
      highlight: "Give them somewhere to put it down.",
      body: "Recess gives care, health, education and emergency-service staff a ten-minute way to come down after the hardest moments, and gives leaders anonymised team trends so they can act on psychosocial risk early.",
      secondary: { label: "See how we handle data", href: "/privacy", external: false },
      microcopy: "30 minutes with a founder. You'll leave with a clear first step on psychosocial risk.",
      sectors: ["Residential & elder care", "Health", "Education", "Emergency services"],
    },
    story: [
      { caption: "Every shift, they carry someone else's worst day.", voice: "An elder care corridor, nights" },
      { caption: "They hold it together. It's the job.", voice: "The staff room, between rounds" },
      { caption: "Then they get home. And they can't switch off.", voice: "Home, 1:40am" },
      { caption: "Recess: 10 minutes to put it down, during the shift.", voice: "The car, on a break" },
    ],
    storyNote: "What your staff carry home, and what Recess does about it.",
    pattern: {
      events: ["A death", "An assault", "A child in crisis", "A critical incident"],
      threshold: "Sickness absence, leaving the profession",
      summary: "Recess steps in between overload and instability, so staff can come down before strain becomes absence.",
      withoutLabel: "Without Recess",
      withLabel: "With Recess",
    },
    recognition: {
      eyebrow: "Recognition",
      title: "Psychosocial risk is a safety risk",
      bullets: [
        "Sickness absence rises after the hard weeks",
        "Experienced staff leave the profession, not just the job",
        "Temporary staff fill gaps where people need continuity",
        "The yearly survey says what everyone already knew",
      ],
      workerLine: "They hold it together at work. Then they get home and can't switch off.",
      stats: [],
    },
    differentiation: {
      assistLabel: "Assistance line",
      recessLeaders: "Anonymised team trends. Never individual data.",
      note: "Employers already have a duty to assess every risk to workers' health, psychosocial risks included (EU-OSHA; Framework Directive 89/391/EEC). Most only have a yearly survey and an assistance line to meet it.",
    },
    differentiators:
      "Built for the shift, not the therapy room. It adapts to how someone says they're doing right now, not where they were at onboarding. It works on the body with guided eye movements, tones and taps, not by talking it through. And it takes ten minutes, so it fits between rounds, lessons and shifts.",
    stepsTitle: "Act on psychosocial risk in three steps",
    steps: [
      { title: "Understand the load", subtitle: "Staff choose what they share.", desc: "Staff say how they're doing in under a minute. Leaders see anonymised patterns by team, never individuals." },
      { title: "Relieve overload in real time", subtitle: "Come down after hard moments.", desc: "Short, body-based sessions designed for use during or after difficult moments, built for real shifts." },
      { title: "Prevent instability", subtitle: "Lead before strain spreads.", desc: "Anonymised team trends and clear actions for managers. Leaders act before the exit, not after it." },
    ],
    system: { intro: "Each layer closes a distinct gap. Together, they give staff control and give leaders what they need to act on psychosocial risk.", layers: layers("eu") },
    result: {
      headline: "A low-lift way to reduce psychosocial risk across frontline teams.",
      track: "What leaders can expect to track: turnover, sickness absence and incident trends, measured against your own baseline.",
      forStaff: "Ten minutes that actually helps, used privately. Staff stay in control of what they share.",
      forLeaders: "Anonymised trends by team, a documented process after incidents, and nothing that feeds performance management.",
      privacy: "Leaders see anonymised team trends. They never see an individual's sessions. No face scan, no biometrics, no emotion recognition.",
    },
    planTitle: "Trauma-informed care, for the people giving it",
    plan: [
      { title: BOOK_LABEL, text: "We'll look at how Recess fits your risk assessment, your works council or staff representatives, and your data rules." },
      { title: "Check in", text: "Staff say how they're doing in under a minute, and choose what they share." },
      { title: "Put it down", text: "Frontline Ally gives staff a ten-minute guided session. Leaders see anonymised trends by team." },
    ],
    argument: {
      eyebrow: "Psychosocial risk",
      title: "Psychosocial risk sits in the same legal duty as physical safety.",
      body: "Inspectorates are asking how employers meet it. You can't remove the hard moments from care, health and emergency work. You can give staff a way to come down after them, and give leaders the anonymised picture they need to act early.",
      chain: [
        { label: "Staff in control", text: "Self-report check-ins only. Staff choose what they share." },
        { label: "Anonymised by design", text: "Leaders see team trends, never an individual's data." },
        { label: "No biometrics", text: "No face scan and no emotion recognition." },
        { label: "Works with your reps", text: "We'll walk your works council or staff representatives through it." },
      ],
    },
    calculator: {
      teamWord: "frontline staff",
      defaultTeam: 150,
      defaultTurnover: 20,
      turnoverNote: "Example figure. Adjust it to your own turnover rate",
      defaultCost: null,
      costNote: "Add your own figure: recruitment, induction and temporary cover for one leaver",
      absenceWord: "leaver",
    },
    whyNow: {
      title: "Why now",
      items: [
        { title: "It's a legal duty", text: "Psychosocial risk sits in the same duty as physical safety, and inspectorates are asking how employers meet it." },
        { title: "Winter is coming", text: "Absence peaks from October to January, and the load is heaviest. Start before it hits." },
        { title: "Hiring won't close the gap", text: "Health, care and education workforces are short-staffed. Keeping the people you have is the fastest lever." },
      ],
      closing: "Every week the load builds, someone gets closer to leaving.",
    },
    finalCta: {
      title: "Give your staff somewhere to put it down.",
      body: "In 30 minutes we'll look at where psychosocial risk sits in your teams, how Recess fits your data rules, and what to do first.",
    },
  },

  intl: {
    metaTitle: "Recess International | Emotional infrastructure for frontline teams",
    metaDescription:
      "Your people carry everyone else's worst days. Then they leave. Recess gives frontline staff in care, health, education, emergency services and field teams a ten-minute way to put the load down during the shift.",
    hero: {
      headline: "Your people carry everyone else's worst days.",
      highlight: "Then they leave.",
      body: "Recess gives frontline staff in care, health, education, emergency services and field teams a ten-minute way to put the load down during the shift, and gives leaders early warning before it becomes absence, burnout or a resignation.",
      secondary: { label: "Check your team's exposure", href: LOW_COMMIT_URL, external: true },
      microcopy: "30 minutes with a founder. You'll leave knowing where strain is building in your team.",
      sectors: ["Residential care", "Health systems", "Education", "Emergency services", "Humanitarian & NGO field teams"],
    },
    story: [
      { caption: "Every shift, they carry someone else's worst day.", voice: "A care facility corridor, nights" },
      { caption: "They hold it together. It's the job.", voice: "The staff room, between rounds" },
      { caption: "Then they get home. And they can't switch off.", voice: "Home, 1:40am" },
      { caption: "Recess: 10 minutes to put it down, during the shift.", voice: "The car, on a break" },
    ],
    storyNote: "What your staff carry home, and what Recess does about it.",
    pattern: {
      events: ["A death", "An assault", "A child in crisis", "A field incident"],
      threshold: "Absence, burnout, resignation",
      summary: "Recess steps in between overload and instability, stabilising staff before strain becomes absence or a resignation.",
      withoutLabel: "Without Recess",
      withLabel: "With Recess",
    },
    recognition: {
      eyebrow: "Recognition",
      title: "The load your people carry home",
      bullets: [
        "They absorb other people's worst days, and the body holds onto it long after the shift ends",
        "It shows up as absence after the hard weeks",
        "Then as mistakes and conflict on the team",
        "Then as people leaving the work altogether",
      ],
      workerLine: "They hold it together at work. Then they get home and can't come down.",
      stats: [],
    },
    differentiation: {
      assistLabel: "Assistance line (EAP)",
      recessLeaders: "Team trends, early enough to act before absence",
    },
    differentiators:
      "Built for the shift, not the therapy room. It reads where someone is right now, not where they were at onboarding. It works on the body with guided eye movements, tones and taps, not by talking it through. And it takes ten minutes, so it fits between calls, classes and shifts.",
    stepsTitle: "Stabilise trauma exposure in three steps",
    steps: [
      { title: "Detect risk early", subtitle: "Make the invisible visible.", desc: "Establish a baseline of team strain and surface early signals before it shows up as absence or leavers." },
      { title: "Relieve overload in real time", subtitle: "Stabilise after hard moments.", desc: "Short, body-based protocols designed for use during or after difficult moments, built for real shifts." },
      { title: "Predict and prevent instability", subtitle: "Lead before crisis spreads.", desc: "Team trends and clear actions for leaders. Leaders act before the exit, not after it." },
    ],
    system: { intro: "Each layer closes a distinct gap. Together, they form a complete stabilisation system for trauma-exposed teams.", layers: layers("intl") },
    result: {
      headline: "A low-lift system for spotting and reducing trauma-driven instability at scale.",
      track: "What leaders can expect to track: turnover, absence and incident trends, measured against your own baseline.",
      forStaff: "Something that actually helps, in ten minutes, that they can use privately.",
      forLeaders: "Early warning, steadier teams, and evidence that your duty of care is more than a policy.",
      privacy: "Leaders see team trends. They never see an individual's sessions. Recess isn't therapy, and it doesn't replace your EAP.",
    },
    planTitle: "Trauma-informed care, for the people giving it",
    plan: sharedPlan("uk"),
    argument: {
      eyebrow: "ISO 45003",
      title: "Built to support psychosocial risk management under ISO 45003.",
      body: "ISO 45003 is the international standard for psychological health and safety at work. Recess gives you a control that reaches staff during the shift, plus the trend data to show it's being used.",
      chain: [
        { label: "Australia", text: "Employers must now identify and control psychosocial hazards under WHS regulations (Safe Work Australia, Comcare)." },
        { label: "Boards and funders", text: "They want evidence that duty of care is more than a policy." },
        { label: "Everywhere else", text: "Health and education workforces are short-staffed almost everywhere." },
      ],
      disclaimer: "Recess supports psychosocial risk management. It isn't a certification.",
    },
    calculator: {
      teamWord: "frontline staff",
      defaultTeam: 150,
      defaultTurnover: 20,
      turnoverNote: "Example figure. Adjust it to your own turnover rate",
      defaultCost: null,
      costNote: "Add your own figure: recruitment, induction and cover for one leaver",
      absenceWord: "resignation",
    },
    whyNow: {
      title: "Why now",
      items: [
        { title: "Psychosocial hazards are regulated", text: "In Australia, employers must now identify and control psychosocial hazards under WHS regulations." },
        { title: "Boards and funders are asking", text: "They want evidence that duty of care is more than a policy." },
        { title: "The workforce is short", text: "Health and education workforces are short-staffed almost everywhere. Keeping people is the fastest lever." },
      ],
      closing: "Every week the load builds, someone gets closer to leaving.",
    },
    finalCta: {
      title: "The next resignation is already building.",
      body: "In 30 minutes we'll show you where strain is building in your team, and what to do first.",
    },
  },
}

export function getHomeContent(region: RegionId) {
  return content[region]
}

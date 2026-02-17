import type { Metadata } from "next"
import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { SharedCTA } from "@/components/shared-cta"
import { FadeInSection } from "@/components/fade-in-section"
import { AlertTriangle, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Recess",
  description: "Our vision, manifesto, and the team building emotional infrastructure for trauma-exposed workforces.",
}

const advisors = [
  {
    name: "Michael Lawrence",
    role: "Health Tech Growth & Scale Advisor",
    image: "/images/team/michael-lawrence.jpg",
    credentials: ["MBA"],
    highlights: ["Sold company to Google"],
    logos: [{ label: "Google", color: "#4285F4" }],
  },
  {
    name: "Dr. Ayelet Hirshfeld",
    role: "Clinical & Trauma Science Advisor",
    image: "/images/team/ayelet-hirshfeld.webp",
    credentials: ["PhD"],
    highlights: ["Expert in high-risk populations (healthcare, first responders, military)", "Stanford postdoc", "GenAI in mental health"],
    logos: [{ label: "Stanford", color: "#8C1515" }],
  },
  {
    name: "Dr. Kwame Johnson, MD",
    role: "Health Product & AI Advisor",
    image: "/images/team/kwame-johnson.jpg",
    credentials: ["MD (Duke)"],
    highlights: ["Ex-Google Health", "Ex-Microsoft", "Product leader in AI for healthcare", "Enterprise clinical AI in hospital systems"],
    logos: [{ label: "Google", color: "#4285F4" }, { label: "Microsoft", color: "#00A4EF" }, { label: "Duke", color: "#003087" }],
  },
]

const leadership = [
  {
    name: "Kelz Bethel, MBA",
    role: "Cofounder, CEO",
    image: "/images/team/kelz-bethel.png",
    credentials: ["MBA"],
    highlights: ["3x Founder with 1 exit", "Former Psychologist"],
    logos: [],
  },
  {
    name: "Lisanne Fellinger",
    role: "Cofounder, CTO",
    image: "/images/team/lisanne-fellinger.jpg",
    credentials: [],
    highlights: ["Published Neuroscientist", "10 Years Senior Software Engineer"],
    logos: [{ label: "Disney+", color: "#113CCF" }, { label: "BBC", color: "#BB1919" }, { label: "HBO", color: "#000" }],
  },
]

function TeamCard({ person }: { person: typeof advisors[number] }) {
  return (
    <div className="group relative bg-background rounded-2xl border border-border/40 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8D7AA0] to-[#AAF5D4] opacity-60 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start gap-5">
        {/* Photo */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border/40 group-hover:border-accent/40 transition-colors">
            <Image
              src={person.image}
              alt={person.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="font-serif font-bold text-foreground text-lg leading-tight">{person.name}</p>
          <p className="text-sm text-accent font-semibold mt-1">{person.role}</p>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {person.highlights.map((h, i) => (
          <span key={i} className="inline-block text-xs text-muted-foreground bg-[#F5F5FF] rounded-full px-3 py-1 border border-border/20">
            {h}
          </span>
        ))}
      </div>

      {/* Company logos */}
      {person.logos.length > 0 && (
        <div className="mt-3 flex items-center gap-2 pt-3 border-t border-border/20">
          <span className="text-xs text-muted-foreground/60 shrink-0">Trusted by</span>
          <div className="flex items-center gap-2">
            {person.logos.map((logo, i) => (
              <span key={i} className="inline-flex items-center gap-1 text-xs font-semibold rounded-md px-2 py-0.5 border" style={{ borderColor: `${logo.color}30`, color: logo.color, backgroundColor: `${logo.color}08` }}>
                {logo.label}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Vision Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#FDF0ED" }}>
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1400 500">
          <path d="M0 350 Q350 300 700 350 T1400 330" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.06" />
          <path d="M0 380 Q350 330 700 380 T1400 360" stroke="#8D7AA0" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
        <div className="relative mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl">
              <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-5">Our Vision</p>
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight leading-relaxed text-balance">
                To support 1 million frontline professionals by 2030 -- ensuring the people who absorb crisis for a living are protected by systems built for that reality.
              </h1>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About the Company */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8">About Recess</h2>
                <div className="space-y-5 text-base lg:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Recess is a neuroscience-informed technology company focused on stabilizing trauma-exposed workforces.
                  </p>
                  <p>
                    We work with healthcare systems, schools, and public safety agencies to address the biological impact of repeated trauma exposure — before it becomes turnover, extended leave, incident risk, and operational instability.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="font-serif font-semibold text-foreground text-base lg:text-lg mb-4">Our approach integrates:</p>
                  <ul className="space-y-3">
                    {[
                      "Adaptive Information Processing (AIP) theory",
                      "Secondary trauma and compassion fatigue research",
                      "Polyvagal-informed nervous system regulation",
                      "HRV-based stress recovery science",
                      "AI-driven adaptive personalization",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-base lg:text-lg text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="mt-8 text-base lg:text-lg text-foreground font-medium leading-relaxed">
                  Recess translates established trauma processing science into scalable workforce infrastructure.
                </p>
              </div>

              {/* Right side: "Not a wellness platform" callout */}
              <div className="lg:mt-14">
                <div className="relative rounded-2xl border-2 border-[#E8A94C] bg-[#FFFBF0] p-7 shadow-md overflow-hidden">
                  {/* Caution stripe at top */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E8A94C]" />
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#E8A94C] flex items-center justify-center shrink-0 shadow-sm">
                      <AlertTriangle className="w-6 h-6 text-[#FFFBF0]" />
                    </div>
                    <div>
                      <p className="font-serif font-bold text-foreground text-xl leading-tight">We are not a wellness platform.</p>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    We are a science-backed system designed for high-exposure environments where stability is operationally critical.
                  </p>
                  {/* Subtle repeating caution pattern */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#E8A94C] opacity-40" />
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Manifesto - We Believe */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "#FDF0ED" }}>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-accent/5" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-accent/5" />

        <div className="relative mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Manifesto</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trauma exposure is not an individual weakness. It is a structural condition of high-impact work.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4">
                In healthcare, education, and public safety, people absorb crisis as part of their role. Over time, that exposure accumulates biologically.
              </p>
              <p className="text-base lg:text-lg text-foreground font-medium leading-relaxed mb-8">
                When it is ignored, instability follows.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {["Extended leave", "Turnover", "Escalation", "Loss of trust"].map((item, i) => (
                  <div key={i} className="bg-background rounded-xl p-4 text-center border border-border/40 shadow-sm">
                    <span className="text-sm font-serif font-semibold text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10">
                Most institutions respond with training and wellness programs. Few address the nervous system strain driving the instability.
              </p>

              {/* We Believe -- elevated dark card */}
              <div className="relative rounded-2xl bg-foreground p-8 md:p-10 shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "linear-gradient(to right, #FFF2E2, #AAF5D4, #D4EDF9, #FFCCE5)" }} />
                <p className="font-serif font-bold text-background text-xl mb-6">We believe:</p>
                <ul className="space-y-4">
                  {[
                    "Stability is operational, not optional.",
                    "Emotional risk should be measurable.",
                    "Prevention must be proactive.",
                    "Infrastructure should protect the people who protect others.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-background/80 text-base lg:text-lg leading-relaxed">
                      <span className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-sm font-serif font-bold text-background">{i + 1}</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-10 text-lg text-foreground font-serif font-semibold text-center leading-relaxed">
                If exposure is structural, stabilization must be structural too. That is the future of workforce resilience.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="text-center mb-14">
              <p className="text-accent font-serif font-semibold text-sm uppercase tracking-widest mb-3">Our People</p>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Built by Experts. Guided by Science.
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Recess is guided by world-class experts across trauma research, neuroscience, health systems, and AI -- with roots at Google, Microsoft, Stanford, Duke, Disney+, BBC, and HBO.
              </p>
            </div>

            {/* Advisory Board */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#AAF5D4" stroke="#29285D" strokeWidth="1" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-xl">Advisory Board</p>
                  <p className="text-sm text-muted-foreground">Industry leaders shaping our scientific and strategic direction</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {advisors.map((a, i) => (
                  <TeamCard key={i} person={a} />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 my-12">
              <div className="flex-1 h-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Leadership Team */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#D4EDF9" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="#D4EDF9" strokeWidth="2" fill="none" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#D4EDF9" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground text-xl">Leadership Team</p>
                  <p className="text-sm text-muted-foreground">The founders building the future of frontline workforce stability</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 max-w-2xl">
                {leadership.map((a, i) => (
                  <TeamCard key={i} person={a} />
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Backed By */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#FDF0ED" }}>
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">Backed By</h2>
            <p className="text-center text-base lg:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Supported by leading partners and innovation ecosystems across digital health, workforce innovation, and behavioral science.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="w-28 h-16 rounded-xl bg-background border border-border/30 flex items-center justify-center shadow-sm">
                  <svg viewBox="0 0 80 32" fill="none" className="w-16 opacity-30">
                    <rect x="4" y="4" width="72" height="24" rx="4" stroke="#8D7AA0" strokeWidth="1" />
                    <text x="40" y="20" textAnchor="middle" fill="#8D7AA0" fontSize="8" fontFamily="system-ui">Partner {i + 1}</text>
                  </svg>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

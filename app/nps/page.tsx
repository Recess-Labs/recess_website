"use client"

import { useState } from "react"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, CheckCircle, Sparkles, Star } from "lucide-react"

export default function NPSPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    reason: "",
    improvement: "",
    hoping: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <PageWrapper>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeInSection>
            {!submitted ? (
              <div className="text-center">
                {/* Header */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#AAF5D4]/30 mb-6">
                  <CheckCircle className="w-8 h-8 text-[#29285D]" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Thank you — we got your response
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-12">
                  Your feedback helps shape what we build next.
                </p>

                {/* Feedback Form */}
                <form onSubmit={handleSubmit} className="text-left space-y-8">
                  <div>
                    <label htmlFor="reason" className="block font-serif font-semibold text-foreground mb-3">
                      What is the primary reason for your score?
                    </label>
                    <textarea
                      id="reason"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                      placeholder="Share your thoughts..."
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="improvement" className="block font-serif font-semibold text-foreground mb-3">
                      What&apos;s one thing we could change to make your experience better?
                    </label>
                    <textarea
                      id="improvement"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                      placeholder="Share your thoughts..."
                      value={formData.improvement}
                      onChange={(e) => setFormData({ ...formData, improvement: e.target.value })}
                    />
                  </div>

                  <div>
                    <label htmlFor="hoping" className="block font-serif font-semibold text-foreground mb-3">
                      When you tried Recess, what were you hoping would change for you?
                    </label>
                    <textarea
                      id="hoping"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                      placeholder="Share your thoughts..."
                      value={formData.hoping}
                      onChange={(e) => setFormData({ ...formData, hoping: e.target.value })}
                    />
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-serif font-bold text-lg bg-foreground text-primary-foreground hover:bg-foreground/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Submit feedback"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center">
                {/* Thank you message */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#AAF5D4]/30 mb-6">
                  <CheckCircle className="w-8 h-8 text-[#29285D]" />
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Thank you — we really appreciate this.
                </h1>
                <p className="text-lg text-muted-foreground mb-16">
                  Your feedback helps us build something that truly supports you.
                </p>

                {/* Champions Banner */}
                <div className="relative overflow-hidden rounded-[2rem] bg-[#29285D]">
                  {/* Animated gradient orbs */}
                  <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8D7AA0]/40 blur-[100px] animate-pulse pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFCCE5]/25 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#AAF5D4]/15 blur-[60px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />
                  
                  {/* Flowing SVG lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15" preserveAspectRatio="none" viewBox="0 0 1400 400" fill="none">
                    <path d="M-100 200 C200 100 400 300 700 175 S1000 50 1200 200" stroke="#8D7AA0" strokeWidth="2" fill="none">
                      <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
                        M-100 200 C200 100 400 300 700 175 S1000 50 1200 200;
                        M-100 180 C200 150 400 250 700 200 S1000 100 1200 175;
                        M-100 200 C200 100 400 300 700 175 S1000 50 1200 200
                      " />
                    </path>
                  </svg>

                  {/* Subtle dot pattern */}
                  <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

                  <div className="relative px-8 py-14 md:px-12">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8D7AA0] to-[#FFCCE5] flex items-center justify-center shadow-lg">
                          <Sparkles className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight mb-4">
                        Want to stay close to what we&apos;re building?
                      </h3>
                      
                      <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-lg">
                        Become a Recess Champion — get 6 months free, founding member pricing locked forever, and a direct voice in what we build.
                      </p>

                      {/* Quick stats */}
                      <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-[#FFEDAC]" />
                          <span className="text-white font-semibold">$99/year locked</span>
                        </div>
                        <div className="w-px h-5 bg-white/20" />
                        <div className="flex items-center gap-2">
                          <span className="text-white/60">Limited founding spots</span>
                        </div>
                      </div>

                      <Link
                        href="/champions"
                        className="group inline-flex items-center gap-3 rounded-xl px-10 py-5 font-serif font-bold text-lg bg-gradient-to-r from-[#8D7AA0] to-[#A08DB3] text-white hover:from-[#9D8AB0] hover:to-[#B09DC3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        Become a Recess Champion
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </FadeInSection>
        </div>
      </section>
    </PageWrapper>
  )
}

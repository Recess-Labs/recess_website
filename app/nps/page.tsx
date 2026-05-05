"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, CheckCircle, Sparkles, Star, Heart, PartyPopper } from "lucide-react"

// Confetti particle component
function ConfettiParticle({ delay, color, left }: { delay: number; color: string; left: number }) {
  return (
    <div
      className="absolute w-3 h-3 rounded-full animate-confetti pointer-events-none"
      style={{
        backgroundColor: color,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        top: "-10px",
      }}
    />
  )
}

export default function NPSPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
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
    setShowConfetti(true)
    setIsSubmitting(false)

    // Stop confetti after animation
    setTimeout(() => setShowConfetti(false), 4000)
  }

  const confettiColors = ["#AAF5D4", "#FFCCE5", "#FFEDAC", "#D4EDF9", "#8D7AA0"]

  return (
    <PageWrapper>
      <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-[#AAF5D4]/20 blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-[#FFCCE5]/20 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-[#FFEDAC]/15 blur-[60px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />

        {/* Confetti animation */}
        {showConfetti && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 50 }).map((_, i) => (
              <ConfettiParticle
                key={i}
                delay={Math.random() * 2}
                color={confettiColors[i % confettiColors.length]}
                left={Math.random() * 100}
              />
            ))}
          </div>
        )}

        <div className="relative mx-auto max-w-3xl px-6">
          <FadeInSection>
            {!submitted ? (
              <div className="text-center">
                {/* Celebratory Header */}
                <div className="relative inline-block mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#AAF5D4]/30 via-[#FFCCE5]/30 to-[#FFEDAC]/30 rounded-full blur-xl animate-pulse" />
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#AAF5D4] to-[#FFEDAC] shadow-xl">
                    <Heart className="w-10 h-10 text-[#29285D]" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFCCE5]/20 to-[#AAF5D4]/20 border border-[#8D7AA0]/20 rounded-full px-5 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#8D7AA0]" />
                  <span className="text-sm font-semibold text-[#29285D]">Your voice matters</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                  Thank you — we got your response
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto">
                  Your feedback helps shape what we build next. Mind sharing a bit more?
                </p>

                {/* Feedback Form with enhanced styling */}
                <form onSubmit={handleSubmit} className="text-left space-y-8">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#AAF5D4]/50 to-[#FFCCE5]/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-background rounded-xl p-6 border border-border/50 shadow-sm">
                      <label htmlFor="reason" className="block font-serif font-semibold text-foreground mb-3 text-lg">
                        What is the primary reason for your score?
                      </label>
                      <textarea
                        id="reason"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#8D7AA0]/50 focus:border-[#8D7AA0] transition-all resize-none"
                        placeholder="Share your thoughts..."
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFCCE5]/50 to-[#FFEDAC]/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-background rounded-xl p-6 border border-border/50 shadow-sm">
                      <label htmlFor="improvement" className="block font-serif font-semibold text-foreground mb-3 text-lg">
                        What&apos;s one thing we could change to make your experience better?
                      </label>
                      <textarea
                        id="improvement"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#8D7AA0]/50 focus:border-[#8D7AA0] transition-all resize-none"
                        placeholder="Share your thoughts..."
                        value={formData.improvement}
                        onChange={(e) => setFormData({ ...formData, improvement: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FFEDAC]/50 to-[#D4EDF9]/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-background rounded-xl p-6 border border-border/50 shadow-sm">
                      <label htmlFor="hoping" className="block font-serif font-semibold text-foreground mb-3 text-lg">
                        When you tried Recess, what were you hoping would change for you?
                      </label>
                      <textarea
                        id="hoping"
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#8D7AA0]/50 focus:border-[#8D7AA0] transition-all resize-none"
                        placeholder="Share your thoughts..."
                        value={formData.hoping}
                        onChange={(e) => setFormData({ ...formData, hoping: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center gap-3 rounded-xl px-10 py-5 font-serif font-bold text-lg bg-gradient-to-r from-[#4B3860] to-[#654870] text-white hover:from-[#5B4870] hover:to-[#755880] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#AAF5D4] to-[#FFCCE5] opacity-0 group-hover:opacity-20 transition-opacity" />
                      {isSubmitting ? "Submitting..." : "Submit feedback"}
                      {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center">
                {/* Celebratory Thank You */}
                <div className="relative inline-block mb-8">
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#AAF5D4]/40 via-[#FFCCE5]/40 to-[#FFEDAC]/40 rounded-full blur-2xl animate-pulse" />
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#AAF5D4] via-[#FFEDAC] to-[#FFCCE5] shadow-2xl">
                    <PartyPopper className="w-12 h-12 text-[#29285D]" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#AAF5D4]/30 to-[#FFCCE5]/30 border border-[#8D7AA0]/20 rounded-full px-5 py-2 mb-6">
                  <CheckCircle className="w-4 h-4 text-[#29285D]" />
                  <span className="text-sm font-semibold text-[#29285D]">Feedback received</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                  Thank you — we really appreciate this!
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-xl mx-auto">
                  Your feedback helps us build something that truly supports you.
                </p>

                {/* Champions Banner - Enhanced */}
                <div className="relative overflow-hidden rounded-[2rem] bg-[#29285D]">
                  {/* Animated gradient orbs */}
                  <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#8D7AA0]/40 blur-[100px] animate-pulse pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FFCCE5]/25 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-[#AAF5D4]/20 blur-[60px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />
                  
                  {/* Flowing SVG lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none" viewBox="0 0 1400 400" fill="none">
                    <path d="M-100 200 C200 100 400 300 700 175 S1000 50 1200 200" stroke="#8D7AA0" strokeWidth="2" fill="none">
                      <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
                        M-100 200 C200 100 400 300 700 175 S1000 50 1200 200;
                        M-100 180 C200 150 400 250 700 200 S1000 100 1200 175;
                        M-100 200 C200 100 400 300 700 175 S1000 50 1200 200
                      " />
                    </path>
                    <path d="M-100 300 C300 200 500 350 800 275 S1100 150 1300 300" stroke="#FFCCE5" strokeWidth="1.5" fill="none">
                      <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                        M-100 300 C300 200 500 350 800 275 S1100 150 1300 300;
                        M-100 280 C300 250 500 300 800 300 S1100 200 1300 275;
                        M-100 300 C300 200 500 350 800 275 S1100 150 1300 300
                      " />
                    </path>
                  </svg>

                  {/* Subtle dot pattern */}
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

                  <div className="relative px-8 py-16 md:px-12">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8D7AA0] to-[#FFCCE5] flex items-center justify-center shadow-xl">
                          <Sparkles className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      
                      <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                        Want to stay close to what we&apos;re building?
                      </h3>
                      
                      <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 max-w-lg">
                        Become a Recess Champion — get 6 months free, founding member pricing locked forever, and a direct voice in what we build.
                      </p>

                      {/* Quick stats */}
                      <div className="flex flex-wrap items-center justify-center gap-8 text-sm mb-10">
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                          <Star className="w-5 h-5 text-[#FFEDAC]" />
                          <span className="text-white font-semibold">$99/year locked</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                          <Sparkles className="w-5 h-5 text-[#AAF5D4]" />
                          <span className="text-white/80">Limited founding spots</span>
                        </div>
                      </div>

                      <Link
                        href="/champions"
                        className="group inline-flex items-center gap-3 rounded-xl px-12 py-6 font-serif font-bold text-lg bg-gradient-to-r from-[#8D7AA0] to-[#A08DB3] text-white hover:from-[#9D8AB0] hover:to-[#B09DC3] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
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

      {/* Add confetti animation keyframes */}
      <style jsx global>{`
        @keyframes confetti {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }
      `}</style>
    </PageWrapper>
  )
}

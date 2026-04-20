"use client"

import { useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Loader2 } from "lucide-react"

export function ChampionForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="champion-form" className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: "#F5F5FF" }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-xl px-6">
        <FadeInSection>
          <div className="bg-background rounded-3xl border border-border/30 shadow-xl overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#D4CCE0] via-accent to-[#D4CCE0]" />
            
            <div className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[#AAF5D4] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-3">Application Received</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Thank you for your interest in becoming a Recess Champion. We&apos;ll review your application and follow up within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Apply to Join</h2>
                    <p className="text-muted-foreground">
                      Spots are limited. We&apos;re keeping this group intentionally small.
                    </p>
                  </div>

                  {/* Spots indicator */}
                  <div className="flex items-center justify-center gap-2 mb-8">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <div className="w-3 h-3 rounded-full bg-border" />
                      <div className="w-3 h-3 rounded-full bg-border" />
                      <div className="w-3 h-3 rounded-full bg-border" />
                    </div>
                    <span className="text-sm text-muted-foreground ml-2">A few founding spots still open</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-muted-foreground">First name</label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F5F5FF] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-medium text-muted-foreground">Last name</label>
                        <input
                          type="text"
                          required
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F5F5FF] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-muted-foreground">Email address (tied to your Recess account)</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F5F5FF] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-muted-foreground">Phone number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border/60 bg-[#F5F5FF] text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-full px-8 py-4 font-serif font-semibold text-lg bg-foreground text-background hover:bg-foreground/90 hover:scale-[1.01] transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Apply to Join Recess Champions
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-muted-foreground/70">
                      We&apos;ll review your application and follow up within 48 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Loader2, Check, Star, Sparkles } from "lucide-react"

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
    <section id="champion-form" className="relative py-24 lg:py-32 overflow-hidden bg-[#29285D]">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-[#8D7AA0]/30 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#FFCCE5]/20 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#AAF5D4]/15 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />
      
      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none" viewBox="0 0 1400 800" fill="none">
        <path d="M-100 400 C200 200 400 600 700 350 S1000 100 1200 400" stroke="#8D7AA0" strokeWidth="2" fill="none">
          <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
            M-100 400 C200 200 400 600 700 350 S1000 100 1200 400;
            M-100 380 C200 280 400 500 700 400 S1000 200 1200 350;
            M-100 400 C200 200 400 600 700 350 S1000 100 1200 400
          " />
        </path>
      </svg>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />

      <div className="relative mx-auto max-w-xl px-6">
        <FadeInSection>
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
            {/* Top gradient accent */}
            <div className="h-2 bg-gradient-to-r from-[#8D7AA0] via-[#FFCCE5] to-[#AAF5D4]" />
            
            <div className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#AAF5D4] to-[#FFEDAC] flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-10 h-10 text-[#8D7AA0]" />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#29285D] mb-4">You&apos;re In!</h2>
                  <p className="text-lg text-[#777698] leading-relaxed max-w-sm mx-auto">
                    We&apos;ll review your application and reach out within 48 hours. Welcome to the founding team.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFCCE5]/20 to-[#AAF5D4]/20 border border-[#8D7AA0]/20 rounded-full px-5 py-2 mb-5">
                      <Sparkles className="w-4 h-4 text-[#8D7AA0]" />
                      <span className="text-sm font-semibold text-[#29285D]">Limited Founding Spots</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#29285D] mb-3">Apply to Join</h2>
                    <p className="text-[#777698]">
                      We&apos;re keeping this group intentionally small.
                    </p>
                  </div>

                  {/* Visual spots indicator */}
                  <div className="flex flex-col items-center gap-4 mb-10 p-5 bg-[#F5F5FF] rounded-2xl border border-[#E8E0EC]">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full shadow-sm" style={{ backgroundColor: ["#FFCCE5", "#AAF5D4", "#FFEDAC", "#D4EDF9"][i-1] }} />
                      ))}
                      {[5, 6, 7].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-[#E8E0EC]" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#777698]">A few founding spots still open</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#29285D]">First name</label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#29285D]">Last name</label>
                        <input
                          type="text"
                          required
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#29285D]">Email address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#29285D]">Phone number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 rounded-xl px-8 py-5 font-serif font-bold text-lg bg-gradient-to-r from-[#8D7AA0] to-[#A08DB3] text-white hover:from-[#9D8AB0] hover:to-[#B09DC3] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Star className="w-5 h-5" />
                          Apply to Join Recess Champions
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-[#777698]">
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

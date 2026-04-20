"use client"

import { useState } from "react"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Loader2, Check, Star } from "lucide-react"

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
    <section id="champion-form" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: "#04342C" }}>
      {/* Animated background elements */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] rounded-full bg-[#1D9E75]/20 blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] rounded-full bg-[#5DCAA5]/15 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative mx-auto max-w-xl px-6">
        <FadeInSection>
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Top accent */}
            <div className="h-2 bg-gradient-to-r from-[#1D9E75] via-[#5DCAA5] to-[#1D9E75]" />
            
            <div className="p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#F0FDF4] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <div className="w-14 h-14 rounded-full bg-[#1D9E75] flex items-center justify-center">
                      <Check className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#04342C] mb-4">You&apos;re In!</h2>
                  <p className="text-lg text-[#04342C]/70 leading-relaxed max-w-sm mx-auto">
                    We&apos;ll review your application and reach out within 48 hours. Welcome to the founding team.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-[#F0FDF4] rounded-full px-4 py-1.5 mb-4">
                      <Star className="w-4 h-4 text-[#1D9E75]" />
                      <span className="text-sm font-semibold text-[#04342C]">Limited Founding Spots</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#04342C] mb-2">Apply to Join</h2>
                    <p className="text-[#04342C]/60">
                      We&apos;re keeping this group intentionally small.
                    </p>
                  </div>

                  {/* Spots indicator - more visual */}
                  <div className="flex flex-col items-center gap-3 mb-8 p-4 bg-[#FAFAF8] rounded-2xl">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-[#1D9E75] shadow-sm" />
                      ))}
                      {[5, 6, 7].map((i) => (
                        <div key={i} className="w-4 h-4 rounded-full bg-[#04342C]/10" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#04342C]/70">A few founding spots still open</span>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#04342C]/70">First name</label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-[#04342C]/10 bg-[#FAFAF8] text-[#04342C] placeholder:text-[#04342C]/30 focus:outline-none focus:border-[#1D9E75] focus:bg-white transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#04342C]/70">Last name</label>
                        <input
                          type="text"
                          required
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl border-2 border-[#04342C]/10 bg-[#FAFAF8] text-[#04342C] placeholder:text-[#04342C]/30 focus:outline-none focus:border-[#1D9E75] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#04342C]/70">Email address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-[#04342C]/10 bg-[#FAFAF8] text-[#04342C] placeholder:text-[#04342C]/30 focus:outline-none focus:border-[#1D9E75] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#04342C]/70">Phone number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-[#04342C]/10 bg-[#FAFAF8] text-[#04342C] placeholder:text-[#04342C]/30 focus:outline-none focus:border-[#1D9E75] focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 rounded-xl px-8 py-4 font-serif font-bold text-lg bg-[#1D9E75] text-white hover:bg-[#25B385] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
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

                    <p className="text-center text-sm text-[#04342C]/50">
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

"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { MessageSquare, Smartphone, Calendar } from "lucide-react"

export function ChampionCommitment() {
  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - content */}
          <FadeInSection>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#04342C]/5 border border-[#04342C]/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75]" />
                <span className="text-xs font-sans font-semibold text-[#04342C] tracking-widest uppercase">
                  Your Commitment
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-8">
                More value than
                <br />
                <span className="text-[#1D9E75]">you think.</span>
              </h2>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1D9E75] via-[#5DCAA5] to-[#AAF5D4] rounded-full" />
                <div className="pl-8 space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Use the app. Share what resonates and what doesn&apos;t. Join the monthly call when you can.
                  </p>
                  <p className="text-xl text-foreground font-medium leading-relaxed">
                    No extra workload. No formal reports. Just your honest perspective — from someone who knows what this work actually feels like.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Right - visual cards */}
          <FadeInSection delay={200}>
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#1D9E75]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative space-y-4">
                <div className="group bg-white rounded-2xl p-6 border border-[#04342C]/10 shadow-sm hover:shadow-lg hover:border-[#1D9E75]/30 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] flex items-center justify-center group-hover:bg-[#1D9E75] transition-colors">
                      <Smartphone className="w-7 h-7 text-[#1D9E75] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">Use</h3>
                      <p className="text-muted-foreground">Engage with the app regularly</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-[#04342C]/10 shadow-sm hover:shadow-lg hover:border-[#1D9E75]/30 transition-all lg:translate-x-8">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] flex items-center justify-center group-hover:bg-[#1D9E75] transition-colors">
                      <MessageSquare className="w-7 h-7 text-[#1D9E75] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">Share</h3>
                      <p className="text-muted-foreground">Tell us what works and what doesn&apos;t</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-[#04342C]/10 shadow-sm hover:shadow-lg hover:border-[#1D9E75]/30 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] flex items-center justify-center group-hover:bg-[#1D9E75] transition-colors">
                      <Calendar className="w-7 h-7 text-[#1D9E75] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">Connect</h3>
                      <p className="text-muted-foreground">Join monthly calls when able</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

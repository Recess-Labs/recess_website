"use client"

import { FadeInSection } from "@/components/fade-in-section"
import { MessageSquare, Smartphone, Calendar } from "lucide-react"

export function ChampionCommitment() {
  return (
    <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8D7AA0]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#AAF5D4]/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - content */}
          <FadeInSection>
            <div>
              <div className="inline-flex items-center gap-2 bg-[#8D7AA0]/10 border border-[#8D7AA0]/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#8D7AA0]" />
                <span className="text-xs font-sans font-semibold text-[#29285D] tracking-widest uppercase">
                  Your Commitment
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-8">
                More value than
                <br />
                <span className="bg-gradient-to-r from-[#8D7AA0] to-[#FFCCE5] bg-clip-text text-transparent">you think.</span>
              </h2>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8D7AA0] via-[#FFCCE5] to-[#AAF5D4] rounded-full" />
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
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-[#FFCCE5]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative space-y-4">
                <div className="group bg-white rounded-2xl p-6 border border-[#E8E0EC] shadow-sm hover:shadow-lg hover:border-[#8D7AA0]/30 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFCCE5]/30 flex items-center justify-center group-hover:bg-[#8D7AA0] transition-colors">
                      <Smartphone className="w-8 h-8 text-[#8D7AA0] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">Use</h3>
                      <p className="text-muted-foreground">Engage with the app regularly</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-[#E8E0EC] shadow-sm hover:shadow-lg hover:border-[#8D7AA0]/30 transition-all lg:translate-x-8">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#AAF5D4]/30 flex items-center justify-center group-hover:bg-[#8D7AA0] transition-colors">
                      <MessageSquare className="w-8 h-8 text-[#8D7AA0] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground">Share</h3>
                      <p className="text-muted-foreground">Tell us what works and what doesn&apos;t</p>
                    </div>
                  </div>
                </div>

                <div className="group bg-white rounded-2xl p-6 border border-[#E8E0EC] shadow-sm hover:shadow-lg hover:border-[#8D7AA0]/30 transition-all">
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-[#FFEDAC]/40 flex items-center justify-center group-hover:bg-[#8D7AA0] transition-colors">
                      <Calendar className="w-8 h-8 text-[#8D7AA0] group-hover:text-white transition-colors" />
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

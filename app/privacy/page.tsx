"use client"

import { useEffect } from "react"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"

export default function PrivacyPage() {
  useEffect(() => {
    // Load iubenda script
    const script = document.createElement("script")
    script.src = "https://cdn.iubenda.com/iubenda.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <PageWrapper>
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInSection>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
              Privacy Policy
            </h1>
            <div className="prose prose-lg max-w-none">
              <a 
                href="https://www.iubenda.com/privacy-policy/50662983" 
                className="iubenda-white no-brand iubenda-noiframe iubenda-embed iub-body-embed" 
                title="Privacy Policy"
              >
                Privacy Policy
              </a>
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageWrapper>
  )
}

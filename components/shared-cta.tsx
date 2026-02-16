import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SharedCTA() {
  return (
    <section className="bg-foreground py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground text-balance">
          If Trauma Exposure Is Structural in Your Workforce, Let{"'"}s Talk.
        </h2>
        <p className="mt-5 text-primary-foreground/60 leading-relaxed">
          In 30 minutes, you{"'"}ll see how the system works — and whether it fits your environment.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="rounded-full font-serif font-semibold px-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/get-started">Schedule a Free 30-Minute Strategy Call</Link>
          </Button>
          <a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/50 hover:text-primary-foreground underline underline-offset-4 transition-colors">
            Prefer to start with a diagnostic? Take the Frontline Team Emotional Health Index
          </a>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { FadeInSection } from "@/components/fade-in-section"

export function ImageBreak() {
  return (
    <section className="relative overflow-hidden">
      <FadeInSection>
        <div className="relative h-[360px] md:h-[480px]">
          <Image
            src="/images/frontline-workers.jpg"
            alt="Frontline healthcare and emergency workers supporting each other"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 max-w-3xl">
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background leading-tight text-balance">
                Your people are absorbing the weight of the work every day.
              </p>
              <p className="mt-4 text-lg md:text-xl text-background/70 leading-relaxed">
                Recess gives them, and you, a way to stabilize before it breaks.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  )
}

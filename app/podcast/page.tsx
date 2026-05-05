import type { Metadata } from "next"
import Image from "next/image"
import { PageWrapper } from "@/components/page-wrapper"
import { FadeInSection } from "@/components/fade-in-section"
import { SharedCTA } from "@/components/shared-cta"

export const metadata: Metadata = {
  title: "Flow With Recess Podcast | Leading When Crisis Is Part of the Job",
  description:
    "A leadership podcast exploring what it takes to build stable teams in environments where crisis is part of the job.",
}

const SPOTIFY_SHOW_ID = "2JDOlLsdj2PBoUjACmO7Wc"

const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/show/2JDOlLsdj2PBoUjACmO7Wc",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
  {
    name: "Apple Podcasts",
    href: "https://podcasts.apple.com/gb/podcast/finsweet-live/id1608610302",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c4.988 0 8.94 3.16 9.693 7.645.054.322-.188.618-.518.618h-.002a.526.526 0 01-.518-.434c-.66-3.96-4.166-6.8-8.655-6.8-4.49 0-7.996 2.84-8.655 6.8a.526.526 0 01-.518.434h-.002c-.33 0-.572-.296-.518-.618.753-4.486 4.705-7.645 9.693-7.645zm.006 3.002c3.352 0 6.142 2.098 6.82 5.194a.517.517 0 01-.497.638.506.506 0 01-.497-.396c-.576-2.626-2.963-4.404-5.826-4.404s-5.25 1.778-5.826 4.404a.506.506 0 01-.497.396.517.517 0 01-.497-.638c.678-3.096 3.468-5.194 6.82-5.194zm-.009 5.99c1.2 0 2.172.972 2.172 2.172 0 .574-.228 1.098-.588 1.488l-.006.396c0 .874-.708 1.584-1.584 1.584-.874 0-1.584-.708-1.584-1.584l.006-.396a2.166 2.166 0 01-.588-1.488c0-1.2.972-2.172 2.172-2.172z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/playlist?list=PLTXT6EV5UhT_4ATZ4flb2pjXb_GsYsRoe",
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function PodcastPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <FadeInSection>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              {/* Left - Podcast artwork */}
              <div className="w-full lg:w-5/12 shrink-0">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border/40">
                  <Image
                    src="/images/podcast-thumbnail.jpg"
                    alt="Flow With Recess Podcast - Hosted by Matt and Kelz"
                    width={600}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Right - Description */}
              <div className="w-full lg:w-7/12">
                <p className="text-sm font-medium text-accent tracking-wide uppercase mb-3">
                  Podcast
                </p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
                  Flow With Recess
                </h1>
                <p className="mt-2 text-lg font-serif text-muted-foreground italic">
                  Leading when crisis is part of the job.
                </p>

                <div className="mt-6 space-y-4 text-base text-muted-foreground leading-relaxed">
                  <p>
                    Flow With Recess is a leadership podcast exploring what it takes to build stable teams in environments where crisis is part of the job.
                  </p>
                  <p>
                    We speak with healthcare executives, school leaders, public safety chiefs, behavioral health innovators, and workforce strategists about trauma exposure, decision fatigue, retention pressure, and the systems required to protect the people who protect others.
                  </p>
                  <p className="font-medium text-foreground">
                    If you lead teams who absorb crisis for a living, this podcast is for you.
                  </p>
                </div>

                {/* Listen on */}
                <div className="mt-8">
                  <p className="text-sm font-medium text-foreground mb-3">
                    Listen now on
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {platforms.map((p) => (
                      <a
                        key={p.name}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-secondary text-foreground text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
                      >
                        {p.icon}
                        {p.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-20 bg-secondary/40 border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Latest Episodes
              </h2>
              <p className="mt-3 text-base text-muted-foreground max-w-xl mx-auto">
                New episodes every other week. Subscribe on your preferred platform to stay up to date.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="space-y-4">
              <iframe
                style={{ borderRadius: 12 }}
                src={`https://open.spotify.com/embed/show/${SPOTIFY_SHOW_ID}?utm_source=generator&theme=0`}
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Flow With Recess Podcast on Spotify"
              />
            </div>
          </FadeInSection>
        </div>
      </section>

      <SharedCTA />
    </PageWrapper>
  )
}

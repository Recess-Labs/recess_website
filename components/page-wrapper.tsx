import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { RegionBanner } from "@/components/regional/region-banner"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RegionBanner />
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </>
  )
}

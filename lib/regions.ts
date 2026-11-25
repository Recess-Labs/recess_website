export type RegionId = "us" | "uk" | "eu" | "intl"

export type Region = {
  id: RegionId
  path: string
  label: string
  name: string
  description: string
  locale: string
  currency: "USD" | "GBP" | "EUR"
  spelling: "us" | "uk"
  inName: string
  siteName: string
}

export const SITE_URL = "https://www.withrecess.com"

export const REGION_COOKIE = "recess_region"
export const GEO_COOKIE = "recess_geo"

export const REGIONS: Record<RegionId, Region> = {
  us: {
    id: "us",
    path: "/",
    label: "US",
    name: "United States & Americas",
    description: "Health systems, school districts, police, fire and EMS. Includes Canada, Latin America and the Caribbean.",
    locale: "en-US",
    currency: "USD",
    spelling: "us",
    inName: "the US",
    siteName: "US site",
  },
  uk: {
    id: "uk",
    path: "/uk",
    label: "UK",
    name: "United Kingdom",
    description: "NHS trusts, care homes, schools and academy trusts, police forces, fire and rescue, and ambulance services.",
    locale: "en-GB",
    currency: "GBP",
    spelling: "uk",
    inName: "the UK",
    siteName: "UK site",
  },
  eu: {
    id: "eu",
    path: "/eu",
    label: "EU",
    name: "Europe",
    description: "Health, care, education and emergency services across the EU and EEA.",
    locale: "en-IE",
    currency: "EUR",
    spelling: "uk",
    inName: "Europe",
    siteName: "Europe site",
  },
  intl: {
    id: "intl",
    path: "/intl",
    label: "Intl",
    name: "International",
    description: "Australia and New Zealand, the Middle East, Africa and Asia.",
    locale: "en-GB",
    currency: "USD",
    spelling: "uk",
    inName: "your region",
    siteName: "International site",
  },
}

export const REGION_ORDER: RegionId[] = ["us", "uk", "eu", "intl"]

const EUROPE = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU",
  "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "CH",
])

const AMERICAS = new Set([
  "US", "CA", "MX", "GT", "BZ", "SV", "HN", "NI", "CR", "PA", "CO", "VE", "EC", "PE", "BO", "BR", "PY", "UY",
  "AR", "CL", "GY", "SR", "CU", "DO", "HT", "JM", "TT", "BS", "BB", "PR", "AG", "DM", "GD", "KN", "LC", "VC",
])

export function regionForCountry(country: string | null | undefined): RegionId | null {
  if (!country) return null
  const cc = country.toUpperCase()
  if (cc === "GB" || cc === "UK" || cc === "IM" || cc === "JE" || cc === "GG") return "uk"
  if (EUROPE.has(cc)) return "eu"
  if (AMERICAS.has(cc)) return "us"
  return "intl"
}

export function isRegionId(value: unknown): value is RegionId {
  return typeof value === "string" && value in REGIONS
}

export function regionFromPath(pathname: string): RegionId | null {
  if (pathname === "/") return "us"
  const first = pathname.split("/")[1]
  if (first === "uk" || first === "eu" || first === "intl") return first
  return null
}

export const HOME_PATHS = new Set(["/", "/uk", "/eu", "/intl"])

export function hreflangAlternates(region: RegionId) {
  return {
    canonical: REGIONS[region].path,
    languages: {
      "en-US": "/",
      "en-GB": "/uk",
      en: "/eu",
      "en-IE": "/eu",
      "x-default": "/intl",
    },
  }
}

export function formatMoney(region: RegionId, amount: number) {
  const r = REGIONS[region]
  return new Intl.NumberFormat(r.locale, { style: "currency", currency: r.currency, maximumFractionDigits: 0 }).format(amount)
}

export function currencySymbol(region: RegionId) {
  const r = REGIONS[region]
  return (
    new Intl.NumberFormat(r.locale, { style: "currency", currency: r.currency })
      .formatToParts(0)
      .find((p) => p.type === "currency")?.value ?? "$"
  )
}

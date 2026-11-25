import { REGION_COOKIE, isRegionId, type RegionId } from "@/lib/regions"

export function readCookie(name: string) {
  if (typeof document === "undefined") return null
  const match = document.cookie.split("; ").find((c) => c.startsWith(`${name}=`))
  return match ? decodeURIComponent(match.split("=")[1]) : null
}

export function readRegionPref(): RegionId | null {
  const value = readCookie(REGION_COOKIE)
  return isRegionId(value) ? value : null
}

export function saveRegionPref(region: RegionId) {
  const secure = location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${REGION_COOKIE}=${region}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax${secure}`
}

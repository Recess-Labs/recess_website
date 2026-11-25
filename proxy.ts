import { NextResponse, type NextRequest } from "next/server"
import { GEO_COOKIE } from "@/lib/regions"

// Never redirects: it only records the visitor's country so the client banner can suggest a region.
export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  const override = request.nextUrl.searchParams.get("geo")
  const country = (override ?? request.headers.get("x-vercel-ip-country") ?? "").toUpperCase()

  if (/^[A-Z]{2}$/.test(country) && request.cookies.get(GEO_COOKIE)?.value !== country) {
    response.cookies.set(GEO_COOKIE, country, {
      path: "/",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  }
  return response
}

export const config = {
  matcher: ["/", "/uk", "/eu", "/intl"],
}

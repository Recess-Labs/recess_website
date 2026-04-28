import { NextResponse } from "next/server"
import { initializeApp, getApps, cert } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"

function getAdminApp() {
  if (getApps().length > 0) return getApps()[0]
  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  })
}

function getLocalDatetime(): string {
  const now = new Date()
  const pad = (n: number, w = 2) => String(n).padStart(w, "0")
  const year = now.getFullYear()
  const month = pad(now.getMonth() + 1)
  const day = pad(now.getDate())
  const hours = pad(now.getHours())
  const minutes = pad(now.getMinutes())
  const seconds = pad(now.getSeconds())
  const offsetMs = -now.getTimezoneOffset() * 60000
  const sign = offsetMs >= 0 ? "+" : "-"
  const absOffset = Math.abs(offsetMs)
  const offsetHours = pad(Math.floor(absOffset / 3600000))
  const offsetMinutes = pad(Math.floor((absOffset % 3600000) / 60000))
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${sign}${offsetHours}:${offsetMinutes}`
}

export async function PUT(request: Request) {
  const apiUrl = process.env.RECESS_API_URL
  if (!apiUrl) {
    return NextResponse.json({ error: "RECESS_API_URL not configured" }, { status: 500 })
  }

  // Verify Firebase ID token from Authorization header
  const authHeader = request.headers.get("Authorization")
  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Missing or invalid Authorization header" }, { status: 401 })
  }
  const idToken = authHeader.slice(7)

  let verifiedToken
  try {
    const adminApp = getAdminApp()
    verifiedToken = await getAuth(adminApp).verifyIdToken(idToken)
  } catch {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 })
  }

  const body = await request.json()

  // Forward the request to the Recess API
  const res = await fetch(`${apiUrl}/users`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${idToken}`,
      "X-Local-Datetime": getLocalDatetime(),
    },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    return NextResponse.json(
      { error: data?.error ?? "Failed to update user" },
      { status: res.status }
    )
  }

  return NextResponse.json(data, { status: res.status })
}

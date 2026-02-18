import { NextResponse } from "next/server"

const PIPEDRIVE_API_TOKEN = process.env.PIPEDRIVE_API_TOKEN
const PIPEDRIVE_BASE_URL = "https://api.pipedrive.com/v1"

async function pipedriveFetch(endpoint: string, body: Record<string, unknown>) {
  const res = await fetch(`${PIPEDRIVE_BASE_URL}${endpoint}?api_token=${PIPEDRIVE_API_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!data.success) {
    throw new Error(data.error || `Pipedrive API error on ${endpoint}`)
  }
  return data.data
}

export async function POST(request: Request) {
  try {
    if (!PIPEDRIVE_API_TOKEN) {
      return NextResponse.json({ error: "Pipedrive API token not configured" }, { status: 500 })
    }

    const { firstName, lastName, email, organization, whitePaperTitle } = await request.json()

    if (!firstName || !lastName || !email || !organization) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // 1. Create the Organization with label "WORKING"
    const org = await pipedriveFetch("/organizations", {
      name: organization,
      label: 8,
    })
    const orgId = org.id

    // 2. Create the Person with label "CARE LEADER", linked to the Organization
    const person = await pipedriveFetch("/persons", {
      name: `${firstName} ${lastName}`,
      first_name: firstName,
      last_name: lastName,
      email: [{ value: email, primary: true, label: "work" }],
      org_id: orgId,
      label: 8,
    })
    const personId = person.id

    // 3. Create the Lead linked to Person and Organization
    // with source channel "Whitepaper download"
    const lead = await pipedriveFetch("/leads", {
      title: `${whitePaperTitle} - ${firstName} ${lastName}`,
      person_id: personId,
      organization_id: orgId,
      channel: "Whitepaper download",
      channel_id: "whitepaper-download",
    })

    return NextResponse.json({
      success: true,
      personId,
      orgId,
      leadId: lead.id,
    })
  } catch (error) {
    console.error("Pipedrive API error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create Pipedrive records" },
      { status: 500 }
    )
  }
}

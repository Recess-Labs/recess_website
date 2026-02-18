import { NextResponse } from "next/server"

const PIPEDRIVE_API_TOKEN = process.env.PIPEDRIVE_API_TOKEN
const PIPEDRIVE_DOMAIN = "withrecess"
const PIPEDRIVE_BASE_URL = `https://${PIPEDRIVE_DOMAIN}.pipedrive.com/api/v1`

async function pipedrivePost(endpoint: string, body: Record<string, unknown>) {
  const res = await fetch(`${PIPEDRIVE_BASE_URL}${endpoint}?api_token=${PIPEDRIVE_API_TOKEN}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  if (!data.success) {
    console.error(`Pipedrive POST ${endpoint} failed:`, JSON.stringify(data))
    throw new Error(data.error || `Pipedrive API error on ${endpoint}`)
  }
  return data.data
}

async function pipedriveGet(endpoint: string) {
  const res = await fetch(`${PIPEDRIVE_BASE_URL}${endpoint}?api_token=${PIPEDRIVE_API_TOKEN}`)
  const data = await res.json()
  if (!data.success) {
    throw new Error(data.error || `Pipedrive GET error on ${endpoint}`)
  }
  return data.data
}

// Look up label ID by name for a given entity type
async function findLabelId(entityType: "person" | "organization", labelName: string): Promise<number | undefined> {
  try {
    const fields = await pipedriveGet(`/${entityType}Fields`)
    const labelField = fields?.find((f: { key: string }) => f.key === "label")
    if (labelField?.options) {
      const match = labelField.options.find(
        (opt: { label: string }) => opt.label.toUpperCase() === labelName.toUpperCase()
      )
      return match?.id
    }
  } catch (e) {
    console.error(`Failed to look up ${entityType} label "${labelName}":`, e)
  }
  return undefined
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

    // Look up label IDs by name
    const [personLabelId, orgLabelId] = await Promise.all([
      findLabelId("person", "CARE LEADER"),
      findLabelId("organization", "WORKING"),
    ])

    // 1. Create the Organization with label "WORKING"
    const orgBody: Record<string, unknown> = { name: organization }
    if (orgLabelId) orgBody.label = orgLabelId
    const org = await pipedrivePost("/organizations", orgBody)
    const orgId = org.id

    // 2. Create the Person with label "CARE LEADER", linked to the Organization
    const personBody: Record<string, unknown> = {
      name: `${firstName} ${lastName}`,
      first_name: firstName,
      last_name: lastName,
      email: [{ value: email, primary: true, label: "work" }],
      org_id: orgId,
    }
    if (personLabelId) personBody.label = personLabelId
    const person = await pipedrivePost("/persons", personBody)
    const personId = person.id

    // 3. Create the Lead linked to Person and Organization
    // Source channel set to "Whitepaper download"
    const lead = await pipedrivePost("/leads", {
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

import { NextResponse } from "next/server"

const PIPEDRIVE_DOMAIN = "withrecess"
const PIPEDRIVE_BASE_URL = `https://${PIPEDRIVE_DOMAIN}.pipedrive.com/api/v1`

function getApiToken() {
  return process.env.PIPEDRIVE_API_TOKEN
}

async function pipedrivePost(endpoint: string, body: Record<string, unknown>) {
  const token = getApiToken()
  const url = `${PIPEDRIVE_BASE_URL}${endpoint}?api_token=${token}`
  console.log(`[v0] Pipedrive POST ${endpoint}`, JSON.stringify(body))
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const data = await res.json()
  console.log(`[v0] Pipedrive POST ${endpoint} response:`, JSON.stringify(data))
  if (!data.success) {
    throw new Error(data.error || `Pipedrive API error on ${endpoint}`)
  }
  return data.data
}

async function pipedriveGet(endpoint: string) {
  const token = getApiToken()
  const url = `${PIPEDRIVE_BASE_URL}${endpoint}?api_token=${token}`
  console.log(`[v0] Pipedrive GET ${endpoint}`)
  const res = await fetch(url)
  const data = await res.json()
  console.log(`[v0] Pipedrive GET ${endpoint} response success:`, data.success)
  if (!data.success) {
    throw new Error(data.error || `Pipedrive GET error on ${endpoint}`)
  }
  return data.data
}

// Look up a field option ID by name for a given entity type and field key
async function findFieldOptionId(
  entityType: "person" | "organization" | "deal" | "lead",
  fieldKey: string,
  optionName: string,
): Promise<number | undefined> {
  try {
    const fields = await pipedriveGet(`/${entityType}Fields`)
    const field = fields?.find((f: { key: string }) => f.key === fieldKey)
    if (field?.options) {
      console.log(`[v0] ${entityType} "${fieldKey}" options:`, JSON.stringify(field.options))
      const match = field.options.find(
        (opt: { label: string }) => opt.label.toUpperCase() === optionName.toUpperCase()
      )
      console.log(`[v0] ${entityType} "${fieldKey}" option "${optionName}" matched ID:`, match?.id)
      return match?.id
    }
  } catch (e) {
    console.error(`[v0] Failed to look up ${entityType} field "${fieldKey}" option "${optionName}":`, e)
  }
  return undefined
}

export async function POST(request: Request) {
  const token = getApiToken()
  console.log(`[v0] Pipedrive API route called. Token exists: ${!!token}, Token length: ${token?.length ?? 0}`)

  try {
    if (!token) {
      console.error("[v0] PIPEDRIVE_API_TOKEN env var is missing")
      return NextResponse.json({ error: "Pipedrive API token not configured" }, { status: 500 })
    }

    const body = await request.json()
    const { firstName, lastName, email, organization, whitePaperTitle } = body
    console.log("[v0] Request body:", JSON.stringify(body))

    if (!firstName || !lastName || !email || !organization) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Look up label IDs and source name by name
    console.log("[v0] Looking up field option IDs...")
    const [personLabelId, orgLabelId] = await Promise.all([
      findFieldOptionId("person", "label", "CARE LEADER"),
      findFieldOptionId("organization", "label", "WORKING"),
    ])
    console.log("[v0] IDs - Person label:", personLabelId, "Org label:", orgLabelId)

    // 1. Create the Organization
    const orgBody: Record<string, unknown> = { name: organization }
    if (orgLabelId) orgBody.label = orgLabelId
    const org = await pipedrivePost("/organizations", orgBody)
    const orgId = org.id
    console.log("[v0] Created org:", orgId)

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
    console.log("[v0] Created person:", personId)

    // 3. Create the Lead with title "{company name} Lead"
    // Set source_name to "Whitepaper download"
    const leadBody: Record<string, unknown> = {
      title: `${organization} Lead`,
      person_id: personId,
      organization_id: orgId,
      source_name: "Whitepaper download",
    }

    const lead = await pipedrivePost("/leads", leadBody)
    console.log("[v0] Created lead:", lead.id)

    return NextResponse.json({
      success: true,
      personId,
      orgId,
      leadId: lead.id,
    })
  } catch (error) {
    console.error("[v0] Pipedrive API error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to create Pipedrive records" },
      { status: 500 }
    )
  }
}

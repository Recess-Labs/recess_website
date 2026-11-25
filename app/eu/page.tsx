import { RegionalHome, regionalMetadata } from "@/components/regional/regional-home"

export const metadata = regionalMetadata("eu")

export default function EuHomePage() {
  return <RegionalHome region="eu" />
}

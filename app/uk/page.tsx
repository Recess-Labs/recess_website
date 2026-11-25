import { RegionalHome, regionalMetadata } from "@/components/regional/regional-home"

export const metadata = regionalMetadata("uk")

export default function UkHomePage() {
  return <RegionalHome region="uk" />
}

import { RegionalHome, regionalMetadata } from "@/components/regional/regional-home"

export const metadata = regionalMetadata("us")

export default function HomePage() {
  return <RegionalHome region="us" />
}

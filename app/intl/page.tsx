import { RegionalHome, regionalMetadata } from "@/components/regional/regional-home"

export const metadata = regionalMetadata("intl")

export default function IntlHomePage() {
  return <RegionalHome region="intl" />
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms and Conditions | Recess",
  description:
    "Read our terms and conditions to understand the rules and guidelines for using Recess services.",
  openGraph: {
    title: "Terms and Conditions | Recess",
    description:
      "Read our terms and conditions for using Recess services.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Recess",
  description:
    "Read our privacy policy to understand how Recess collects, uses, and protects your personal information.",
  openGraph: {
    title: "Privacy Policy | Recess",
    description:
      "Read our privacy policy to understand how Recess handles your data.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

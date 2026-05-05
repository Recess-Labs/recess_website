import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thank You for Your Feedback | Recess",
  description:
    "Thank you for participating in our NPS survey. Your feedback helps us build better trauma-informed support tools for frontline workers.",
  openGraph: {
    title: "Thank You for Your Feedback | Recess",
    description:
      "Thank you for participating in our NPS survey. Your feedback helps us improve.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Recess - Reset Your Emotional Patterns" }],
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function NPSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

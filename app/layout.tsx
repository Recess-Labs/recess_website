import type { Metadata, Viewport } from "next"
import { Rubik, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { IntercomProvider } from "@/components/intercom-provider"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata: Metadata = {
  title: {
    default: "Vicarious Trauma & Compassion Fatigue Relief | Trauma-Informed Training | Recess",
    template: "%s | Recess",
  },
  description:
    "Get fast, effective relief for vicarious trauma, secondary trauma, and compassion fatigue. Recess provides trauma-informed training and neuroscience-backed tools for healthcare, education, and public safety professionals.",
  keywords: [
    "vicarious trauma",
    "secondary trauma",
    "compassion fatigue",
    "trauma-informed training",
    "burnout prevention",
    "workforce stability",
    "emotional resilience",
    "frontline worker support",
    "trauma exposure",
    "nervous system regulation",
  ],
  authors: [{ name: "Recess" }],
  creator: "Recess",
  publisher: "Recess",
  metadataBase: new URL("https://withrecess.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://withrecess.com",
    siteName: "Recess",
    title: "Vicarious Trauma & Compassion Fatigue Relief | Trauma-Informed Training | Recess",
    description:
      "Get fast, effective relief for vicarious trauma, secondary trauma, and compassion fatigue. Recess provides trauma-informed training and neuroscience-backed tools for healthcare, education, and public safety professionals.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recess - Reset Your Emotional Patterns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vicarious Trauma & Compassion Fatigue Relief | Trauma-Informed Training | Recess",
    description:
      "Get fast, effective relief for vicarious trauma, secondary trauma, and compassion fatigue. Recess provides trauma-informed training and neuroscience-backed tools.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#29285D",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <IntercomProvider />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

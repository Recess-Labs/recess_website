import type { Metadata, Viewport } from "next"
import { Rubik, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { IntercomProvider } from "@/components/intercom-provider"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" })
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })

export const metadata: Metadata = {
  title: {
    default: "Recess | Emotional Infrastructure for Trauma-Exposed Workforces",
    template: "%s | Recess",
  },
  description:
    "Recess helps healthcare, education, and public safety organizations detect trauma exposure early and stabilize teams before it leads to turnover, extended leave, or operational disruption.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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

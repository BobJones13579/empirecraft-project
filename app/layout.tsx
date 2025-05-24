import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Empirecraft Learning Engine v2",
  description:
    "Your personal mental gym for synthesizing knowledge and expanding strategic thinking through AI-powered exploration.",
  keywords: ["learning", "strategy", "mental gym", "knowledge synthesis", "AI", "thinking"],
  authors: [{ name: "Empirecraft" }],
  creator: "Empirecraft",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://empirecraft.app",
    title: "Empirecraft Learning Engine v2",
    description: "Your personal mental gym for synthesizing knowledge and expanding strategic thinking.",
    siteName: "Empirecraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Empirecraft Learning Engine v2",
    description: "Your personal mental gym for synthesizing knowledge and expanding strategic thinking.",
    creator: "@empirecraft",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <div className="min-h-screen bg-background font-sans">
            <Navigation />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

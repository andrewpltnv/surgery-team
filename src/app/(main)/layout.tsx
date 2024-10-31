import type { Metadata } from "next"
import "../globals.css"
import { geistSans, geistMono } from "../../fonts"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const ogImage = [{ url: "/app/og", type: "image/png", width: 1200, height: 630 }]

export function generateMetadata(): Metadata {
  return {
    title: "103 Surgery",
    description: "103 Surgery team Kyiv",
    openGraph: {
      images: ogImage,
      title: "103 Surgery",
    },
    twitter: {
      images: ogImage,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col justify-between scroll-smooth font-sans antialiased`}
        suppressHydrationWarning
        itemScope
        itemType="http://schema.org/WebSite"
      >
        <Header />
        {children}
        <Footer />
        <GoogleTagManager gtmId="GTM-WJ6VVHHV" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

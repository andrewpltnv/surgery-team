import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { geistSans, geistMono } from "../fonts"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleTagManager } from "@next/third-parties/google"
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "103 Surgery",
  description: "103 Surgery team Kyiv",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ua">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col justify-between scroll-smooth font-sans antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <GoogleTagManager gtmId="GTM-WJ6VVHHV" />
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  )
}

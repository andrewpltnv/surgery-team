import { geistMono, geistSans } from "@/fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col justify-between scroll-smooth font-sans antialiased`}
        suppressHydrationWarning
        itemScope
        itemType="http://schema.org/WebSite"
      >
        {children}
      </body>
    </html>
  )
}

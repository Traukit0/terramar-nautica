import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Terramar Náutica - Próximamente | Especialistas en Mantenimiento Naval",
  description:
    "Especialistas en mantenimiento y reparaciones de veleros, yates y artefactos navales. Mecánica marítima profesional. Próximamente.",
  generator: "v0.app",
  keywords: "terramar náutica, mantenimiento naval, reparaciones veleros, yates, mecánica marítima, Chile",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

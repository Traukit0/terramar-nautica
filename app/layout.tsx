import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Terramar Náutica - Mantenimiento y Servicios para Embarcaciones",
  description:
    "Terramar Náutica ofrece mantenimiento, reparación y traslado profesional de embarcaciones: técnicos certificados, experiencia en Yanmar, Volvo, Cummins y asistencia integral.",
  keywords: [
    "mantenimiento náutico",
    "reparación motores marinos",
    "traslado embarcaciones",
    "Yanmar",
    "Volvo",
    "Cummins",
  ],
  authors: [{ name: "Terramar Náutica" }],
  creator: "Terramar Náutica",
  publisher: "Terramar Náutica",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://terramar-nautica.com",
    title: "Terramar Náutica - Mantenimiento Profesional de Embarcaciones",
    description:
      "Servicios integrales para embarcaciones: mantenimiento, reparaciones, traslados y asistencia técnica especializada.",
    siteName: "Terramar Náutica",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terramar Náutica - Servicios Náuticos Profesionales",
    description: "Mantenimiento, reparación y traslado profesional de embarcaciones con técnicos certificados.",
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "Master Sport FC - Academia de Fútbol Profesional en Lima | Escuela de Fútbol Santa Anita y La Molina",
  description:
    "Academia de fútbol profesional en Lima Perú. Entrenamiento de fútbol para niños, jóvenes y adultos. Sedes en Santa Anita y La Molina. Clases de fútbol, escuela de fútbol, formación deportiva, técnicos especializados. ¡Únete a Master Sport FC y forma parte de nuestra familia futbolística!",
  keywords: [
    "academia de fútbol Lima",
    "escuela de fútbol Perú",
    "clases de fútbol Lima",
    "entrenamiento fútbol profesional",
    "fútbol Santa Anita",
    "fútbol La Molina",
    "academia deportiva Lima",
    "escuela de fútbol para niños",
    "entrenamiento fútbol juvenil",
    "clases de fútbol adultos",
    "Master Sport FC",
    "formación futbolística",
    "técnicos de fútbol especializados",
    "canchas de fútbol Lima",
    "deporte Lima",
    "fútbol profesional Perú",
    "academia fútbol Santa Anita",
    "academia fútbol La Molina",
    "inscripciones fútbol Lima",
    "convocatoria fútbol",
    "talento futbolístico",
    "desarrollo deportivo",
    "metodología fútbol profesional",
    "entrenadores certificados",
    "Sport Plaza Santa Anita",
    "Deportop La Molina",
    "fútbol competitivo",
    "formación integral deportiva",
  ],
  authors: [{ name: "Master Sport FC" }],
  creator: "Master Sport FC",
  publisher: "Master Sport FC",
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
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://mastersportfc.com",
    siteName: "Master Sport FC",
    title: "Master Sport FC - Academia de Fútbol Profesional en Lima",
    description:
      "Academia de fútbol profesional en Lima. Entrenamiento especializado para todas las edades. Sedes en Santa Anita y La Molina. ¡Únete a la familia Master Sport FC!",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Master Sport FC - Academia de Fútbol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Sport FC - Academia de Fútbol Profesional en Lima",
    description:
      "Academia de fútbol profesional en Lima. Entrenamiento especializado para todas las edades. ¡Únete a Master Sport FC!",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo.jpg", type: "image/jpeg" },
    ],
    apple: [{ url: "/images/logo.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mastersportfc.com",
  },
  category: "sports",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/logo.jpg" />
        <meta name="theme-color" content="#5a1428" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-[#5a1428]">
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}

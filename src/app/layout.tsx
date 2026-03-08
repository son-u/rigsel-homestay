import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFAB from "@/components/layout/whatsapp-fab";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://rigselhomestay.in"),
  title: {
    default: "Rigsel Homestay — Serene Village Escape in Kaffer Gaon, Kalimpong",
    template: "%s | Rigsel Homestay",
  },
  description:
    "Experience authentic Himalayan village hospitality at Rigsel Homestay. A peaceful retreat in Kaffer Gaon surrounded by misty mountains, nature, and Gorkha culture.",
  openGraph: {
    siteName: "Rigsel Homestay",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@rigselhomestay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden" data-scroll-behavior="smooth">
      <body className={`${poppins.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <WhatsAppFAB />
        <Footer />
        <GoogleAnalytics gaId="G-J21VL5HEFN" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "Rigsel Homestay",
              "description": "Authentic Himalayan village homestay in Kaffer Gaon, Kalimpong, West Bengal. Hosted by Minu Tamang & Mingma Tamang.",
              "url": "https://rigselhomestay.in",
              "image": "https://rigselhomestay.in/rigsel-homestay-kaffer-gaon-kalimpong.webp",
              "telephone": "+919064894704",
              "email": "rigselhomestay@gmail.com",
              "priceRange": "₹₹",
              "starRating": { "@type": "Rating", "ratingValue": "4.9", "bestRating": "5" },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kaffer Gram Panchayat Gaon, Kaffer Gaon, Lolaygaon",
                "addressLocality": "Kalimpong",
                "addressRegion": "West Bengal",
                "postalCode": "734314",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "26.9744",
                "longitude": "88.5830"
              },
              "sameAs": [
                "https://www.facebook.com/share/1Akjx2Hi4n/"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

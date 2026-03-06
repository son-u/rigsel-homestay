import type { Metadata } from "next";
import { Poppins, Cormorant_Garamond } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsAppFAB from "@/components/layout/whatsapp-fab";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://rigselhomestay.in"),
  title: "Rigsel Homestay - Serene Village Escape in Kaffer Gaon, Kalimpong",
  description:
    "Experience authentic Himalayan village hospitality at Rigsel Homestay. A peaceful retreat in Kaffer Gaon surrounded by misty mountains, nature, and Gorkha culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${poppins.variable} ${cormorant.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}>
        <LenisProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <WhatsAppFAB />
          <Footer />
        </LenisProvider>
        <GoogleAnalytics gaId="G-J21VL5HEFN" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import HomePageClient from "@/components/pages/home-page-client";

export const metadata: Metadata = {
  title: "Serene Village Escape in Kaffer Gaon, Kalimpong",
  description:
    "Experience authentic Himalayan village hospitality at Rigsel Homestay. A peaceful retreat in Kaffer Gaon surrounded by misty mountains, nature, and Gorkha culture.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rigsel Homestay — Serene Village Escape in Kaffer Gaon, Kalimpong",
    description:
      "Hosted by Minu & Mingma Tamang. Wake up to panoramic valley views, savour home-cooked Gorkha meals, and reconnect with nature in the serene forests of Kaffer Gaon.",
    images: ["/rigsel-homestay-kaffer-gaon-kalimpong.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rigsel Homestay — Kaffer Gaon, Kalimpong",
    description:
      "Authentic Himalayan village hospitality. Panoramic valley views, organic meals, and mountain peace at Rigsel Homestay.",
    images: ["/rigsel-homestay-kaffer-gaon-kalimpong.webp"],
  },
};

export default function Home() {
  return <HomePageClient />;
}

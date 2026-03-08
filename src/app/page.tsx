import type { Metadata } from "next";
import HomePageClient from "@/components/pages/home-page-client";

export const metadata: Metadata = {
  title: "Rigsel Homestay | Serene Village Escape in Kaffer Gaon",
  description:
    "Experience authentic Himalayan hospitality at Rigsel Homestay. A peaceful retreat in Kaffer Gaon, Kalimpong with panoramic views and Gorkhali meals.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Rigsel Homestay — Serene Village Escape in Kaffer Gaon, Kalimpong",
    description:
      "Hosted by Minu & Mingma Tamang. Wake up to panoramic valley views, savour home-cooked Gorkha meals, and reconnect with nature in the serene forests of Kaffer Gaon.",
    images: ["/kalimpong-homestay-sunrise-valley-view.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rigsel Homestay — Kaffer Gaon, Kalimpong",
    description:
      "Authentic Himalayan village hospitality. Panoramic valley views, organic meals, and mountain peace at Rigsel Homestay.",
    images: ["/kalimpong-homestay-sunrise-valley-view.webp"],
  },
};

export default function Home() {
  return <HomePageClient />;
}

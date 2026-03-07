import type { Metadata } from "next";
import ExplorePageClient from "@/components/pages/explore-page-client";

export const metadata: Metadata = {
    title: "Explore Nearby Attractions",
    description:
        "Discover 6 must-visit attractions near Rigsel Homestay — Deolo Hill, Durpin Dara, Lolegaon, Relli Falls, Lamahatta Eco Park, and Neora Valley National Park.",
    alternates: { canonical: "/explore" },
    openGraph: {
        title: "Explore Nearby Attractions | Rigsel Homestay",
        description:
            "Make Rigsel Homestay your base camp. Explore Deolo Hill, Durpin Dara, Lolegaon, Relli Falls, Lamahatta, and Neora Valley from Kaffer Gaon, Kalimpong.",
        images: ["/explore-hero.webp"],
    },
};

export default function ExplorePage() {
    return <ExplorePageClient />;
}

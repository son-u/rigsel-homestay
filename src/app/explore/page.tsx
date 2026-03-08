import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageSkeleton } from "@/components/ui/section-skeleton";

const ExplorePageClient = dynamic(
    () => import("@/components/pages/explore-page-client"),
    { loading: () => <PageSkeleton /> }
);

export const metadata: Metadata = {
    title: "Explore Nearby Attractions",
    description:
        "Discover 6 must-visit attractions near Rigsel Homestay — Deolo Hill, Durpin Dara, Lolegaon, Relli Falls, Lamahatta Eco Park, and Neora Valley National Park.",
    alternates: { canonical: "/explore" },
    openGraph: {
        title: "Explore Nearby Attractions | Rigsel Homestay",
        description:
            "Make Rigsel Homestay your base camp. Explore Deolo Hill, Durpin Dara, Lolegaon, Relli Falls, Lamahatta, and Neora Valley from Kaffer Gaon, Kalimpong.",
        images: ["/kaffer-gaon-lush-green-hills.webp"],
    },
};

export default function ExplorePage() {
    return <ExplorePageClient />;
}

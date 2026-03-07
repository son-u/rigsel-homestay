import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageSkeleton } from "@/components/ui/section-skeleton";

const GalleryPageClient = dynamic(
    () => import("@/components/pages/gallery-page-client"),
    { loading: () => <PageSkeleton /> }
);

export const metadata: Metadata = {
    title: "Photo Gallery",
    description:
        "Explore our photo gallery — scenic valley views, cozy mountain rooms, farm-fresh meals, and life in Kaffer Gaon at Rigsel Homestay, Kalimpong.",
    alternates: { canonical: "/gallery" },
    openGraph: {
        title: "Photo Gallery | Rigsel Homestay",
        description:
            "A visual journey through the landscapes, rooms, and flavors of Rigsel Homestay in Kaffer Gaon, Kalimpong.",
        images: ["/rigsel-homestay-kaffer-gaon-gallery-hero.webp"],
    },
};

export default function GalleryPage() {
    return <GalleryPageClient />;
}

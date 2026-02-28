import type { Metadata } from "next";
import GalleryPageClient from "@/components/pages/gallery-page-client";

export const metadata: Metadata = {
    title: "Photo Gallery | Rigsel Homestay, Kaffer Gaon, Kalimpong",
    description:
        "Explore our photo gallery — scenic valley views, cozy mountain rooms, farm-fresh meals, and life in Kaffer Gaon at Rigsel Homestay, Kalimpong.",
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

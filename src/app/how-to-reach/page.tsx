import type { Metadata } from "next";
import HowToReachClient from "@/components/pages/how-to-reach-client";

export const metadata: Metadata = {
    title: "How to Reach Us",
    description:
        "Directions to Rigsel Homestay in Kaffer Gaon, Kalimpong. Nearest railway station is NJP (~110 km), nearest airport is Bagdogra (~115 km). Cab arrangement available on request.",
    alternates: { canonical: "/how-to-reach" },
    openGraph: {
        title: "How to Reach Rigsel Homestay | Kaffer Gaon, Kalimpong",
        description:
            "Find your way to Rigsel Homestay in Kaffer Gaon, Kalimpong. Routes from NJP, Bagdogra, and Kalimpong Town — with scenic mountain roads all the way.",
        images: ["/rigsel-homestay-kaffer-gaon-kalimpong-how-to-reach.webp"],
    },
};

export default function HowToReachPage() {
    return <HowToReachClient />;
}

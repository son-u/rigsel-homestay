import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageSkeleton } from "@/components/ui/section-skeleton";

const ContactPageClient = dynamic(
    () => import("@/components/pages/contact-page-client"),
    { loading: () => <PageSkeleton /> }
);

export const metadata: Metadata = {
    title: "Contact & Booking",
    description:
        "Book your stay at Rigsel Homestay in Kaffer Gaon, Kalimpong. Send a WhatsApp booking inquiry, call us directly, or email us. No advance booking amount required.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Contact & Booking | Rigsel Homestay",
        description:
            "Reach out to Rigsel Homestay in Kaffer Gaon, Kalimpong — no advance booking required. Book directly via WhatsApp.",
        images: ["/rigsel-homestay-warm-evening-view.webp"],
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}

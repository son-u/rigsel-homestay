import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/contact-page-client";

export const metadata: Metadata = {
    title: "Contact & Booking | Rigsel Homestay, Kaffer Gaon, Kalimpong",
    description:
        "Book your stay at Rigsel Homestay in Kaffer Gaon, Kalimpong. Send a WhatsApp booking inquiry, call us directly, or email us. No advance booking amount required.",
    openGraph: {
        title: "Contact & Booking | Rigsel Homestay",
        description:
            "Reach out to Rigsel Homestay in Kaffer Gaon, Kalimpong — no advance booking required. Book directly via WhatsApp.",
        images: ["/rigsel-homestay-kaffer-gaon-kalimpong-contact-hero.webp"],
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}

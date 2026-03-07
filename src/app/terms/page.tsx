import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Terms of Service",
    description:
        "Terms of Service for Rigsel Homestay. Understand the conditions that apply when booking or visiting our homestay in Kaffer Gaon, Kalimpong.",
    alternates: { canonical: "/terms" },
};

const LAST_UPDATED = "March 2026";

const sections = [
    {
        title: "Bookings & Reservations",
        content:
            "All reservations are confirmed only after direct communication (phone or WhatsApp) with the homestay and receipt of an advance booking amount as agreed. We reserve the right to decline any booking at our discretion.",
    },
    {
        title: "Check‑In & Check‑Out",
        content:
            "Standard check-in is from 12:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be arranged subject to availability and will be communicated at the time of booking.",
    },
    {
        title: "Cancellation & Refunds",
        content:
            "Cancellations must be communicated directly via phone or WhatsApp. Refund eligibility depends on the notice period given: cancellations made 7 or more days before arrival may receive a partial refund; shorter notice periods are non-refundable. Full details will be shared at the time of booking confirmation.",
    },
    {
        title: "Guest Conduct",
        content:
            "Guests are expected to respect the homestay property, local community, and natural surroundings. Noise levels should be kept considerate between 10 PM and 7 AM. Damage to property will be charged to the responsible guest.",
    },
    {
        title: "Meals & Amenities",
        content:
            "Meal options and availability are communicated at the time of booking. Rigsel Homestay reserves the right to alter meal arrangements due to local supply conditions. Any special dietary requirements must be mentioned in advance.",
    },
    {
        title: "Liability",
        content:
            "Rigsel Homestay is not responsible for any loss, theft, injury, or accidents that occur on or off the property. Guests participate in any excursion or outdoor activity at their own risk. We strongly recommend travel insurance.",
    },
    {
        title: "Website Use",
        content:
            "The content on this website is provided for general information purposes. We make no guarantees regarding the accuracy of third-party information (maps, travel distances, attraction details). Prices and availability displayed are indicative and subject to change.",
    },
    {
        title: "Changes to These Terms",
        content:
            "We may update these Terms of Service from time to time. The latest version will always be available on this page. Continued use of our services after changes constitutes acceptance of the revised terms.",
    },
    {
        title: "Contact Us",
        content: null,
        isContact: true,
    },
];

export default function TermsOfServicePage() {
    return (
        <main className="bg-[#F7F3EE] min-h-screen">
            {/* Hero Banner */}
            <div className="bg-[#1A1F1C] pt-32 sm:pt-36 pb-20 sm:pb-24 text-center">
                <p
                    className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full mb-4"
                    style={{ background: "rgba(13,165,233,0.1)", border: "1px solid rgba(13,165,233,0.25)" }}
                >
                    Legal
                </p>
                <h1 className="font-serif italic font-medium text-4xl sm:text-5xl text-white mt-2">
                    Terms of Service
                </h1>
                <p className="text-white/45 text-sm mt-4 font-light">
                    Last updated: {LAST_UPDATED}
                </p>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16 sm:py-20">
                <p className="text-foreground/70 leading-relaxed mb-12 text-base">
                    By visiting, contacting, or booking with <span className="font-semibold text-foreground">Rigsel Homestay</span>, you agree to the following terms. Please read them carefully. If you have any questions, don't hesitate to get in touch with us directly.
                </p>

                <div className="flex flex-col gap-10">
                    {sections.map((section) =>
                        section.isContact ? (
                            <div key={section.title} className="border-t border-border/40 pt-10">
                                <h2 className="font-serif italic font-semibold text-2xl text-foreground mb-3">
                                    {section.title}
                                </h2>
                                <p className="text-foreground/70 leading-relaxed">
                                    For any questions regarding these terms, please reach out to us at{" "}
                                    <a
                                        href="mailto:rigselhomestay@gmail.com"
                                        className="text-primary font-medium hover:underline"
                                    >
                                        rigselhomestay@gmail.com
                                    </a>{" "}
                                    or call us on{" "}
                                    <a
                                        href="tel:+919064894704"
                                        className="text-primary font-medium hover:underline"
                                    >
                                        +91 90648 94704
                                    </a>
                                    .
                                </p>
                            </div>
                        ) : (
                            <div key={section.title}>
                                <h2 className="font-serif italic font-semibold text-2xl text-foreground mb-3">
                                    {section.title}
                                </h2>
                                <p className="text-foreground/70 leading-relaxed">{section.content}</p>
                            </div>
                        )
                    )}
                </div>


            </div>
        </main>
    );
}

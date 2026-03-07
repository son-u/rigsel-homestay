import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy Policy for Rigsel Homestay. Learn how we collect, use, and protect your personal information when you contact or book with us.",
    alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "March 2026";

const sections = [
    {
        title: "Information We Collect",
        content:
            "When you contact us or make a booking inquiry, we may collect your name, phone number, and email address. We do not collect sensitive personal or financial data through our website.",
    },
    {
        title: "How We Use Your Information",
        content:
            "We use your contact details solely to respond to booking inquiries, confirm reservations, and provide information about our homestay. We do not use your information for marketing without your consent.",
    },
    {
        title: "Sharing of Information",
        content:
            "We do not sell, rent, or share your personal information with any third parties. Your details remain strictly within Rigsel Homestay.",
    },
    {
        title: "Cookies",
        content:
            "Our website may use basic cookies (e.g., for analytics via Google Analytics) to understand visitor traffic. No personally identifiable information is collected through cookies.",
    },
    {
        title: "Data Security",
        content:
            "We take reasonable steps to keep any information you share with us secure. As a small family-run homestay, we handle all inquiries personally and discreetly.",
    },
    {
        title: "Third‑Party Links",
        content:
            "Our site may contain links to third-party platforms (e.g., Google Maps, WhatsApp). We are not responsible for the privacy practices of those external services.",
    },
    {
        title: "Your Rights",
        content:
            "You may contact us at any time to request access to, correction of, or deletion of any personal information you have shared with us.",
    },
    {
        title: "Contact Us",
        content: null,
        isContact: true,
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-[#F7F3EE] min-h-screen">
            {/* Hero Banner */}
            <div className="bg-[#1A1F1C] pt-32 sm:pt-36 pb-20 sm:pb-24 text-center">
                <p className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full mb-4"
                    style={{ background: "rgba(13,165,233,0.1)", border: "1px solid rgba(13,165,233,0.25)" }}
                >
                    Legal
                </p>
                <h1 className="font-serif italic font-medium text-4xl sm:text-5xl text-white mt-2">
                    Privacy Policy
                </h1>
                <p className="text-white/45 text-sm mt-4 font-light">
                    Last updated: {LAST_UPDATED}
                </p>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-16 sm:py-20">
                <p className="text-foreground/70 leading-relaxed mb-12 text-base">
                    At <span className="font-semibold text-foreground">Rigsel Homestay</span>, your privacy matters to us. This policy explains what information we collect and how we use it. We keep things simple — this is a small, family-run homestay and we treat your data with the same care we give our guests.
                </p>

                <div className="flex flex-col gap-10">
                    {sections.map((section) =>
                        section.isContact ? (
                            <div key={section.title} className="border-t border-border/40 pt-10">
                                <h2 className="font-serif italic font-semibold text-2xl text-foreground mb-3">
                                    {section.title}
                                </h2>
                                <p className="text-foreground/70 leading-relaxed">
                                    If you have any questions about this Privacy Policy, please reach out to us at{" "}
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

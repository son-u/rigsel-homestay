"use client";

import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function WhatsAppFAB() {
    const phoneNumber = `91${siteConfig.contact.primary}`;
    const message = "Hi, I'd like to inquire about a stay at Rigsel Homestay";
    const encodedMessage = encodeURIComponent(message);

    const handleWhatsAppClick = () => {
        // We are opening it in a new tab to avoid breaking the user's flow
        // On mobile, this will usually prompt to open the WhatsApp app
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
            aria-label="Contact us on WhatsApp"
        >
            <FaWhatsapp className="h-7 w-7" />
        </button>
    );
}

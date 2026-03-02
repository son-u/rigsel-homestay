"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/site";
import { MdArrowForwardIos } from "react-icons/md";

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = `91${siteConfig.contact.primary}`;

const ROOMS = [
    {
        id: 1,
        name: "Double Bed Room",
        price: "₹1,500",
        priceNote: "per person / night",
        description:
            "Warm wooden interiors bathed in natural light, with panoramic Kalimpong hill views framed by wide windows. Perfect for couples or solo travellers seeking quiet mountain solitude.",
        whatsappMsg:
            "Hello! I'm interested in booking a Double Bed Room at Rigsel Homestay, Kaffer Gaon. Could you please share availability?",
    },
    {
        id: 2,
        name: "Four Bed Family Room",
        price: "₹1,500",
        priceNote: "per person / night",
        description:
            "Generous space for families or small groups — wooden interiors, panoramic hill vistas, and the warmth of a shared mountain home. Ideal for an authentic Himalayan family experience.",
        whatsappMsg:
            "Hello! I'm interested in booking the Four Bed Family Room at Rigsel Homestay. Could you please share availability for our group?",
    },
] as const;

const AMENITIES = [
    "Mountain View",
    "Wooden Interiors",
    "Natural Light",
    "Washroom Access",
    "Daily Housekeeping",
    "All Meals Included",
];


function CheckIcon() {
    return (
        <svg className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

// ─── Fixed-height mosaic gallery — zero empty space guaranteed ─────────────────
function RoomMosaic() {
    return (
        <figure
            className="flex flex-col gap-2"
            aria-label="Rigsel Homestay rooms and facilities photo gallery"
        >
            {/* ── TOP ROW ── */}
            <div className="grid grid-cols-[1.35fr_1fr] gap-2 h-[220px] sm:h-[280px] lg:h-[320px]">
                {/* Feature image */}
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src="/rigsel-room-double-bed-type-a-1.webp"
                        alt="Rigsel Homestay Double Bed Room — warm wooden interiors with natural light and Kalimpong hill views"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="30vw"
                    />
                </div>

                {/* Two stacked */}
                <div className="flex flex-col gap-2">
                    <div className="relative overflow-hidden rounded-2xl flex-1">
                        <Image
                            src="/rigsel-room-double-bed-type-b-1.webp"
                            alt="Rigsel Homestay Double Bed Room Type B — bright airy interior with forest views"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="20vw"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl flex-1">
                        <Image
                            src="/rigsel-room-family-four-bed.webp"
                            alt="Rigsel Homestay Four Bed Family Room — spacious room for families in Kaffer Gaon, Kalimpong"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="20vw"
                        />
                    </div>
                </div>
            </div>

            {/* ── BOTTOM ROW ── */}
            <div className="grid grid-cols-3 gap-2 h-[120px] sm:h-[150px] lg:h-[160px]">
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src="/rigsel-room-double-bed-type-a-2.webp"
                        alt="Rigsel Homestay Double Bed Room — cozy mountain atmosphere and furnishings"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="15vw"
                    />
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src="/rigsel-room-double-bed-type-b-2.webp"
                        alt="Rigsel Homestay Double Bed Room — natural light and comfortable interiors"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="15vw"
                    />
                </div>
                <div className="relative overflow-hidden rounded-2xl">
                    <Image
                        src="/rigsel-room-washroom-facility.webp"
                        alt="Rigsel Homestay clean and well-maintained washroom facility"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="15vw"
                    />
                </div>
            </div>

            <figcaption className="text-xs text-muted-foreground text-center tracking-wide">
                Rooms &amp; facilities · Rigsel Homestay · Kaffer Gaon, Kalimpong
            </figcaption>
        </figure>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function RoomsSection() {
    const [activeRoom, setActiveRoom] = useState(0);
    const room = ROOMS[activeRoom];

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(room.whatsappMsg)}`;

    return (
        <section
            id="rooms-accommodation"
            aria-labelledby="rooms-heading"
            className="py-20 sm:py-28 bg-[#F7F3EE]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Section Header ── */}
                <motion.div
                    className="text-center mb-12 sm:mb-16 flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                >
                    <p
                        className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(13,165,233,0.1)", border: "1px solid rgba(13,165,233,0.25)" }}
                    >
                        Your Home In The Hills
                    </p>
                    <h2
                        id="rooms-heading"
                        className="font-serif italic font-medium text-4xl sm:text-5xl lg:text-[3.25rem] text-foreground leading-[1.08]"
                    >
                        Rooms &amp; Accommodation
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                        Every room is crafted for warmth — wooden walls, cool hill breezes, and a home-cooked meal
                        waiting each morning.
                    </p>
                </motion.div>

                {/* ── Two-column layout: Gallery | Info ── */}
                <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 xl:gap-12 items-start">

                    {/* ══ LEFT — Mosaic Gallery ══ */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <RoomMosaic />
                    </motion.div>

                    {/* ══ RIGHT — Info Panel ══ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Room tabs — side by side */}
                        <div role="tablist" aria-label="Select room type" className="grid grid-cols-2 gap-3">
                            {ROOMS.map((r, i) => (
                                <button
                                    key={r.id}
                                    role="tab"
                                    aria-selected={i === activeRoom}
                                    aria-controls="room-detail-panel"
                                    onClick={() => setActiveRoom(i)}
                                    className={`text-left px-4 py-4 rounded-2xl border transition-all duration-200 flex flex-col gap-1 ${i === activeRoom
                                        ? "bg-white border-primary/30 shadow-md shadow-primary/10"
                                        : "bg-white/50 border-border/40 hover:bg-white hover:border-border"
                                        }`}
                                >
                                    <p className={`font-serif italic font-medium text-base leading-tight ${i === activeRoom ? "text-primary" : "text-foreground/80"
                                        }`}>
                                        {r.name}
                                    </p>
                                    <p className={`font-serif italic font-semibold text-xl mt-1 ${i === activeRoom ? "text-primary" : "text-foreground"
                                        }`}>
                                        {r.price}
                                    </p>
                                    <p className="text-[10px] text-muted-foreground">{r.priceNote}</p>
                                </button>
                            ))}
                        </div>

                        {/* Detail Panel */}
                        <motion.div
                            id="room-detail-panel"
                            role="tabpanel"
                            key={activeRoom}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.28 }}
                            className="bg-white rounded-2xl border border-border/40 shadow-sm p-5 sm:p-6 flex flex-col gap-4"
                        >
                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {room.description}
                            </p>

                            {/* Shared amenities */}
                            <div>
                                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-foreground/40 mb-2">
                                    All Rooms Include
                                </p>
                                <ul className="flex flex-wrap gap-1.5">
                                    {AMENITIES.map((tag) => (
                                        <li
                                            key={tag}
                                            className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 bg-muted/60 border border-border/40 rounded-full px-3 py-1"
                                        >
                                            <CheckIcon />
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price block */}
                            <div className="rounded-xl bg-primary/5 border border-primary/15 px-4 py-3.5 flex items-center justify-between gap-4">
                                <div>
                                    <p className="font-serif italic font-semibold text-2xl text-primary">{room.price}</p>
                                    <p className="text-xs text-muted-foreground">{room.priceNote}</p>
                                </div>
                                <Badge className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold tracking-widest uppercase rounded-full px-3 py-1">
                                    Fooding + Lodging
                                </Badge>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Book ${room.name} at Rigsel Homestay via WhatsApp`}
                                className="flex-1 flex justify-center items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm tracking-wide shadow-md shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Book via WhatsApp
                            </a>
                            <Link
                                href="/contact"
                                aria-label={`Enquire about ${room.name} at Rigsel Homestay`}
                                className="group relative flex-1 flex justify-center items-center gap-2 px-5 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold text-sm tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/30 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <span className="relative z-10 transition-colors duration-300">
                                    Enquire Now
                                </span>
                                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex items-center" aria-hidden="true">
                                    <MdArrowForwardIos className="h-3.5 w-3.5" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

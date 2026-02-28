"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ── Category definitions ──────────────────────────────────────────────────────
const CATEGORIES = ["All", "Rooms", "Food", "Nature & Views"] as const;
type Category = (typeof CATEGORIES)[number];

// ── Gallery data using available public folder images ─────────────────────────
// Will be replaced with actual gallery images later
const GALLERY_IMAGES: {
    id: number;
    category: Exclude<Category, "All">;
    src: string;
    alt: string;
    span?: "tall" | "wide" | "featured";
}[] = [
        {
            id: 1,
            category: "Nature & Views",
            src: "/hero-1.webp",
            alt: "Panoramic valley view from Rigsel Homestay, Kaffer Gaon, Kalimpong",
            span: "featured",
        },
        {
            id: 2,
            category: "Rooms",
            src: "/rigsel-room-double-bed-type-a-1.webp",
            alt: "Double bed room Type A at Rigsel Homestay, Kalimpong",
        },
        {
            id: 3,
            category: "Rooms",
            src: "/rigsel-room-double-bed-type-b-1.webp",
            alt: "Double bed room Type B at Rigsel Homestay, Kaffer Gaon",
            span: "tall",
        },
        {
            id: 4,
            category: "Food",
            src: "/rigsel-farm-fresh-organic-meal-kalimpong.webp",
            alt: "Farm-fresh organic meal at Rigsel Homestay, Kalimpong",
        },
        {
            id: 5,
            category: "Nature & Views",
            src: "/hero-2.webp",
            alt: "Misty morning view of the Himalayan foothills from Kaffer Gaon",
            span: "wide",
        },
        {
            id: 6,
            category: "Rooms",
            src: "/rigsel-room-double-bed-type-a-2.webp",
            alt: "Cozy double room interior at Rigsel Homestay",
        },
        {
            id: 7,
            category: "Food",
            src: "/rigsel-gorkhali-authentic-homemade-food.webp",
            alt: "Authentic Gorkhali home-cooked meal at Rigsel Homestay",
        },
        {
            id: 8,
            category: "Rooms",
            src: "/rigsel-room-family-four-bed.webp",
            alt: "Family four-bed room at Rigsel Homestay, Kaffer Gaon",
            span: "wide",
        },
        {
            id: 9,
            category: "Nature & Views",
            src: "/hero-3.webp",
            alt: "Lush green landscapes surrounding Rigsel Homestay, Kalimpong",
            span: "tall",
        },
        {
            id: 10,
            category: "Food",
            src: "/rigsel-homestay-traditional-gorkha-cuisine.webp",
            alt: "Traditional Gorkha cuisine served at Rigsel Homestay",
        },
        {
            id: 11,
            category: "Rooms",
            src: "/rigsel-room-double-bed-type-b-2.webp",
            alt: "Room Type B with mountain view at Rigsel Homestay",
        },
        {
            id: 12,
            category: "Rooms",
            src: "/rigsel-room-washroom-facility.webp",
            alt: "Clean washroom facility at Rigsel Homestay, Kalimpong",
        },
    ];

// ── Lightbox Component ────────────────────────────────────────────────────────
function Lightbox({
    image,
    onClose,
}: {
    image: (typeof GALLERY_IMAGES)[0];
    onClose: () => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="w-full h-full object-contain bg-black"
                    sizes="(max-width: 768px) 100vw, 80vw"
                />
                <button
                    onClick={onClose}
                    aria-label="Close lightbox"
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm text-white text-xl hover:bg-black/80 transition-colors"
                >
                    ✕
                </button>
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white/90 text-sm font-light">{image.alt}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ── Main Gallery Client Component ─────────────────────────────────────────────
export default function GalleryPageClient() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");
    const [lightboxImage, setLightboxImage] = useState<
        (typeof GALLERY_IMAGES)[0] | null
    >(null);

    const filteredImages = GALLERY_IMAGES.filter(
        (img) => activeCategory === "All" || img.category === activeCategory
    );

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#F7F3EE]">
            {/* ── Hero Section ── */}
            <section
                className="relative h-[60vh] min-h-[480px] w-full flex items-center justify-center overflow-hidden"
                aria-label="Gallery hero"
            >
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <Image
                        src="/rigsel-homestay-kaffer-gaon-gallery-hero.webp"
                        alt="Scenic beauty of Kaffer Gaon, Kalimpong — Rigsel Homestay photo gallery"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-transparent to-black/30" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-4 mt-16 max-w-3xl mx-auto flex flex-col items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-white px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
                    >
                        Our Visual Story
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif italic font-medium text-5xl md:text-7xl text-white leading-tight drop-shadow-lg"
                    >
                        Photo Gallery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl font-light drop-shadow-md"
                    >
                        A visual journey through the peaceful landscapes, cozy interiors,
                        and vibrant flavors of Rigsel Homestay.
                    </motion.p>
                </div>
            </section>

            {/* ── Gallery Section ── */}
            <section className="py-16 sm:py-24" aria-labelledby="gallery-heading">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Section Label */}
                    <div className="flex flex-col items-center gap-3 mb-12 text-center">
                        <h2
                            id="gallery-heading"
                            className="font-serif italic font-medium text-4xl sm:text-5xl text-foreground"
                        >
                            Glimpses of Kaffer Gaon
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed">
                            Every frame tells a story of mountain serenity, warm hospitality, and authentic Himalayan life.
                        </p>
                    </div>

                    {/* ── Filter Tabs ── */}
                    <div
                        className="flex flex-wrap items-center justify-center gap-2 mb-12"
                        role="tablist"
                        aria-label="Filter gallery by category"
                    >
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                role="tab"
                                aria-selected={activeCategory === category}
                                aria-label={`Show ${category} photos`}
                                onClick={() => setActiveCategory(category)}
                                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activeCategory === category
                                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                                    : "bg-white text-foreground/60 border-border/50 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* ── Masonry Grid ── */}
                    <motion.div
                        layout
                        className="columns-2 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredImages.map((image) => (
                                <motion.div
                                    key={image.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                    className={`relative w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl group cursor-zoom-in break-inside-avoid ${image.span === "featured"
                                        ? "aspect-[16/10]"
                                        : image.span === "tall"
                                            ? "aspect-[3/4]"
                                            : image.span === "wide"
                                                ? "aspect-[16/9]"
                                                : "aspect-[4/3]"
                                        }`}
                                    onClick={() => setLightboxImage(image)}
                                    tabIndex={0}
                                    role="button"
                                    aria-label={`View full photo: ${image.alt}`}
                                    onKeyDown={(e) =>
                                        e.key === "Enter" && setLightboxImage(image)
                                    }
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                                        <span className="inline-flex items-center self-start gap-1.5 text-xs font-bold tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1 mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                            {image.category}
                                        </span>
                                        <p className="text-white text-sm font-light line-clamp-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                            {image.alt}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Empty state */}
                    {filteredImages.length === 0 && (
                        <div className="text-center py-20 text-muted-foreground">
                            <p className="font-serif italic text-2xl">No photos in this category yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxImage && (
                    <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
                )}
            </AnimatePresence>
        </div>
    );
}

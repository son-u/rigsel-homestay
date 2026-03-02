"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const ATTRACTIONS = [
    {
        id: 1,
        title: "Deolo Hill",
        tagline: "Highest Point in Kalimpong",
        description:
            "At 1,704 m, Deolo is the crown of Kalimpong. Wake up early for a golden sunrise over the Kanchenjunga range and the Teesta valley spread far below. A peaceful picnic point ringed by pine and eucalyptus forests.",
        distance: "~48 km",
        time: "~2 hrs drive",
        image: "/deolo-hill-kalimpong-nearby-attraction.webp",
        alt: "Panoramic view from Deolo Hill, Kalimpong",
    },
    {
        id: 2,
        title: "Durpin Dara",
        tagline: "Spiritual Heights & Mountain Views",
        description:
            "Home to the Zang Dhok Palri Phodang monastery, Durpin Dara blends Himalayan spirituality with sweeping 360° vistas. The forested ridge catches the first light of morning on the Kanchenjunga massif.",
        distance: "~50 km",
        time: "~2 hrs drive",
        image: "/durpin-dara-monastery-kalimpong.webp",
        alt: "Durpin Dara ridge and monastery view, Kalimpong",
    },
    {
        id: 3,
        title: "Lolegaon (Loleygaon)",
        tagline: "Canopy Walk in the Clouds",
        description:
            "Walk through dense chestnut and pine forest with clouds literally drifting under your feet. The famous Chilapata Forest canopy walk gives you a bird's-eye view of the valley. Just 20 minutes from Rigsel Homestay.",
        distance: "~20 km",
        time: "~45 min drive",
        image: "/lolegaon-canopy-walk-kalimpong.webp",
        alt: "Misty pine forest and canopy walk in Lolegaon, Kalimpong",
    },
    {
        id: 4,
        title: "Relli Valley & Relli Falls",
        tagline: "A Hidden River Escape",
        description:
            "Follow the Relli River through a lush subtropical corridor to reach secluded waterfalls and boulder-strewn pools. Perfect for a refreshing dip on a warm afternoon. Rarely crowded, utterly beautiful.",
        distance: "~35 km",
        time: "~1.5 hrs drive",
        image: "/relli-falls-relli-valley-kalimpong.webp",
        alt: "Relli Falls flowing through the Relli Valley, Kalimpong",
    },
    {
        id: 5,
        title: "Lamahatta Eco Park",
        tagline: "Tranquil Terraced Gardens",
        description:
            "A meticulously landscaped eco-park with terraced flower gardens, serene walking paths, and unobstructed views of Mt. Kanchenjunga. Ideal for a leisurely half-day outing surrounded by orchids and rhododendrons.",
        distance: "~30 km",
        time: "~1.5 hrs drive",
        image: "/lamahatta-eco-park-kalimpong.webp",
        alt: "Terraced gardens and mountain view at Lamahatta Eco Park, Kalimpong",
    },
    {
        id: 6,
        title: "Neora Valley National Park",
        tagline: "India's Richest Biodiversity Corridor",
        description:
            "One of India's most biodiverse forests — home to the elusive Red Panda, leopards, and hundreds of bird species. Trek through ancient oak and rhododendron forests where nature remains completely undisturbed.",
        distance: "~40 km",
        time: "~2 hrs drive",
        image: "/neora-valley-national-park-kalimpong.webp",
        alt: "Dense forest trail inside Neora Valley National Park, Kalimpong",
    },
];

const SEASONS = [
    {
        name: "Spring",
        months: "March – May",
        icon: "🌸",
        description:
            "Witness the mountains burst into colour with rhododendron and magnolia blooms. Crystal-clear skies and ideal trekking temperatures.",
    },
    {
        name: "Monsoon",
        months: "July – September",
        icon: "🌿",
        description:
            "For the romantic soul. Dramatic clouds float through the valleys, waterfalls rush at their peak, and everything glows an impossibly vivid green.",
    },
    {
        name: "Winter",
        months: "December – February",
        icon: "❄️",
        description:
            "Crisp mountain air, warm bonfires, and breathtaking visibility of the snow-capped Kanchenjunga. Occasional nearby snowfall makes for a magical stay.",
    },
];

function AttractionCard({
    attraction,
    index,
}: {
    attraction: (typeof ATTRACTIONS)[0];
    index: number;
}) {
    const [isActive, setIsActive] = useState(false);

    function handleTap() {
        setIsActive((prev: boolean) => !prev);
    }

    function handleMouseLeave() {

        setIsActive(false);
    }

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            data-active={isActive}
            onClick={handleTap}
            onMouseLeave={handleMouseLeave}
            className="group relative rounded-[1.5rem] overflow-hidden aspect-[3/4] sm:aspect-[4/5] cursor-pointer shadow-md hover:shadow-2xl data-[active=true]:shadow-2xl transition-shadow duration-500 select-none"
            aria-label={`${attraction.title} — ${attraction.tagline}`}
            aria-expanded={isActive}
        >

            <Image
                src={attraction.image}
                alt={attraction.alt}
                fill
                className="object-cover group-hover:scale-105 data-[active=true]:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                title={`${attraction.title} near Rigsel Homestay, Kaffer Gaon, Kalimpong`}
            />


            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />


            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 data-[active=true]:bg-black/20 transition-colors duration-500" />


            <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-white/90 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-1">
                    <FaMapMarkerAlt size={8} aria-hidden="true" />
                    {attraction.distance}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-white/90 bg-black/40 backdrop-blur-md border border-white/15 rounded-full px-2.5 py-1">
                    <FaClock size={8} aria-hidden="true" />
                    {attraction.time}
                </span>
            </div>


            <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 flex flex-col gap-1">

                <p className="text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase text-green-300">
                    {attraction.tagline}
                </p>


                <h3 className="font-serif italic font-semibold text-xl sm:text-2xl text-white leading-tight drop-shadow-lg">
                    {attraction.title}
                </h3>


                <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr] group-hover:grid-rows-[1fr]"
                        }`}
                >
                    <div className="overflow-hidden">
                        <p
                            className={`pt-2 text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-4 font-light transition-opacity duration-400 delay-150 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                }`}
                        >
                            {attraction.description}
                        </p>
                    </div>
                </div>


                {!isActive && (
                    <p className="text-[10px] text-white/40 mt-0.5 sm:hidden font-light">
                        Tap to know more
                    </p>
                )}
            </div>
        </motion.article>
    );
}


export default function ExplorePageClient() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#F7F3EE]">

            <section
                className="relative h-[65vh] min-h-[520px] w-full flex items-center justify-center overflow-hidden"
                aria-label="Explore page hero"
            >
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <Image
                        src="/explore-hero.webp"
                        alt="Scenic landscape of Kaffer Gaon and Kalimpong hills — explore nearby attractions from Rigsel Homestay"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-transparent to-black/20" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-4 mt-16 max-w-3xl mx-auto flex flex-col items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-white px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
                    >
                        Day Trips & Excursions
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif italic font-medium text-5xl md:text-7xl text-white leading-tight drop-shadow-lg"
                    >
                        Explore the Hills
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl font-light drop-shadow-md"
                    >
                        Make Rigsel Homestay your basecamp. The Kalimpong hills are dotted
                        with hidden gems — each one a different story waiting to be discovered.
                    </motion.p>
                </div>
            </section>

            {/* ── Attractions Grid ── */}
            <section className="py-20 sm:py-28" aria-labelledby="attractions-heading">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    {/* Section header */}
                    <div className="flex flex-col items-center gap-3 mb-14 text-center">
                        <p className="text-xs font-bold tracking-widest uppercase text-secondary">
                            Within Easy Reach
                        </p>
                        <h2
                            id="attractions-heading"
                            className="font-serif italic font-medium text-4xl sm:text-5xl text-foreground"
                        >
                            Nearby Attractions
                        </h2>
                        <p className="text-muted-foreground max-w-xl text-base sm:text-lg leading-relaxed">
                            From mist-wrapped forests to ancient monasteries — adventure and
                            serenity are never more than a short drive away.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                        {ATTRACTIONS.map((attraction, index) => (
                            <AttractionCard
                                key={attraction.id}
                                attraction={attraction}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>


            <section className="py-20 sm:py-28 bg-[#1A1F1C] text-white" aria-labelledby="season-heading">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                    <div className="flex flex-col items-center gap-3 mb-14 text-center">
                        <p className="text-xs font-bold tracking-widest uppercase text-secondary">
                            Plan Your Visit
                        </p>
                        <h2
                            id="season-heading"
                            className="font-serif italic font-medium text-4xl sm:text-5xl text-white"
                        >
                            Best Time to Explore
                        </h2>
                        <p className="text-white/60 max-w-xl text-base sm:text-lg leading-relaxed font-light">
                            Every season in Kaffer Gaon tells a different story. Time your
                            visit for the experience you're looking for.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {SEASONS.map((season, i) => (
                            <motion.div
                                key={season.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative bg-white/5 border border-white/8 rounded-2xl p-7 flex flex-col gap-3 hover:bg-white/8 transition-colors duration-300 overflow-hidden group"
                            >
                                <div className="absolute -right-6 -top-6 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" aria-hidden="true" />
                                <span className="text-3xl" aria-hidden="true">{season.icon}</span>
                                <div>
                                    <h3 className="font-serif italic font-semibold text-2xl text-white mb-0.5">
                                        {season.name}
                                    </h3>
                                    <p className="text-xs font-bold tracking-widest uppercase text-green-300">
                                        {season.months}
                                    </p>
                                </div>
                                <p className="text-sm text-white/65 leading-relaxed font-light">
                                    {season.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-14 text-center"
                    >
                        <p className="text-white/60 mb-6 font-light">
                            Ready to plan your mountain getaway?
                        </p>
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/30 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            aria-label="Book a stay at Rigsel Homestay"
                        >
                            <span className="relative z-10 transition-colors duration-300">
                                Book Your Stay
                            </span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex items-center" aria-hidden="true">
                                <MdArrowForwardIos className="h-4 w-4" />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function HowToReachTeaser() {
    return (
        <section
            aria-label="Directions and travel information to Rigsel Homestay"
            className="py-20 sm:py-32 relative overflow-hidden bg-[#1A1F1C]"
        >
            {/* Background Image with heavy overlay so text pops */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/rigsel-homestay-kaffer-gaon-kalimpong-how-to-reach.webp"
                    alt="Scenic road leading to Kaffer Gaon, Kalimpong"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1C] via-[#1A1F1C]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F1C] via-transparent to-transparent opacity-80" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-start gap-5"
                    >
                        {/* Location Tag */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5">
                            <FaMapMarkerAlt className="text-secondary text-sm" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">
                                Kaffer Gaon, Kalimpong
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-serif italic font-medium text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
                            Wondering how to <br className="hidden sm:block" />
                            <span className="text-secondary">reach us?</span>
                        </h2>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-2">
                            The journey to Rigsel Homestay is just as beautiful as the destination.
                            Whether you're driving up from NJP, flying into Bagdogra, or coming from Kalimpong town — we've got the routes mapped out for you.
                        </p>

                        {/* CTA */}
                        <Link
                            href="/how-to-reach"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-bold rounded-full overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(255,255,255,0.15)]"
                        >
                            <div className="absolute inset-0 bg-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                View Travel Guide
                            </span>
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" aria-hidden="true">
                                →
                            </span>
                        </Link>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}

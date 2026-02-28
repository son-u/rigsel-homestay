"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactTeaser() {
    return (
        <section
            aria-label="Call to action to book a stay"
            className="relative py-24 sm:py-28 flex items-center justify-center overflow-hidden bg-[#1A1F1C] min-h-[450px]"
        >

            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Image
                    src="/rigsel-homestay-kaffer-gaon-kalimpong-contact-teaser-view.webp"
                    alt="Nighttime valley view from Rigsel Homestay in Kaffer Gaon, Kalimpong"
                    fill
                    className="object-cover opacity-60 mix-blend-luminosity"
                    sizes="100vw"
                />

                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />


                <div className="absolute inset-0 backdrop-blur-[1.5px]" />


                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F1C] via-[#1A1F1C]/80 to-[#1A1F1C]/40" />


                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F7F3EE] via-[#F7F3EE]/30 to-transparent" />
            </div>


            <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center gap-5"
                >

                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/95">
                            Your Escape Awaits
                        </span>
                    </div>


                    <h2 className="font-serif italic font-medium text-4xl sm:text-5xl text-white leading-[1.15]">
                        Ready to experience the magic of <br className="hidden sm:block" />
                        <span className="text-secondary font-semibold">Kaffer Gaon?</span>
                    </h2>

                    <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mx-auto mb-6 font-light">
                        Leave the noise behind. Join our family for an unforgettable stay in the pristine hills of Kalimpong.
                    </p>


                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white font-bold rounded-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(13,165,233,0.3)] w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                            Plan Your Stay Today
                        </span>
                        <span className="relative z-10 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1" aria-hidden="true">
                            →
                        </span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, type Variants, type Transition } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";


const SLIDES = [
    {
        id: 1,
        src: "/kalimpong-homestay-sunrise-valley-view.webp",
        alt: "Golden sunrise over the misty valleys of Kaffer Gaon, Kalimpong",
        eyebrow: "Kaffer Gaon, Kalimpong",
        headline: ["Where the Mountains", "Feel Like Home"],
        sub: "Wake up to panoramic valleys bathed in golden morning light.",
    },
    {
        id: 2,
        src: "/kaffer-gaon-lush-green-hills.webp",
        alt: "Lush green terraced hillsides of Kalimpong under soft daylight",
        eyebrow: "Himalayan Hill Life",
        headline: ["Breathe In the", "Wild Silence"],
        sub: "Terraced gardens, organic harvests, and the hum of mountain air.",
    },
    {
        id: 3,
        src: "/rigsel-homestay-warm-evening-view.webp",
        alt: "Warm evening view of Rigsel Homestay nestled in the Kalimpong hills",
        eyebrow: "Rigsel Homestay",
        headline: ["A Warm Light", "Waiting for You"],
        sub: "Every evening ends with home-cooked warmth and starlit peace.",
    },
] as const;

const INTERVAL_MS = 7000;


const kenBurnsTransition: Transition = {
    duration: 2.0,
    ease: [0.25, 0.1, 0.25, 1.0],
};

const imageVariants: Variants = {
    enter: { scale: 1.06, opacity: 0 },
    center: { scale: 1.0, opacity: 1, transition: kenBurnsTransition },
    exit: { opacity: 0, transition: { duration: 1.6, ease: "easeInOut" } },
};


const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.4, ease: "easeInOut" } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};


function ProgressBar({ slideKey }: { slideKey: number }) {
    return (
        <div className="h-[2px] w-20 bg-white/30 rounded-full overflow-hidden">
            <motion.div
                key={slideKey}
                className="h-full bg-white rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
            />
        </div>
    );
}

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const advance = useCallback(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(advance, INTERVAL_MS);
        return () => clearInterval(timer);
    }, [advance]);

    const slide = SLIDES[current];

    return (
        <section
            className="relative w-full h-screen h-[100dvh] max-h-[100dvh] overflow-hidden"
            aria-label="Rigsel Homestay — Hero Image Slider"
        >
            <AnimatePresence>
                <motion.div
                    key={slide.id}
                    className="absolute inset-0"
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        className="object-cover object-center"
                        priority={slide.id === 1}
                        sizes="100vw"
                        quality={90}
                    />
                </motion.div>
            </AnimatePresence>

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.3) 55%, rgba(0,0,0,0.75) 100%)",
                }}
                aria-hidden="true"
            />

            <div className="absolute inset-0 flex flex-col justify-center pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-16 lg:pb-20 px-5 sm:px-10 lg:px-16">
                <div className="max-w-6xl 2xl:max-w-7xl mx-auto w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`text-${slide.id}`}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col items-start gap-2.5 sm:gap-4"
                        >
                            <motion.p
                                variants={itemVariants}
                                className="inline-flex items-center text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] sm:tracking-[0.22em] uppercase text-white px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full"
                                style={{
                                    textShadow: "0 1px 8px rgba(0,0,0,0.6)",
                                    background: "rgba(13, 165, 233, 0.3)",
                                    backdropFilter: "blur(8px)",
                                    border: "1px solid rgba(13, 165, 233, 0.4)",
                                }}
                            >
                                {slide.eyebrow}
                            </motion.p>


                            <motion.h1
                                variants={itemVariants}
                                className="font-serif italic text-4xl xs:text-[2.65rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] 2xl:text-[4.85rem] font-medium text-white leading-[1.08] max-w-4xl"
                                style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
                            >
                                {slide.headline.map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </motion.h1>


                            <motion.p
                                variants={itemVariants}
                                className="text-xs xs:text-sm sm:text-base lg:text-lg text-white/85 max-w-xl leading-relaxed"
                                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.55)" }}
                            >
                                {slide.sub}
                            </motion.p>


                            <motion.div variants={itemVariants} className="flex w-full sm:w-auto gap-3 mt-2 sm:mt-3.5">
                                <Link
                                    href="/contact"
                                    aria-label="Book your stay at Rigsel Homestay"
                                    className="group relative flex-1 sm:flex-none flex items-center justify-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[54px] bg-primary hover:bg-primary/90 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white text-sm sm:text-base"
                                >
                                    <span className="relative z-10 transition-colors duration-300 whitespace-nowrap">
                                        Book Stay
                                    </span>
                                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex items-center" aria-hidden="true">
                                        <MdArrowForwardIos className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    </span>
                                </Link>
                                <Link
                                    href="/explore"
                                    aria-label="Explore Kaffer Gaon and nearby attractions"
                                    className="flex-1 sm:flex-none flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 min-h-[48px] sm:min-h-[54px] rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white font-bold text-sm sm:text-base tracking-wide transition-all hover:bg-white/20 hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white whitespace-nowrap"
                                >
                                    Explore
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>


            <div
                className="absolute bottom-4 sm:bottom-6 lg:bottom-7 left-5 sm:left-10 lg:left-16 flex items-center gap-3 sm:gap-4"
                role="status"
                aria-live="polite"
                aria-label={`Slide ${current + 1} of ${SLIDES.length}`}
            >
                <ProgressBar slideKey={current} />

                <span
                    className="text-[11px] font-bold tracking-[0.2em] text-white/55 tabular-nums"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                >
                    <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
                    <span className="mx-1 text-white/40">/</span>
                    {String(SLIDES.length).padStart(2, "0")}
                </span>


                <div className="flex gap-2" role="list">
                    {SLIDES.map((s, i) => (
                        <button
                            key={s.id}
                            role="listitem"
                            aria-label={`View slide ${i + 1}`}
                            aria-pressed={i === current}
                            onClick={() => setCurrent(i)}
                            className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${i === current
                                ? "bg-white w-5 h-1.5"
                                : "bg-white/40 hover:bg-white/70 w-1.5 h-1.5"
                                }`}
                        />
                    ))}
                </div>
            </div>


            <div
                className="absolute bottom-5 sm:bottom-6 lg:bottom-7 right-6 sm:right-12 lg:right-20 hidden sm:flex flex-col items-center gap-2"
                aria-hidden="true"
            >
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/50 [writing-mode:vertical-rl] rotate-180">
                    Scroll
                </span>
                <motion.div
                    className="w-px h-8 bg-gradient-to-b from-white/0 to-white/60"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const FOOD_POINTS = [
    "Farm-fresh vegetables grown in our own garden in Kaffer Gaon.",
    "Traditional slow-cooked Gorkha recipes, hearty and full of Himalayan flavour.",
    "Every dish made from scratch by the family — no packaged food, no shortcuts.",
    "Local spices, and authentic Nepali recipes passed down through generations.",
];

export default function FoodSection() {
    return (
        <section
            id="food-we-serve"
            aria-labelledby="food-heading"
            className="py-20 sm:py-28"
            style={{ background: "linear-gradient(160deg, #FFFAF1 60%, #E9FBF2 100%)" }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

                    {/* ══ LEFT — Text ══ */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-7"
                    >
                        {/* Eyebrow */}
                        <p
                            className="inline-flex self-start items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full"
                            style={{ background: "rgba(13,165,233,0.1)", border: "1px solid rgba(13,165,233,0.25)" }}
                        >
                            From Our Kitchen to Your Table
                        </p>

                        {/* Heading */}
                        <h2
                            id="food-heading"
                            className="font-serif italic font-medium text-4xl sm:text-5xl lg:text-[3.25rem] text-foreground leading-[1.08]"
                        >
                            The Food <span className="text-primary">We Serve</span>
                        </h2>

                        {/* Intro paragraph */}
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            At <strong className="font-serif italic font-semibold text-foreground">Rigsel Homestay</strong>, meals are not just food —
                            they are stories of the land. Every plate that reaches your table is grown,
                            cooked, and served by our family with the warmth and honesty of a
                            <strong className="font-serif italic font-semibold text-foreground"> Gorkha home</strong>.
                        </p>

                        {/* Points */}
                        <ul className="flex flex-col gap-1.5" aria-label="Food highlights at Rigsel Homestay">
                            {FOOD_POINTS.map((point, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.45, delay: i * 0.08 }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
                                    <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">{point}</span>
                                </motion.li>
                            ))}
                        </ul>

                        {/* Meals included note */}
                        <div className="inline-flex items-start gap-3 bg-primary/5 border border-primary/15 rounded-2xl px-5 py-4">
                            <span className="text-lg mt-0.5" aria-hidden="true">🍽️</span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                <strong className="font-serif italic font-semibold text-foreground">
                                    Breakfast, Lunch &amp; Dinner included
                                </strong>{" "}
                                — three home-cooked meals daily with every stay at ₹1,500 per person.
                            </p>
                        </div>
                    </motion.div>

                    {/* ══ RIGHT — Two-column staggered image block ══ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-3 sm:gap-4"
                        aria-label="Photos of home-cooked food at Rigsel Homestay, Kaffer Gaon, Kalimpong"
                    >
                        {/* Column 1 — two stacked images */}
                        <div className="flex flex-col gap-3 sm:gap-4">
                            <div className="relative h-36 sm:h-60 lg:h-72 w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/rigsel-gorkhali-authentic-homemade-food.webp"
                                    alt="Authentic Gorkhali home-made food served at Rigsel Homestay, Kaffer Gaon, Kalimpong"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                            <div className="relative h-28 sm:h-44 lg:h-52 w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/rigsel-farm-fresh-organic-meal-kalimpong.webp"
                                    alt="Farm-fresh organic meal made from Rigsel Homestay's own garden in the Kalimpong hills"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </div>

                        {/* Column 2 — single tall image, no offset on mobile */}
                        <div className="sm:pt-10 lg:pt-12">
                            <div className="relative h-[11rem] sm:h-[22rem] lg:h-[26rem] w-full rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/rigsel-homestay-traditional-gorkha-cuisine.webp"
                                    alt="Traditional Gorkha cuisine — sel roti, dal bhat and seasonal vegetables served at Rigsel Homestay, Kalimpong"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

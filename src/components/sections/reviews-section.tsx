"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const REVIEWS = [
    {
        id: 1,
        name: "Rohan Chatterjee",
        location: "Kolkata, WB",
        image: "/user-1.webp",
        rating: 5,
        text: "The perfect escape from city life. Waking up to the view of the Kalimpong hills from the wooden rooms was surreal. The organic Gorkhali thali they served for lunch is something I'll remember for a long time.",
    },
    {
        id: 2,
        name: "Nisha Sharma",
        location: "Delhi",
        image: "/user-3.webp",
        rating: 5,
        text: "Absolutely loved the hospitality! The family makes you feel like one of their own. We stayed in the Four Bed room and it was incredibly spacious. The mint tea in the evening while watching the sunset was magical.",
    },
    {
        id: 3,
        name: "Aditya Desai",
        location: "Mumbai, MH",
        image: "/user-2.webp",
        rating: 5,
        text: "If you want an authentic mountain homestay experience without the commercialized feel, this is it. Kaffer Gaon is peaceful, and Rigsel Homestay sits right in the best spot. The wood-fire meals were outstanding.",
    },
    {
        id: 4,
        name: "Priyanka Das",
        location: "Siliguri, WB",
        image: "/user-5.webp",
        rating: 5,
        text: "A beautiful property with even more beautiful hosts. The highlight was sitting by the fire at night, eating freshly made momos and listening to local stories. The rooms are cozy, beds are warm, and the bathroom was spotless.",
    },
    {
        id: 5,
        name: "Vikram Singh",
        location: "Bengaluru, KA",
        image: "/user-4.webp",
        rating: 5,
        text: "Remote but entirely worth the journey. The lack of crowd makes it so peaceful. Sourced entirely from their farm, the food is incredible. They arranged a cab for us from NJP seamlessly. Truly a 5-star experience.",
    },
];

export default function ReviewsSection() {
    return (
        <section
            aria-labelledby="reviews-heading"
            className="py-20 sm:py-28 relative bg-[#F7F3EE]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-14 flex flex-col items-center gap-4"
                >
                    <p
                        className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full"
                        style={{ background: "rgba(13,165,233,0.1)", border: "1px solid rgba(13,165,233,0.25)" }}
                    >
                        Words from our Guests
                    </p>
                    <h2
                        id="reviews-heading"
                        className="font-serif italic font-medium text-4xl sm:text-5xl lg:text-[3.25rem] text-foreground leading-[1.08]"
                    >
                        Experiences to Remember
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mt-2">
                        Read what travelers from across the country have to say about their stay at Rigsel Homestay in the serene hills of Kaffer Gaon.
                    </p>
                </motion.div>

                {/* ── Swiper Reviews Slider ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <style dangerouslySetInnerHTML={{
                        __html: `
            .swiper-pagination-bullet {
              background-color: var(--color-primary, #126439);
              opacity: 0.2;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              opacity: 1;
              width: 24px;
              border-radius: 4px;
            }
            .swiper-container-padding {
              padding-bottom: 60px !important; 
              padding-top: 20px !important;
              padding-left: 10px !important;
              padding-right: 10px !important;
              margin: -20px -10px 0 -10px;
            }
          `}} />

                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={32}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1.5 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="swiper-container-padding"
                    >
                        {REVIEWS.map((review) => (
                            <SwiperSlide key={review.id} className="h-auto">
                                <article className="group bg-white rounded-3xl border border-border/40 p-8 flex flex-col justify-between h-full shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out relative overflow-hidden h-full">
                                    {/* Subtle accent hover glow */}
                                    <div
                                        className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/15 transition-colors duration-500 pointer-events-none"
                                        aria-hidden="true"
                                    />

                                    {/* Quote Icon & Text */}
                                    <div className="relative z-10">
                                        <FaQuoteLeft className="text-primary/10 text-3xl mb-5 group-hover:text-primary/20 transition-colors duration-500" aria-hidden="true" />
                                        <blockquote className="text-base sm:text-lg text-foreground/80 leading-relaxed font-serif italic mb-8">
                                            "{review.text}"
                                        </blockquote>
                                    </div>

                                    {/* Author Info & Rating */}
                                    <footer className="flex items-center justify-between pt-6 border-t border-border/30 relative z-10 mt-auto">
                                        <div className="flex items-center gap-3">
                                            {/* Avatar */}
                                            <div className="relative w-11 h-11 rounded-full overflow-hidden bg-muted border border-border/50">
                                                <Image
                                                    src={review.image}
                                                    alt={`Photo of ${review.name}`}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    sizes="44px"
                                                />
                                            </div>
                                            {/* Name & Location */}
                                            <div>
                                                <h3 className="font-bold text-sm sm:text-base text-foreground font-serif tracking-wide leading-tight">
                                                    {review.name}
                                                </h3>
                                                <p className="text-[10px] sm:text-xs font-medium tracking-wider uppercase text-muted-foreground mt-0.5">
                                                    {review.location}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Stars */}
                                        <div
                                            className="flex text-[#F59E0B] gap-0.5 text-xs sm:text-sm"
                                            aria-label={`${review.rating} out of 5 stars`}
                                        >
                                            {[...Array(review.rating)].map((_, index) => (
                                                <FaStar key={index} aria-hidden="true" />
                                            ))}
                                        </div>
                                    </footer>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

            </div>
        </section>
    );
}

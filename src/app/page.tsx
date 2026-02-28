"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSlider from "@/components/sections/hero-slider";
import RoomsSection from "@/components/sections/rooms-section";
import FoodSection from "@/components/sections/food-section";
import HowToReachTeaser from "@/components/sections/how-to-reach-teaser";
import ReviewsSection from "@/components/sections/reviews-section";
import ContactTeaser from "@/components/sections/contact-teaser";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSlider />

      {/* Quick Trust Signals Bar */}
      <section
        aria-label="Rigsel Homestay at a Glance — Key highlights and trust signals"
        className="relative overflow-hidden py-12 sm:py-16 bg-[#FFFAF1] border-y border-border/60"
      >
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #126439 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.dl
            className="grid grid-cols-2 lg:grid-cols-4 gap-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            aria-label="Trust highlights — Rigsel Homestay statistics"
          >
            {/* ── Stat 1: Guest Rating ── */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col items-center text-center px-4 py-6 sm:py-8 border-r border-border/60 last:border-r-0"
            >
              <div className="flex gap-0.5 mb-3" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#F2CD74" className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <dt className="font-serif italic font-medium text-4xl sm:text-5xl text-foreground tracking-tight leading-none">
                4.9<span className="text-foreground/35 text-2xl sm:text-3xl not-italic font-light">/5</span>
              </dt>
              <dd className="mt-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Guest Rating
              </dd>
            </motion.div>

            {/* ── Stat 2: Altitude ── */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col items-center text-center px-4 py-6 sm:py-8 border-r border-border/60 last:border-r-0"
            >
              <div className="mb-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0DA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
                  <path d="M3 20l7-14 4 8 3-5 4 11" />
                </svg>
              </div>
              <dt className="font-serif italic font-medium text-4xl sm:text-5xl text-foreground tracking-tight leading-none">
                5,500<span className="text-foreground/35 text-2xl sm:text-3xl not-italic font-light">+ ft</span>
              </dt>
              <dd className="mt-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Above Sea Level
              </dd>
            </motion.div>

            {/* ── Stat 3: Organic Food ── */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col items-center text-center px-4 py-6 sm:py-8 border-r border-border/60 last:border-r-0"
            >
              <div className="mb-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0DA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
                  <path d="M12 2a9 9 0 0 0-9 9c0 4.97 9 13 9 13s9-8.03 9-13a9 9 0 0 0-9-9z" />
                  <path d="M12 11V7m0 0c0 0-2-2-4-1m4 1c0 0 2-2 4-1" />
                </svg>
              </div>
              <dt className="font-serif italic font-medium text-4xl sm:text-5xl text-foreground tracking-tight leading-none">
                100<span className="text-foreground/35 text-2xl sm:text-3xl not-italic font-light">%</span>
              </dt>
              <dd className="mt-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Organic &amp; Local Food
              </dd>
            </motion.div>

            {/* ── Stat 4: Village Experience ── */}
            <motion.div
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="flex flex-col items-center text-center px-4 py-6 sm:py-8 col-span-2 lg:col-span-1 border-t border-border/60 lg:border-t-0"
            >
              <div className="mb-3" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0DA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 sm:w-7 sm:h-7">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <dt className="font-serif italic font-medium text-3xl sm:text-4xl text-foreground tracking-tight leading-none">
                Authentic
              </dt>
              <dd className="mt-2 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Gorkha Village Homestay
              </dd>
            </motion.div>
          </motion.dl>
        </div>
      </section>

      {/* Welcome / About Section */}
      <section
        id="about-rigsel-homestay"
        aria-labelledby="welcome-heading"
        className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #FFFAF1 60%, #E9FBF2 100%)" }}
      >
        {/* Decorative blurred blob */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none blur-3xl"
          style={{ background: "radial-gradient(circle, #0DA5E9 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* ── Image Column ── */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              {/* Main Image */}
              <div className="relative h-[420px] sm:h-[520px] lg:h-[580px] w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/15">
                <Image
                  src="/rigsel-homestay-kaffer-gaon-kalimpong.webp"
                  alt="Rigsel Homestay — a traditional Gorkha village homestay nestled in the lush green hills of Kaffer Gaon, Kalimpong, West Bengal, India"
                  fill
                  className="object-cover object-center hover:scale-[1.04] transition-transform duration-[1200ms]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Bottom image caption overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/80 text-xs font-bold tracking-[0.18em] uppercase">
                    Kaffer Gaon · Kalimpong · West Bengal
                  </p>
                </div>
              </div>

              {/* Floating accent card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-xl shadow-black/10 px-5 py-4 flex items-center gap-3 border border-border/40"
              >
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0DA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Verified Host</p>
                  <p className="text-sm font-serif font-bold italic text-foreground">Family-run since 2018</p>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Text Column ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="order-1 lg:order-2 flex flex-col gap-6"
            >
              {/* Eyebrow — same pill style as Hero */}
              <p
                className="inline-flex self-start items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full"
                style={{
                  background: "rgba(13, 165, 233, 0.1)",
                  border: "1px solid rgba(13, 165, 233, 0.25)",
                }}
              >
                Welcome to Rigsel Homestay
              </p>

              {/* Main Heading — SEO h2 since h1 is on hero */}
              <h2
                id="welcome-heading"
                className="font-serif italic font-medium text-4xl sm:text-5xl lg:text-[3.25rem] text-foreground leading-[1.1]"
              >
                Escape the ordinary.<br />
                <span className="text-primary">Embrace the silence.</span>
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Far from crowded tourist trails, <strong className="font-serif text-xl text-foreground font-semibold italic">Rigsel Homestay</strong> offers a genuine slice of Himalayan life in <strong className="font-serif text-xl text-foreground font-semibold italic">Kaffer Gaon, Kalimpong</strong>. Wake up to panoramic valley views, savour home-cooked Lepcha and Gorkha delicacies, and let the slow mountain pace heal your soul.
              </p>

              {/* Feature Pills */}
              <ul className="flex flex-wrap gap-2.5" aria-label="Homestay highlights">
                {[
                  { icon: "🏔️", label: "Valley Views" },
                  { icon: "🍃", label: "Organic Meals" },
                  { icon: "🌿", label: "Village Life" },
                  { icon: "🌄", label: "Sunrise Walks" },
                ].map(({ icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-muted/60 border border-border/50 text-sm font-semibold text-foreground/75"
                  >
                    <span aria-hidden="true">{icon}</span>
                    {label}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-6 pt-2">
                <Link
                  href="/contact"
                  aria-label="Book your stay at Rigsel Homestay, Kalimpong"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm tracking-wide shadow-lg shadow-primary/20 transition-all hover:scale-[1.03]"
                >
                  Book a Stay
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Rooms & Accommodation Section */}
      <RoomsSection />

      {/* Foods We Serve Section */}
      <FoodSection />

      {/* How to Reach Teaser */}
      <HowToReachTeaser />

      {/* Guest Reviews Section */}
      <ReviewsSection />

      {/* Footer pre-CTA */}
      <ContactTeaser />
    </div>
  );
}

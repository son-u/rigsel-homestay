"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaTrain, FaPlane, FaCar, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function HowToReach() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-[#F7F3EE]">

            {/* ── Hero Section ── */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
                {/* Background Image with blur/fade overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/rigsel-homestay-kaffer-gaon-kalimpong-how-to-reach.webp"
                        alt="Scenic mountain road leading to Rigsel Homestay in Kaffer Gaon, Kalimpong"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    {/* Overlays for fade effect */}
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-transparent to-black/30" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 mt-16 max-w-4xl mx-auto flex flex-col items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-white px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
                    >
                        Journey to the Hills
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif italic font-medium text-5xl md:text-7xl text-white leading-tight drop-shadow-lg"
                    >
                        How to Reach Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl font-light drop-shadow-md"
                    >
                        The scenic drive up the hills of Kalimpong sets the perfect tone for your retreat. Finding Rigsel Homestay is part of the adventure.
                    </motion.p>
                </div>
            </section>

            {/* ── Main Content Area ── */}
            <section className="py-20 sm:py-28 relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 xl:gap-20 items-start">

                        {/* ══ LEFT — Map & Location ══ */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6"
                        >
                            {/* Location Card */}
                            <div className="bg-white rounded-2xl border border-border/40 shadow-sm p-6 sm:p-8 flex flex-col gap-4 relative overflow-hidden group">
                                {/* Decorative blob */}
                                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500" aria-hidden="true" />

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                        <FaMapMarkerAlt size={18} />
                                    </div>
                                    <h2 className="font-serif italic font-bold text-2xl text-foreground">Our Location</h2>
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-foreground mb-1">Rigsel Homestay</p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Kaffer Gaon, Near Lolegaon, <br />
                                        Kalimpong District, West Bengal 734314, India
                                    </p>
                                </div>
                            </div>

                            {/* Google Map */}
                            <div className="w-full h-[400px] lg:h-[500px] rounded-[1.5rem] overflow-hidden shadow-lg border border-border/40 relative group">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14216.940409952542!2d88.58300263628373!3d26.974465584852926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44ffec0852e93%3A0x6bba3bc13db54eb5!2sLolegaon%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                                    title="Map showing Rigsel Homestay location"
                                ></iframe>
                            </div>
                        </motion.div>

                        {/* ══ RIGHT — Transport Modes & CTA ══ */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-10"
                        >
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">
                                    Major Transit Nodes
                                </p>
                                <h3 className="font-serif italic font-medium text-4xl text-foreground leading-tight mb-8">
                                    Routes &amp; Distances
                                </h3>

                                <div className="flex flex-col gap-6">
                                    {/* Train */}
                                    <div className="group bg-white rounded-2xl border border-border/40 shadow-sm p-5 sm:p-6 flex gap-4 sm:gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FaTrain size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif italic font-semibold text-xl text-foreground mb-1">New Jalpaiguri (NJP) Railway Station</h4>
                                            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">~110 km | 4-5 hours</p>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                The closest major railway hub. You can hire a direct cab from the NJP taxi stand or request us to arrange a trusted local pickup for you.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Plane */}
                                    <div className="group bg-white rounded-2xl border border-border/40 shadow-sm p-5 sm:p-6 flex gap-4 sm:gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FaPlane size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif italic font-semibold text-xl text-foreground mb-1">Bagdogra (IXB) Airport</h4>
                                            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">~115 km | 4.5-5 hours</p>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                The nearest airport. Pre-paid taxis and private cabs are readily available outside the arrivals terminal for a direct journey to the homestay.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Car */}
                                    <div className="group bg-white rounded-2xl border border-border/40 shadow-sm p-5 sm:p-6 flex gap-4 sm:gap-6 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FaCar size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif italic font-semibold text-xl text-foreground mb-1">From Kalimpong Town</h4>
                                            <p className="text-xs font-bold tracking-widest uppercase text-secondary mb-3">~45 km | 2 hours</p>
                                            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                                If you are already in Kalimpong, take the scenic route via Lava or Algara towards Lolegaon. We are located just before the Lolegaon center.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Cab Request CTA */}
                            <div className="bg-primary relative overflow-hidden rounded-[1.5rem] p-8 sm:p-10 text-white shadow-xl">
                                {/* Decorative background elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
                                <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" aria-hidden="true" />

                                <div className="relative z-10">
                                    <h4 className="font-serif italic font-medium text-3xl mb-4 drop-shadow-sm">Need a Cab?</h4>
                                    <p className="text-white/80 leading-relaxed mb-8 max-w-md text-sm sm:text-base">
                                        Driving in the hills requires experience. We have a network of trusted local drivers who know the roads up to Kaffer Gaon intimately. Let us know 24 hours in advance, and we will happily arrange your pickup and drop-off.
                                    </p>
                                    <a
                                        href="https://wa.me/919000000000?text=Hello!%20I%20have%20a%20booking%20at%20Rigsel%20Homestay%20and%20would%20like%20assistance%20with%20arranging%20a%20pickup%20cab."
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-primary rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                                    >
                                        <FaWhatsapp size={20} className="text-[#25D366]" />
                                        <span>Request via WhatsApp</span>
                                    </a>
                                </div>
                            </div>

                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}

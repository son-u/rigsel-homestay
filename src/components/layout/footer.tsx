"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { AiOutlineCode } from "react-icons/ai";
import { siteConfig } from "@/lib/site";
import { MdArrowForwardIos } from "react-icons/md";

const QUICK_LINKS = [
    { name: "About Us", href: "/#about-rigsel-homestay" },
    { name: "Our Rooms", href: "/#rooms-accommodation" },
    { name: "Explore", href: "/explore" },
    { name: "Gallery", href: "/gallery" },
    { name: "How to Reach", href: "/how-to-reach" },
    { name: "Booking Inquiry", href: "/contact" },
];

export default function Footer() {
    const pathname = usePathname();

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (pathname === "/" && href.startsWith("/#")) {
            const targetId = href.split("#")[1];
            const elem = document.getElementById(targetId);
            if (elem) {
                e.preventDefault();
                elem.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href);
            }
        }
    };

    return (
        <footer
            className="bg-[#F5F0E8] text-foreground/80 border-t border-border/30"
            aria-label="Site footer"
        >
            {/* The Banner 'Leave a review' section sitting in document flow */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="mx-auto max-w-5xl bg-white/90 backdrop-blur-xl border border-primary/20 rounded-[2rem] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] shadow-primary/5 border-b-[4px] border-b-primary/70 border-r-[4px] border-r-primary/30">
                    <div className="text-center md:text-left max-w-xl">
                        <h3 className="font-serif text-3xl sm:text-4xl italic text-foreground font-semibold tracking-tight">Enjoyed Your Stay?</h3>
                        <p className="text-base sm:text-lg text-foreground/70 mt-3 leading-relaxed">Let us know what you loved! Help others discover the beauty and peace of Kaffer Gaon.</p>
                    </div>
                    <div className="shrink-0">
                        <a
                            href={siteConfig.urls.googleReview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/10 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-base"
                            aria-label="Leave a review on Google"
                        >
                            <span className="relative z-10 transition-colors duration-300">
                                Leave a Review
                            </span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 flex items-center" aria-hidden="true">
                                <MdArrowForwardIos className="h-4 w-4" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pb-20">
                <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1.2fr] gap-12 xl:gap-20">


                    <div className="flex flex-col gap-6">

                        <Link
                            href="/"
                            onClick={(e) => {
                                if (pathname === "/") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                            aria-label="Rigsel Homestay — back to homepage"
                        >
                            <Image
                                src="/rigselhomestay.webp"
                                alt="Rigsel Homestay logo"
                                width={180}
                                height={60}
                                className="h-14 w-auto"
                                priority={false}
                            />
                        </Link>

                        <p className="text-sm sm:text-base text-foreground/60 leading-relaxed max-w-sm font-light">
                            Experience the authentic warmth of Himalayan village hospitality. Wake up to misty mountains, birdsong, and a warm cup of Darjeeling tea in the serene forests of Kaffer Gaon.
                        </p>


                        <div className="flex gap-4">
                            <Link
                                href={siteConfig.urls.instagram}
                                aria-label="Follow Rigsel Homestay on Instagram"
                                className="w-9 h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all"
                            >
                                <FaInstagram size={16} />
                            </Link>
                            <a
                                href={siteConfig.urls.facebook}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Follow Rigsel Homestay on Facebook"
                                className="w-9 h-9 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/40 hover:text-primary hover:bg-primary/10 hover:border-primary/20 transition-all"
                            >
                                <FaFacebook size={16} />
                            </a>
                        </div>
                    </div>


                    <nav aria-label="Quick navigation links">
                        <h4 className="font-serif italic font-semibold text-xl text-foreground mb-6">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {QUICK_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        onClick={(e) => handleSmoothScroll(e, link.href)}
                                        className="text-sm text-foreground/55 hover:text-primary transition-colors group flex items-center gap-2"
                                    >
                                        <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" aria-hidden="true" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <div>
                        <h4 className="font-serif italic font-semibold text-xl text-foreground mb-6">
                            Contact Us
                        </h4>
                        <address className="not-italic flex flex-col gap-4">
                            <div className="flex gap-3 text-sm text-foreground/60 leading-relaxed">
                                <FaMapMarkerAlt className="flex-shrink-0 mt-1 text-primary" size={14} />
                                <span>
                                    {siteConfig.name}, {siteConfig.address}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-foreground/60">
                                <FaPhoneAlt className="flex-shrink-0 text-primary" size={13} />
                                <div className="flex flex-col gap-1">
                                    <a
                                        href={`tel:+91${siteConfig.contact.primary}`}
                                        className="hover:text-primary transition-colors"
                                    >
                                        +91 {siteConfig.contact.primary.slice(0, 5)} {siteConfig.contact.primary.slice(5)}
                                    </a>
                                    {siteConfig.contact.secondary && (
                                        <a
                                            href={`tel:+91${siteConfig.contact.secondary}`}
                                            className="hover:text-primary transition-colors"
                                        >
                                            +91 {siteConfig.contact.secondary.slice(0, 5)} {siteConfig.contact.secondary.slice(5)}
                                        </a>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-foreground/60">
                                <FaEnvelope className="flex-shrink-0 text-primary" size={13} />
                                <a
                                    href={`mailto:${siteConfig.contact.email}`}
                                    className="hover:text-primary transition-colors"
                                >
                                    {siteConfig.contact.email}
                                </a>
                            </div>
                        </address>
                    </div>

                </div>
            </div>


            <div className="border-t border-foreground/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="text-xs text-foreground/40">
                        © {new Date().getFullYear()} Rigsel Homestay. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-xs text-foreground/40">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                    <a
                        href="https://son-u.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-semibold text-foreground/50 hover:text-primary transition-colors font-serif italic mt-2 sm:mt-0 sm:ml-auto"
                        aria-label="Developer Portfolio - Sonu"
                    >
                        <AiOutlineCode size={16} aria-hidden="true" />
                        Coded by Sonu
                    </a>
                </div>
            </div>
        </footer>
    );
}

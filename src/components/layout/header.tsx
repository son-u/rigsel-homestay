"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { FaPhoneAlt, FaBars } from "react-icons/fa";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/site";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about-rigsel-homestay" },
    { name: "Rooms", href: "/#rooms-accommodation" },
    { name: "Explore", href: "/explore" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeHash, setActiveHash] = useState("");
    const pathname = usePathname();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 20);
    });


    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);


    useEffect(() => {
        if (pathname !== "/") return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries.filter((entry) => entry.isIntersecting);
                if (visibleEntries.length > 0) {

                    const mostVisible = visibleEntries.reduce((prev, current) =>
                        (prev.intersectionRatio > current.intersectionRatio) ? prev : current
                    );
                    setActiveHash(`#${mostVisible.target.id}`);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );


        const aboutSection = document.getElementById("about-rigsel-homestay");
        const roomsSection = document.getElementById("rooms-accommodation");

        if (aboutSection) observer.observe(aboutSection);
        if (roomsSection) observer.observe(roomsSection);


        const handleScroll = () => {
            if (window.scrollY < 100) {
                setActiveHash("");
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, [pathname]);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-4 sm:px-6 transition-all duration-300"
            initial={{ y: -100 }}
            animate={{
                y: 0,
                paddingTop: isScrolled ? "0.5rem" : "1.5rem"
            }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
            <motion.div
                className={cn(
                    "w-full max-w-7xl rounded-[2rem] bg-white flex items-center justify-between px-6 transition-all duration-300 transform origin-top",
                    isScrolled
                        ? "shadow-xl shadow-black/10 py-3 border border-border/10 backdrop-blur-3xl bg-white/95"
                        : "shadow-lg shadow-black/5 py-4 border border-border/20"
                )}
            >

                <Link
                    href="/"
                    onClick={(e) => {
                        if (pathname === "/") {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                    className="flex-shrink-0 hover:opacity-90 transition-opacity"
                    aria-label="Rigsel Homestay Homepage"
                >
                    <Image
                        src="/rigselhomestay.webp"
                        alt="Rigsel Homestay Logo"
                        width={200}
                        height={44}
                        className="h-10 sm:h-11 md:h-12 w-auto transition-all"
                        priority
                    />
                </Link>


                <nav className="hidden lg:flex flex-1 justify-center items-center" aria-label="Main Navigation">
                    <ul className="flex items-center gap-1 xl:gap-2">
                        {NAV_LINKS.map((link) => {

                            const isHomeHashLink = pathname === "/" && link.href.startsWith("/#");
                            let isActive = false;

                            if (isHomeHashLink) {

                                const hash = link.href.substring(1);
                                isActive = activeHash === hash;
                            } else if (pathname === "/" && link.href === "/") {

                                isActive = activeHash === "";
                            } else {

                                isActive = pathname === link.href;
                            }

                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        aria-current={isActive ? "page" : undefined}
                                        onClick={(e) => {
                                            if (pathname === "/") {
                                                if (link.href === "/") {
                                                    e.preventDefault();
                                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                                } else if (link.href.startsWith("/#")) {
                                                    e.preventDefault();
                                                    const targetId = link.href.split("#")[1];
                                                    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                                                }
                                            }
                                        }}
                                        className="relative px-5 py-2.5 flex flex-col items-center justify-center group"
                                    >
                                        <span
                                            className={cn(
                                                "text-[14px] font-bold tracking-[0.15em] uppercase transition-colors duration-300",
                                                isActive ? "text-primary" : "text-foreground/80 group-hover:text-primary"
                                            )}
                                        >
                                            {link.name}
                                        </span>

                                        <span
                                            className={cn(
                                                "absolute -bottom-1 h-[3px] rounded-full transition-all duration-300",
                                                isActive ? "w-1/2 bg-primary" : "w-0 bg-primary/70 group-hover:w-1/2"
                                            )}
                                        />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>


                <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">

                    <Button
                        asChild
                        variant="outline"
                        className="hidden xl:flex items-center gap-2.5 rounded-full border-primary/20 text-primary hover:bg-primary/5 hover:text-primary transition-all h-11 px-6 font-bold shadow-sm hover:scale-[1.02] text-[15px]"
                    >
                        <a href={`tel:+91${siteConfig.contact.primary}`} aria-label="Call Rigsel Homestay Now">
                            <FaPhoneAlt className="h-4 w-4" aria-hidden="true" />
                            <span>Call Now</span>
                        </a>
                    </Button>

                    <Button
                        asChild
                        className="hidden md:flex items-center gap-2.5 border border-transparent rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02] h-11 px-7 font-bold text-[15px]"
                    >
                        <a href={`https://wa.me/91${siteConfig.contact.primary}?text=Hello%20Rigsel%20Homestay!%20I%20would%20like%20to%20know%20more%20about%20booking%20a%20stay.`} target="_blank" rel="noopener noreferrer" aria-label="Contact Rigsel Homestay on WhatsApp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </Button>


                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <button
                                className="lg:hidden p-3 text-foreground/80 hover:text-secondary bg-muted/40 hover:bg-muted/80 rounded-[1.25rem] transition-colors"
                                aria-label="Open Mobile Menu"
                                aria-expanded={isOpen}
                            >
                                <FaBars className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0 bg-white border-l rounded-l-[2.5rem] shadow-2xl overflow-hidden flex flex-col">
                            <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                            <SheetDescription className="sr-only">Access site navigation and contact options.</SheetDescription>

                            <div className="bg-muted/30 p-8 pb-6 border-b border-border/50">
                                <Image
                                    src="/rigselhomestay.webp"
                                    alt="Rigsel Homestay Logo"
                                    width={200}
                                    height={44}
                                    className="h-10 w-auto"
                                />
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2">
                                <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
                                    {NAV_LINKS.map((link) => {

                                        const isHomeHashLink = pathname === "/" && link.href.startsWith("/#");
                                        let isActive = false;

                                        if (isHomeHashLink) {
                                            const hash = link.href.substring(1);
                                            isActive = activeHash === hash;
                                        } else if (pathname === "/" && link.href === "/") {
                                            isActive = activeHash === "";
                                        } else {
                                            isActive = pathname === link.href;
                                        }

                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                aria-current={isActive ? "page" : undefined}
                                                onClick={(e) => {
                                                    setIsOpen(false);
                                                    if (pathname === "/") {
                                                        if (link.href === "/") {
                                                            e.preventDefault();
                                                            setTimeout(() => {
                                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                                            }, 150);
                                                        } else if (link.href.startsWith("/#")) {
                                                            e.preventDefault();
                                                            const targetId = link.href.split("#")[1];
                                                            setTimeout(() => {
                                                                document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                                                            }, 150);
                                                        }
                                                    }
                                                }}
                                                className={cn(
                                                    "relative px-5 py-4 rounded-2xl text-[15px] font-bold tracking-widest uppercase transition-all flex items-center group",
                                                    isActive
                                                        ? "bg-primary/5 text-primary"
                                                        : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                                                )}
                                            >
                                                <span className="flex-1">{link.name}</span>
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="mobile-active"
                                                        className="w-2 h-2 rounded-full bg-primary"
                                                    />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </nav>

                                <div className="mt-8 pt-6 border-t border-border flex flex-col gap-4 pb-8">
                                    <Button asChild variant="outline" className="w-full flex justify-center items-center gap-3 rounded-[1.5rem] border-primary/20 text-primary hover:bg-primary/5 h-14 font-bold text-base shadow-sm">
                                        <a href={`tel:+91${siteConfig.contact.primary}`} aria-label="Call Rigsel Homestay">
                                            <FaPhoneAlt className="h-5 w-5" aria-hidden="true" />
                                            <span>Call Now</span>
                                        </a>
                                    </Button>
                                    <Button asChild className="w-full flex justify-center items-center gap-3 rounded-[1.5rem] bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 font-bold text-base shadow-lg shadow-[#25D366]/20">
                                        <a href={`https://wa.me/91${siteConfig.contact.primary}?text=Hello%20Rigsel%20Homestay!%20I%20would%20like%20to%20know%20more%20about%20booking%20a%20stay.`} target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                            <span>WhatsApp</span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.div>
        </motion.header>
    );
}

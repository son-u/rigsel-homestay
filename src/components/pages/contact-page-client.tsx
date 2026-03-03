"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const PRIMARY_PHONE = `+91 ${siteConfig.contact.primary.slice(0, 5)} ${siteConfig.contact.primary.slice(5)}`;
const SECONDARY_PHONE = `+91 ${siteConfig.contact.secondary.slice(0, 5)} ${siteConfig.contact.secondary.slice(5)}`;
const WHATSAPP_NUMBER = `91${siteConfig.contact.primary}`;

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    checkIn: z.string().min(1, { message: "Check-in date is required." }),
    checkOut: z.string().min(1, { message: "Check-out date is required." }),
    guests: z.string().min(1, { message: "Number of guests is required." }),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPageClient() {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", phone: "", checkIn: "", checkOut: "", guests: "", message: "" },
    });

    function onSubmit(data: FormValues) {
        const waMessage = `*New Booking Inquiry - Rigsel Homestay*%0A%0A*Name:* ${data.name}%0A*Phone:* ${data.phone}%0A*Check-in:* ${data.checkIn}%0A*Check-out:* ${data.checkOut}%0A*Guests:* ${data.guests}%0A*Special Requests:* ${data.message || "None"}`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank");
    }

    return (
        <div className="flex flex-col w-full min-h-screen bg-[#F7F3EE]">
            {/* ── Hero Section ── */}
            <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden" aria-label="Contact page hero">
                <div className="absolute inset-0 z-0" aria-hidden="true">
                    <Image
                        src="/rigsel-homestay-kaffer-gaon-kalimpong-contact-hero.webp"
                        alt="Beautiful mountain view from Rigsel Homestay in Kaffer Gaon, Kalimpong"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EE] via-transparent to-black/30" />
                    <div className="absolute inset-0 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 text-center px-4 mt-16 max-w-3xl mx-auto flex flex-col items-center gap-4">
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-white px-4 py-1.5 rounded-full backdrop-blur-md bg-white/10 border border-white/20"
                    >
                        Get In Touch
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif italic font-medium text-5xl md:text-7xl text-white leading-tight drop-shadow-lg"
                    >
                        Contact & Booking
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl font-light drop-shadow-md"
                    >
                        Ready to wake up in the clouds? Reach out to us directly or send a WhatsApp inquiry to check availability.
                    </motion.p>
                </div>
            </section>

            {/* ── Main Content Area ── */}
            <section className="py-20 sm:py-28 relative" aria-labelledby="contact-heading">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 xl:gap-20 items-start">

                        {/* ══ LEFT — Booking Form ══ */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Card className="border-border/40 shadow-xl overflow-hidden rounded-[1.5rem] bg-white">
                                <div className="bg-primary/5 p-8 sm:p-10 border-b border-border/40 relative overflow-hidden">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
                                    <h2 id="contact-heading" className="font-serif italic font-medium text-3xl sm:text-4xl text-foreground mb-3">Request Availability</h2>
                                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                        Fill out the details below. We handle all bookings directly via WhatsApp for a personalized, secure experience.
                                    </p>
                                </div>
                                <CardContent className="p-8 sm:p-10">
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-label="Booking inquiry form">
                                            <FormField control={form.control} name="name" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-foreground/80">Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Rahul Sharma" {...field} className="bg-muted/30 border-border/50 h-12 focus-visible:ring-primary/30 focus-visible:ring-2" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="phone" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-foreground/80">WhatsApp Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="+91 90000 00000" type="tel" {...field} className="bg-muted/30 border-border/50 h-12 focus-visible:ring-primary/30 focus-visible:ring-2" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <FormField control={form.control} name="checkIn" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-semibold text-foreground/80">Check-in</FormLabel>
                                                        <FormControl>
                                                            <Input type="date" {...field} className="bg-muted/30 border-border/50 h-12 focus-visible:ring-primary/30 focus-visible:ring-2" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                                <FormField control={form.control} name="checkOut" render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="font-semibold text-foreground/80">Check-out</FormLabel>
                                                        <FormControl>
                                                            <Input type="date" {...field} className="bg-muted/30 border-border/50 h-12 focus-visible:ring-primary/30 focus-visible:ring-2" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                            </div>

                                            <FormField control={form.control} name="guests" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-foreground/80">Number of Guests</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="e.g., 2 Adults, 1 Child" {...field} className="bg-muted/30 border-border/50 h-12 focus-visible:ring-primary/30 focus-visible:ring-2" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField control={form.control} name="message" render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-foreground/80">Special Requests / Preferences</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Any dietary requirements or specific room views?"
                                                            className="resize-none h-28 bg-muted/30 border-border/50 focus-visible:ring-primary/30 focus-visible:ring-2"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white flex items-center justify-center gap-2 h-14 rounded-full font-bold shadow-lg shadow-[#25D366]/20 transition-all hover:-translate-y-0.5"
                                                aria-label="Send booking inquiry on WhatsApp"
                                            >
                                                <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
                                                Send Inquiry on WhatsApp
                                            </Button>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* ══ RIGHT — Contact Details & FAQ ══ */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-14"
                        >
                            {/* Direct Contact Cards */}
                            <div>
                                <p
                                    className="inline-flex self-start items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full mb-3"
                                    style={{
                                        background: "rgba(13, 165, 233, 0.1)",
                                        border: "1px solid rgba(13, 165, 233, 0.25)",
                                    }}
                                >
                                    Reach Out
                                </p>
                                <h3 className="font-serif italic font-medium text-4xl text-foreground leading-tight mb-8">Direct Contact</h3>
                                <div className="flex flex-col gap-5">
                                    {/* Phone */}
                                    <div className="group bg-white rounded-2xl border border-border/40 shadow-sm p-5 sm:p-6 flex gap-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FaPhoneAlt size={18} aria-hidden="true" />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Call or WhatsApp</p>
                                            <a href={`tel:${PRIMARY_PHONE.replace(/\s/g, "")}`} className="text-xl font-medium text-foreground hover:text-primary transition-colors" aria-label={`Call us at ${PRIMARY_PHONE}`}>{PRIMARY_PHONE}</a>
                                            <a href={`tel:${SECONDARY_PHONE.replace(/\s/g, "")}`} className="text-xl font-medium text-foreground hover:text-primary transition-colors" aria-label={`Call us at ${SECONDARY_PHONE}`}>{SECONDARY_PHONE}</a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="group bg-white rounded-2xl border border-border/40 shadow-sm p-5 sm:p-6 flex gap-5 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <FaEnvelope size={18} aria-hidden="true" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email Us</p>
                                            <a href={`mailto:${siteConfig.contact.email}`} className="text-lg font-medium text-foreground hover:text-primary transition-colors break-all">
                                                {siteConfig.contact.email}
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="group bg-primary text-white rounded-2xl shadow-xl p-5 sm:p-6 flex gap-5 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" aria-hidden="true" />
                                        <div className="w-12 h-12 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                                            <FaMapMarkerAlt size={18} aria-hidden="true" />
                                        </div>
                                        <address className="not-italic flex flex-col justify-center relative z-10">
                                            <p className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-1">Visit Us</p>
                                            <p className="text-base sm:text-lg font-medium leading-snug">
                                                {siteConfig.name},<br />
                                                {siteConfig.address}
                                            </p>
                                        </address>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div>
                                <p
                                    className="inline-flex self-start items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full mb-3"
                                    style={{
                                        background: "rgba(13, 165, 233, 0.1)",
                                        border: "1px solid rgba(13, 165, 233, 0.25)",
                                    }}
                                >
                                    Good to Know
                                </p>
                                <h3 className="font-serif italic font-medium text-4xl text-foreground leading-tight mb-8">Common Questions</h3>
                                <div className="bg-white rounded-2xl border border-border/40 shadow-sm p-6 sm:p-8">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1" className="border-border/50">
                                            <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl hover:no-underline hover:text-primary transition-colors py-5">
                                                Do you need to pay an advance to book?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-0 pb-6">
                                                No advance booking amount required. You can confirm your stay simply by reaching out via WhatsApp — full payment is settled at check-out.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-2" className="border-border/50">
                                            <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl hover:no-underline hover:text-primary transition-colors py-5">
                                                What are check-in and check-out timings?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-0 pb-6">
                                                Check-in is from 12:00 PM onwards, and check-out is by 11:00 AM. Early check-in or late check-out can be arranged depending on availability — just let us know in advance.
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-3" className="border-border/50">
                                            <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl hover:no-underline hover:text-primary transition-colors py-5">
                                                Is mobile network available in Kaffer Gaon?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-0 pb-6">
                                                Jio and Airtel generally provide decent mobile network coverage at the homestay, though signal strength can occasionally vary in the mountains. It&#39;s perfect for a partial digital detox!
                                            </AccordionContent>
                                        </AccordionItem>
                                        <AccordionItem value="item-4" className="border-border/50 border-b-0">
                                            <AccordionTrigger className="text-left font-serif text-xl sm:text-2xl hover:no-underline hover:text-primary transition-colors py-5">
                                                Are pets allowed at the homestay?
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pt-0 pb-6">
                                                Yes, pets are warmly welcome at Rigsel Homestay! We love animals and have ample open spaces for them to roam freely. Please inform us in advance so we can make suitable arrangements.
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            </div>

                            {/* How to Reach Teaser */}
                            <div className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/15 p-6 sm:p-8 flex flex-col gap-4">
                                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.159.69.159 1.006 0Z" />
                                        </svg>
                                    </div>
                                    <p className="text-xs font-bold tracking-widest uppercase text-primary">Travel Guide</p>
                                </div>
                                <h4 className="font-serif italic font-medium text-2xl sm:text-3xl text-foreground leading-snug">
                                    Planning your route to Kaffer Gaon?
                                </h4>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    Find step-by-step directions from NJP, Bagdogra Airport, and Kalimpong Town — plus cab arrangement tips.
                                </p>
                                <a
                                    href="/how-to-reach"
                                    aria-label="View the complete How to Reach guide for Rigsel Homestay"
                                    className="group inline-flex items-center gap-2 font-bold text-primary hover:text-primary/80 transition-colors text-sm sm:text-base mt-2 relative z-10"
                                >
                                    View Travel Guide
                                    <span className="group-hover:translate-x-1.5 transition-transform duration-200" aria-hidden="true">→</span>
                                </a>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

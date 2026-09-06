import type { Metadata } from "next";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export const metadata: Metadata = {
    title: "Coming Soon — Rigsel Homestay",
    description: "We are currently preparing this section. Check back soon.",
};

export default function ComingSoonPage() {
    return (
        <main className="bg-[#F7F3EE] min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
            <div className="flex flex-col items-center gap-5 max-w-md w-full">
                <p
                    className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-primary px-4 py-1.5 rounded-full"
                    style={{
                        background: "rgba(22, 101, 52, 0.08)",
                        border: "1px solid rgba(22, 101, 52, 0.2)",
                    }}
                >
                    Stay Tuned
                </p>

                <h1 className="font-serif italic font-medium text-4xl sm:text-5xl text-foreground">
                    Coming Soon
                </h1>

                <p className="text-foreground/60 text-base leading-relaxed font-light">
                    We&apos;re currently preparing this section. Check back soon for updates.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        Back to Home
                        <MdArrowForwardIos className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary/30 text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}

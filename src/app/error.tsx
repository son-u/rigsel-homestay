"use client";

import { useEffect } from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function ErrorPage({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        
        console.error(error);
    }, [error]);

    return (
        <main className="bg-[#F7F3EE] min-h-screen flex flex-col items-center justify-center px-4 text-center">
            
            <p className="font-serif italic font-semibold text-[120px] sm:text-[180px] leading-none text-primary/10 select-none">
                Oops
            </p>

            <div className="-mt-6 sm:-mt-10 flex flex-col items-center gap-4 max-w-md">
                <p
                    className="inline-flex items-center text-xs font-bold tracking-[0.22em] uppercase text-secondary px-4 py-1.5 rounded-full"
                    style={{
                        background: "rgba(13, 165, 233, 0.1)",
                        border: "1px solid rgba(13, 165, 233, 0.25)",
                    }}
                >
                    Something Went Wrong
                </p>

                <h1 className="font-serif italic font-medium text-3xl sm:text-4xl text-foreground">
                    An unexpected error occurred
                </h1>

                <p className="text-foreground/60 text-base leading-relaxed font-light">
                    The page ran into an issue. You can try again or head back home while we sort things out.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full sm:w-auto">
                    <button
                        onClick={reset}
                        className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] hover:shadow-xl shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
                    >
                        Try Again
                        <MdArrowForwardIos className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary/30 text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

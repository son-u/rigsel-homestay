"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazySectionProps {
    children: ReactNode;
    placeholderHeight?: string;
    rootMargin?: string;
}

export default function LazySection({
    children,
    placeholderHeight = "h-[400px]",
    rootMargin = "200px",
}: LazySectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(
        () => typeof window !== "undefined" && window.location.hash !== ""
    );

    useEffect(() => {
        if (isVisible) return;

        const show = () => setIsVisible(true);
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href*="#"]');
            if (anchor) show();
        };

        window.addEventListener("hashchange", show, { once: true });
        document.addEventListener("click", handleClick);

        if (typeof IntersectionObserver === "undefined") {
            show();
            return () => {
                window.removeEventListener("hashchange", show);
                document.removeEventListener("click", handleClick);
            };
        }

        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    show();
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", show);
            document.removeEventListener("click", handleClick);
        };
    }, [isVisible, rootMargin]);

    if (!isVisible) {
        return (
            <div
                ref={ref}
                className={`${placeholderHeight} w-full bg-muted/40 animate-pulse`}
                aria-hidden="true"
            />
        );
    }

    return <>{children}</>;
}

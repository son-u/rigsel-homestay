"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface LazySectionProps {
    children: ReactNode;
    /** Height of the placeholder shown before the section mounts. Defaults to "h-[400px]". */
    placeholderHeight?: string;
    /** IntersectionObserver rootMargin — how far before the element enters the viewport to start loading. Defaults to "200px". */
    rootMargin?: string;
}

/**
 * A wrapper that defers rendering its children until the section
 * scrolls into (or near) the viewport. Combines with next/dynamic's
 * code-splitting to truly prevent JS chunks from loading until needed.
 */
export default function LazySection({
    children,
    placeholderHeight = "h-[400px]",
    rootMargin = "200px",
}: LazySectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // If IntersectionObserver isn't supported, just show immediately
        if (typeof IntersectionObserver === "undefined") {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [rootMargin]);

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

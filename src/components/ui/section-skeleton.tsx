export function SectionSkeleton({ height = "h-[500px]" }: { height?: string }) {
    return (
        <div
            className={`${height} w-full bg-muted/40 animate-pulse`}
            aria-hidden="true"
        />
    );
}

export function PageSkeleton() {
    return (
        <div className="flex flex-col w-full min-h-screen gap-0" aria-hidden="true">
            <div className="h-[60vh] min-h-[400px] w-full bg-muted/50 animate-pulse" />
            <div className="h-[500px] w-full bg-muted/30 animate-pulse" />
        </div>
    );
}

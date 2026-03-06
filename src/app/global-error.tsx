"use client";

import { useEffect } from "react";
import { MdArrowForwardIos } from "react-icons/md";


export default function GlobalError({
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
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    minHeight: "100vh",
                    background: "#F7F3EE",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "system-ui, sans-serif",
                    textAlign: "center",
                    padding: "1rem",
                }}
            >
                <p
                    style={{
                        fontSize: "clamp(80px, 20vw, 160px)",
                        lineHeight: 1,
                        fontStyle: "italic",
                        color: "rgba(18, 100, 57, 0.1)",
                        margin: 0,
                        userSelect: "none",
                    }}
                >
                    Error
                </p>

                <div style={{ marginTop: "-1rem", maxWidth: "420px" }}>
                    <p
                        style={{
                            display: "inline-flex",
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#0DA5E9",
                            padding: "6px 16px",
                            borderRadius: "999px",
                            background: "rgba(13,165,233,0.1)",
                            border: "1px solid rgba(13,165,233,0.25)",
                            marginBottom: "12px",
                        }}
                    >
                        Critical Error
                    </p>

                    <h1
                        style={{
                            fontSize: "clamp(24px, 5vw, 32px)",
                            fontStyle: "italic",
                            fontWeight: 500,
                            color: "#011118",
                            margin: "0 0 12px",
                        }}
                    >
                        Something went seriously wrong
                    </h1>

                    <p
                        style={{
                            color: "rgba(1,17,24,0.55)",
                            fontSize: "15px",
                            lineHeight: 1.7,
                            fontWeight: 300,
                            marginBottom: "24px",
                        }}
                    >
                        The application encountered a critical error. Please try refreshing the page.
                    </p>

                    <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                        <button
                            onClick={reset}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                padding: "12px 28px",
                                background: "#126439",
                                color: "#fff",
                                border: "none",
                                borderRadius: "999px",
                                fontWeight: 600,
                                fontSize: "14px",
                                cursor: "pointer",
                            }}
                        >
                            Try Again
                        </button>
                        <a
                            href="/"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                padding: "12px 28px",
                                border: "1px solid rgba(18,100,57,0.3)",
                                color: "#126439",
                                borderRadius: "999px",
                                fontWeight: 600,
                                fontSize: "14px",
                                textDecoration: "none",
                            }}
                        >
                            Back to Home
                        </a>
                    </div>
                </div>
            </body>
        </html>
    );
}

"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            }
        };

        document.addEventListener("mousemove", moveCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return <div ref={cursorRef} className="cb-cursor"></div>;
}
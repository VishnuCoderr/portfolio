"use client";

import { useEffect, useRef } from "react";

/**
 * Thin page-progress bar, clipped to the rounded nav so it follows the pill shape.
 * Updates transform directly through a requestAnimationFrame-throttled scroll
 * listener, so it never re-renders React.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
    >
      <div
        ref={barRef}
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-linear-to-r from-cyan to-lime"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

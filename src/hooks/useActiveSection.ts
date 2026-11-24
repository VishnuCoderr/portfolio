"use client";

import { useEffect, useState } from "react";

/**
 * Returns the id of the last section whose top edge has crossed a line 30% down
 * the viewport. Using section tops (not intersection bands) keeps the result
 * correct for short sections, and sections that do not exist yet are skipped.
 * Scroll updates are throttled with requestAnimationFrame.
 */
export function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = "";
      for (const el of sections) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      setActive(current);
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
  }, [ids]);

  return active;
}

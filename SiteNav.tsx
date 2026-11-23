"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { NAV_ITEMS, SECTION_IDS } from "@/config/navigation";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ScrollProgress } from "./ScrollProgress";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const reduceMotion = useReducedMotion();

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close the mobile menu if the viewport grows to the desktop breakpoint,
  // so aria-expanded never reports an open menu that is hidden.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Primary"
        className="relative mx-auto flex max-w-6xl items-center justify-between rounded-full border border-warm-white/10 bg-midnight/80 px-4 py-2.5 backdrop-blur-md sm:px-6"
      >
        <a
          href="#top"
          onClick={close}
          className="font-display text-lg font-semibold tracking-tight text-lime"
        >
          VK<span className="text-cyan">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:text-warm-white aria-[current=location]:text-lime"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-warm-white/10 md:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-warm-white transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 bg-warm-white transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </span>
        </button>

        <ScrollProgress />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.25, ease: EASE }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-warm-white/10 bg-obsidian p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={close}
                    aria-current={active === item.id ? "location" : undefined}
                    className="block rounded-2xl px-4 py-3 font-display text-xl font-medium text-warm-white transition-colors hover:bg-warm-white/5 aria-[current=location]:text-lime"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

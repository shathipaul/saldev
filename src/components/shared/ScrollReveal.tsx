"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Drives the two scroll-linked reveals from the original page:
 *  - `.rv` elements fade/slide in once, staggered by sibling index
 *  - `.step` rows (OutboundOS) light up in sequence
 * One observer per page instead of a wrapper component around ~40 nodes.
 * Re-runs on every route change so newly rendered pages are picked up.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    const steps = Array.from(document.querySelectorAll<HTMLElement>(".step"));

    if (!("IntersectionObserver" in window) || reduceMotion) {
      reveals.forEach((el) => el.classList.add("in"));
      steps.forEach((el) => el.classList.add("on"));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(el.parentElement?.children ?? []).filter((c) =>
            c.classList.contains("rv"),
          );
          const index = siblings.indexOf(el);
          el.style.transitionDelay = `${index > 0 ? Math.min(index, 5) * 70 : 0}ms`;
          el.classList.add("in");
          revealObserver.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    reveals.forEach((el) => revealObserver.observe(el));

    const timers: number[] = [];
    const stepObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const index = steps.indexOf(el);
          timers.push(window.setTimeout(() => el.classList.add("on"), index * 90));
          stepObserver.unobserve(el);
        }
      },
      { threshold: 0.45 },
    );
    steps.forEach((el) => stepObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      stepObserver.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
}

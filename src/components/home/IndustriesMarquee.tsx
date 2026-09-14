"use client";

import { useEffect, useRef } from "react";
import { MARQUEE_SECTORS } from "@/data/industries";
import { REDUCED_MOTION, useMediaQuery } from "@/hooks/useMediaQuery";

const BEAT_MS = 1900;
const SLIDE_MS = 620;

const LINE = "h-[1.16em] leading-[1.16em] whitespace-nowrap text-orange";

/**
 * Porter-style vertical word marquee: a fixed word plus an overflow-hidden
 * list that advances one line per beat. The list is duplicated so the reset
 * back to the top happens off-screen.
 */
export default function IndustriesMarquee() {
  const listRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);

  useEffect(() => {
    const list = listRef.current;
    if (!list || reducedMotion) return;

    const count = MARQUEE_SECTORS.length;
    let index = 0;
    let lineHeight = 0;
    let resetTimer: number | undefined;

    const measure = () => {
      lineHeight = list.children[0]?.getBoundingClientRect().height ?? 0;
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });

    const interval = window.setInterval(() => {
      if (!lineHeight) {
        measure();
        return;
      }
      index += 1;
      list.style.transition = `transform ${SLIDE_MS}ms cubic-bezier(.7,0,.2,1)`;
      list.style.transform = `translateY(${-index * lineHeight}px)`;
      if (index >= count) {
        resetTimer = window.setTimeout(() => {
          list.style.transition = "none";
          index = 0;
          list.style.transform = "translateY(0px)";
        }, SLIDE_MS + 20);
      }
    }, BEAT_MS);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(resetTimer);
      window.removeEventListener("resize", measure);
      list.style.transition = "";
      list.style.transform = "";
    };
  }, [reducedMotion]);

  return (
    <section className="relative z-[1] pt-5 pb-1" aria-label="Sectors we sell into">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="rv flex flex-wrap items-center gap-4 text-[clamp(26px,4.6vw,52px)] leading-none font-bold tracking-[-.035em] max-cols:gap-2.5">
          <span className="rounded-xl bg-ink px-[13px] py-2 whitespace-nowrap text-white">Built for</span>
          <div className="relative h-[1.16em] overflow-hidden">
            <div ref={listRef} className="flex flex-col [will-change:transform]">
              {MARQUEE_SECTORS.map((sector) => (
                <span key={sector} className={LINE}>
                  {sector}
                </span>
              ))}
              {MARQUEE_SECTORS.map((sector) => (
                <span key={`${sector}-dup`} className={LINE} aria-hidden="true">
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="rv mt-[22px] max-w-[34ch] font-mono text-[12.5px] leading-normal text-ink-5">
          Twelve sectors we already know the buyers in. If your sales cycle runs longer than a
          fortnight, we have run it before.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ClockIcon, DollarIcon, WarnIcon } from "@/components/shared/Icons";
import SectionIntro from "@/components/shared/SectionIntro";
import { REDUCED_MOTION, useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import type { CSSVars } from "@/lib/style";

/** How long each line item stays open while the section runs on its own. */
const DWELL_MS = 5200;

type Line = { n: string; title: string; cost: string; icon: ReactNode; body: string };

const COST_ICON = "size-3.5 text-ink-5 transition-colors duration-[350ms] ease-brand group-[.on]:text-orange";

const LINES: Line[] = [
  {
    n: "01",
    title: "You run it yourself",
    cost: "Costs you the nights",
    icon: <ClockIcon className={COST_ICON} />,
    body: "Setup, warmup, list building, copy, deliverability. It takes the hours you needed for the product. You send forty emails at midnight, get one reply, and quit by week three.",
  },
  {
    n: "02",
    title: "You hire a cheap agency",
    cost: "Costs you the domain",
    icon: <WarnIcon className={COST_ICON} />,
    body: "They point a junior at a bought list and blast it. It lands in spam. Your sending reputation took years to earn and about a month to burn.",
  },
  {
    n: "03",
    title: "You hire an SDR",
    cost: "Costs you two quarters",
    icon: <DollarIcon className={COST_ICON} />,
    body: "Seventy to eighty-five thousand on target earnings, plus three to six months of ramp before you know whether outbound even works for your offer. If it doesn't, you paid for the answer anyway.",
  },
];

/* ---------- exhibits: one per line item ---------- */

const SEND_ROWS = [
  { time: "00:12", width: "max-w-[88%]" },
  { time: "00:19", width: "max-w-[74%]" },
  { time: "00:26", width: "max-w-[83%]" },
  { time: "00:31", width: "max-w-[68%]" },
  { time: "00:38", width: "max-w-[91%]", reply: true },
  { time: "00:51", width: "max-w-[64%]" },
];

const SEND_TOTALS: Array<[string, string, boolean]> = [
  ["40", "emails sent", false],
  ["1", "reply", true],
  ["Week 3", "you stop", false],
];

function SendLogArt() {
  return (
    <>
      <div className="overflow-hidden rounded-[11px] border border-line-2 bg-white shadow-[0_10px_26px_-20px_rgba(0,0,0,.55)]">
        <div className="flex items-center gap-[5px] border-b border-line bg-[#FAFAFA] px-[11px] py-2">
          <i className="block size-[7px] rounded-full bg-[#DEDEDE]" />
          <i className="block size-[7px] rounded-full bg-[#DEDEDE]" />
          <i className="block size-[7px] rounded-full bg-[#DEDEDE]" />
          <span className="ml-[7px] font-mono text-[10.5px] tracking-[.05em] text-ink-5">outbox · 12:47 AM</span>
        </div>
        <div className="py-[7px]">
          {SEND_ROWS.map((row) => (
            <div key={row.time} className="flex items-center gap-2.5 px-3 py-[5px]">
              <span className={cn("w-9 flex-none font-mono text-[10.5px]", row.reply ? "text-orange-soft" : "text-[#B8B8B8]")}>
                {row.time}
              </span>
              <span className={cn("h-1.5 flex-1 rounded-[3px]", row.width, row.reply ? "bg-orange-tint" : "bg-[#EDEDED]")} />
              <span
                className={cn(
                  "w-[26px] flex-none text-right font-mono text-[10px]",
                  row.reply ? "font-medium text-orange" : "text-[#CFCFCF]",
                )}
              >
                {row.reply ? "1 ↵" : "—"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3.5 flex overflow-hidden rounded-[10px] border border-line bg-white">
        {SEND_TOTALS.map(([value, label, hot]) => (
          <div key={label} className="flex-1 border-r border-line px-2 py-2.5 text-center last:border-r-0">
            <b className={cn("block text-[16px] leading-[1.2] font-bold tracking-[-.028em]", hot ? "text-orange" : "text-ink")}>
              {value}
            </b>
            <span className="mt-[3px] block font-mono text-[9px] tracking-[.09em] text-ink-5 uppercase">{label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function SpamVerdictArt() {
  return (
    <>
      <div className="mb-3 flex items-center gap-[7px] font-mono text-[10.5px] tracking-[.06em] text-ink-5 uppercase">
        Inbox
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          className="size-[11px] text-orange-pale"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
        <b className="font-medium text-orange">Spam</b>
      </div>
      <div className="flex items-start gap-2.5 rounded-[11px] border border-[rgba(255,94,0,.24)] bg-[rgba(255,94,0,.07)] px-[13px] py-3">
        <WarnIcon className="mt-px size-4 flex-none text-orange" />
        <p className="text-[12.5px] leading-[1.45] font-semibold text-ink-2">
          This message looks dangerous.
          <em className="mt-0.5 block font-normal text-ink-4 not-italic">
            Every mailbox on the domain inherits the verdict.
          </em>
        </p>
      </div>
      <div className="mt-4">
        <div className="mb-[5px] flex items-baseline justify-between font-mono text-[9.5px] tracking-[.09em] text-ink-5 uppercase">
          <b className="text-[11px] font-medium tracking-normal text-ink-3 normal-case">yourdomain.com</b>
          <span>sending reputation</span>
        </div>
        <svg viewBox="0 0 320 104" fill="none" aria-hidden="true" className="block h-auto w-full">
          <defs>
            <linearGradient id="cliffG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF5E00" stopOpacity=".22" />
              <stop offset="100%" stopColor="#FF5E00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,86 C46,82 82,70 112,58 C148,44 182,32 210,24 L213,25 C224,42 236,68 246,80 C252,87 262,90 280,90 L320,89 L320,104 L0,104 Z"
            fill="url(#cliffG)"
          />
          <path
            d="M0,86 C46,82 82,70 112,58 C148,44 182,32 210,24 L213,25 C224,42 236,68 246,80 C252,87 262,90 280,90 L320,89"
            stroke="#FF5E00"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="211" cy="24" r="4.6" fill="#FFFFFF" stroke="#FF5E00" strokeWidth="2.1" />
        </svg>
        <div className="mt-[5px] flex justify-between border-t border-line pt-1.5 font-mono text-[9.5px] tracking-[.07em] text-ink-5 uppercase">
          <span>years to earn</span>
          <span className="text-orange">about a month to burn</span>
        </div>
      </div>
    </>
  );
}

const RAMP_BARS = ["h-[15%]", "h-[29%]", "h-[43%]", "h-[57%]", "h-[71%]", "h-[86%]"];
const RAMP_MONTHS = ["M1", "M2", "M3", "M4", "M5", "M6", "M7"];

function RampArt() {
  return (
    <>
      <div className="mb-0.5 flex items-baseline gap-[9px]">
        <b className="text-[22px] font-bold tracking-[-.035em] text-ink">$70–85k</b>
        <span className="text-[12px] font-medium text-ink-4">on target earnings</span>
      </div>
      <p className="mb-[18px] text-[12px] text-ink-4">Paid out month by month, whether or not anything lands.</p>
      <div className="relative flex h-[118px] items-end gap-[7px]">
        {RAMP_BARS.map((height) => (
          <i
            key={height}
            className={cn("block flex-1 rounded-t bg-[linear-gradient(180deg,var(--color-orange-pale),var(--color-orange-soft))]", height)}
          />
        ))}
        <i className="block h-full flex-1 rounded-t bg-[linear-gradient(180deg,var(--color-orange-soft),var(--color-orange))]" />
      </div>
      <div className="mt-[7px] flex gap-[7px] border-t border-line pt-[7px] font-mono text-[9.5px] text-ink-5">
        {RAMP_MONTHS.map((month) => (
          <span key={month} className="flex-1 text-center last:text-orange">
            {month}
          </span>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-[7px] text-[11.5px] text-ink-4">
        <i className="block h-px w-5 flex-none bg-orange" />
        Three to six months of ramp. You pay for every one of them.
      </p>
    </>
  );
}

type Exhibit = { label: string; caption: string; art: ReactNode };

const EXHIBITS: Exhibit[] = [
  { label: "Exhibit 01", caption: "Week three, 12:47 a.m.", art: <SendLogArt /> },
  { label: "Exhibit 02", caption: "Your domain, one month later", art: <SpamVerdictArt /> },
  { label: "Exhibit 03", caption: "What you spend before you know", art: <RampArt /> },
];

/** The artifacts stack in one grid cell, so the stage takes the height of the
 *  tallest one and nothing is ever clipped as they swap. */
function ExhibitFigure({ current }: { current: number }) {
  return (
    <figure
      id="exh"
      className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_20px_44px_-34px_rgba(0,0,0,.45)]"
    >
      <figcaption className="flex items-baseline justify-between gap-3.5 border-b border-line bg-[linear-gradient(180deg,#FCFCFC,#FFFFFF)] px-[18px] py-[13px] max-phone:px-[15px] max-phone:py-[11px]">
        <span className="font-mono text-[11px] font-medium tracking-[.1em] whitespace-nowrap text-orange uppercase">
          {EXHIBITS[current].label}
        </span>
        <span className="text-right text-[12.5px] font-medium tracking-[-.01em] text-ink-4 max-phone:text-[11.5px]">
          {EXHIBITS[current].caption}
        </span>
      </figcaption>
      <div className="relative grid min-h-[300px] overflow-hidden bg-[radial-gradient(120%_92%_at_50%_0%,#FFFFFF_0%,#FAFAF9_100%)]">
        {EXHIBITS.map((exhibit, i) => (
          <div
            key={exhibit.label}
            className={cn(
              "exh-art pointer-events-none col-start-1 row-start-1 flex translate-y-[9px] scale-[.986] flex-col justify-center px-5 py-[19px] opacity-0 transition-[opacity,transform] duration-500 ease-brand on:translate-y-0 on:scale-100 on:opacity-100 max-phone:px-4 max-phone:py-[18px]",
              i === current && "on",
            )}
            aria-hidden={i !== current}
          >
            {exhibit.art}
          </div>
        ))}
      </div>
    </figure>
  );
}

/* ---------- the section ---------- */

/**
 * One statement, one exhibit. Opening a line item swaps the exhibit beside
 * it. Until the reader touches anything the lines advance on their own, and
 * the rail down the left of the open line runs as the clock (--dwell drives
 * it). Below 1080px there is no second column, so the exhibit renders inside
 * the open line instead of sitting beside it.
 */
export default function Problem() {
  const reckRef = useRef<HTMLDivElement>(null);
  const headRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [current, setCurrent] = useState(0);
  const [userTookOver, setUserTookOver] = useState(false);
  const [seen, setSeen] = useState(false);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);
  const narrow = useMediaQuery("(max-width: 1080px)");
  const autoplay = !userTookOver && !reducedMotion;

  // autoplay only while the section is on screen
  useEffect(() => {
    const el = reckRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setSeen(entry.isIntersecting), {
      threshold: 0.35,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // the clock: re-armed after every change of line
  useEffect(() => {
    if (!autoplay || !seen) return;
    const timer = window.setTimeout(() => setCurrent((c) => (c + 1) % LINES.length), DWELL_MS);
    return () => window.clearTimeout(timer);
  }, [autoplay, seen, current]);

  const select = useCallback((index: number) => {
    setUserTookOver(true);
    setCurrent(index);
  }, []);

  const onPointerEnter = (index: number) => () => {
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) select(index);
  };

  const onKeyDown = (index: number) => (event: KeyboardEvent<HTMLButtonElement>) => {
    const delta =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0;
    if (!delta) return;
    event.preventDefault();
    setUserTookOver(true);
    headRefs.current[(index + delta + LINES.length) % LINES.length]?.focus();
  };

  const exhibit = <ExhibitFigure current={current} />;

  return (
    <section id="problem" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <div
          id="reck"
          ref={reckRef}
          style={{ "--dwell": autoplay ? `${DWELL_MS}ms` : ".45s" } as CSSVars}
          className="grid grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] items-start gap-[clamp(26px,4vw,58px)] max-split:block"
        >
          {/* LEFT: head + the exhibit that swaps with the open line item.
              Sticky, so the section can run long without the reader
              scrolling away from the evidence. */}
          <div className="sticky top-24 self-start max-split:static">
            <SectionIntro
              className="mb-[26px]"
              eyebrow="The situation"
              title="A quiet calendar has three usual fixes."
              lede={
                <>
                  <b className="font-semibold text-ink">All three send you a bill.</b> Founders cycle
                  through them in roughly this order, and land in the same place each time.
                </>
              }
            />
            {!narrow ? exhibit : null}
          </div>

          {/* RIGHT: the statement */}
          <div className="rv flex self-stretch max-split:mt-[26px]">
            <div className="flex flex-1 flex-col overflow-hidden rounded-lg border border-line bg-white shadow-[0_30px_66px_-50px_rgba(0,0,0,.6)]">
              <div className="flex items-center justify-between gap-3.5 border-b border-line bg-[linear-gradient(180deg,#FCFCFC,#FFFFFF)] px-6 py-[15px] font-mono text-[10.5px] tracking-[.12em] text-ink-5 uppercase max-phone:px-[18px] max-phone:py-[13px] max-phone:text-[9.5px] max-phone:tracking-[.1em]">
                <b className="font-medium text-ink-3">Statement of charges</b>
                <span>3 line items</span>
              </div>

              {/* the statement fills the column; below the last line the ledger rules
                  carry on to the total, the way a printed statement does */}
              <ul
                id="billBody"
                className="flex-1 list-none bg-[repeating-linear-gradient(180deg,transparent_0_43px,var(--color-line)_43px_44px)]"
              >
                {LINES.map((line, i) => {
                  const on = i === current;
                  const panelId = `line-${i + 1}`;
                  return (
                    <li key={line.n} className={cn("li group relative border-b border-line bg-white", on && "on")}>
                      <i className="li-bar absolute inset-y-0 left-0 w-[3px] bg-orange" aria-hidden="true" />
                      <button
                        type="button"
                        ref={(el) => {
                          headRefs.current[i] = el;
                        }}
                        className="li-hd flex w-full cursor-pointer items-center gap-3.5 border-0 bg-none px-6 py-[30px] text-left text-inherit transition-colors duration-[350ms] ease-brand group-hover:bg-[#FCFBFA] focus-visible:outline-2 focus-visible:-outline-offset-[3px] focus-visible:outline-orange max-phone:flex-wrap max-phone:gap-2.5 max-phone:px-[18px] max-phone:py-5"
                        aria-expanded={on}
                        aria-controls={panelId}
                        onClick={() => select(i)}
                        onFocus={() => select(i)}
                        onPointerEnter={onPointerEnter(i)}
                        onKeyDown={onKeyDown(i)}
                      >
                        <span className="flex-none font-mono text-[12px] font-medium text-ink-5 transition-colors duration-[350ms] ease-brand group-[.on]:text-orange">
                          {line.n}
                        </span>
                        <span className="flex-none text-[clamp(16.5px,1.6vw,19px)] font-semi tracking-[-.024em] text-ink max-phone:min-w-0 max-phone:flex-auto">
                          {line.title}
                        </span>
                        <span
                          className="h-px min-w-4 flex-1 translate-y-1 border-b border-dotted border-[#D6D6D6] max-phone:hidden"
                          aria-hidden="true"
                        />
                        <span className="flex flex-none items-center gap-[7px] text-[13px] font-semibold whitespace-nowrap text-ink-4 transition-colors duration-[350ms] ease-brand group-[.on]:text-ink max-phone:basis-full max-phone:pl-[26px]">
                          {line.icon}
                          {line.cost}
                        </span>
                      </button>
                      <div
                        id={panelId}
                        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[550ms] ease-brand group-[.on]:grid-rows-[1fr]"
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[56ch] pr-[26px] pb-1 pl-[52px] text-[15px] leading-[1.63] text-ink-4 max-split:pl-[26px] max-phone:pr-[18px] max-phone:pl-[44px] max-phone:text-[14.6px]">
                            {line.body}
                          </p>
                          <div className="li-slot pr-[26px] pb-[26px] pl-[52px] empty:h-[30px] empty:p-0 max-split:pl-[26px] max-phone:px-[18px] max-phone:pb-[22px] max-phone:empty:h-[22px]">
                            {narrow && on ? exhibit : null}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="flex items-baseline justify-between gap-[18px] bg-ink p-6 text-white max-phone:flex-col max-phone:items-start max-phone:gap-2 max-phone:px-[18px] max-phone:py-5">
                <span className="flex-none font-mono text-[10.5px] tracking-[.13em] text-white/48 uppercase">Total due</span>
                <span className="text-right text-[clamp(16.5px,1.9vw,21px)] font-semi tracking-[-.028em] max-phone:text-left">
                  A calendar that stays quiet
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="rv mt-11 text-center text-[clamp(18px,2.3vw,25px)] font-semibold tracking-[-.025em] text-ink max-phone:mt-[34px]">
          All three end the same way.
          <br />
          <em className="text-orange not-italic">Here is the fourth option.</em>
        </p>
      </div>
    </section>
  );
}

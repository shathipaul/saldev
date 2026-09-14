import Link from "next/link";
import type { ReactNode } from "react";
import { BTN_PRIMARY, BTN_SECONDARY } from "@/components/shared/buttons";
import { ArrowIcon, CheckIcon } from "@/components/shared/Icons";
import { Eyebrow } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/cn";

type Bar = { width: string; tone: string; iconTone: string; delay: string; icon: ReactNode; text: ReactNode };

function BarIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-[15px]"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/* The bill, top to bottom: each bar a little narrower than the last. */
const BARS: Bar[] = [
  {
    width: "w-full",
    tone: "bg-bar-1 text-ink-2",
    iconTone: "bg-white/62",
    delay: "[animation-delay:.12s]",
    icon: (
      <BarIcon>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M3 10h18" />
      </BarIcon>
    ),
    text: (
      <>
        One setup fee, <b className="font-bold">from $1,500 or $2,500</b>
      </>
    ),
  },
  {
    width: "w-[96%] md:w-[93%]",
    tone: "bg-bar-2 text-ink-2",
    iconTone: "bg-white/62",
    delay: "[animation-delay:.24s]",
    icon: (
      <BarIcon>
        <rect x="3" y="4" width="18" height="17" rx="3" />
        <path d="M8 2v4M16 2v4M3 10h18" />
      </BarIcon>
    ),
    text: (
      <>
        <b className="font-bold">$250</b> per held, qualified meeting
      </>
    ),
  },
  {
    width: "w-[92%] md:w-[86%]",
    tone: "bg-bar-3 text-ink-2",
    iconTone: "bg-white/62",
    delay: "[animation-delay:.36s]",
    icon: (
      <BarIcon>
        <path d="M19 5 5 19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </BarIcon>
    ),
    text: (
      <>
        <b className="font-bold">10%</b> of first-year value, on cash collected
      </>
    ),
  },
  {
    width: "w-[88%] md:w-[79%]",
    tone: "bg-orange text-white",
    iconTone: "bg-white/14",
    delay: "[animation-delay:.48s]",
    icon: (
      <BarIcon>
        <circle cx="12" cy="12" r="9" />
        <path d="m5.5 5.5 13 13" />
      </BarIcon>
    ),
    text: (
      <>
        <b className="font-bold">$0</b> monthly fee
      </>
    ),
  },
  {
    width: "w-[84%] md:w-[72%]",
    tone: "bg-ink-3 text-white",
    iconTone: "bg-white/14",
    delay: "[animation-delay:.60s]",
    icon: (
      <BarIcon>
        <path d="M3 11 12 4l9 7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9Z" />
      </BarIcon>
    ),
    text: (
      <>
        Domains and inboxes in your name, <b className="font-bold">cost carried by us</b>
      </>
    ),
  },
  {
    width: "w-[80%] md:w-[65%]",
    tone: "bg-ink text-white",
    iconTone: "bg-white/14",
    delay: "[animation-delay:.72s]",
    icon: (
      <BarIcon>
        <path d="M10 17l5-5-5-5M15 12H3M21 4v16" />
      </BarIcon>
    ),
    text: (
      <>
        <b className="font-bold">Stop any time</b>, keep everything
      </>
    ),
  },
];

const STAMPS: Array<{ strong: string; rest: string }> = [
  { strong: "From $1,500", rest: "once" },
  { strong: "$250", rest: "per held, qualified meeting" },
  { strong: "$0", rest: "monthly" },
];

export default function PricingHero() {
  return (
    <section id="bill" className="relative z-[1] overflow-hidden pt-[52px] pb-10 md:pt-[68px] md:pb-14" aria-labelledby="pricing-title">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="grid grid-cols-1 items-center gap-11 md:grid-cols-[minmax(0,1.02fr)_minmax(0,.98fr)] md:gap-[clamp(32px,5vw,76px)]">
          <div>
            <Eyebrow>How the bill works</Eyebrow>
            <h1
              id="pricing-title"
              className="mt-[18px] mb-[22px] max-w-[14ch] text-[clamp(40px,5.4vw,66px)] leading-[.98] font-extrabold tracking-[-.05em] text-ink md:max-w-[12ch]"
            >
              The bill is as simple as the promise
            </h1>
            <p className="max-w-[50ch] text-[clamp(16.5px,1.75vw,19.5px)] leading-[1.58] tracking-[-.01em] text-ink-4">
              You pay once for the build: domains and inboxes in your name, a hand-built list, copy
              you approve. After that you pay{" "}
              <b className="font-semibold text-ink-2">only for meetings that happen and fit</b> the
              criteria we write down together, plus a share of what those meetings close. No
              retainer, no monthly fee, no minimum term. If nothing is booked, nothing is billed
              after the setup.
            </p>
            <div className="mt-[30px] flex flex-wrap gap-3">
              <Link href="/contact" className={cn(BTN_PRIMARY, "group")}>
                Book a 20-min call
                <ArrowIcon className="size-[15px]" />
              </Link>
              <Link href="/how-it-works" className={BTN_SECONDARY}>
                See the process
              </Link>
            </div>
            <div className="mt-[26px] flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[12px] tracking-[.06em] text-ink-5 uppercase">
              {STAMPS.map((stamp, i) => (
                <span key={stamp.strong} className="contents">
                  {i > 0 ? <i className="block size-1 rounded-full bg-orange-pale" aria-hidden="true" /> : null}
                  <span>
                    <b className="font-medium text-ink-2">{stamp.strong}</b> {stamp.rest}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="relative pt-[18px] md:pt-[34px] md:pb-[10px]">
            <div className="pointer-events-none absolute -inset-x-[30px] -inset-y-10 z-0 overflow-hidden" aria-hidden="true">
              <i className="absolute -top-5 -right-[30px] block size-[220px] rounded-full bg-[rgba(255,94,0,.26)] blur-[38px] md:size-[320px]" />
              <i className="absolute top-[150px] -left-[30px] block size-[220px] rounded-full bg-[rgba(254,140,90,.20)] blur-[38px] md:size-[280px]" />
              <i className="absolute right-[60px] bottom-[10px] block size-[220px] rounded-full bg-[rgba(252,200,174,.42)] blur-[38px] md:size-[240px]" />
            </div>

            {/* one billable meeting, as it would appear on the log */}
            <figure
              className="relative z-[2] mb-[22px] w-full rounded-[20px] border border-line bg-white p-4 shadow-card motion-safe:animate-float md:mb-7 md:ml-auto md:w-[88%] md:max-w-[430px] md:px-[22px] md:pt-[22px] md:pb-[18px]"
              aria-label="Example of one billable meeting. Fictional prospect, invented for illustration."
            >
              <span className="absolute -top-[13px] left-5 rounded-full border border-line-2 bg-white px-2.5 py-1 font-mono text-[10.5px] tracking-[.1em] text-ink-4 uppercase">
                Fictional prospect
              </span>
              <div className="flex items-center gap-3.5">
                <span
                  className="flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#FF5E00,#FE8C5A)] text-[16px] font-bold tracking-[-.02em] text-white shadow-avatar"
                  aria-hidden="true"
                >
                  DR
                </span>
                <div className="flex min-w-0 flex-1 flex-col">
                  <b className="text-[17px] leading-[1.2] font-semi tracking-[-.02em] text-ink">Dana Reyes</b>
                  <span className="mt-0.5 text-[13.5px] text-ink-4">Founder, Relay</span>
                </div>
                <div className="shrink-0 text-right">
                  <b className="block text-[26px] leading-none font-extrabold tracking-[-.045em] text-ink md:text-[30px]">$250</b>
                  <span className="mt-1 block font-mono text-[10px] tracking-[.08em] text-ink-5 uppercase">one meeting</span>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-3.5">
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-orange/10 px-[11px] py-1.5 text-[12.5px] font-semi text-orange-deep">
                  <CheckIcon className="size-3" />
                  Held, qualified
                </span>
                <span className="min-w-[160px] flex-1 text-[12.5px] leading-[1.4] text-ink-4">
                  Booked through our calendar link, attended, fits the criteria written down at kickoff.
                </span>
              </div>
            </figure>

            <ol className="relative z-[1] flex list-none flex-col gap-2" aria-label="How the bill is built, top to bottom">
              {BARS.map((bar, i) => (
                <li
                  key={i}
                  className={cn(
                    "flex min-h-[52px] items-center gap-3 rounded-[13px] px-3.5 py-[9px] text-[13.5px] leading-[1.3] font-mid tracking-[-.012em] shadow-bar motion-safe:animate-slide-in md:py-2.5 md:pr-[18px] md:pl-[11px] md:text-[14px]",
                    bar.width,
                    bar.tone,
                    bar.delay,
                  )}
                >
                  <i className={cn("flex size-[30px] shrink-0 items-center justify-center rounded-[9px] not-italic", bar.iconTone)}>
                    {bar.icon}
                  </i>
                  <span>{bar.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

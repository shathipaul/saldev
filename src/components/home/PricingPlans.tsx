"use client";

import Link from "next/link";
import { useState } from "react";
import { CheckIcon, InfoIcon } from "@/components/shared/Icons";
import { COVERAGE, FEE_ROWS, SETUP_TAGS, type CoverageKey } from "@/data/pricing";
import { cn } from "@/lib/cn";
import PlanArt from "./PlanArt";

const TAG =
  "tag cursor-pointer rounded-[7px] border border-transparent bg-orange-tint px-[9px] py-[5px] text-[12px] leading-[normal] font-semibold text-orange-deep transition-[background,color,transform,border-color] duration-[280ms] ease-brand hover:-translate-y-0.5 hover:bg-orange hover:text-white sel:border-orange sel:bg-orange sel:text-white";

const BADGE =
  "mt-[18px] inline-flex items-center gap-2 rounded-full bg-[rgba(255,94,0,.08)] px-3.5 py-2 text-[13px] font-semibold text-orange-deep";

export default function PricingPlans() {
  const [selected, setSelected] = useState<CoverageKey | null>(null);
  // The last chosen tag keeps its text while the panel collapses.
  const [shown, setShown] = useState<CoverageKey | null>(null);
  const info = shown ? COVERAGE[shown] : null;

  const toggle = (key: CoverageKey) => {
    if (selected === key) {
      setSelected(null);
      return;
    }
    setSelected(key);
    setShown(key);
  };

  return (
    <>
      <div className="relative z-[1] grid grid-cols-[1fr_1.15fr] items-start gap-[18px] max-cols:grid-cols-1">
        <article className="rv relative flex flex-col overflow-hidden rounded-lg border border-line bg-white transition-[transform,box-shadow,border-color] duration-[450ms] ease-brand hover:-translate-y-[5px] hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,.16)]">
          {/* head block, with the halftone artwork bleeding top-right */}
          <div className="relative flex min-h-auto flex-col justify-start border-b border-line bg-white px-6 pt-6 pb-[22px]">
            <div
              className="plan-art pointer-events-none absolute top-[-4px] right-[-2px] size-28 mask-plan-art"
              aria-hidden="true"
            >
              <PlanArt level={2} />
            </div>
            {/* flag sits in flow on the setup card so it can't collide with the title */}
            <span className="mb-3 self-start rounded-full bg-orange px-2.5 py-1 text-[10px] font-bold tracking-[.08em] text-white uppercase">
              One time
            </span>
            <h3 className="relative mb-[7px] max-w-[11ch] text-[21px] font-semi tracking-[-.025em]">
              Build &amp; launch
            </h3>
            <p className="relative max-w-[20ch] text-[13.6px] leading-normal text-ink-4">
              Everything set up, warmed, written and sending.
            </p>
            <p className="relative mt-[15px] flex min-h-[34px] items-baseline gap-[5px]">
              <span className="text-[12.5px] font-medium text-ink-5">from</span>
              <span className="text-[29px] font-bold tracking-[-.04em] text-ink">$1,500</span>
              <span className="text-[13px] font-medium text-ink-5">once</span>
            </p>
          </div>

          <div className="flex-1 px-5 pt-5 pb-[22px] text-center">
            <p className="mb-2.5 text-[12.5px] text-ink-5">Two setups. Pick by channel mix:</p>
            <p className="mb-2 text-[13.5px] leading-normal text-ink-2">
              <b>Email setup, $1,500 once.</b> Cold email only. 10 sending domains and 30 inboxes,
              bought in your name and warmed.
            </p>
            <p className="mb-[18px] text-[13.5px] leading-normal text-ink-2">
              <b>Multichannel setup, $2,500 once.</b> Email, LinkedIn and X together. 25 domains
              and 75 inboxes, plus one LinkedIn profile and one X profile run for you.
            </p>
            <p className="mb-3.5 text-[12.5px] text-ink-5">What the build covers:</p>
            <div className="flex flex-wrap justify-center gap-[7px]">
              {SETUP_TAGS.map((tag) => (
                <button
                  key={tag.key}
                  type="button"
                  aria-pressed={selected === tag.key}
                  onClick={() => toggle(tag.key)}
                  className={cn(TAG, selected === tag.key && "sel")}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 pb-4">
            <Link
              href="/contact"
              className="group inline-flex h-[46px] w-full cursor-pointer items-center justify-center gap-[9px] rounded-[11px] bg-orange px-[26px] text-[14.2px] font-semibold text-white no-underline shadow-[0_12px_28px_-8px_rgba(255,94,0,.62)] transition-[transform,box-shadow,background] duration-300 ease-brand hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_18px_38px_-10px_rgba(255,94,0,.75)]"
            >
              Book a 20-min call
            </Link>
          </div>
        </article>

        <div className="rv rounded-lg border border-line bg-white px-[26px] pt-[26px] pb-5">
          <h3 className="mb-[5px] text-[19px] font-semi tracking-[-.022em]">
            Then, per meeting and per deal
          </h3>
          <p className="mb-5 text-[13.6px] leading-normal text-ink-4">
            No monthly retainer. After the build, you pay when a qualified meeting lands on your
            calendar, and a share of the revenue those meetings close. Nothing else.
          </p>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="border-b border-line pb-2.5 text-left text-[11px] font-bold tracking-[.09em] text-ink-5 uppercase"
                >
                  After launch
                </th>
                <th
                  scope="col"
                  className="border-b border-line pb-2.5 text-right text-[11px] font-bold tracking-[.09em] text-ink-5 uppercase"
                >
                  You pay
                </th>
              </tr>
            </thead>
            <tbody>
              {FEE_ROWS.map((row, i) => {
                const last = i === FEE_ROWS.length - 1;
                return (
                  <tr key={row.item}>
                    <td className={cn("py-[13px] text-[14.6px] text-ink-3", !last && "border-b border-line")}>
                      {row.item}
                    </td>
                    <td
                      className={cn(
                        "py-[13px] text-right text-[14.6px] font-semi text-ink",
                        !last && "border-b border-line",
                      )}
                    >
                      {row.price}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-4 text-[13px] leading-normal text-ink-5">
            A meeting counts only if it fits the ICP we agreed and the prospect shows up. If someone
            no-shows we chase the rebook: attend within 14 days and it is billable, otherwise you are
            not invoiced. Prospects outside the agreed profile are never billed, and you can reject a
            meeting within 5 business days if it clearly misses the written criteria. The 10% is on
            first-year contract value for deals that close within 12 months of the meeting, paid
            monthly as you collect the cash; if a customer churns or refunds inside 90 days, it comes
            back off the next invoice.
          </p>
          <div className={BADGE}>
            <CheckIcon className="size-3.5" />
            You pay for meetings, not months
          </div>
          <div className={`${BADGE} ml-2`}>
            <CheckIcon className="size-3.5" />
            First engagement is a capped pilot
          </div>
        </div>
      </div>

      {/* click-a-tag hint + reveal panel */}
      <p className="rv relative z-[1] mt-7 flex flex-wrap items-center justify-center gap-2 text-center text-[14px] text-ink-4">
        <InfoIcon className="size-[15px] text-orange" />
        Click any{" "}
        <span className="rounded-[7px] bg-orange-tint px-2 py-[3px] text-[12px] font-semibold text-orange-deep">
          tag
        </span>{" "}
        to see what it covers
      </p>
      <div
        id="reveal"
        aria-live="polite"
        className={cn(
          "relative z-[1] mx-auto mt-[18px] max-h-0 max-w-[660px] overflow-hidden rounded-md border border-line-2 bg-white px-5 py-0 opacity-0 transition-[max-height,opacity,padding] duration-[450ms] ease-brand on:max-h-[240px] on:py-[18px] on:opacity-100",
          selected && "on",
        )}
      >
        <p className="mb-1.5 text-[14.5px] font-semi text-ink">{info?.title}</p>
        <p className="text-[14.2px] leading-[1.6] text-ink-4">{info?.text}</p>
      </div>

      <p className="rv relative z-[1] mt-[22px] text-center text-[13.5px] text-ink-5">
        Domains, inboxes, and tools are bought in your name and we carry their running cost after
        the build, so there is no monthly bill. You own the domains, lists, copy and playbook from
        day one.
      </p>
    </>
  );
}

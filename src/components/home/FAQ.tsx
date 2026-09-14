"use client";

import { Fragment, useState } from "react";
import SectionIntro from "@/components/shared/SectionIntro";
import { FAQ_COLUMNS, type FaqItem } from "@/data/faq";
import { cn } from "@/lib/cn";

type EntryProps = {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
  className?: string;
};

/**
 * One accordion row. Open state lives in a data attribute rather than the
 * class list so the scroll-reveal `.in` class React does not know about
 * survives re-renders.
 */
function FaqEntry({ item, open, onToggle, className }: EntryProps) {
  const panelId = `faq-${item.id}`;
  const buttonId = `${panelId}-button`;

  return (
    <div
      className={cn("q rv group border-b border-line-2 first:border-t first:border-t-line-2", className)}
      data-open={open ? "" : undefined}
    >
      <h3 className="text-[16.5px] leading-[1.4] font-semibold tracking-[-.018em] text-ink">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-start justify-between gap-5 border-none bg-none px-1 py-6 text-left"
        >
          <span>{item.question}</span>
          <span
            className="mt-px flex size-[26px] shrink-0 items-center justify-center rounded-full border border-line-2 transition-all duration-[400ms] ease-brand group-data-[open]:border-orange group-data-[open]:bg-orange"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              className="size-3 text-ink-4 transition-transform duration-[400ms] ease-brand group-data-[open]:rotate-45 group-data-[open]:text-white"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        inert={!open}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-brand group-data-[open]:grid-rows-[1fr]"
      >
        <div className="overflow-hidden">
          {item.answer.map((paragraph, p) => (
            <p
              key={p}
              className={cn("pt-0 pr-[34px] pb-[26px] pl-1 text-[15px] leading-[1.68] text-ink-4", p > 0 && "mt-3")}
            >
              {paragraph.map((segment, s) =>
                typeof segment === "string" ? (
                  <Fragment key={s}>{segment}</Fragment>
                ) : (
                  <b key={s} className="font-semibold text-ink-2">
                    {segment.b}
                  </b>
                ),
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          align="center"
          titleMax="max-w-[20ch]"
          eyebrow="Objections"
          title="The questions that come up on every call"
        />

        <div className="mx-auto grid max-w-[1100px] grid-cols-2 items-start gap-x-9 gap-y-0 max-faq:max-w-[840px] max-faq:grid-cols-1 max-faq:gap-0">
          {FAQ_COLUMNS.map((column, c) => (
            <div key={c} className="faq-col flex min-w-0 flex-col">
              {column.map((item) => (
                <FaqEntry
                  key={item.id}
                  item={item}
                  open={openId === item.id}
                  onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
                  className={c === 1 ? "max-faq:first:border-t-0" : undefined}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

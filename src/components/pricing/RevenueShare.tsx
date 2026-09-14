import SectionIntro from "@/components/shared/SectionIntro";
import { REVENUE_STEPS } from "@/data/pricing-page";
import { cn } from "@/lib/cn";

/* 1 column, then 3, then 5; the rules between steps move with the grid. */
const STEP = [
  "first:pt-0 sm:pr-[22px]",
  "sm:border-l sm:pr-[22px] sm:pl-[22px]",
  "sm:border-l sm:pr-[22px] sm:pl-[22px]",
  "sm:pr-[22px] lg:border-l lg:pl-[22px]",
  "sm:border-l sm:pl-[22px]",
];

export default function RevenueShare() {
  return (
    <section id="revenue-share" className="relative z-[1] py-24" aria-labelledby="revenue-title">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="The 10%"
          title="How the revenue share works, step by step."
          lede={
            <>
              <b className="font-semibold text-ink">It only applies to deals that started with a meeting we booked.</b>{" "}
              First-year value only, paid as you collect, and credited back if the customer leaves early.
            </>
          }
        />

        <div className="rounded-[22px] border border-line bg-white p-[clamp(28px,4vw,44px)] shadow-ten">
          <ol className="grid list-none grid-cols-1 sm:grid-cols-3 sm:gap-y-7 lg:grid-cols-5 lg:gap-0">
            {REVENUE_STEPS.map((step, i) => (
              <li
                key={step.title}
                className={cn("border-t border-line py-[18px] sm:border-t-0 sm:py-0", STEP[i])}
              >
                <span
                  className="mb-2.5 inline-flex size-[30px] items-center justify-center rounded-full border border-orange-pale bg-orange/5 font-mono text-[12px] font-medium text-orange sm:mb-3.5"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-1.5 text-[15.5px] leading-[1.35] font-semibold tracking-[-.015em] text-ink">{step.title}</h3>
                <p className="text-[13.8px] leading-[1.55] text-ink-4">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid grid-cols-1 items-start gap-2.5 rounded-[14px] border border-dashed border-orange-pale bg-bg px-[22px] py-5 sm:grid-cols-[auto_1fr] sm:gap-x-[18px] sm:gap-y-3.5">
            <span className="inline-flex w-fit max-w-full items-center rounded-full bg-orange px-2.5 py-[5px] text-[10.5px] font-bold tracking-[.08em] text-white uppercase sm:mt-0.5 sm:whitespace-nowrap">
              Example, invented numbers, not a forecast
            </span>
            <p className="text-[14.5px] leading-[1.65] text-ink-4">
              Say a deal closes at <b className="font-semibold text-ink">$12,000</b> first-year value,
              four months after a meeting we booked. The share is{" "}
              <code className="rounded-[5px] bg-orange/8 px-1.5 py-px font-mono text-[13px] text-ink">
                10% × $12,000 = $1,200
              </code>
              , paid to us in the months you collect that money. If that customer churned inside 90
              days, the $1,200 would be credited back on the next invoice. Your deals will not look
              like this one; the point is the shape of the rule.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

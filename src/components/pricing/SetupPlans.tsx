import Link from "next/link";
import { ArrowIcon, CheckIcon } from "@/components/shared/Icons";
import SectionIntro from "@/components/shared/SectionIntro";
import { INCLUDED_EVERY_SETUP, SETUPS, type Setup } from "@/data/pricing-page";
import { cn } from "@/lib/cn";

function SetupCard({ setup, second }: { setup: Setup; second?: boolean }) {
  return (
    <article
      className={cn(
        "py-[34px] md:pt-10 md:pb-11",
        second ? "border-t border-line-2 md:border-t-0 md:border-l md:pl-11" : "md:pr-11",
      )}
    >
      <span className="font-mono text-[11.5px] font-medium tracking-[.1em] text-orange uppercase">{setup.n}</span>
      <h3 className="mt-2.5 mb-1.5 text-[26px] font-bold tracking-[-.03em] text-ink">{setup.name}</h3>
      <p className="mt-2 mb-3.5 flex flex-wrap items-baseline gap-2">
        <span className="text-[13px] font-medium text-ink-5">from</span>
        <span className="text-[clamp(34px,3.6vw,44px)] leading-none font-bold tracking-[-.04em] text-ink">{setup.price}</span>
        <span className="text-[14px] text-ink-4">once</span>
      </p>
      <p className="max-w-[40ch] text-[15px] leading-[1.6] text-ink-4">{setup.blurb}</p>
      <ul className="mt-[22px] flex list-none flex-col gap-[9px]">
        {setup.includes.map((item) => (
          <li key={item} className="flex gap-[11px] text-[14.5px] leading-[1.5] text-ink-3">
            <CheckIcon className="mt-[3px] size-4 shrink-0 text-orange" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="group mt-6 inline-flex items-center gap-[7px] text-[14.5px] font-semibold text-ink no-underline"
      >
        Book a 20-min call
        <ArrowIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-[3px]" />
      </Link>
    </article>
  );
}

export default function SetupPlans() {
  return (
    <section id="setups" className="relative z-[1] py-24" aria-labelledby="setups-title">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="The setup"
          title="Two setups. Same terms after launch."
          lede={
            <>
              <b className="font-semibold text-ink">Both are “from” prices.</b> List size and sending
              volume move the number, and you get the exact figure before the first call ends. Launch
              is about two weeks after kickoff.
            </>
          }
        />

        <div className="grid grid-cols-1 border-t border-b border-line-2 md:grid-cols-2">
          <SetupCard setup={SETUPS[0]} />
          <SetupCard setup={SETUPS[1]} second />
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-2.5 rounded-[14px] border border-line bg-white px-7 py-[26px] md:grid-cols-[auto_1fr] md:gap-x-[26px] md:gap-y-[18px]">
          <span className="font-mono text-[11.5px] font-medium tracking-[.1em] whitespace-nowrap text-orange uppercase md:pt-1">
            After launch, either setup
          </span>
          <p className="text-[15.5px] leading-[1.6] text-ink-4">
            <b className="font-semibold text-ink">$250 per held, qualified meeting,</b> invoiced monthly
            in arrears with the meeting log attached.{" "}
            <b className="font-semibold text-ink">Plus 10% of first-year contract value</b> on deals
            closed from meetings we booked, for deals that close within 12 months of the meeting, paid
            monthly as you collect the cash. If a customer churns or refunds inside 90 days, that 10%
            is credited back on the next invoice.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="mb-[18px] text-[13px] font-semibold tracking-[.08em] text-ink-4 uppercase">
            Included on every setup
          </h3>
          <ul className="grid list-none grid-cols-1 gap-y-2.5 md:grid-cols-2 md:gap-x-10">
            {INCLUDED_EVERY_SETUP.map((item) => (
              <li key={item} className="flex gap-[11px] border-b border-line py-1.5 text-[14.5px] leading-[1.5] text-ink-3">
                <CheckIcon className="mt-[3px] size-[15px] shrink-0 text-orange" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-[22px] text-[14px] leading-[1.6] text-ink-5">
            <b className="font-medium text-ink-4">Start with Email and add LinkedIn and X later?</b> You
            pay the difference between the two setups. Per-meeting and revenue-share terms stay the
            same. We commit to going live within 14 days of your approval of list and copy.
          </p>
        </div>
      </div>
    </section>
  );
}

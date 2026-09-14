import Link from "next/link";
import SectionIntro from "@/components/shared/SectionIntro";
import { SERVICE_SETUPS } from "@/data/services";

export default function ServicesPricing() {
  return (
    <section id="pricing" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="Pricing"
          title="One setup fee. Then you pay per meeting, and a share of what closes."
          lede={
            <>
              <b className="font-semibold text-ink">No retainer.</b> You pay once for the build, then $250 for
              every held, qualified meeting we put on your calendar, plus 10% of the revenue those meetings
              close. If nothing happens, nothing is billed after the setup.{" "}
              <Link href="/pricing" className="font-semibold text-orange no-underline">
                Full pricing and billing rules →
              </Link>
            </>
          }
        />

        <div className="rv grid grid-cols-2 gap-4 max-eq:grid-cols-1">
          {SERVICE_SETUPS.map((setup) => (
            <div key={setup.name} className="relative rounded-lg border border-line bg-white px-[26px] pt-[26px] pb-[22px]">
              <span className="mb-3.5 inline-block rounded-full bg-orange-tint px-[9px] py-1 text-[10.5px] font-bold tracking-[.1em] text-orange-deep uppercase">
                One time
              </span>
              <h3 className="mb-1.5 text-[20px] font-bold tracking-[-.025em]">{setup.name}</h3>
              <p className="mt-1.5 mb-1 text-[34px] font-extrabold tracking-[-.04em]">
                {setup.price}
                <small className="ml-1.5 text-[13px] font-medium tracking-normal text-ink-5">once</small>
              </p>
              <p className="text-[14.5px] leading-[1.55] text-ink-4">{setup.blurb}</p>
              <ul className="mt-3.5 flex list-none flex-col gap-[7px]">
                {setup.includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-[9px] text-[14px] text-ink-3 before:mt-2 before:block before:size-1.5 before:flex-none before:rounded-full before:bg-orange before:content-['']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rv mt-4 grid grid-cols-[auto_1fr] items-start gap-x-7 gap-y-[18px] rounded-lg bg-ink px-7 py-[26px] text-white max-eq:grid-cols-1">
          <div className="text-[clamp(28px,3.4vw,40px)] leading-[1.05] font-extrabold tracking-[-.04em] text-white">
            $250
            <small className="mt-1.5 block text-[12px] font-semibold tracking-[.08em] text-orange-soft uppercase">
              per held, qualified meeting
            </small>
          </div>
          <div>
            <p className="text-[14.5px] leading-[1.6] text-[#d6d6d6]">
              <b className="font-semibold text-white">Held</b> means the prospect attends.{" "}
              <b className="font-semibold text-white">Qualified</b> means it meets the criteria we write down on
              the kickoff call: company fit, role, geography, genuine interest, booked through our calendar
              link. No-shows aren’t billed; we get 14 days to rebook them. You can reject a meeting within 5
              business days if it clearly fails the written criteria, not because the prospect didn’t buy.
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#d6d6d6]">
              <b className="font-semibold text-white">Plus 10% of the revenue those meetings close.</b> First-year
              contract value on deals closed from meetings we booked, paid monthly as you collect the cash, for
              deals that close within 12 months of the meeting. If a customer churns or refunds inside 90 days,
              that 10% comes back off the next invoice.
            </p>
            <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#d6d6d6]">
              Domains, inboxes and tools stay in your name, and we carry their running cost after setup. There is
              no monthly bill of any kind. No minimum term. Stop any time. “From” because list size and volume
              move the setup number; you’ll have an exact figure before our call ends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

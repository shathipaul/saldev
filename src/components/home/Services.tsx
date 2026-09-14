import Link from "next/link";
import SectionIntro from "@/components/shared/SectionIntro";

type Channel = { sign: string; name: string; tag?: string; blurb: string };

const CHANNELS: Channel[] = [
  {
    sign: "",
    name: "Email",
    blurb: "Researched sequences from dedicated, warmed domains. One person, one reason to reply.",
  },
  {
    sign: "+",
    name: "LinkedIn",
    blurb: "Connect, engage, then DM the decision makers you actually want.",
  },
  {
    sign: "+",
    name: "X",
    tag: "Rare",
    blurb:
      "Founder-to-founder DMs where your buyers already spend the day. Almost nobody else runs it.",
  },
];

const ROW =
  "group relative flex items-baseline gap-[.16em] border-b border-line-2 py-[.04em] text-[clamp(54px,9vw,118px)] leading-[.98] font-extrabold tracking-[-.05em] text-ink outline-none transition-colors duration-300 ease-brand hover:text-orange focus:text-orange max-eq:flex-wrap max-eq:gap-y-1";

const BLURB =
  "ml-auto max-w-[30ch] translate-x-2 text-right text-[clamp(13px,1.1vw,15px)] leading-[1.45] font-medium tracking-normal text-ink-4 opacity-0 transition-[opacity,transform] duration-[350ms] ease-brand group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100 no-hover:translate-x-0 no-hover:opacity-100 no-hover:transition-none max-eq:mx-0 max-eq:mt-0 max-eq:mb-1.5 max-eq:max-w-none max-eq:basis-full max-eq:translate-x-0 max-eq:text-left max-eq:opacity-100 max-eq:transition-none";

export default function Services() {
  return (
    <section id="services" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="What we run"
          title="Three channels. One system."
          lede={
            <>
              <b className="font-semibold text-ink">
                The channels are the how. Booked calls are the what.
              </b>{" "}
              You are buying the what.
            </>
          }
        />

        {/* "the equation" */}
        <div className="rv grid grid-cols-[1fr_auto] items-end gap-10 max-eq:grid-cols-1 max-eq:gap-[22px]">
          <ul className="list-none">
            {CHANNELS.map((channel) => (
              <li key={channel.name} tabIndex={0} className={ROW}>
                <span
                  className="inline-block min-w-[.9em] text-[.62em] font-medium tracking-[-.02em] text-orange"
                  aria-hidden="true"
                >
                  {channel.sign}
                </span>
                <span>{channel.name}</span>
                {channel.tag ? (
                  <span className="self-center rounded-full bg-orange-tint px-2 py-1 text-[11px] leading-[1.2] font-bold tracking-[.08em] text-orange-deep uppercase">
                    {channel.tag}
                  </span>
                ) : null}
                <span className={BLURB}>{channel.blurb}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-end gap-2 pb-[.1em] max-eq:items-start">
            <span
              className="text-[clamp(54px,9vw,118px)] leading-none font-extrabold tracking-[-.05em] text-orange"
              aria-hidden="true"
            >
              =
            </span>
            <span className="text-right text-[clamp(20px,2.2vw,28px)] leading-[1.2] font-bold tracking-[-.03em] text-ink max-eq:text-left">
              One system. One sequence.
              <br />
              One calendar filling up.
            </span>
            <span className="max-w-[26ch] text-right text-[14px] text-ink-4 max-eq:text-left">
              Every touch knows what the other two said.
            </span>
          </div>
        </div>

        <div className="rv mt-[26px] flex flex-wrap justify-between gap-[18px] border-t border-line-2 pt-3.5 text-[13.5px] text-ink-4">
          <span>
            <b className="font-semibold text-ink">Underneath all three:</b> dedicated domains, never
            your primary · warm-up first · SPF, DKIM, DMARC · slow ramp · placement watched daily ·
            backup domains warming.
          </span>
          <span className="max-eq:hidden">
            Hover a channel for the one-liner.{" "}
            <Link href="/services" className="font-semibold text-orange no-underline">
              See everything that’s included →
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}

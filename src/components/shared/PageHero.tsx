import type { ReactNode } from "react";

export type HeroStamp = { label?: string; value: string; suffix?: string };

type Props = {
  eyebrow: string;
  /** First line of the heading, in ink. */
  titleLine: string;
  /** Second line of the heading, in the orange gradient. */
  gradientLine: string;
  lede: ReactNode;
  /** Mono stamp row under the lede; omitted on the legal pages. */
  stamps?: HeroStamp[];
  titleId?: string;
};

/** Left-aligned page hero used by the secondary pages. */
export default function PageHero({ eyebrow, titleLine, gradientLine, lede, stamps, titleId = "page-title" }: Props) {
  return (
    <section className="relative z-[1] pt-[78px] pb-2 max-cols:pt-[52px] max-cols:pb-1" aria-labelledby={titleId}>
      <div className="mx-auto w-full max-w-page px-6">
        <p className="rv mb-[22px] text-[12.5px] font-bold tracking-[.16em] text-orange uppercase">{eyebrow}</p>

        <h1
          id={titleId}
          className="rv mt-5 mb-[22px] text-[clamp(38px,6.2vw,74px)] leading-[1.02] font-extrabold tracking-[-.042em] text-ink"
        >
          {titleLine}
          <br />
          <span className="bg-[linear-gradient(105deg,var(--color-orange)_8%,var(--color-orange-soft)_92%)] bg-clip-text text-transparent">
            {gradientLine}
          </span>
        </h1>

        <p className="rv max-w-[58ch] text-[clamp(17px,2vw,21px)] leading-[1.55] tracking-[-.011em] text-ink-4">{lede}</p>

        {stamps?.length ? (
          <div className="rv mt-[34px] flex flex-wrap items-center gap-x-4 gap-y-2.5 font-mono text-[12px] tracking-[.07em] text-ink-5 uppercase">
            {stamps.map((stamp, i) => (
              <span key={`${stamp.label ?? ""}-${stamp.value}`} className="contents">
                {i > 0 ? <i className="block size-1 rounded-full bg-orange-pale" aria-hidden="true" /> : null}
                <span>
                  {stamp.label ? `${stamp.label} ` : null}
                  <b className="font-medium text-ink-2">{stamp.value}</b>
                  {stamp.suffix ? ` ${stamp.suffix}` : null}
                </span>
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

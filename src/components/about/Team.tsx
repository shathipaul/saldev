import RichText from "@/components/shared/RichText";
import SectionIntro from "@/components/shared/SectionIntro";
import { FOUNDERS, type Founder } from "@/data/about";

function FounderCard({ founder }: { founder: Founder }) {
  return (
    <article className="rv relative overflow-hidden rounded-lg border border-line bg-white px-[30px] py-8 transition-[transform,box-shadow,border-color] duration-[450ms] ease-brand hover:-translate-y-1 hover:border-orange-pale hover:shadow-[0_24px_48px_-22px_rgba(255,94,0,.3)] max-phone:px-[22px] max-phone:py-[26px]">
      <div className="mb-[22px] flex items-center gap-4">
        {/* monogram until a photo is supplied */}
        <span
          className="relative grid size-[62px] flex-none place-items-center overflow-hidden rounded-full bg-[linear-gradient(150deg,var(--color-orange-soft),var(--color-orange))] text-[24px] font-bold tracking-[-.02em] text-white shadow-[0_8px_20px_-10px_rgba(255,94,0,.6)]"
          aria-hidden="true"
        >
          {founder.monogram}
        </span>
        <div>
          <h3 className="text-[20px] leading-[1.2] font-bold tracking-[-.028em] text-ink">{founder.name}</h3>
          <span className="mt-[5px] block font-mono text-[11px] tracking-[.07em] text-orange uppercase">
            {founder.role}
          </span>
        </div>
      </div>

      {founder.paragraphs.map((paragraph, i) => (
        <p key={i} className={i > 0 ? "mt-3 text-[15.5px] leading-[1.64] text-ink-4" : "text-[15.5px] leading-[1.64] text-ink-4"}>
          {paragraph}
        </p>
      ))}

      {founder.rule ? (
        <div className="relative mt-5 rounded-xl border border-orange-pale bg-[linear-gradient(140deg,rgba(255,94,0,.07),rgba(254,140,90,.02))] py-4 pr-[18px] pl-5 before:absolute before:top-3 before:bottom-3 before:left-0 before:w-[3px] before:rounded-[3px] before:bg-orange before:content-['']">
          <span className="mb-[7px] block font-mono text-[9.5px] tracking-[.12em] text-orange uppercase">
            {founder.rule.label}
          </span>
          <p className="text-[16px] leading-[1.5] font-semibold tracking-[-.018em] text-ink">{founder.rule.text}</p>
        </div>
      ) : null}

      <ul className="mt-[22px] list-none border-t border-line pt-5">
        {founder.facts.map((fact) => (
          <li key={fact.label} className="flex items-baseline gap-3 py-1.5 text-[14px] text-ink-4">
            <b className="w-24 flex-none font-mono text-[11px] font-medium tracking-[.06em] text-ink-5 uppercase max-phone:w-[76px]">
              {fact.label}
            </b>
            <span className="min-w-0 flex-1">
              <RichText runs={fact.value} emphasisClassName="font-semibold text-ink not-italic" />
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="The two of us"
          title="You will always know who is sending your emails."
          lede={
            <>
              <b className="font-semibold text-ink">
                No junior, no pod, no account manager standing between you and the work.
              </b>{" "}
              The person who pitched you is the person writing your sequences.
            </>
          }
        />

        <div className="grid grid-cols-2 gap-[18px] max-cols:grid-cols-1">
          {FOUNDERS.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>

        <div className="rv mt-[18px] flex flex-wrap items-center gap-4 rounded-lg border border-line bg-white px-6 py-5 max-phone:p-[18px]">
          <span
            className="grid size-10 flex-none place-items-center rounded-xl border border-orange-pale bg-[rgba(255,94,0,.09)]"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="size-[18px] text-orange"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
            </svg>
          </span>
          <p className="min-w-[230px] flex-1 text-[15.5px] leading-[1.55] text-ink-4">
            <b className="font-semibold text-ink">Dhaka and Kuwait, working United States hours.</b> That
            means your whole working day, not a two-hour overlap in your morning. A reply that lands at
            10am your time gets handled at 10am your time.
          </p>
          <span className="flex flex-none items-center gap-2 font-mono text-[11px] tracking-[.08em] text-ink-5 uppercase max-phone:w-full">
            <i className="block size-1.5 animate-pulse-ring rounded-full bg-orange shadow-[0_0_0_3px_rgba(255,94,0,.18)]" aria-hidden="true" />
            US hours, always
          </span>
        </div>
      </div>
    </section>
  );
}

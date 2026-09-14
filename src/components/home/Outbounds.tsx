import { Eyebrow } from "@/components/shared/SectionIntro";
import StairTail from "@/components/shared/StairTail";
import { STEPS } from "@/data/steps";

export default function Outbounds() {
  return (
    <section id="how" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="os rv relative overflow-hidden rounded-[28px] bg-ink px-12 py-14 max-cols:rounded-[22px] max-cols:px-[26px] max-cols:py-10">
          <div className="relative z-[2]">
            <div className="mb-11">
              <Eyebrow tone="dark">The system</Eyebrow>
              <h2 className="mt-4 mb-3 text-[clamp(30px,4.2vw,46px)] leading-[1.06] font-bold tracking-[-.035em] text-white">
                OutboundOS
              </h2>
              <p className="max-w-[52ch] text-[17px] leading-[1.55] text-white/62">
                Five stages, one system, from ideal customer to booked meeting.
              </p>
            </div>

            <ol id="steps" className="flex list-none flex-col">
              {STEPS.map((step) => (
                <li
                  key={step.n}
                  className="step group relative grid grid-cols-[56px_1fr] gap-[22px] border-b border-white/8 py-[22px] last:border-b-0 max-mini:grid-cols-[44px_1fr] max-mini:gap-4"
                >
                  <div className="relative flex flex-col items-center" aria-hidden="true">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/14 bg-white/6 font-mono text-[13px] font-medium text-white/75 transition-all duration-500 ease-brand group-[.on]:border-transparent group-[.on]:bg-[linear-gradient(135deg,var(--color-orange),var(--color-orange-soft))] group-[.on]:text-white group-[.on]:shadow-[0_8px_22px_-6px_rgba(255,94,0,.7)]">
                      {step.n}
                    </div>
                    <div className="absolute top-11 bottom-[-22px] w-px bg-white/12 group-last:hidden">
                      <i className="absolute top-0 left-0 h-0 w-px bg-[linear-gradient(180deg,var(--color-orange),var(--color-orange-soft))] transition-[height] duration-[800ms] ease-brand group-[.on]:h-full" />
                    </div>
                  </div>
                  <div className="pt-[5px]">
                    <p className="mb-[7px] text-[12px] font-bold tracking-[.14em] text-orange-soft uppercase">
                      {step.stage}
                    </p>
                    <h3 className="mb-[9px] text-[20px] font-semibold tracking-[-.022em] text-white">
                      {step.title}
                    </h3>
                    <p className="max-w-[62ch] text-[15px] leading-[1.64] text-white/60">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <StairTail />
      </div>
    </section>
  );
}

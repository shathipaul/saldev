import { ArrowIcon } from "@/components/shared/Icons";
import SectionIntro from "@/components/shared/SectionIntro";
import { DROPPED_SERVICES, KEPT_CHANNELS } from "@/data/about";
import { cn } from "@/lib/cn";

const KICKER = "mb-5 block font-mono text-[10.5px] tracking-[.12em] uppercase";

/* the dropped services get struck through, one after another, once the card
   has revealed (ScrollReveal adds `.in` to the `.rv group` card) */
const STRIKE =
  "relative w-fit max-w-full py-2 text-[16.5px] font-medium text-ink-3 transition-colors duration-[600ms] ease-brand group-[.in]:text-ink-5 after:absolute after:top-[52%] after:right-[-2px] after:left-[-2px] after:h-[1.5px] after:origin-left after:scale-x-0 after:rounded-[2px] after:bg-orange after:transition-transform after:duration-[600ms] after:ease-brand after:content-[''] group-[.in]:after:scale-x-100";
const STRIKE_DELAYS = ["after:delay-[100ms]", "after:delay-[220ms]", "after:delay-[340ms]", "after:delay-[460ms]"];

export default function TheCut() {
  return (
    <section id="focus" className="relative z-[1] pt-5 pb-24 max-cols:pb-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="What we cut"
          title="We used to say yes to everything."
          lede={
            <>
              <b className="font-semibold text-ink">Four services, one small team, adequate at all of them.</b>{" "}
              When the person who sold you the work is also the person doing it, there is a limit to
              how many things you can be good at.
            </>
          }
        />

        <div
          id="cut"
          className="rv group grid grid-cols-[minmax(0,.84fr)_74px_minmax(0,1.16fr)] items-center overflow-hidden rounded-lg border border-line bg-white shadow-[0_30px_66px_-50px_rgba(0,0,0,.55)] max-cols:grid-cols-1"
        >
          <div className="px-9 py-[38px] max-phone:px-6 max-phone:py-[30px]">
            <span className={cn(KICKER, "text-ink-5")}>Dropped in 2025</span>
            <ul className="list-none">
              {DROPPED_SERVICES.map((service, i) => (
                <li key={service} className={cn(STRIKE, STRIKE_DELAYS[i])}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative flex items-center justify-center self-stretch border-r border-l border-line bg-[linear-gradient(180deg,#FCFCFC,#FFFFFF)] max-cols:h-[54px] max-cols:self-auto max-cols:border-t max-cols:border-r-0 max-cols:border-b max-cols:border-l-0"
            aria-hidden="true"
          >
            <ArrowIcon className="size-5 text-orange max-cols:rotate-90" />
          </div>

          <div className="flex flex-col justify-center self-stretch bg-[linear-gradient(150deg,rgba(255,94,0,.075),rgba(254,140,90,.03))] px-9 py-[38px] max-phone:px-6 max-phone:py-[30px]">
            <span className={cn(KICKER, "text-orange")}>Kept</span>
            <h3 className="mb-3 text-[clamp(24px,2.8vw,32px)] font-bold tracking-[-.035em] text-ink">Outbound</h3>
            <p className="max-w-[34ch] text-[16px] leading-[1.6] text-ink-4">
              Cold email first, with LinkedIn and X running alongside it. One service, run properly,
              instead of four run adequately.
            </p>
            <ul className="mt-5 flex list-none flex-wrap gap-2">
              {KEPT_CHANNELS.map((channel) => (
                <li
                  key={channel}
                  className="inline-flex items-center gap-[7px] rounded-full border border-orange-pale bg-white px-[13px] py-[7px] text-[13px] font-semibold text-ink-2"
                >
                  <i className="block size-[5px] rounded-full bg-orange" aria-hidden="true" />
                  {channel}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

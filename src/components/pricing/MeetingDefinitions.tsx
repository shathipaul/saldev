import SectionIntro from "@/components/shared/SectionIntro";
import { MEETING_DEFINITIONS } from "@/data/pricing-page";
import { cn } from "@/lib/cn";

/* Hairline grid: 1 column, then 2, then 4; the rules move with it. */
const CELL = [
  "border-b border-line-2 md:border-r md:pr-[22px] lg:border-b-0",
  "border-b border-line-2 md:pl-[22px] lg:border-r lg:border-b-0 lg:pr-[22px]",
  "border-b border-line-2 md:border-r md:border-b-0 md:pr-[22px] lg:pl-[22px]",
  "md:pl-[22px]",
];

export default function MeetingDefinitions() {
  return (
    <section id="meeting" className="relative z-[1] pt-[70px] pb-[60px] md:pt-[88px] md:pb-20" aria-labelledby="meeting-title">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          className="mb-10"
          eyebrow="What counts as a meeting"
          title="You pay for meetings that happen and fit."
          lede={
            <>
              <b className="font-semibold text-ink">Four definitions, agreed in writing on the kickoff call,</b>{" "}
              decide what goes on the invoice. Nothing else does.
            </>
          }
        />
        <div className="grid grid-cols-1 border-t border-b border-line-2 md:grid-cols-2 lg:grid-cols-4">
          {MEETING_DEFINITIONS.map((definition, i) => (
            <div key={definition.title} className={cn("pt-[26px] pb-7", CELL[i])}>
              <span className="mb-3 block font-mono text-[11.5px] font-medium tracking-[.1em] text-orange">
                {definition.label}
              </span>
              <h3 className="mb-2 text-[18px] font-bold tracking-[-.025em] text-ink">{definition.title}</h3>
              <p className="text-[14.5px] leading-[1.6] text-ink-4">{definition.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

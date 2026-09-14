import RichText from "@/components/shared/RichText";
import type { TimelineRow } from "@/data/timeline";
import { cn } from "@/lib/cn";

type Props = {
  rows: TimelineRow[];
  /** "scaled" sizes the note relative to the label (years); "fixed" keeps it at 12px (step names). */
  noteStyle?: "scaled" | "fixed";
};

const NOTE: Record<NonNullable<Props["noteStyle"]>, string> = {
  scaled: "mt-1 block text-[.42em] font-medium tracking-[.04em] text-ink-5",
  fixed: "mt-1.5 block text-[12px] font-medium tracking-normal text-ink-5",
};

/**
 * Big labels against a hairline spine. Deliberately unlike the OutboundOS
 * step rail on the home page: no circled numbers, no icons, no dark ground.
 * The dot lights as each row reveals (ScrollReveal adds `.in`).
 */
export default function Timeline({ rows, noteStyle = "scaled" }: Props) {
  return (
    <ol className="max-w-[940px] list-none">
      {rows.map((row) => (
        <li
          key={row.id ?? `${row.label}-${row.title}`}
          id={row.id}
          className="rv group grid grid-cols-[clamp(78px,9vw,124px)_22px_1fr] items-start pb-[42px] last:pb-0 max-phone:grid-cols-[64px_20px_1fr] max-phone:pb-[34px]"
        >
          <span
            className={cn(
              "pt-[3px] text-[clamp(24px,3vw,36px)] leading-none font-bold tracking-[-.04em] tabular-nums transition-colors duration-[600ms] ease-brand max-phone:text-[21px]",
              row.now ? "text-orange" : "text-ink-5",
            )}
          >
            {row.label}
            {row.note ? <small className={NOTE[noteStyle]}>{row.note}</small> : null}
          </span>

          <span className="relative block w-[22px] self-stretch justify-self-center" aria-hidden="true">
            <i className="absolute top-1.5 left-1/2 z-[2] block size-[9px] -translate-x-1/2 rounded-full border-2 border-line-2 bg-white transition-[border-color,box-shadow] duration-[600ms] ease-brand group-[.in]:border-orange group-[.in]:shadow-[0_0_0_4px_rgba(255,94,0,.12)]" />
            <i className="absolute top-4 bottom-[-42px] left-1/2 block w-px -translate-x-1/2 bg-line-2 group-last:hidden max-phone:bottom-[-34px]" />
          </span>

          <div>
            <h3 className="mb-[9px] text-[clamp(18px,1.9vw,21px)] font-semi tracking-[-.024em] text-ink">{row.title}</h3>
            <p className="max-w-[60ch] text-[16px] leading-[1.63] text-ink-4">
              <RichText runs={row.body} emphasisClassName="font-semibold text-ink-2 not-italic" />
            </p>
            {row.you || row.us ? (
              // body size, not the smaller meta size: the source's `.ch-body p` rule
              // outranks `.yw`, so these read at 16px and wrap within the same measure
              <p className="mt-3 flex max-w-[60ch] flex-wrap gap-x-[18px] gap-y-2 text-[16px] leading-[1.63] text-ink-4">
                {row.you ? (
                  <span>
                    <b className="mr-1 font-semibold text-ink">You:</b>
                    {row.you}
                  </span>
                ) : null}
                {row.us ? (
                  <span>
                    <b className="mr-1 font-semibold text-ink">Us:</b>
                    {row.us}
                  </span>
                ) : null}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

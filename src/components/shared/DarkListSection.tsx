import { Eyebrow } from "@/components/shared/SectionIntro";
import StairTail from "@/components/shared/StairTail";
import { cn } from "@/lib/cn";

export type DarkListItem = { n: string; title: string; body: string };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  items: DarkListItem[];
  /** Section padding; defaults to the standard block spacing. */
  className?: string;
  /** Show the stair-step tail under the block. */
  tail?: boolean;
};

/** Numbered list on the dark OutboundOS ground, with the stair tail below. */
export default function DarkListSection({
  id,
  eyebrow,
  title,
  lede,
  items,
  className = "py-24 max-cols:py-[70px]",
  tail = false,
}: Props) {
  return (
    <section id={id} className={cn("relative z-[1]", className)}>
      <div className="mx-auto w-full max-w-page px-6">
        <div className="os rv relative overflow-hidden rounded-[28px] bg-ink px-12 py-14 max-cols:rounded-[22px] max-cols:px-[26px] max-cols:py-10">
          <div className="relative z-[2]">
            <div className="mb-11">
              <Eyebrow tone="dark">{eyebrow}</Eyebrow>
              <h2 className="mt-4 mb-3 text-[clamp(30px,4.2vw,46px)] leading-[1.06] font-bold tracking-[-.035em] text-white">
                {title}
              </h2>
              <p className="max-w-[52ch] text-[17px] leading-[1.55] text-white/62">{lede}</p>
            </div>

            <ol className="grid list-none gap-0">
              {items.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[44px_1fr] gap-x-5 border-t border-white/10 py-6 first:border-t-0 first:pt-0 max-phone:grid-cols-[32px_1fr] max-phone:gap-x-3.5"
                >
                  <span className="pt-1 font-mono text-[12px] font-medium text-orange-soft" aria-hidden="true">
                    {item.n}
                  </span>
                  <div>
                    <h3 className="mb-2 text-[clamp(17px,1.8vw,20px)] font-semi tracking-[-.024em] text-white">
                      {item.title}
                    </h3>
                    <p className="max-w-[62ch] text-[15.5px] leading-[1.62] text-white/60">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {tail ? <StairTail /> : null}
      </div>
    </section>
  );
}

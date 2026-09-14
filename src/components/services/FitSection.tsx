import Link from "next/link";
import SectionIntro from "@/components/shared/SectionIntro";
import { FIT_NO, FIT_YES } from "@/data/services";
import { cn } from "@/lib/cn";

function FitBox({ kicker, items, glyph, glyphTone }: { kicker: string; items: string[]; glyph: string; glyphTone: string }) {
  return (
    <div className="rounded-lg border border-line bg-white px-7 pt-7 pb-6">
      <span className="mb-4 block font-mono text-[10.5px] tracking-[.12em] text-ink-5 uppercase">{kicker}</span>
      <ul className="flex list-none flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-[1.5] text-ink-3">
            <i
              className={cn("mt-px grid size-[22px] flex-none place-items-center rounded-full text-[12px] font-extrabold not-italic", glyphTone)}
              aria-hidden="true"
            >
              {glyph}
            </i>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FitSection() {
  return (
    <section id="fit" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="Who it’s for"
          title="Built for founders who still do the selling."
          lede={<b className="font-semibold text-ink">It’s faster for both of us if we say who fits before you book.</b>}
        />
        <div className="rv grid grid-cols-2 gap-[18px] max-eq:grid-cols-1">
          <FitBox kicker="A fit if" items={FIT_YES} glyph="✓" glyphTone="bg-[rgba(14,124,73,.1)] text-[#0E7C49]" />
          <FitBox kicker="Not a fit if" items={FIT_NO} glyph="✕" glyphTone="bg-orange/10 text-orange-deep" />
        </div>
        <p className="rv mt-[18px] text-[15px] text-ink-4">
          Not sure which side you land on?{" "}
          <Link href="/contact" className="font-semibold text-orange no-underline">
            Book the call
          </Link>{" "}
          and we’ll tell you.
        </p>
      </div>
    </section>
  );
}

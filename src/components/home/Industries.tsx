import { Fragment } from "react";
import SectionIntro from "@/components/shared/SectionIntro";
import { INDUSTRY_ROWS } from "@/data/industries";

const PILL =
  "inline-flex items-center gap-2 rounded-full border border-line bg-white px-[17px] py-[11px] text-[14.2px] font-mid text-ink-3 transition-[border-color,transform,box-shadow,color] duration-300 ease-brand hover:-translate-y-0.5 hover:border-orange-pale hover:text-ink hover:shadow-[0_10px_22px_-10px_rgba(255,94,0,.34)]";

export default function Industries() {
  return (
    <section id="industries" className="relative z-[1] pt-5 pb-24 max-cols:pb-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          align="center"
          className="mb-[34px]"
          titleMax="max-w-[22ch]"
          eyebrow="Who we sell to"
          title="We already know your buyers"
          lede={
            <>
              <b className="font-semibold text-ink">
                Twelve sectors, and the buying committees inside them.
              </b>{" "}
              That is the difference between a sequence that reads researched and one that reads
              scraped.
            </>
          }
        />
        <ul className="rv mx-auto flex max-w-[860px] list-none flex-wrap justify-center gap-[9px]">
          {INDUSTRY_ROWS.map((row, r) => (
            <Fragment key={r}>
              {r > 0 ? <li className="m-0 h-0 basis-full max-phone:hidden" aria-hidden="true" /> : null}
              {row.map((name) => (
                <li key={name} className={PILL}>
                  <i className="size-[5px] shrink-0 rounded-full bg-orange not-italic" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </Fragment>
          ))}
        </ul>
      </div>
    </section>
  );
}

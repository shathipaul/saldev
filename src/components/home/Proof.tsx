import Image from "next/image";
import type { ReactNode } from "react";
import { CheckIcon } from "@/components/shared/Icons";
import SectionIntro from "@/components/shared/SectionIntro";
import { CASE_STUDIES, type CaseStudy } from "@/data/proof";
import { cn } from "@/lib/cn";

/** Marks sample copy that must be replaced before launch (orange highlight). */
function Sample({
  children,
  big = false,
}: {
  children: ReactNode;
  big?: boolean;
}) {
  return (
    <span
      className={cn(
        "rounded-[5px] bg-[rgba(255,94,0,.1)] font-semibold text-orange-deep",
        big ? "px-2 py-0" : "px-[7px] py-px",
      )}
    >
      {children}
    </span>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="cs rv relative overflow-hidden rounded-lg border border-line bg-white px-7 pt-7 pb-[26px] transition-[transform,box-shadow,border-color] duration-[450ms] ease-brand hover:-translate-y-1 hover:border-orange-pale hover:shadow-[0_24px_48px_-20px_rgba(255,94,0,.3)]">
      <div className="relative mb-5 flex items-center gap-3">
        <Image
          src={study.logo.src}
          alt={study.logo.alt}
          width={study.logo.size}
          height={study.logo.size}
          className="size-[38px] shrink-0 rounded-[9px] object-contain"
        />
        <div>
          <h3 className="text-[16.5px] leading-[1.2] font-semi tracking-[-.02em] text-ink">
            {study.name}
          </h3>
          <p className="mt-0.5 text-[12.8px] text-ink-5">{study.tagline}</p>
        </div>
      </div>
      <div className="relative mb-3.5 flex flex-wrap items-baseline gap-[9px]">
        <b className="text-[40px] leading-none font-bold tracking-[-.05em] text-orange">
          <Sample big>{study.stat}</Sample>
        </b>
        <span className="text-[14.5px] font-semibold text-ink-2">
          <Sample>{study.statLabel}</Sample>
        </span>
      </div>
      <p className="relative text-[14.6px] leading-[1.62] text-ink-4">
        <Sample>{study.story}</Sample>
      </p>
      <div className="relative mt-4 flex items-center gap-[7px] border-t border-line pt-3.5 text-[13.2px] text-ink-4">
        <CheckIcon
          className="size-3.5 shrink-0 text-orange"
          strokeWidth={2.4}
        />
        <Sample>{study.result}</Sample>
      </div>
    </article>
  );
}

/** Deliberately obvious placeholders. Nothing fake ships. */
export default function Proof() {
  return (
    <section id="proof" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="Proof"
          title="What this looks like when it runs"
          lede={
            <>
              <b className="font-semibold text-ink">
                Two quotes in, case studies still to come.
              </b>{" "}
              Nothing gets invented on this page, so the numbers stay blank
              until you send them.
            </>
          }
        />

        <div className="grid gap-[18px]">
          <div className="grid grid-cols-2 gap-[18px] max-cols:grid-cols-1">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.name} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

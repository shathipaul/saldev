import Image from "next/image";
import type { ReactNode } from "react";
import { CheckIcon, InfoIcon, WarnIcon } from "@/components/shared/Icons";
import SectionIntro from "@/components/shared/SectionIntro";
import {
  CASE_STUDIES,
  TESTIMONIALS,
  type CaseStudy,
  type Testimonial,
} from "@/data/proof";
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

const NOTICE =
  "mb-[18px] inline-flex items-center gap-2 rounded-full border border-orange-pale bg-[#FFF4E8] px-3.5 py-[7px] text-[12.5px] font-semibold text-orange-deep";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const identity = (text: string) =>
    study.sampleIdentity ? <Sample>{text}</Sample> : text;

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
            {identity(study.name)}
          </h3>
          <p className="mt-0.5 text-[12.8px] text-ink-5">
            {identity(study.tagline)}
          </p>
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative rounded-lg border border-line bg-white px-7 py-[30px] transition-[transform,box-shadow,border-color] duration-[450ms] ease-brand hover:-translate-y-1 hover:border-orange-pale hover:shadow-[0_22px_44px_-20px_rgba(255,94,0,.28)]">
      <div
        className="mb-1.5 text-[44px] leading-none font-bold text-orange-pale"
        aria-hidden="true"
      >
        “
      </div>
      <blockquote className="mb-[22px] text-[16px] leading-[1.6] text-ink-2">
        <p>{testimonial.quote}</p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          width={testimonial.avatar.size}
          height={testimonial.avatar.size}
          className="size-10 shrink-0 rounded-[10px] object-contain"
        />
        <span>
          <span className="text-[14.5px] font-semi text-ink">
            {testimonial.name}
          </span>
          <br />
          <span className="text-[13px] text-ink-5">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
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
          {/* <p className={cn("rv", NOTICE)}>
            <InfoIcon className="size-3.5" />
            Sample figures for layout only. Everything in orange is placeholder
            text, not a real result. Replace before this page goes anywhere near
            a prospect.
          </p> */}
          <div className="grid grid-cols-2 gap-[18px] max-cols:grid-cols-1">
            {CASE_STUDIES.map((study) => (
              <CaseStudyCard key={study.name} study={study} />
            ))}
          </div>

          {/* <div className="rv">
            <p className={NOTICE}>
              <WarnIcon className="size-3.5" />
              Drafted on your behalf. Get each founder’s written OK before this goes live.
            </p>
            <div className="grid grid-cols-2 gap-[18px] max-cols:grid-cols-1">
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.name} testimonial={testimonial} />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

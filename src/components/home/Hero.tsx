import Link from "next/link";
import { ArrowIcon } from "@/components/shared/Icons";
import HeroBurst from "./HeroBurst";

export default function Hero() {
  return (
    <section
      className="relative z-[1] flex min-h-[min(880px,94vh)] items-center overflow-hidden pt-[76px] pb-[92px] max-cols:min-h-auto max-cols:pt-14 max-cols:pb-16"
      aria-labelledby="hero-title"
    >
      <HeroBurst />

      <div className="mx-auto max-w-page px-6">
        <div className="relative z-[2] mx-auto flex max-w-[780px] flex-col items-center text-center">
          <p className="rv mb-[22px] text-[12.5px] font-bold tracking-[.16em] text-orange uppercase">
            Cold email · LinkedIn · X
          </p>

          <h1
            id="hero-title"
            className="rv mb-6 text-[clamp(40px,6.6vw,74px)] leading-[1.02] font-bold tracking-[-.042em] text-ink"
          >
            You run the business.
            <br />
            <span className="bg-[linear-gradient(105deg,var(--color-orange)_8%,var(--color-orange-soft)_92%)] bg-clip-text text-transparent">
              We’ll fill the calendar.
            </span>
          </h1>

          <p className="rv mx-auto mb-8 max-w-[54ch] text-[clamp(16.5px,2vw,20.5px)] leading-[1.55] tracking-[-.008em] text-ink-4">
            Cold email, LinkedIn, and X, run together as one system.{" "}
            <span className="text-orange">Most outbound shops stop at two.</span> Your buyers are
            already on the third.
          </p>

          <div className="rv flex flex-wrap justify-center gap-3 max-mini:flex-col">
            <Link
              href="/contact"
              className="group inline-flex h-[52px] cursor-pointer items-center justify-center gap-[9px] rounded-full bg-orange px-[26px] text-[15.5px] font-semibold text-white no-underline shadow-[0_12px_28px_-8px_rgba(255,94,0,.62)] transition-[transform,box-shadow,background] duration-300 ease-brand hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_18px_38px_-10px_rgba(255,94,0,.75)] max-mini:w-full"
            >
              Book a 20-min call
              <ArrowIcon className="size-[15px] transition-transform duration-300 ease-brand group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

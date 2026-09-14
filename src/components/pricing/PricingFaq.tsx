import SectionIntro from "@/components/shared/SectionIntro";
import { PRICING_FAQ } from "@/data/pricing-page";

/** Native disclosure widgets: no script, indexable, keyboard-ready. */
export default function PricingFaq() {
  return (
    <section id="faq" className="relative z-[1] py-24" aria-labelledby="faq-title">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro align="center" eyebrow="Questions" title="Six things people ask before booking." />
        <div className="mx-auto max-w-[840px]">
          {PRICING_FAQ.map((item) => (
            <details key={item.id} id={item.id} className="group border-b border-line-2 first:border-t">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 px-0.5 py-5 text-[16px] leading-[1.4] font-semibold tracking-[-.018em] text-ink sm:px-1 sm:py-6 sm:text-[17.5px] [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="mt-px flex size-[26px] shrink-0 items-center justify-center rounded-full border border-line-2 transition-all duration-[400ms] ease-brand group-open:border-orange group-open:bg-orange"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    className="size-3 text-ink-4 transition-transform duration-[400ms] group-open:rotate-45 group-open:text-white"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pr-[30px] pb-[26px] pl-1 text-[15.4px] leading-[1.68] text-ink-4 sm:pr-[46px]">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionIntro from "@/components/shared/SectionIntro";
import PricingPlans from "./PricingPlans";

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="Pricing"
          title="You pay for meetings, not months."
          lede={
            <>
              <b className="font-semibold text-ink">
                One build fee, then $250 per qualified meeting and 10% of what those meetings close.
              </b>{" "}
              No retainer, so there is no monthly invoice arriving whether the pipeline moved or not.
              Final scope gets set on a twenty-minute call.
            </>
          }
        />

        {/* faint vertical rules behind the cards */}
        <div className="rules pointer-events-none absolute inset-0 z-0 max-mini:hidden" aria-hidden="true" />

        <PricingPlans />
      </div>
    </section>
  );
}

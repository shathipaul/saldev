import SectionIntro from "@/components/shared/SectionIntro";
import Timeline from "@/components/shared/Timeline";
import { HIW_STEPS } from "@/data/how-it-works";

export default function StepsTimeline() {
  return (
    <section id="steps" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="The five steps"
          title="Dated, so you can hold us to it."
          lede={
            <>
              <b className="font-semibold text-ink">Every step has a date, a job for us, and a job for you.</b>{" "}
              The only numbers that aren’t commitments are the ones about your buyers, and those are
              marked.
            </>
          }
        />
        <Timeline rows={HIW_STEPS} noteStyle="fixed" />
      </div>
    </section>
  );
}

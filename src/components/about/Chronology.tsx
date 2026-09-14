import SectionIntro from "@/components/shared/SectionIntro";
import Timeline from "@/components/shared/Timeline";
import { MILESTONES } from "@/data/about";

export default function Chronology() {
  return (
    <section id="story" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="The long version"
          title="Six years to get to the short version."
          lede={
            <>
              <b className="font-semibold text-ink">None of it was a straight line.</b> Every year was
              real work for real clients. It just took a while to work out which part of that work we
              should have been selling.
            </>
          }
        />
        <Timeline rows={MILESTONES} />
      </div>
    </section>
  );
}

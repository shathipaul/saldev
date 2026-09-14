import DarkListSection from "@/components/shared/DarkListSection";
import { PRINCIPLES } from "@/data/about";

export default function Principles() {
  return (
    <DarkListSection
      id="principles"
      className="pt-5 pb-24 max-cols:pb-[70px]"
      eyebrow="How we work"
      title="Five things we will not do."
      lede="The short version of the process is on the home page. This is the part that decides whether you would want to work with us."
      items={PRINCIPLES}
      tail
    />
  );
}

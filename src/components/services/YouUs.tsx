import SectionIntro from "@/components/shared/SectionIntro";
import { WE_DO, YOU_DO } from "@/data/services";

function SideBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white px-7 py-[26px]">
      <h3 className="mb-3.5 text-[13px] font-bold tracking-[.1em] text-orange uppercase">{title}</h3>
      <ul className="flex list-none flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] leading-[1.5] text-ink-3 before:text-ink-5 before:content-['—']">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function YouUs() {
  return (
    <section id="split" className="relative z-[1] pt-2.5 pb-24 max-cols:pb-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro eyebrow="What we do, what you do" title="Your side of the table is small on purpose." />
        <div className="rv grid grid-cols-2 gap-4 max-eq:grid-cols-1">
          <SideBox title="You" items={YOU_DO} />
          <SideBox title="Us" items={WE_DO} />
        </div>
      </div>
    </section>
  );
}

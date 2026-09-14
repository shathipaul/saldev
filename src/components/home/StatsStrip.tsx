import { STATS } from "@/data/stats";

export default function StatsStrip() {
  return (
    <section id="stats" className="relative z-[1] pt-[72px] pb-2" aria-label="Results at a glance">
      <div className="mx-auto w-full max-w-page px-6">
        <dl className="grid grid-cols-4 gap-4 max-cols:grid-cols-2">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rv flex flex-col-reverse rounded-lg border border-line bg-white px-[22px] py-[26px] text-center"
            >
              <dt className="text-[13.5px] leading-[1.45] text-ink-4">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </dt>
              <dd className="mb-[9px] text-[clamp(26px,2.6vw,34px)] leading-none font-bold tracking-[-.045em] text-orange">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

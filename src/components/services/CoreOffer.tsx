import SectionIntro from "@/components/shared/SectionIntro";
import { CHANNELS, DELIVERABILITY, INCLUDED_EVERY_SETUP } from "@/data/services";
import { cn } from "@/lib/cn";

export default function CoreOffer() {
  return (
    <section id="offer" className="relative z-[1] pt-5 pb-24 max-cols:pb-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="The core offer"
          title="One engine, three channels. Built for one thing: qualified calls on your calendar."
          lede={
            <b className="font-semibold text-ink">
              The same people build and run every channel, so they pull together instead of fighting each other.
            </b>
          }
        />

        <div className="rv grid grid-cols-3 gap-4 max-eq:grid-cols-1">
          {CHANNELS.map((channel) => (
            <article key={channel.name} className="relative rounded-md border border-line bg-white px-6 pt-6 pb-[22px]">
              {channel.rare ? (
                <span className="absolute top-3.5 right-3.5 rounded-full bg-orange-tint px-2 py-1 text-[10.5px] font-bold tracking-[.08em] text-orange-deep uppercase">
                  Rare
                </span>
              ) : null}
              <h3 className="mb-2.5 flex items-center gap-2.5 text-[17px] font-bold tracking-[-.015em]">
                <i className={cn("inline-block size-2.5 rounded-[3px]", channel.swatch)} aria-hidden="true" />
                {channel.name}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-ink-4">{channel.body}</p>
            </article>
          ))}
        </div>

        <div className="rv mt-4 rounded-md bg-ink px-6 py-5 text-white">
          <span className="mb-2 block text-[11.5px] font-bold tracking-[.1em] text-orange-soft uppercase">
            {DELIVERABILITY.label}
          </span>
          <p className="max-w-[80ch] text-[14.5px] leading-[1.6] text-[#d6d6d6]">{DELIVERABILITY.body}</p>
        </div>

        <div className="rv mt-[18px] rounded-md border border-dashed border-line-2 bg-white px-5 py-4 text-[14px] leading-[1.6] text-ink-4">
          <b className="mr-1.5 text-[11.5px] font-bold tracking-[.08em] text-ink uppercase">Included on every setup</b>
          {INCLUDED_EVERY_SETUP.join(" · ")}
        </div>
      </div>
    </section>
  );
}

import SectionIntro from "@/components/shared/SectionIntro";
import { SERVICES_FAQ_COLUMNS } from "@/data/services";
import { cn } from "@/lib/cn";

/** Static question-and-answer columns: every answer is on the page. */
export default function ServicesFaq() {
  return (
    <section id="faq" className="relative z-[1] pt-2.5 pb-24 max-cols:pb-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          align="center"
          titleMax="max-w-[20ch]"
          eyebrow="Objections"
          title="The questions that come up on every call"
        />
        <div className="rv grid max-w-[1100px] grid-cols-2 items-start gap-x-9 gap-y-0 max-eq:grid-cols-1">
          {SERVICES_FAQ_COLUMNS.map((column, c) => (
            <div key={c} className="flex flex-col">
              {column.map((item) => (
                <div
                  key={item.id}
                  id={item.id}
                  className={cn("border-b border-line-2 py-[22px] first:border-t", c > 0 && "max-eq:first:border-t-0")}
                >
                  <h3 className="mb-2 text-[16.5px] leading-[1.4] font-semibold tracking-[-.018em]">{item.question}</h3>
                  <p className="text-[15px] leading-[1.66] text-ink-4">{item.answer}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

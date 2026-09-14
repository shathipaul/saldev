import { Fragment } from "react";
import ContactForm from "@/components/contact/ContactForm";
import { CALL_SECTIONS, CONTACT_EMAIL } from "@/data/contact";

/** Two columns: what the call covers, and the request card. */
export default function ContactSection() {
  return (
    <section id="form" className="relative z-[1] pt-14 pb-24 max-cols:pb-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="grid grid-cols-[1fr_1.05fr] items-start gap-10 max-eq:grid-cols-1">
          <div className="rv">
            {/* headings and lists are siblings so only the very first heading drops its top margin */}
            {CALL_SECTIONS.map((group) => (
              <Fragment key={group.title}>
                <h3 className="mt-[26px] mb-2.5 text-[13px] font-bold tracking-[.1em] text-orange uppercase first:mt-0">
                  {group.title}
                </h3>
                <ul className="flex list-none flex-col gap-[9px]">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2.5 text-[15px] leading-[1.55] text-ink-3 before:mt-[9px] before:block before:size-1.5 before:flex-none before:rounded-full before:bg-orange before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Fragment>
            ))}
            <p className="mt-[22px] text-[14px] leading-[1.6] text-ink-4">
              Prefer email? Write to{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink no-underline">
                {CONTACT_EMAIL}
              </a>{" "}
              with your company and a line about who you sell to.
            </p>
          </div>

          <div className="rv rounded-lg border border-line bg-white px-[30px] pt-[30px] pb-[26px] shadow-[0_30px_66px_-50px_rgba(0,0,0,.5)]">
            <h2 className="mb-1.5 text-[22px] font-bold tracking-[-.025em]">Request the call</h2>
            <p className="mb-5 text-[14px] leading-[1.5] text-ink-4">Four fields. We reply with times.</p>
            <ContactForm />
            {/* Calendar embed slot: replace with the Cal.com / Calendly embed once a booking link exists. */}
            <p className="mt-[18px] rounded-md border border-dashed border-line-2 px-[18px] py-4 text-center text-[13.5px] text-ink-5">
              Calendar booking is coming. Until then, send the form and we’ll reply with times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

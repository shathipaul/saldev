import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/data/contact";
import { LEGAL_ENTITY_PLACEHOLDER, type TocEntry } from "@/data/legal";

type Props = {
  updated: string;
  scope: string;
  toc: TocEntry[];
  /** The document itself: h2/h3/p/ul/ol/table/.box, styled by the `.legal` rules in globals.css. */
  children: ReactNode;
};

/** Date line, jump links and the document column shared by the legal pages. */
export default function LegalArticle({ updated, scope, toc, children }: Props) {
  return (
    <section className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <div className="max-w-[780px]">
          <p className="mb-[26px] flex flex-wrap gap-3.5 font-mono text-[11.5px] tracking-[.08em] text-ink-5 uppercase">
            <span>Last updated: {updated}</span>
            <span aria-hidden="true">·</span>
            <span>{scope}</span>
          </p>

          <nav aria-label="On this page">
            <ul className="mb-10 flex list-none flex-wrap gap-2">
              {toc.map((entry) => (
                <li key={entry.id}>
                  <a
                    href={`#${entry.id}`}
                    className="inline-block rounded-full bg-orange-tint px-[11px] py-1.5 text-[12.5px] font-semibold text-orange-deep no-underline"
                  >
                    {entry.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="legal">{children}</article>
        </div>
      </div>
    </section>
  );
}

/** Yellow "fill this in" marker carried over from the source. */
export function Placeholder({ children = LEGAL_ENTITY_PLACEHOLDER }: { children?: ReactNode }) {
  return <mark>{children}</mark>;
}

/** The contact inbox as a mailto link, styled like the bold runs around it. */
export function Email() {
  return (
    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink no-underline">
      {CONTACT_EMAIL}
    </a>
  );
}

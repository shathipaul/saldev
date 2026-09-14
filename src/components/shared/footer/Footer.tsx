import Link from "next/link";
import BrandMark from "@/components/shared/BrandMark";
import { FOOTER_COLUMNS, type FooterLink } from "@/data/footer";

const FLIP_LINE =
  "block h-[19px] leading-[19px] not-italic transition-transform duration-[350ms] ease-[cubic-bezier(.77,0,.175,1)] group-hover/link:-translate-y-[19px]";

/** Link whose label slides up and is replaced by an orange copy on hover. */
function FlipLink({ label, href }: FooterLink) {
  return (
    <Link
      href={href}
      className="group/link flex h-[30px] items-center overflow-hidden py-1.5 text-[14.5px] text-white/72 no-underline transition-colors duration-300 ease-brand hover:text-orange-soft"
    >
      <span className="relative block h-[19px] overflow-hidden">
        <i className={FLIP_LINE}>{label}</i>
        <i className={`${FLIP_LINE} text-orange-soft`} aria-hidden="true">
          {label}
        </i>
      </span>
    </Link>
  );
}

const SOCIAL_LINK =
  "group/soc flex size-9 items-center justify-center rounded-[10px] border border-white/10 bg-white/6 transition-all duration-[350ms] ease-brand hover:text-orange-soft hover:-translate-y-0.5 hover:border-orange hover:bg-orange";
const SOCIAL_ICON = "size-[15px] text-white/80 group-hover/soc:text-white";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-ink text-white">
      <div className="relative z-[2] mx-auto max-w-page px-6 pt-[70px]">
        <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr] gap-11 pb-[52px] max-cols:grid-cols-2 max-cols:gap-8 max-mini:grid-cols-1">
          <div className="f-brand">
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-[9px] no-underline"
              aria-label="SalDev home"
            >
              <span className="brand-mark block size-9 shrink-0 [filter:drop-shadow(0_0_0_rgba(0,0,0,0))_drop-shadow(0_2px_10px_rgba(255,94,0,.25))] transition-transform duration-[400ms] ease-brand group-hover:rotate-[-6deg] group-hover:scale-[1.06]">
                <BrandMark />
              </span>
              <span className="text-[19px] font-bold tracking-[-.02em] text-white">SalDev</span>
            </Link>
            <p className="mt-4 max-w-[30ch] text-[14.5px] leading-[1.6] text-white/55">
              Multichannel outbound. Email, LinkedIn, X. You own everything.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h3 className="mb-4 text-[12px] font-bold tracking-[.13em] text-white/42 uppercase">
                {column.heading}
              </h3>
              {column.links.map((link) => (
                <FlipLink key={link.href} {...link} />
              ))}
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 py-6 text-[13.5px] text-white/42">
          <span>© {new Date().getFullYear()} SalDev. All rights reserved.</span>
          <div className="flex gap-[9px]">
            <a href="#" aria-label="LinkedIn" className={SOCIAL_LINK}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={SOCIAL_ICON} aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45Z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className={SOCIAL_LINK}>
              <svg viewBox="0 0 24 24" fill="currentColor" className={SOCIAL_ICON} aria-hidden="true">
                <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.66l7.73-8.84L1.24 2.25h6.83l4.71 6.23 5.46-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.11l11.97 15.64Z" />
              </svg>
            </a>
            <a href="#" aria-label="Email" className={SOCIAL_LINK}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className={SOCIAL_ICON}
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2.5" />
                <path d="m2.5 6.5 8.4 5.9a2 2 0 0 0 2.2 0l8.4-5.9" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* oversized wordmark, cropped by the page edge */}
      <div className="f-mark relative z-[2] h-[clamp(84px,15.5vw,196px)] overflow-hidden" aria-hidden="true">
        <div className="tex absolute inset-0 opacity-[.34] mask-fade-down" />
        <span className="relative block translate-y-[-2%] text-center text-[clamp(112px,21vw,268px)] leading-[.8] font-extrabold tracking-[-.058em] text-ink select-none [text-shadow:0_1px_0_rgba(255,255,255,.05)]">
          SalDev
        </span>
      </div>
    </footer>
  );
}

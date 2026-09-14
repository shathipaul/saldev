"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import BrandMark from "@/components/shared/BrandMark";
import { ArrowIcon, DollarIcon, GridIcon, HelpIcon, PeopleIcon } from "@/components/shared/Icons";
import { cn } from "@/lib/cn";

type NavLink = { label: string; href: string; icon: ReactNode };

const ICON = "size-[15px] shrink-0";

const LINKS: NavLink[] = [
  { label: "How it works", href: "/how-it-works", icon: <ArrowIcon className={ICON} strokeWidth={2.2} /> },
  { label: "Services", href: "/services", icon: <GridIcon className={ICON} /> },
  { label: "Pricing", href: "/pricing", icon: <DollarIcon className={ICON} /> },
  { label: "About", href: "/about", icon: <PeopleIcon className={ICON} /> },
  { label: "FAQ", href: "/#faq", icon: <HelpIcon className={ICON} /> },
];

/** True once the page has scrolled past the top; drives the "stuck" style. */
function useIsStuck() {
  const subscribe = useCallback((onChange: () => void) => {
    window.addEventListener("scroll", onChange, { passive: true });
    return () => window.removeEventListener("scroll", onChange);
  }, []);
  return useSyncExternalStore(
    subscribe,
    () => window.scrollY > 12,
    () => false,
  );
}

export default function Navbar() {
  const stuck = useIsStuck();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  // Escape closes the menu; so does crossing into the desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const desktop = window.matchMedia("(min-width: 941px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) close();
    };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open, close]);

  return (
    <header
      id="nav"
      className={cn(
        "sticky top-0 z-[60] isolate border-b border-transparent bg-[rgba(245,245,245,.82)] backdrop-blur-[14px] backdrop-saturate-[180%] transition-[border-color,background] duration-300 ease-soft [transform:translateZ(0)] [will-change:transform] stuck:border-b-line stuck:bg-[rgba(245,245,245,.94)]",
        stuck && "stuck",
      )}
    >
      <div className="mx-auto flex max-w-page items-center justify-between gap-5 px-6 py-3.5">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-[9px] text-ink no-underline"
          aria-label="SalDev home"
        >
          <span className="brand-mark block size-8 shrink-0 transition-transform duration-[400ms] ease-brand group-hover:rotate-[-6deg] group-hover:scale-[1.06]">
            <BrandMark />
          </span>
          <span className="text-[19px] font-bold tracking-[-.02em]">SalDev</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-1.5 max-cols:hidden">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={link.href === pathname ? "page" : undefined}
                  className="group relative flex h-10 items-center rounded-full px-[15px] text-[14.5px] font-medium whitespace-nowrap text-ink-3 no-underline aria-[current=page]:text-orange transition-[color,background,box-shadow,transform] duration-[380ms] ease-brand hover:-translate-y-px hover:bg-[linear-gradient(135deg,var(--color-orange-hot),var(--color-orange-soft))] hover:text-white hover:shadow-[0_9px_22px_-6px_rgba(255,94,0,.55),0_2px_6px_rgba(255,94,0,.28)]"
                >
                  <span className="flex w-0 items-center overflow-hidden opacity-0 transition-[width,opacity,margin] duration-[380ms] ease-brand group-hover:mr-[7px] group-hover:w-[15px] group-hover:opacity-100">
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Below the mini breakpoint the logo, this button and the burger
            cannot share one row, and the menu repeats the same call to action. */}
        <Link
          href="/contact"
          className="group inline-flex h-[42px] shrink-0 items-center gap-2 rounded-full bg-orange px-5 max-mini:hidden text-[14.5px] font-semibold text-white no-underline shadow-[0_8px_20px_-6px_rgba(255,94,0,.6)] transition-[transform,box-shadow,background] duration-300 ease-brand hover:-translate-y-0.5 hover:bg-orange-hot hover:shadow-[0_14px_30px_-8px_rgba(255,94,0,.72)]"
        >
          Book a 20-min call
          <ArrowIcon className="size-3.5 transition-transform duration-300 ease-brand group-hover:translate-x-[3px]" />
        </Link>

        <button
          id="burger"
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mnav"
          onClick={() => setOpen((value) => !value)}
          className="hidden size-[42px] cursor-pointer items-center justify-center rounded-xl border border-line-2 bg-white max-cols:flex"
        >
          <span className="relative block h-[1.5px] w-[17px] bg-ink before:absolute before:top-[-5px] before:left-0 before:block before:h-[1.5px] before:w-[17px] before:bg-ink before:content-[''] after:absolute after:top-[5px] after:left-0 after:block after:h-[1.5px] after:w-[17px] after:bg-ink after:content-['']" />
        </button>
      </div>

      <nav
        id="mnav"
        aria-label="Mobile"
        aria-hidden={!open}
        inert={!open}
        className={cn(
          "pointer-events-none absolute inset-x-0 top-full flex translate-y-[-8px] flex-col gap-0.5 border-b border-line bg-[rgba(245,245,245,.97)] px-6 pt-2.5 pb-[18px] opacity-0 backdrop-blur-[14px] backdrop-saturate-[180%] transition-[opacity,transform] duration-300 ease-brand is-open:pointer-events-auto is-open:translate-y-0 is-open:opacity-100 cols:hidden",
          open && "open",
        )}
      >
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={close}
            aria-current={link.href === pathname ? "page" : undefined}
            className="block border-b border-line px-1 py-[13px] text-[16px] font-medium tracking-[-.015em] text-ink-3 no-underline last:border-b-0 aria-[current=page]:text-orange"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={close}
          className="mt-3 block rounded-full border-b-0 bg-orange p-3.5 text-center text-[16px] font-semibold tracking-[-.015em] text-white no-underline"
        >
          Book a 20-min call
        </Link>
      </nav>
    </header>
  );
}

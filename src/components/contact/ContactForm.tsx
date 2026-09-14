"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { BTN_PRIMARY } from "@/components/shared/buttons";
import { ArrowIcon } from "@/components/shared/Icons";
import { CONTACT_EMAIL, SETUP_OPTIONS } from "@/data/contact";
import { cn } from "@/lib/cn";

const FIELD = "flex flex-col gap-1.5 mb-3.5";
const LABEL = "text-[12.5px] font-semibold tracking-[.02em] text-ink-2";
const CONTROL =
  "w-full rounded-[10px] border border-line-2 bg-raise px-[13px] py-3 text-[15px] leading-[normal] text-ink outline-none transition-[border-color,box-shadow,background-color] duration-[250ms] ease-brand placeholder:text-ink-5 focus:border-orange focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,94,0,.12)]";

/**
 * No backend yet: submitting opens the visitor's email app with the request
 * prefilled, addressed to the placeholder inbox, then shows a confirmation.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const company = form.elements.namedItem("company") as HTMLInputElement;
    const setup = form.elements.namedItem("setup") as HTMLSelectElement;
    const customer = form.elements.namedItem("customer") as HTMLTextAreaElement;

    if (!email.checkValidity()) {
      email.focus();
      email.reportValidity();
      return;
    }
    if (!company.value.trim()) {
      company.focus();
      company.reportValidity();
      return;
    }

    const subject = `20-min call request: ${company.value.trim()}`;
    const body = [
      `Work email: ${email.value.trim()}`,
      `Company: ${company.value.trim()}`,
      `Setup considering: ${setup.value}`,
      `The one customer I would take ten more calls with: ${customer.value.trim() || "(not filled in)"}`,
      "",
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form id="cform" noValidate onSubmit={onSubmit}>
      <div className={FIELD}>
        <label htmlFor="f-email" className={LABEL}>
          Work email
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={CONTROL}
        />
      </div>

      <div className={FIELD}>
        <label htmlFor="f-co" className={LABEL}>
          Company
        </label>
        <input
          id="f-co"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Company name or website"
          className={CONTROL}
        />
      </div>

      <div className={FIELD}>
        <label htmlFor="f-setup" className={LABEL}>
          Setup you’re considering
        </label>
        <select id="f-setup" name="setup" defaultValue={SETUP_OPTIONS[0]} className={CONTROL}>
          {SETUP_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className={FIELD}>
        <label htmlFor="f-q" className={LABEL}>
          Who is the one customer you would take ten more calls with?
          <small className="ml-1 font-medium text-ink-5">optional</small>
        </label>
        <textarea
          id="f-q"
          name="customer"
          placeholder="e.g. Seed-stage fintech founders in the US, 20 to 80 people, who just hired their first sales rep"
          className={cn(CONTROL, "min-h-24 resize-y")}
        />
      </div>

      <button type="submit" className={cn(BTN_PRIMARY, "group mt-1.5 w-full")}>
        Request the call
        <ArrowIcon className="size-[15px] transition-transform duration-300 ease-brand group-hover:translate-x-1" />
      </button>

      <div aria-live="polite">
        {sent ? (
          <p className="mt-3.5 rounded-[10px] border border-[rgba(14,124,73,.25)] bg-[rgba(14,124,73,.08)] px-3.5 py-3 text-[14px] font-semibold text-[#0E7C49]">
            Your email app should have opened with the request filled in. If it didn’t, send the same details
            to {CONTACT_EMAIL}.
          </p>
        ) : null}
      </div>

      <p className="mt-3 text-center text-[12.5px] leading-[1.5] text-ink-5">
        Sending opens your email app with the details filled in, addressed to {CONTACT_EMAIL}. By sending you
        agree to our{" "}
        <Link href="/privacy" className="font-semibold text-orange no-underline">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}

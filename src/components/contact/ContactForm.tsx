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

export default function ContactForm() {
  const [result, setResult] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
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

    setResult("submitting");

    const formData = new FormData(form);
    formData.set("setup", setup.value);
    formData.set("customer", customer.value.trim());
    formData.append("access_key", "b81f4695-c7d4-4026-bdd5-c39fc0dbc50e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await response.json()) as { success?: boolean };

      if (!response.ok || !data.success) {
        throw new Error("Web3Forms submission failed");
      }

      setResult("success");
      form.reset();
    } catch {
      setResult("error");
    }
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
        <select
          id="f-setup"
          name="setup"
          defaultValue={SETUP_OPTIONS[0]}
          className={CONTROL}
        >
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

      <button
        type="submit"
        disabled={result === "submitting"}
        className={cn(
          BTN_PRIMARY,
          "group mt-1.5 w-full disabled:cursor-wait disabled:opacity-60",
        )}
      >
        {result === "submitting" ? "Sending..." : "Request the call"}
        <ArrowIcon className="size-[15px] transition-transform duration-300 ease-brand group-hover:translate-x-1" />
      </button>

      <div aria-live="polite">
        {result === "success" ? (
          <p className="mt-3.5 rounded-[10px] border border-[rgba(14,124,73,.25)] bg-[rgba(14,124,73,.08)] px-3.5 py-3 text-[14px] font-semibold text-[#0E7C49]">
            Thanks. Your request has been sent, and we&apos;ll be in touch
            shortly.
          </p>
        ) : null}
        {result === "error" ? (
          <p className="mt-3.5 rounded-[10px] border border-[rgba(180,40,40,.25)] bg-[rgba(180,40,40,.08)] px-3.5 py-3 text-[14px] font-semibold text-[#B42828]">
            Something went wrong. Please try again or email {CONTACT_EMAIL}.
          </p>
        ) : null}
      </div>

      <p className="mt-3 text-center text-[12.5px] leading-[1.5] text-ink-5">
        By sending you agree to our{" "}
        <Link
          href="/privacy"
          className="font-semibold text-orange no-underline"
        >
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}

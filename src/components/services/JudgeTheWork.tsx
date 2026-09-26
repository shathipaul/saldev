import Link from "next/link";
import type { ReactNode } from "react";
import SectionIntro from "@/components/shared/SectionIntro";
import { SAMPLE_MESSAGE } from "@/data/services";
import { cn } from "@/lib/cn";

const ITEMS: Array<{ title: string; body: ReactNode }> = [
  {
    title: "The outreach is the demo.",
    body: "If one of our cold emails or DMs reached you and read like a person wrote it, that’s the same kind of message we’d write for you.",
  },
  {
    title: "A sample message.",
    body: "Written for a fictional founder, labelled as such, so you can judge the craft before a call. It’s on the right.",
  },
  {
    title: "A free sample sequence on your real ICP.",
    body: "Ask on the call and you’ll have three touches, written for your actual buyers, within 48 hours. If you wouldn’t reply to them yourself, we don’t move forward.",
  },
  {
    title: "A process you can inspect.",
    body: (
      <>
        The dated, step-by-step build is on the{" "}
        <Link
          href="/how-it-works"
          className="font-semibold text-orange no-underline"
        >
          How it works
        </Link>{" "}
        page, not behind a sales call, and you’ll see every tool in the stack at
        onboarding.
      </>
    ),
  },
];

export default function JudgeTheWork() {
  return (
    <section id="proof" className="relative z-[1] py-24 max-cols:py-[70px]">
      <div className="mx-auto w-full max-w-page px-6">
        <SectionIntro
          eyebrow="Proof"
          title="Logos don't say much. Judge the work instead."
          lede={
            <>
              <b className="font-semibold text-ink">
                No case studies, no client logos.
              </b>{" "}
              Four things we can show you instead.
            </>
          }
        />

        <div className="grid grid-cols-[1.05fr_.95fr] items-start gap-7 max-eq:grid-cols-1">
          <div className="rv flex flex-col">
            {ITEMS.map((item) => (
              <div
                key={item.title}
                className="border-b border-line-2 py-[18px] first:pt-0"
              >
                <h3 className="mb-1.5 text-[17px] font-bold tracking-[-.015em]">
                  {item.title}
                </h3>
                <p className="text-[14.5px] leading-[1.6] text-ink-4">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <figure className="rv max-w-[640px] rounded-lg border border-line bg-white px-7 py-[26px] shadow-[0_24px_50px_-34px_rgba(0,0,0,.35)]">
            <figcaption className="mb-3.5 block font-mono text-[10.5px] tracking-[.1em] text-ink-5 uppercase">
              {SAMPLE_MESSAGE.label}
            </figcaption>
            <p className="mb-3 text-[13.5px] text-ink-4">
              <b className="text-ink">Subject:</b> {SAMPLE_MESSAGE.subject}
            </p>
            {SAMPLE_MESSAGE.paragraphs.map((paragraph, i) => (
              <p
                key={paragraph}
                className={cn(
                  "text-[15px] leading-[1.62] text-ink-2",
                  i > 0 && "mt-3",
                )}
              >
                {paragraph}
              </p>
            ))}
          </figure>
        </div>
      </div>
    </section>
  );
}

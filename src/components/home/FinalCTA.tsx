import Link from "next/link";
import { BTN_GRADIENT, BTN_PRIMARY, BTN_SECONDARY } from "@/components/shared/buttons";
import { ArrowIcon, CheckIcon } from "@/components/shared/Icons";
import { Eyebrow } from "@/components/shared/SectionIntro";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  points?: string[];
  /** Second, white button next to the call-to-action. */
  secondary?: { label: string; href: string };
  /** Gradient fill on the call-to-action instead of flat orange. */
  gradient?: boolean;
};

const HOME_POINTS = [
  "You pay for meetings, not months",
  "No lock-in",
  "You meet the team, and they work your hours",
];

/** Closing call to action. Defaults to the home page copy. */
export default function FinalCTA({
  id = "book",
  eyebrow,
  title = "Your calendar is too quiet. Let’s fix that.",
  body = "Twenty minutes. We map your ICP and sketch your first play. If we don’t think outbound will work for your offer, we’ll tell you on the call, and you keep the target profile and the angles either way.",
  points = HOME_POINTS,
  secondary,
  gradient = false,
}: Props) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className="final relative z-[1] overflow-hidden py-[100px] text-center" aria-labelledby={titleId}>
      <div className="mx-auto w-full max-w-page px-6">
        <div className="relative z-[2]">
          {eyebrow ? <Eyebrow className="rv mb-[18px]">{eyebrow}</Eyebrow> : null}
          <h2
            id={titleId}
            className="rv mx-auto mb-[18px] max-w-[18ch] text-[clamp(32px,5vw,58px)] leading-[1.04] font-bold tracking-[-.04em]"
          >
            {title}
          </h2>
          <p className="rv mx-auto mb-[30px] max-w-[56ch] text-[17.5px] leading-[1.58] text-ink-4">{body}</p>
          <div className="rv flex flex-wrap justify-center gap-3 max-mini:flex-col">
            <Link href="/contact" className={cn(gradient ? BTN_GRADIENT : BTN_PRIMARY, "group max-mini:w-full")}>
              Book a 20-min call
              <ArrowIcon className="size-[15px] transition-transform duration-300 ease-brand group-hover:translate-x-1" />
            </Link>
            {secondary ? (
              <Link href={secondary.href} className={cn(BTN_SECONDARY, "max-mini:w-full")}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
          <ul className="rv mt-5 flex list-none flex-wrap items-center justify-center gap-[9px] text-[13.5px] text-ink-5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckIcon className="size-[13px] text-orange" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

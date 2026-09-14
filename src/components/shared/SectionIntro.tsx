import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Small uppercase label with a short rule in front of it. */
export function Eyebrow({ children, tone = "light", className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-[12.5px] font-semibold tracking-[.1em] uppercase before:block before:h-px before:w-5 before:opacity-60 before:content-['']",
        tone === "light" ? "text-orange before:bg-orange" : "text-orange-soft before:bg-orange-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  align?: "left" | "center";
  /** Tailwind max-width class for the title. */
  titleMax?: string;
  /** Replaces the default bottom margin. */
  className?: string;
};

/** Eyebrow + h2 + two-tone lede: the header pattern used by most sections. */
export default function SectionIntro({
  eyebrow,
  title,
  lede,
  align = "left",
  titleMax = "max-w-[16ch]",
  className = "mb-[52px]",
}: SectionIntroProps) {
  const centered = align === "center";
  return (
    <div className={cn("rv flex flex-col gap-[18px]", centered && "items-center text-center", className)}>
      <Eyebrow className={centered ? "mx-auto" : undefined}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          titleMax,
          "text-[clamp(30px,4.4vw,50px)] leading-[1.06] font-bold tracking-[-.035em] text-ink",
          centered && "mx-auto",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "max-w-[60ch] text-[clamp(17px,1.9vw,21px)] leading-[1.55] font-normal tracking-[-.011em] text-ink-4",
            centered && "mx-auto text-center",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

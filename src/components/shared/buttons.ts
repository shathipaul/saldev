import { cn } from "@/lib/cn";

const BASE =
  "inline-flex h-[52px] cursor-pointer items-center justify-center gap-[9px] rounded-full px-[26px] text-[15.5px] font-semibold no-underline transition-[transform,box-shadow,background,border-color] duration-300 ease-brand hover:-translate-y-0.5";

/** Orange pill. */
export const BTN_PRIMARY = cn(
  BASE,
  "bg-orange text-white shadow-[0_12px_28px_-8px_rgba(255,94,0,.62)] hover:bg-orange-hot hover:shadow-[0_18px_38px_-10px_rgba(255,94,0,.75)]",
);

/** White pill with a hairline border. */
export const BTN_SECONDARY = cn(BASE, "border border-line-2 bg-white text-ink hover:border-ink");

/** Orange-to-soft gradient pill. */
export const BTN_GRADIENT = cn(
  BASE,
  "bg-[linear-gradient(135deg,#FF5E00_0%,#FE8C5A_100%)] text-white shadow-[0_12px_28px_-8px_rgba(255,94,0,.62)] hover:shadow-[0_18px_38px_-10px_rgba(255,94,0,.75)]",
);

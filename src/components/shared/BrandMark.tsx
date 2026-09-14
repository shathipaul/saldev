import { cn } from "@/lib/cn";

/** Inline reference to the shared SalDev mark symbol (see BrandMarkDefs). */
export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="-14 -12 124 124"
      className={cn("block size-full", className)}
      aria-hidden="true"
      focusable="false"
    >
      <use href="#sdMark" />
    </svg>
  );
}

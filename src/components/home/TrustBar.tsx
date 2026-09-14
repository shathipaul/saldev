import Image from "next/image";
import { CLIENT_LOGOS, type Logo } from "@/data/logos";
import { cn } from "@/lib/cn";

const IMAGE_BASE =
  "block object-contain [filter:grayscale(1)_opacity(.52)] transition-[filter,transform] duration-[380ms] ease-brand group-hover/item:scale-[1.06] group-hover/item:[filter:grayscale(0)_opacity(1)]";

const IMAGE_VARIANT: Record<Logo["variant"], string> = {
  avatar: "size-[26px] max-h-[26px] max-w-[26px] rounded-[6px]",
  wide: "h-auto max-h-full w-auto max-w-[158px]",
  compact: "h-auto max-h-[34px] w-auto max-w-[110px]",
};

function LogoItem({ logo, decorative = false }: { logo: Logo; decorative?: boolean }) {
  return (
    <div
      className={cn(
        "group/item flex h-11 flex-none items-center justify-center px-[34px] max-cols:h-9 max-cols:px-[22px]",
        logo.label && "gap-[9px]",
      )}
      aria-hidden={decorative || undefined}
    >
      <Image
        src={logo.src}
        alt={decorative ? "" : logo.name}
        width={logo.width}
        height={logo.height}
        className={cn(IMAGE_BASE, IMAGE_VARIANT[logo.variant])}
      />
      {logo.label ? (
        <b className="text-[17px] font-semi tracking-[-.02em] text-ink-2 [filter:grayscale(1)_opacity(.52)] transition-[filter] duration-[380ms] ease-brand group-hover/item:[filter:grayscale(0)_opacity(1)]">
          {logo.label}
        </b>
      ) : null}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="relative z-[1] overflow-hidden pt-10 pb-[42px]" aria-labelledby="trust-title">
      <p
        id="trust-title"
        className="mx-auto mb-[30px] max-w-[44ch] px-6 text-center text-[15.5px] font-medium tracking-[-.012em] text-ink-3"
      >
        Founders and revenue teams we’ve run outbound for
      </p>
      <div className="group/mrq relative w-full overflow-hidden mask-fade-x">
        <div className="flex w-max animate-slide group-hover/mrq:[animation-play-state:paused]">
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={logo.name} logo={logo} />
          ))}
          {/* second copy makes the loop seamless; hidden from assistive tech */}
          {CLIENT_LOGOS.map((logo) => (
            <LogoItem key={`${logo.name}-dup`} logo={logo} decorative />
          ))}
        </div>
      </div>
    </section>
  );
}

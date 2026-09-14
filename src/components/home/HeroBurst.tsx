"use client";

import { useEffect, useRef } from "react";
import { REDUCED_MOTION, useMediaQuery } from "@/hooks/useMediaQuery";
import { seededRandom } from "@/lib/seeded-random";
import type { CSSVars } from "@/lib/style";

type Ray = {
  deg: string;
  len: string;
  width: string;
  y: string;
  opacity: string;
  headOpacity: string;
  headRadius: string;
  dur: string;
  delay: string;
};

const RAY_COUNT = 90;
const ORIGIN_X = 800;
const ORIGIN_Y = 1100;

/**
 * Fixed angles, no rotation, no cursor coupling. Each ray lives in a
 * pre-rotated group so its stem only scales along X and its head only
 * travels along X: transform and opacity only, so the compositor handles it
 * without per-frame repaints. Seeded, so the server and client agree.
 */
function buildRays(count: number, seed: number): Ray[] {
  const rnd = seededRandom(seed);
  const between = (min: number, max: number) => min + rnd() * (max - min);

  return Array.from({ length: count }, (_, i) => {
    const t = i / (count - 1);
    const spread = (t - 0.5) * 2;
    const deg = -90 + spread * 86 + between(-2.6, 2.6);
    const len = between(300, 1010) * (1 - Math.abs(spread) * 0.2);
    const dur = between(5.5, 11);
    const delay = -between(0, dur);
    const opacity = between(0.22, 0.46) * (1 - Math.abs(spread) * 0.18);
    const width = between(0.75, 1.4);

    return {
      deg: deg.toFixed(2),
      len: len.toFixed(1),
      width: width.toFixed(2),
      y: (-width / 2).toFixed(2),
      opacity: opacity.toFixed(3),
      headOpacity: Math.min(1, opacity * 1.9).toFixed(3),
      headRadius: (width * between(2.6, 3.8)).toFixed(2),
      dur: dur.toFixed(2),
      delay: delay.toFixed(2),
    };
  });
}

const RAYS = buildRays(RAY_COUNT, 20260913);

export default function HeroBurst() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useMediaQuery(REDUCED_MOTION);

  // gentle parallax on the burst
  useEffect(() => {
    const el = ref.current;
    if (!el || reducedMotion) return;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 1000) return;
      el.style.setProperty("--sy", `${(y * 0.11).toFixed(1)}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      el.style.removeProperty("--sy");
    };
  }, [reducedMotion]);

  return (
    <div
      ref={ref}
      className="burst pointer-events-none absolute bottom-0 left-1/2 z-0 h-[132%] w-[min(1700px,168vw)] mask-burst [--sy:0px] [contain:layout_paint] [transform:translate(-50%,var(--sy))] max-cols:h-[104%] max-cols:w-[250vw]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute bottom-[-6%] left-1/2 h-[38%] w-[52%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,94,0,.34)_0%,rgba(255,120,60,.18)_32%,transparent_66%)] blur-[30px]" />
      <svg
        viewBox="0 0 1600 1100"
        preserveAspectRatio="xMidYMax meet"
        className="block size-full overflow-visible"
      >
        {RAYS.map((ray, i) => (
          <g key={i} transform={`translate(${ORIGIN_X},${ORIGIN_Y}) rotate(${ray.deg})`}>
            <rect
              className="stem"
              x="0"
              y={ray.y}
              width={ray.len}
              height={ray.width}
              style={{ "--o": ray.opacity, "--dur": `${ray.dur}s`, "--dly": `${ray.delay}s` } as CSSVars}
            />
            <circle
              className="head"
              cx="0"
              cy="0"
              r={ray.headRadius}
              style={
                {
                  "--len": `${ray.len}px`,
                  "--ho": ray.headOpacity,
                  "--dur": `${ray.dur}s`,
                  "--dly": `${ray.delay}s`,
                } as CSSVars
              }
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

import { seededRandom } from "@/lib/seeded-random";

type Dot = { cx: string; cy: string; r: string; opacity: string };

/**
 * Pricing halftone artwork: one motif at four densities. Levels 1-3 are a
 * burst of dotted rays from the bottom-left; level 4 is a dark dot grid.
 * Seeded so server and client render the same dots.
 */
function buildDots(level: 1 | 2 | 3 | 4, seed: number): Dot[] {
  const rnd = seededRandom(seed);
  const dots: Dot[] = [];

  if (level === 4) {
    for (let gx = 0; gx < 7; gx++) {
      for (let gy = 0; gy < 7; gy++) {
        const on = (gx + gy) % 2 === 0 || rnd() > 0.55;
        if (!on) continue;
        dots.push({
          cx: (30 + gx * 11).toFixed(1),
          cy: (24 + gy * 11).toFixed(1),
          r: (1.1 + rnd() * 1.5).toFixed(2),
          opacity: (0.18 + rnd() * 0.45).toFixed(2),
        });
      }
    }
    return dots;
  }

  const originX = 26;
  const originY = 104;
  const rays = [4, 7, 11][level - 1];
  const steps = 5 + level * 3;
  for (let i = 0; i < rays; i++) {
    const angle = ((-104 + (i / (rays - 1 || 1)) * 80) * Math.PI) / 180;
    const len = 54 + rnd() * 40;
    for (let s = 0; s < steps; s++) {
      const f = s / steps;
      dots.push({
        cx: (originX + Math.cos(angle) * len * f).toFixed(1),
        cy: (originY + Math.sin(angle) * len * f).toFixed(1),
        r: (2.4 * (1 - f) + 0.5).toFixed(2),
        opacity: (0.75 * (1 - f * 0.72)).toFixed(2),
      });
    }
  }
  return dots;
}

export default function PlanArt({ level, seed = level }: { level: 1 | 2 | 3 | 4; seed?: number }) {
  const fill = level === 4 ? "#1a1a1a" : "#FF5E00";
  return (
    <svg viewBox="0 0 120 120" className="block size-full" aria-hidden="true">
      {buildDots(level, seed).map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill={fill} opacity={dot.opacity} />
      ))}
    </svg>
  );
}

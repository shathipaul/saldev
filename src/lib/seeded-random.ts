/**
 * Deterministic PRNG (mulberry32). The decorative artwork (hero rays, pricing
 * halftone) is "random" in the original design; seeding it means the server
 * and the client generate identical markup, so there is no hydration
 * mismatch and no pop-in after load.
 */
export function seededRandom(seed: number) {
  let state = seed >>> 0;
  return function next() {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

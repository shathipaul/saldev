import type { CSSProperties } from "react";

/** CSSProperties that also accepts custom properties (`--name`). */
export type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

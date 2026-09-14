import type { Metadata } from "next";

/**
 * Canonical site origin. Set NEXT_PUBLIC_SITE_URL in production (no trailing
 * slash). Falls back to the Vercel production domain, then to localhost so
 * that local builds still succeed.
 */
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const SITE_URL = (fromEnv ?? "http://localhost:3000").replace(/\/+$/, "");

export const SITE_NAME = "SalDev";
export const SITE_TITLE = "Cold Email, LinkedIn & X Outbound for B2B | SalDev";
export const SITE_DESCRIPTION =
  "We book qualified sales calls for B2B companies across cold email, LinkedIn, and X. Three channels, one system. You pay per meeting, not per month.";

/** Shared Open Graph fields. Pages spread this and add their own `url`. */
export const OPEN_GRAPH_BASE: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_US",
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

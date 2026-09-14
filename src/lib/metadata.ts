import type { Metadata, ResolvingMetadata } from "next";
import { OPEN_GRAPH_BASE } from "@/lib/site";

type PageMeta = {
  title: string;
  description: string;
  /** Path from the site root, e.g. "/about". */
  path: string;
};

/**
 * Per-page metadata. It spreads the parent's resolved Open Graph images so the
 * file-based image (src/app/opengraph-image.tsx) survives; a plain `openGraph`
 * override on a page would drop it.
 */
export async function pageMetadata(
  parent: ResolvingMetadata,
  { title, description, path }: PageMeta,
): Promise<Metadata> {
  const { openGraph } = await parent;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      ...OPEN_GRAPH_BASE,
      title,
      description,
      url: path,
      images: openGraph?.images ?? [],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

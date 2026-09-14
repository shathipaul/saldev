import type { Metadata, ResolvingMetadata } from "next";
import LegalArticle from "@/components/legal/LegalArticle";
import TermsOfService from "@/components/legal/TermsOfService";
import JsonLd from "@/components/shared/JsonLd";
import PageHero from "@/components/shared/PageHero";
import {
  LEGAL_SCOPE,
  LEGAL_UPDATED,
  LEGAL_UPDATED_ISO,
  TERMS_DESCRIPTION,
  TERMS_TITLE,
  TERMS_TOC,
} from "@/data/legal";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const PATH = "/terms";

export async function generateMetadata(
  _props: PageProps<"/terms">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: TERMS_TITLE, description: TERMS_DESCRIPTION, path: PATH });
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: TERMS_TITLE,
  description: TERMS_DESCRIPTION,
  inLanguage: "en",
  dateModified: LEGAL_UPDATED_ISO,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Terms of service", item: `${SITE_URL}${PATH}` },
  ],
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        titleId="terms-title"
        eyebrow="Terms of service"
        titleLine="The terms, in the same"
        gradientLine="plain English as the pricing."
        lede={
          <>
            One setup fee, then $250 per held, qualified meeting and 10% of the revenue those meetings close.
            No retainer, no minimum term.{" "}
            <b className="font-semibold text-ink-2">
              This page is the written version of that deal, plus the usual terms for using this site.
            </b>{" "}
            The signed service agreement for your engagement takes precedence if anything differs.
          </>
        }
      />

      <LegalArticle updated={LEGAL_UPDATED} scope={LEGAL_SCOPE} toc={TERMS_TOC}>
        <TermsOfService />
      </LegalArticle>

      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

import type { Metadata, ResolvingMetadata } from "next";
import LegalArticle from "@/components/legal/LegalArticle";
import PrivacyPolicy from "@/components/legal/PrivacyPolicy";
import JsonLd from "@/components/shared/JsonLd";
import PageHero from "@/components/shared/PageHero";
import {
  LEGAL_SCOPE,
  LEGAL_UPDATED,
  LEGAL_UPDATED_ISO,
  PRIVACY_DESCRIPTION,
  PRIVACY_TITLE,
  PRIVACY_TOC,
} from "@/data/legal";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const PATH = "/privacy";

export async function generateMetadata(
  _props: PageProps<"/privacy">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: PRIVACY_TITLE, description: PRIVACY_DESCRIPTION, path: PATH });
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
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
    { "@type": "ListItem", position: 2, name: "Privacy policy", item: `${SITE_URL}${PATH}` },
  ],
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        titleId="privacy-title"
        eyebrow="Privacy policy"
        titleLine="How we handle data,"
        gradientLine="yours and your prospects’."
        lede={
          <>
            We run cold email, LinkedIn and X outreach for B2B clients, which means we handle three kinds of
            personal data: yours as a visitor or client, and the business contact details of the people we
            write to on a client’s behalf.{" "}
            <b className="font-semibold text-ink-2">
              This page says what we collect, why, and how to make us stop.
            </b>
          </>
        }
      />

      <LegalArticle updated={LEGAL_UPDATED} scope={LEGAL_SCOPE} toc={PRIVACY_TOC}>
        <PrivacyPolicy />
      </LegalArticle>

      <JsonLd data={webPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

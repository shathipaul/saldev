import type { Metadata, ResolvingMetadata } from "next";
import FinalCTA from "@/components/home/FinalCTA";
import MeetingDefinitions from "@/components/pricing/MeetingDefinitions";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingHero from "@/components/pricing/PricingHero";
import RevenueShare from "@/components/pricing/RevenueShare";
import SetupPlans from "@/components/pricing/SetupPlans";
import JsonLd from "@/components/shared/JsonLd";
import { PRICING_CTA_POINTS, PRICING_DESCRIPTION, PRICING_FAQ, PRICING_TITLE, SETUPS } from "@/data/pricing-page";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const PATH = "/pricing";

export async function generateMetadata(
  _props: PageProps<"/pricing">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: PRICING_TITLE, description: PRICING_DESCRIPTION, path: PATH });
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: PRICING_TITLE,
  description: PRICING_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#service` },
};

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SalDev pricing",
    itemListElement: [
      ...SETUPS.map((setup) => ({
        "@type": "Offer",
        name: `${setup.name} setup (one time, from)`,
        description: setup.blurb,
        price: String(setup.amount),
        priceCurrency: "USD",
        url: `${SITE_URL}${PATH}#setups`,
      })),
      {
        "@type": "Offer",
        name: "Per held, qualified meeting",
        price: "250",
        priceCurrency: "USD",
        url: `${SITE_URL}${PATH}#meeting`,
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: PRICING_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}${PATH}` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <SetupPlans />
      <MeetingDefinitions />
      <RevenueShare />
      <PricingFaq />
      <FinalCTA
        eyebrow="Step 1 of the process"
        title="Twenty minutes, then an exact number."
        body="The call is where we look at your ICP, tell you which setup fits, and give you the exact setup figure before it ends. If we don’t think outbound will work for your offer, we will say so."
        points={PRICING_CTA_POINTS}
        secondary={{ label: "What we do", href: "/services" }}
        gradient
      />

      <JsonLd data={webPageJsonLd} />
      <JsonLd data={offerCatalogJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

import type { Metadata, ResolvingMetadata } from "next";
import FinalCTA from "@/components/home/FinalCTA";
import CoreOffer from "@/components/services/CoreOffer";
import FitSection from "@/components/services/FitSection";
import JudgeTheWork from "@/components/services/JudgeTheWork";
import ServicesFaq from "@/components/services/ServicesFaq";
import ServicesPricing from "@/components/services/ServicesPricing";
import YouUs from "@/components/services/YouUs";
import DarkListSection from "@/components/shared/DarkListSection";
import JsonLd from "@/components/shared/JsonLd";
import PageHero from "@/components/shared/PageHero";
import {
  SERVICE_COMMITMENTS,
  SERVICES_CTA_POINTS,
  SERVICES_DESCRIPTION,
  SERVICES_FAQ,
  SERVICES_STAMPS,
  SERVICES_TITLE,
} from "@/data/services";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const PATH = "/services";

export async function generateMetadata(
  _props: PageProps<"/services">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: SERVICES_TITLE, description: SERVICES_DESCRIPTION, path: PATH });
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#service` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SERVICES_FAQ.map((item) => ({
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
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}${PATH}` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        titleId="services-title"
        eyebrow="Services · done-for-you outbound"
        titleLine="Qualified sales calls for early-stage B2B founders."
        gradientLine="Run by the people who pitched you."
        lede={
          <>
            We run cold email, LinkedIn and X outreach for B2B founders from bootstrapped to Series A,
            and the people who pitched you are the people writing the copy and pushing send.{" "}
            <b className="font-semibold text-ink-2">
              Most agencies won’t touch X, and some will promise you a meeting count. We run X, and we
              don’t promise counts.
            </b>{" "}
            One-time setup from $1,500, then $250 per qualified meeting and 10% of the revenue those
            meetings close. No retainer.
          </>
        }
        stamps={SERVICES_STAMPS}
      />

      {/* stitched slab: fit + the core offer read as one panel */}
      <div className="mt-[78px] w-full rounded-t-slab bg-slab max-cols:rounded-t-[22px]">
        <FitSection />
        <CoreOffer />
      </div>

      <ServicesPricing />
      <YouUs />

      <DarkListSection
        id="commit"
        className="pt-2.5 pb-24 max-cols:pb-[70px]"
        eyebrow="What we will and won’t commit to"
        title="We won’t publish a chart, and we won’t promise a count."
        lede="Every founder asks what the numbers will look like. Honest answer: they move with your offer, your deal size and your list, and they’re never the same twice."
        items={SERVICE_COMMITMENTS}
      />

      <JudgeTheWork />
      <ServicesFaq />
      <FinalCTA points={SERVICES_CTA_POINTS} />

      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

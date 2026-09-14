import type { Metadata, ResolvingMetadata } from "next";
import FinalCTA from "@/components/home/FinalCTA";
import ExitCard from "@/components/how-it-works/ExitCard";
import StepsTimeline from "@/components/how-it-works/StepsTimeline";
import DarkListSection from "@/components/shared/DarkListSection";
import JsonLd from "@/components/shared/JsonLd";
import PageHero from "@/components/shared/PageHero";
import { COMMITMENTS, HIW_CTA_POINTS, HIW_DESCRIPTION, HIW_STAMPS, HIW_STEPS, HIW_TITLE } from "@/data/how-it-works";
import { richToText } from "@/data/rich";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const PATH = "/how-it-works";

export async function generateMetadata(
  _props: PageProps<"/how-it-works">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: HIW_TITLE, description: HIW_DESCRIPTION, path: PATH });
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: HIW_TITLE,
  description: HIW_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#service` },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${SITE_URL}${PATH}#howto`,
  name: "OutboundOS: five steps from ideal customer to booked call",
  description: HIW_DESCRIPTION,
  step: HIW_STEPS.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.note,
    text: richToText(step.body),
    url: `${SITE_URL}${PATH}#${step.id}`,
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "How it works", item: `${SITE_URL}${PATH}` },
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        titleId="how-title"
        eyebrow="How it works · OutboundOS"
        titleLine="Five steps from ideal customer"
        gradientLine="to booked call."
        lede={
          <>
            One process, the same on every setup, and the same one we run for our own outreach.{" "}
            <b className="font-semibold text-ink-2">Days count from the kickoff call.</b> Launch in
            about two weeks. First qualified calls typically in weeks 3 to 6 (illustrative, not a
            promise).
          </>
        }
        stamps={HIW_STAMPS}
      />

      {/* stitched slab: the steps and the exit read as one panel */}
      <div className="mt-[78px] w-full rounded-t-slab bg-slab max-cols:rounded-t-[22px]">
        <StepsTimeline />
        <ExitCard />
      </div>

      <DarkListSection
        id="commit"
        eyebrow="In writing"
        title="What we commit to, and what we don’t."
        lede="Six things you can hold us to, and the one thing we won’t pretend to control."
        items={COMMITMENTS}
      />

      <FinalCTA points={HIW_CTA_POINTS} />

      <JsonLd data={webPageJsonLd} />
      <JsonLd data={howToJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

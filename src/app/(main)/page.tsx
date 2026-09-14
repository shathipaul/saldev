import type { Metadata, ResolvingMetadata } from "next";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import Industries from "@/components/home/Industries";
import IndustriesMarquee from "@/components/home/IndustriesMarquee";
import Outbounds from "@/components/home/Outbounds";
import Pricing from "@/components/home/Pricing";
import Problem from "@/components/home/Problem";
import Proof from "@/components/home/Proof";
import Services from "@/components/home/Services";
import StatsStrip from "@/components/home/StatsStrip";
import TrustBar from "@/components/home/TrustBar";
import JsonLd from "@/components/shared/JsonLd";
import { FAQ_ITEMS, faqPlainText } from "@/data/faq";
import { pageMetadata } from "@/lib/metadata";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site";

export async function generateMetadata(
  _props: PageProps<"/">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: SITE_TITLE, description: SITE_DESCRIPTION, path: "/" });
}

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "OutboundOS: cold email, LinkedIn and X outbound for B2B",
  serviceType: "B2B outbound lead generation and appointment setting",
  description: SITE_DESCRIPTION,
  provider: { "@id": `${SITE_URL}/#organization` },
  url: SITE_URL,
  offers: [
    {
      "@type": "Offer",
      name: "Email setup (one time)",
      price: "1500",
      priceCurrency: "USD",
      description:
        "Cold email only. 10 sending domains and 30 inboxes, bought in your name and warmed.",
    },
    {
      "@type": "Offer",
      name: "Multichannel setup (one time)",
      price: "2500",
      priceCurrency: "USD",
      description:
        "Email, LinkedIn and X together. 25 domains and 75 inboxes, plus one LinkedIn profile and one X profile run for you.",
    },
    {
      "@type": "Offer",
      name: "Per held, qualified meeting",
      price: "250",
      priceCurrency: "USD",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: faqPlainText(item.answer) },
  })),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StatsStrip />

      {/* stitched slab: problem + marquee + services read as ONE panel.
          No rail. Continuity comes from a ~3% tonal step plus adjacent
          slabs that split ONE border-radius between them. */}
      <div className="w-full rounded-t-slab bg-slab max-cols:rounded-t-[22px]">
        <Problem />
        <IndustriesMarquee />
      </div>
      {/* seam filler: painted the neighbour's colour, kills sub-pixel gaps */}
      <div className="h-px w-full bg-slab" aria-hidden="true" />
      <div className="w-full rounded-b-slab bg-slab max-cols:rounded-b-[22px]">
        <Services />
        <Industries />
      </div>

      <Outbounds />
      <Proof />
      <Pricing />
      <FAQ />
      <FinalCTA />

      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />
    </>
  );
}

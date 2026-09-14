import type { Metadata, ResolvingMetadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Chronology from "@/components/about/Chronology";
import Principles from "@/components/about/Principles";
import Team from "@/components/about/Team";
import TheCut from "@/components/about/TheCut";
import FinalCTA from "@/components/home/FinalCTA";
import JsonLd from "@/components/shared/JsonLd";
import { ABOUT_DESCRIPTION, ABOUT_TITLE, FOUNDERS } from "@/data/about";
import { pageMetadata } from "@/lib/metadata";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export async function generateMetadata(
  _props: PageProps<"/about">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: ABOUT_TITLE, description: ABOUT_DESCRIPTION, path: "/about" });
}

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${SITE_URL}/about#webpage`,
  url: `${SITE_URL}/about`,
  name: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    foundingDate: "2019",
    founder: FOUNDERS.map((founder) => ({
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role.split(" · ")[0],
      worksFor: { "@id": `${SITE_URL}/#organization` },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* stitched slab: chronology + the cut read as one panel */}
      <div className="mt-[78px] w-full rounded-t-slab bg-slab max-cols:rounded-t-[22px]">
        <Chronology />
        <TheCut />
      </div>

      <Team />
      <Principles />
      <FinalCTA
        title="We are taking founding clients."
        body="A small number of B2B companies, paying for meetings rather than months, getting everything ten years of this taught us. Twenty minutes on a call and you will know whether outbound is worth it for your offer, including if the honest answer is no."
        points={["You pay for meetings, not months", "You own everything", "You talk to the founder"]}
      />

      <JsonLd data={aboutPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

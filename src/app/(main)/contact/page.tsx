import type { Metadata, ResolvingMetadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import JsonLd from "@/components/shared/JsonLd";
import PageHero from "@/components/shared/PageHero";
import { CONTACT_DESCRIPTION, CONTACT_STAMPS, CONTACT_TITLE } from "@/data/contact";
import { pageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/site";

const PATH = "/contact";

export async function generateMetadata(
  _props: PageProps<"/contact">,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  return pageMetadata(parent, { title: CONTACT_TITLE, description: CONTACT_DESCRIPTION, path: PATH });
}

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE_URL}${PATH}#webpage`,
  url: `${SITE_URL}${PATH}`,
  name: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#organization` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Book a call", item: `${SITE_URL}${PATH}` },
  ],
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        titleId="contact-title"
        eyebrow="Book a 20-min call"
        titleLine="Twenty minutes."
        gradientLine="It’s Step 1 of the process."
        lede={
          <>
            We map your dream buyer, your offer, the angles worth testing, and what a qualified call means
            for you.{" "}
            <b className="font-semibold text-ink-2">
              If we don’t think outbound will work for your offer, we’ll tell you on the call
            </b>
            , and you keep the target profile and the angles either way.
          </>
        }
        stamps={CONTACT_STAMPS}
      />

      <ContactSection />

      <JsonLd data={contactPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
    </>
  );
}

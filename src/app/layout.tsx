import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BrandMarkDefs from "@/components/shared/BrandMarkDefs";
import JsonLd from "@/components/shared/JsonLd";
import {
  OPEN_GRAPH_BASE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  keywords: [
    "cold email agency",
    "B2B lead generation",
    "LinkedIn outreach",
    "X outreach",
    "appointment setting",
    "outbound sales",
    "pay per meeting",
  ],
  openGraph: OPEN_GRAPH_BASE,
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F5F5",
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth scroll-pt-[70px]`}
    >
      <body className="relative overflow-x-hidden bg-bg font-sans leading-normal text-ink antialiased">
        {/* SalDev mark (seam-3d), defined once, referenced everywhere via <use> */}
        <BrandMarkDefs />

        {/* Zaymo side glow */}
        <div
          className="glow pointer-events-none fixed inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <i className="l" />
          <i className="r" />
        </div>

        {children}

        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}

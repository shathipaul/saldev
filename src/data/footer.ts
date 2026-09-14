export type FooterLink = { label: string; href: string };

export const FOOTER_COLUMNS: Array<{ heading: string; links: FooterLink[] }> = [
  {
    heading: "Product",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    heading: "OutboundOS",
    links: [
      { label: "Map", href: "/how-it-works#map" },
      { label: "Build", href: "/how-it-works#build" },
      { label: "Launch", href: "/how-it-works#launch" },
      { label: "Book", href: "/how-it-works#book-step" },
      { label: "Compound", href: "/how-it-works#compound" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Book a call", href: "/contact" },
      { label: "About us", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

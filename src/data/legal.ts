/** Shared by the privacy and terms pages. */
export const LEGAL_UPDATED = "23 August 2026";
/** ISO form of LEGAL_UPDATED, for structured data. */
export const LEGAL_UPDATED_ISO = "2026-08-23";
export const LEGAL_SCOPE = "Applies to saldev.io and our services";

/** Yellow placeholder from the source: fill in before launch. */
export const LEGAL_ENTITY_PLACEHOLDER = "[legal entity name and registered address]";

export type TocEntry = { id: string; label: string };

export const PRIVACY_TITLE = "Privacy Policy | SalDev";
export const PRIVACY_DESCRIPTION =
  "How SalDev handles data: visitors, clients, and the business contacts we write to on a client's behalf. What we collect, why, who sees it, and how to make us stop.";

export const PRIVACY_TOC: TocEntry[] = [
  { id: "who", label: "Who we are" },
  { id: "collect", label: "What we collect" },
  { id: "why", label: "Why, and on what basis" },
  { id: "outreach", label: "Outreach standards" },
  { id: "share", label: "Who we share it with" },
  { id: "transfers", label: "International transfers" },
  { id: "retention", label: "Retention" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "prospects", label: "If we contacted you" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export const TERMS_TITLE = "Terms of Service | SalDev";
export const TERMS_DESCRIPTION =
  "SalDev's terms: one setup fee, $250 per held qualified meeting, 10% of first-year revenue on deals closed from our meetings, no retainer, no minimum term, and the usual website terms.";

export const TERMS_TOC: TocEntry[] = [
  { id: "parties", label: "Who’s who" },
  { id: "service", label: "The service" },
  { id: "start", label: "How it starts" },
  { id: "fees", label: "Fees" },
  { id: "qualified", label: "What counts as a meeting" },
  { id: "you", label: "Your side" },
  { id: "own", label: "Ownership" },
  { id: "noguarantee", label: "No guarantees" },
  { id: "term", label: "Term and ending it" },
  { id: "conduct", label: "Conduct and compliance" },
  { id: "confidential", label: "Confidentiality" },
  { id: "liability", label: "Liability" },
  { id: "site", label: "Using this site" },
  { id: "law", label: "Governing law" },
  { id: "contact", label: "Contact" },
];

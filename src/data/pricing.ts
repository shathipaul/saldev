export const COVERAGE = {
  icp: {
    title: "ICP and target list",
    text: "We agree who is genuinely worth talking to, then build the account list against real fit signals. Fit first, volume second.",
  },
  domains: {
    title: "Dedicated sending domains",
    text: "We buy and configure separate domains for your campaigns. Your primary domain never sends a cold message.",
  },
  warmup: {
    title: "Mailbox warmup",
    text: "Every mailbox is warmed for weeks before a single cold send, with SPF, DKIM, and DMARC configured and volume ramped slowly.",
  },
  copy: {
    title: "Sequence copywriting",
    text: "We write the sequences for each segment and you sign off on the first ones. After that we iterate on what is replying.",
  },
  sending: {
    title: "Managed sending",
    text: "We run the sends, monitor inbox placement, and adjust volume and timing. You never touch a tool.",
  },
  report: {
    title: "Weekly written report",
    text: "A short plain-English update every week: what is working, what I changed, what is next.",
  },
  linkedin: {
    title: "LinkedIn outreach",
    text: "Connection requests and DMs to the decision makers you want, with light engagement first so you show up before the message does.",
  },
  x: {
    title: "X outreach",
    text: "Founder-to-founder DMs on X, where your early-stage buyers already are. Run alongside email and LinkedIn so replies compound.",
  },
  data: {
    title: "Verified contact data",
    text: "Every contact gets a verified email and a direct dial where one exists. No bought lists, ever.",
  },
  iterate: {
    title: "Weekly iteration",
    text: "Copy and targeting get revised every week against what actually replied, not against open rates.",
  },
  backup: {
    title: "Backup domain rotation",
    text: "Spare domains stay warming in the background so a campaign never goes dark if one needs to rest.",
  },
  replies: {
    title: "Reply management",
    text: "We triage every reply, handle the back-and-forth, and route qualified conversations straight to your calendar.",
  },
  audit: {
    title: "Outbound audit",
    text: "We review whatever you are running now, tell you what is broken, and show you what we would change before you commit to anything.",
  },
} as const;

export type CoverageKey = keyof typeof COVERAGE;

/** Tags shown on the setup card, in order. */
export const SETUP_TAGS: Array<{ key: CoverageKey; label: string }> = [
  { key: "icp", label: "ICP" },
  { key: "domains", label: "Domains" },
  { key: "warmup", label: "Warmup" },
  { key: "copy", label: "Copy" },
  { key: "data", label: "Verified data" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "x", label: "X" },
  { key: "sending", label: "Sending" },
];

export const FEE_ROWS: Array<{ item: string; price: string }> = [
  { item: "Per held, qualified meeting", price: "$250" },
  { item: "On deals those meetings close", price: "10% of first-year value" },
  { item: "Monthly fee", price: "$0" },
];

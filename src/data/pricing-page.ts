export const PRICING_TITLE = "Pricing: One Setup Fee, Then $250 Per Held Meeting | SalDev";
export const PRICING_DESCRIPTION =
  "No retainer. Email setup from $1,500 or Multichannel setup from $2,500, once. Then $250 per held, qualified meeting and 10% of first-year contract value on deals those meetings close. No minimum term.";

export type Setup = {
  n: string;
  name: string;
  price: string;
  /** Numeric price for structured data. */
  amount: number;
  blurb: string;
  includes: string[];
};

export const SETUPS: Setup[] = [
  {
    n: "Setup 01",
    name: "Email",
    price: "$1,500",
    amount: 1500,
    blurb: "Cold email only. For a founder validating a new ICP, or trying outbound for the first time.",
    includes: [
      "10 sending domains and 30 inboxes, bought in your name and warmed",
      "Hand-built verified list, sequence copy you approve, daily monitoring",
      "Reply handling, qualification, booking and rebooking no-shows",
    ],
  },
  {
    n: "Setup 02",
    name: "Multichannel",
    price: "$2,500",
    amount: 2500,
    blurb: "Email plus LinkedIn and X, with sequences that reference each other across all three channels.",
    includes: [
      "25 domains and 75 inboxes, plus one LinkedIn profile and one X profile run for you",
      "Everything in the Email setup",
      "Priority reply management",
    ],
  },
];

export const INCLUDED_EVERY_SETUP = [
  "ICP, offer and angles written down after the kickoff call",
  "Hand-built verified list. No bought lists, ever",
  "Domains and inboxes in your name, warmed",
  "SPF, DKIM and DMARC, slow ramp, inbox placement watched daily, backup domains warming",
  "Sequence copy you approve before anything sends",
  "Managed sending and daily monitoring",
  "First-line reply handling, qualification, booking, rebooking no-shows",
  "Weekly written report, shared dashboard and meeting log",
];

export type Definition = { label: string; title: string; body: string };

export const MEETING_DEFINITIONS: Definition[] = [
  {
    label: "01 / BILLABLE",
    title: "Held",
    body: "The prospect shows up to the meeting, or to the rescheduled one. A meeting that never happens is never billed.",
  },
  {
    label: "02 / BILLABLE",
    title: "Qualified",
    body: "The prospect meets the criteria we agreed at kickoff: company fit, the roles that count, geography, genuine interest, and booked through our calendar link.",
  },
  {
    label: "03 / NEVER BILLED",
    title: "No-shows",
    body: "Not billed. We chase the rebook; if they attend within 14 days the meeting is billable, otherwise it is not.",
  },
  {
    label: "04 / COMES OFF",
    title: "Rejections",
    body: "Tell us within 5 business days which written criterion a meeting clearly failed and it comes off the invoice. Not buying is not a reason; not fitting is. Over 20% rejected in a month and we pause to fix the criteria together.",
  },
];

export const REVENUE_STEPS: Array<{ title: string; body: string }> = [
  {
    title: "A meeting we booked is held",
    body: "It goes into the shared meeting log, which is attached to every invoice.",
  },
  {
    title: "The deal closes within 12 months",
    body: "Counted from the date of that meeting. Deals that close later are yours outright.",
  },
  {
    title: "10% of first-year contract value",
    body: "Renewals and expansion in year two are not included.",
  },
  {
    title: "Paid monthly as you collect",
    body: "You pay on cash received, not on the signature. Nothing is due before your customer has paid you.",
  },
  {
    title: "Churn inside 90 days is credited back",
    body: "If the customer churns or refunds within 90 days, the 10% on that deal comes off your next invoice.",
  },
];

export type PricingFaqItem = { id: string; question: string; answer: string };

export const PRICING_FAQ: PricingFaqItem[] = [
  {
    id: "setup-fee",
    question: "Why a setup fee at all?",
    answer:
      "Because the build is real work before a single meeting can exist: domains bought and warmed, a list researched by hand, sequences written and approved, the calendar and qualification criteria set up. The setup fee pays for that, once. Everything after it is paid only when a meeting happens.",
  },
  {
    id: "no-meetings",
    question: "What if no meetings come?",
    answer:
      "Then you pay nothing after the setup. That is the point of the model, and it is also why we will tell you on the first call if we don’t think outbound will work for your offer. We would rather turn down the setup fee than build something that can’t book.",
  },
  {
    id: "stop",
    question: "Can I stop whenever I want?",
    answer:
      "Yes. There is no minimum term and no fee to cancel. Meetings already held are invoiced as normal, and the 10% still applies to deals that close within 12 months of a meeting we booked. You keep the domains, inboxes, lists, copy and playbook, and take over their running cost.",
  },
  {
    id: "attribution",
    question: "How do you know which deals came from your meetings?",
    answer:
      "We keep a shared meeting log, and it is attached to every invoice. Each month we go through closed deals with you and match them against the log. A deal only counts if it started with a meeting in that log and closed within 12 months of it.",
  },
  {
    id: "why-setup",
    question: "Why isn’t this pay-per-meeting with no setup fee?",
    answer:
      "Because shops that charge nothing up front have to make it back on volume, and volume is what burns domains and fills your calendar with people who don’t fit. One setup fee lets us build it properly and then get paid only for meetings that meet your criteria.",
  },
  {
    id: "no-numbers",
    question: "Why don’t you publish meeting counts or reply rates?",
    answer:
      "Because they move with your offer, deal size and list, and a number from someone else’s campaign tells you nothing about yours. What we will do on the call is walk through your ICP and tell you honestly whether we think it can book. The pricing is built so that if it can’t, you are not paying monthly to find out.",
  },
];

export const PRICING_CTA_POINTS = ["No retainer", "No minimum term", "Live about two weeks after kickoff"];

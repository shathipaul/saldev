import type { DarkListItem } from "@/components/shared/DarkListSection";
import type { HeroStamp } from "@/components/shared/PageHero";

export const SERVICES_TITLE = "Outbound Services for Early-Stage Founders | SalDev";
export const SERVICES_DESCRIPTION =
  "Cold email, LinkedIn and X outreach, run by the people who pitched you. One-time setup from $1,500, then $250 per qualified meeting and 10% of closed revenue. No retainer.";

export const SERVICES_STAMPS: HeroStamp[] = [
  { label: "Email · LinkedIn ·", value: "X" },
  { value: "No retainer" },
  { label: "You approve", value: "everything" },
  { label: "You own", value: "it all" },
];

export const FIT_YES = [
  "You sell B2B, and the founder is still the one on sales calls.",
  "You’re bootstrapped to Series A and you need pipeline before, or instead of, hiring an SDR.",
  "One closed deal covers the setup fee several times over.",
  "Thousands of companies could plausibly buy from you, not dozens.",
  "You’ve tried cold email, or meant to, and deliverability scared you off or cost you a domain.",
];

export const FIT_NO = [
  "You sell to consumers.",
  "You want 10,000 sends by Friday. Volume without fit is what puts people in spam folders, and we won’t do it.",
  "Your deals are too small for a $250 meeting and 10% of revenue to make sense.",
  "You need a guaranteed meeting count or guaranteed revenue in the contract. We won’t sign that, and you should be careful with anyone who will.",
  "Your buyers run enterprise procurement: security questionnaires, six-month vendor reviews. Outbound isn’t the bottleneck there.",
];

export type Channel = { name: string; swatch: string; body: string; rare?: boolean };

export const CHANNELS: Channel[] = [
  {
    name: "Cold email",
    swatch: "bg-orange",
    body: "Researched, personalized sequences sent from dedicated domains we buy and warm. Built to start a real conversation, not to spray a list into a void. The grind underneath (list research, verification, deliverability) is ours. You see the finished list and the finished copy, approve both, and the plumbing stays out of your way.",
  },
  {
    name: "LinkedIn",
    swatch: "bg-[#0A66C2]",
    body: "Connection requests, DMs and light engagement aimed at the decision-makers you actually want. Written to sound like a person, because a person is sending them.",
  },
  {
    name: "X",
    swatch: "bg-[#111]",
    rare: true,
    body: "Almost nobody runs X. If your buyers are founders, a lot of them are there every day, and a founder-to-founder DM reads differently from an InMail. Run next to email and LinkedIn, it’s one more place a real person shows up.",
  },
];

export const DELIVERABILITY = {
  label: "Underneath all three: deliverability and infrastructure",
  body: "The part that decides whether anything else works. We buy dedicated sending domains, never your primary, warm every mailbox before a single send, set up SPF, DKIM and DMARC, ramp volume slowly while watching inbox placement every day, and keep backup domains warming so a flagged domain doesn’t take the campaign down with it. That’s what gives your messages a real shot at the inbox, and what keeps your real domain’s reputation clean.",
};

export const INCLUDED_EVERY_SETUP = [
  "ICP and angles written down",
  "a hand-built and verified list",
  "domains and inboxes bought in your name and warmed",
  "sequence copy you approve before anything sends",
  "managed sending and daily monitoring",
  "first-line reply handling and booking onto your calendar",
  "a weekly written report plus a shared dashboard.",
];

export type ServiceSetup = { name: string; price: string; blurb: string; includes: string[] };

export const SERVICE_SETUPS: ServiceSetup[] = [
  {
    name: "Email setup",
    price: "$1,500",
    blurb: "Cold email only. For a founder validating a new ICP or trying outbound for the first time.",
    includes: [
      "10 sending domains and 30 inboxes, bought in your name and warmed",
      "Strategy and ICP written down, hand-built verified list, sequence copy you approve",
      "Managed sending, reply handling and booking, weekly report and dashboard",
    ],
  },
  {
    name: "Multichannel setup",
    price: "$2,500",
    blurb: "Email, LinkedIn and X together. For founders who want the full machine, including the channel almost nobody else runs.",
    includes: [
      "25 sending domains and 75 inboxes, plus one LinkedIn profile and one X profile run for you",
      "Sequences that reference each other across all three channels",
      "Everything in the Email setup, with priority reply management",
    ],
  },
];

export const YOU_DO = [
  "One 20-minute call to start. It’s Step 1 of the process.",
  "Approve the first list and the first sequences before anything sends.",
  "After launch: read the weekly report, approve list refreshes and copy changes, flag anything that’s off.",
  "Take the calls.",
];

export const WE_DO = [
  "Everything else. The list, the domains, every word of every sequence, the sending, the replies, the bookings, the no-show rebooks, the weekly report, and the changes that come out of it.",
  "If a task isn’t on your list, it’s on ours.",
];

export const SERVICE_COMMITMENTS: DarkListItem[] = [
  {
    n: "Won’t",
    title: "A meeting count.",
    body: "The usual way to promise one up front is to crank volume, which is exactly the thing that puts you in spam folders.",
  },
  {
    n: "Will",
    title: "The system gets built, and it goes live within 14 days of your approval of the list and copy.",
    body: "The activity happens every week, you approve everything, and you get a written report every week whether the news is good or bad.",
  },
  {
    n: "Will",
    title: "The risk stays on our side.",
    body: "No retainer. You approve everything. No-shows aren’t billed. Stop any time. Leave with everything: domains, inboxes, lists, copy and playbook were bought or written in your name from day one.",
  },
];

export const SAMPLE_MESSAGE = {
  label: "Sample · illustrative · fictional company and contact",
  subject: "the 40 accounts",
  paragraphs: [
    "Hi Dana, saw Relay shipped SSO last month, which usually means you’re starting to sell up-market and Product Hunt inbound isn’t enough on its own.",
    "I pulled 40 mid-market fintech teams that posted for a second platform engineer this quarter. That hire is usually the moment they buy tooling like yours.",
    "Want the list? It’s yours either way. If it’s useful, happy to show you how I’d work it.",
    "Faisal",
  ],
};

export type ServiceFaqItem = { id: string; question: string; answer: string };

export const SERVICES_FAQ: ServiceFaqItem[] = [
  {
    id: "results",
    question: "How fast will I see results?",
    answer:
      "About two weeks to launch while inboxes warm and lists get built. First positive replies usually land in the first two weeks after launch. First calls typically land in weeks 3 to 6, and they build from there as we tune the angles. Those ranges are illustrative.",
  },
  {
    id: "guarantee",
    question: "Can you guarantee a number of meetings?",
    answer:
      "No. What we commit to is the build, the launch date, the activity every week and a written report every week. Your buyers’ calendars aren’t ours to promise.",
  },
  {
    id: "not-working",
    question: "What if it isn’t working?",
    answer:
      "You’ll know from the weekly report. If replies are flat, we’ll tell you what we think is wrong and what we’d change, and we pick one of three things: change the ICP, change the angle, or stop. If we stop, you leave with the domains, inboxes, lists, sequences and a written playbook of what was tried, and you owe nothing further.",
  },
  {
    id: "what-counts",
    question: "What counts as a meeting I pay for?",
    answer:
      "One that happens and fits. The prospect shows up and matches the criteria we wrote down on the kickoff call. No-shows are never billed. If a meeting clearly misses the written criteria, tell us within five business days and it comes off the invoice. Not buying isn’t a reason to reject; not fitting is.",
  },
  {
    id: "burned",
    question: "I’ve been burned by an agency before. Why is this different?",
    answer:
      "Then you already know the failure modes: a junior running your account and templates with your name swapped in. Here you talk to the people writing the copy and pushing send, you approve every message, and your primary domain never touches a cold email. You own every domain, inbox and sequence from day one, so if we’re bad at this, you stop and keep the infrastructure, and you never paid a retainer for the privilege.",
  },
  {
    id: "domain",
    question: "Will this burn my domain?",
    answer:
      "No. Your primary domain never sends a cold message. Everything goes from separate domains bought in your name, warmed for weeks and ramped slowly, with backups warming behind them. The worst realistic outcome is a throwaway domain we bought for the job.",
  },
  {
    id: "sdr",
    question: "Why not just hire an SDR?",
    answer:
      "Speed and reversibility. We’re live in about two weeks, not the months it usually takes to hire and ramp a rep, and for one setup fee and a price per meeting instead of a salary. Prove the channel with us first. Bring it in house later once you know it works, and keep every domain, list and sequence we built.",
  },
  {
    id: "locked-in",
    question: "Am I locked in?",
    answer:
      "No. There’s no retainer to be locked into. One setup fee, then per meeting and on closed revenue, and you own the domains, inboxes, lists and copy from day one.",
  },
];

/** Two columns, as laid out on the page. */
export const SERVICES_FAQ_COLUMNS: ServiceFaqItem[][] = [SERVICES_FAQ.slice(0, 4), SERVICES_FAQ.slice(4)];

export const SERVICES_CTA_POINTS = [
  "You pay for meetings, not months",
  "No lock-in",
  "You talk to the people doing the work",
];

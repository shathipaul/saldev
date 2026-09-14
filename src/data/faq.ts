/** A run of text inside an answer paragraph; `{ b }` renders bold. */
export type Segment = string | { b: string };

export type FaqItem = {
  id: string;
  question: string;
  /** Paragraphs, each a list of segments. */
  answer: Segment[][];
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "qualified-meeting",
    question: "What counts as a qualified meeting?",
    answer: [
      [
        { b: "It has to match the ICP we agreed together, and the prospect has to show up." },
        " Those are the only two tests, and we write them down with you before a single message goes out. That includes the job titles that count, which we set per client rather than applying one blanket rule, because a decision maker in construction sits at a different level than one in SaaS.",
      ],
      [
        "If someone no-shows, we go after the rebook. Attend within 14 days and the meeting is billable. If we cannot get them back, you are not invoiced. Prospects who turn out to sit outside the agreed profile are never billed, whether they showed up or not. And if a meeting clearly misses the written criteria, tell us within five business days and it comes off the invoice. Not buying is not a reason to reject; not fitting is.",
      ],
    ],
  },
  {
    id: "ten-percent",
    question: "How does the 10% work?",
    answer: [
      [
        { b: "It is 10% of first-year contract value on deals that close from meetings we booked, paid monthly as you collect the cash." },
        " It applies to deals that close within twelve months of the meeting, so a long cycle still counts and an unrelated deal two years later does not. If a customer churns or refunds inside ninety days, that 10% comes back off your next invoice.",
      ],
      [
        "We ask for read access to your CRM and keep a shared meeting log, so both of us can see which meetings turned into what. No CRM visibility, no revenue share.",
      ],
    ],
  },
  {
    id: "bill-cap",
    question: "What stops the bill running away?",
    answer: [
      [
        { b: "The first engagement is a capped pilot." },
        " We agree a ceiling up front, run to it, and review together before anything scales. You know your maximum exposure before the first message sends, which is the part most per-meeting arrangements leave uncomfortably open.",
      ],
      ["After the pilot you set the pace. If you want a monthly ceiling on meetings or spend, we work to it."],
    ],
  },
  {
    id: "industry",
    question: "Do you know my industry?",
    answer: [
      [
        "We run outbound across twelve sectors: manufacturing, healthcare, finance, fintech, construction, agencies, consulting, IT, logistics, media production, recruitment and staffing, and SaaS. ",
        { b: "That matters less for the tooling and more for the copy." },
        " Knowing that a hospital procurement lead and a construction estimator read a first line completely differently is the part you cannot outsource to a template.",
      ],
    ],
  },
  {
    id: "domain",
    question: "Will this burn my domain?",
    answer: [
      [
        { b: "No. Your primary domain never sends a cold message." },
        " We buy separate sending domains, warm them for weeks before a single send, configure SPF, DKIM, and DMARC, and ramp volume slowly. The worst realistic outcome is a burnt throwaway domain we bought for the job. Your real business email stays clean.",
      ],
    ],
  },
  {
    id: "guarantee",
    question: "Can you guarantee a number of meetings?",
    answer: [
      [
        { b: "No, and be careful with anyone who does." },
        " The only way to promise a meeting count up front is to crank volume, which is exactly the thing that puts you in spam folders. What we will commit to: the system gets built, it goes live, and you get a written report every week whether the news is good or bad.",
      ],
    ],
  },
  {
    id: "team-location",
    question: "Where is your team based?",
    answer: [
      [
        { b: "Dhaka, working US hours." },
        " Our day is built around your buyers’ calendar rather than ours, so a reply that lands at 9am your time gets handled at 9am your time, not overnight in a queue.",
      ],
      [
        "We would rather tell you that up front than have you find it out on the third call. A lot of agencies in this category sell their postcode as the product. What actually decides whether outbound works is whether someone researched the account properly and wrote something worth replying to. ",
        { b: "Ask us for a sample sequence on your real ICP and judge the work, not the map." },
      ],
    ],
  },
  {
    id: "who-works",
    question: "Who actually works on my account?",
    answer: [
      [
        "A named team, and you meet all of them at kickoff: a strategist who owns your targeting and messaging, a copywriter on your sequences, a deliverability lead on domains and inbox placement, and an ops person keeping lists and campaigns clean. ",
        { b: "The same people stay on your account, and all four work your hours." },
        " No handoff to a junior halfway through, and nobody you have never spoken to sending under your name.",
      ],
    ],
  },
  {
    id: "cold-email-dead",
    question: "Isn’t cold email dead?",
    answer: [
      [
        { b: "Blast email is dead, and the junk in your inbox is what dying looks like." },
        " A short list of accounts that genuinely fit, contacted for a real reason, with copy a person wrote and can defend, still works. If it did not, you would not be reading this page.",
      ],
    ],
  },
  {
    id: "why-not-sdr",
    question: "Why not just hire an SDR?",
    answer: [
      [
        { b: "Speed, cost, and reversibility." },
        " We are live in weeks instead of the three to six months it takes to hire, ramp, and build the infrastructure, for one build fee and a price per meeting instead of a salary. Prove the channel with us first. Bring it in house later once you know it works, and keep every domain, list, and sequence we built.",
      ],
    ],
  },
  {
    id: "lock-in",
    question: "Am I locked in?",
    answer: [
      [
        { b: "No. There is no retainer to be locked into." },
        " You pay once for the build, then per qualified meeting and 10% of the revenue those meetings close. If the meetings stop, so does the invoice. You own the domains, inboxes, lists, copy and playbook from day one, so you can take the whole thing in house whenever you want.",
      ],
    ],
  },
];

/** Two columns, as laid out on the page. */
export const FAQ_COLUMNS: FaqItem[][] = [FAQ_ITEMS.slice(0, 6), FAQ_ITEMS.slice(6)];

/** Plain-text answer, used for FAQPage structured data. */
export function faqPlainText(answer: Segment[][]) {
  return answer
    .map((paragraph) => paragraph.map((s) => (typeof s === "string" ? s : s.b)).join(""))
    .join("\n\n");
}

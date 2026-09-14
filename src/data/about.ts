import type { Rich } from "./rich";
import type { TimelineRow } from "./timeline";

export const ABOUT_TITLE = "About SalDev — founded 2019, focused 2025";
export const ABOUT_DESCRIPTION =
  "SalDev started as a domain two friends bought in 2019. Here is how it became a B2B outbound agency, what we stopped selling, and who you actually get when you hire us.";

export const MILESTONES: TimelineRow[] = [
  {
    label: "2016",
    title: "Other people’s campaigns",
    body: [
      "Faisal takes his first virtual assistant work and starts building and cleaning lists for other people’s cold outreach. Three years of it before SalDev was even a name. Most of that work was deciding which contacts were worth writing to at all, which is still where most of the time goes.",
    ],
  },
  {
    label: "2019",
    title: "saldev.io",
    body: [
      "Computer science engineering on paper, marketing in practice. Faisal and Atiq, a friend who was deep in Android development, buy the domain and start building the site the same week. The plan was to run it as an agency after graduation.",
    ],
  },
  {
    label: "2019",
    note: "to 2023",
    title: "The drawer",
    body: [
      "Freelance work pays this month; a brand pays some other month. So freelance work wins, and SalDev sits unfinished for four years. Neither of us could quite kill it. It was the first thing we built that was ours.",
    ],
  },
  {
    label: "2023",
    title: "Launch, finally",
    body: [
      "SalDev opens as a full service shop. Web development, email, social, apps. If a client asked for it, we said yes to it. Four services, one small team, and no short answer when somebody asked what we actually did.",
    ],
  },
  {
    label: "2025",
    title: "The cut",
    body: [
      "We stopped selling everything and kept one thing: email. That has since grown into the three channels we run today: email, LinkedIn and X. ",
      { em: "Six years of being patient with this brand was enough." },
    ],
  },
  {
    label: "2026",
    now: true,
    title: "Rebuilt, and in a hurry",
    body: [
      "We rebuilt the site and the positioning from nothing. The work had already been narrow for a year. ",
      { em: "This is the year we stopped being quiet about it" },
      " and went looking for the clients to give it to.",
    ],
  },
];

export const DROPPED_SERVICES = [
  "Web development",
  "App development",
  "Social media marketing",
  "Whatever else the client asked for",
];

export const KEPT_CHANNELS = ["Cold email", "LinkedIn", "X"];

export type Fact = { label: string; value: Rich[] };

export type Founder = {
  name: string;
  /** Letter shown in the avatar until a photo is supplied. */
  monogram: string;
  role: string;
  paragraphs: string[];
  rule?: { label: string; text: string };
  facts: Fact[];
};

export const FOUNDERS: Founder[] = [
  {
    name: "Faisal",
    monogram: "F",
    role: "Founder · writes and runs your outreach",
    paragraphs: [
      "Computer science engineering by training, marketing by choice since 2016. Five years freelancing on Upwork and Fiverr with more than a hundred clients, nearly all of it list building, copy and cold outreach. He billed $100K+ on Upwork alone and $400K+ across both.",
      "He left Upwork after five years still holding Top Rated Plus, and stopped freelancing altogether in 2025. He has taken no new freelance clients since.",
      "Writes your sequences, runs the sends, watches deliverability, and sends the weekly update himself.",
    ],
    rule: { label: "The one rule", text: "If it doesn’t sound like a person, don’t send it." },
    facts: [
      { label: "Since 2016", value: ["Lists, verification, cold email"] },
      { label: "Freelance", value: [{ em: "$400K+" }, " billed, 100+ clients"] },
      { label: "On Upwork", value: [{ em: "$100K+" }, ", ", { em: "Top Rated Plus" }] },
      { label: "Studied", value: ["Computer science engineering"] },
      { label: "Does", value: ["Copy, sending, reporting"] },
    ],
  },
  {
    name: "Atiq",
    monogram: "A",
    role: "Co-founder & CTO · backend and infrastructure",
    paragraphs: [
      "Senior Android developer. Started in 2015 with Java, moved fully to Kotlin, and has shipped apps used by thousands of people. He cares about clean architecture and apps that keep working long after launch.",
      "Bought saldev.io with Faisal in 2019 and built the first version of this site. Now builds and maintains everything the outreach runs on, and still ships custom Android work for eCommerce clients.",
      "For you that means the sending setup, the domains and the monitoring are built by an engineer who does this for a living, rather than assembled from a tutorial the week your campaign starts.",
    ],
    facts: [
      { label: "Since 2015", value: ["Android, Java then Kotlin"] },
      { label: "Since 2019", value: ["Co-founder, saldev.io"] },
      { label: "Builds", value: ["Backend and infrastructure"] },
      { label: "Also ships", value: ["Custom Android for eCommerce"] },
    ],
  },
];

export const PRINCIPLES: Array<{ n: string; title: string; body: string }> = [
  {
    n: "01",
    title: "We will not buy your list.",
    body: "Every contact is researched and verified. Bought data is the fastest way to burn a domain, and it is the first thing a cheap agency reaches for.",
  },
  {
    n: "02",
    title: "We will not send from your primary domain.",
    body: "We buy and warm dedicated sending domains. The worst case is a throwaway domain we paid for, never the address your customers already reply to.",
  },
  {
    n: "03",
    title: "We will not send anything you have not read.",
    body: "You sign off on the first sequence for every segment before a single email goes out. After that we iterate on whatever is actually getting replies.",
  },
  {
    n: "04",
    title: "We will not hide the account from you.",
    body: "A short written update every week: what is working, what we changed, what is next. You will not have to go digging through a dashboard to find it.",
  },
  {
    n: "05",
    title: "We will not lock you in.",
    body: "No retainer and no minimum term. You pay once for the build, then per qualified meeting and a share of what closes, and you own the domains, the inboxes, the lists and the copy, including on the day you decide to leave.",
  },
];

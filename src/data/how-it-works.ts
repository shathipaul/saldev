import type { DarkListItem } from "@/components/shared/DarkListSection";
import type { HeroStamp } from "@/components/shared/PageHero";
import type { TimelineRow } from "./timeline";

export const HIW_TITLE = "How It Works: OutboundOS, Five Dated Steps to Booked Calls | SalDev";
export const HIW_DESCRIPTION =
  "Map, Build, Launch, Book, Compound. Live in about two weeks. You approve every list and message. No meeting guarantees, and a written report every week.";

export const HIW_STAMPS: HeroStamp[] = [
  { label: "Day 0", value: "Map" },
  { label: "Days 1–10", value: "Build" },
  { label: "About two weeks", value: "Launch" },
  { label: "Weeks 3–6", value: "Book" },
  { label: "Every week", value: "Compound" },
];

export const HIW_STEPS: TimelineRow[] = [
  {
    id: "map",
    label: "Day 0",
    note: "Map",
    title: "1. Map",
    body: [
      "The 20-minute call you book is this step. We nail down your dream buyer, your offer, the angles worth testing, and which calendar the calls land on. We also agree what “qualified” means for you, in writing, so a booked call is never a surprise.",
    ],
    you: "20 minutes.",
    us: "once you’ve signed, the ICP, the qualification criteria and the first play, written up within 48 hours.",
  },
  {
    id: "build",
    label: "Day 1–10",
    note: "Build",
    title: "2. Build",
    body: [
      "We buy the secondary sending domains in your name and start warm-up on day one, because warm-up is the clock everything else waits on. Your primary domain never touches a cold message. While they warm, we build the account list by hand (fit first, volume second), verify every contact, and write the sequences for each channel and segment. No bought lists, ever. You get a sample of the list first, with the reason each account made the cut, then the full list and every message. The test for copy is simple: if you wouldn’t reply to it yourself, it doesn’t go out.",
    ],
    you: "review and approve the list and the copy.",
    us: "everything else. Nothing sends until you say so, and the setup fee is the only thing you’ve paid.",
  },
  {
    id: "launch",
    label: "Wk 2",
    note: "Launch",
    title: "3. Launch",
    body: [
      "Domains are warm, list and copy are approved. The channels on your setup go live from infrastructure we’ve already tested, at a deliberately low volume that ramps over the following weeks. We watch inbox placement daily from the first send, and you get a note the moment the first messages go out. From here you pay $250 per held, qualified meeting and 10% of the revenue those meetings close. Nothing else.",
    ],
    you: "nothing, unless you want to watch the dashboard.",
    us: "sending, monitoring, pacing, and first-line reply handling.",
  },
  {
    id: "book-step",
    label: "Wk 3–6",
    note: "Book",
    title: "4. Book",
    body: [
      "Replies come in. We qualify each one against the criteria from Step 1, book the ones that pass onto your calendar with context on who they are and what they said, and rebook no-shows. Anything borderline comes to you with our read attached, and you decide. Each held meeting that meets the written criteria is billed at $250; no-shows aren’t. First positive replies typically in the first two weeks after launch, first calls in weeks 3 to 6 (category norms, illustrative).",
    ],
    you: "take the calls.",
    us: "qualify, book, rebook, and log every reply so you can see the whole funnel.",
  },
  {
    id: "compound",
    label: "Weekly",
    note: "Compound",
    title: "5. Compound",
    now: true,
    body: [
      "A short written report every week, in plain English: what’s working, what we changed, what’s next. No dashboard archaeology required. Behind it we test new angles, refresh the list, retire segments that don’t reply, and push volume only where replies earn it. Month three should beat month one, because every week’s data feeds the next week’s sends.",
    ],
    you: "read the report and approve changes.",
    us: "the loop, and a straight answer when something isn’t working.",
  },
];

export const COMMITMENTS: DarkListItem[] = [
  {
    n: "01",
    title: "The system gets built.",
    body: "Domains, inboxes, warm-up, list, sequences, calendar. All of it, in your name.",
  },
  {
    n: "02",
    title: "It goes live within 14 days of your approval of the list and copy.",
    body: "That’s the one date on this page that’s ours to keep.",
  },
  {
    n: "03",
    title: "The activity happens every week.",
    body: "And you can see it in the shared dashboard at any time.",
  },
  {
    n: "04",
    title: "You approve every list and every message before it sends.",
    body: "Nothing goes out under your name on a guess.",
  },
  {
    n: "05",
    title: "A written report every week, good news or bad.",
    body: "What’s working, what we changed, what’s next. In plain English.",
  },
  {
    n: "06",
    title: "No retainer. You own everything from day one.",
    body: "We don’t commit to a meeting count, and we’d be wary of anyone who does. The usual way to promise meetings up front is to crank volume, and that’s how domains get burned.",
  },
];

export const HIW_CTA_POINTS = [
  "You pay for meetings, not months",
  "No lock-in",
  "You talk to the people doing the work",
];

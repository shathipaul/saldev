import type { HeroStamp } from "@/components/shared/PageHero";

export const CONTACT_TITLE = "Book a 20-min Call | SalDev";
export const CONTACT_DESCRIPTION =
  "Twenty minutes. We map your ideal customer, your offer and the angles worth testing, and tell you straight if outbound won't work for you. Step 1 of the process.";

/** Placeholder from the source site; swap for the real inbox before launch. */
export const CONTACT_EMAIL = "hello@saldev.com";

export const CONTACT_STAMPS: HeroStamp[] = [
  { label: "You pay for", value: "meetings, not months" },
  { value: "No lock-in" },
  { label: "You talk to the people", value: "doing the work" },
];

export type CallSection = { title: string; items: string[] };

export const CALL_SECTIONS: CallSection[] = [
  {
    title: "What happens on the call",
    items: [
      "We agree who is genuinely worth talking to: company fit, role, geography.",
      "We find the two or three angles worth testing first, and which channels make sense for your buyers.",
      "We write down what “qualified” means for you, so a booked call is never a surprise, and you hear the exact setup figure before the call ends.",
    ],
  },
  {
    title: "Bring, if you have it",
    items: [
      "Your best guess at the ideal customer, and one or two customers you’d love ten more of.",
      "Your offer and typical deal size.",
      "Anything you’ve tried before, and what happened.",
    ],
  },
  {
    title: "After the call",
    items: [
      "If we go ahead: you sign, the setup fee is paid, and within 48 hours you get the ICP, the qualification criteria and the first play in writing.",
      "Domains bought in your name and warming from day one. Live in about two weeks.",
      "If we don’t go ahead: you keep the target profile and the angles. No hard feelings.",
    ],
  },
];

/** Options for the "setup you're considering" select; the first is preselected. */
export const SETUP_OPTIONS = ["Not sure yet", "Email setup, $1,500", "Multichannel setup, $2,500"];

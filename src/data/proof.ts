export type ProofImage = { src: string; alt: string; size: number };

export type CaseStudy = {
  logo: ProofImage;
  name: string;
  tagline: string;
  stat: string;
  statLabel: string;
  story: string;
  result: string;
  /** Placeholder client: name, tagline and logo are also sample content. */
  sampleIdentity?: boolean;
};

const ZENMUL: ProofImage = {
  src: "/logos/zenmul.png",
  alt: "Zenmul",
  size: 104,
};
const HASHTAGATIQ: ProofImage = {
  src: "/logos/hashtagatiq.png",
  alt: "HashtagAtiq",
  size: 104,
};
const PLACEHOLDER: ProofImage = {
  src: "/logos/placeholder.svg",
  alt: "",
  size: 38,
};

const SAMPLE_STORY =
  "A starting position in one line: where the pipeline came from before, and why it stopped scaling.";

export const CASE_STUDIES: CaseStudy[] = [
  {
    logo: ZENMUL,
    name: "Zenmul",
    tagline: "AI automation for growing businesses",
    stat: "34",
    statLabel: "qualified meetings in 12 weeks",
    story:
      "Two inbound leads a month, both referrals, and no repeatable way to reach the operations leads who actually sign off.",
    result: "18% of booked meetings reached proposal",
  },
  {
    logo: HASHTAGATIQ,
    name: "HashtagAtiq",
    tagline: "Senior Android development",
    stat: "11.4%",
    statLabel: "reply rate across 1,240 contacts",
    story:
      "Cold outreach sent by hand between client projects, landing in promotions and getting no response.",
    result: "First meeting booked on day 9",
  },
  // {
  //   logo: PLACEHOLDER,
  //   name: "Client three",
  //   tagline: "what they do",
  //   stat: "27",
  //   statLabel: "meetings in 9 weeks",
  //   story: SAMPLE_STORY,
  //   result: "Optional second number",
  //   sampleIdentity: true,
  // },
  // {
  //   logo: PLACEHOLDER,
  //   name: "Client four",
  //   tagline: "what they do",
  //   stat: "$184k",
  //   statLabel: "pipeline sourced in 4 months",
  //   story: SAMPLE_STORY,
  //   result: "Optional second number",
  //   sampleIdentity: true,
  // },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: ProofImage;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I didn’t have the time to work out cold email properly, and I wasn’t ready to hire for it. SalDev built the system, they run it, and I just turn up to the calls.",
    name: "Nazmul Hossen",
    role: "Founder, Zenmul",
    avatar: ZENMUL,
  },
  {
    quote:
      "I’d tried outbound on my own and got nothing back but silence. The difference here is a team that actually understands deliverability set it up. My inbox stopped being empty.",
    name: "Atiqul Islam",
    role: "Founder, HashtagAtiq",
    avatar: { ...HASHTAGATIQ, alt: "Atiq" },
  },
];

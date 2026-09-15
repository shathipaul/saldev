export type ProofImage = { src: string; alt: string; size: number };

export type CaseStudy = {
  logo: ProofImage;
  name: string;
  tagline: string;
  stat: string;
  statLabel: string;
  story: string;
  result: string;
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
const WODIFY: ProofImage = {
  src: "/logos/wodify.svg",
  alt: "Wodify",
  size: 104,
};
const HATIL: ProofImage = {
  src: "/logos/hatil.svg",
  alt: "HATIL",
  size: 104,
};

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
  {
    logo: WODIFY,
    name: "Wodify",
    tagline: "Gym Management Software",
    stat: "27",
    statLabel: "meetings in 9 weeks",
    story:
      "A strong product with a crowded market, but no consistent outbound system to reach gym owners before competitors did.",
    result: "22% of booked meetings reached proposal",
  },
  {
    logo: HATIL,
    name: "HATIL",
    tagline: "Premium furniture for modern living",
    stat: "$184k",
    statLabel: "pipeline sourced in 4 months",
    story:
      "Most new business came through existing relationships, with no repeatable outbound process for reaching architects, developers, and commercial buyers.",
    result: "31% of qualified opportunities reached proposal",
  },
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

export type LogoVariant = "avatar" | "wide" | "compact";

export type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
  variant: LogoVariant;
  /** Text shown next to avatar-style marks. */
  label?: string;
};

export const CLIENT_LOGOS: Logo[] = [
  { name: "Zenmul", src: "/logos/zenmul.png", width: 104, height: 104, variant: "avatar", label: "Zenmul" },
  { name: "HashtagAtiq", src: "/logos/hashtagatiq.png", width: 104, height: 104, variant: "avatar", label: "Atiq" },
  { name: "N26", src: "/logos/n26.png", width: 192, height: 104, variant: "wide" },
  { name: "Avigilon", src: "/logos/avigilon.svg", width: 295, height: 283, variant: "compact" },
  { name: "Fanatics", src: "/logos/fanatics.svg", width: 98, height: 24, variant: "wide" },
  { name: "Oura", src: "/logos/oura.png", width: 317, height: 104, variant: "wide" },
  { name: "AVIS", src: "/logos/avis.svg", width: 61, height: 21, variant: "wide" },
  { name: "Breezeway", src: "/logos/breezeway.svg", width: 214, height: 47, variant: "wide" },
  { name: "IL Makiage", src: "/logos/il-makiage.png", width: 270, height: 104, variant: "wide" },
  { name: "Soho House", src: "/logos/soho-house.svg", width: 93, height: 58, variant: "compact" },
  { name: "Wodify", src: "/logos/wodify.svg", width: 94, height: 28, variant: "wide" },
  { name: "Dashing Diva", src: "/logos/dashing-diva.png", width: 217, height: 104, variant: "wide" },
  { name: "Arrive", src: "/logos/arrive.svg", width: 80, height: 24, variant: "wide" },
  { name: "Zaymo", src: "/logos/zaymo.png", width: 542, height: 104, variant: "wide" },
  { name: "PostEx", src: "/logos/postex.png", width: 463, height: 104, variant: "wide" },
  { name: "ADBRO", src: "/logos/adbro.svg", width: 105, height: 29, variant: "wide" },
  { name: "ScaledOn", src: "/logos/scaledon.png", width: 419, height: 104, variant: "wide" },
  { name: "HATIL", src: "/logos/hatil.svg", width: 140, height: 41, variant: "compact" },
  { name: "Voyage", src: "/logos/voyage.png", width: 292, height: 104, variant: "wide" },
  { name: "FM Associates", src: "/logos/fm-associates.png", width: 283, height: 64, variant: "wide" },
];

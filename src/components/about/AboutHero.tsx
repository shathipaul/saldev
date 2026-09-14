import PageHero from "@/components/shared/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      titleId="about-title"
      eyebrow="About SalDev"
      titleLine="Founded in 2019."
      gradientLine="Focused in 2025."
      lede={
        <>
          SalDev started as a domain two of us bought while we were still in engineering school, and
          a website we never quite finished. It took a launch, a lot of freelance work, and{" "}
          <b className="font-semibold text-ink-2">years of doing everything</b> before we worked out
          which part to keep.
        </>
      }
      stamps={[
        { label: "Domain bought", value: "2019" },
        { label: "Launched", value: "2023" },
        { label: "Focused", value: "2025" },
        { value: "Dhaka + Kuwait", suffix: "on US hours" },
      ]}
    />
  );
}

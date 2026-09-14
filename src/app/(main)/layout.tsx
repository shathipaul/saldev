import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-[1]">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-[14px] focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content">{children}</main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}

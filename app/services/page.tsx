import type { Metadata } from "next";
import Nav from "../../components/sections/Nav";
import PageHero from "../../components/ui/PageHero";
import ServicesDirectory from "../../components/sections/ServicesDirectory";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: `Concrete & Construction Services | ${siteConfig.name}`,
  description:
    "Every concrete and construction service Trez offers across Greater Central Texas — driveways, patios, foundations, slabs, repair, and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="What We Build"
          title="Every Service We Offer"
          description="From a single driveway to full-scope construction, browse the complete catalog of what we build across Central Texas."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
        <ServicesDirectory />
        <Contact context={{ sourcePage: "service" }} />
      </main>
      <Footer />
    </>
  );
}

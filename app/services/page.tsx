import type { Metadata } from "next";
import Nav from "../../components/sections/Nav";
import PageHero from "../../components/ui/PageHero";
import ServicesDirectory from "../../components/sections/ServicesDirectory";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";

export const metadata: Metadata = {
  title: "Construction Services",
  description:
    "Every service our construction company offers across Greater Central Texas — concrete contractor work, drywall installation, flooring installation, wet utilities installation, and more.",
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

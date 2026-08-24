import type { Metadata } from "next";
import Nav from "../../components/sections/Nav";
import PageHero from "../../components/ui/PageHero";
import ServiceAreasGrid from "../../components/sections/ServiceAreasGrid";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.name}`,
  description: `Everywhere ${siteConfig.name} works across ${siteConfig.serviceArea}.`,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Service Areas"
          title="Where We Pour"
          description={`Concrete and construction services across ${siteConfig.serviceArea}.`}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        />
        <ServiceAreasGrid />
        <Contact context={{ sourcePage: "service-area" }} />
      </main>
      <Footer />
    </>
  );
}

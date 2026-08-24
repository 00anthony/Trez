import type { Metadata } from "next";
import Nav from "../../components/sections/Nav";
import PageHero from "../../components/ui/PageHero";
import About from "../../components/sections/About";
import WhyChooseUs from "../../components/sections/WhyChooseUs";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: `About ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, a concrete contractor and general contractor serving ${siteConfig.serviceArea}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="About Us"
          title={`The Team Behind ${siteConfig.shortName}`}
          description="Built on the details that matter — soil-specific engineering, honest estimates, and a crew that shows up."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />
        <About />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

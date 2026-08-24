import type { Metadata } from "next";
import Nav from "../../components/sections/Nav";
import PageHero from "../../components/ui/PageHero";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.name}`,
  description: `Request a free estimate from ${siteConfig.name}. ${siteConfig.responsePromise}`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Get In Touch"
          title="Let's Talk About Your Project"
          description={siteConfig.responsePromise}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Nav from "../../components/sections/Nav";
import PageHero from "../../components/ui/PageHero";
import ProjectsDirectory from "../../components/sections/ProjectsDirectory";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import { siteConfig } from "../../lib/site-config";

export const metadata: Metadata = {
  title: `Project Portfolio | ${siteConfig.name}`,
  description:
    "Browse every completed concrete and construction project across Greater Central Texas, filterable by category.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Our Work"
          title="The Full Portfolio"
          description="Every completed project, filterable by category — drag any before/after slider to compare the site."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        />
        <ProjectsDirectory />
        <Contact context={{ sourcePage: "project" }} />
      </main>
      <Footer />
    </>
  );
}

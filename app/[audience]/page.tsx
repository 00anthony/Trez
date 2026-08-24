import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../components/sections/Nav";
import Services from "../../components/sections/Services";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import AudienceHero from "../../components/audience/AudienceHero";
import { ProjectsFilterProvider } from "../../lib/projects-filter-context";
import { audiences } from "../../lib/data";
import { isServiceAudience } from "../../lib/audience";
import { siteConfig } from "../../lib/site-config";

type Params = { audience: string };

// Only exact matches from generateStaticParams render — everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  if (!siteConfig.features.audienceRoutes) return [];
  return audiences.filter((a) => a.enabled).map((a) => ({ audience: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  if (!siteConfig.features.audienceRoutes) return {};
  const { audience: slug } = await params;
  const audience = audiences.find((a) => a.slug === slug && a.enabled);
  if (!audience) return {};

  return {
    title: audience.copy?.heroHeadline ?? `${audience.name} | ${siteConfig.name}`,
    description: audience.copy?.heroDescription,
    alternates: { canonical: `/${audience.slug}` },
  };
}

export default async function AudiencePage({ params }: { params: Promise<Params> }) {
  if (!siteConfig.features.audienceRoutes) notFound();

  const { audience: slug } = await params;
  const audience = audiences.find((a) => a.slug === slug && a.enabled);
  if (!audience || !isServiceAudience(audience.slug)) notFound();

  return (
    <>
      <Nav />
      <main>
        <AudienceHero audience={audience} />
        <ProjectsFilterProvider>
          <Services lockedAudience={audience.slug} />
        </ProjectsFilterProvider>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

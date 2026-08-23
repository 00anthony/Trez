import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../components/sections/Nav";
import Contact from "../../components/sections/Contact";
import Footer from "../../components/sections/Footer";
import AudienceHero from "../../components/audience/AudienceHero";
import { audiences, services } from "../../lib/data";
import { siteConfig } from "../../lib/site-config";

type Params = { audience: string };

// Only exact matches from generateStaticParams render — everything else 404s.
// Combined with an empty array below while audienceRoutes is off, this keeps
// the entire [audience] segment unreachable for Trez.
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
  if (!audience) notFound();

  return (
    <>
      <Nav />
      <main>
        <AudienceHero audience={audience} services={services} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

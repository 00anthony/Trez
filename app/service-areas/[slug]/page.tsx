import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../../components/sections/Nav";
import Contact from "../../../components/sections/Contact";
import Footer from "../../../components/sections/Footer";
import ServiceAreaHero from "../../../components/service-area/ServiceAreaHero";
import ServiceAreaOverview from "../../../components/service-area/ServiceAreaOverview";
import AreaProjects from "../../../components/service-area/AreaProjects";
import { serviceAreas, services, getProjectsByServiceArea } from "../../../lib/data";
import { siteConfig } from "../../../lib/site-config";
import { breadcrumbJsonLd } from "../../../lib/structured-data";

type Params = { slug: string };

export function generateStaticParams() {
  if (!siteConfig.features.serviceAreaPages) return [];
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area || !siteConfig.features.serviceAreaPages) return {};

  const title = area.seo?.title ?? `Concrete Contractor in ${area.name}${area.state ? `, ${area.state}` : ""} | ${siteConfig.name}`;
  const description = area.seo?.description ?? area.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      title,
      description,
      url: `/service-areas/${area.slug}`,
    },
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<Params> }) {
  if (!siteConfig.features.serviceAreaPages) notFound();

  const { slug } = await params;
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const relatedServices = services.filter((s) => area.relatedServices?.includes(s.slug));
  const areaProjects = getProjectsByServiceArea(area.slug);
  const jsonLd = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Service Areas", path: `/service-areas/${area.slug}` },
    { name: area.name, path: `/service-areas/${area.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <ServiceAreaHero area={area} hasProjects={areaProjects.length > 0} />
        <ServiceAreaOverview area={area} relatedServices={relatedServices} />
        <AreaProjects projects={areaProjects} areaName={area.name} />
        <Contact context={{ sourcePage: "service-area", location: area.name }} />
      </main>
      <Footer />
    </>
  );
}

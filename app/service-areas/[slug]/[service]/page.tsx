import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../../../components/sections/Nav";
import Contact from "../../../../components/sections/Contact";
import Footer from "../../../../components/sections/Footer";
import ServiceHero from "../../../../components/service/ServiceHero";
import ServiceOverview from "../../../../components/service/ServiceOverview";
import RelatedProjects from "../../../../components/service/RelatedProjects";
import { serviceAreas, services, projects } from "../../../../lib/data";
import { getServiceContent } from "../../../../lib/audience";
import { siteConfig } from "../../../../lib/site-config";
import { breadcrumbJsonLd, serviceJsonLd } from "../../../../lib/structured-data";
import type { ServiceContent } from "../../../../lib/types";

type Params = { slug: string; service: string };

// Only exact matches from generateStaticParams render — no thin, blanket
// city×service combinations get generated.
export const dynamicParams = false;

function resolve(areaSlug: string, serviceSlug: string) {
  const area = serviceAreas.find((a) => a.slug === areaSlug);
  const service = services.find((s) => s.slug === serviceSlug);
  if (!area || !service || !area.relatedServices?.includes(serviceSlug)) return null;
  return { area, service };
}

export function generateStaticParams() {
  if (!siteConfig.features.locationServicePages) return [];
  return serviceAreas.flatMap((area) =>
    (area.relatedServices ?? [])
      .filter((serviceSlug) => resolve(area.slug, serviceSlug))
      .map((serviceSlug) => ({ slug: area.slug, service: serviceSlug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  if (!siteConfig.features.locationServicePages) return {};
  const { slug, service: serviceSlug } = await params;
  const resolved = resolve(slug, serviceSlug);
  if (!resolved) return {};

  const { area, service } = resolved;
  const content = getServiceContent(service);
  const locationLabel = `${area.name}${area.state ? `, ${area.state}` : ""}`;
  const title = `${content.name} in ${locationLabel} | ${siteConfig.name}`;
  const description = `${content.short} Serving ${locationLabel} and the surrounding area.`;

  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}/${service.slug}` },
  };
}

export default async function LocationServicePage({ params }: { params: Promise<Params> }) {
  if (!siteConfig.features.locationServicePages) notFound();

  const { slug, service: serviceSlug } = await params;
  const resolved = resolve(slug, serviceSlug);
  if (!resolved) notFound();
  const { area, service } = resolved;

  const baseContent = getServiceContent(service);
  const locationLabel = `${area.name}${area.state ? `, ${area.state}` : ""}`;
  const content: ServiceContent = {
    ...baseContent,
    name: `${baseContent.name} in ${locationLabel}`,
  };

  // Only projects that genuinely match both this service AND this area —
  // never a city-name-swapped list.
  const relatedProjects = projects.filter(
    (p) => p.serviceSlug === service.slug && p.serviceAreaSlug === area.slug
  );

  const path = `/service-areas/${area.slug}/${service.slug}`;
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: area.name, path: `/service-areas/${area.slug}` },
      { name: baseContent.name, path },
    ]),
    serviceJsonLd(content, path),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <ServiceHero
          content={content}
          hasRelatedProjects={relatedProjects.length > 0}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas", href: "/service-areas" },
            { label: area.name, href: `/service-areas/${area.slug}` },
            { label: baseContent.name },
          ]}
        />
        <ServiceOverview content={baseContent} />
        <RelatedProjects projects={relatedProjects} serviceName={content.name} />
        <Contact
          defaultService={service.slug}
          context={{ sourcePage: "service-area", location: area.name }}
        />
      </main>
      <Footer />
    </>
  );
}

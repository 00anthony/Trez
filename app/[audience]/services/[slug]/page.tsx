import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../../../components/sections/Nav";
import Contact from "../../../../components/sections/Contact";
import Footer from "../../../../components/sections/Footer";
import ServiceHero from "../../../../components/service/ServiceHero";
import ServiceOverview from "../../../../components/service/ServiceOverview";
import RelatedProjects from "../../../../components/service/RelatedProjects";
import { audiences, services, getProjectsByService } from "../../../../lib/data";
import { getServiceContent } from "../../../../lib/audience";
import { siteConfig } from "../../../../lib/site-config";
import { breadcrumbJsonLd, serviceJsonLd } from "../../../../lib/structured-data";

type Params = { audience: string; slug: string };

// Only exact matches from generateStaticParams render — see app/[audience]/page.tsx.
export const dynamicParams = false;

export function generateStaticParams() {
  if (!siteConfig.features.audienceRoutes) return [];
  return audiences
    .filter((a) => a.enabled)
    .flatMap((audience) => services.map((service) => ({ audience: audience.slug, slug: service.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  if (!siteConfig.features.audienceRoutes) return {};
  const { audience: audienceSlug, slug } = await params;
  const audience = audiences.find((a) => a.slug === audienceSlug && a.enabled);
  const baseService = services.find((s) => s.slug === slug);
  if (!audience || !baseService) return {};

  const service = getServiceContent({ service: baseService, audience });
  const title = service.seo?.title ?? `${service.name} | ${siteConfig.name}`;
  const description = service.seo?.description ?? service.short;

  return {
    title,
    description,
    alternates: { canonical: `/${audience.slug}/services/${service.slug}` },
  };
}

export default async function AudienceServicePage({ params }: { params: Promise<Params> }) {
  if (!siteConfig.features.audienceRoutes) notFound();

  const { audience: audienceSlug, slug } = await params;
  const audience = audiences.find((a) => a.slug === audienceSlug && a.enabled);
  const baseService = services.find((s) => s.slug === slug);
  if (!audience || !baseService) notFound();

  const service = getServiceContent({ service: baseService, audience });
  const relatedProjects = getProjectsByService(baseService.slug);
  const path = `/${audience.slug}/services/${service.slug}`;
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: audience.name, path: `/${audience.slug}` },
      { name: service.name, path },
    ]),
    serviceJsonLd(service, path),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <ServiceHero service={service} hasRelatedProjects={relatedProjects.length > 0} />
        <ServiceOverview service={service} />
        <RelatedProjects projects={relatedProjects} serviceName={service.name} />
        <Contact
          defaultService={baseService.slug}
          context={{ sourcePage: "audience-service", service: baseService.slug }}
        />
      </main>
      <Footer />
    </>
  );
}

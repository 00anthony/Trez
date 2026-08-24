import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../../components/sections/Nav";
import Contact from "../../../components/sections/Contact";
import Footer from "../../../components/sections/Footer";
import ServiceHero from "../../../components/service/ServiceHero";
import ServiceOverview from "../../../components/service/ServiceOverview";
import RelatedProjects from "../../../components/service/RelatedProjects";
import { audiences, services, getProjectsByService } from "../../../lib/data";
import { getServiceContent, isServiceAudience } from "../../../lib/audience";
import { siteConfig } from "../../../lib/site-config";
import { breadcrumbJsonLd, serviceJsonLd } from "../../../lib/structured-data";

type Params = { audience: string; slug: string };

// Only exact matches from generateStaticParams render — see app/[audience]/page.tsx.
export const dynamicParams = false;

export function generateStaticParams() {
  if (!siteConfig.features.audienceRoutes) return [];
  return audiences
    .filter((a) => a.enabled && isServiceAudience(a.slug))
    .flatMap((audience) =>
      services
        .filter((service) => service.audiences.includes(audience.slug as "residential" | "commercial"))
        .map((service) => ({ audience: audience.slug, slug: service.slug }))
    );
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
  if (!audience || !baseService || !baseService.audiences.includes(audienceSlug as "residential" | "commercial")) {
    return {};
  }

  const content = getServiceContent(baseService, audience.slug);
  const title = content.seo?.title ?? `${content.name} | ${siteConfig.name}`;
  const description = content.seo?.description ?? content.short;

  return {
    title,
    description,
    alternates: { canonical: `/${audience.slug}/${baseService.slug}` },
  };
}

export default async function AudienceServicePage({ params }: { params: Promise<Params> }) {
  if (!siteConfig.features.audienceRoutes) notFound();

  const { audience: audienceSlug, slug } = await params;
  const audience = audiences.find((a) => a.slug === audienceSlug && a.enabled);
  const baseService = services.find((s) => s.slug === slug);
  if (!audience || !baseService || !isServiceAudience(audienceSlug) || !baseService.audiences.includes(audienceSlug)) {
    notFound();
  }

  const content = getServiceContent(baseService, audience.slug);
  const relatedProjects = getProjectsByService(baseService.slug);
  const path = `/${audience.slug}/${baseService.slug}`;
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: audience.name, path: `/${audience.slug}` },
      { name: content.name, path },
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
            { label: audience.name, href: `/${audience.slug}` },
            { label: content.name },
          ]}
        />
        <ServiceOverview content={content} />
        <RelatedProjects projects={relatedProjects} serviceName={content.name} />
        <Contact
          defaultService={baseService.slug}
          context={{ sourcePage: "audience-service", service: baseService.slug }}
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "../../../components/sections/Nav";
import Contact from "../../../components/sections/Contact";
import Footer from "../../../components/sections/Footer";
import ServiceHero from "../../../components/service/ServiceHero";
import ServiceOverview from "../../../components/service/ServiceOverview";
import RelatedProjects from "../../../components/service/RelatedProjects";
import { services, getProjectsByService } from "../../../lib/data";
import { siteConfig } from "../../../lib/site-config";
import { breadcrumbJsonLd, serviceJsonLd } from "../../../lib/structured-data";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  const title = service.seo?.title ?? `${service.name} | ${siteConfig.name}`;
  const description = service.seo?.description ?? service.short;

  return {
    title,
    description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      images: service.image ? [{ url: service.image }] : undefined,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProjects = getProjectsByService(service.slug);
  const path = `/services/${service.slug}`;
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/#services" },
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
          defaultService={service.slug}
          context={{ sourcePage: "service", service: service.slug }}
        />
      </main>
      <Footer />
    </>
  );
}

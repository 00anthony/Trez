import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site-config";
import { services, projects, serviceAreas, audiences } from "../lib/data";
import { isServiceAudience } from "../lib/audience";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${siteConfig.url}/projects`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    { url: `${siteConfig.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  if (siteConfig.features.serviceAreaPages) {
    entries.push(
      { url: `${siteConfig.url}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.7 },
      ...serviceAreas.map((area) => ({
        url: `${siteConfig.url}/service-areas/${area.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    );

    if (siteConfig.features.locationServicePages) {
      for (const area of serviceAreas) {
        for (const serviceSlug of area.relatedServices ?? []) {
          if (!services.some((s) => s.slug === serviceSlug)) continue;
          entries.push({
            url: `${siteConfig.url}/service-areas/${area.slug}/${serviceSlug}`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.6,
          });
        }
      }
    }
  }

  if (siteConfig.features.audienceRoutes) {
    for (const audience of audiences.filter((a) => a.enabled && isServiceAudience(a.slug))) {
      entries.push({
        url: `${siteConfig.url}/${audience.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
      for (const service of services.filter((s) => s.audiences.includes(audience.slug as "residential" | "commercial"))) {
        entries.push({
          url: `${siteConfig.url}/${audience.slug}/${service.slug}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.5,
        });
      }
    }
  }

  return entries;
}

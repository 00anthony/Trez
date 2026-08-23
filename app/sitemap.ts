import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site-config";
import { services, serviceAreas, audiences } from "../lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const entries: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...services.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  if (siteConfig.features.serviceAreaPages) {
    entries.push(
      ...serviceAreas.map((area) => ({
        url: `${siteConfig.url}/service-areas/${area.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    );
  }

  if (siteConfig.features.audienceRoutes) {
    const enabledAudiences = audiences.filter((a) => a.enabled);
    for (const audience of enabledAudiences) {
      entries.push({
        url: `${siteConfig.url}/${audience.slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
      entries.push(
        ...services.map((service) => ({
          url: `${siteConfig.url}/${audience.slug}/services/${service.slug}`,
          lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.5,
        }))
      );
    }
  }

  return entries;
}

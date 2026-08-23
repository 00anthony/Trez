import { siteConfig } from "./site-config";
import type { Service } from "./types";

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceJsonLd(service: Service, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.seo?.description ?? service.short,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: siteConfig.serviceAreaCities.map((city) => ({ "@type": "City", name: city })),
    url: `${siteConfig.url}${path}`,
  };
}

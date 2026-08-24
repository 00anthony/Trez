import { siteConfig } from "./site-config";
import type { ServiceContent } from "./types";

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

export function serviceJsonLd(content: ServiceContent, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.name,
    description: content.seo?.description ?? content.short,
    provider: { "@id": `${siteConfig.url}/#business` },
    areaServed: siteConfig.serviceAreaCities.map((city) => ({ "@type": "City", name: city })),
    url: `${siteConfig.url}${path}`,
  };
}

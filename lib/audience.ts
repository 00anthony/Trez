import type { AudienceSlug, Service, ServiceContent } from "./types";

export function isServiceAudience(slug: string): slug is AudienceSlug {
  return slug === "residential" || slug === "commercial";
}

/**
 * Resolves which content set a service should render for a given audience.
 * Falls back to `content.default` when there's no audience, no matching
 * variant, or the service isn't actually offered to that audience.
 */
export function getServiceContent(service: Service, audience?: string): ServiceContent {
  if (audience === "residential" && service.content.residential) return service.content.residential;
  if (audience === "commercial" && service.content.commercial) return service.content.commercial;
  return service.content.default;
}

/** Services actually offered to a given audience, resolved to that audience's content. */
export function getServicesForAudience(services: Service[], audience: string) {
  if (!isServiceAudience(audience)) return [];
  return services
    .filter((s) => s.audiences.includes(audience))
    .map((s) => ({ service: s, content: getServiceContent(s, audience) }));
}

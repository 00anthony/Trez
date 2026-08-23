import type { Audience, Service } from "./types";

/**
 * Resolves the copy a service should render for a given audience.
 * Overrides are shallow and explicit — an audience only replaces the
 * specific fields it defines, everything else falls back to the base
 * service content. Returns the base service unchanged when there's no
 * audience or no override for that service.
 */
export function getServiceContent({
  service,
  audience,
}: {
  service: Service;
  audience?: Audience;
}): Service {
  const override = audience?.copy?.serviceOverrides?.[service.slug];
  if (!override) return service;

  return {
    ...service,
    name: override.headline ?? service.name,
    description: override.description ?? service.description,
    bullets: override.benefits ?? service.bullets,
  };
}

import type { Audience } from "../types";

/**
 * Audience-specific copy and routing is a framework capability — enabled here
 * for Trez via siteConfig.features.audienceRoutes + `enabled: true` below. A
 * future client can disable it the same way without touching the service-page
 * architecture (see app/[audience]/**).
 */
export const audiences: Audience[] = [
  {
    slug: "residential",
    name: "Residential",
    enabled: true,
    copy: {
      heroHeadline: "Concrete Built for Your Home",
      heroDescription:
        "Driveways, patios, and foundation work for homeowners across Central Texas — built to handle expansive clay soil and backed by a written workmanship warranty.",
    },
  },
  {
    slug: "commercial",
    name: "Commercial",
    enabled: true,
    copy: {
      heroHeadline: "Commercial Concrete & Light Construction",
      heroDescription:
        "Load-rated pads, tenant finish-out, and flatwork for commercial properties across Central Texas — scheduled around your business, not the other way around.",
    },
  },
];

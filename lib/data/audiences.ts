import type { Audience } from "../types";

/**
 * Audience-specific copy and routing is a framework capability, not a Trez
 * requirement — it stays fully disabled via siteConfig.features.audienceRoutes
 * (see app/[audience]/**). A future client can enable it by flipping that
 * flag and setting `enabled: true` on the audiences it wants live, without
 * touching the service-page architecture.
 */
export const audiences: Audience[] = [
  {
    slug: "residential",
    name: "Residential",
    enabled: false,
    copy: {
      heroHeadline: "Concrete Built for Your Home",
      heroDescription:
        "Driveways, patios, and foundation work for homeowners across Central Texas — built to handle expansive clay soil and backed by a written workmanship warranty.",
    },
  },
  {
    slug: "commercial",
    name: "Commercial",
    enabled: false,
    copy: {
      heroHeadline: "Commercial Concrete & Light Construction",
      heroDescription:
        "Load-rated pads, tenant finish-out, and flatwork for commercial properties across Central Texas — scheduled around your business, not the other way around.",
    },
  },
];

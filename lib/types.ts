export type AudienceSlug = "residential" | "commercial";

export type ServiceContent = {
  name: string;
  short: string;
  description: string;
  /** Longer body copy for the dedicated service page. Falls back to `description` when absent. */
  longDescription?: string;
  bullets: string[];
  /** Background photo for the service card / hero (full-bleed, dark overlay applied on top). */
  image?: string;
  /** Additional photos for the service page gallery. */
  gallery?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
};

export type Service = {
  slug: string;
  /** Which audiences this service is actually offered to — drives the homepage filter and which /[audience]/[slug] pages get generated. */
  audiences: AudienceSlug[];
  /** Surfaces this service in the homepage "Featured" filter tab. */
  featured?: boolean;
  content: {
    default: ServiceContent;
    residential?: ServiceContent;
    commercial?: ServiceContent;
  };
};

export type ProjectCategory =
  | "Driveways"
  | "Patios"
  | "Commercial"
  | "Residential"
  | "Slabs"
  | "Repairs";

export type Project = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  service: string;
  /** Slug of the Service this project belongs to — the source of truth for service/project relationships. */
  serviceSlug?: string;
  /** Slug of the ServiceArea this project was completed in/near, when known. */
  serviceAreaSlug?: string;
  timeline: string;
  completed: string;
  sqft?: string;
  description: string;
  review?: { quote: string; author: string };
  tags: string[];
  beforeLabel: string;
  afterLabel: string;
  beforeSrc?: string;
  afterSrc?: string;
  /** Surfaces this project in the "Featured" project filter. Independent of `category`. */
  featured?: boolean;
};

export type ServiceArea = {
  slug: string;
  name: string;
  state?: string;
  shortDescription: string;
  description: string;
  seo?: {
    title?: string;
    description?: string;
  };
  /** Slugs of services most relevant to this area. */
  relatedServices?: string[];
  localCopy?: {
    headline?: string;
    intro?: string;
    notes?: string[];
  };
};

export type Audience = {
  slug: string;
  name: string;
  /** Audience-specific routes/content only render when this is true AND siteConfig.features.audienceRoutes is true. */
  enabled?: boolean;
  copy?: {
    heroHeadline?: string;
    heroDescription?: string;
    serviceOverrides?: Record<
      string,
      {
        headline?: string;
        description?: string;
        benefits?: string[];
      }
    >;
  };
};

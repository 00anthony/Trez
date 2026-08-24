import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "montopolis-driveway",
    title: "Montopolis Driveway",
    location: "S Austin, TX",
    category: "Driveways",
    service: "Stamped Concrete Driveway",
    serviceSlug: "driveways",
    serviceAreaSlug: "austin",
    timeline: "6 days",
    completed: "March 2026",
    sqft: "2,400 sq ft",
    description:
      "A cracked asphalt driveway replaced with a stamped, ashlar-slate pattern motor court sized for a three-car motor court and turnaround.",
    review: { quote: "A true blessing, I actually could not believe the transformation. More than impressed and would definitely recommend Trez to anyone I know.", author: "M. Alvarado" },
    tags: ["Stamped", "Reinforced Base", "3-Car"],
    featured: true,
    beforeLabel: "Cracked asphalt, poor drainage",
    afterLabel: "Ashlar-slate stamped concrete",
    beforeSrc: "/projects/stamped-driveway-before.webp",
    afterSrc: "/projects/stamped-driveway-after.webp",
  },
  {
    slug: "wimberly-pool-deck",
    title: "Wimberly Pool Deck",
    location: "Wimberly, TX",
    category: "Patios",
    service: "Cantilevered Pool Deck",
    serviceSlug: "patios",
    timeline: "9 days",
    completed: "May 2026",
    sqft: "1,850 sq ft",
    description:
      "Cool-touch knockdown finish pool deck with a cantilevered edge and integrated drainage, built for bare feet in August.",
    review: { quote: "Doesn't burn your feet at 2pm in July. That alone was worth it.", author: "T. Whitfield" },
    tags: ["Cool-Touch Finish", "Drainage System"],
    featured: true,
    beforeLabel: "Bare dirt & failing pavers",
    afterLabel: "Knockdown-finish cantilevered deck",
    beforeSrc: "/projects/pool-deck-before.webp",
    afterSrc: "/projects/pool-deck-after.webp",
  },
  {
    slug: "round-rock-commercial-slab",
    title: "Round Rock Commercial Slab",
    location: "Round Rock, TX",
    category: "Commercial",
    service: "Commercial Flatwork",
    serviceSlug: "commercial-construction",
    timeline: "3 weeks",
    completed: "January 2026",
    sqft: "2,600 sq ft",
    description:
      "Load-rated commercial interior concrete slab flooring development, coordinated around an active construction schedule.",
    tags: ["Load-Rated", "Multi-Tenant", "Fast-Track"],
    beforeLabel: "Graded lot, no flatwork",
    afterLabel: "2,600 sq ft load-rated pad",
    beforeSrc: "/projects/commercial-interior-concrete-slab-after.webp",
    afterSrc: "/projects/commercial-interior-concrete-slab-before.webp",
  },
  {
    slug: "creedmoor-new-build",
    title: "Creedmoor New-Build Slab",
    location: "Creedmoor, TX",
    category: "Residential",
    service: "Post-Tensioned Foundation",
    serviceSlug: "foundations",
    timeline: "2 weeks",
    completed: "May 2026",
    sqft: "2,900 sq ft",
    description:
      "Post-tensioned foundation for a new custom home, engineered specifically for the lot's soil report and elevation grade.",
    tags: ["Post-Tensioned", "New Construction"],
    beforeLabel: "Graded & staked lot",
    afterLabel: "Engineered post-tensioned slab",
    beforeSrc: "/projects/new-build-before.webp",
    afterSrc: "/projects/new-build-after.webp",
  },
  {
    slug: "buda-foundation-repair",
    title: "Buda Foundation Repair",
    location: "Buda, TX",
    category: "Repairs",
    service: "Slab Leveling & Crack Injection",
    serviceSlug: "concrete-repair",
    serviceAreaSlug: "buda",
    timeline: "4 days",
    completed: "February 2026",
    description:
      "Mudjacking and structural crack injection to correct settlement caused by expansive clay soil beneath a 1990s foundation.",
    review: { quote: "Doors close properly again for the first time in years.", author: "D. Nguyen" },
    tags: ["Mudjacking", "Crack Injection"],
    featured: true,
    beforeLabel: "2 in. settlement, active cracking",
    afterLabel: "Releveled & structurally sealed",
    beforeSrc: "/projects/foundation-repair-before.jpg",
    afterSrc: "/projects/foundation-repair-after.jpg",
  },
  {
    slug: "hutto-family-patio",
    title: "Hutto Family Patio",
    location: "Hutto, TX",
    category: "Patios",
    service: "Broom-Finish Patio & Firepit Slab",
    serviceSlug: "patios",
    timeline: "5 days",
    completed: "April 2026",
    sqft: "960 sq ft",
    description:
      "A broom-finish patio extension with a dedicated firepit slab and a control-jointed border poured to match the existing home.",
    tags: ["Broom Finish", "Firepit Pad"],
    beforeLabel: "Undeveloped backyard",
    afterLabel: "960 sq ft patio + firepit slab",
    beforeSrc: "/projects/back-patio-before.webp",
    afterSrc: "/projects/back-patio-after.webp",
  },
  {
    slug: "leander-shop-slab",
    title: "Leander Shop Slab",
    location: "Leander, TX",
    category: "Slabs",
    service: "Load-Rated Shop Slab",
    serviceSlug: "slabs",
    timeline: "1 week",
    completed: "June 2026",
    sqft: "1,200 sq ft",
    description:
      "A vapor-barriered, load-rated slab for a personal workshop, fiber-reinforced and finished to a tight flatness tolerance for equipment.",
    tags: ["Vapor Barrier", "Fiber-Reinforced"],
    beforeLabel: "Bare gravel pad",
    afterLabel: "1,200 sq ft finished shop slab",
    beforeSrc: "/projects/shop-slab-before.jpg",
    afterSrc: "/projects/shop-slab-after.jpg",
  },
  {
    slug: "temple-sidewalk-network",
    title: "Temple Subdivision Sidewalks",
    location: "Temple, TX",
    category: "Driveways",
    service: "HOA Sidewalk & Curb Package",
    serviceSlug: "sidewalks",
    timeline: "3 weeks",
    completed: "March 2026",
    sqft: "6,400 sq ft",
    description:
      "A full sidewalk and curb package for a new subdivision phase, coordinated with the HOA's design guidelines and city inspection.",
    tags: ["HOA Coordination", "Municipal Inspection"],
    beforeLabel: "Unpaved subdivision phase",
    afterLabel: "ADA-compliant sidewalk network",
    beforeSrc: "/projects/sidewalk-before.jpg",
    afterSrc: "/projects/sidewalk-after.jpg",
  },
  {
    slug: "bastrop-garage-slab",
    title: "Bastrop Garage Slab",
    location: "Bastrop, TX",
    category: "Slabs",
    service: "Reinforced Concrete Garage Slab",
    serviceSlug: "slabs",
    timeline: "4 days",
    completed: "May 2026",
    sqft: "960 sq ft",
    description:
      "Installed a reinforced monolithic concrete slab for a detached two-car garage, including proper grading, compaction, rebar reinforcement, and control joints for long-term durability.",
    review: {
      quote: "The crew was professional from start to finish, and the slab came out perfectly level.",
      author: "J. Ramirez",
    },
    tags: ["Garage Slab", "Rebar Reinforced", "Monolithic"],
    featured: true,
    beforeLabel: "Uneven dirt pad",
    afterLabel: "Finished reinforced garage slab",
    beforeSrc: "/projects/lockhart-garage-before.png",
    afterSrc: "/projects/lockhart-garage-after.png",
  },
  /*
  {
    slug: "san-marcos-front-patio",
    title: "San Marcos Front Patio",
    location: "San Marcos, TX",
    category: "Patios",
    service: "Stamped Front Entry Concrete Patio",
    timeline: "3 days",
    completed: "June 2026",
    sqft: "340 sq ft",
    description:
      "Replaced an aging front entry with a clean brushed concrete patio, creating a more welcoming entrance while improving drainage and expanding the usable outdoor space.",
    review: {
      quote: "It completely transformed the front of our home. We couldn't be happier.",
      author: "S. Hernandez",
    },
    tags: ["Brushed Finish", "Front Entry", "Residential"],
    beforeLabel: "Worn and cracked entry",
    afterLabel: "Expanded brushed concrete patio",
    beforeSrc: "/projects/sm-front-patio-before.png",
    afterSrc: "/projects/sm-front-patio-after.png",
  },
  */
];

/** `project.serviceSlug` is the single source of truth for the service↔project relationship. */
export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((p) => p.serviceSlug === serviceSlug);
}

/** `project.serviceAreaSlug` is the single source of truth for the service-area↔project relationship. */
export function getProjectsByServiceArea(serviceAreaSlug: string): Project[] {
  return projects.filter((p) => p.serviceAreaSlug === serviceAreaSlug);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Other projects sharing this project's service, then its area, up to `limit` — no duplicates, excludes itself. */
export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const related: Project[] = [];
  const seen = new Set([project.slug]);

  const addAll = (candidates: Project[]) => {
    for (const p of candidates) {
      if (related.length >= limit) break;
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      related.push(p);
    }
  };

  if (project.serviceSlug) addAll(getProjectsByService(project.serviceSlug));
  if (related.length < limit && project.serviceAreaSlug) addAll(getProjectsByServiceArea(project.serviceAreaSlug));

  return related;
}

import type { Service } from "../types";

export const services: Service[] = [
  {
    slug: "driveways",
    audiences: ["residential", "commercial"],
    featured: true,
    content: {
      default: {
        name: "Concrete Driveways",
        short: "Broom, stamped & exposed-aggregate finishes built for Texas heat.",
        description:
          "Engineered driveways that resist cracking through triple-digit summers and clay-soil shift, finished to match your home's architecture.",
        bullets: ["Reinforced base & rebar grid", "Broom, stamped, or exposed aggregate", "Expansion joint engineering"],
        image: "/services/concrete-driveway.webp",
      },
      residential: {
        name: "Residential Concrete Driveways",
        short: "Broom, stamped & exposed-aggregate finishes built for Texas heat.",
        description:
          "Engineered driveways that resist cracking through triple-digit summers and clay-soil shift, finished to match your home's architecture.",
        bullets: ["Reinforced base & rebar grid", "Broom, stamped, or exposed aggregate", "Expansion joint engineering"],
        image: "/services/concrete-driveway.webp",
      },
      commercial: {
        name: "Commercial Driveways & Approach Pads",
        short: "Load-rated approach pads and parking driveways for commercial properties.",
        description:
          "Reinforced driveway and approach-pad pours engineered for repeated heavy-vehicle traffic — retail lots, offices, and light-industrial sites.",
        bullets: ["Reinforced for delivery & fleet traffic", "ADA-compliant approach grading", "Scheduled around business hours"],
        image: "/services/light-commercial.avif",
      },
    },
  },
  {
    slug: "patios",
    audiences: ["residential"],
    featured: true,
    content: {
      default: {
        name: "Patios & Outdoor Living",
        short: "Backyard slabs, covered patios, and pool decks designed to host.",
        description:
          "From a simple broom-finish patio to a stamped, multi-level outdoor living space, built to extend your home outward.",
        bullets: ["Stamped & stained finishes", "Integrated drainage design", "Pairs with pergolas & outdoor kitchens"],
        image: "/services/patio-outdoor.jpg",
      },
    },
  },
  {
    slug: "sidewalks",
    audiences: ["residential", "commercial"],
    content: {
      default: {
        name: "Sidewalks & Walkways",
        short: "Code-compliant walkways for homes, HOAs, and commercial sites.",
        description:
          "ADA-aware sidewalk and walkway pours for residential lots, subdivisions, and commercial properties across Central Texas.",
        bullets: ["ADA slope compliance", "HOA & municipal permitting support", "Decorative border options"],
        image: "/services/sidewalk.webp",
      },
      residential: {
        name: "Residential Sidewalks & Walkways",
        short: "Code-compliant walkways for homes and HOA communities.",
        description:
          "ADA-aware sidewalk and walkway pours for residential lots and subdivisions, coordinated with HOA design guidelines.",
        bullets: ["ADA slope compliance", "HOA design-guideline coordination", "Decorative border options"],
        image: "/services/sidewalk.webp",
      },
      commercial: {
        name: "Commercial Sidewalks & Pathways",
        short: "Municipal-inspected walkways for commercial and retail properties.",
        description:
          "Sidewalk and pathway pours for commercial sites, coordinated with municipal permitting and inspection requirements.",
        bullets: ["Municipal permitting support", "ADA slope compliance", "Scheduled around business operations"],
        image: "/services/sidewalk.webp",
      },
    },
  },
  {
    slug: "foundations",
    audiences: ["residential", "commercial"],
    featured: true,
    content: {
      default: {
        name: "Foundations",
        short: "Slab, pier & beam, and grade-beam foundations engineered for Texas clay.",
        description:
          "Foundation work engineered specifically for expansive Central Texas clay soil, from new-build slabs to structural repair.",
        bullets: ["Post-tensioned & rebar slabs", "Soil-specific engineering", "Foundation leveling & repair"],
        image: "/services/foundation.webp",
      },
      residential: {
        name: "Residential Foundations",
        short: "Slab and pier & beam foundations engineered for Texas clay.",
        description:
          "Foundation work engineered specifically for expansive Central Texas clay soil, from new-build slabs to structural repair for homes.",
        bullets: ["Post-tensioned & rebar slabs", "Soil-specific engineering", "Foundation leveling & repair"],
        image: "/services/foundation.webp",
      },
      commercial: {
        name: "Commercial Foundations",
        short: "Grade-beam and load-rated foundations for commercial builds.",
        description:
          "Foundation systems engineered for commercial structures and light-industrial buildings, built to spec and coordinated with your GC's schedule.",
        bullets: ["Grade-beam & load-rated foundations", "Soil-specific engineering", "GC schedule coordination"],
        image: "/services/foundation.webp",
      },
    },
  },
  {
    slug: "slabs",
    audiences: ["residential", "commercial"],
    featured: true,
    content: {
      default: {
        name: "Slabs",
        short: "Garage, shop, and equipment pad slabs built to load spec.",
        description:
          "Flat, level, load-rated slabs for garages, workshops, RV pads, and equipment pads — poured to the tolerance your project needs.",
        bullets: ["Vapor barrier & moisture control", "Load-rated for shops & equipment", "Fast-track scheduling available"],
        image: "/services/slab-foundation.webp",
      },
      residential: {
        name: "Residential Slabs",
        short: "Garage, shop, and RV pad slabs built to load spec.",
        description:
          "Flat, level, load-rated slabs for garages, workshops, and RV pads — poured to the tolerance your project needs.",
        bullets: ["Vapor barrier & moisture control", "Load-rated for shops & vehicles", "Fast-track scheduling available"],
        image: "/services/slab-foundation.webp",
      },
      commercial: {
        name: "Commercial Slabs & Pads",
        short: "Load-rated equipment and flatwork pads for commercial sites.",
        description:
          "Interior flatwork and equipment-pad slabs for commercial and light-industrial properties, finished to spec and scheduled around active operations.",
        bullets: ["Load-rated for equipment & racking", "Vapor barrier & moisture control", "Fast-track scheduling available"],
        image: "/services/light-commercial.avif",
      },
    },
  },
  {
    slug: "concrete-repair",
    audiences: ["residential", "commercial"],
    featured: false,
    content: {
      default: {
        name: "Concrete Repair",
        short: "Crack injection, mudjacking, and slab replacement.",
        description:
          "Repair work for settled, cracked, or spalling concrete — from surface patching to full section replacement.",
        bullets: ["Mudjacking & slab lifting", "Structural crack injection", "Spall & surface repair"],
        image: "/services/repair.webp",
      },
      residential: {
        name: "Residential Concrete Repair",
        short: "Crack injection, mudjacking, and slab replacement for homes.",
        description:
          "Repair work for settled, cracked, or spalling residential concrete — from surface patching to full section replacement.",
        bullets: ["Mudjacking & slab lifting", "Structural crack injection", "Spall & surface repair"],
        image: "/services/repair.webp",
      },
      commercial: {
        name: "Commercial Concrete Repair",
        short: "Repair and resurfacing for commercial flatwork and pads.",
        description:
          "Repair work for commercial slabs and flatwork — crack injection, mudjacking, and section replacement scheduled to minimize business disruption.",
        bullets: ["Mudjacking & slab lifting", "Structural crack injection", "Scheduled around business hours"],
        image: "/services/repair.webp",
      },
    },
  },
  {
    slug: "residential-construction",
    audiences: ["residential"],
    content: {
      default: {
        name: "Residential Construction",
        short: "Additions, remodels, and ground-up residential builds.",
        description:
          "Full residential construction services, from foundation to finish, for additions, remodels, and custom homes.",
        bullets: ["Additions & remodels", "Custom home construction", "In-house project management"],
        image: "/services/residential-construction.jpg",
      },
    },
  },
  {
    slug: "commercial-construction",
    audiences: ["commercial"],
    content: {
      default: {
        name: "Light Commercial Construction",
        short: "Tenant finish-out, pads, and light commercial concrete work.",
        description:
          "Commercial concrete and light construction for retail build-outs, parking areas, and small commercial properties.",
        bullets: ["Commercial pads & flatwork", "Tenant finish-out", "Bonded & insured crews"],
        image: "/services/light-commercial.avif",
      },
    },
  },
  {
    slug: "drywall",
    audiences: ["residential", "commercial"],
    featured: true,
    content: {
      default: {
        name: "Drywall Installation & Repair",
        short: "Hang, finish, and repair drywall for additions, remodels, and build-outs.",
        description:
          "Full drywall service from framing to final finish — hanging, taping, texturing, and repair work integrated with our construction and remodeling projects.",
        bullets: ["Hang, tape, float & texture", "Patch & repair for existing walls", "Level 4/5 finish available"],
        image: "/services/drywall-residential.jpg",
      },
      residential: {
        name: "Residential Drywall",
        short: "Hang, finish, and repair drywall for additions, remodels, and repairs.",
        description:
          "Drywall installation and repair for home additions, remodels, and everyday wall damage — hung and finished to match existing texture.",
        bullets: ["Hang, tape, float & texture", "Patch & repair for existing walls", "Texture matching for seamless repairs"],
        image: "/services/drywall-residential.jpg",
      },
      commercial: {
        name: "Commercial Drywall & Tenant Finish-Out",
        short: "Drywall installation for tenant finish-out and commercial build-outs.",
        description:
          "Drywall hanging and finishing for tenant build-outs and commercial remodels, scheduled to keep your project on the general contractor's timeline.",
        bullets: ["Tenant finish-out scheduling", "Fire-rated & sound-rated assemblies", "Level 4/5 finish available"],
        image: "/services/drywall-commercial.webp",
      },
    },
  },
  {
    slug: "interior-flooring",
    audiences: ["residential", "commercial"],
    featured: true,
    content: {
      default: {
        name: "Interior Flooring",
        short: "Tile, vinyl, and wood flooring installed as part of your build or remodel.",
        description:
          "Interior flooring installation — tile, luxury vinyl, and wood — coordinated with our construction and remodeling projects from subfloor to finish.",
        bullets: ["Tile, vinyl & wood installation", "Subfloor prep & leveling", "Coordinated with remodel timelines"],
        image: "/services/flooring-residential.jpg",
      },
      residential: {
        name: "Residential Flooring",
        short: "Tile, vinyl, and wood flooring for home remodels and additions.",
        description:
          "Flooring installation for home remodels and additions — tile, luxury vinyl plank, and wood, matched to the rest of your build.",
        bullets: ["Tile, vinyl & wood installation", "Subfloor prep & leveling", "Matched to existing home finishes"],
        image: "/services/flooring-residential.jpg",
      },
      commercial: {
        name: "Commercial Flooring",
        short: "Durable tile and vinyl flooring for tenant finish-out and commercial spaces.",
        description:
          "Commercial-grade tile and vinyl flooring installation for tenant finish-out and retail build-outs, installed on schedule with the rest of the build.",
        bullets: ["Commercial-grade tile & vinyl", "Subfloor prep & leveling", "Scheduled around tenant finish-out"],
        image: "/services/flooring-commercial.jpg",
      },
    },
  },
  {
    slug: "custom-project",
    audiences: ["residential", "commercial"],
    featured: false,
    content: {
      default: {
        name: "Custom Project",
        short: "One point of contact from permit to final walkthrough.",
        description:
          "Full-service custom projects where we coordinate every trade on your project so you have a single point of accountability.",
        bullets: ["Permitting & inspections", "Subcontractor coordination", "Fixed-scope project timelines"],
        image: "/services/blueprint.webp",
      },
      residential: {
        name: "Custom Residential Projects",
        short: "One point of contact from permit to final walkthrough.",
        description:
          "Full-service custom residential projects where we coordinate every trade so you have a single point of accountability.",
        bullets: ["Permitting & inspections", "Subcontractor coordination", "Fixed-scope project timelines"],
        image: "/services/blueprint.webp",
      },
      commercial: {
        name: "Custom Commercial Projects",
        short: "One point of contact from permit to final walkthrough.",
        description:
          "Full-service custom commercial projects where we coordinate every trade and subcontractor so your GC has a single point of accountability.",
        bullets: ["Permitting & inspections", "Subcontractor coordination", "Fixed-scope project timelines"],
        image: "/services/blueprint.webp",
      },
    },
  },

];

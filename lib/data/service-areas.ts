import type { ServiceArea } from "../types";

export const serviceAreas: ServiceArea[] = [
  {
    slug: "austin",
    name: "Austin",
    state: "TX",
    shortDescription: "Concrete driveways, patios, and light commercial flatwork across Austin.",
    description:
      "Austin's mix of older in-town lots and fast-moving new construction means every pour has to answer for different soil history and access constraints. We've poured driveways, patios, and commercial pads across South and East Austin, working around tight lots, mature trees, and HOA guidelines without cutting corners on base prep.",
    relatedServices: ["driveways", "patios", "commercial-construction", "sidewalks"],
    localCopy: {
      headline: "Concrete contractors serving Austin, Texas",
      intro:
        "From South Austin driveways to light commercial pads near the urban core, we build for the reality of Austin lots — tight access, mature landscaping, and clay soil that doesn't forgive shortcuts.",
      notes: [
        "Experience with tight in-town lots and alley access",
        "HOA and municipal permitting coordination",
        "Soil prep engineered for Austin's expansive clay",
      ],
    },
  },
  {
    slug: "buda",
    name: "Buda",
    state: "TX",
    shortDescription: "Foundation repair, driveways, and new-build slabs for Buda homeowners.",
    description:
      "Buda's rapid residential growth means a lot of newer slabs settling into clay soil for the first time, alongside older homes finally due for driveway or foundation work. We handle both — new-build foundations for growing subdivisions and repair work for established homes fighting seasonal ground movement.",
    relatedServices: ["foundations", "concrete-repair", "driveways", "slabs"],
    localCopy: {
      headline: "Concrete contractors serving Buda, Texas",
      intro:
        "Buda sits squarely on expansive Central Texas clay, which is exactly why we engineer every foundation and slab for soil movement first, finish second.",
      notes: [
        "New-build foundation work for growing subdivisions",
        "Foundation repair for homes on shifting clay",
        "Fast turnaround for driveway and slab replacement",
      ],
    },
  },
  {
    slug: "kyle",
    name: "Kyle",
    state: "TX",
    shortDescription: "Driveways, patios, and slab work for Kyle's growing neighborhoods.",
    description:
      "Kyle's newer subdivisions and infill lots keep us busy with driveways, patios, and garage or shop slabs. We work directly with homeowners and, where needed, coordinate with HOA design guidelines common in Kyle's newer developments.",
    relatedServices: ["driveways", "patios", "slabs", "sidewalks"],
    localCopy: {
      headline: "Concrete contractors serving Kyle, Texas",
      intro:
        "Whether it's a driveway on a new build or a patio addition in an established Kyle neighborhood, every pour is engineered for the same clay-soil conditions across this stretch of I-35.",
      notes: [
        "HOA design-guideline coordination for newer subdivisions",
        "Driveway, patio, and shop-slab work",
        "One-day response on estimate requests",
      ],
    },
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    state: "TX",
    shortDescription: "Patios, driveways, and repair work for San Marcos homes and small businesses.",
    description:
      "San Marcos's river-adjacent neighborhoods and steady residential growth bring a mix of drainage-sensitive patio work and standard driveway and repair jobs. We pay close attention to grading and drainage design given the area's proximity to the San Marcos River watershed.",
    relatedServices: ["patios", "driveways", "concrete-repair"],
    localCopy: {
      headline: "Concrete contractors serving San Marcos, Texas",
      intro:
        "Drainage design matters more in San Marcos than most of our service area — we grade every patio and driveway pour with the local watershed in mind.",
      notes: [
        "Drainage-conscious patio and driveway design",
        "Concrete repair for older San Marcos homes",
        "Familiarity with local permitting requirements",
      ],
    },
  },
];

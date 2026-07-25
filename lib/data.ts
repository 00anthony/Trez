export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  bullets: string[];
  /** Optional background photo for the service card (full-bleed, dark overlay applied on top). */
  image?: string;
};

export const services: Service[] = [
  {
    slug: "driveways",
    name: "Concrete Driveways",
    short: "Broom, stamped & exposed-aggregate finishes built for Texas heat.",
    description:
      "Engineered driveways that resist cracking through triple-digit summers and clay-soil shift, finished to match your home's architecture.",
    bullets: ["Reinforced base & rebar grid", "Broom, stamped, or exposed aggregate", "Expansion joint engineering"],
    image: "/services/concrete-driveway.jpg",
  },
  {
    slug: "patios",
    name: "Patios & Outdoor Living",
    short: "Backyard slabs, covered patios, and pool decks designed to host.",
    description:
      "From a simple broom-finish patio to a stamped, multi-level outdoor living space, built to extend your home outward.",
    bullets: ["Stamped & stained finishes", "Integrated drainage design", "Pairs with pergolas & outdoor kitchens"],
    image: "/services/patio-outdoor.jpg",
  },
  {
    slug: "sidewalks",
    name: "Sidewalks & Walkways",
    short: "Code-compliant walkways for homes, HOAs, and commercial sites.",
    description:
      "ADA-aware sidewalk and walkway pours for residential lots, subdivisions, and commercial properties across Central Texas.",
    bullets: ["ADA slope compliance", "HOA & municipal permitting support", "Decorative border options"],
    image: "/services/sidewalk.jpg",
  },
  {
    slug: "foundations",
    name: "Foundations",
    short: "Slab, pier & beam, and grade-beam foundations engineered for Texas clay.",
    description:
      "Foundation work engineered specifically for expansive Central Texas clay soil, from new-build slabs to structural repair.",
    bullets: ["Post-tensioned & rebar slabs", "Soil-specific engineering", "Foundation leveling & repair"],
    image: "/services/foundation.webp",
  },
  {
    slug: "slabs",
    name: "Slabs",
    short: "Garage, shop, and equipment pad slabs built to load spec.",
    description:
      "Flat, level, load-rated slabs for garages, workshops, RV pads, and equipment pads — poured to the tolerance your project needs.",
    bullets: ["Vapor barrier & moisture control", "Load-rated for shops & equipment", "Fast-track scheduling available"],
    image: "/services/slab-foundation.jpeg",
  },
  {
    slug: "concrete-repair",
    name: "Concrete Repair",
    short: "Crack injection, mudjacking, and slab replacement.",
    description:
      "Repair work for settled, cracked, or spalling concrete — from surface patching to full section replacement.",
    bullets: ["Mudjacking & slab lifting", "Structural crack injection", "Spall & surface repair"],
    image: "/services/repair.webp",
  },
  {
    slug: "residential-construction",
    name: "Residential Construction",
    short: "Additions, remodels, and ground-up residential builds.",
    description:
      "Full residential construction services, from foundation to finish, for additions, remodels, and custom homes.",
    bullets: ["Additions & remodels", "Custom home construction", "In-house project management"],
    image: "/services/residential-construction.jpg",
  },
  {
    slug: "commercial-construction",
    name: "Light Commercial Construction",
    short: "Tenant finish-out, pads, and light commercial concrete work.",
    description:
      "Commercial concrete and light construction for retail build-outs, parking areas, and small commercial properties.",
    bullets: ["Commercial pads & flatwork", "Tenant finish-out", "Bonded & insured crews"],
    image: "/services/light-commercial.avif",
  },
  {
    slug: "general-contracting",
    name: "General Contracting",
    short: "One point of contact from permit to final walkthrough.",
    description:
      "Full-service general contracting that coordinates every trade on your project so you have a single point of accountability.",
    bullets: ["Permitting & inspections", "Subcontractor coordination", "Fixed-scope project timelines"],
    image: "/services/blueprint.jpg",
  },
];

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
};

export const projects: Project[] = [
  {
    slug: "westlake-driveway",
    title: "Westlake Driveway",
    location: "Westlake Hills, TX",
    category: "Driveways",
    service: "Stamped Concrete Driveway",
    timeline: "6 days",
    completed: "March 2026",
    sqft: "2,400 sq ft",
    description:
      "A cracked asphalt driveway replaced with a stamped, ashlar-slate pattern motor court sized for a three-car motor court and turnaround.",
    review: { quote: "A true blessing, I actually could not believe the transformation. More than impressed and would definitely recommend Trez to anyone I know.", author: "M. Alvarado" },
    tags: ["Stamped", "Reinforced Base", "3-Car"],
    beforeLabel: "Cracked asphalt, poor drainage",
    afterLabel: "Ashlar-slate stamped concrete",
    beforeSrc: "/projects/stamped-driveway-before.png",
    afterSrc: "/projects/stamped-driveway-after.png",
  },
  {
    slug: "barton-creek-pool-deck",
    title: "Barton Creek Pool Deck",
    location: "Austin, TX",
    category: "Patios",
    service: "Cantilevered Pool Deck",
    timeline: "9 days",
    completed: "May 2026",
    sqft: "1,850 sq ft",
    description:
      "Cool-touch knockdown finish pool deck with a cantilevered edge and integrated drainage, built for bare feet in August.",
    review: { quote: "Doesn't burn your feet at 2pm in July. That alone was worth it.", author: "T. Whitfield" },
    tags: ["Cool-Touch Finish", "Drainage System"],
    beforeLabel: "Bare dirt & failing pavers",
    afterLabel: "Knockdown-finish cantilevered deck",
    beforeSrc: "/projects/pool-deck-before.png",
    afterSrc: "/projects/pool-deck-after.png",
  },
  {
    slug: "round-rock-retail-pad",
    title: "Round Rock Retail Pad",
    location: "Round Rock, TX",
    category: "Commercial",
    service: "Commercial Flatwork",
    timeline: "3 weeks",
    completed: "January 2026",
    sqft: "18,000 sq ft",
    description:
      "Load-rated parking and approach slab for a multi-tenant retail development, coordinated around an active construction schedule.",
    tags: ["Load-Rated", "Multi-Tenant", "Fast-Track"],
    beforeLabel: "Graded lot, no flatwork",
    afterLabel: "18,000 sq ft load-rated pad",
    beforeSrc: "/projects/rr-retail-pad-before.jpg",
    afterSrc: "/projects/rr-retail-pad-after.jpg",
  },
  {
    slug: "cedar-park-new-build",
    title: "Cedar Park New-Build Slab",
    location: "Cedar Park, TX",
    category: "Residential",
    service: "Post-Tensioned Foundation",
    timeline: "2 weeks",
    completed: "May 2026",
    sqft: "2,900 sq ft",
    description:
      "Post-tensioned foundation for a new custom home, engineered specifically for the lot's soil report and elevation grade.",
    tags: ["Post-Tensioned", "New Construction"],
    beforeLabel: "Graded & staked lot",
    afterLabel: "Engineered post-tensioned slab",
    beforeSrc: "/projects/new-build-before.png",
    afterSrc: "/projects/new-build-after.png",
  },
  {
    slug: "georgetown-foundation-repair",
    title: "Georgetown Foundation Repair",
    location: "Georgetown, TX",
    category: "Repairs",
    service: "Slab Leveling & Crack Injection",
    timeline: "4 days",
    completed: "February 2026",
    description:
      "Mudjacking and structural crack injection to correct settlement caused by expansive clay soil beneath a 1990s foundation.",
    review: { quote: "Doors close properly again for the first time in years.", author: "D. Nguyen" },
    tags: ["Mudjacking", "Crack Injection"],
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
    timeline: "5 days",
    completed: "April 2026",
    sqft: "960 sq ft",
    description:
      "A broom-finish patio extension with a dedicated firepit slab and a control-jointed border poured to match the existing home.",
    tags: ["Broom Finish", "Firepit Pad"],
    beforeLabel: "Undeveloped backyard",
    afterLabel: "960 sq ft patio + firepit slab",
    beforeSrc: "/projects/back-patio-before.png",
    afterSrc: "/projects/back-patio-after.jpg",
  },
  {
    slug: "leander-shop-slab",
    title: "Leander Shop Slab",
    location: "Leander, TX",
    category: "Slabs",
    service: "Load-Rated Shop Slab",
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
    slug: "lockhart-garage-slab",
    title: "Lockhart Garage Slab",
    location: "Lockhart, TX",
    category: "Slabs",
    service: "Reinforced Concrete Garage Slab",
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
    beforeLabel: "Uneven dirt pad",
    afterLabel: "Finished reinforced garage slab",
    beforeSrc: "/projects/lockhart-garage-before.png",
    afterSrc: "/projects/lockhart-garage-after.png",
  },
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
];

export const processSteps = [
  {
    step: "01",
    title: "Request Estimate",
    description:
      "Tell us about your project through the form or a call. Most estimate requests get a response within one business day.",
  },
  {
    step: "02",
    title: "Site Visit",
    description:
      "We walk the site with you, measure, assess soil and drainage conditions, and put together a detailed, itemized quote.",
  },
  {
    step: "03",
    title: "Construction",
    description:
      "Your crew lead keeps you updated at every stage — excavation, forming, reinforcement, pour, and finish.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "We walk the finished project with you, confirm every detail matches spec, and hand over your warranty documentation.",
  },
];

export const whyChooseUs = [
  {
    title: "Engineered for Texas Clay",
    description:
      "Central Texas' expansive clay soil is why concrete fails elsewhere. Every pour is engineered for the ground it sits on.",
    media: { enabled: false, label: "Soil Engineering Explainer" },
  },
  {
    title: "Licensed, Bonded & Insured",
    description:
      "Fully licensed general contractor with bonding and liability coverage on every residential and commercial project.",
    media: { enabled: false, label: "Credentials Walkthrough" },
  },
  {
    title: "In-House Crews",
    description:
      "No rotating subcontractors on the concrete work itself — the crew that quotes your project is the crew that pours it.",
    media: { enabled: true, label: "Watch: A Pour Day With Our Crew" },
  },
  {
    title: "Written, Itemized Quotes",
    description:
      "Every estimate is itemized by material, labor, and finish, with no allowances hidden in vague line items.",
    media: { enabled: true, label: "Watch: Reading Your Estimate" },
  },
];

export const testimonials = [
  {
    quote:
      "Trez replaced our entire driveway in less than a week and it hasn't shown a single crack through two summers.",
    author: "Marcus Alvarado",
    location: "Westlake Hills, TX",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    quote:
      "Every question I had was answered before I had to ask it. The itemized quote had zero surprises on the final invoice.",
    author: "Priya Chandran",
    location: "Round Rock, TX",
    rating: 5,
    date: "1 month ago",
  },
  {
    quote:
      "We interviewed four contractors. Trez was the only one who talked about our soil report before talking about price.",
    author: "David Nguyen",
    location: "Georgetown, TX",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote:
      "Professional crew, clean job site every single day, and they finished ahead of the schedule they gave us.",
    author: "Teresa Whitfield",
    location: "Austin, TX",
    rating: 5,
    date: "2 months ago",
  },
  {
    quote:
      "Communication was excellent from the estimate through the final walkthrough. Would hire again without hesitation.",
    author: "Sarah Kimble",
    location: "Cedar Park, TX",
    rating: 5,
    date: "3 months ago",
  },
  {
    quote:
      "Fair pricing, and they caught a drainage issue our last contractor missed entirely before it became a real problem.",
    author: "James Ortiz",
    location: "Pflugerville, TX",
    rating: 5,
    date: "4 months ago",
  },
];

export const faqs = [
  {
    question: "How long does a typical concrete driveway take to install?",
    answer:
      "Most residential driveways take 4–7 days from excavation to finish, depending on size and finish type. Concrete needs roughly 7 days to cure before vehicle traffic, though we'll give you an exact timeline during your site visit.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes. As a licensed general contractor, we pull the required permits and coordinate municipal or HOA inspections as part of your project scope.",
  },
  {
    question: "Why does concrete crack in Central Texas specifically?",
    answer:
      "Central Texas sits on expansive clay soil that swells and contracts significantly with moisture changes. We engineer base prep, reinforcement, and control joints specifically for that movement, which is the leading cause of premature cracking in this region.",
  },
  {
    question: "What's included in a free estimate?",
    answer:
      "A site visit, measurements, a soil and drainage assessment, and a written, itemized quote broken down by material, labor, and finish — with no obligation to proceed.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "We work with a small number of financing partners for larger residential and commercial projects. Ask your estimator during the site visit for current options.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the Greater Central Texas region, including Austin, Georgetown, Round Rock, Cedar Park, Pflugerville, Leander, Temple, Killeen, Waco, and San Marcos.",
  },
  {
    question: "Is there a warranty on your concrete work?",
    answer:
      "Yes. All structural concrete work includes a written workmanship warranty, in addition to any applicable manufacturer warranties on sealers and specialty finishes.",
  },
  {
    question: "How much does a concrete project typically cost?",
    answer:
      "Cost depends heavily on square footage, finish type, and site prep needs. A site visit lets us give you an accurate, itemized number rather than a rough range that misses the specifics of your lot.",
  },
];

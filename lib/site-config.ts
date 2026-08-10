export const siteConfig = {
  name: "Trez Construction Group",
  shortName: "Trez",
  tagline: "Concrete, Poured With Precision.",
  description:
    "Trez Construction Group is a premium concrete contractor and general contractor serving Greater Central Texas — driveways, patios, foundations, slabs, concrete repair, and residential & light commercial construction.",
  url: "https://www.trezconstruction.com",
  phone: "(512) 216-3804",
  phoneHref: "tel:+15122163804",
  email: "info@trezconstruction.com",
  serviceArea: "Greater Central Texas",
  serviceAreaCities: [
    "Austin",
    "Kyle",
    "Buda",
    "San Marcos",
    "Lockhart",
    "Dripping Springs",
    "Oak Hill",
    "Wimberly",
    "Manor",
    "Cedar Creek",
  ],
  responsePromise: "We respond to every estimate request within one business day.",
  hours: "Mon–Sat, 7:00 AM – 6:00 PM",
  social: {
    facebook: "https://www.facebook.com/people/Trez-Construction-Group/61591934102551/",
    instagram: "https://www.instagram.com/trezconstruction/",
  },
  google: {
    gmbUrl: "https://g.page/r/REPLACE-WITH-TREZ-PLACE-ID",
    // Placeholder — replace with the real Google Business Profile review link.
    reviewUrl: "https://g.page/r/REPLACE-WITH-TREZ-PLACE-ID/review",
    rating: 4.9,
    reviewCount: 24,
  },
  // Keep order in sync with HeroStats in Hero.tsx
  stats: [
    { value: "216+", label: "Projects Completed" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "24hr", label: "Estimate Turnaround" },
  ],
  geo: {
    lat: 30.2672,
    lng: -97.7431,
    coordLabel: "30.2672° N, 97.7431° W — CENTRAL TEXAS",
  },
} as const;

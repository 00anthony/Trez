import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../lib/site-config";
import StickyMobileCTA from "../components/ui/StickyMobileCTA";

/**
 * Fonts are loaded via <link> in <head> rather than next/font/google.
 * This keeps the build free of a build-time fetch to Google's font API
 * (handy in network-restricted CI / sandboxed environments) while still
 * giving the browser the real family at runtime. Swap for next/font/google
 * at any time if you'd rather self-host / inline the font files.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Concrete Contractor in Central Texas`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Premium concrete contractor serving Greater Central Texas. Driveways, patios, foundations, slabs, concrete repair, and general contracting. Licensed & insured. Free estimates.",
  keywords: [
    "concrete contractor Central Texas",
    "concrete driveways Austin",
    "patios Central Texas",
    "concrete slabs",
    "general contractor Austin",
    "residential concrete",
    "commercial concrete",
    "foundation repair Central Texas",
    "concrete repair Austin",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Concrete Contractor in Central Texas`,
    description:
      "Premium concrete and general contracting for Greater Central Texas. Driveways, patios, foundations, slabs & repair. Licensed & insured.",
    siteName: siteConfig.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Concrete Contractor in Central Texas`,
    description:
      "Premium concrete and general contracting for Greater Central Texas. Licensed & insured. Free estimates.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: siteConfig.url,
      telephone: siteConfig.phoneHref.replace("tel:", ""),
      email: siteConfig.email,
      priceRange: "$$",
      areaServed: siteConfig.serviceAreaCities.map((city) => ({
        "@type": "City",
        name: city,
      })),
      address: {
        "@type": "PostalAddress",
        addressRegion: "TX",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.lat,
        longitude: siteConfig.geo.lng,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "18:00",
      },
      sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      publisher: { "@id": `${siteConfig.url}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-ink text-concrete">
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}

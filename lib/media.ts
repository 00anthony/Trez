export const media = {
  logo: {
    full: "/logo/logo-full-light.png",
    icon: "/logo/logo-icon-light.png",
    wordmarkHeader: "/logo/logo-wordmark-header-light.png",
    wordmark: "/logo/logo-wordmark-light.png",
    wordmarkSubtext: "/logo/logo-wordmark-subtext-light.png",
  },
  hero: {
    default: "/video/hero-loop-720p.mp4",
    residential: "/video/hero-loop-residential-720p.mp4",
    commercial: "/video/hero-loop-commercial-720p.mp4",
  },
  about: {
    poster: "/about/about-poster.png",
    insuranceLogo: "/about/rps-insurance-logo.png",
  },
  og: {
    image: "/og-image.png",
  },
} as const;

/** Picks the hero video for a given audience, falling back to the neutral default. */
export function getHeroVideo(audience?: string): string {
  if (audience === "residential") return media.hero.residential;
  if (audience === "commercial") return media.hero.commercial;
  return media.hero.default;
}

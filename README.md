# Trez Construction Group — Website

A premium marketing site for Trez Construction Group, a concrete & general
contracting company serving Greater Central Texas. Built with Next.js 15
(App Router), React, TypeScript, and Tailwind CSS v4.

## Design system

- **Palette** — near-black ink (`#0A0A0A`), oxblood red (`#7A1F27`), warm
  "poured concrete" off-white (`#EDEAE3`). Defined as CSS variables in
  `src/app/globals.css`.
- **Type** — Big Shoulders (condensed, industrial display face), Inter
  (body), IBM Plex Mono (data/spec labels — coordinates, tags, eyebrows).
- **Signature element** — the "Grade Line": a surveyor's benchmark rule
  that pours itself in on scroll (`src/components/ui/GradeLine.tsx`), used
  to divide major sections. It's the one recurring motif tying the whole
  page together.

## Revision 2 — what's new

- **Loading screen** (`src/components/AppShell.tsx` + `src/components/ui/LoadingScreen.tsx`) —
  assembles your logo from three real, auto-cropped assets at
  `public/logo/logo-icon.png`, `logo-wordmark.png`, `logo-subtext.png`
  (derived from the file you sent — swap these three files any time you
  have refreshed brand assets, no code changes needed).
- **Hero "precision"** now has a metallic shine sweep (`.text-metallic` in
  `globals.css`).
- **Services ↔ Projects linking** — `src/lib/projects-filter-context.tsx`
  shares filter state between the two sections; each service's "See
  Recent Projects" button scrolls to and filters the Projects grid. Edit
  `serviceToCategory` there if you rename or add categories.
- **Projects filtering** — `data.ts` supports any number of projects;
  the grid always shows the first 4 matches for the active category
  (see `pickVisible()` in `FeaturedProjects.tsx`), no pagination.
- **Process** — full-width diagonal panels on desktop, spring snap-scroll
  carousel on mobile (`Process.tsx`).
- **Why Choose Us** — each item in `whyChooseUs` (`data.ts`) has an
  optional `media.enabled` flag for an embeddable video/demo slot.
- **Testimonials** — Google-Reviews-styled cards; update
  `siteConfig.google.reviewUrl`, `.rating`, `.reviewCount` in
  `site-config.ts` with your real Google Business Profile info.
- **Contact** — replaced the plain map with a stylized SVG service-radius
  diagram (`src/components/ui/ServiceAreaMap.tsx`); swap for a real
  embedded map/coordinates whenever you'd like literal geography instead
  of the stylized version.



```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

## Before launching, replace these placeholders

1. **Hero video** — drop a real jobsite video at
   `public/video/hero-loop.mp4` (and a poster frame at
   `public/hero-poster.jpg`). The Hero component
   (`src/components/sections/Hero.tsx`) already points at these paths;
   until they exist it falls back to an ambient gradient background.
2. **Project photography** — `BeforeAfterSlider` (`src/components/ui/BeforeAfterSlider.tsx`)
   currently renders a textured placeholder panel. Pass `beforeSrc` /
   `afterSrc` props with real photo URLs per project in
   `src/lib/data.ts` (the `projects` array) and it'll use those instead.
3. **Company details** — phone, email, service-area cities, hours, and
   social links all live in one place: `src/lib/site-config.ts`.
4. **Copy & data** — services, projects, testimonials, FAQ, and process
   steps all live in `src/lib/data.ts`.
5. **Contact form backend** — `src/app/api/contact/route.ts` is fully
   wired to Resend (client notification + user confirmation emails) and
   Google Sheets (lead log), with basic IP rate limiting. Copy
   `.env.example` to `.env.local` and fill in the values — see
   "Contact form integrations" below for the full setup.
6. **OG image** — add `public/og-image.jpg` (1200×630) for social share
   previews; referenced in `src/app/layout.tsx` metadata.
7. **Favicon / app icon** — replace `src/app/favicon.ico`.

## Contact form integrations

The `/api/contact` route does three things on every submission:

1. **Emails the client** (you) the full lead — name, phone, email,
   service, project details, and any attached photos — via
   [Resend](https://resend.com). Reply-to is set to the customer's
   email, so replying goes straight to them.
2. **Emails the customer** a confirmation with what they submitted.
3. **Appends a row to a Google Sheet** — timestamp, name, phone, email,
   service, message, and photo count — via a Google service account.

All three are gated by a basic in-memory rate limiter (`src/lib/rate-limit.ts`,
5 requests / 10 minutes per IP by default) to slow down spam bots. Note
that in-memory state resets on redeploy and isn't shared across multiple
serverless instances — if you deploy somewhere that scales the API route
horizontally, swap it for `@upstash/ratelimit` (Redis-backed) using the
same `rateLimit()` call signature.

**Setup:**

1. Copy `.env.example` to `.env.local`.
2. **Resend** — create an API key at resend.com/api-keys, verify a
   sending domain, and set `RESEND_API_KEY` + `RESEND_FROM_EMAIL`. Set
   `CLIENT_NOTIFICATION_EMAIL` to whichever inbox should receive leads.
3. **Google Sheets** — create a Google Cloud service account, enable the
   Sheets API, download its JSON key, and share your target sheet with
   the service account's email (Editor access). Set
   `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_PRIVATE_KEY`,
   `GOOGLE_SHEET_ID`, and `GOOGLE_SHEET_TAB_NAME`. Full steps are
   commented at the top of `src/lib/google-sheets.ts`.

If `RESEND_API_KEY` or `GOOGLE_SHEET_ID` are left unset, the route skips
that integration (logging a warning) rather than failing the whole
request — handy for local development before secrets are configured.

## SEO

- `src/app/layout.tsx` — metadata, Open Graph, Twitter cards, and
  JSON-LD (`GeneralContractor` / `HomeAndConstructionBusiness` +
  `WebSite` schema) targeting Central Texas concrete/contracting keywords.
- `src/app/sitemap.ts` and `src/app/robots.ts` — update
  `siteConfig.url` once you have a production domain.

## Structure

```
app/
  layout.tsx        root layout, fonts, metadata, JSON-LD
  page.tsx           assembles all sections
  api/contact/       lead form submission endpoint
  robots.ts / sitemap.ts
components/
  sections/          one file per page section (Hero, Services, ...)
  ui/                 shared primitives (Button, GradeLine, Reveal, ...)
lib/
  site-config.ts      company info, single source of truth
  data.ts              services / projects / testimonials / FAQ content
```

## Accessibility & performance notes already built in

- Visible keyboard focus states on all interactive elements
- `prefers-reduced-motion` respected globally
- Semantic HTML landmarks (`header`, `main`, `section`, `footer`)
- Images use `next/image`-ready patterns; swap placeholder `<img>` tags
  in `BeforeAfterSlider` for `next/image` once real photo assets/domains
  are configured in `next.config.ts`
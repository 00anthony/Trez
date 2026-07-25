"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Ruler, Star } from "lucide-react";
import clsx from "clsx";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import BeforeAfterSlider from "../../components/ui/BeforeAfterSlider";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { projects } from "../../lib/data";
import { useProjectsFilter, FilterValue } from "../../lib/projects-filter-context";

const filters: FilterValue[] = [
  "All",
  "Driveways",
  "Patios",
  "Commercial",
  "Residential",
  "Slabs",
  "Repairs",
];

const VISIBLE_COUNT = 4;

/** All projects if "All" is active, otherwise the first N in category order — never paginated. */
function pickVisible(active: FilterValue) {
  const pool = active === "All" ? projects : projects.filter((p) => p.category === active);
  return pool.slice(0, VISIBLE_COUNT);
}

export default function FeaturedProjects() {
  const { activeFilter, setActiveFilter } = useProjectsFilter();
  const visible = pickVisible(activeFilter);

  return (
    <section id="projects" className="relative overflow-hidden bg-ink pb-12 md:pb-16">
      <SectionBackdrop />
      <SectionNumber n="02" />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <Eyebrow>Featured Projects</Eyebrow>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
                Work poured
                <br />
                across Central Texas
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-concrete/60">
              Every project below is real work with a real address. Drag the
              slider to compare the site before and after.
            </p>
          </div>
        </Reveal>

        {/* Filter pills */}
        <div className="mt-12 flex flex-wrap gap-2.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={clsx(
                "border px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase transition-colors duration-200",
                activeFilter === f
                  ? "border-oxblood bg-oxblood text-concrete"
                  : "border-charcoal-2 text-concrete/55 hover:border-concrete/40 hover:text-concrete"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.article
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.06 }}
                className="group border border-charcoal-2 bg-charcoal/40"
              >
                <BeforeAfterSlider
                  beforeLabel={project.beforeLabel}
                  afterLabel={project.afterLabel}
                  beforeSrc={project.beforeSrc}
                  afterSrc={project.afterSrc}
                  seed={i}
                />

                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] tracking-[0.08em] text-steel uppercase">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" /> {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" /> {project.completed}
                    </span>
                    {project.sqft && (
                      <span className="flex items-center gap-1.5">
                        <Ruler className="h-3 w-3" /> {project.sqft}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-semibold uppercase tracking-tight text-concrete">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-oxblood-light">
                    {project.service} · {project.timeline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-concrete/65">
                    {project.description}
                  </p>

                  {project.review && (
                    <div className="mt-5 border-l-2 border-oxblood pl-4">
                      <a
                        href="/#testimonials"
                      >
                        <div className="mb-1 flex gap-0.5">
                          <GoogleIcon className="mr-2 h-3 w-3 shrink-0 opacity-70" />
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} className=" h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" />
                          ))}
                        </div>
                        <p className="text-sm italic text-concrete/75">
                          &ldquo;{project.review.quote}&rdquo;
                        </p>
                        <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-steel uppercase">
                          — {project.review.author}
                        </p>
                      </a>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-charcoal-2 px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-concrete/55 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>

          {visible.length === 0 && (
            <div className="col-span-full border border-dashed border-charcoal-2 p-14 text-center">
              <p className="text-sm text-concrete/55">
                No projects filed under this category yet — check back soon.
              </p>
            </div>
          )}
        </div>

        {/* Custom project CTA */}
        <Reveal delay={0.1} className="mt-20 flex flex-col items-center border border-charcoal-2 bg-charcoal/40 px-8 py-14 text-center md:py-16">
          <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            Don&rsquo;t See Your Project?
          </p>
          <h3 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            We build custom concrete solutions
          </h3>
          <Button href="#contact" variant="primary" className="mt-8">
            Request a Free Estimate
          </Button>
        </Reveal>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.58-5.17 3.58-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.46 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A11.998 11.998 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.27A11.998 11.998 0 0 0 0 12c0 1.94.46 3.77 1.27 5.39l4-3.11Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.61l4 3.11C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}
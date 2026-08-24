"use client";

import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Container from "../../components/ui/Container";
import Eyebrow from "../../components/ui/Eyebrow";
import GradeLine from "../../components/ui/GradeLine";
import Reveal from "../../components/ui/Reveal";
import Button from "../../components/ui/Button";
import ProjectCard from "../../components/ui/ProjectCard";
import SectionNumber from "../../components/ui/SectionNumber";
import SectionBackdrop from "../../components/ui/SectionBackdrop";
import { projects } from "../../lib/data";
import { useProjectsFilter, FilterValue } from "../../lib/projects-filter-context";

const filters: FilterValue[] = [
  "All",
  "Featured",
  "Driveways",
  "Patios",
  "Commercial",
  "Residential",
  "Slabs",
  "Repairs",
];

const VISIBLE_COUNT = 4;

/** All projects if "All" is active, otherwise the first N in category/featured order — never paginated. */
function pickVisible(active: FilterValue) {
  const pool =
    active === "All"
      ? projects
      : active === "Featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === active);
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
                <ProjectCard project={project} seed={i} />
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

        {/* Full portfolio CTA */}
        <Reveal delay={0.1} className="mt-20 flex flex-col items-center border border-charcoal-2 bg-charcoal/40 px-8 py-14 text-center md:py-16">
          <p className="font-mono text-[11px] tracking-[0.2em] text-steel uppercase">
            Don&rsquo;t See Your Project?
          </p>
          <h3 className="mt-4 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            Browse the full portfolio
          </h3>
          <Button href="/projects" variant="primary" className="mt-8">
            View All Projects
          </Button>
        </Reveal>

        <GradeLine className="mt-24" />
      </Container>
    </section>
  );
}
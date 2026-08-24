"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Ruler, Star } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Breadcrumbs from "../ui/Breadcrumbs";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import { GoogleIcon } from "../ui/GoogleIcon";
import type { Project } from "../../lib/types";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 md:pb-28">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
              { label: project.title },
            ]}
          />

          <Eyebrow className="mt-7 mb-5">{project.category}</Eyebrow>

          <h1 className="max-w-3xl font-display text-4xl font-extrabold uppercase tracking-tight text-concrete sm:text-5xl md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-[0.1em] text-steel uppercase">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" /> {project.completed}
            </span>
            {project.sqft && (
              <span className="flex items-center gap-1.5">
                <Ruler className="h-3.5 w-3.5" /> {project.sqft}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm font-medium text-oxblood-light">
            {project.service} · {project.timeline}
          </p>
        </motion.div>

        <div className="mt-12 border border-charcoal-2 bg-charcoal/40">
          <BeforeAfterSlider
            beforeLabel={project.beforeLabel}
            afterLabel={project.afterLabel}
            beforeSrc={project.beforeSrc}
            afterSrc={project.afterSrc}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-base leading-relaxed text-concrete/75">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
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

          {project.review && (
            <div className="lg:col-span-4">
              <div className="border-l-2 border-oxblood bg-charcoal/40 p-6">
                <div className="mb-2 flex gap-0.5">
                  <GoogleIcon className="mr-2 h-3.5 w-3.5 shrink-0 opacity-70" />
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-concrete/80 italic">
                  &ldquo;{project.review.quote}&rdquo;
                </p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.1em] text-steel uppercase">
                  — {project.review.author}
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

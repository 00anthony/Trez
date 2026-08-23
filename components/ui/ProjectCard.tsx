import Link from "next/link";
import { MapPin, Calendar, Ruler, Star } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { GoogleIcon } from "./GoogleIcon";
import type { Project } from "../../lib/types";

export default function ProjectCard({ project, seed = 0 }: { project: Project; seed?: number }) {
  return (
    <>
      <BeforeAfterSlider
        beforeLabel={project.beforeLabel}
        afterLabel={project.afterLabel}
        beforeSrc={project.beforeSrc}
        afterSrc={project.afterSrc}
        seed={seed}
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
            <Link href="/#testimonials">
              <div className="mb-1 flex gap-0.5">
                <GoogleIcon className="mr-2 h-3 w-3 shrink-0 opacity-70" />
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3 w-3 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <p className="text-sm italic text-concrete/75">
                &ldquo;{project.review.quote}&rdquo;
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[0.1em] text-steel uppercase">
                — {project.review.author}
              </p>
            </Link>
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
    </>
  );
}

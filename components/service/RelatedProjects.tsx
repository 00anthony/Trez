import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import GradeLine from "../ui/GradeLine";
import Button from "../ui/Button";
import ProjectCard from "../ui/ProjectCard";
import type { Project } from "../../lib/types";

export default function RelatedProjects({
  projects,
  serviceName,
}: {
  projects: Project[];
  serviceName: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section id="related-projects" className="relative overflow-hidden bg-ink pb-20 md:pb-28">
      <Container className="relative">
        <Reveal>
          <Eyebrow>Recent Work</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-3xl font-bold uppercase tracking-tight text-concrete sm:text-4xl">
            {serviceName} Projects
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project, i) => (
            <article key={project.slug} className="border border-charcoal-2 bg-charcoal/40">
              <ProjectCard project={project} seed={i} />
            </article>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16 flex justify-center">
          <Button href="/#projects" variant="secondary" icon={false}>
            View All Projects
          </Button>
        </Reveal>

        <GradeLine className="mt-20" />
      </Container>
    </section>
  );
}

import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "@/components/ui/fade-in";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-muted-foreground/50" />
            <span className="text-sm tracking-widest text-muted-foreground uppercase font-medium">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Engineering Projects</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={0.1 * index} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

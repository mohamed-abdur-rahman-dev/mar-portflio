import { Project } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, GitBranch, Globe } from "lucide-react";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full bg-card hover:bg-accent/5 transition-colors border-border shadow-sm hover:shadow-md">
      <CardHeader>
        <h3 className="text-xl font-bold tracking-tight text-foreground">{project.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col gap-6">
        {/* Architecture Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-mono text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Key Engineering Highlights */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold tracking-tight text-foreground uppercase">Key Engineering Highlights</h4>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1 text-[10px]">■</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Diagram */}
        {project.architectureDiagram && (
          <div className="space-y-2 mt-4">
            <h4 className="text-sm font-semibold tracking-tight text-foreground uppercase">Architecture Flow</h4>
            <div className="bg-muted/20 rounded-md p-4 border border-border/50 overflow-x-auto">
              <pre className="text-xs font-mono text-muted-foreground leading-relaxed whitespace-pre">
                {project.architectureDiagram}
              </pre>
            </div>
          </div>
        )}

        {/* Engineering Decisions */}
        {project.decisions && project.decisions.length > 0 && (
          <div className="space-y-2 mt-4 pt-4 border-t border-border/50">
            <h4 className="text-sm font-semibold tracking-tight text-foreground uppercase">Design Decisions</h4>
            <ul className="space-y-2">
              {project.decisions.map((decision, i) => (
                <li key={i} className="text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">{decision.label} </span>
                  <span className="text-muted-foreground">{decision.value}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metrics / Scale */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="space-y-2 mt-auto pt-4">
            <h4 className="text-sm font-semibold tracking-tight text-foreground uppercase">Metrics / Scale</h4>
            <div className="grid grid-cols-2 gap-2">
              {project.metrics.map((metric, i) => (
                <div key={i} className="text-sm font-mono text-muted-foreground bg-muted/50 rounded-md p-2 border border-border/50">
                  {metric}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      {/* Actions */}
      <CardFooter className="pt-4 border-t border-border flex flex-wrap gap-3">
        {project.links.demo && (
          <Button size="sm" asChild>
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.links.github && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="gap-2">
              <GitBranch className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        )}
        {project.links.architecture && (
          <Button size="sm" variant="outline" asChild>
            <a href={project.links.architecture} target="_blank" rel="noopener noreferrer" className="gap-2">
              <Globe className="w-4 h-4" />
              Architecture
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

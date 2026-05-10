import { experience, education, certificates } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 max-w-5xl mx-auto px-6">

      {/* Section Header */}
      <FadeIn>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-muted-foreground/50" />
            <span className="text-sm tracking-widest text-muted-foreground uppercase font-medium">
              Background
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Experience & Education</h2>
        </div>
      </FadeIn>

      <div className="space-y-16">

        {/* Work Experience */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Work</span>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <FadeIn key={index} delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-6 rounded-lg border border-border/60 bg-card hover:bg-accent/5 transition-colors">
                  {/* Left: meta */}
                  <div className="space-y-2">
                    <p className="text-xs font-mono text-muted-foreground">{item.date}</p>
                    <p className="text-sm font-semibold text-foreground">{item.company}</p>
                    <p className="text-xs text-muted-foreground">{item.location}</p>
                  </div>

                  {/* Right: content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-base font-bold text-foreground">{item.role}</h3>
                    </div>
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary mt-1.5 text-[8px] shrink-0">■</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Education</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 p-6 rounded-lg border border-border/60 bg-card hover:bg-accent/5 transition-colors">
              <div className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">{education.period}</p>
                <p className="text-sm font-semibold text-foreground">{education.institution}</p>
                <p className="text-xs text-muted-foreground">{education.location}</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-bold text-foreground">{education.degree}</h3>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="font-mono text-xs">GPA {education.gpa}</Badge>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certifications */}
        <div>
          <FadeIn>
            <div className="flex items-center gap-2 mb-8">
              <Award className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Certifications</span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="p-5 rounded-lg border border-border/60 bg-card hover:bg-accent/5 transition-colors">
                  <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs font-mono text-muted-foreground">{cert.date}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

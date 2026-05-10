import { focusAreas, currentlyExploring } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/fade-in";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      <FadeIn>
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-muted-foreground/50" />
            <span className="text-sm tracking-widest text-muted-foreground uppercase font-medium">
              Expertise
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">What I Work On</h2>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {focusAreas.map((area, index) => (
            <Card 
              key={index}
              className="flex items-center p-5 bg-card hover:bg-accent/10 transition-colors border-border/60"
            >
              <span className="text-sm font-medium text-foreground/90">{area}</span>
            </Card>
          ))}
        </div>
      </FadeIn>

      <div className="mt-16 pt-16 border-t border-border/50">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold tracking-tight">Currently Exploring</h3>
          </div>
        </FadeIn>
        
        <FadeIn>
          <div className="flex flex-wrap gap-2">
            {currentlyExploring.map((item, index) => (
              <div key={index} className="px-3 py-1.5 rounded-md bg-muted/30 border border-border/50 text-sm text-muted-foreground font-medium flex items-center gap-2">
                <span className="text-primary text-[8px]">■</span>
                {item}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

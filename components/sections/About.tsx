import { personal, stats } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left: positioning */}
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-muted-foreground/50" />
                <span className="text-sm tracking-widest text-muted-foreground uppercase font-medium">
                  About
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Backend-first. AI-native.<br />
                Production-focused.
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I build systems that stay running. My engineering practice centers on Java Spring Boot backends, agentic AI workflows, and RAG infrastructure designed for real production loads—not controlled demos.
                </p>
                <p>
                  I treat every architecture decision as a tradeoff: async vs sync, relational vs vector, monolith vs distributed. I document those decisions because systems need to be understood by the engineers who inherit them.
                </p>
                <p>
                  Currently available for backend engineering, AI systems engineering, and full-stack product roles.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Available for</p>
                <div className="flex flex-wrap gap-2">
                  {["Backend Engineering", "AI Systems", "Full-Stack Product", "Freelance"].map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-border/60 text-muted-foreground bg-muted/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right: stats */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-lg border border-border/60 bg-card space-y-1">
                  <p className="text-3xl font-bold tracking-tight text-foreground">{stat.number}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

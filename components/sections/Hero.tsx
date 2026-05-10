import { personal } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-24 pb-16"
    >
      <FadeIn>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px bg-muted-foreground/40" />
          <span className="text-xs tracking-widest text-muted-foreground uppercase font-medium">
            {personal.role}
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 leading-[1.1]">
          <span className="block text-foreground">
            {personal.name.split(" ")[0]}
          </span>
          <span className="block text-muted-foreground">
            {personal.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-medium text-foreground/80 mb-6 max-w-2xl">
          {personal.tagline}
        </p>

        <div className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed mb-10 space-y-3">
          {personal.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild size="default">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline" size="default">
            <a href={personal.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}

import { personal } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left: CTA text */}
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-muted-foreground/50" />
                <span className="text-sm tracking-widest text-muted-foreground uppercase font-medium">
                  Contact
                </span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Let&apos;s build something<br />
                production-grade.
              </h2>

              <p className="text-muted-foreground leading-relaxed">
                I&apos;m open to backend engineering roles, AI infrastructure projects, and product-engineering contracts. If you&apos;re building with AI at scale, I want to hear about it.
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{personal.location} · {personal.status}</span>
              </div>
            </div>
          </FadeIn>

          {/* Right: actions */}
          <FadeIn delay={0.15}>
            <div className="space-y-4">

              <a
                href={`mailto:${personal.email}`}
                className="flex items-center justify-between w-full p-5 rounded-lg border border-border/60 bg-card hover:bg-accent/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">Send an email</p>
                    <p className="text-xs text-muted-foreground">{personal.email}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-5 rounded-lg border border-border/60 bg-card hover:bg-accent/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">LinkedIn</p>
                    <p className="text-xs text-muted-foreground">linkedin.com/in/mohamed-abdur-rahman-dev</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-5 rounded-lg border border-border/60 bg-card hover:bg-accent/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">GitHub</p>
                    <p className="text-xs text-muted-foreground">github.com/mohamed-abdur-rahman-dev</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AIAgentPlatformCaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 h-16 flex items-center">
          <Button variant="ghost" size="sm" asChild className="gap-2 -ml-3 text-muted-foreground hover:text-foreground">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-20">
        <header className="mb-16 space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="font-mono text-xs">Case Study</Badge>
            <Badge variant="outline" className="font-mono text-xs text-cyan-500 border-cyan-500/30 bg-cyan-500/10">Architecture</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            AI Agent Platform (Sim-Dev)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Architecting a multi-agent e-learning simulation engine capable of orchestrating concurrent LLM personas without timeouts or race conditions.
          </p>
        </header>

        <article className="space-y-16">
          {/* 1. Problem */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">1. The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern corporate learning lacks practical, scenario-based evaluations. The goal was to build a simulation where users interact with three distinct AI personas (Architect, Manager, Mentor). The primary engineering challenge was orchestrating three heavy LLM calls sequentially and concurrently without hitting standard serverless timeout limits (10s on Vercel), while ensuring the LLM outputs strictly adhered to actionable JSON schemas.
            </p>
          </section>

          {/* 2. Architecture */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">2. Architecture</h2>
            <div className="bg-muted/20 rounded-md p-6 border border-border/50 overflow-x-auto my-6">
              <pre className="text-sm font-mono text-muted-foreground leading-relaxed">
{`Client (React) → Next.js API Route (Proxy)
                       ↓
[Message Queue / Event Bus (Redis)]
                       ↓
Spring Boot Worker Node (LangChain4j)
   ├── Agent 1 (Architect: Curriculum Gen)
   ├── Agent 2 (Manager: Jira Ticketing)
   └── Agent 3 (Mentor: Code Evaluation)
                       ↓
                Groq API (Llama 3)`}
              </pre>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We utilized a decoupled architecture. The Next.js frontend acts only as a proxy, immediately returning an acknowledgment. The heavy lifting is offloaded via an event queue to a long-running Java Spring Boot worker node utilizing LangChain4j for prompt orchestration and Groq API for rapid inference.
            </p>
          </section>

          {/* 3. Tradeoffs */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">3. Tradeoffs</h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc list-inside">
              <li><strong className="text-foreground font-semibold">Groq over OpenAI:</strong> Traded the extreme reasoning depth of GPT-4 for the LPU-accelerated speed of Llama 3 via Groq. The simulation required multi-agent responses within 2 seconds to feel interactive.</li>
              <li><strong className="text-foreground font-semibold">Async Polling vs WebSockets:</strong> Chose short-polling for MVP simplicity over WebSockets, trading slight latency overhead for architectural simplicity and easier horizontal scaling of the backend worker nodes.</li>
            </ul>
          </section>

          {/* 4. Bottlenecks */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">4. Bottlenecks & Mitigations</h2>
            <p className="text-muted-foreground leading-relaxed">
              The primary bottleneck was <strong className="text-foreground font-semibold">LLM JSON Deserialization</strong>. Llama 3 would occasionally inject markdown code blocks around JSON, breaking the standard parsers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">Mitigation:</strong> Built a custom RegEx-based sanitization pipeline that stripped outer markdown backticks and repaired trailing commas before feeding the string into the Jackson object mapper.
            </p>
          </section>

          {/* 5. Scaling */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">5. Scaling Strategy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Because LLM calls are stateless but computationally expensive (I/O bound waiting for the API), the Spring Boot workers are containerized via Docker and deployed on a cluster. Scaling simply requires spinning up more worker containers listening to the same Redis queue. We also implemented a <strong className="text-foreground font-semibold">Cache-first DB lookup</strong>—if a specific curriculum track has been generated before, it is fetched from MySQL in &lt;10ms, entirely bypassing the Groq API.
            </p>
          </section>

          {/* 6. Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">6. Security & RBAC</h2>
            <p className="text-muted-foreground leading-relaxed">
              The system employs strict JWT-based Authentication. End-users cannot directly access the Spring Boot agent endpoints. Role-Based Access Control (RBAC) ensures only `ADMIN` roles can alter prompt templates in the database, while `USER` roles can only trigger inference for their specific tenant ID. We also utilize strict prompt-injection guardrails in the system prompt layer.
            </p>
          </section>

          {/* 7. Deployment */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">7. Deployment Pipeline</h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc list-inside">
              <li><strong className="text-foreground font-semibold">Frontend:</strong> Vercel (Edge cached, CI/CD triggered via GitHub Actions).</li>
              <li><strong className="text-foreground font-semibold">Backend Worker:</strong> Containerized via Docker, deployed to Render.</li>
              <li><strong className="text-foreground font-semibold">Database:</strong> Managed MySQL instance on Aiven.</li>
            </ul>
          </section>

          {/* 8. Observability */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">8. Observability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Every request flowing into the queue generates a unique `trace_id`. The Spring Boot worker logs the token usage, inference latency, and cache hit/miss status against this `trace_id`. This allows us to monitor prompt token drift and pinpoint exactly which persona (Architect, Manager, or Mentor) is causing latency spikes via our centralized logging dashboard.
            </p>
          </section>

          {/* 9. Production Concerns */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight border-b border-border/50 pb-2">9. Production Readiness</h2>
            <ul className="space-y-3 text-muted-foreground leading-relaxed list-disc list-inside">
              <li><strong className="text-foreground font-semibold">API Rate Limiting:</strong> Enforced strict leaky-bucket rate limiting via Redis to prevent abusive bursts from exhausting the Groq API limits.</li>
              <li><strong className="text-foreground font-semibold">Retry Handling:</strong> Implemented exponential backoff with jitter on all LLM API calls to gracefully recover from transient network partitions or 429 Too Many Requests errors.</li>
              <li><strong className="text-foreground font-semibold">Queue Retries & DLQ:</strong> Configured a Dead Letter Queue (DLQ) for failed message processing. Messages failing 3 times are sequestered for manual review.</li>
              <li><strong className="text-foreground font-semibold">Structured Logging:</strong> Standardized on JSON structured logging (SLF4J/Logback) to ensure seamless ingestion, parsing, and querying in modern observability stacks.</li>
              <li><strong className="text-foreground font-semibold">Monitoring:</strong> Exposed critical JVM memory states, active thread counts, and queue depth metrics via standard Actuator/Prometheus endpoints.</li>
              <li><strong className="text-foreground font-semibold">Docker Deployment:</strong> Containerized the Spring Boot worker utilizing a multi-stage Dockerfile to minimize image size and reduce the security attack surface.</li>
              <li><strong className="text-foreground font-semibold">CI/CD Pipeline:</strong> Fully automated GitHub Actions workflow enforcing testing, building the Docker image, and pushing to the container registry on every `main` branch merge.</li>
              <li><strong className="text-foreground font-semibold">Secrets Management:</strong> All sensitive API keys and database credentials are strictly injected at runtime via managed environment variables, ensuring zero credential leakage in the codebase.</li>
            </ul>
          </section>

          {/* 10. Lessons Learned */}
          <section className="space-y-4 bg-muted/10 p-6 rounded-lg border border-border/50">
            <h2 className="text-xl font-bold tracking-tight mb-4">10. Lessons Learned</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Never trust an LLM to consistently return valid JSON, even with strict system prompts and low temperature. Defensive programming via sanitization pipelines is mandatory before attempting deserialization. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Additionally, treating LLM orchestration exactly like traditional microservices (using queues and decoupled workers) entirely solves the fragile "timeout" issues common in Vercel/serverless MVP deployments.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}

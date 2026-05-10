import { Project, WorkExperience } from "../types";

export const personal = {
  name:       "Mohamed Abdur Rahman I",
  shortName:  "MAR_DEV",
  role:       "Full-Stack Engineer & AI Architect",
  tagline:    "Building AI-native backend systems, agent workflows, and production-grade SaaS applications.",
  bio: [
    "Focused on scalable architecture, performance, and AI integration."
  ],
  email:    "mohamedabdurrahman303@gmail.com",
  phone:    "+91 9080176908",
  location: "Coimbatore, India",
  linkedin: "https://www.linkedin.com/in/mohamed-abdur-rahman-dev",
  github:   "https://github.com/mohamed-abdur-rahman-dev",
  status:   "Available for Opportunities",
};

export const stats = [
  { number: "3+",   label: "Production Projects" },
  { number: "4",    label: "AI Integrations" },
  { number: "7.06", label: "GPA — CIT" },
  { number: "100+", label: "Users Served" },
];

export const education = {
  degree:      "Bachelor of Information Technology",
  institution: "Coimbatore Institute of Technology",
  location:    "Coimbatore, India",
  gpa:         "7.06",
  period:      "September 2022 — April 2025",
};

export const focusAreas = [
  "AI Agent Systems",
  "RAG Infrastructure",
  "Backend Architecture",
  "Workflow Automation",
  "Queue Systems",
  "Authentication & RBAC",
  "Distributed APIs",
  "AI-Augmented Products"
];

export const currentlyExploring = [
  "Multi-agent orchestration",
  "LangGraph workflows",
  "RAG evaluation pipelines",
  "AI observability",
  "Distributed inference systems"
];

export const projects: Project[] = [
  {
    id: "legal-ai",
    name: "AI Legal Assistant",
    outcome: "Enterprise RAG system for multi-lingual legal document QA.",
    tech: ["Spring Boot", "Spring AI", "OpenAI GPT-4", "PostgreSQL", "pgvector", "Next.js 14"],
    highlights: [
      "Built multi-lingual RAG pipeline (English, Tamil, Telugu, Hindi)",
      "Implemented PostgreSQL + pgvector for cosine similarity search",
      "Engineered overlapping chunking strategy to preserve cross-boundary context",
      "Integrated Tesseract OCR as a pre-processing gate for scanned PDFs",
      "Decoupled async vector processing from UI uploads"
    ],
    metrics: [
      "4 Languages Supported",
      "Zero Hallucination Strictness"
    ],
    architectureDiagram: 
`Frontend → API Gateway → Agent Service → Vector DB → LLM
                           ↓
                      Redis Cache`,
    decisions: [
      { label: "Why Postgres over Mongo?", value: "Required strict ACID compliance for user data alongside native vector search via pgvector in a single database instance." },
      { label: "Why Next.js?", value: "Needed SSR for SEO on public routes and seamless serverless API routes to securely proxy OpenAI calls." }
    ],
    links: {
      github: "https://github.com/mohamed-abdur-rahman-dev",
    },
  },
  {
    id: "error-log",
    name: "The Error Log",
    outcome: "AI-powered knowledge base for instant developer error resolution.",
    tech: ["Spring Boot", "MySQL", "OpenAI", "JWT", "Razorpay", "Vercel", "Aiven"],
    highlights: [
      "Decoupled async AI call flow for instant UI acknowledgment",
      "Implemented Razorpay payment gateway with webhook signature verification",
      "Built robust database health monitoring and JWT authentication",
      "Deployed distributed architecture across Vercel, Render, and Aiven"
    ],
    metrics: [
      "<50ms UI Acknowledgment",
      "Production Deployed"
    ],
    decisions: [
      { label: "Why WebSockets?", value: "Enabled low-latency, real-time streaming of AI resolution tokens directly to the client." },
      { label: "Why Redis?", value: "Implemented to cache frequent error lookups and enforce API rate-limiting to prevent OpenAI billing abuse." }
    ],
    links: {
      demo: "#",
    },
  },
  {
    id: "sim-dev",
    name: "Sim-Dev",
    outcome: "AI-native e-learning platform orchestrating 3 multi-agent LLM personas.",
    tech: ["Java 21", "LangChain4j", "Groq API", "Llama 3.3 70B", "React", "MySQL"],
    highlights: [
      "Orchestrated 3 AI personas (Architect, Manager, Mentor) via LangChain4j",
      "Built custom JSON sanitization parser to resolve deserialization failures",
      "Implemented cache-first DB lookup per track-level pair",
      "Eliminated redundant Groq API calls via robust caching strategy"
    ],
    metrics: [
      "3 Orchestrated AI Agents",
      "100% Cache Hit Rate for Repeat Queries"
    ],
    decisions: [
      { label: "Why Queue?", value: "Crucial for decoupling the UI from the heavy 3-agent orchestration latency, entirely preventing Vercel's 10s request timeouts." }
    ],
    links: {
      github: "https://github.com/mohamed-abdur-rahman-dev",
      architecture: "/projects/ai-agent-platform",
    },
  },
  {
    id: "sql-tool",
    name: "SQL Practice Engine",
    outcome: "Interactive ER diagram and SQL concept validation engine.",
    tech: ["React.js", "Tailwind CSS", "React Hooks", "SQL"],
    highlights: [
      "Developed 5 interactive ER diagram schemas (E-Commerce & HR)",
      "Built real-time answer validation engine with detailed explanations",
      "Engineered a responsive split-screen UI for complex query building"
    ],
    metrics: [
      "100+ Active Users",
      "80% Concept Retention Improvement"
    ],
    links: {},
  },
];

export const experience: WorkExperience[] = [
  {
    role:     "Front End Web Dev Intern",
    company:  "Nxtlogic Software Solutions",
    location: "Coimbatore",
    date:     "August 2023",
    bullets: [
      "Developed SQL Interview Practice Tool using React.js and Tailwind CSS with 5 interactive ER diagram schemas (E-Commerce & Company HR) and 25 MCQ questions covering advanced SQL concepts.",
      "Implemented real-time answer validation with detailed explanations, improving SQL concept retention by 80% among 100+ users.",
      "Designed responsive split-screen UI using React Hooks and Tailwind utilities for seamless mobile/desktop experience.",
    ],
  },
];

export const certificates = [
  {
    icon:   "🐳",
    name:   "Docker Complete Course for Beginners",
    issuer: "Udemy",
    date:   "December 2025",
    link:   "#",
  },
  {
    icon:   "📊",
    name:   "Complete Business Analysis Fundamentals + CERT",
    issuer: "Udemy",
    date:   "May 2025",
    link:   "#",
  },
];

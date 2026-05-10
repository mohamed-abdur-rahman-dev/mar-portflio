# Mohamed Abdur Rahman — AI Systems Engineer Portfolio

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

> **Premium production-grade portfolio for Mohamed Abdur Rahman I**  
> AI Systems Engineer & Full-Stack Architect  
> Clean SaaS aesthetic, architecture-first storytelling, robust dark/light mode system, and zero-jank performance.

---

## 🏗️ Architecture & Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS + Shadcn UI
- **Icons:** Lucide React
- **Theming:** `next-themes` (system-integrated Dark/Light mode)
- **Animations:** Minimalist opacity-fades via `tailwindcss-animate`

---

## ⚡ Production Highlights

- **Hydration Safe:** Zero FOUC (Flash of Unstyled Content) during theme loading.
- **Server Components Default:** Maximum performance with minimal client bundle size.
- **Data-Driven:** `data/portfolio.ts` acts as the single source of truth for all content.
- **Responsive:** 100% mobile-optimized with slide-down navigation and adaptive typography.
- **Accessible:** Semantic HTML, ARIA attributes, and accessible color contrast.

---

## 🚀 Local Development

### Prerequisites
- Node.js ≥ 18
- npm / yarn / pnpm

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/mohamed-abdur-rahman-dev/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → Opens at http://localhost:3000

# 4. Build for production
npm run build
```

---

## 🌐 Deployment (Vercel)

This project is configured for instant, zero-config deployment on Vercel.

### Option A: GitHub Integration (Recommended)
1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) → **New Project**.
3. Import your GitHub repository.
4. Leave all settings as default (Framework: Next.js).
5. Click **Deploy**.

### Option B: Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview environment
vercel

# Deploy to production
vercel --prod
```

---

## 📁 Repository Structure

```
.
├── app/                  # Next.js App Router (Layouts, Pages)
├── components/           # React Components
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Experience, Projects, Skills, Contact
│   └── ui/               # Reusable UI Primitives (Shadcn)
├── data/                 # Data layer (portfolio.ts)
├── lib/                  # Utility functions
├── types/                # TypeScript definitions
├── globals.css           # Global CSS variables and Tailwind setup
└── tailwind.config.js    # Tailwind configuration
```

---

## 👤 Contact

**Mohamed Abdur Rahman I**  
📧 mohamedabdurrahman303@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/mohamed-abdur-rahman-dev)  
💻 [GitHub](https://github.com/mohamed-abdur-rahman-dev)

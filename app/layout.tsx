import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personal } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title:       `${personal.name} — Full-Stack & AI Engineer`,
  description: `Portfolio of ${personal.name}. ${personal.tagline}. Specializing in Java Spring Boot, React, and AI Engineering.`,
  keywords:    ["Full-Stack Engineer", "Java", "Spring Boot", "React", "AI Engineer", "RAG", "Next.js", "Coimbatore"],
  authors:     [{ name: personal.name, url: personal.linkedin }],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title:       `${personal.name} — Full-Stack & AI Engineer`,
    description: personal.tagline,
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable)} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

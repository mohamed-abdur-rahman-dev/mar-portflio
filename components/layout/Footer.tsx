import { personal } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border mt-24">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} {personal.name}. Built with Next.js, TypeScript, Tailwind CSS.
      </p>
    </footer>
  );
}

import ThemeToggle from "./ThemeToggle";
import { projects } from "@/lib/projects";

export default function Header() {
  return (
    <header className="flex min-h-[78px] items-center justify-between border-b border-line max-[620px]:min-h-[68px]">
      <a href="#top" className="text-[17px] font-bold">
        Summer Selway
      </a>
      <nav aria-label="Main navigation" className="flex gap-8 max-[620px]:gap-3.5">
        <a href="#projects" className="text-[15px] text-muted hover:text-accent max-[620px]:text-sm">
          Projects <span className="ml-1 font-mono text-xs text-accent">{projects.length}</span>
        </a>
        <a href="#about" className="text-[15px] text-muted hover:text-accent max-[620px]:text-sm">
          About
        </a>
      </nav>
      <ThemeToggle />
    </header>
  );
}
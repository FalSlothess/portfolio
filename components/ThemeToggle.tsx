"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

// Treat <html data-theme> as the source of truth
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}
const getSnapshot = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");
const getServerSnapshot = (): Theme => "light";

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${nextTheme} mode`;

  function toggle() {
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {}
    document.documentElement.dataset.theme = nextTheme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", nextTheme === "dark" ? "#111923" : "#f6f7f8");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-[5px] border border-line bg-surface px-3 text-sm text-ink transition duration-200 hover:border-accent max-[620px]:min-h-[42px] max-[620px]:w-[42px] max-[620px]:justify-center max-[620px]:p-0"
    >
      {/* Icon and label swap via the dark: variant, so there's no wrong-icon flash on load */}
      <span aria-hidden="true" className="text-lg leading-none text-accent">
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </span>
      <span className="max-[620px]:sr-only">
        <span className="dark:hidden">Dark mode</span>
        <span className="hidden dark:inline">Light mode</span>
      </span>
    </button>
  );
}
"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY >= 320);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function scrollToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed right-[max(22px,calc((100vw_-_1440px)/2_+_28px))] bottom-6 z-[5] inline-flex min-h-12 cursor-pointer items-center justify-center gap-[9px] rounded-full bg-accent px-4 text-sm font-semibold text-white shadow-[0_5px_18px_rgba(15,35,60,0.22)] transition-[opacity,transform,visibility,background-color] duration-200 hover:bg-[#234b80] dark:text-paper max-[620px]:right-4 max-[620px]:bottom-4 ${
        visible ? "visible translate-y-0 opacity-100" : "invisible translate-y-2.5 opacity-0"
      }`}
    >
      <span aria-hidden="true">↑</span>
      Back to top
    </button>
  );
}
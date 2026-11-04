"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  // Starts with the build-time year so server and client markup match,
  // then updates to the current year once the page loads in the browser.
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="flex min-h-[74px] items-center justify-between gap-[18px] border-t border-line text-[13px] text-muted max-[620px]:min-h-[88px] max-[620px]:flex-wrap max-[620px]:py-[17px]">
      <span>Summer Selway</span>
      <span className="max-[620px]:text-right">Project Portfolio · {year}</span>
      <span>Falmouth, Cornwall</span>
    </footer>
  );
}
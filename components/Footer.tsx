import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getUTCFullYear();
}

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="flex min-h-[74px] items-center justify-between gap-[18px] border-t border-line text-[13px] text-muted max-[620px]:min-h-[88px] max-[620px]:flex-wrap max-[620px]:py-[17px]">
      <span>Summer Selway</span>
      <span className="max-[620px]:text-right">Project Portfolio · {year}</span>
      <span>Falmouth, Cornwall</span>
    </footer>
  );
}
import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: "Summer Selway — Projects",
  description: "Summer Selway's portfolio of robotics, software, and developer-tool projects.",
};

const themeScript = `(function(){try{
var s=localStorage.getItem('portfolio-theme');
var t=s==='light'||s==='dark'?s:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
document.documentElement.dataset.theme=t;
var m=document.querySelector('meta[name="theme-color"]');
if(m)m.setAttribute('content',t==='dark'?'#111923':'#f6f7f8');
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#f6f7f8" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="mx-auto max-w-[1440px] bg-paper px-[clamp(24px,7vw,100px)] font-sans text-[17px] leading-[1.65] text-ink antialiased max-[620px]:px-5 max-[620px]:text-base">
        <a
          href="#main"
          className="absolute left-3 top-3 z-[2] -translate-y-[150%] bg-accent px-3.5 py-2.5 text-white focus:translate-y-0"
        >
          Skip to projects
        </a>
        <Header />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
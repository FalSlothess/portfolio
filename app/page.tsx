import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const eyebrow = "font-mono text-[13px] tracking-[0.025em] text-muted";
const h2 = "text-[clamp(34px,4.5vw,48px)] font-semibold leading-[1.15] tracking-[-0.05em]";

export default function Home() {
  return (
    <main id="main">
      <section
        id="top"
        aria-labelledby="page-title"
        className="max-w-[760px] pt-[clamp(64px,11vw,142px)] pb-[clamp(66px,9vw,116px)] max-[620px]:pt-[66px] max-[620px]:pb-[72px]"
      >
        <p className={`mb-5 ${eyebrow}`}>
          Project Portfolio <span className="text-accent">·</span> Falmouth, Cornwall
        </p>
        <h1
          id="page-title"
          className="mb-5 text-[clamp(48px,7.5vw,84px)] font-semibold leading-[1.06] tracking-[-0.065em]"
        >
          Things I’ve <span className="text-accent">made.</span>
        </h1>
        <p className="mb-7 max-w-[650px] text-[19px] leading-[1.75] text-muted max-[620px]:text-[17px]">
          I’m Summer, a roboticist and developer. This is a growing collection of my projects, the tools behind them,
          and the problems they set out to solve.
        </p>
        <a
          href="#projects"
          className="inline-flex min-h-12 items-center gap-6 rounded-[5px] bg-accent px-[18px] text-[15px] font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#234b80]"
        >
          Browse my projects <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section
        id="projects"
        aria-labelledby="projects-title"
        className="border-t border-line pt-[54px] pb-[100px] max-[620px]:pt-[42px] max-[620px]:pb-[72px]"
      >
        <div className="mb-7 flex items-end justify-between gap-6 max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-2.5">
          <div>
            <p className={`mb-1.5 ${eyebrow}`}>Selected work</p>
            <h2 id="projects-title" className={h2}>
              Projects
            </h2>
          </div>
          <p className="mb-[5px] text-sm text-muted">
            {projects.length} projects <span aria-hidden="true">·</span> Latest first
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[18px] max-[900px]:grid-cols-2 max-[620px]:grid-cols-1 max-[620px]:gap-[13px]">
          {projects.length > 0 ? (
            projects.map((project) => <ProjectCard key={project.title} project={project} />)
          ) : (
            <p className="col-span-full border border-dashed border-line p-[30px] text-center text-muted">
              Projects will appear here soon.
            </p>
          )}
        </div>
      </section>

      <section
        id="about"
        aria-labelledby="about-title"
        className="grid grid-cols-2 gap-[clamp(32px,8vw,110px)] border-t border-line pt-[70px] pb-20 max-[620px]:grid-cols-1 max-[620px]:gap-6 max-[620px]:pt-[52px] max-[620px]:pb-[60px]"
      >
        <div>
          <p className={`mb-[15px] ${eyebrow}`}>A little about me</p>
          <h2 id="about-title" className={h2}>
            Curious by nature.
            <br />
            Builder by practice.
          </h2>
        </div>
        <div className="max-w-[560px]">
          <p className="mb-7 text-[17px] leading-[1.8] text-muted">
            I enjoy making complex ideas easier to use, from software and developer tools to robotics. I care about
            clear thinking, reliable systems, and learning by building.
          </p>
          <h3 className="mb-2 text-base font-bold">Tools I work with</h3>
          <p className="text-[15px] text-muted">
            Python · Flask · JavaScript · TypeScript · C++ · KiCAD · Fusion360 · PowerShell
          </p>
        </div>
      </section>
    </main>
  );
}
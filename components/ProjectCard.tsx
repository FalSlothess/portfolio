import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, category, year, description, technologies, projectUrl, sourceUrl } = project;
  const linkClass = "text-sm font-semibold text-accent underline decoration-1 underline-offset-[3px]";

  return (
    <article className="flex min-h-[275px] flex-col rounded-[7px] border border-line bg-surface p-[23px] shadow-card transition duration-200 hover:-translate-y-[3px] hover:border-accent hover:shadow-card-hover max-[620px]:min-h-[235px] max-[620px]:p-5">
      <div className="mb-[17px] flex items-center justify-between gap-3">
        <span className="rounded bg-accent-light px-[9px] py-1 font-mono text-xs text-accent">{category}</span>
        <span className="font-mono text-xs text-muted">{year}</span>
      </div>

      <h3 className="mb-[9px] text-2xl font-semibold leading-[1.25] tracking-[-0.035em]">{title}</h3>
      <p className="mb-[22px] text-base leading-[1.65] text-muted">{description}</p>

      <ul aria-label="Technologies used" className="mt-auto flex flex-wrap gap-[7px]">
        {technologies.map((technology) => (
          <li key={technology} className="rounded border border-line px-[9px] py-1 text-xs text-muted">
            {technology}
          </li>
        ))}
      </ul>

      {(projectUrl || sourceUrl) && (
        <div className="mt-5 flex flex-wrap gap-[18px] border-t border-line pt-[15px]">
          {projectUrl && (
            <a href={projectUrl} target="_blank" rel="noreferrer" className={linkClass}>
              View project <span aria-hidden="true">↗</span>
            </a>
          )}
          {sourceUrl && (
            <a href={sourceUrl} target="_blank" rel="noreferrer" className={linkClass}>
              Source code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
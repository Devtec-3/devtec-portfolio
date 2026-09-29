import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  return (
    <div
      className={`card group flex flex-col p-6 ${
        large ? "md:col-span-2 md:flex-row md:items-center md:gap-8" : ""
      }`}
    >
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-3xl">{p.icon}</span>
          {p.featured && (
            <span className="chip border-accent/40 text-accent">★ Featured</span>
          )}
        </div>
        <h3 className="text-lg font-bold text-white">{p.title}</h3>
        <p className="mb-3 text-sm font-medium text-accent">{p.tagline}</p>
        <p className="text-sm leading-relaxed text-slate-400">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-4 text-sm font-semibold md:mt-0 md:flex-col md:gap-3">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="text-accent transition hover:text-sky-300"
          >
            Live Demo ↗
          </a>
        )}
        {p.source && (
          <a
            href={p.source}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-accent"
          >
            Source Code ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-pad">
      <h2 className="mb-3 text-3xl font-bold md:text-4xl">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="mb-10 max-w-2xl text-slate-400">
        A selection of the work I&apos;m most proud of — AI products with real-world
        impact, plus client deliveries.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <ProjectCard p={p} large />
          </Reveal>
        ))}
      </div>

      <h3 className="mb-6 mt-14 text-xl font-semibold text-white">
        Other Notable Work
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {others.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://github.com/Devtec-3?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          See all 74+ repos on GitHub →
        </a>
      </div>
    </section>
  );
}

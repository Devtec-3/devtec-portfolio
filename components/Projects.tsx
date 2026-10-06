import Link from "next/link";
import Reveal from "./Reveal";
import { projects, type Project } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";

const studyByProject: Record<string, string> = {
  "CropDx — Crop Disease Detector": "cropdx",
  "MamaCare Triage": "mamacare",
  "Software Defect Prediction Dashboard": "software-defect-prediction",
  "GlobalCoach AI": "globalcoach",
  "CareerPilot — AI Career Assistant": "careerpilot",
  "Cosmetic Beauty Salon": "cosmetic-beauty-salon",
};

function ProjectCard({ p, large = false }: { p: Project; large?: boolean }) {
  const studySlug = studyByProject[p.title];

  return (
    <div
      className={`scrap relative flex flex-col p-6 ${
        large ? "md:col-span-2 md:flex-row md:items-center md:gap-8" : ""
      }`}
    >
      <div className="tape -top-3 left-8 -rotate-2" />
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-3xl">{p.icon}</span>
          {p.featured && (
            <span className="font-hand text-lg font-bold text-rust">
              ★ favourite
            </span>
          )}
        </div>
        <h3 className="font-serif2 text-lg font-extrabold text-espresso">
          {p.title}
        </h3>
        <p className="mb-3 font-hand text-lg font-bold text-rust">{p.tagline}</p>
        <p className="text-sm leading-relaxed text-espresso/75">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-hand text-xl font-bold md:mt-0 md:flex-col md:items-start md:gap-2">
        {studySlug && (
          <Link
            href={`/projects/${studySlug}`}
            className="rounded-full bg-espresso px-4 py-1 text-base font-bold text-paper transition hover:bg-rust"
          >
            read case study →
          </Link>
        )}
        {p.demo && (
          <a href={p.demo} target="_blank" rel="noreferrer" className="text-rust transition hover:opacity-70">
            live demo ↗
          </a>
        )}
        {p.source && (
          <a href={p.source} target="_blank" rel="noreferrer" className="text-espresso/70 transition hover:text-rust">
            code ↗
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
    <section id="projects" className="ruled section-pad">
      <p className="marked font-hand text-2xl">Selected Work</p>
      <h2 className="mt-2 font-serif2 text-3xl font-extrabold text-espresso md:text-5xl">
        Projects I&apos;m proud of
      </h2>
      <p className="mt-3 max-w-2xl text-sm font-semibold text-espresso/70">
        Five of these have full case studies — the problem, why I built it this
        way, what broke, and what it taught me.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <ProjectCard p={p} large />
          </Reveal>
        ))}
      </div>

      <div className="mt-16 flex items-center gap-4">
        <h3 className="font-serif2 text-2xl font-extrabold text-espresso">
          More projects
        </h3>
        <span className="font-hand text-lg font-bold text-rust">
          other things I&apos;ve built →
        </span>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <ProjectCard p={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="https://github.com/Devtec-3?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          See all 74+ repos on GitHub →
        </a>
      </div>
    </section>
  );
}

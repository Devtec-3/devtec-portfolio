import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const meta = projects.find((p) => p.title.startsWith(study.projectKey.split(" — ")[0]));

  return (
    <main className="ruled min-h-screen">
      <div className="section-pad relative pt-28">
        {/* back link */}
        <Link
          href="/#projects"
          className="font-hand text-xl font-bold text-rust underline decoration-marker decoration-2 underline-offset-4 transition hover:opacity-70"
        >
          ← back to all projects
        </Link>

        {/* header */}
        <div className="mt-8 grid items-start gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="marked font-hand text-2xl">Case Study · {study.year}</p>
            <h1 className="mt-2 font-serif2 text-4xl font-extrabold leading-tight text-espresso md:text-5xl">
              {study.projectKey}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-espresso/80 md:text-base">
              {study.intro}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-espresso/70">
              <span className="chip">👤 {study.role}</span>
              <span className="chip">⏱ {study.timeframe}</span>
              <span className="chip">📍 {study.status}</span>
            </div>
            <div className="mt-6 flex gap-4 font-hand text-xl font-bold">
              {study.demo && (
                <a href={study.demo} target="_blank" rel="noreferrer" className="text-rust transition hover:opacity-70">
                  live demo ↗
                </a>
              )}
              {study.source && (
                <a href={study.source} target="_blank" rel="noreferrer" className="text-espresso/70 transition hover:text-rust">
                  source code ↗
                </a>
              )}
            </div>
          </div>

          {/* hero polaroid */}
          {study.hero ? (
            <Reveal>
              <div className="relative mx-auto w-fit">
                <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />
                <div className={`polaroid ${study.heroTilt}`}>
                  <Image
                    src={study.hero}
                    alt={study.projectKey}
                    width={560}
                    height={420}
                    className="h-auto w-full max-w-sm object-cover"
                    priority
                  />
                  <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-espresso/80">
                    {study.projectKey} — {study.year}
                  </p>
                </div>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="relative mx-auto w-fit">
                <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />
                <div className={`polaroid flex h-64 w-80 items-center justify-center bg-paperdark ${study.heroTilt}`}>
                  <span className="text-6xl">{meta?.icon ?? "🧩"}</span>
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* THE PROBLEM */}
        <Reveal>
          <div className="mt-20 grid gap-8 md:grid-cols-[240px_1fr]">
            <div>
              <p className="marked inline-block font-hand text-3xl">The Problem</p>
              <div className="hand-underline mt-1 hidden md:block" />
            </div>
            <div>
              <h2 className="font-serif2 text-2xl font-extrabold leading-snug text-espresso md:text-3xl">
                {study.problem.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-espresso/80 md:text-base">
                {study.problem.body}
              </p>
              <ul className="mt-5 space-y-2.5">
                {study.problem.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5 text-sm text-espresso/80">
                    <span className="text-rust">✗</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* WHY THIS SOLUTION */}
        <div className="espresso-band my-14">
          <div className="section-pad">
            <Reveal>
              <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <div>
                  <p className="marked inline-block font-hand text-3xl text-marker">
                    Why this solution
                  </p>
                </div>
                <div>
                  <h2 className="font-serif2 text-2xl font-extrabold leading-snug text-paper md:text-3xl">
                    {study.whyThis.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-paper/85 md:text-base">
                    {study.whyThis.body}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {study.whyThis.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm text-paper/85">
                        <span className="text-marker">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <Reveal>
          <div className="mt-4">
            <p className="marked inline-block font-hand text-3xl">How it works</p>
            <div className="mt-8 grid gap-5 md:grid-cols-5">
              {study.howItWorks.map((h, i) => (
                <div
                  key={h.step}
                  className={`scrap relative p-5 ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                  style={{ marginTop: `${(i % 3) * 10}px` }}
                >
                  <div className="tape -top-2.5 left-1/2 h-5 w-14 -translate-x-1/2" />
                  <p className="font-hand text-2xl font-bold text-marker">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-serif2 text-base font-extrabold text-espresso">
                    {h.step}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-espresso/75">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* CHALLENGES */}
        <Reveal>
          <div className="mt-20 grid gap-8 md:grid-cols-[240px_1fr]">
            <div>
              <p className="marked inline-block font-hand text-3xl">
                Challenges I faced
              </p>
              <p className="mt-3 hidden font-hand text-lg leading-tight text-espresso/60 md:block">
                the honest parts —
                <br />
                where it hurt 👇
              </p>
            </div>
            <div className="space-y-5">
              {study.challenges.map((c, i) => (
                <div
                  key={c.challenge}
                  className={`scrap p-6 ${i % 2 ? "rotate-[0.5deg]" : "-rotate-[0.5deg]"}`}
                >
                  <p className="flex items-start gap-2.5 font-serif2 text-base font-extrabold text-espresso">
                    <span>⚠️</span> {c.challenge}
                  </p>
                  <p className="mt-2.5 flex items-start gap-2.5 text-sm leading-relaxed text-espresso/80">
                    <span className="font-bold text-rust">→ fixed:</span> {c.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* RESULTS */}
        <div className="espresso-band my-14">
          <div className="section-pad">
            <Reveal>
              <p className="marked inline-block font-hand text-3xl text-marker">
                Results
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {study.results.map((r, i) => (
                  <div
                    key={r.label}
                    className={`border border-marker/30 bg-marker/10 p-5 text-center ${i % 2 ? "rotate-1" : "-rotate-1"}`}
                  >
                    <p className="font-serif2 text-3xl font-extrabold text-marker">
                      {r.value}
                    </p>
                    <p className="mt-1 text-xs font-bold text-paper/80">{r.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* STACK + LESSON */}
        <Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="scrap p-6">
              <p className="font-serif2 text-lg font-extrabold text-espresso">
                🧰 Built with
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="sticky rotate-1 bg-[#f9e79f]">
              <p className="font-serif2 text-lg font-extrabold text-espresso">
                💡 What it taught me
              </p>
              <p className="mt-3 text-sm font-bold leading-relaxed text-espresso/80">
                {study.lessons}
              </p>
            </div>
          </div>
        </Reveal>

        {/* NEXT PROJECT */}
        <div className="mt-20 text-center">
          <p className="font-hand text-2xl font-bold text-espresso/60">
            read another one →
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {caseStudies
              .filter((c) => c.slug !== study.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/projects/${c.slug}`}
                  className="scrap inline-flex items-center gap-2 px-5 py-3 font-hand text-xl font-bold text-espresso"
                >
                  {c.projectKey.split(" — ")[0]} ↗
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}

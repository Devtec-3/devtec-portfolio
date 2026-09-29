import { experience, leadership, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        Industry <span className="gradient-text">Experience</span>
      </h2>

      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        {/* Timeline */}
        <div className="space-y-10">
          {experience.map((e) => (
            <div key={e.role} className="relative border-l-2 border-line pl-6">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-ink" />
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {e.period}
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">{e.role}</h3>
              <p className="text-sm text-slate-400">{e.org}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-accent">▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Leadership & Certifications */}
        <div className="space-y-6">
          <div className="card h-fit p-6">
            <h3 className="mb-4 font-semibold text-white">Leadership & Community</h3>
            <ul className="space-y-3">
              {leadership.map((l) => (
                <li key={l} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5 text-accent">★</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div className="card h-fit p-6">
            <h3 className="mb-4 font-semibold text-white">Certifications</h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-0.5">📜</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

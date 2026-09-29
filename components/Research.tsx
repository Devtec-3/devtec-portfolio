import { research, researchInterests } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="section-pad">
      <h2 className="mb-3 text-3xl font-bold md:text-4xl">
        Research &amp; <span className="gradient-text">Publications Track</span>
      </h2>
      <p className="mb-10 max-w-2xl text-slate-400">
        My research focus and hands-on research experience in applied machine
        learning.
      </p>

      {/* Research interests */}
      <div className="card mb-10 p-6">
        <h3 className="mb-4 font-semibold text-white">Research Interests</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {researchInterests.map((r) => (
            <div key={r} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-accent">🔎</span>
              {r}
            </div>
          ))}
        </div>
      </div>

      {/* Research experience */}
      <div className="space-y-10">
        {research.map((r) => (
          <div key={r.role} className="relative border-l-2 border-line pl-6">
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-accent2 bg-ink" />
            <p className="text-xs font-semibold uppercase tracking-wide text-accent2">
              {r.period}
            </p>
            <h3 className="mt-1 text-lg font-bold text-white">{r.role}</h3>
            <p className="text-sm text-slate-400">{r.org}</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {r.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="text-accent2">▹</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

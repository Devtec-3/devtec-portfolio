import Reveal from "./Reveal";
import { research, researchInterests } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="espresso-band my-8">
      <div className="section-pad relative">
        <p className="marked font-hand text-2xl text-marker">Research</p>
        <h2 className="mt-2 font-serif2 text-3xl font-extrabold text-paper md:text-5xl">
          What I&apos;m researching
        </h2>

        {/* interests as taped scraps */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {researchInterests.map((r, i) => (
            <Reveal key={r} delay={i * 80}>
              <div
                className={`relative bg-paper px-5 py-4 shadow-md ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <div className="tape -top-2 left-6 w-16" />
                <p className="text-sm font-extrabold text-espresso">🔎 {r}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* timeline */}
        <div className="mt-14 space-y-10">
          {research.map((r) => (
            <Reveal key={r.role}>
              <div className="relative border-l-2 border-dashed border-marker/50 pl-6">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-marker bg-espresso" />
                <p className="font-hand text-lg font-bold text-marker">{r.period}</p>
                <h3 className="mt-1 font-serif2 text-lg font-extrabold text-paper md:text-xl">
                  {r.role}
                </h3>
                <p className="text-xs font-bold text-paper/60">{r.org}</p>
                <ul className="mt-3 space-y-2 text-sm text-paper/85">
                  {r.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-marker">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

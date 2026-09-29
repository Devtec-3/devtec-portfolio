import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        Skills &amp; <span className="gradient-text">Toolkit</span>
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 100}>
            <div className="card h-full p-6">
              <h3 className="mb-4 font-semibold text-white">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

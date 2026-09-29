import Reveal from "./Reveal";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="paper-grid section-pad">
      <p className="marked font-hand text-2xl">My Toolkit</p>
      <h2 className="mt-2 font-serif2 text-3xl font-extrabold text-espresso md:text-5xl">
        Skills I picked up <span className="hand-underline">along the way</span>
      </h2>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 90} variant="sticker-pop">
            <div
              className={`sticky sticky-wobble h-full font-body ${
                ["#f9e79f", "#fad7a0", "#d5e8d4", "#e8d4f0"][i % 4]
              }`}
              style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
            >
              <p className="font-serif2 text-base font-extrabold text-espresso">
                {group}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs font-bold text-espresso/80">
                {items.map((s) => (
                  <li key={s}>· {s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

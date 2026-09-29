import Reveal from "./Reveal";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <h2 className="mb-10 text-3xl font-bold md:text-4xl">
        <span className="gradient-text">About</span> Me
      </h2>

      <Reveal>
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-5 text-slate-300 leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <ul className="mt-6 space-y-2">
            {profile.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <span className="text-accent">▹</span>
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="card space-y-6 p-6">
          <div>
            <h3 className="mb-3 font-semibold text-white">Education</h3>
            {about.education.map((e) => (
              <div key={e.title} className="mb-4 border-l-2 border-accent/40 pl-4">
                <p className="font-medium text-slate-200">{e.title}</p>
                <p className="text-sm text-slate-400">{e.org}</p>
                <p className="text-xs text-slate-500">{e.period}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-3 font-semibold text-white">Quick Facts</h3>
            <p className="text-sm text-slate-400">🌍 {profile.location}</p>
            <p className="text-sm text-slate-400">💼 Open to global & remote roles</p>
            <p className="text-sm text-slate-400">🧠 Focused on AI-powered products</p>
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

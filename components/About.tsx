import Image from "next/image";
import Reveal from "./Reveal";
import { about, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="espresso-band my-8">
      <div className="section-pad relative">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="marked font-hand text-2xl text-marker">About Me</p>
            <h2 className="mt-2 font-serif2 text-3xl font-extrabold text-paper md:text-5xl">
              The phone that started it all.
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-relaxed text-paper/85 md:text-base">
              {about.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "text-paper" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {profile.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-marker/40 bg-marker/10 px-4 py-1.5 text-xs font-bold text-marker"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* education polaroid stack */}
          <div className="relative">
            <Reveal delay={120}>
              <div className="tape -top-2 right-8 z-10 rotate-6" />
              <div className="polaroid -rotate-2">
                <div className="ruled space-y-4 bg-paperdark p-5">
                  <p className="font-hand text-2xl font-bold text-espresso">
                    Education 🎓
                  </p>
                  {about.education.map((e) => (
                    <div key={e.title} className="border-b border-espresso/10 pb-3">
                      <p className="text-sm font-extrabold text-espresso">{e.title}</p>
                      <p className="text-xs font-semibold text-espresso/70">{e.org}</p>
                      {e.period && (
                        <p className="mt-0.5 font-hand text-base text-rust">{e.period}</p>
                      )}
                    </div>
                  ))}
                  <div className="flex gap-4 pt-1 text-xs font-bold text-espresso/70">
                    <span>🌍 {profile.location}</span>
                  </div>
                  <div className="space-y-1 text-xs font-semibold text-espresso/70">
                    <p>💼 Open to global &amp; remote roles</p>
                    <p>🧠 Focused on interpretable AI</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

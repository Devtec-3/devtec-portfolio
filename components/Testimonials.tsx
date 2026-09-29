import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <h2 className="mb-3 text-3xl font-bold md:text-4xl">
        What People <span className="gradient-text">Say About Me</span>
      </h2>
      <p className="mb-10 max-w-2xl text-slate-400">
        Recommendations from supervisors, mentors and collaborators.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="card flex h-full flex-col p-6">
              <span className="gradient-text text-5xl font-serif leading-none">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Reveal from "./Reveal";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="ruled section-pad">
      <p className="marked font-hand text-2xl">Kind Words</p>
      <h2 className="mt-2 font-serif2 text-3xl font-extrabold text-espresso md:text-5xl">
        What people say about me
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure
              className={`scrap relative h-full p-6 ${
                i % 2 ? "rotate-1" : "-rotate-1"
              }`}
            >
              <div className="tape -top-3 left-1/2 -translate-x-1/2" />
              <span className="font-serif2 text-5xl leading-none text-marker">
                &ldquo;
              </span>
              <blockquote className="mt-1 text-sm leading-relaxed text-espresso/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-dashed border-espresso/20 pt-4">
                <p className="font-hand text-xl font-bold text-espresso">{t.name}</p>
                <p className="text-xs font-bold text-espresso/60">{t.title}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

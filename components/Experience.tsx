import Reveal from "./Reveal";
import { experience, leadership, certifications } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="paper-grid section-pad">
      <p className="marked font-hand text-2xl">The Journey</p>
      <h2 className="mt-2 font-serif2 text-3xl font-extrabold text-espresso md:text-5xl">
        Where I&apos;ve worked
      </h2>

      <div className="mt-12 grid gap-14 md:grid-cols-[3fr_2fr]">
        {/* Timeline */}
        <div className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={e.role} delay={i * 60}>
              <div className="relative border-l-2 border-dashed border-espresso/30 pl-6">
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-rust bg-paper" />
                <p className="font-hand text-lg font-bold text-rust">{e.period}</p>
                <h3 className="mt-1 font-serif2 text-lg font-extrabold text-espresso md:text-xl">
                  {e.role}
                </h3>
                <p className="text-xs font-bold text-espresso/60">{e.org}</p>
                <ul className="mt-3 space-y-2 text-sm text-espresso/80">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-rust">▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Leadership & certs as sticky notes */}
        <div className="space-y-8">
          <Reveal delay={100} variant="sticker-pop">
            <div className="sticky sticky-wobble -rotate-1 bg-[#f9e79f]">
              <p className="font-serif2 text-base font-extrabold text-espresso">
                ⭐ Leadership &amp; Community
              </p>
              <ul className="mt-3 space-y-2.5 text-xs font-bold text-espresso/80">
                {leadership.map((l) => (
                  <li key={l}>★ {l}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200} variant="sticker-pop">
            <div className="sticky sticky-wobble rotate-1 bg-[#d5e8d4]">
              <p className="font-serif2 text-base font-extrabold text-espresso">
                📜 Certifications
              </p>
              <ul className="mt-3 space-y-2.5 text-xs font-bold text-espresso/80">
                {certifications.map((c) => (
                  <li key={c}>✦ {c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="scrap p-5">
              <p className="font-serif2 text-base font-extrabold text-espresso">
                🏆 Highlights
              </p>
              <ul className="mt-3 space-y-2.5 text-xs font-bold text-espresso/75">
                <li>Top 10 Global Finalist — Aspire × Cayu AI Hackathon</li>
                <li>Engineering experience in Nigeria, UK &amp; Australia</li>
                <li>Live ML research dashboard deployed</li>
                <li>Kectil Youth Leadership Fellow · Aspire Leader</li>
              </ul>
              <a
                href="/Aspire-Certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 font-hand text-lg font-bold text-rust underline decoration-marker decoration-2 underline-offset-4 transition hover:opacity-70"
              >
                📜 view my Aspire certificate ↗
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

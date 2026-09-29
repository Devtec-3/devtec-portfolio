import Image from "next/image";
import Reveal from "./Reveal";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="ruled relative overflow-hidden pt-32 pb-16">
      <div className="section-pad relative">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Copy */}
          <div className="animate-fade-up">
            <p className="marked font-hand text-2xl">
              Hi, I&apos;m Abdulwadud 👋
            </p>
            <h1 className="mt-4 font-serif2 text-4xl font-extrabold leading-[1.1] text-espresso md:text-6xl">
              From coding on a{" "}
              <span className="hand-underline">phone in Ilorin</span> to
              building AI that feeds, heals &amp; hires.
            </h1>
            <p className="mt-6 max-w-xl font-body text-base font-semibold text-espresso/80 md:text-lg">
              {profile.role} — I build AI products for agriculture, healthcare
              and careers, and research interpretable machine learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="btn-espresso">
                See My Work →
              </a>
              <a href={profile.resumeUrl} className="btn-outline" download>
                📄 Download CV
              </a>
            </div>
          </div>

          {/* Polaroid photo */}
          <Reveal delay={150}>
            <div className="relative mx-auto w-fit md:ml-auto">
              <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />
              <div className="polaroid rotate-2 transition hover:rotate-0">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  width={320}
                  height={320}
                  priority
                  className="h-56 w-56 object-cover md:h-64 md:w-64"
                />
                <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-lg text-espresso/80">
                  me, coding on that phone →
                </p>
              </div>
              {/* small sticky note */}
              <div className="sticky absolute -bottom-8 -left-10 w-36 -rotate-6 font-hand text-base leading-tight text-espresso">
                started 2022 — no laptop, no excuses 📱
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats as paper scraps */}
        <div className="mt-20 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className={`scrap p-5 text-center ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <p className="font-serif2 text-2xl font-extrabold text-rust md:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs font-bold text-espresso/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

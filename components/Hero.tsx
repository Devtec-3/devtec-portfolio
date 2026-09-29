import Image from "next/image";
import { profile } from "@/lib/data";

const stats = [
  { value: "4.01/5.00", label: "CGPA — Second Class Upper" },
  { value: "Top 10", label: "Global AI Hackathon Finalist" },
  { value: "3", label: "Countries — NG · UK · AU" },
  { value: "74+", label: "Public GitHub Repos" },
];

export default function Hero() {
  return (
    <section id="top" className="grid-bg relative overflow-hidden pt-32 pb-20">
      <div className="glow pointer-events-none absolute inset-0" />
      <div className="section-pad relative flex flex-col items-center gap-10 text-center md:flex-row md:text-left">
        {/* Photo */}
        <div className="order-1 shrink-0 md:order-2">
          <div className="animate-float rounded-full bg-gradient-to-tr from-accent to-accent2 p-1">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={220}
              height={220}
              priority
              className="h-44 w-44 rounded-full border-4 border-ink object-cover md:h-52 md:w-52"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="order-2 flex-1 animate-fade-up md:order-1">
          <p className="mb-3 font-medium text-accent">
            Hi, I&apos;m {profile.name.split(" ")[0]} {profile.name.split(" ")[1]} 👋
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="gradient-text">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>
          <p className="mt-4 text-lg text-slate-300 md:text-xl">{profile.role}</p>
          <p className="mt-2 text-sm text-slate-400">📍 {profile.location}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work →
            </a>
            <a href={profile.resumeUrl} className="btn-ghost" download>
              Download CV
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-4 text-sm md:justify-start">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
              LinkedIn
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
              X / Twitter
            </a>
            <a href={`mailto:${profile.email}`} className="text-slate-400 transition hover:text-accent">
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Stats band */}
      <div className="section-pad relative pt-4">
        <div className="card grid grid-cols-2 gap-6 p-6 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="gradient-text text-2xl font-extrabold md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-400 md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

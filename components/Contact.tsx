import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <Reveal>
      <div className="card glow relative overflow-hidden p-10 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Let&apos;s Build Something <span className="gradient-text">Together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          I&apos;m open to global & remote frontend opportunities, collaborations on
          AI-enabled products, and scholarship/mentorship conversations. My inbox is
          always open.
        </p>

        <a href={`mailto:${profile.email}`} className="btn-primary mt-8">
          ✉️ {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
            X / Twitter
          </a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
            Instagram
          </a>
          <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">
            Facebook
          </a>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

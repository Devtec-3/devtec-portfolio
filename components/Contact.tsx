import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="espresso-band my-8">
      <Reveal>
        <div className="section-pad relative text-center">
          <div className="tape left-1/2 top-6 -translate-x-1/2 rotate-2" />
          <p className="marked font-hand text-2xl text-marker">Say Hello</p>
          <h2 className="mx-auto mt-3 max-w-2xl font-serif2 text-3xl font-extrabold leading-tight text-paper md:text-5xl">
            Building something?
            <br />
            Let&apos;s talk.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-paper/75 md:text-base">
            I&apos;m open to global &amp; remote opportunities, collaborations on
            AI-enabled products, and scholarship conversations. My inbox is
            always open — whether you have a project or just want to talk about
            coding on a phone.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-marker px-7 py-3 text-sm font-extrabold text-espresso shadow-md transition hover:-translate-y-0.5 hover:bg-paper">
              ✉️ {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="btn-outline !border-paper/50 !text-paper hover:!bg-paper hover:!text-espresso">
              📞 {profile.phone}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6 font-hand text-xl font-bold text-paper/80">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-marker">GitHub</a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-marker">LinkedIn</a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="transition hover:text-marker">X / Twitter</a>
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="transition hover:text-marker">Instagram</a>
            <a href={profile.socials.facebook} target="_blank" rel="noreferrer" className="transition hover:text-marker">Facebook</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

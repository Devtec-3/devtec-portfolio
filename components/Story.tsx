import Image from "next/image";
import Reveal from "./Reveal";
import { story } from "@/lib/data";

export default function Story() {
  return (
    <section id="story" className="ruled section-pad">
      <p className="marked font-hand text-2xl">My Story</p>
      <h2 className="mt-2 max-w-3xl font-serif2 text-3xl font-extrabold leading-tight text-espresso md:text-5xl">
        It started with a <span className="hand-underline">Redmi 10C</span>, not
        a laptop.
      </h2>

      {/* Narrative blocks — polaroid + text alternating */}
      <div className="mt-14 space-y-16">
        {/* Block 1 — first line of code */}
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
            <div className="relative mx-auto w-fit">
              <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-3" />
              <div className="polaroid -rotate-2">
                <Image
                  src="/story/first-html.jpeg"
                  alt="first.html — my first file in Acode"
                  width={280}
                  height={600}
                  className="h-72 w-auto"
                />
                <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-espresso/80">
                  first.html — where it all began
                </p>
              </div>
            </div>
            <div>
              <p className="font-hand text-2xl font-bold text-rust">
                2022 — curiosity meets a cracked screen
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/80 md:text-base">
                {story.chapters[0]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Block 2 — building real things */}
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div className="order-2 md:order-1">
              <p className="font-hand text-2xl font-bold text-rust">
                &ldquo;Muhammad web Design&rdquo; — my first brand
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/80 md:text-base">
                {story.chapters[1]}
              </p>
            </div>
            <div className="relative order-1 mx-auto w-fit md:order-2">
              <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 rotate-2" />
              <div className="polaroid rotate-2">
                <Image
                  src="/story/webdesign-hero.jpeg"
                  alt="Muhammad web Design hero section on phone"
                  width={280}
                  height={600}
                  className="h-72 w-auto"
                />
                <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-espresso/80">
                  web developer, on a phone 📱
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Block 3 — gallery strip */}
        <Reveal>
          <div>
            <p className="font-hand text-2xl font-bold text-rust">
              Proof. Every project below was built on that phone.
            </p>
            <div className="mt-6 flex gap-5 overflow-x-auto pb-4">
              {story.gallery.map((g) => (
                <div key={g.src} className="relative shrink-0">
                  <div className="tape -top-2 left-1/2 z-10 h-5 w-16 -translate-x-1/2" />
                  <div className={`polaroid ${g.tilt}`}>
                    <Image
                      src={g.src}
                      alt={g.caption}
                      width={200}
                      height={440}
                      className="h-56 w-auto"
                    />
                    <p className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-sm text-espresso/80">
                      {g.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Block 4 — university + graduation */}
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
            <div className="relative mx-auto w-fit">
              <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
              <div className="polaroid -rotate-1">
                {story.graduationPhoto ? (
                  <Image
                    src={story.graduationPhoto}
                    alt="Graduation — KWASU"
                    width={320}
                    height={420}
                    className="h-72 w-auto object-cover"
                  />
                ) : (
                  <div className="flex h-72 w-56 flex-col items-center justify-center bg-paperdark text-center">
                    <span className="text-5xl">🎓</span>
                    <p className="mt-3 px-4 font-hand text-lg leading-tight text-espresso/70">
                      graduation photo goes here — drop it in and I&apos;ll pin
                      it up
                    </p>
                  </div>
                )}
                <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-espresso/80">
                  KWASU — July 2026 🎓
                </p>
              </div>
            </div>
            <div>
              <p className="font-hand text-2xl font-bold text-rust">
                Then university happened — Computer Science at KWASU
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/80 md:text-base">
                {story.chapters[2]}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Block 5 — today */}
        <Reveal>
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div className="order-2 md:order-1">
              <p className="font-hand text-2xl font-bold text-rust">
                Today — same curiosity, bigger tools
              </p>
              <p className="mt-3 text-sm leading-relaxed text-espresso/80 md:text-base">
                {story.chapters[3]}
              </p>
              <p className="mt-6 font-serif2 text-xl font-extrabold italic leading-snug text-espresso md:text-2xl">
                &ldquo;{story.closing}&rdquo;
              </p>
              <p className="mt-2 font-hand text-xl font-bold text-rust">
                — Devtec
              </p>
            </div>
            <div className="relative order-1 mx-auto w-fit md:order-2">
              <div className="tape -top-3 left-1/2 z-10 -translate-x-1/2 rotate-3" />
              <div className="polaroid rotate-1">
                <Image
                  src="/story/workspace.jpeg"
                  alt="Acode workspace — years of projects"
                  width={280}
                  height={600}
                  className="h-72 w-auto"
                />
                <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-espresso/80">
                  the workspace that never closed
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

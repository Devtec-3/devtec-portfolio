import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import { story, about } from "@/lib/data";

export default function StoryPage() {
  const chapters = [
    {
      label: "2022 — curiosity meets a cracked screen",
      image: "/story/first-html.jpeg",
      caption: "first.html — where it all began",
      tilt: "-rotate-2",
      tape: "-rotate-3",
    },
    {
      label: "\u201cMuhammad web Design\u201d — my first brand",
      image: "/story/webdesign-hero.jpeg",
      caption: "web developer, on a phone 📱",
      tilt: "rotate-2",
      tape: "rotate-2",
    },
    {
      label: "Then university happened — Computer Science at KWASU",
      image: story.graduationPhoto,
      caption: "KWASU — July 2026 🎓",
      tilt: "-rotate-1",
      tape: "-rotate-2",
      extra: story.graduationGallery,
    },
    {
      label: "Today — same curiosity, bigger tools",
      image: "/story/workspace.jpeg",
      caption: "the workspace that never closed",
      tilt: "rotate-1",
      tape: "rotate-3",
    },
  ];

  return (
    <main className="ruled min-h-screen">
      <div className="section-pad relative pt-28">
        <Link
          href="/"
          className="font-hand text-xl font-bold text-rust underline decoration-marker decoration-2 underline-offset-4 transition hover:opacity-70"
        >
          ← back home
        </Link>

        <p className="marked mt-8 inline-block font-hand text-2xl">My Story</p>
        <h1 className="mt-2 max-w-3xl font-serif2 text-4xl font-extrabold leading-tight text-espresso md:text-6xl">
          It started with a <span className="hand-underline">Redmi 10C</span>,
          not a laptop.
        </h1>
        <p className="mt-4 max-w-2xl text-sm font-semibold text-espresso/70 md:text-base">
          The full story of how a phone in Ilorin became a career in AI.
        </p>

        <div className="mt-16 space-y-20">
          {chapters.map((c, i) => (
            <Reveal key={c.label}>
              <div
                className={`grid items-center gap-10 ${
                  i % 2 ? "md:grid-cols-[1.3fr_1fr]" : "md:grid-cols-[1fr_1.3fr]"
                }`}
              >
                {/* image side */}
                <div
                  className={`relative mx-auto w-fit ${
                    i % 2 ? "order-1 md:order-2" : ""
                  }`}
                >
                  <div className={`tape -top-3 left-1/2 z-10 -translate-x-1/2 ${c.tape}`} />
                  <div className={`polaroid ${c.tilt} relative`}>
                    <Image
                      src={c.image}
                      alt={c.caption}
                      width={320}
                      height={620}
                      className="h-80 w-auto"
                    />
                    <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-base text-espresso/80">
                      {c.caption}
                    </p>
                  </div>
                  {c.extra && (
                    <div className="mt-6 flex justify-center gap-5">
                      {c.extra.map((g) => (
                        <div key={g.src} className="relative">
                          <div className="tape -top-2 left-1/2 h-4 w-12 -translate-x-1/2" />
                          <div className={`polaroid ${g.tilt}`}>
                            <Image
                              src={g.src}
                              alt={g.caption}
                              width={140}
                              height={190}
                              className="h-32 w-auto"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* text side */}
                <div className={i % 2 ? "order-2 md:order-1" : ""}>
                  <p className="font-hand text-3xl font-bold text-rust">
                    {c.label}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-espresso/80 md:text-base">
                    {story.chapters[i]}
                  </p>
                  {i === 3 && (
                    <div className="mt-8">
                      <p className="font-serif2 text-xl font-extrabold italic leading-snug text-espresso md:text-2xl">
                        &ldquo;{story.closing}&rdquo;
                      </p>
                      <p className="mt-2 font-hand text-xl font-bold text-rust">
                        — Devtec
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* screenshot gallery */}
        <Reveal>
          <div className="mt-24">
            <p className="font-hand text-3xl font-bold text-rust">
              Proof. Every project below was built on that phone.
            </p>
            <div className="mt-8 flex gap-6 overflow-x-auto pb-6 pt-4">
              {story.gallery.map((g) => (
                <div key={g.src} className="relative shrink-0">
                  <div className="tape -top-2 left-1/2 z-10 h-5 w-16 -translate-x-1/2" />
                  <div className={`polaroid ${g.tilt}`}>
                    <Image
                      src={g.src}
                      alt={g.caption}
                      width={200}
                      height={440}
                      className="h-60 w-auto"
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

        {/* what I believe */}
        <Reveal>
          <div className="espresso-band mt-24">
            <div className="section-pad text-center">
              <p className="marked inline-block font-hand text-2xl text-marker">
                What I believe
              </p>
              <p className="mx-auto mt-5 max-w-2xl font-serif2 text-2xl font-extrabold leading-snug text-paper md:text-3xl">
                &ldquo;Your starting point should never define your potential.&rdquo;
              </p>
              <p className="mx-auto mt-4 max-w-xl text-sm text-paper/75">
                I share my journey as Devtec so the next person coding on a phone
                knows it&apos;s possible. If my story helped you, pass it on.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/#projects" className="rounded-full bg-marker px-7 py-3 text-sm font-extrabold text-espresso shadow-md transition hover:-translate-y-0.5 hover:bg-paper">
                  See what I build now →
                </Link>
                <Link href="/#contact" className="btn-outline !border-paper/50 !text-paper hover:!bg-paper hover:!text-espresso">
                  Say hello
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <Footer />
    </main>
  );
}

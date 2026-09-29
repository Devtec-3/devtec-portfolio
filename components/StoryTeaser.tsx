import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { story } from "@/lib/data";

export default function StoryTeaser() {
  return (
    <section id="story" className="ruled section-pad">
      <p className="marked font-hand text-2xl">My Story</p>
      <h2 className="mt-2 max-w-3xl font-serif2 text-3xl font-extrabold leading-tight text-espresso md:text-5xl">
        It started with a <span className="hand-underline">Redmi 10C</span>, not
        a laptop.
      </h2>

      <div className="mt-12 grid items-center gap-10 md:grid-cols-[1fr_1.3fr]">
        {/* fanned polaroids */}
        <Reveal variant="pin-up" tilt="-6deg">
          <div className="relative mx-auto flex w-fit">
            <div className="scrap-lift relative z-10 -rotate-6 transition hover:z-20 hover:rotate-0">
              <div className="tape -top-3 left-1/2 z-10 h-5 w-16 -translate-x-1/2 -rotate-3 animate-tape-peel" style={{ animationDelay: "0.4s" }} />
              <div className="polaroid">
                <Image
                  src="/story/first-html.jpeg"
                  alt="first.html — my first file"
                  width={180}
                  height={400}
                  className="h-56 w-auto"
                />
                <p className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-sm text-espresso/80">
                  first.html
                </p>
              </div>
            </div>
            <div className="scrap-lift relative -ml-8 z-20 rotate-3 transition hover:z-30 hover:rotate-0">
              <div className="tape -top-3 left-1/2 z-10 h-5 w-16 -translate-x-1/2 rotate-2 animate-tape-peel" style={{ animationDelay: "0.65s" }} />
              <div className="polaroid">
                <Image
                  src={story.graduationPhoto}
                  alt="Graduation — KWASU"
                  width={180}
                  height={250}
                  className="h-56 w-auto object-cover"
                />
                <p className="absolute bottom-1.5 left-0 right-0 text-center font-hand text-sm text-espresso/80">
                  KWASU 🎓
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* teaser copy */}
        <div>
          <p className="font-hand text-2xl font-bold text-rust">
            no laptop · no course · no excuses
          </p>
          <p className="mt-4 text-sm leading-relaxed text-espresso/80 md:text-base">
            In 2022 I learned HTML and CSS on a Redmi 10C using the Acode app —
            split-screening YouTube tutorials on a phone keyboard. I built real
            projects that way: websites, portals, login systems. Then Computer
            Science at KWASU happened, and the phone kid became an AI engineer
            and researcher.
          </p>
          <p className="mt-4 font-serif2 text-lg font-extrabold italic text-espresso md:text-xl">
            &ldquo;{story.closing}&rdquo;
          </p>
          <Link
            href="/story"
            className="btn-espresso mt-7 animate-sticker-pop"
            style={{ animationDelay: "0.9s" }}
          >
            Read the full story →
          </Link>
        </div>
      </div>
    </section>
  );
}

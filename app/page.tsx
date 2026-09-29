import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StoryTeaser from "@/components/StoryTeaser";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Research from "@/components/Research";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StoryTeaser />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}

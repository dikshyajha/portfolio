import Image from "next/image";
import { TopNav } from "@/components/partials/TopNav";
import { Hero } from "@/components/modules/Landing/Hero";
import { About } from "@/components/modules/Landing/About";
import { Contact } from "@/components/modules/Landing/Contact";
import { Experience } from "@/components/modules/Landing/Experience";
import { Skills } from "@/components/modules/Landing/Skills";
import { Projects } from "@/components/modules/Landing/Projects";

export default function Home() {
  return (
    <>
      <main className="px-wrapper pt-6xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

    </>
  );
}

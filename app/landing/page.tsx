import { About } from "@/components/modules/Landing/About";
import { Contact } from "@/components/modules/Landing/Contact";
import { Hero } from "@/components/modules/Landing/Hero";
import { Work } from "@/components/modules/Landing/Work";

export const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
};

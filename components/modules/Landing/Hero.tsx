"use client";
import { Button } from "@mantine/core";
import Typed from "typed.js";
import {
  BrandGithub,
  BrandLinkedin,
} from "tabler-icons-react";
import { useEffect, useRef, useState } from "react";
export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  const typedElement = useRef<HTMLSpanElement>(null);
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/dikshya-k-jha?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9XtBh7NKQ66PwH1DjPqt5A%3D%3D",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleGithubClick = () => {
    window.open(
      "https://github.com/dikshyajha",
      "_blank",
      "noopener,noreferrer"
    );
  };

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);

    updateWidth(); // set actual width immediately on mount
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (typedElement.current) {
      const typed = new Typed(typedElement.current, {
        strings: ["Computer Engineer", "FullStack Developer"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  const buttonSize =
    windowWidth !== null && windowWidth < 1024 ? "sm" : "xl";

  const logoSize =
    windowWidth !== null && windowWidth < 1024 ? "24" : "40";



  return (
    <section id="" className="flex justify-between items-center flex-row h-[70vh] scroll-mt-4xl">
      <div className="">
        <div className="text-4xl md:text-5xl lg:text-7xl font-bold">
          Hi, I&apos;m {""}
          <span className="text-[#7e64af] font-Ovo ">Dikshya K. Jha </span>
        </div>
        <div className="lg:text-5xl md:text-3xl text-2xl font-semibold font-Ovo">
          <span ref={typedElement}></span>


        </div>
        <div className="flex flex-row gap-sm mt-md lg:mt-2xl ">
          <Button
            variant="outline"
            color="#7e64af"
            size={buttonSize}
            className=" hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
            component="a"
            href={"#contact"}
          >
            CV Available on Request
          </Button>
          <Button
            variant="filled"
            color="#7e64af"
            size={buttonSize}
            className=" hover:text-[#7e64af] hover:bg-black hover:border-[#7e64af] border-1 border-transparent transition-all duration-300"
            component="a"
            href={"#contact"}
          >
            Let&apos;s Connect
          </Button>
        </div>
      </div>
      <div className="flex flex-row space-x-xl">
        {/* <div className="relative overflow-hidden rounded-full">
          <Image
            src={myimg}
            alt="Dikshya K. Jha"
            width={500}
            height={500}
            className="object-cover sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]"
          />
        </div> */}

        <div className="flex flex-col justify-center items-center gap-lg">
          <div className="cursor-pointer">
            <BrandLinkedin size={logoSize} color="#7e64af" onClick={handleLinkedInClick} />
          </div>
          <div className="cursor-pointer">
            <BrandGithub size={logoSize} color="#7e64af" onClick={handleGithubClick} />
          </div>
          {/* <div className="cursor-pointer">
            <BrandInstagram size={logoSize} color="#7e64af" />
          </div> */}
          <div className="h-[80px] w-[2px] bg-[#7e64af]"></div>
        </div>
      </div>
    </section>
  );
};



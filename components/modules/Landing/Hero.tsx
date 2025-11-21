"use client";
import { ActionIcon, Button, Divider } from "@mantine/core";
import myimg from "@/assets/images/photo.jpg";
import Image from "next/image";
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  MinusVertical,
} from "tabler-icons-react";
import { use, useEffect, useState } from "react";
export const Hero = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const buttonSize = windowWidth < 1024 ? "sm" : "xl";
  const logoSize = windowWidth < 1024 ? "24" : "40";


  return (
    <section id="" className="flex justify-between items-center flex-row lg:h-[70vh]">
      <div className="">
        <div className="text-5xl lg:text-7xl font-bold">
          Hi, I'm {""}
          <span className="text-[#7e64af] font-Ovo ">Dikshya K. Jha </span>
        </div>
        <div className="lg:text-5xl text-3xl font-semibold font-Ovo">
          FullStack Developer
        </div>
        <div className="flex flex-row gap-sm mt-md lg:mt-2xl ">
          <Button
            variant="outline"
            color="#7e64af"
            size={buttonSize}
            className=" hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
          >
            CV Available on Request
          </Button>
          <Button
            variant="filled"
            color="#7e64af"
            size={buttonSize}
            className=" hover:text-[#7e64af] hover:bg-black hover:border-[#7e64af] border-1 border-transparent transition-all duration-300"
          >
            Let's Connect
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
            <BrandLinkedin size={logoSize} color="#7e64af" />
          </div>
          <div className="cursor-pointer">
            <BrandGithub size={logoSize} color="#7e64af" />
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
// https://github.com/dikshyajha

// https://www.linkedin.com/in/dikshya-k-jha?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9XtBh7NKQ66PwH1DjPqt5A%3D%3D
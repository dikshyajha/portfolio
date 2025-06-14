import { ActionIcon, Button, Divider } from "@mantine/core";
import myimg from "@/assets/images/photo.jpg";
import Image from "next/image";
import {
  BrandGithub,
  BrandInstagram,
  BrandLinkedin,
  MinusVertical,
} from "tabler-icons-react";
export const Hero = () => {
  return (
    <section className="flex lg:justify-between items-center lg:flex-row sm:flex-col-reverse lg:h-[70vh]">
      <div className="sm:text-center lg:text-start">
        <div className="sm:text-5xl lg:text-7xl font-bold sm:my-md  lg:my-auto">
          Hi, I'm {""}
          <span className="text-[#7e64af] font-Ovo ">Dikshya K. Jha </span>
        </div>
        <div className="lg:text-5xl sm:text-4xl font-semibold font-Ovo -mt-sm">
          FullStack Developer
        </div>
        <div className="flex gap-x-sm lg:mt-2xl sm:mt-md sm:justify-center lg:justify-normal">
          <Button
            variant="outline"
            color="#7e64af"
            size="xl"
            className=" hover:text-white hover:border-[#7e64af] hover:bg-[#7e64af] transition-all duration-300"
          >
            CV Available on Request
          </Button>
          <Button
            variant="filled"
            color="#7e64af"
            size="xl"
            className=" hover:text-[#7e64af] hover:bg-black hover:border-[#7e64af] border-1 border-transparent transition-all duration-300"
          >
            Let's Connect
          </Button>
        </div>
      </div>
      <div className="flex flex-row space-x-xl">
        <div className="relative overflow-hidden rounded-full">
          <Image
            src={myimg}
            alt="Dikshya K. Jha"
            width={500}
            height={500}
            className="object-cover sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]"
          />
        </div>

        <div className="flex flex-col justify-center items-center gap-lg">
          <div className="cursor-pointer">
            <BrandLinkedin size={44} color="#7e64af" />
          </div>
          <div className="cursor-pointer">
            <BrandGithub size={44} color="#7e64af" />
          </div>
          <div className="cursor-pointer">
            <BrandInstagram size={44} color="#7e64af" />
          </div>
          <div className="h-[80px] w-[2px] bg-[#7e64af]"></div>
        </div>
      </div>
    </section>
  );
};

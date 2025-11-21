"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandGithub, BrandInstagram, BrandLinkedin } from "tabler-icons-react";

export const Footer = () => {
  const navItems = [
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActiveLink(currentPath);
  }, []);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <>
      <section className="mt-wrapper bg-purpleDark hover:bg-[#7e64af] text-center text-black">
        <div className="text-3xl md:text-5xl pt-3xl font-bol font-Ovo font font-col">
          Dikshya Kumari Jha
        </div>
        <div className="nav flex justify-center gap-x-lg text-md md:text-xl mt-lg">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.link}
                className={`relative font-Ovo transition-transform duration-300 ease-in-out transform ${activeLink === item.link
                  ? "text-white scale-105 underline underline-offset-4 "
                  : "text-black hover:scale-110 hover:text-white"
                  }`}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center my-2xl gap-x-xl">
          <BrandLinkedin size={44} className="cursor-pointer" />
          <BrandGithub size={44} className="cursor-pointer" />
          {/* <BrandInstagram size={44} className="cursor-pointer" /> */}
        </div>
        <div className="pb-2xl text-lg">
          Dikshya Kumari Jha. All rights reserved
        </div>
      </section>
    </>
  );
};

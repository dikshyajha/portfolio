"use client"; // Ensure this is a client-side component
import Link from "next/link";
import { useState, useEffect } from "react";
import { Logo } from "../common/Logo";

export const TopNav = () => {
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Work", link: "/work" },
    { name: "Contact", link: "/contact" },
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
    <nav className="w-full">
      <div className="flex flex-row justify-between items-center">
        <Logo />
        <div className="nav flex justify-between gap-x-xl text-xl py-xs pl-2xl">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.link}
                className={`relative font-Ovo transition-transform duration-300 ease-in-out transform ${
                  activeLink === item.link
                    ? "text-white scale-105 underline underline-offset-4 decoration-[2px] decoration-purpleGlow"
                    : "text-purpleSoft hover:scale-110 hover:text-white"
                }`}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

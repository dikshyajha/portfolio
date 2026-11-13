"use client"; // Ensure this is a client-side component
import { useState, useEffect, useRef } from "react";
import { Logo } from "../common/Logo";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Drawer } from "@mantine/core";

export const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [menuList, setMenuList] = useState([]);
  // const [drawerOpen, setDrawerOpen] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const drawerRef = useRef<Element>(null);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current?.contains(event.target as Node)) {
        close()
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle side drawer
  // const toggleDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  //   open();
  // };

  const navItems = [
    // { name: "Home", link: "#home" },
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
      <nav className={`w-full shadow-lg flex items-center justify-between fixed top-0 z-50 transition-all duration-300 px-wrapper ${scrolled
        ? "bg-white/10 rounded-md backdrop-blur-3xl "
        : "bg-black text-white/50 "
        }`}>
        <Logo />
        <div className="hidden lg:flex justify-between items-center gap-x-xl text-xl">
          {navItems.map((item) => (
            <div key={item.name}>
              <a
                href={item.link}
                className={`relative font-Ovo transition-transform duration-300 ease-in-out transform ${activeLink === item.link
                  ? "text-white scale-105 underline underline-offset-4 decoration-[1px] decoration-purpleGlow"
                  : "text-purpleSoft hover:scale-110 hover:text-white"
                  }
                  ${scrolled ? "text-white" : "text-purpleSoft"
                  } `}
                onClick={() => handleLinkClick(item.link)}
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
        <div className="lg:hidden">
          <Burger
            opened={opened}
            onClick={opened ? close : open}
            aria-label="Toggle navigation"
            color="white"
          />
        </div>
      </nav>
      <Drawer opened={opened} onClose={close} size="75%"
        title={
          <div className="font-bold text-4xl cursor-pointer text-purpleMiddle">
            Dikshya
          </div>
        }>
        <div className="flex flex-col">
          {navItems.map((item, i) => (
            <div key={item.name} className="border-b mt-md">
              <a
                href={item.link}
                key={i}
                className={`relative font-Ovo transition-transform text-2xl duration-300 ease-in-out transform ${activeLink === item.link
                  ? "text-purpleMiddle rounded-md scale-105 underline underline-offset-4 decoration-[1px] decoration-purpleGlow"
                  : "text-purpleSoft hover:scale-110 hover:text-purpleMiddle"
                  }`}
                onClick={() => {
                  handleLinkClick(item.link);
                  close();
                }
                }
              >
                {item.name}
              </a>
            </div>
          ))}

        </div>
      </Drawer>
    </>
  );
};

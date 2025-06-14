"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Stars = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    const numStars = 200; // Number of stars
    const stars: HTMLDivElement[] = [];

    if (starsContainer) {
      // Create stars and append them to the container
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.className = "star";
        starsContainer.appendChild(star);

        // Set initial random position and properties
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const scale = Math.random() * 0.5 + 0.1;
        const opacity = Math.random() * 0.8 + 0.2;

        gsap.set(star, { x, y, scale, opacity });

        // Animate stars to move randomly
        const moveStar = () => {
          gsap.to(star, {
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            duration: Math.random() * 30 + 40, // Random duration
            ease: "power1.inOut",
            onComplete: moveStar, // Repeat the animation
          });
        };
        moveStar();

        stars.push(star);
      }

      // Handle mouse click to scatter stars
      const handleMouseClick = (e: MouseEvent) => {
        const { clientX, clientY } = e;

        stars.forEach((star) => {
          const rect = star.getBoundingClientRect();
          const distance = Math.hypot(rect.x - clientX, rect.y - clientY);

          if (distance < 150) {
            // Scatter stars near the click location
            gsap.to(star, {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.8 + 0.2,
              scale: Math.random() * 0.5 + 0.1,
              duration: 20,
              ease: "power2.out",
            });
          }
        });
      };

      window.addEventListener("click", handleMouseClick);

      return () => {
        // Cleanup event listener and stars
        window.removeEventListener("click", handleMouseClick);
        stars.forEach((star) => starsContainer.removeChild(star));
      };
    }
  }, []);

  return (
    <div
      ref={starsContainerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
};

export default Stars;

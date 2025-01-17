"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { a } from "framer-motion/client";

interface NavbarBaseProps {
  className?: string; // Add this line to accept className as a prop
}

const NavbarBase: React.FC<NavbarBaseProps> = ({ className }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        {
          opacity: 0, // Start state
          scale: 0, // Start state
          x: 600, // Start position (off-screen to the right)
        },
        {
          duration: 3,
          opacity: 1, // End state (fully visible)
          scale: 1, // End state (full size)
          x: 0, // End position (default position on the left)
          ease: "bounce.inOut", // Easing function
          delay: 0.5, // Delay before animation starts
        }
      );
    }
  }, []);

  return (
    <nav
      className={`bg-transparent fixed top-0 left-0 w-full z-20 shadow-lg ${className || ""}`}
    >
      <div className="mx-auto px-2 sm:px-12 py-2 flex justify-between items-center">
        <div ref={logoRef}>
          <Image
            src="/assets/svg/logowhite-no-background.svg"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarBase;

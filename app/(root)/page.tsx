"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Navbar from "../components/navigation/navbar"; // Import your Navbar component
import Button from "../components/Button"; // Import your Button component

export default function Home() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          scale: 0,
        },
        {
          duration: 5,
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          delay: 0.5,
          onComplete: () => {
            setTimeout(() => {
              gsap.fromTo(
                contentRef.current,
                {
                  opacity: 1,
                  scale: 1,
                },
                {
                  duration: 5,
                  opacity: 0,
                  scale: 0,
                  ease: "power2.out",
                  onComplete: () => {
                    gsap.fromTo(
                      contentRef.current,
                      {
                        opacity: 0,
                        scale: 0,
                      },
                      {
                        duration: 5,
                        opacity: 1,
                        scale: 1,
                        ease: "power2.out",
                        delay: 0.5,
                      }
                    );
                  },
                }
              );
            }, 10000); // 10000ms = 10 seconds delay before starting the fade out
          },
        }
      );
    }
  }, []);

  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <div
        ref={contentRef}
        className="relative z-20 flex flex-col items-center justify-center h-full w-full text-center"
      >
        <h1 className="text-4xl text-white font-bold mb-6 font-[var(--fredoka),sans-serif] text-[5vw] drop-shadow-[5px_5px_10px_black] select-none">
          AHockett
        </h1>
        <br />
        <p className="text-lg text-white">Explore pre-designed templates</p>
        <div className="flex gap-4 mt-4">
          <Link href="/templates/template1">
            <Button text="Template 1" />
          </Link>
          <Link href="/templates/template2">
            <Button text="Template 2" />
          </Link>
        </div>
      </div>
    </>
  );
}

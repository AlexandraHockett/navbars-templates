"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Button from "../components/Button";

const Home = () => {
  const tlRef = useRef<GSAPTimeline | null>(null);
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content div

  useEffect(() => {
    const tl = gsap
      .timeline({
        defaults: { ease: "none", repeat: 500, yoyo: true },
      })
      .to("#rect1", { x: 1100, duration: 45 })
      .to("#rect2", { x: 1200, duration: 50 }, 0)
      .to("#rect3", { x: 800, duration: 65 }, 0)
      .timeScale(4)
      .time(150);

    tlRef.current = tl; // Directly assign here

    const handleClick = () => {
      if (tlRef.current) {
        const randomTime = Math.random() * tlRef.current.duration();
        tlRef.current.pause(randomTime);
      }
    };
    document.addEventListener("click", handleClick);
    // Animation for the content div
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0, // Start state
          scale: 0, // Start state
        },
        {
          duration: 5,
          opacity: 1, // End state
          scale: 1, // End state
          ease: "power2.out",
          delay: 0.5,
          onComplete: () => {
            setTimeout(() => {
              // Reset the animation to start again
              gsap.fromTo(
                contentRef.current,
                {
                  opacity: 1, // Start from fully visible
                  scale: 1, // Start from fully scaled
                },
                {
                  duration: 5,
                  opacity: 0, // End at invisible
                  scale: 0, // End at not scaled
                  ease: "power2.out",
                  onComplete: () => {
                    // After fading out, immediately start the animation again
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
                        delay: 0.5, // To match the initial delay
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
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[rgb(36,0,33)] font-[var(--inter),sans-serif]">
      <div className="absolute inset-0 bg-[rgb(36,0,33)]"></div>{" "}
      {/* Fallback background */}
      <svg
        viewBox="0 0 1280 720"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full cursor-pointer"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="gradient-0"
            cx="80"
            cy="640"
            r="640"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#451D41" />
            <stop offset="1" stopColor="#210631" />
          </radialGradient>
        </defs>
        <rect
          width="1280"
          height="720"
          style={{ stroke: "rgb(0, 0, 0)", fill: "url(#gradient-0)" }}
        />
        <rect
          id="rect1"
          y="-220"
          width="918"
          height="1456"
          style={{ mixBlendMode: "overlay", fill: "rgb(230, 43, 255)" }}
          transform="matrix(0.866026, 0.5, -0.5, 0.866025, 454.988037, -310.395172)"
        />
        <rect
          id="rect2"
          y="-179"
          width="755"
          height="1354"
          style={{ mixBlendMode: "overlay", fill: "rgba(234, 86, 239, 0.31)" }}
          x="596"
          transform="matrix(0.866026, 0.5, -0.5, 0.866025, 340.207977, -456.782898)"
        />
        <rect
          id="rect3"
          y="-220"
          width="653"
          height="1456"
          style={{ mixBlendMode: "overlay", fill: "rgb(230, 43, 255)" }}
          transform="matrix(0.866026, 0.5, -0.5, 0.866025, -216.390228, -276.907166)"
        />
      </svg>
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
    </div>
  );
};

export default Home;

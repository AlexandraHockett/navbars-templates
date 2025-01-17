'use client';

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Layout({ children }: { children: React.ReactNode }) {
  const tlRef = useRef<GSAPTimeline | null>(null);

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

    tlRef.current = tl;

    const handleClick = () => {
      if (tlRef.current) {
        const randomTime = Math.random() * tlRef.current.duration();
        tlRef.current.pause(randomTime);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[rgb(36,0,33)] font-[var(--inter),sans-serif]">
      <div className="absolute inset-0 bg-[rgb(36,0,33)]"></div> {/* Fallback background */}
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
      {children}
    </div>
  );
}
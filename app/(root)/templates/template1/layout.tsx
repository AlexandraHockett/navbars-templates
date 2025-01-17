import { ReactNode } from "react";
import NavbarBase from "@/app/components/NavbarBase";
import VideoBackground from "@/app/components/VideoBackground";

export default function Template1Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen">
      <VideoBackground src="/videos/pink-blue-explosion.mp4" className="z-0" />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <NavbarBase className="z-20" />
      {children} {/* Here's where Template1's content should appear */}
    </main>
  );
}

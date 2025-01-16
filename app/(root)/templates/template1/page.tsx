import Link from "next/link";
import Button from "@/app/components/Button";
import Navbar from "@/app/components/NavbarBase";
import VideoBackground from "@/app/components/VideoBackground";

export default function Template1() {
  return (
    <main className="relative min-h-screen">
      {/* Video Background */}
      <VideoBackground src="/videos/pink-blue-explosion.mp4" />
      <div className="absolute inset-0 bg-black/50" />
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl text-white font-bold text-center">
          Welcome to Template 1
        </h2>
        <p className="text-lg md:text-xl text-white text-center mt-6">
          Customize this template for your project!
        </p>
        <br />
        <Link href="/">
          <Button text="Back to Homepage" />
        </Link>
      </div>
    </main>
  );
}

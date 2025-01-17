import Link from "next/link";
import Button from "@/app/components/Button";

export default function Template1() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center z-30">
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
  );
}

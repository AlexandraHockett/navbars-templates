import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-black bg-opacity-30 p-4 sm:p-6 sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        {/* Logo with responsive size */}
        <div className="w-[40px] h-[40px] sm:w-[70px] sm:h-[70px] relative">
          <Image
            src="/assets/svg/logowhite-no-background.svg"
            alt="logo"
            fill // Use the fill prop directly to make the image fill the parent
            style={{ objectFit: "contain" }} // This sets the image to be contained
          />
        </div>
        {/* Text with responsive size */}
        <p className="text-purple-400 text-[18px] sm:text-[24px] font-bold leading-[25px] sm:leading-[31.2px] max-sm:hidden">
          A<span className="text-purple-300">Hockett</span>
        </p>
      </Link>
      <p className="text-purple-400">Templates</p>
      <div className="flex-between gap-5 text-purple-300">
        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;

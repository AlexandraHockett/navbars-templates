import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false); // Use state to control sheet visibility

  const toggleSheet = () => setOpen(!open); // Function to toggle the sheet

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-dark-200 bg-opacity-40 border-none"
      >
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <SheetDescription className="hidden">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/svg/logowhite-no-background.svg"
            width={60}
            height={60}
            alt="logo"
          />
          <p className="text-purple-400 text-[18px] sm:text-[24px] font-bold leading-[25px] sm:leading-[31.2px]">
            A<span className="text-purple-300">Hockett</span>
          </p>
        </Link>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav />
            </section>
          </SheetClose>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={toggleSheet} // This will toggle the sheet's open/close state
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x h-4 w-4"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
          <span className="sr-only">Close</span> {/* Screen reader text */}
        </button>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;

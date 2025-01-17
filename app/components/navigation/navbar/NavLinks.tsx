import React from "react";

const sidebarLinks = [
  {
    imgURL: "/assets/icons/home.svg",
    label: "Home",
    route: "/",
  },
];

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  return <div className="text-white">NavLinks</div>;
};

export default NavLinks;

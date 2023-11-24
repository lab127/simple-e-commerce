"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbMenu2, TbShoppingCart, TbLetterX } from "react-icons/tb";

const navLinks = [
  {
    name: "Categories",
    url: "#categories",
  },
  {
    name: "Furnitures",
    url: "#categories/furnitures",
  },
];

export default function Navbar() {
  const [mobileNav, setMobileNav] = useState(true);

  const mobileToggleBtn = () => {
    setMobileNav(!mobileNav);
  };
  return (
    <header className="z-10 fixed left-0 top-0 w-full shadow-md dark:shadow-neutral-800/50 bg-gradient-to-b from-neutral-200 backdrop-blur-2xl dark:bg-neutral-800/30 dark:from-inherit">
      <nav className="max-w-7xl flex justify-between items-center mx-auto px-4">
        <Image
          alt="logo"
          src={`/assets/logo.png`}
          width={85}
          height={85}
          priority
        />

        <button className="md:hidden" type="submit" onClick={mobileToggleBtn}>
          {mobileNav ? (
            <div className="flex gap-2">
              <TbShoppingCart size={25} />
              <TbMenu2 size={25} />
            </div>
          ) : (
            <TbLetterX size={25} />
          )}
        </button>
      </nav>
      <div className="flex gap-4">
        <div
          className={`flex ${
            mobileNav
              ? "hidden"
              : "flex-col min-h-screen w-full fixed top-0 bg-red-900 justify-center items-center"
          } md:flex-row gap-4 uppercase text-xl`}
        >
          {navLinks.map((nav, index) => (
            <Link key={index} href={nav.url} onClick={mobileToggleBtn}>
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

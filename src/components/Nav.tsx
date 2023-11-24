"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TbMenu2, TbShoppingCart, TbX } from "react-icons/tb";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(true);
  const menu = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Categories",
      url: "#categories",
    },
    {
      name: "Kitchen",
      url: "#kitchen",
    },
    {
      name: "Lamp",
      url: "#lamp",
    },
  ];

  const hiddenClick = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <nav className="bg-gray-100 text-neutral-700 dark:text-neutral-300 dark:bg-black dark:border-b-[1px] dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-7 py-4 flex justify-between">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={85}
            height={85}
            priority
          />
          <div className="md:hidden flex items-center space-x-3">
            <button type="submit">
              <TbShoppingCart size={30} />
            </button>
            <button type="submit" onClick={hiddenClick}>
              {isHidden && <TbMenu2 size={30} />}
            </button>
          </div>
        </div>
      </nav>
      <div className="w-full md:max-w-7xl flex md:justify-end md:mx-auto">
        <div
          className={`${
            isHidden ? "hidden" : "flex flex-col"
          } md:flex absolute w-full md:w-auto h-screen md:h-auto bg-gray-100 text-neutral-700 dark:text-neutral-300 dark:bg-black md:mt-10 md:mx-2 top-0`}
        >
          <button
            className="md:hidden flex justify-end px-7 py-11"
            type="submit"
            onClick={hiddenClick}
          >
            <TbX size={30} />
          </button>
          <ul className="flex flex-col md:flex-row h-full items-center pt-24 md:p-0 space-y-3 md:space-y-0 text-3xl md:text-xl uppercase">
            {menu.map((link, index) => (
              <li key={index} className="md:px-2 px-4 py-1">
                <Link onClick={hiddenClick} href={link.url}>
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              className={`${!isHidden && "hidden"} md:flex md:px-2 px-4 py-1`}
              type="submit"
            >
              <TbShoppingCart size={30} />
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

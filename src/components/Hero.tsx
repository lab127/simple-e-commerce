import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-5">
        <div className="relative md:row-span-2 md:col-span-2">
          <Link
            className="transition duration-500 ease-in hover:opacity-60"
            href={`#furniture`}
          >
            <Image
              className="object-cover h-auto w-full dark:opacity-80 brightness-90"
              src={`/assets/header/home-img-1.jpg`}
              alt="furnitures"
              width={0}
              height={0}
              sizes="100vw"
            />
            <p className="absolute left-4 bottom-8 font-semibold first-letter:uppercase text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Live Comfortably
            </p>
          </Link>
        </div>
        <div className="relative md:row-span-2">
          <Link
            className="transition duration-500 ease-in hover:opacity-60"
            href={`#skincare`}
          >
            <Image
              className="object-cover h-full w-auto dark:opacity-80 brightness-90"
              src={`/assets/header/home-img-2.jpg`}
              alt="skincare"
              width={0}
              height={0}
              sizes="100vw"
            />
            <p className="absolute left-4 bottom-8 font-semibold first-letter:uppercase text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Skincare
            </p>
          </Link>
        </div>
        <div className="relative">
          <Link
            className="transition duration-500 ease-in hover:opacity-60"
            href={`#kitchen`}
          >
            <Image
              className="object-cover h-full w-auto dark:opacity-80 brightness-90"
              src={`/assets/header/home-img-3.jpg`}
              alt="kitchen"
              width={0}
              height={0}
              sizes="100vw"
            />
            <p className="absolute left-4 bottom-8 font-semibold first-letter:uppercase text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              kitchen
            </p>
          </Link>
        </div>
        <div className="relative">
          <Link
            className="transition duration-500 ease-in hover:opacity-60"
            href={`#electronics`}
          >
            <Image
              className="object-cover h-full w-auto dark:opacity-80 brightness-90"
              src={`/assets/header/home-img-4.jpg`}
              alt="electronics"
              width={0}
              height={0}
              sizes="100vw"
            />
            <p className="absolute left-4 bottom-8 font-semibold first-letter:uppercase text-white text-4xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              electronics
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

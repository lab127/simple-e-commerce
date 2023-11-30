import { items } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Props = {
  numberFeaturedProducts?: number;
};

export default function ProductList({ numberFeaturedProducts }: Props) {
  let filteredItems;
  if (numberFeaturedProducts) {
    filteredItems = items.filter((item) => item.id <= numberFeaturedProducts);
  } else {
    filteredItems = items;
  }
  return (
    <>
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="transition duration-300 ease-in border-2 border-black/25 hover:border-black dark:border-stone-400/25 dark:hover:border-stone-400 flex flex-col justify-between"
        >
          <Link className="p-0" href={`#${item.id}`}>
            <Image
              className="w-full h-auto"
              src={`/products/${item.img}`}
              alt={item.description}
              width={0}
              height={0}
              sizes="100vw"
            />
            <div className="pt-4 bottom-0 text-center">
              <p className="text-xl font-light">{item.description}</p>
              <p className="pt-2 text-2xl font-semibold">{item.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

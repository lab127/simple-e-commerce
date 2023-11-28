import FeaturedProducts from "@/components/FeaturedProducts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-7 py-4">
        <Hero />
        <FeaturedProducts />
      </main>
    </>
  );
}

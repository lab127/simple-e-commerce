import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto px-7 py-4">
        <Hero />
      </section>
    </>
  );
}

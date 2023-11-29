import ProductList from "./ProductList";

export default function FeaturedProducts() {
  return (
    <div className="py-10">
      <h2>Featured Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductList numberFeaturedProducts={8} />
      </div>
    </div>
  );
}

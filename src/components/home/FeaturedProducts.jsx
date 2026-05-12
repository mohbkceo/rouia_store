import { useProducts } from "../../hooks/useProducts.js";
import ProductCard from "../product/ProductCard.jsx";
import Loader from "../common/Loader.jsx";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  const { products, loading } = useProducts(8);

  if (loading) return <Loader />;
  if (!products.length) return null;

  return (
    <section className="px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-brand">Featured Products</h2>
        <Link to="/collections/all" className="text-sm text-brand/50 hover:text-brand transition-colors">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

import Hero from "../components/home/Hero.jsx";
import CategoriesGrid from "../components/home/CategoriesGrid.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 py-4">
      <Hero />
      <CategoriesGrid />
      <FeaturedProducts />
    </div>
  );
}

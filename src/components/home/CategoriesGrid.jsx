import { useCollections } from "../../hooks/useCollections.js";
import CategoryCard from "../category/CategoryCard.jsx";
import Loader from "../common/Loader.jsx";

export default function CategoriesGrid() {
  const { collections, loading } = useCollections(6);

  if (loading) return <Loader />;
  if (!collections.length) return null;

  return (
    <section className="px-4">
      <h2 className="font-display text-2xl font-bold text-brand mb-6">Acheter par catégorie</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {collections.map((col, i) => (
          <CategoryCard key={col.id} collection={col} index={i} />
        ))}
      </div>
    </section>
  );
}

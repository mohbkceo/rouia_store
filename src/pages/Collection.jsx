import { useParams } from "react-router-dom";

import { useCollection, useCollections } from "../hooks/useCollections.js";

import ProductCard from "../components/product/ProductCard.jsx";
import CollectionCard from "../components/collection/CollectionCard.jsx";

import Loader from "../components/common/Loader.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

export default function Collection() {
  const { handle = "all" } = useParams();

 
  if (handle === "all") {
    const {
      collections,
      loading,
      error,
    } = useCollections(100);

    if (loading) return <Loader />;

    if (error) {
      return (
        <EmptyState
          title="Collections non trouvées"
        />
      );
    }

    if (!collections?.length) {
      return (
        <EmptyState
          title="Aucune collection pour le moment"
        />
      );
    }

    

    return (
      <section className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-brand/40">
            Explorer
          </p>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand mt-2">
            Toutes les collections
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}
        </div>
      </section>
    );
  }

  
  const {
    collection,
    loading,
    error,
  } = useCollection(handle);

 

  if (loading) return <Loader />;

  if (error || !collection) {
    return (
      <EmptyState
        title="Collection non trouvée"
      />
    );
  }

  const products =
    collection.products?.edges?.map(
      (e) => e.node
    ) || [];

    

  return (
    <section className="px-4 md:px-6 py-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="font-display text-4xl font-bold text-brand">
          {collection.title}
        </h1>

        {collection.description && (
          <p className="mt-3 text-brand/60 max-w-2xl">
            {collection.description}
          </p>
        )}
      </div>

      {products.length === 0 ? (
        <EmptyState
          title="Aucun produit trouvé"
        />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSearch } from "../hooks/useProducts.js";
import ProductCard from "../components/product/ProductCard.jsx";
import Loader from "../components/common/Loader.jsx";
import EmptyState from "../components/common/EmptyState.jsx";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [input, setInput] = useState(searchParams.get("q") || "");
  const query = searchParams.get("q") || "";
  const { results, loading } = useSearch(query);

  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) setSearchParams({ q: input.trim() });
  }

  return (
    <div className="px-4 py-8">
      <h1 className="font-display text-2xl font-bold text-brand mb-6">Search</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-8 max-w-lg">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for shoes..."
          className="flex-1 border border-brand/20 rounded-full px-5 py-3 text-sm outline-none focus:border-brand/50 transition-colors"
        />
        <button type="submit" className="bg-brand text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-brand/90 transition-colors">
          Search
        </button>
      </form>

      {loading && <Loader />}

      {!loading && query && results.length === 0 && (
        <EmptyState title={`No results for "${query}"`} subtitle="Try a different keyword." />
      )}

      {!loading && results.length > 0 && (
        <>
          <p className="text-sm text-brand/40 mb-4">{results.length} résultats pour "{query}"</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </>
      )}
    </div>
  );
}

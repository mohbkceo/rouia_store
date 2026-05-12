import { useState, useEffect } from "react";
import { fetchProducts, fetchProduct, searchProducts } from "../services/productService.js";

export function useProducts(limit = 12) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts(limit)
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [limit]);

  return { products, loading, error };
}

export function useProduct(handle) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!handle) return;
    fetchProduct(handle)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [handle]);

  return { product, loading, error };
}

export function useSearch(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) { setResults([]); return; }
    setLoading(true);
    searchProducts(query)
      .then(setResults)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [query]);

  return { results, loading, error };
}

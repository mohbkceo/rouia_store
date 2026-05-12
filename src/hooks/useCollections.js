import { useState, useEffect } from "react";
import { fetchCollections, fetchCollection } from "../services/collectionService.js";

export function useCollections(limit = 8) {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCollections(limit)
      .then(setCollections)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [limit]);

  return { collections, loading, error };
}

export function useCollection(handle) {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!handle) return;
    fetchCollection(handle)
      .then(setCollection)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [handle]);

  return { collection, loading, error };
}

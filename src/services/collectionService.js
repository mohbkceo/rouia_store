import { shopifyFetch } from "../api/shopify.js";
import { COLLECTIONS_QUERY, COLLECTION_PRODUCTS_QUERY } from "../api/queries.js";

export async function fetchCollections(first = 8) {
  const data = await shopifyFetch({ query: COLLECTIONS_QUERY, variables: { first } });
  return data.collections.edges.map((e) => e.node);
}

export async function fetchCollection(handle, first = 20) {
  const data = await shopifyFetch({ query: COLLECTION_PRODUCTS_QUERY, variables: { handle, first } });
  return data.collection;
}

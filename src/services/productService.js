import { shopifyFetch } from "../api/shopify.js";
import { PRODUCTS_QUERY, PRODUCT_QUERY, SEARCH_QUERY } from "../api/queries.js";

export async function fetchProducts(first = 12) {
  const data = await shopifyFetch({ query: PRODUCTS_QUERY, variables: { first } });
  return data.products.edges.map((e) => e.node);
}

export async function fetchProduct(handle) {
  const data = await shopifyFetch({ query: PRODUCT_QUERY, variables: { handle } });
  return data.productByHandle;
}

export async function searchProducts(query, first = 12) {
  const data = await shopifyFetch({ query: SEARCH_QUERY, variables: { query, first } });
  return data.products.edges.map((e) => e.node);
}

const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_DOMAIN || "your-store.myshopify.com";
const SHOPIFY_TOKEN = import.meta.env.VITE_SHOPIFY_TOKEN || "your-storefront-access-token";
const API_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

export async function shopifyFetch({ query, variables = {} }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  

  if (!res.ok) {
    throw new Error(`Shopify API error: ${res.status}`);
  }

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

export const PRODUCTS_QUERY = `
query Products($first: Int!) {
  products(first: $first) {
    edges {
      node {
        id
        handle
        title
        descriptionHtml

        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }

        compareAtPriceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }

        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }

        variants(first: 10) {
          edges {
            node {
              id
              title
              availableForSale

              selectedOptions {
                name
                value
              }
            }
          }
        }
      }
    }
  }
}
`;

export const PRODUCT_QUERY = `
  query Product($handle: String!) {
    productByHandle(handle: $handle) {
      id
      handle
      title
      descriptionHtml

      images(first: 10) {
        edges {
          node {
            url
            altText
          }
        }
      }

      variants(first: 20) {
        edges {
          node {
            id
            title
            availableForSale
            selectedOptions {
              name
              value
            }
            price {
              amount
              currencyCode
            }
            compareAtPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;


export const COLLECTIONS_QUERY = `
  query Collections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id handle title description
          image { url altText }
        }
      }
    }
  }
`;

export const COLLECTION_PRODUCTS_QUERY = `
query Collection($handle: String!, $first: Int!) {
  collection(handle: $handle) {
    id
    handle
    title
    description

    image {
      url
      altText
    }

    products(first: $first) {
      edges {
        node {
          id
          handle
          title

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }

          images(first: 1) {
            edges {
              node {
                url
                altText
              }
            }
          }
        }
      }
    }
  }
}
`;

export const SEARCH_QUERY = `
  query Search($query: String!, $first: Int!) {
    products(first: $first, query: $query) {
      edges {
        node {
          id handle title
          priceRange { minVariantPrice { amount currencyCode } }
          images(first: 1) { edges { node { url altText } } }
        }
      }
    }
  }
`;

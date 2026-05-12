import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice.js";

export default function ProductCard({ product }) {
  const image = product.images?.edges?.[0]?.node;
  const price = product.priceRange?.minVariantPrice;
  const compareAt = product.compareAtPriceRange?.minVariantPrice;
  const hasDiscount = compareAt && parseFloat(compareAt.amount) > parseFloat(price?.amount);

  return (
    <Link
        to={`/products/${product.handle}`}
        className="group block w-full"
      >
      <div className="relative overflow-hidden rounded-2xl bg-brand/4 aspect-[3/4] sm:aspect-[4/5]">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || product.title}
            className="
              h-full w-full object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-brand/20">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2 1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        )}

        {hasDiscount && (
          <span
            className="
              absolute left-2 top-2 sm:left-3 sm:top-3
              rounded-full bg-accent
              px-2 py-1
              text-[9px] sm:text-[10px]
              font-bold uppercase tracking-wider
              text-white
            "
          >
            Sale
          </span>
        )}
      </div>

  <div className="mt-2 sm:mt-3 px-1">
    <h3
      className="
        line-clamp-2
        text-[13px] sm:text-sm md:text-base
        font-medium
        leading-snug
        text-brand
      "
    >
      {product.title}
    </h3>

    <div className="mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
      {price && (
        <span className="text-sm sm:text-base font-semibold text-brand">
          {formatPrice(price.amount, price.currencyCode)}
        </span>
      )}

      {hasDiscount && (
        <span className="text-[11px] sm:text-xs text-brand/40 line-through">
          {formatPrice(compareAt.amount, compareAt.currencyCode)}
        </span>
      )}
    </div>
  </div>
</Link>
  );
}

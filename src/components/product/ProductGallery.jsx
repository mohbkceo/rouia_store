import { useState } from "react";

export default function ProductGallery({ images = [] }) {
  const [selected, setSelected] = useState(0);

  if (!images.length) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-2xl sm:rounded-3xl bg-brand/5 text-brand/20">
        <svg className="h-14 w-14 sm:h-16 sm:w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2 1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  const main = images[selected] || images[0];

  return (
    <div className="flex flex-col gap-3 sm:gap-4">
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl bg-brand/5 aspect-square">
        <img
          src={main.url}
          alt={main.altText || "Product"}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div
          className="
            grid grid-cols-4 sm:grid-cols-5 md:grid-cols-4 gap-2
          "
        >
          {images.map((img, i) => (
            <button
              key={`${img.url}-${i}`}
              type="button"
              onClick={() => setSelected(i)}
              className={`
                aspect-square
                w-full
                overflow-hidden
                rounded-xl
                border-2
                ${
                  i === selected
                    ? "border-brand"
                    : "border-transparent opacity-60 hover:opacity-100"
                }
              `}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={img.url}
                alt={img.altText || `Product image ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
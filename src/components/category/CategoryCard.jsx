import { Link } from "react-router-dom";

const FALLBACK_COLORS = [
  "bg-stone-100", "bg-zinc-100", "bg-slate-100",
  "bg-neutral-200", "bg-amber-50", "bg-rose-50",
];

export default function CategoryCard({ collection, index = 0 }) {
  const bg = FALLBACK_COLORS[index % FALLBACK_COLORS.length];
  const image = collection.image;

  return (
    <Link
      to={`/collections/${collection.handle}`}
      className="group relative overflow-hidden rounded-2xl aspect-square flex items-end p-4"
    >
      {image ? (
        <img
          src={image.url}
          alt={image.altText || collection.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 ${bg}`} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <span className="relative font-display font-semibold text-white text-lg leading-tight z-10">
        {collection.title}
      </span>
    </Link>
  );
}

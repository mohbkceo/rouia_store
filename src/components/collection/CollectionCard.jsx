import { Link } from "react-router-dom";

export default function CollectionCard({
  collection,
}) {
  return (
    <Link
      to={`/collections/${collection.handle}`}
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        aspect-[4/5]
        bg-brand/5
      "
    >
      {collection.image && (
        <img
          src={collection.image.url}
          alt={collection.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-0 left-0 p-6">
        <h2 className="font-display text-2xl font-bold text-white">
          {collection.title}
        </h2>

        {collection.description && (
          <p className="text-white/70 text-sm mt-2 line-clamp-2">
            {collection.description}
          </p>
        )}
      </div>
    </Link>
  );
}
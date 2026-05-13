import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-brand text-white rounded-3xl mx-4 mt-4 overflow-hidden">
      <div className="max-w-6xl mx-auto px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 text-center md:text-left">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Nouveautés</p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            Découvrez<br />du Nouveau.
          </h1>
          <p className="text-white/60 text-base mb-8 max-w-sm mx-auto md:mx-0">
            Découvrez des chaussures premium conçues pour le confort, le style et toutes les occasions.
          </p>
          <Link
            to="/collections/all"
            className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            Acheter maintenant
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 bg-white/10 rounded-full flex items-center justify-center text-8xl">
            👟
          </div>
        </div>
      </div>
    </section>
  );
}
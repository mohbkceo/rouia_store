import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand text-white/70 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-2xl font-bold text-white mb-3">
            HK.3.5<span className="text-accent">.</span>
          </div>

          <p className="text-sm leading-relaxed">
            Des chaussures premium pour chaque étape de votre parcours.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Boutique
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/collections/all"
                className="hover:text-white transition-colors"
              >
                Tous les produits
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Aide
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/shipping"
                className="hover:text-white transition-colors"
              >
                Livraison
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
            Légal
          </h4>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="/privacy_policies"
                className="hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
            </li>

            <li>
              <a
                href="/privacy_policies"
                className="hover:text-white transition-colors"
              >
                Conditions d’utilisation
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/30">
        © {new Date().getFullYear()} HK.3.5. Tous droits réservés.
      </div>
    </footer>
  );
}
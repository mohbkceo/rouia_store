import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/collections/all", label: "Shop All" },
  { to: "/search", label: "Search" },
  { to: "/tracking", label: "Order Tracking" },
  { to: "/shipping", label: "Shipping Prices" },
  { to: "/contact", label: "Contact" },
];

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 h-16 border-b border-brand/8">
          <span className="font-display font-bold text-lg">Menu</span>
          <button onClick={onClose} className="p-2 hover:bg-brand/5 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M18 6 6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={onClose}
              className="py-3 px-4 rounded-xl text-brand font-medium hover:bg-brand/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="px-6 pb-8">
          <p className="text-xs text-brand/30 text-center">© {new Date().getFullYear()} HK.3.5</p>
        </div>
      </div>
    </div>
  );
}

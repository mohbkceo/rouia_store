import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center gap-6">
      <div className="font-display text-8xl font-bold text-brand/10">404</div>
      <div>
        <h1 className="font-display text-2xl font-bold text-brand mb-2">Page Not Found</h1>
        <p className="text-brand/50 text-sm">Looks like this page stepped out.</p>
      </div>
      <Link
        to="/"
        className="bg-brand text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-brand/90 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

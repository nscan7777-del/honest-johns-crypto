import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-amber-200/40 bg-amber-50/20 text-amber-900">
      <div className="mx-auto max-w-5xl px-4 py-6 text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="opacity-80">
          © {new Date().getFullYear()} Honest John’s Crypto World
        </p>

        <nav className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/token-maker" className="hover:underline">Build Token</Link>
          <Link to="/my-drafts" className="hover:underline">My Drafts</Link>
        </nav>
      </div>
    </footer>
  );
}
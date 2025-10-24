import { Link, useLocation } from "react-router-dom";

function NavLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={[
        "px-3 py-2 rounded-lg text-sm font-medium",
        active
          ? "bg-amber-600 text-white"
          : "text-amber-900/80 hover:bg-amber-100"
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-200/60 bg-amber-50/70 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight">Honest John’s</span>
          <span className="hidden text-sm text-amber-900/70 sm:inline">Crypto World</span>
        </Link>

        <nav className="flex items-center gap-2">
          <NavLink to="/">Build Token</NavLink>
          <NavLink to="/create-token">Create Token</NavLink>
          <NavLink to="/my-drafts">My Drafts</NavLink>
        </nav>
      </div>
    </header>
  );
}
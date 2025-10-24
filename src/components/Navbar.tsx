// src/components/Navbar.tsx
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const { pathname } = useLocation();

  const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const active = pathname === to;
    return (
      <Link
        to={to}
        className={`text-sm transition-colors hover:text-foreground ${
          active ? "text-foreground font-medium" : "text-muted-foreground"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="font-semibold tracking-tight">
          Honest John’s
        </Link>
        <nav className="hidden gap-6 md:flex">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/token-maker">Build My Token</NavLink>
          <NavLink to="/audit">Get My Audit</NavLink>
        </nav>
        <Button
          size="sm"
          onClick={() => alert("Wallet connect coming soon (UI only).")}
          className="gap-2"
        >
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </header>
  );
}
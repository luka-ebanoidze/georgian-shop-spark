import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3.5 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
            w
          </span>
          <span className="truncate font-display text-lg font-bold tracking-tight text-foreground">
            webio<span className="text-primary">.ge</span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/login"
            className="hidden rounded-xl px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-primary sm:inline-flex"
          >
            შესვლა
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center rounded-xl bg-amber px-4 py-2.5 text-sm font-semibold text-amber-foreground shadow-card transition-transform hover:-translate-y-0.5"
          >
            დაწყება
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="მენიუ"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <ul className="space-y-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                შესვლა
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

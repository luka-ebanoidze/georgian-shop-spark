import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { href: "#shabloni", label: "შაბლონები" },
  { href: "#rogor", label: "როგორ მუშაობს" },
  { href: "#shesadzleblobebi", label: "შესაძლებლობები" },
  { href: "#fasebi", label: "ფასები" },
  { href: "#kitxvebi", label: "კითხვები" },
];

export function NavbarGe() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#zeda" className="flex items-center gap-2.5" aria-label="webio.ge">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground shadow-soft">
            w
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            webio<span className="text-primary">.ge</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="მთავარი">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#fasebi"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            შესვლა
          </a>
          <a
            href="#fasebi"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            დაწყება
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="მენიუ"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col" aria-label="მობილური მენიუ">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#fasebi"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            დაწყება
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}

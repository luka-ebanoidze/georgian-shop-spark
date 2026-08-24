import {
  ArrowRight,
  BadgeCheck,
  CakeSlice,
  Check,
  Coffee,
  Croissant,
  Lock,
  ShoppingBag,
} from "lucide-react";

const products = [
  { icon: Coffee, name: "Flat White", price: "7.50 ₾", bg: "bg-mint" },
  { icon: Croissant, name: "Achma slice", price: "9.00 ₾", bg: "bg-sand" },
  { icon: CakeSlice, name: "Napoleon", price: "6.50 ₾", bg: "bg-peach" },
];

const ticks = [
  "No hidden add-on fees",
  "Cancel anytime",
  "Help from a real person, in Georgian",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Made for Georgia's small businesses
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Your shop, online <span className="text-primary">in one sitting.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Pick a look, add your products, accept BOG &amp; TBC card payments.
              Webio.ge is the radically simple store builder for cafes, markets
              and small shops — no tech skills, no gotcha pricing.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Start free for 3 months
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#templates"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-display text-sm font-bold text-foreground transition-colors hover:bg-secondary"
              >
                Browse templates
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {ticks.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <StorefrontMockup />
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Works with
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            Bank of Georgia
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            TBC
            <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
              soon
            </span>
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            Wolt-ready delivery notes
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            yourshop.webio.ge
          </span>
        </div>
      </div>
    </section>
  );
}

function StorefrontMockup() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-border bg-muted/70 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
          </div>
          <div className="flex flex-1 justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <Lock className="h-3 w-3 text-primary" />
              kavali.webio.ge
            </span>
          </div>
          <span className="w-10" />
        </div>

        {/* Storefront */}
        <div className="space-y-4 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                K
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight">
                  Kavali Café
                </p>
                <p className="text-xs text-muted-foreground">
                  Tbilisi · Pickup &amp; Wolt
                </p>
              </div>
            </div>
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card">
              <ShoppingBag className="h-4 w-4 text-foreground" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                3
              </span>
            </div>
          </div>

          <div className="rounded-xl bg-mint p-4">
            <p className="font-display text-base font-bold leading-snug text-pine">
              Fresh coffee &amp; khachapuri, every morning
            </p>
            <p className="mt-1 text-xs text-pine/70">
              Order ahead — ready in 10 minutes
            </p>
            <span className="mt-3 inline-flex items-center rounded-full bg-pine px-3 py-1.5 text-xs font-semibold text-pine-foreground">
              Browse menu
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-card"
              >
                <div className={`flex h-16 items-center justify-center ${p.bg}`}>
                  <p.icon className="h-6 w-6 text-pine/70" />
                </div>
                <div className="p-2">
                  <p className="truncate text-xs font-semibold">{p.name}</p>
                  <p className="text-xs font-bold text-primary">{p.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between rounded-xl border border-border bg-secondary/60 px-4 py-3">
            <div>
              <p className="text-xs text-muted-foreground">Total</p>
              <p className="font-display text-sm font-bold">23.00 ₾</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
              Pay with BOG
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -top-6 right-2 animate-float rounded-xl border border-border bg-card px-4 py-3 shadow-lift sm:-right-8">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint">
            <BadgeCheck className="h-4 w-4 text-primary" />
          </span>
          <div>
            <p className="text-xs font-bold">Order #1042 · Paid</p>
            <p className="text-xs text-muted-foreground">46.50 ₾ via BOG</p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-2 animate-float-delayed rounded-xl border border-border bg-card px-4 py-3 shadow-lift sm:-left-8">
        <p className="text-xs font-bold">Live in one sitting</p>
        <p className="text-xs text-muted-foreground">
          Template · Products · Payments
        </p>
      </div>
    </div>
  );
}

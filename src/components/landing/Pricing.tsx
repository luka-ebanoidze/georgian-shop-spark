import { ArrowRight, Check, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const tiers = [
  {
    name: "Starter",
    price: "29",
    tagline: "Everything a small shop needs to sell online.",
    features: [
      "Up to 50 products, 3 photos each",
      "5–8 curated, foolproof templates",
      "BOG payments (TBC right after)",
      "Free yourshop.webio.ge subdomain",
      "Chat & email support",
    ],
    note: "Available at launch",
    cta: "Start free for 3 months",
    featured: true,
  },
  {
    name: "Standard",
    price: "49",
    tagline: "Room to grow and make it yours.",
    features: [
      "Up to 300 products",
      "Full template library + component customization",
      "BOG + TBC payments",
      "Custom domain, first year free",
      "Priority chat & phone support",
    ],
    note: "Phase 2",
    cta: "Choose Standard",
    featured: false,
  },
  {
    name: "Premium",
    price: "99",
    tagline: "For shops going full-time online.",
    features: [
      "Unlimited products",
      "Everything in Standard + early access",
      "Multi-currency",
      "Custom domain with free renewal",
      "Dedicated onboarding call",
    ],
    note: "Phase 3",
    cta: "Choose Premium",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Pricing"
          title="A fraction of what the others charge"
          desc="One simple monthly price with payments included. No setup fees, no per-sale platform commission, no add-on surprises."
        />
        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border bg-card p-8 ${
                t.featured
                  ? "border-primary shadow-lift ring-1 ring-primary"
                  : "border-border shadow-card"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most popular
                </span>
              )}
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">{t.name}</h3>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    t.featured
                      ? "bg-mint text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {t.note}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
              <p className="mt-6">
                <span className="font-display text-5xl font-bold tracking-tight">
                  {t.price} ₾
                </span>
                <span className="ml-1 text-sm font-medium text-muted-foreground">
                  /month
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={t.featured ? "mailto:hello@webio.ge" : "#faq"}
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  t.featured
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Prices in GEL, billed monthly. Cancel anytime — your storefront stays
          live until the end of the paid period.
        </p>
      </div>
    </section>
  );
}

export function OfferBanner() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-pine px-6 py-16 text-center shadow-lift sm:px-12">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-pine-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pine-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            Founding offer
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-pine-foreground sm:text-4xl">
            Be one of the first 10 shops on Webio.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-pine-foreground/75">
            3 months free on Starter — and a real person builds your store with
            you: products, template, BOG activation. Card on file from day one,
            it only converts to paid if you stay.
          </p>
          <a
            href="mailto:hello@webio.ge"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pine-foreground px-7 py-3.5 font-display text-sm font-bold text-pine transition-transform hover:-translate-y-0.5"
          >
            Claim your spot
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-4 text-xs text-pine-foreground/60">
            No risk. Cancel before month 4 and pay nothing.
          </p>
        </div>
      </div>
    </section>
  );
}

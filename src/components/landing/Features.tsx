import {
  Banknote,
  CreditCard,
  Globe,
  HeartHandshake,
  Images,
  Inbox,
  LayoutTemplate,
  PackagePlus,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    icon: LayoutTemplate,
    title: "Pick a look",
    desc: "Choose from 5–8 ready-made templates built for cafes, markets and boutiques. Set your logo and accent color — the layout stays clean and unbreakable.",
  },
  {
    icon: PackagePlus,
    title: "Add your products",
    desc: "Name, price in lari, a short description and up to 3 photos each. Your storefront updates instantly and looks great on every phone.",
  },
  {
    icon: Banknote,
    title: "Accept payments",
    desc: "Connect Bank of Georgia in a few clicks. Customers pay on the bank's secure page and the money lands straight in your account.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="How it works"
          title="Three steps. One sitting. You're selling."
          desc="No tutorials, no settings maze, no developer needed. If you can post on Facebook, you can run a Webio store."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              <span className="absolute right-6 top-4 font-display text-6xl font-bold text-secondary">
                {i + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mint">
                <s.icon className="h-6 w-6 text-primary" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: CreditCard,
    title: "BOG & TBC payments",
    desc: "Hosted bank checkout — card data never touches Webio. TBC support lands right after launch.",
  },
  {
    icon: Images,
    title: "3 photos per product",
    desc: "Show every angle with a simple photo slider on your storefront. Upload straight from your phone.",
  },
  {
    icon: Inbox,
    title: "A calm order inbox",
    desc: "Every order in one list: received, paid, fulfilled. Nothing more to learn, nothing to misconfigure.",
  },
  {
    icon: Globe,
    title: "Free subdomain",
    desc: "yourshop.webio.ge is included on every plan. Custom domains arrive with Standard and Premium.",
  },
  {
    icon: ShieldCheck,
    title: "Honest pricing",
    desc: "Payments and the essentials are included in the plan. No 150 ₾ “integration add-ons” — ever.",
  },
  {
    icon: HeartHandshake,
    title: "Human onboarding",
    desc: "Stuck? A real person who knows your shop helps you — by chat, email or phone, in Georgian.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Why Webio"
          title="Built for shops too small for the big platforms"
          desc="Full-featured platforms are great if you need ERP sync and a B2B portal. Webio is everything a 15–80 product business actually needs — and nothing it doesn't."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-card transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint">
                <f.icon className="h-5 w-5 text-primary" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Check,
  CreditCard,
  Headphones,
  LayoutTemplate,
  Package,
  Rocket,
  Smartphone,
  Zap,
} from "lucide-react";

import { TemplatePreview } from "@/components/site/TemplatePreview";
import { CtaBand, CtaButton, SectionHeading } from "@/components/site/bits";
import { faqItems, pricingTiers, templates } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "webio.ge — შექმენი ონლაინ მაღაზია ერთ დაწკაპუნებაზე" },
      {
        name: "description",
        content:
          "ქართული ონლაინ მაღაზიის კონსტრუქტორი მცირე ბიზნესისთვის: მზა შაბლონები, BOG და TBC გადახდები, კოდის გარეშე. 14 დღე უფასოდ.",
      },
      { property: "og:title", content: "webio.ge — შექმენი ონლაინ მაღაზია ერთ დაწკაპუნებაზე" },
      {
        property: "og:description",
        content: "მზა შაბლონები, ბარათით გადახდა და ქართული მხარდაჭერა. 14 დღე უფასოდ.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const fanned = [
  { t: templates[0]!, rot: "-rotate-12", pos: "left-0 top-10 z-10", w: "w-[62%]" },
  { t: templates[2]!, rot: "-rotate-6", pos: "left-[14%] top-4 z-20", w: "w-[62%]" },
  { t: templates[6]!, rot: "rotate-3", pos: "left-[28%] top-8 z-30", w: "w-[62%]" },
  { t: templates[4]!, rot: "rotate-12", pos: "left-[40%] top-16 z-40", w: "w-[62%]" },
];

const steps = [
  {
    icon: LayoutTemplate,
    title: "აირჩიე შაბლონი",
    text: "ათეულობით მზა დიზაინი კაფის, მარკეტის, მაღაზიისა და ბუტიკისთვის.",
  },
  {
    icon: Package,
    title: "დაამატე პროდუქტები",
    text: "სურათი, ფასი, აღწერა — ატვირთე რამდენიმე წუთში, კოდის გარეშე.",
  },
  {
    icon: CreditCard,
    title: "დაიწყე გაყიდვა",
    text: "ჩართე ბარათით გადახდა და მიიღე შეკვეთები პირდაპირ ტელეფონზე.",
  },
];

const features = [
  {
    icon: CreditCard,
    title: "BOG და TBC გადახდები",
    text: "ბარათით გადახდა ჩაშენებულია — თანხა პირდაპირ შენს ანგარიშზე ჩადის.",
  },
  {
    icon: Zap,
    title: "კოდი არ სჭირდება",
    text: "ყველაფერი მარტივი პანელიდან იმართება, პროგრამისტის გარეშე.",
  },
  {
    icon: Smartphone,
    title: "მობილურზე მორგებული",
    text: "შენი მაღაზია ლამაზად გამოიყურება ტელეფონზეც და კომპიუტერზეც.",
  },
  {
    icon: Headphones,
    title: "ქართული მხარდაჭერა",
    text: "ცოცხალი ადამიანი გიპასუხებს ქართულად — ტელეფონით ან მესენჯერით.",
  },
  {
    icon: Rocket,
    title: "სწრაფი გაშვება",
    text: "საშუალოდ 30 წუთი და მაღაზია უკვე მუშაობს.",
  },
  {
    icon: LayoutTemplate,
    title: "მზა შაბლონები",
    text: "დიზაინი უკვე გაკეთებულია — შენ მხოლოდ შიგთავსს ცვლი.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl overflow-x-clip px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-semibold text-primary">
              ქართული მცირე ბიზნესისთვის
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              შექმენი შენი ონლაინ მაღაზია ერთი დაწკაპუნებით
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              მარტივი კონსტრუქტორი ქართულ ენაზე — მზა შაბლონები და ბარათით გადახდა BOG და TBC
              ბანკებით.
            </p>
            <div className="mt-9">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-2xl bg-amber px-10 py-5 font-display text-lg font-bold text-amber-foreground shadow-lift transition-transform hover:-translate-y-1"
              >
                დაწყება
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              უფასო 14 დღე, ბარათი არ არის საჭირო
            </p>
          </div>

          {/* fanned template cards */}
          <div className="relative h-[300px] sm:h-[420px] lg:h-[460px]">
            {fanned.map((c, i) => (
              <div
                key={c.t.slug}
                className={`absolute ${c.pos} ${c.w} ${c.rot} aspect-[4/3] origin-bottom rounded-2xl shadow-lift transition-transform duration-300 hover:-translate-y-3`}
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                <TemplatePreview category={c.t.category} title={c.t.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="სამი ნაბიჯი"
            title="როგორ მუშაობს"
            subtitle="დაწყებიდან პირველ გაყიდვამდე — ერთ ჯდომაზე."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEMPLATES */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="შაბლონები"
          title="აირჩიე მზა დიზაინი"
          subtitle="ყველა შაბლონი მორგებულია ქართულ ბიზნესზე და მობილურზე."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.slice(0, 6).map((t) => (
            <article
              key={t.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-card transition-shadow hover:shadow-lift"
            >
              <div className="aspect-[4/3]">
                <TemplatePreview category={t.category} title={t.name} />
              </div>
              <div className="mt-4 flex-1">
                <h3 className="font-display text-base font-semibold text-foreground">{t.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
              </div>
              <Link
                to="/signup"
                className="mt-4 inline-flex items-center justify-center rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                გამოიყენე ეს შაბლონი
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CtaButton to="/templates" variant="outline">
            ყველა შაბლონი
          </CtaButton>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow="შესაძლებლობები"
            title="ყველაფერი, რაც გაყიდვისთვის გჭირდება"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-3xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-mint">
                  <f.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="ფასები"
          title="მარტივი და გამჭვირვალე"
          subtitle="ყოველთვიური გადახდა, ფარული საკომისიოს გარეშე."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col rounded-3xl border p-8 ${
                tier.highlighted
                  ? "border-primary bg-card shadow-lift"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-amber px-3 py-1 text-xs font-bold text-amber-foreground">
                  პოპულარული
                </span>
              )}
              <h3 className="font-display text-lg font-bold text-foreground">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{tier.summary}</p>
              <p className="mt-6 font-display text-4xl font-bold text-foreground">
                {tier.price}₾
                <span className="text-sm font-medium text-muted-foreground"> / თვე</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {tier.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <CtaButton
                to="/signup"
                variant={tier.highlighted ? "amber" : "outline"}
                className="mt-8 w-full"
              >
                არჩევა
              </CtaButton>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading eyebrow="კითხვები" title="ხშირად დასმული კითხვები" />
          <Accordion type="single" collapsible className="mt-10">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

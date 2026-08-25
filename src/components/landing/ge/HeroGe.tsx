import { ArrowRight, Check, CreditCard, Sparkles } from "lucide-react";
import templateCafe from "@/assets/template-cafe.jpg";
import templateMarket from "@/assets/template-market.jpg";
import templateBoutique from "@/assets/template-boutique.jpg";

const ticks = [
  "დამალული დანამატების გარეშე",
  "გაუქმება ნებისმიერ დროს",
  "დახმარება ქართულად",
];

const stack = [
  {
    src: templateBoutique,
    alt: "ბუტიკის მაღაზიის შაბლონი webio.ge-ზე",
    className:
      "left-0 top-10 w-[62%] -rotate-6 z-10 hidden sm:block",
    label: "ბუტიკი",
  },
  {
    src: templateMarket,
    alt: "სასურსათო მარკეტის შაბლონი webio.ge-ზე",
    className: "left-[14%] top-4 w-[64%] -rotate-2 z-20 hidden sm:block",
    label: "მარკეტი",
  },
];

export function HeroGe() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-dots [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          {/* Left: text + start button */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-secondary-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              პირველი 10 მაღაზიისთვის — 3 თვე უფასოდ
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              შენი მაღაზია ონლაინ —{" "}
              <span className="text-primary">ერთ ჯერზე.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              აირჩიე შაბლონი, დაამატე პროდუქტები და მიიღე ბარათით გადახდები
              საქართველოს ბანკიდან. webio.ge არის მაქსიმალურად მარტივი
              ონლაინ-მაღაზიის კონსტრუქტორი კაფეების, მარკეტებისა და პატარა
              მაღაზიებისთვის.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#fasebi"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-base font-bold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                დაწყება
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#shabloni"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 font-display text-base font-bold text-foreground transition-colors hover:bg-secondary"
              >
                შაბლონების ნახვა
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

          {/* Right: stacked template screenshots */}
          <div className="relative mx-auto h-[420px] w-full max-w-xl sm:h-[520px]">
            {stack.map((s) => (
              <figure
                key={s.label}
                className={`absolute overflow-hidden rounded-2xl border border-border bg-card shadow-lift ${s.className}`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-[300px] w-full object-cover object-top sm:h-[380px]"
                />
              </figure>
            ))}

            {/* Front card */}
            <figure className="absolute left-0 top-0 z-30 w-full overflow-hidden rounded-2xl border border-border bg-card shadow-lift sm:left-[30%] sm:top-0 sm:w-[70%]">
              <div className="flex items-center gap-2 border-b border-border bg-muted/70 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="ml-2 truncate text-[11px] font-medium text-muted-foreground">
                  kavali.webio.ge
                </span>
              </div>
              <img
                src={templateCafe}
                alt="კაფეს ონლაინ მაღაზიის შაბლონი webio.ge-ზე"
                width={1024}
                height={1280}
                className="h-[340px] w-full object-cover object-top sm:h-[420px]"
              />
            </figure>

            <div className="absolute -bottom-2 left-2 z-40 flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-lift sm:left-0">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint">
                <CreditCard className="h-4 w-4 text-primary" />
              </span>
              <div>
                <p className="text-xs font-bold">შეკვეთა #1042 · გადახდილია</p>
                <p className="text-xs text-muted-foreground">
                  46.50 ₾ · საქართველოს ბანკი
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-border pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            მუშაობს
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            საქართველოს ბანკი
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            თიბისი
            <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-foreground">
              მალე
            </span>
          </span>
          <span className="font-display text-sm font-bold text-foreground/70">
            უფასო მისამართი yourshop.webio.ge
          </span>
        </div>
      </div>
    </section>
  );
}

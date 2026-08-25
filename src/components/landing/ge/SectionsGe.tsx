import {
  ArrowRight,
  Banknote,
  ChevronDown,
  CreditCard,
  Globe,
  HeartHandshake,
  Images,
  Inbox,
  LayoutTemplate,
  PackagePlus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import templateCafe from "@/assets/template-cafe.jpg";
import templateMarket from "@/assets/template-market.jpg";
import templateBoutique from "@/assets/template-boutique.jpg";

function Header({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

/* ---------------- Templates ---------------- */

const templates = [
  {
    src: templateCafe,
    name: "კაფე",
    tag: "მენიუ და ადგილზე აღება",
    tint: "bg-mint",
  },
  {
    src: templateMarket,
    name: "მარკეტი",
    tag: "სურსათი და ბოსტნეული",
    tint: "bg-sand",
  },
  {
    src: templateBoutique,
    name: "ბუტიკი",
    tag: "ტანსაცმელი და საჩუქრები",
    tint: "bg-blush",
  },
];

export function TemplatesGe() {
  return (
    <section id="shabloni" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Header
          eyebrow="შაბლონები"
          title="მზა დიზაინი, რომელიც შენს ბიზნესს უხდება"
          desc="აირჩიე შაბლონი, დაამატე ლოგო და ფერი — დანარჩენს ჩვენ ვუზრუნველყოფთ. მაღაზია ყოველთვის სუფთად და სწორად გამოიყურება, ტელეფონზეც."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {templates.map((t) => (
            <div
              key={t.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`p-4 ${t.tint}`}>
                <div className="overflow-hidden rounded-xl border border-border/60 bg-card">
                  <img
                    src={t.src}
                    alt={`${t.name} შაბლონი webio.ge-ზე`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="h-56 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h3 className="font-display text-base font-bold">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  არჩევა
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          სულ 5–8 შაბლონი გაშვებისას. ახლები რეგულარულად ემატება.
        </p>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const steps = [
  {
    icon: LayoutTemplate,
    title: "აირჩიე დიზაინი",
    desc: "აირჩიე მზა შაბლონი კაფეების, მარკეტებისა და ბუტიკებისთვის. დაამატე ლოგო და ძირითადი ფერი — განლაგება უცვლელი და მოწესრიგებული რჩება.",
  },
  {
    icon: PackagePlus,
    title: "დაამატე პროდუქტები",
    desc: "სახელი, ფასი ლარში, მოკლე აღწერა და 3-მდე ფოტო. მაღაზია მაშინვე განახლდება და ყველა ტელეფონზე კარგად გამოიყურება.",
  },
  {
    icon: Banknote,
    title: "მიიღე გადახდები",
    desc: "დააკავშირე საქართველოს ბანკის ბიზნეს-ანგარიში რამდენიმე დაწკაპუნებით. კლიენტი იხდის ბანკის დაცულ გვერდზე, თანხა კი პირდაპირ შენს ანგარიშზე მოდის.",
  },
];

export function HowGe() {
  return (
    <section id="rogor" className="scroll-mt-20 bg-secondary/40 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Header
          eyebrow="როგორ მუშაობს"
          title="სამი ნაბიჯი — და უკვე ყიდი"
          desc="ინსტრუქციების კითხვა და პროგრამისტი არ დაგჭირდება. თუ ფეისბუქზე პოსტს აკეთებ, webio-ს მაღაზიასაც მარტივად მართავ."
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

/* ---------------- Features ---------------- */

const features = [
  {
    icon: CreditCard,
    title: "ბანკის გადახდები",
    desc: "საქართველოს ბანკის დაცული გადახდის გვერდი. ბარათის მონაცემები webio-სთან არ ინახება. თიბისი მალე დაემატება.",
  },
  {
    icon: Images,
    title: "3 ფოტო პროდუქტზე",
    desc: "აჩვენე პროდუქტი ყველა კუთხიდან — ფოტოები სლაიდერად ჩანს. ატვირთვა პირდაპირ ტელეფონიდან.",
  },
  {
    icon: Inbox,
    title: "მარტივი შეკვეთები",
    desc: "ყველა შეკვეთა ერთ სიაში: მიღებული, გადახდილი, შესრულებული. ზედმეტი პარამეტრები არ არის.",
  },
  {
    icon: Globe,
    title: "უფასო მისამართი",
    desc: "yourshop.webio.ge შედის ყველა პაკეტში. საკუთარი დომენი Standard-სა და Premium-ში.",
  },
  {
    icon: ShieldCheck,
    title: "გამჭვირვალე ფასი",
    desc: "გადახდები და ყველა საბაზისო ფუნქცია პაკეტში შედის. 150 ₾-იანი „დანამატები“ არ არსებობს.",
  },
  {
    icon: HeartHandshake,
    title: "ცოცხალი დახმარება",
    desc: "გაგიჭირდა? დაგეხმარება ნამდვილი ადამიანი — ჩატით, მეილით ან ტელეფონით, ქართულად.",
  },
];

export function FeaturesGe() {
  return (
    <section id="shesadzleblobebi" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Header
          eyebrow="შესაძლებლობები"
          title="ყველაფერი, რაც პატარა მაღაზიას სჭირდება"
          desc="არც ერთი ზედმეტი ფუნქცია, რომლისთვისაც ყოველთვიურად გადაიხდიდი. 15–80 პროდუქტიან ბიზნესზე გათვლილი."
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

/* ---------------- Pricing ---------------- */

const tiers = [
  {
    name: "Starter",
    price: "29",
    tagline: "ყველაფერი, რომ პატარა მაღაზიამ ონლაინ გაყიდვა დაიწყოს.",
    features: [
      "50-მდე პროდუქტი, 3 ფოტო თითოეულზე",
      "5–8 მზა შაბლონი",
      "საქართველოს ბანკის გადახდები",
      "უფასო მისამართი yourshop.webio.ge",
      "მხარდაჭერა ჩატით და მეილით",
    ],
    note: "ხელმისაწვდომია",
    cta: "დაწყება — 3 თვე უფასოდ",
    featured: true,
  },
  {
    name: "Standard",
    price: "49",
    tagline: "მეტი სივრცე ზრდისთვის და დიზაინის მორგებისთვის.",
    features: [
      "300-მდე პროდუქტი",
      "სრული შაბლონების ბიბლიოთეკა და რედაქტირება",
      "საქართველოს ბანკი + თიბისი",
      "საკუთარი დომენი, პირველი წელი უფასოდ",
      "პრიორიტეტული მხარდაჭერა და ტელეფონი",
    ],
    note: "მეორე ეტაპი",
    cta: "Standard-ის არჩევა",
    featured: false,
  },
  {
    name: "Premium",
    price: "99",
    tagline: "მაღაზიებისთვის, რომლებიც სრულად ონლაინ გადავიდნენ.",
    features: [
      "ულიმიტო პროდუქტები",
      "ყველაფერი Standard-იდან + ახალი ფუნქციები პირველად",
      "რამდენიმე ვალუტა",
      "საკუთარი დომენი უფასო განახლებით",
      "ინდივიდუალური დანერგვის ზარი",
    ],
    note: "მესამე ეტაპი",
    cta: "Premium-ის არჩევა",
    featured: false,
  },
];

export function PricingGe() {
  return (
    <section id="fasebi" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Header
          eyebrow="ფასები"
          title="გაცილებით იაფი, ვიდრე მოელოდი"
          desc="ერთი მარტივი თვიური ფასი, გადახდები კი უკვე შიგნით. დაყენების საფასური და ჩვენი კომისია გაყიდვაზე არ არის."
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
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  ყველაზე პოპულარული
                </span>
              )}
              <div className="flex items-center justify-between gap-2">
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
                  /თვე
                </span>
              </p>
              <ul className="mt-7 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@webio.ge"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-display text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                  t.featured
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-card text-foreground hover:bg-secondary"
                }`}
              >
                {t.cta}
                <ArrowRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          ფასები ლარში, თვიური გადახდით. გააუქმე ნებისმიერ დროს — მაღაზია
          გადახდილი პერიოდის ბოლომდე მუშაობს.
        </p>
      </div>
    </section>
  );
}

/* ---------------- Offer ---------------- */

export function OfferGe() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-pine px-6 py-16 text-center shadow-lift sm:px-12">
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-pine-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pine-foreground">
            <Sparkles className="h-3.5 w-3.5" />
            სპეციალური შემოთავაზება
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-pine-foreground sm:text-4xl">
            გახდი webio.ge-ის პირველი 10 მაღაზიიდან ერთი
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-pine-foreground/75">
            3 თვე უფასოდ Starter პაკეტზე — და მაღაზიას ნამდვილი ადამიანი
            შენთან ერთად ააწყობს: პროდუქტები, შაბლონი, ბანკის გადახდების
            აქტივაცია.
          </p>
          <a
            href="mailto:hello@webio.ge"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pine-foreground px-8 py-4 font-display text-base font-bold text-pine transition-transform hover:-translate-y-0.5"
          >
            დაწყება
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-xs text-pine-foreground/60">
            რისკის გარეშე. გააუქმე მეოთხე თვემდე და არაფერს გადაიხდი.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  {
    q: "მჭირდება ტექნიკური ცოდნა?",
    a: "არა. თუ ფეისბუქზე პოსტს აკეთებ, webio-ს მაღაზიასაც მართავ. აირჩევ შაბლონს, ჩაწერ პროდუქტებს — მზადაა. თუ გაგიჭირდა, ნამდვილი ადამიანი ერთი შეტყობინების დაშორებითაა.",
  },
  {
    q: "როგორ მუშაობს გადახდები?",
    a: "ჩვენ დავაკავშირებთ შენს საქართველოს ბანკის ბიზნეს-ანგარიშს (თიბისი მალე). კლიენტი იხდის ბანკის დაცულ გვერდზე — ბარათის მონაცემები webio-სთან არ ხვდება. ბანკი იღებს ჩვეულ 2–2.5%-ს გაყიდვაზე, webio კი გაყიდვიდან არაფერს იღებს.",
  },
  {
    q: "შემიძლია საკუთარი დომენის გამოყენება?",
    a: "ყველა პაკეტში შედის უფასო yourshop.webio.ge მისამართი. საკუთარი დომენი (yourshop.ge) Standard-სა და Premium-შია — პირველი 10 კლიენტს კი ჩვენ უფასოდ დავუკავშირებთ.",
  },
  {
    q: "რას ნიშნავს „მზა შაბლონი“?",
    a: "შენ ირჩევ დიზაინს, ლოგოსა და ფერს, განლაგება კი ფიქსირებული რჩება. ეს განზრახ არის ასე — სწორედ ამიტომ webio-ს მაღაზია ვერ გამოიყურება არეულად. სრული რედაქტირება Standard პაკეტში ემატება.",
  },
  {
    q: "შემიძლია გაუქმება ნებისმიერ დროს?",
    a: "დიახ. თვიური გადახდა, ხელშეკრულებისა და გასვლის საკომისიოს გარეშე. მაღაზია გადახდილი პერიოდის ბოლომდე მუშაობს და პროდუქტების სიას ნებისმიერ დროს გადმოწერ.",
  },
];

export function FaqGe() {
  return (
    <section id="kitxvebi" className="scroll-mt-20 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Header
          eyebrow="ხშირი კითხვები"
          title="რასაც მფლობელები ყველაზე ხშირად კითხავენ"
          desc="სხვა კითხვა გაქვს? მოგვწერე hello@webio.ge — გიპასუხებს ნამდვილი ადამიანი."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card px-5 py-4 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold sm:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

const columns = [
  {
    title: "პროდუქტი",
    links: [
      { label: "შაბლონები", href: "#shabloni" },
      { label: "როგორ მუშაობს", href: "#rogor" },
      { label: "ფასები", href: "#fasebi" },
      { label: "კითხვები", href: "#kitxvebi" },
    ],
  },
  {
    title: "კომპანია",
    links: [
      { label: "კონტაქტი", href: "mailto:hello@webio.ge" },
      { label: "შემოთავაზება", href: "#fasebi" },
    ],
  },
  {
    title: "იურიდიული",
    links: [
      { label: "წესები", href: "#" },
      { label: "კონფიდენციალურობა", href: "#" },
    ],
  },
];

export function FooterGe() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#zeda" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-lg font-bold text-primary-foreground">
                w
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                webio<span className="text-primary">.ge</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              მარტივი გზა ქართული კაფეების, მარკეტებისა და პატარა მაღაზიებისთვის,
              რომ ონლაინ გაყიდონ.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <span>© 2026 webio.ge — შექმნილია თბილისში</span>
          <span>გადახდები: საქართველოს ბანკი და თიბისი</span>
        </div>
      </div>
    </footer>
  );
}

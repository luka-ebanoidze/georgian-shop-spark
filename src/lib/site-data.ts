export type TemplateCategory = "cafe" | "market" | "shop" | "boutique";

export type TemplateItem = {
  slug: string;
  name: string;
  category: TemplateCategory;
  tagline: string;
};

export const categoryLabels: Record<TemplateCategory | "all", string> = {
  all: "ყველა",
  cafe: "კაფე",
  market: "მარკეტი",
  shop: "მაღაზია",
  boutique: "ბუტიკი",
};

export const templates: TemplateItem[] = [
  { slug: "kavali", name: "ყავალი", category: "cafe", tagline: "კაფესა და საკონდიტროსთვის" },
  { slug: "espresso", name: "ესპრესო", category: "cafe", tagline: "მინიმალური მენიუ და შეკვეთა" },
  { slug: "bazari", name: "ბაზარი", category: "market", tagline: "ბოსტნეული და პროდუქტები" },
  { slug: "kalata", name: "კალათა", category: "market", tagline: "სასურსათო მიწოდებით" },
  { slug: "vitrina", name: "ვიტრინა", category: "shop", tagline: "უნივერსალური მაღაზია" },
  { slug: "tekhnika", name: "ტექნიკა", category: "shop", tagline: "ელექტronika და აქსესუარები" },
  { slug: "ateli", name: "ატელიე", category: "boutique", tagline: "ტანსაცმლისა და ბრენდისთვის" },
  { slug: "nino", name: "ნინო", category: "boutique", tagline: "ხელნაკეთი ნივთებისთვის" },
];

export const pricingTiers = [
  {
    id: "starter",
    name: "Starter",
    price: "29",
    summary: "პატარა ბიზნესის დასაწყებად",
    features: [
      "1 საიტი და 30 პროდუქტი",
      "მზა შაბლონები",
      "ბარათით გადახდა (BOG)",
      "მობილურზე მორგებული",
      "ელფოსტის მხარდაჭერა",
    ],
    highlighted: false,
  },
  {
    id: "standard",
    name: "Standard",
    price: "49",
    summary: "მზარდი მაღაზიისთვის",
    features: [
      "ულიმიტო პროდუქტი",
      "საკუთარი დომენი",
      "BOG და TBC გადახდები",
      "ფასდაკლების კოდები",
      "შეკვეთების მართვა",
      "პრიორიტეტული მხარდაჭერა",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "99",
    summary: "აქტიური გაყიდვებისთვის",
    features: [
      "ყველაფერი Standard-იდან",
      "მიწოდების ინტეგრაცია",
      "სტატისტიკა და ანგარიშები",
      "მრავალი მომხმარებელი",
      "დიზაინის მორგება",
      "პირადი მენეჯერი",
    ],
    highlighted: false,
  },
];

export const faqItems = [
  {
    q: "მჭირდება თუ არა ტექნიკური ცოდნა?",
    a: "არა. ირჩევ შაბლონს, ავსებ პროდუქტებს და საიტი მზადაა. ყველაფერი ქართულ ენაზეა და კოდის წერა არ სჭირდება.",
  },
  {
    q: "როგორ მივიღებ გადახდებს?",
    a: "საქართველოს ბანკის (BOG) ბარათით გადახდა ჩართულია თავიდანვე, TBC-ის ინტეგრაცია კი მალე დაემატება. თანხა პირდაპირ შენს ანგარიშზე ჩაირიცხება.",
  },
  {
    q: "შემიძლია საკუთარი დომენის მიბმა?",
    a: "დიახ. Standard და Premium პაკეტებში შეგიძლია მიაბა შენი დომენი, მაგალითად shop.ge, უფასოდ.",
  },
  {
    q: "რამდენ ხანში ამუშავდება მაღაზია?",
    a: "საშუალოდ 30 წუთში. შაბლონის არჩევა, პროდუქტების დამატება და გადახდის ჩართვა ერთ ჯდომაზე ხერხდება.",
  },
  {
    q: "არის უფასო პერიოდი?",
    a: "დიახ, 14 დღე უფასოა და ბარათი არ არის საჭირო. მოგწონს — აგრძელებ, არ მოგწონს — უბრალოდ არ იხდი.",
  },
  {
    q: "შემიძლია პაკეტის შეცვლა?",
    a: "ნებისმიერ დროს შეგიძლია პაკეტის აწევა ან დაწევა პირად კაბინეტში.",
  },
];

export const navLinks = [
  { to: "/templates", label: "შაბლონები" },
  { to: "/features", label: "შესაძლებლობები" },
  { to: "/pricing", label: "ფასები" },
  { to: "/about", label: "ჩვენ შესახებ" },
  { to: "/contact", label: "კონტაქტი" },
] as const;

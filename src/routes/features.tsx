import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, CreditCard, Globe, Headphones, Package, Rocket, Smartphone, Truck } from "lucide-react";
import { CtaBand, PageHeader } from "@/components/site/bits";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "შესაძლებლობები — webio.ge" },
      { name: "description", content: "BOG და TBC გადახდები, მობილურზე მორგებული დიზაინი, ქართული მხარდაჭერა და სწრაფი გაშვება." },
      { property: "og:title", content: "შესაძლებლობები — webio.ge" },
      { property: "og:description", content: "BOG და TBC გადახდები, მობილურზე მორგებული დიზაინი, ქართული მხარდაჭერა და სწრაფი გაშვება." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: FeaturesPage,
});

const items = [
  { icon: CreditCard, title: "BOG და TBC გადახდები", text: "მომხმარებელი იხდის ბარათით, თანხა კი პირდაპირ შენს საბანკო ანგარიშზე ირიცხება. ხელშეკრულებებზე და ტექნიკურ დეტალებზე ჩვენ ვზრუნავთ." },
  { icon: Rocket, title: "გაშვება 30 წუთში", text: "რეგისტრაცია, შაბლონის არჩევა, პროდუქტების დამატება — და მაღაზია ონლაინაა. დეველოპერი არ გჭირდება." },
  { icon: Smartphone, title: "მობილურზე მორგებული", text: "მყიდველების უმეტესობა ტელეფონიდან შემოდის. ყველა შაბლონი ტელეფონზე სრულყოფილად მუშაობს." },
  { icon: Package, title: "პროდუქტებისა და შეკვეთების მართვა", text: "დაამატე ფოტო, ფასი და მარაგი. შეკვეთის შემოსვლისას მიიღებ შეტყობინებას." },
  { icon: Truck, title: "მიწოდება", text: "მიუთითე მიწოდების ზონები და ფასები, ან აირჩიე თვითგატანა." },
  { icon: Globe, title: "საკუთარი დომენი", text: "გამოიყენე shop.ge ან მიიღე უფასო მისამართი webio.ge-ზე." },
  { icon: BarChart3, title: "მარტივი სტატისტიკა", text: "ნახე, რა იყიდება ყველაზე კარგად და საიდან მოდიან მყიდველები." },
  { icon: Headphones, title: "ქართული მხარდაჭერა", text: "ცოცხალი ადამიანი, ქართულ ენაზე, სამუშაო დღეებში 10:00–19:00." },
];

function FeaturesPage() {
  return (
    <>
      <PageHeader eyebrow="შესაძლებლობები" title="ყველაფერი ერთ ადგილას — მარტივად" subtitle="webio.ge შექმნილია ადამიანებისთვის, ვისაც ბიზნესი აქვს და არა დრო ტექნიკისთვის." />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-14 sm:px-6 md:grid-cols-2">
        {items.map((f) => (
          <div key={f.title} className="flex gap-5 rounded-3xl border border-border bg-card p-7 shadow-card">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mint"><f.icon className="h-5 w-5 text-primary" /></span>
            <div className="min-w-0">
              <h2 className="font-display text-lg font-semibold text-foreground">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader } from "@/components/site/bits";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "ჩვენ შესახებ — webio.ge" },
      { name: "description", content: "webio.ge-ის მისიაა, ყველა ქართულ მცირე ბიზნესს ჰქონდეს მარტივი ონლაინ მაღაზია." },
      { property: "og:title", content: "ჩვენ შესახებ — webio.ge" },
      { property: "og:description", content: "webio.ge-ის მისიაა, ყველა ქართულ მცირე ბიზნესს ჰქონდეს მარტივი ონლაინ მაღაზია." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { n: "01", t: "სიმარტივე", d: "თუ ტელეფონით სარგებლობ, webio.ge-საც გამოიყენებ." },
  { n: "02", t: "ადგილობრივი", d: "ქართული ენა, ქართული ბანკები, ქართული მხარდაჭერა." },
  { n: "03", t: "გამჭვირვალობა", d: "ფიქსირებული ფასი, ფარული საკომისიოს გარეშე." },
];

function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="ჩვენ შესახებ" title="ვეხმარებით ქართულ ბიზნესს ონლაინ გასვლაში" />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-14 text-base leading-relaxed text-muted-foreground sm:px-6">
        <p>webio.ge დაიწყო მარტივი დაკვირვებით: თბილისის კაფეებს, უბნის მარკეტებსა და პატარა მაღაზიებს სურთ ონლაინ გაყიდვა, მაგრამ არსებული ხელსაწყოები რთული, ძვირი ან უცხოენოვანია.</p>
        <p>ჩვენ ავაწყეთ პლატფორმა, სადაც ყველაფერი ქართულადაა, ბარათით გადახდა უკვე ჩართულია და მაღაზიის შექმნას ერთი ჯდომა სჭირდება.</p>
        <p>ჩვენი მიზანია, ყველა მცირე ბიზნესს საქართველოში ჰქონდეს თავისი ონლაინ ვიტრინა.</p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-4 pb-6 sm:px-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.n} className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <span className="font-display text-sm font-bold text-amber">{v.n}</span>
            <h2 className="mt-3 font-display text-lg font-semibold text-foreground">{v.t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}

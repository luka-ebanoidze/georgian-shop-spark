import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/bits";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "წესები და პირობები — webio.ge" },
      { name: "description", content: "webio.ge-ის მომსახურების გამოყენების წესები და პირობები." },
      { property: "og:title", content: "წესები და პირობები — webio.ge" },
      { property: "og:description", content: "webio.ge-ის მომსახურების გამოყენების წესები და პირობები." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LegalPage,
});

const sections: [string, string][] = [
  ["1. ზოგადი დებულებები", "webio.ge-ის გამოყენებით ეთანხმები ამ წესებს. მომსახურება განკუთვნილია საქართველოში მოქმედი ბიზნესებისთვის."],
  ["2. ანგარიში", "პასუხისმგებელი ხარ ანგარიშის მონაცემების უსაფრთხოებასა და მაღაზიაში განთავსებულ ინფორმაციაზე."],
  ["3. გადახდა", "გამოწერა ყოველთვიურია და ავტომატურად განახლდება. გაუქმება შესაძლებელია ნებისმიერ დროს."],
  ["4. აკრძალული შინაარსი", "აკრძალულია კანონსაწინააღმდეგო პროდუქტების გაყიდვა და სხვისი უფლებების დარღვევა."],
  ["5. პასუხისმგებლობის შეზღუდვა", "webio.ge არ აგებს პასუხს მესამე მხარის (ბანკები, მიწოდების სერვისები) შეფერხებებზე."],
];

function LegalPage() {
  return (
    <>
      <PageHeader title="წესები და პირობები" subtitle="ბოლო განახლება: 2026 წლის აგვისტო" />
      <article className="mx-auto max-w-3xl space-y-8 px-4 py-14 sm:px-6">
        {sections.map(([h, p]) => (
          <section key={h}>
            <h2 className="font-display text-lg font-semibold text-foreground">{h}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p}</p>
          </section>
        ))}
      </article>
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/bits";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "კონფიდენციალურობის პოლიტიკა — webio.ge" },
      { name: "description", content: "როგორ აგროვებს და იცავს webio.ge შენს პერსონალურ მონაცემებს." },
      { property: "og:title", content: "კონფიდენციალურობის პოლიტიკა — webio.ge" },
      { property: "og:description", content: "როგორ აგროვებს და იცავს webio.ge შენს პერსონალურ მონაცემებს." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LegalPage,
});

const sections: [string, string][] = [
  ["1. რა მონაცემებს ვაგროვებთ", "სახელს, ელფოსტას, ტელეფონს და მაღაზიის ფუნქციონირებისთვის საჭირო ინფორმაციას."],
  ["2. როგორ ვიყენებთ", "მხოლოდ მომსახურების მიწოდების, მხარდაჭერისა და გაუმჯობესებისთვის."],
  ["3. გადახდის მონაცემები", "ბარათის მონაცემებს ამუშავებენ ბანკები (BOG, TBC); webio.ge მათ არ ინახავს."],
  ["4. შენი უფლებები", "ნებისმიერ დროს შეგიძლია მოითხოვო მონაცემების ნახვა, შესწორება ან წაშლა: hello@webio.ge."],
];

function LegalPage() {
  return (
    <>
      <PageHeader title="კონფიდენციალურობის პოლიტიკა" subtitle="ბოლო განახლება: 2026 წლის აგვისტო" />
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

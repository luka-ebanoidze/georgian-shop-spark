import { createFileRoute } from "@tanstack/react-router";
import { Check, Minus } from "lucide-react";
import { CtaBand, CtaButton, PageHeader } from "@/components/site/bits";
import { pricingTiers } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "ფასები — webio.ge" },
      { name: "description", content: "Starter 29₾, Standard 49₾, Premium 99₾ თვეში. 14 დღე უფასოდ, ბარათის გარეშე." },
      { property: "og:title", content: "ფასები — webio.ge" },
      { property: "og:description", content: "Starter 29₾, Standard 49₾, Premium 99₾ თვეში. 14 დღე უფასოდ, ბარათის გარეშე." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PricingPage,
});

const rows: [string, (string | boolean)[]][] = [
  ["პროდუქტების რაოდენობა", ["30", "ულიმიტო", "ულიმიტო"]],
  ["საკუთარი დომენი", [false, true, true]],
  ["BOG ბარათით გადახდა", [true, true, true]],
  ["TBC ბარათით გადახდა", [false, true, true]],
  ["ფასდაკლების კოდები", [false, true, true]],
  ["მიწოდების ინტეგრაცია", [false, false, true]],
  ["სტატისტიკა და ანგარიშები", [false, false, true]],
  ["მომხმარებლების რაოდენობა", ["1", "2", "5"]],
  ["მხარდაჭერა", ["ელფოსტა", "პრიორიტეტული", "პირადი მენეჯერი"]],
];

function PricingPage() {
  return (
    <>
      <PageHeader eyebrow="ფასები" title="აირჩიე შენთვის შესაფერისი პაკეტი" subtitle="ყოველთვიური გადახდა. შეცვალე ან გააუქმე ნებისმიერ დროს." />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((t) => (
            <div key={t.id} className={`flex flex-col rounded-3xl border bg-card p-8 ${t.highlighted ? "border-primary shadow-lift" : "border-border shadow-card"}`}>
              <h2 className="font-display text-lg font-bold text-foreground">{t.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t.summary}</p>
              <p className="mt-6 font-display text-4xl font-bold text-foreground">{t.price}₾<span className="text-sm font-medium text-muted-foreground"> / თვე</span></p>
              <CtaButton to="/signup" variant={t.highlighted ? "amber" : "outline"} className="mt-6 w-full">დაწყება</CtaButton>
            </div>
          ))}
        </div>
        <h2 className="mt-16 font-display text-2xl font-bold text-foreground">დეტალური შედარება</h2>
        <div className="mt-6 overflow-x-auto rounded-3xl border border-border bg-card">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50 text-left">
                <th className="p-4 font-display font-semibold text-foreground">შესაძლებლობა</th>
                {pricingTiers.map((t) => <th key={t.id} className="p-4 text-center font-display font-semibold text-foreground">{t.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, vals]) => (
                <tr key={label} className="border-b border-border last:border-0">
                  <td className="p-4 text-foreground">{label}</td>
                  {vals.map((v, i) => (
                    <td key={i} className="p-4 text-center text-muted-foreground">
                      {v === true ? <Check className="mx-auto h-4 w-4 text-primary" /> : v === false ? <Minus className="mx-auto h-4 w-4 text-border" /> : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

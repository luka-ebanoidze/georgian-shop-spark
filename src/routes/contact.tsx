import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/site/bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "კონტაქტი — webio.ge" },
      { name: "description", content: "დაგვიკავშირდი — გიპასუხებთ ქართულ ენაზე ერთი სამუშაო დღის განმავლობაში." },
      { property: "og:title", content: "კონტაქტი — webio.ge" },
      { property: "og:description", content: "დაგვიკავშირდი — გიპასუხებთ ქართულ ენაზე ერთი სამუშაო დღის განმავლობაში." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

const field = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/20";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };
  return (
    <>
      <PageHeader eyebrow="კონტაქტი" title="გვაქვს პასუხი შენს კითხვაზე" subtitle="მოგვწერე და დაგეხმარებით მაღაზიის შექმნაში." />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-5 text-sm">
          {[[Mail, "hello@webio.ge"], [Phone, "+995 599 00 00 00"], [MapPin, "თბილისი, საქართველო"]].map(([Icon, t], i) => {
            const I = Icon as typeof Mail;
            return (
              <li key={i} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint"><I className="h-5 w-5 text-primary" /></span>
                <span className="text-foreground">{t as string}</span>
              </li>
            );
          })}
        </ul>
        <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8">
          {sent ? (
            <p className="py-10 text-center font-display text-lg font-semibold text-primary">მადლობა! მალე დაგიკავშირდებით.</p>
          ) : (
            <div className="space-y-5">
              <label className="block text-sm font-medium text-foreground">სახელი<input required className={field} /></label>
              <label className="block text-sm font-medium text-foreground">ელფოსტა<input required type="email" className={field} /></label>
              <label className="block text-sm font-medium text-foreground">შეტყობინება<textarea required rows={5} className={field} /></label>
              <button type="submit" className="w-full rounded-2xl bg-amber px-6 py-3.5 font-display text-sm font-semibold text-amber-foreground shadow-soft">გაგზავნა</button>
            </div>
          )}
        </form>
      </section>
    </>
  );
}

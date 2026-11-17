import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { TemplatePreview } from "@/components/site/TemplatePreview";
import { CtaBand, PageHeader } from "@/components/site/bits";
import { categoryLabels, templates, type TemplateCategory } from "@/lib/site-data";

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title: "შაბლონები — webio.ge" },
      { name: "description", content: "მზა ვებგვერდის შაბლონები კაფის, მარკეტის, მაღაზიისა და ბუტიკისთვის." },
      { property: "og:title", content: "შაბლონები — webio.ge" },
      { property: "og:description", content: "მზა ვებგვერდის შაბლონები კაფის, მარკეტის, მაღაზიისა და ბუტიკისთვის." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TemplatesPage,
});

const filters = ["all", "cafe", "market", "shop", "boutique"] as const;

function TemplatesPage() {
  const [active, setActive] = useState<TemplateCategory | "all">("all");
  const list = active === "all" ? templates : templates.filter((t) => t.category === active);
  return (
    <>
      <PageHeader eyebrow="შაბლონები" title="იპოვე შენი ბიზნესის დიზაინი" subtitle="აირჩიე შაბლონი, შეცვალე ტექსტი და ფოტოები — და მაღაზია მზადაა." />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button key={f} type="button" onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active === f ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary"}`}>
              {categoryLabels[f]}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <article key={t.slug} className="flex flex-col rounded-3xl border border-border bg-card p-4 shadow-card">
              <div className="aspect-[4/3]"><TemplatePreview category={t.category} title={t.name} /></div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-foreground">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.tagline}</p>
                </div>
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-semibold text-primary">{categoryLabels[t.category]}</span>
              </div>
              <Link to="/signup" className="mt-4 inline-flex justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">გამოიყენე ეს შაბლონი</Link>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

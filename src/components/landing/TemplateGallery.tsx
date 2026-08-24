import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const templates = [
  { name: "Café", tag: "Menus & pickup orders", solid: "bg-primary", tint: "bg-mint" },
  { name: "Green Market", tag: "Fresh & grocery", solid: "bg-leaf", tint: "bg-sand" },
  { name: "Bakery", tag: "Bread & sweets", solid: "bg-clay", tint: "bg-peach" },
  { name: "Boutique", tag: "Fashion & gifts", solid: "bg-bloom", tint: "bg-blush" },
  { name: "Corner Kiosk", tag: "Everyday essentials", solid: "bg-wave", tint: "bg-sky" },
  { name: "Flower Bar", tag: "Bouquets & events", solid: "bg-sun", tint: "bg-sand" },
];

export function TemplateGallery() {
  return (
    <section id="templates" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Templates"
          title="Looks that fit your business, not the other way round"
          desc="Curated, locked layouts — pick one, set your logo and accent color, and it simply can't look broken. Component-level customization arrives with the Standard plan."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div
              key={t.name}
              className="group rounded-3xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <div className={`rounded-2xl ${t.tint} p-4`}>
                <div className="rounded-xl border border-border/60 bg-card p-3.5">
                  <div className="flex items-center justify-between">
                    <span className={`h-2.5 w-14 rounded-full ${t.solid}`} />
                    <span className="flex gap-1">
                      <span className="h-2 w-2 rounded-full bg-border" />
                      <span className="h-2 w-2 rounded-full bg-border" />
                    </span>
                  </div>
                  <div
                    className={`mt-3 flex h-14 items-end rounded-lg ${t.solid} p-2.5`}
                  >
                    <span className="h-2 w-20 rounded-full bg-card/80" />
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-10 rounded-md border border-border bg-muted"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pb-2 pt-4">
                <div>
                  <h3 className="font-display text-base font-bold">{t.name}</h3>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Use this look
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

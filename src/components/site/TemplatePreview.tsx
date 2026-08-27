import type { TemplateCategory } from "@/lib/site-data";

type Palette = {
  bar: string;
  hero: string;
  tile: string;
  chip: string;
};

const palettes: Record<TemplateCategory, Palette> = {
  cafe: { bar: "bg-primary", hero: "bg-mint", tile: "bg-sand", chip: "bg-amber/70" },
  market: { bar: "bg-leaf", hero: "bg-sand", tile: "bg-mint", chip: "bg-leaf/40" },
  shop: { bar: "bg-pine", hero: "bg-sky", tile: "bg-muted", chip: "bg-wave/40" },
  boutique: { bar: "bg-clay", hero: "bg-blush", tile: "bg-peach", chip: "bg-clay/40" },
};

/**
 * Flat, illustrative mini-website mockup used as a template thumbnail.
 * No photography — pure CSS blocks so it stays crisp on every screen.
 */
export function TemplatePreview({
  category,
  title,
  className = "",
}: {
  category: TemplateCategory;
  title: string;
  className?: string;
}) {
  const p = palettes[category];

  return (
    <div
      className={`flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card ${className}`}
      aria-hidden="true"
    >
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="h-2 w-2 rounded-full bg-border" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-border/70" />
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-3">
        {/* store nav */}
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-semibold tracking-wide text-foreground">{title}</span>
          <div className="flex gap-1">
            <span className="h-1.5 w-6 rounded-full bg-border" />
            <span className="h-1.5 w-4 rounded-full bg-border" />
            <span className={`h-1.5 w-4 rounded-full ${p.bar}`} />
          </div>
        </div>

        {/* hero band */}
        <div className={`flex items-center justify-between rounded-xl ${p.hero} px-3 py-3`}>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-16 rounded-full bg-foreground/25" />
            <span className="block h-1.5 w-10 rounded-full bg-foreground/15" />
            <span className={`mt-1.5 block h-3 w-12 rounded-md ${p.bar}`} />
          </div>
          <span className={`h-10 w-10 rounded-full ${p.chip}`} />
        </div>

        {/* product grid */}
        <div className="grid flex-1 grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-1 rounded-lg border border-border p-1.5">
              <span className={`block h-7 w-full rounded-md ${p.tile}`} />
              <span className="block h-1 w-full rounded-full bg-border" />
              <span className="block h-1 w-2/3 rounded-full bg-border/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

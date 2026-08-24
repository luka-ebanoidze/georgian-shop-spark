import { ChevronDown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Do I need any technical skills?",
    a: "No. If you can post on Facebook, you can run a Webio store. Pick a template, type in your products, done. And if you ever get stuck, a real person is a message away.",
  },
  {
    q: "How do payments work?",
    a: "We connect your Bank of Georgia business account (TBC coming next). Customers pay on the bank's own secure page — card details never touch Webio. The bank takes its usual 2–2.5% per sale; Webio takes nothing from your sales.",
  },
  {
    q: "Can I use my own domain?",
    a: "Every plan includes a free yourshop.webio.ge address. Custom domains (yourshop.ge) come with Standard and Premium — and for our first 10 customers, we'll connect one by hand for free.",
  },
  {
    q: "What does “locked template” mean?",
    a: "You choose the look, logo and accent color; the layout itself stays fixed. That's on purpose — it's why a Webio store can't end up broken or messy. Full component customization arrives with the Standard plan.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly billing, no contracts, no exit fees. Your store stays live until the end of the paid period, and you can export your product list whenever you like.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions owners actually ask"
          desc="Anything else — write to hello@webio.ge and a real person answers."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-card px-5 py-4 open:shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm font-bold sm:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

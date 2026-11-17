import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "შესვლა — webio.ge" },
      { name: "description", content: "შედი შენს webio.ge ანგარიშზე და მართე მაღაზია." },
      { property: "og:title", content: "შესვლა — webio.ge" },
      { property: "og:description", content: "შედი შენს webio.ge ანგარიშზე და მართე მაღაზია." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: AuthPage,
});

const field = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/20";

function AuthPage() {
  return (
    <section className="flex justify-center bg-secondary/30 px-4 py-16 sm:py-24">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-7 shadow-lift sm:p-9">
        <h1 className="font-display text-2xl font-bold text-foreground">კეთილი იყოს შენი დაბრუნება</h1>
        <p className="mt-2 text-sm text-muted-foreground">შეიყვანე ელფოსტა და პაროლი.</p>
        <form onSubmit={(e) => e.preventDefault()} className="mt-7 space-y-4">
          
          <label className="block text-sm font-medium text-foreground">ელფოსტა<input required type="email" className={field} /></label>
          <label className="block text-sm font-medium text-foreground">პაროლი<input required type="password" minLength={8} className={field} /></label>
          <button type="submit" className="w-full rounded-2xl bg-amber px-6 py-3.5 font-display text-sm font-semibold text-amber-foreground shadow-soft">შესვლა</button>
        </form>
        <p className="mt-6 text-center text-sm text-muted-foreground">ჯერ არ გაქვს ანგარიში? <Link to="/signup" className="font-semibold text-primary">დარეგისტრირდი</Link></p>
      </div>
    </section>
  );
}

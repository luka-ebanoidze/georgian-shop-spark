import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        {eyebrow && (
          <span className="inline-flex rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

export function CtaButton({
  to,
  children,
  variant = "amber",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: "amber" | "primary" | "outline";
  className?: string;
}) {
  const styles = {
    amber: "bg-amber text-amber-foreground shadow-soft hover:-translate-y-0.5",
    primary: "bg-primary text-primary-foreground shadow-soft hover:-translate-y-0.5",
    outline: "border border-border bg-card text-foreground hover:border-primary hover:text-primary",
  }[variant];

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-display text-sm font-semibold transition-all ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="rounded-3xl bg-primary px-6 py-12 text-center sm:px-12">
        <h2 className="font-display text-2xl font-bold text-primary-foreground sm:text-4xl">
          მზად ხარ საკუთარი მაღაზიისთვის?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          14 დღე უფასოდ, ბარათის მითითების გარეშე. დახმარება ქართულ ენაზე.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <CtaButton to="/signup">დაწყება</CtaButton>
          <CtaButton to="/contact" variant="outline">
            დაგვიკავშირდი
          </CtaButton>
        </div>
      </div>
    </section>
  );
}

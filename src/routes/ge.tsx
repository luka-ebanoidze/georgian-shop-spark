import { createFileRoute } from "@tanstack/react-router";
import { NavbarGe } from "@/components/landing/ge/NavbarGe";
import { HeroGe } from "@/components/landing/ge/HeroGe";
import {
  FaqGe,
  FeaturesGe,
  FooterGe,
  HowGe,
  OfferGe,
  PricingGe,
  TemplatesGe,
} from "@/components/landing/ge/SectionsGe";

export const Route = createFileRoute("/ge")({
  head: () => ({
    meta: [
      { title: "webio.ge — მარტივი ონლაინ მაღაზია ქართული ბიზნესისთვის" },
      {
        name: "description",
        content:
          "აირჩიე შაბლონი, დაამატე პროდუქტები და მიიღე ბარათით გადახდები. webio.ge ონლაინ მაღაზიას კაფეს, მარკეტსა და პატარა მაღაზიას ერთ ჯერზე უშვებს — 29 ₾/თვე.",
      },
      {
        property: "og:title",
        content: "webio.ge — მარტივი ონლაინ მაღაზია ქართული ბიზნესისთვის",
      },
      {
        property: "og:description",
        content:
          "აირჩიე შაბლონი, დაამატე პროდუქტები, მიიღე გადახდები. ონლაინ ერთ ჯერზე — 29 ₾/თვე.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ka_GE" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GeorgianLanding,
});

function GeorgianLanding() {
  return (
    <div
      id="zeda"
      lang="ka"
      className="min-h-screen bg-background font-sans text-foreground antialiased"
    >
      <NavbarGe />
      <main>
        <HeroGe />
        <TemplatesGe />
        <HowGe />
        <FeaturesGe />
        <PricingGe />
        <OfferGe />
        <FaqGe />
      </main>
      <FooterGe />
    </div>
  );
}

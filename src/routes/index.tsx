import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features, HowItWorks } from "@/components/landing/Features";
import { TemplateGallery } from "@/components/landing/TemplateGallery";
import { OfferBanner, Pricing } from "@/components/landing/Pricing";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webio.ge — Easy Online Stores for Georgian Small Businesses" },
      {
        name: "description",
        content:
          "Pick a template, add your products, accept BOG & TBC payments. Webio.ge gets your cafe, market or shop online in one sitting — from 29 ₾/month.",
      },
      {
        property: "og:title",
        content: "Webio.ge — Easy Online Stores for Georgian Small Businesses",
      },
      {
        property: "og:description",
        content:
          "Pick a template, add your products, accept BOG & TBC payments. Live in one sitting — from 29 ₾/month.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      id="top"
      className="min-h-screen bg-background font-sans text-foreground antialiased"
    >
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <TemplateGallery />
        <Features />
        <Pricing />
        <OfferBanner />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

# Georgian Shop Spark

Easy Online Shop Creator for Georgian Small Businesses — Business Model & MVP Spec

1. Executive Summary

A radically simple, self-serve online store builder for Georgian small businesses (cafes, markets, small shops) who find existing tools either broken (Storera) or too complex/expensive for their size (Komero). The wedge is simplicity and price, not feature depth: pick a template, add products with photos, accept BOG/TBC payments, go live — nothing else required at launch. Positioned explicitly as "the easy one" for businesses too small to need — or want to pay for — a full-featured platform.

Strategy in one line: don't compete with Komero on features. Serve the segment below their price floor with something so simple a first-time user can't get stuck, priced at a fraction of what either competitor charges, sold through direct, hands-on outreach to the first 10 real customers.

2. Competitive Landscape

Storera.ge

Existing Georgian store builder. Reported reliability problems (broken password recovery, general instability) from direct user testing.

Pricing: Basic 1,070 GEL/year (250 products, 10 templates) + 150 GEL/year payment integration add-on + 100–150 GEL/year delivery integration add-on — real effective cost ~1,320–1,370 GEL/year. Premium 2,029 GEL/year (unlimited, bundled).

Weakness to exploit: unbundled "gotcha" pricing on core features (payments, delivery) that should be included by default, plus poor reliability.

Komero.ge — the more serious competitor

Full-featured, professionally built Georgian SaaS store builder ("Komero Group LLC," Tbilisi), positioned as the Georgian equivalent of Shopify. Has real, named live clients (TopTools, Wonder, Janishop).

Feature set: BOG + TBC payments including local installment products, FINA ERP two-way sync, Wolt/Bolt Food integration, AI shopping assistant, B2B wholesale portal, real-time analytics, WhatsApp/Telegram order notifications, multi-language/multi-domain, drag-and-drop visual builder, blog/pages, SEO-optimized Next.js server rendering, sub-2-hour support SLA with dedicated account manager.

Pricing: 14-day free trial (no card, 50 products) → Standard 99 GEL/month (200 products) → Premium 249 GEL/month (unlimited, B2B portal, AI chatbot, API).

The opening this leaves: Komero is explicitly positioned for "launching your first brand" / serious growing businesses, not tiny cafes and kiosks. Their price floor (99 GEL/month ≈ 1,188 GEL/year) is far above what a one-person kiosk or small cafe will pay, and their feature depth (FINA, B2B, AI) is irrelevant overkill for that segment.

Positioning conclusion

Neither competitor is fighting for the very small, very price-sensitive, low-trust business owner. That is the target segment: radically simple, radically cheap (target ~25-49 GEL/month), Georgian-first, human-assisted onboarding — not a smaller Komero, but the only tool built specifically for businesses too small for either existing option.

Known risk: this segment has lower revenue-per-customer than Komero's, requiring higher volume, and a well-resourced competitor could move down-market later. Defensibility comes from hands-on trust-building (a real person onboarding each early customer) — something that doesn't scale the way software does and is a lower priority for a company already succeeding upmarket.

3. Target Customer & Core Promise

Cafes, small markets, kiosks, boutiques — typically 15-80 products/menu items.

Currently either has no website, or is unhappy on Storera.

Doesn't want to learn a complex tool, doesn't want to pay 99+ GEL/month for features they'll never use.

Core promise: pick a look, add your products, accept cards — live in one sitting, with a real person available if you get stuck.

4. MVP Scope — What to Actually Build in 2 Weeks

This is intentionally a small slice of the full long-term product. Everything else is deferred.

In scope for MVP

Template gallery: 5-8 pre-built templates, locked layout — pick one, set logo + accent color. No component-level customization yet.

Product management: add/edit/delete product — name, price (GEL), description, up to 3 photos (simple upload, shown as a slider on the storefront).

Storefront: public, mobile-responsive page rendering the chosen template + live product catalog.

Payments: Bank of Georgia integration only at launch (hosted payment page redirect — no card data touches the platform). Add TBC shortly after, not blocking initial launch.

Orders: simple order list, manual status update (received / paid / fulfilled).

Hosting: free subdomain only (yourstore.plaformname.ge). No custom domain flow yet — can be done manually by hand for the first 10 customers if needed.

Admin: single login per store (owner only). No multi-staff accounts yet.

Architecture: multi-tenant from day one (shared backend + database, isolated by store ID) — do not build per-customer infrastructure, even at this small scale (see Section 6).

Explicitly out of scope for MVP (Phase 2+)

TBC payment integration (add once BOG is working)

Custom domain self-service purchase/connection

Component-level template customization (Standard tier unlock)

Multi-staff accounts, inventory/stock tracking

Delivery/courier integration (use a free-text field: "pickup only," "we deliver via Wolt," etc.)

Facebook/Instagram/Google Shopping sync

Analytics dashboard, Excel import/export

Multi-currency, B2B, AI features (this is where Komero already wins — do not attempt to match)

Success criteria for the 2-week window

At least 1 real business owner has a live, working store accepting real BOG payments by day 14.

The remaining 9 (of the target first 10) are in active onboarding, even if not all fully live yet.

5. Pricing (for when tiers launch beyond the first 10 hand-onboarded customers)

Kept simple on purpose — one tier at MVP launch, expanding later.

Starter (MVP / launch tier)Standard (Phase 2)Premium (Phase 3)Price25-29 GEL/month (~290 GEL/year)49 GEL/month99 GEL/monthProductsUp to 50, 3 photos eachUp to 250-300UnlimitedTemplates5-8 curated, locked layoutFull library, component customizationFull library + early accessPaymentsBOG (TBC added shortly after)BOG + TBCBOG + TBC, multi-currencyDomainFree subdomainCustom domain, 1st year freeCustom domain, free renewalSupportChat/email, hands-on for first cohortPriority chat + phoneDedicated onboarding call

First 10 customers: offer 3 months free on Starter, hand-built by you inside the actual product (not bespoke one-off sites), converting to paid afterward with a card on file from day one. See Section 8.

Do not build a "one-time payment + server cost + %" pricing model — real per-customer infrastructure cost is fractions of a cent; this pricing structure doesn't cover ongoing support/maintenance and creates a growing unpaid-obligation problem as you add customers.

6. Technical Architecture (unchanged from prior analysis — still correct at MVP scale)

Multi-tenant, not per-customer servers. One shared backend + database serves all stores, isolated by store ID. A single small VPS (Hetzner Cloud, ~€5.49-8/month, 4GB RAM) comfortably handles the first 10-100+ stores.

Object storage for product images (Hetzner Object Storage, ~€6.50/month for 1TB) — storage cost per product is negligible (~1MB per product including 3 photos ≈ fractions of a cent/month), so product-count limits are a pricing/segmentation lever, not a real cost constraint.

Payments: BOG iPay hosted payment page — free setup for BOG business account holders, 2.0-2.5% commission on local cards (paid by the store owner per sale, not a platform cost). Confirm current TBC rate directly before Phase 2.

Cloudflare free tier in front for CDN/basic protection.

Three logical services, buildable as one deployable app at MVP scale but kept as separable modules: (1) public storefronts, (2) admin/builder dashboard, (3) your own marketing/landing page — so storefront traffic and admin usage can be scaled independently later without a rewrite.

Domain: .ge domains ~30 GEL/year via an accredited registrar; not needed for MVP (subdomain only), relevant once custom domains launch in Phase 2.

7. Tax & Legal Structure (not legal/tax advice — confirm with a Georgian accountant before registering)

StructureTax basisRateIndividual Entrepreneur, standardNet profit20%Individual Entrepreneur, Small Business Status (if eligible, up to 500,000 GEL/year turnover)Gross turnover1%LLC, Estonian-model corporate taxOnly distributed profit; 0% on reinvested profit15% on distributed portionVATMandatory once turnover exceeds 100,000 GEL/year18%

Recommendation: register as an Individual Entrepreneur under Small Business Status if eligible before taking your first payment — the difference between 1% and 20% tax is large even at small scale, and it's far easier to register correctly up front than to fix retroactively.

8. First 10 Customers — Acquisition Plan

Target mix: unhappy Storera customers (find via public storefronts, Facebook complaints, reviews) + businesses with no website at all (larger pool, zero switching friction).

Pitch: lead with a live demo built inside your own product, not a comparison to competitors by name — "here's what your shop could look like," not "leave Storera."

Offer: 3 months free on Starter, card on file from day one so it converts to paid automatically unless cancelled.

You personally handle onboarding for all 10 — product upload, template pick, BOG activation, any DNS/domain step. This is unscalable by design right now; it's how you validate the product and build trust simultaneously.

Track conversion rate and time cost per customer from day one so you know real acquisition cost, not just a sense that "it's working."

9. Post-MVP Roadmap

Phase 2: TBC integration, custom domain self-service, Standard tier (component-level customization, multi-staff accounts, basic inventory).

Phase 3: Premium tier (unlimited products, multi-currency, analytics, Excel import/export), Facebook/Instagram/Google Shopping sync if build cost justifies it, delivery/courier integration as a stretch goal.

Ongoing: re-evaluate Komero's pricing/positioning periodically — if they move down-market, be ready to sharpen differentiation further on service/trust rather than trying to out-feature them.

10. Key Risks

Distribution, not demand, is the constraint — the addressable market is large, but reaching low-trust, price-sensitive owners requires hands-on effort that doesn't scale linearly.

Komero could move down-market given their evident engineering capacity — your defensibility is service/trust, not technology.

Segment is lower revenue-per-customer than Komero's target market — plan for needing more customers to reach meaningful revenue.

Feature over-promising (delivery, multi-marketplace sync) before they're built repeats the exact trust-breaking pattern this business is positioned against — keep the MVP promise matched exactly to what's actually live.

11. Sources / Figures to Re-verify Before Launch

Komero and Storera pricing/features (checked live at time of writing — re-verify before finalizing your own pricing page, as both can change).

BOG/TBC current commission rates and merchant onboarding requirements — confirm directly with each bank's business banking team.

Hetzner/DigitalOcean current hosting pricing.

Georgian Small Business Status eligibility rules (especially any changes regarding employees) — confirm with an accountant before registering.

this is my business model could you create website design with light modern colors like its for komero.ge , company name is webio.ge

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://georgian-shop-spark.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/47e35d53-5c09-4333-b06a-4d2c99a28e25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

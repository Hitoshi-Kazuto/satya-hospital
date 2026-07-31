# HOTEL WEBSITE DEVELOPMENT

**Full Requirement Document & Project Proposal**

A complete digital booking platform for the modern hospitality business.

> **Version 1.0** · **Status:** Draft for Review · **Date:** July 2026
> **Total Development Cost:** Rs. 2,60,000 (all three phases)

---

## Table of Contents

- [1. Executive Summary](#1-executive-summary)
- [2. Project Objective & Business Goals](#2-project-objective--business-goals)
- [3. Scope of Work](#3-scope-of-work)
- [4. Assumptions & Dependencies](#4-assumptions--dependencies)
- [5. Functional Requirements](#5-functional-requirements)
- [6. Non-Functional Requirements](#6-non-functional-requirements)
- [7. Technology Stack](#7-technology-stack)
- [8. Project Timeline & Phases](#8-project-timeline--phases)
- [9. Deliverables Summary](#9-deliverables-summary)
- [10. Component-Wise Cost Breakdown](#10-component-wise-cost-breakdown)
- [11. Annual Running Costs](#11-annual-running-costs)
- [12. Terms & Payment Schedule](#12-terms--payment-schedule)
- [13. Milestone Acceptance Criteria](#13-milestone-acceptance-criteria)
- [14. Deployment Options & Costing](#14-deployment-options--costing)
- [15. Risk Register & Mitigation](#15-risk-register--mitigation)
- [16. Approvals](#16-approvals)

---

## 1. Executive Summary

This proposal outlines the development of a premium, full-featured hotel website designed to modernise the property's digital presence, eliminate dependency on manual booking channels, and drive a measurable increase in direct reservations.

The project is delivered in **three phases over 70 working days**:

| Phase | Duration | Purpose |
|---|---|---|
| 1 — Website Launch | Days 1–10 | Live website with real-time reservations + payments |
| 2 — Business Growth Features | Days 11–40 | Promotions, coupons, analytics, integrations |
| 3 — Smart Hotel Platform | Days 31–70 | AI concierge, WhatsApp automation, admin dashboard |

---

## 2. Project Objective & Business Goals

### 2.1 Primary Objectives

| Objective | Description |
|---|---|
| Increase Direct Bookings | Guests discover, check availability, and book 24/7 with zero staff intervention |
| Eliminate WhatsApp Dependency | Replace informal booking chats with a structured automated flow |
| Improve Online Visibility | Fast, well-optimised site improves Google rankings and organic traffic |
| Boost Conversion Rate | Modern UI/UX, urgency indicators, live pricing, seamless checkout |
| Enable Promotions & Vouchers | Built-in promo engine for weekly deals, seasonal offers, gift vouchers |
| Future-Ready Platform | Architecture scales to a full AI-powered hotel management platform |

### 2.2 Success Criteria (KPIs)

| Metric | Target |
|---|---|
| Direct booking conversion rate | Measurable uplift over manual/WhatsApp baseline |
| Staff intervention per booking | Near-zero for standard reservations |
| Google Core Web Vitals | "Good" on all three metrics |
| Page load time (mobile) | < 3 seconds on 4G |
| Search visibility | Improved ranking within 90 days of SEO enablement |

---

## 3. Scope of Work

### 3.1 In Scope

- Fully responsive, multi-device website (mobile, tablet, desktop)
- Real-time reservation and availability system with payment gateway
- Content management for rooms, images, promotions
- Admin dashboard for bookings, revenue, and promotions
- AI concierge chatbot and WhatsApp automation (Phase 3)
- SEO setup, analytics, and deployment

### 3.2 Out of Scope

| Item | Notes |
|---|---|
| Custom mobile apps (iOS/Android) | Optional add-on |
| Full Property Management System (PMS) | Optional add-on |
| Loyalty / points program | Optional add-on |
| Multi-language support | Optional add-on |
| Content (photos, room copy, menus) | Client responsibility |
| Third-party subscriptions | Paid directly by client |

---

## 4. Assumptions & Dependencies

1. Timelines depend on timely receipt of **content, images, room details, and approvals**.
2. Scope changes after kickoff are documented and quoted separately as a **change request**.
3. Third-party costs (Razorpay, hosting, APIs, WhatsApp) are **not included** in the dev fee.
4. Client provides access to required accounts (domain, Razorpay, GA, Search Console, Maps, Instagram, Meta Business).
5. All payments are **non-refundable** once the corresponding phase milestone has commenced.
6. Client owns all code, design assets, and database content **upon final payment**.

---

## 5. Functional Requirements

Requirements use unique IDs for traceability through design, build, and testing. Priorities: **Must** = required for launch, **Should** = recommended.

<details>
<summary><strong>5.1 Phase 1 — Website Launch (Days 1–10)</strong></summary>

| ID | Requirement | Priority |
|---|---|---|
| FR-P1-01 | Premium homepage: hero, USPs, CTAs, room previews, testimonials | Must |
| FR-P1-02 | Room listings: cards with photos, amenities, pricing tiers, Book Now CTA | Must |
| FR-P1-03 | Room detail pages: amenities, gallery, booking CTA | Must |
| FR-P1-04 | Filterable photo gallery (rooms, restaurant, pool, banquet, exterior) | Must |
| FR-P1-05 | About Us page: story, team, awards, brand values | Should |
| FR-P1-06 | Contact page: form, phone, email, WhatsApp button, embedded Google Maps | Must |
| FR-P1-07 | Real-time reservation system: date picker, guest count, availability, booking form | Must |
| FR-P1-08 | Live availability checker: real-time inventory, remaining rooms per type | Must |
| FR-P1-09 | Razorpay gateway: UPI, cards, net banking, wallets, webhooks | Must |
| FR-P1-10 | Mobile-responsive, pixel-perfect layout on all devices | Must |
| FR-P1-11 | SSL certificate, domain configuration, live cloud deployment | Must |

> **Exit criteria:** Hotel is live and accepting secure online bookings 24/7.

</details>

<details>
<summary><strong>5.2 Phase 2 — Business Growth Features (Days 11–40)</strong></summary>

| ID | Requirement | Priority |
|---|---|---|
| FR-P2-01 | Weekly promotions manager (create, schedule, expire promos) | Must |
| FR-P2-02 | Coupon/voucher system: discounts, expiry, per-user limits | Must |
| FR-P2-03 | Gift voucher store with purchase flow | Must |
| FR-P2-04 | Live offer banners: flash deals, early-bird, festive | Must |
| FR-P2-05 | Performance optimisation: images, lazy loading, CDN, Core Web Vitals | Should |
| FR-P2-06 | Seasonal landing pages (Diwali, New Year, Summer) | Should |
| FR-P2-07 | Google reviews integration on homepage | Should |
| FR-P2-08 | TripAdvisor reviews integration | Should |
| FR-P2-09 | Booking analytics dashboard: bookings, revenue, voucher usage, conversion | Must |
| FR-P2-10 | Instagram gallery feed (auto-sync) | Should |
| FR-P2-11 | Google Analytics 4 + Search Console setup | Must |
| FR-P2-12 | Enhanced SEO: keywords, schema markup, page speed | Should |

> **Exit criteria:** Owner manages promotions end-to-end with no developer.

</details>

<details>
<summary><strong>5.3 Phase 3 — Smart Hotel Platform (Days 31–70)</strong></summary>

| ID | Requirement | Priority |
|---|---|---|
| FR-P3-01 | AI concierge chatbot: FAQs, room recommendations, booking intent 24/7 | Must |
| FR-P3-02 | Smart room recommendation engine (preferences, budget, purpose) | Should |
| FR-P3-03 | WhatsApp booking confirmation (invoice + check-in details) | Must |
| FR-P3-04 | WhatsApp reminders (pre-arrival + post-stay feedback) | Should |
| FR-P3-05 | Full admin dashboard (all operations from one screen) | Must |
| FR-P3-06 | Booking management: view, modify, cancel, refunds in real time | Must |
| FR-P3-07 | Revenue dashboard: daily/weekly/monthly reports + export | Must |
| FR-P3-08 | Room & availability management: status, pricing, block dates | Must |

> **Exit criteria:** Website is a complete hotel management platform.

</details>

### 5.4 Optional Add-On Requirements

| ID | Requirement | Cost |
|---|---|---|
| OA-01 | Multi-language support (Hindi + English) | Rs. 20,000 |
| OA-02 | Loyalty / points program | Rs. 30,000 |
| OA-03 | Property Management System (PMS) | Rs. 1,00,000 |
| OA-04 | Custom mobile app (iOS + Android, React Native) | Rs. 1,20,000 |

---

## 6. Non-Functional Requirements

| Category | Requirement |
|---|---|
| Performance | Core Web Vitals "Good"; mobile load < 3s; CDN-backed delivery |
| Availability | High-availability cloud hosting; zero-downtime deployments; auto-scaling |
| Security | SSL/TLS; PCI-compliant payments via Razorpay; secure admin auth; no raw card storage |
| Reliability | Webhook handling; automated confirmations; data backup strategy |
| Compatibility | All modern browsers; responsive iOS/Android/desktop |
| Accessibility | Semantic markup, alt text, keyboard-navigable forms |
| Scalability | Scales from listing site to AI-powered management platform |
| Data & Privacy | Guest data handled per applicable norms; owned by client |
| SEO | Clean URLs, meta/schema markup, sitemap, robots.txt |
| Maintainability | CMS-driven content; documentation at final payment |

---

## 7. Technology Stack

| Layer | Technology | Rationale |
|---|---|---|
| Frontend | JavaScript / React (SSR) | Speed + SEO; industry standard |
| Styling | Tailwind CSS | Rapid pixel-perfect responsive design |
| Backend / API | Node.js + Express | Scalable REST API for bookings, auth, promos, webhooks |
| Database | PostgreSQL | Relational: bookings, rooms, users, promos, transactions |
| CMS | Sanity CMS | Client-friendly admin; no developer needed |
| Payments | Razorpay | UPI, cards, net banking, EMI, wallets |
| AI / Chatbot | Claude API / GPT-4o | Hotel-data-trained, context-aware responses |
| Hosting & CDN | Vercel + Cloudflare | Global CDN, fast load, zero-downtime deploys |
| Image Storage | AWS S3 (or R2) | Scalable storage for photos, PDFs, documents |
| Maps | Google Maps API | Interactive maps with directions |
| Analytics | GA4 + Search Console | Traffic, conversion events, funnel, SEO |
| WhatsApp | WhatsApp Business API (Meta) | Confirmations and reminders at scale |

---

## 8. Project Timeline & Phases

```
Total: 70 working days
──────────────────────────────────────────────
Phase 1 (Days 1–10)      ██
Phase 2 (Days 11–40)     ██████████
Phase 3 (Days 31–70)     ████████████████
```

<details>
<summary><strong>Phase 1 — Website Launch (Days 1–10)</strong></summary>

| Deliverable | Description |
|---|---|
| Premium Homepage | Hero, USPs, CTAs, room previews, testimonials |
| Room Listings | Cards: photos, amenities, pricing tiers, Book Now CTA |
| Photo Gallery | Filterable: rooms, restaurant, pool, banquet, exterior |
| About Us Page | Story, team, awards, brand values |
| Contact Page | Form, phone, email, WhatsApp button, Google Maps |
| Real-Time Reservation System | Date picker, guest count, availability check, booking form |
| Live Availability Checker | Real-time inventory, remaining rooms per type |
| Razorpay Payment Gateway | UPI, cards, net banking, wallets |
| Mobile Responsive Design | Pixel-perfect across all devices |
| SSL & Deployment | SSL, domain config, cloud deployment |

</details>

<details>
<summary><strong>Phase 2 — Business Growth Features (Days 11–40)</strong></summary>

| Feature | Description |
|---|---|
| Weekly Promotions Manager | Create, schedule, expire promos; auto-display |
| Coupon / Voucher System | Codes, discounts, expiry, usage limits |
| Gift Voucher Store | Direct online purchase flow |
| Live Offer Banners | Flash deals, early-bird, festive |
| Performance Optimisation | Compression, lazy loading, CDN, Core Web Vitals |
| Seasonal Landing Pages | Diwali, New Year, Summer packages |
| Google Reviews Integration | Auto-sync latest reviews |
| Booking Analytics Dashboard | Bookings, revenue, vouchers, conversion |
| Instagram Gallery Feed | Auto-synced embed |
| Google Analytics & Search Console | Traffic + event tracking |
| Enhanced SEO | Keywords, schema markup, page speed |

</details>

<details>
<summary><strong>Phase 3 — Smart Hotel Platform (Days 31–70)</strong></summary>

| Feature | Description |
|---|---|
| AI Concierge Chatbot | FAQs, room recs, booking intent 24/7 |
| Smart Room Recommendation | Preference/budget/purpose-based engine |
| WhatsApp Booking Confirmation | Auto invoice + check-in details |
| WhatsApp Reminder System | Pre-arrival + post-stay feedback |
| Full Admin Dashboard | All operations from one screen |
| Booking Management | Modify, cancel, refunds in real time |
| Revenue Dashboard | Daily/weekly/monthly reports + export |
| Room & Availability Management | Status, pricing, block dates |

</details>

---

## 9. Deliverables Summary

<details>
<summary><strong>View full deliverables matrix (21 items)</strong></summary>

| Feature / Deliverable | Phase | Status |
|---|---|---|
| Premium Homepage | 1 | Included |
| Room Listings & Detail Pages | 1 | Included |
| Photo Gallery | 1 | Included |
| About Us Page | 1 | Included |
| Contact Page + Google Maps | 1 | Included |
| Real-Time Reservation System | 1 | Included |
| Live Availability Checker | 1 | Included |
| Razorpay Payment Gateway | 1 | Included |
| Mobile Responsive Design | 1 | Included |
| SSL + Deployment | 1 | Included |
| Weekly Promotions Manager | 2 | Included |
| Coupon / Voucher System | 2 | Included |
| Gift Voucher Store | 2 | Included |
| Google & TripAdvisor Reviews | 2 | Included |
| Instagram Feed Integration | 2 | Included |
| Booking Analytics Dashboard | 2 | Included |
| Google Analytics + Search Console | 2 | Included |
| AI Concierge Chatbot | 3 | Included |
| WhatsApp Booking Confirmations | 3 | Included |
| Full Admin Dashboard | 3 | Included |
| Revenue & Booking Reports | 3 | Included |

</details>

---

## 10. Component-Wise Cost Breakdown

<details>
<summary><strong>Phase 1 — Website Launch (Sub-total: Rs. 90,000)</strong></summary>

| Component | Description | Estimated Cost |
|---|---|---|
| UI/UX Design (All Pages) | Wireframes, visual design, brand-aligned UI | Rs. 20,000 |
| Homepage Development | Hero, sections, CTA, animations | Rs. 10,000 |
| Room Listing Module | Grid, filters, room cards | Rs. 15,000 |
| Room Detail Pages | Detail view, amenities, booking CTA | Rs. 5,000 |
| Gallery Module | Filterable, lightbox, lazy load | Rs. 5,000 |
| About & Contact Pages | Story, team, form, maps | Rs. 5,000 |
| Real-Time Reservation System | Availability logic, calendar, booking flow | Rs. 40,000 |
| Razorpay Integration | UPI, cards, wallets, webhooks | Rs. 10,000 |
| Mobile Responsive + Performance | Cross-device, speed optimisation | Rs. 5,000 |
| SEO Setup + Deployment | Meta, SSL, hosting config, launch | Rs. 5,000 |

</details>

<details>
<summary><strong>Phase 2 — Business Growth Features (Sub-total: Rs. 80,000)</strong></summary>

| Component | Description | Estimated Cost |
|---|---|---|
| Promotions & Offer Banner System | Admin weekly offers, live banners | Rs. 15,000 |
| Coupon / Voucher Engine | Code generation, validation, expiry | Rs. 15,000 |
| Gift Voucher Store | Purchase flow, PDF voucher generation | Rs. 10,000 |
| Reviews Integration | Google + TripAdvisor live sync | Rs. 7,500 |
| Instagram Feed | Auto-sync, embed, refresh | Rs. 7,500 |
| Booking Analytics Dashboard | Charts, filters, export | Rs. 15,000 |

</details>

<details>
<summary><strong>Phase 3 — Smart Hotel Platform (Sub-total: Rs. 90,000)</strong></summary>

| Component | Description | Estimated Cost |
|---|---|---|
| AI Concierge Chatbot | LLM integration, data training, UI widget | Rs. 30,000 |
| Smart Room Recommendation | Preference-based AI engine | Rs. 15,000 |
| WhatsApp Integration | Business API, confirmation + reminders | Rs. 15,000 |
| Admin Dashboard (Full) | Bookings, rooms, promos, revenue | Rs. 30,000 |

</details>

**Grand Total (All 3 Phases): Rs. 2,60,000**

### Optional Add-Ons

| Add-On | Description | Estimated Cost |
|---|---|---|
| Multi-Language Support | Hindi + English switchable UI | Rs. 20,000 |
| Loyalty / Points Program | Rewards, tiers, redemption | Rs. 30,000 |
| Property Management System | Full back-office operations | Rs. 1,00,000 |
| Custom Mobile App (iOS + Android) | React Native booking app | Rs. 1,20,000 |

---

## 11. Annual Running Costs

Paid directly by the client, independent of the development fee.

| Item | Frequency | Estimated Cost |
|---|---|---|
| Domain Name (.com / .in) | Annual | Rs. 800 – 1,500 / year |
| Cloud Hosting | Monthly | Rs. 0 – 2,500 / month |
| SSL Certificate | Annual | Free or Rs. 2,000 – 5,000 / year |
| Razorpay Transaction Charges | Per transaction | 2% per successful transaction |
| WhatsApp Business API (Phase 3) | Monthly | Rs. 500 – 2,000 / month |
| AI API Costs (Chatbot — Phase 3) | Monthly | Rs. 1,500 – 5,000 / month |
| Google Maps API | Monthly | Free tier + Rs. 0 – 1,500 / month |
| Maintenance Retainer (Optional) | Monthly | Rs. 15,000 / month |

> **Estimated annual running cost (excl. retainer): ~Rs. 60,000.**
> Razorpay charges 2% per transaction — no monthly fee. For realistic hosting figures by stack, see [Deployment Options & Costing](#14-deployment-options--costing).

---

## 12. Terms & Payment Schedule

### Milestone-Based Payment Plan

| Amount | Milestone | Due Amount |
|---|---|---|
| 20% | Project Kickoff (advance, spread across phases) | Rs. 52,000 |
| 28% | Phase 1 Completion (Phase 1 ≈ 35% of scope, net of advance) | Rs. 72,800 |
| 24% | Phase 2 Completion (Phase 2 ≈ 31% of scope) | Rs. 62,400 |
| 28% | Phase 3 Completion (Phase 3 ≈ 35% of scope) | Rs. 72,800 |

### Terms & Conditions

1. Timelines contingent on timely receipt of content, images, details, and approvals.
2. Post-kickoff scope changes billed separately as change requests.
3. Payments non-refundable once the phase milestone has commenced.
4. Client owns all code, design assets, and database content upon final payment.
5. Third-party service costs (Razorpay, hosting, APIs) are not included in the dev fee.
6. Source code handed over in full upon completion and final payment.

---

## 13. Milestone Acceptance Criteria

| Milestone | Acceptance Criteria | Payment Trigger |
|---|---|---|
| Project Kickoff | Signed proposal, content received, plan confirmed | 30% advance |
| Phase 1 Completion | Live on production domain; live test booking via Razorpay; SSL active; responsive verified | 30% |
| Phase 2 Completion | Promos, coupon/voucher engine, gift voucher store, analytics functional and demoed | 30% |
| Final Handover | Phase 3 complete; docs and source handed over; client sign-off | 10% |

---

## 14. Deployment Options & Costing

Researched July 2026 against official pricing pages. Converted at ~**₹84/USD** and **₹90/EUR**. All figures are **monthly** unless noted, and assume a single hotel site (frontend + API + Postgres + CMS + image storage). Prices change frequently — verify before committing.

### Overview of Options

| Option | Stack | Est. Monthly | Est. Annual | Best For |
|---|---|---|---|---|
| A. Vercel + managed Postgres | Vercel Pro + Neon/Supabase + Sanity Free | ₹2,500 – 4,500 | ₹30,000 – 54,000 | Recommended default; speed + simplicity |
| B. Budget PaaS (Render) | Render Starter + Postgres + Sanity Free | ₹1,200 – 2,100 | ₹14,000 – 25,000 | Cost-conscious, small traffic |
| C. Cloudflare native | Cloudflare Pages/Workers + Neon Free + R2 | ₹0 – 850 | ₹0 – 10,000 | Cheapest; commercial use allowed free |
| D. Self-hosted VPS | DigitalOcean/Hetzner + Coolify + same-server PG | ₹600 – 2,100 | ₹7,000 – 25,000 | Maximum control; needs ops skills |

---

### Option A — Vercel + Managed Postgres (Recommended)

| Component | Service | Monthly | Notes |
|---|---|---|---|
| Frontend (Next.js/React) | Vercel Pro (1 seat) | ~$20 (₹1,680) | Commercial use allowed; 1TB bandwidth, functions incl. |
| Backend API | Vercel Functions / Node | included | Express runs as serverless functions |
| Database | Neon Launch or Supabase Pro | $19–25 (₹1,600–2,100) | 10GB, scale-to-zero options |
| CMS | Sanity Free | $0 | 2 datasets, 500k API req/mo, 20GB assets |
| Image Storage | Cloudflare R2 or AWS S3 | ~$2 (₹170) | R2: zero egress fees |
| CDN + SSL | Vercel / Cloudflare free | $0 | Auto SSL |
| **Total** | | **~$41–47 (₹3,450–3,950)** | |

- **Pros:** Zero-downtime deploys from git, auto SSL, best DX, managed everything.
- **Cons:** Usage overages possible (bandwidth, functions); Vercel Pro needed for commercial use ($20/mo).

### Option B — Budget PaaS (Render)

| Component | Service | Monthly | Notes |
|---|---|---|---|
| Web service (Node/Express) | Render Starter | $7 (₹590) | 512MB RAM, always-on |
| Database | Render Postgres | $7 (₹590) | 1GB (small) |
| Frontend | Render Static Site / same service | included | |
| CMS | Sanity Free | $0 | |
| **Total** | | **~$14–16 (₹1,180–1,350)** | |

- **Pros:** Flat predictable pricing, simple.
- **Cons:** April 2026 bandwidth cuts (25GB egress on Pro workspace); free tier cold-starts slowly. Use ~₹1,200–2,100 realistically with egress.

### Option C — Cloudflare Native (Cheapest)

| Component | Service | Monthly | Notes |
|---|---|---|---|
| Frontend | Cloudflare Pages | $0 | Unlimited bandwidth; commercial use allowed |
| Backend API | Cloudflare Workers | $0–5 (₹0–420) | 100k req/day free; paid $5/mo |
| Database | Neon Free tier (or D1) | $0 | 0.5GB — upgrade later |
| Image Storage | Cloudflare R2 | ~$0–2 (₹0–170) | Zero egress |
| CMS | Sanity Free | $0 | |
| **Total** | | **$0–7 (₹0–590)** | |

- **Pros:** Truly free to start, unlimited bandwidth, commercial OK.
- **Cons:** Express/Node code must be adapted for Workers runtime; less turnkey than Vercel.

### Option D — Self-Hosted VPS

| Component | Service | Monthly | Notes |
|---|---|---|---|
| VPS (app + Postgres) | DigitalOcean 2GB / Hetzner CX22 | $12 (₹1,010) / ~€4.50 (₹405) | Hetzner: 20TB egress incl. |
| Deployment tool | Coolify (self-hosted) | $0 | Git-based deploys, SSL, backups |
| CMS | Sanity Free | $0 | |
| **Total** | | **₹400–1,100** | |

- **Pros:** Cheapest at scale; full control; huge egress allowances (Hetzner 20TB).
- **Cons:** You manage OS, updates, backups, security. Not for non-technical owners.

---

### One-Time Setup Items

| Item | Cost |
|---|---|
| Domain name | ₹800 – 1,500 / year |
| SSL (if not auto-provided) | Free (Let's Encrypt) or ₹2,000 – 5,000 / year |
| Razorpay account | Free (2% per transaction) |
| WhatsApp Business API onboarding (BSP) | ₹0 – 5,000 one-time via BSP, or direct Cloud API |
| Google Maps / GA4 / Search Console | Free tiers |

---

### Variable / Usage-Based Costs (Phase 3)

| Item | Cost | Notes |
|---|---|---|
| AI Chatbot (Claude/GPT) | ₹1,500 – 5,000 / mo | Usage-based tokens |
| WhatsApp Business API | ₹0.15 – 1.1 per message | 2026 India rates: utility ₹0.145–0.21, marketing ₹0.83–1.58; service replies free within 24h window |
| WhatsApp BSP platform fee | ₹0 – 5,000 / mo | Optional; direct Meta Cloud API avoids it |
| Razorpay | 2% per transaction | No monthly fee |

---

### Recommended Stack & Why

For a single hotel property, **Option A (Vercel Pro + Neon + Sanity Free + R2)** is the recommended balance of cost (~₹3,500/mo), reliability, and zero DevOps burden. Budget-conscious launches can start on **Option C (Cloudflare)** for ₹0 and migrate later — the codebase stays the same, so switching is a re-deploy, not a rewrite.

> **Note on running cost estimate:** the Section 11 figure of ~₹60,000/year assumes mid-range usage plus WhatsApp + AI API. A lean deployment (Option C, free tiers) can run closer to ₹10,000–20,000/year excluding Razorpay 2%.

---

## 15. Risk Register & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Delay in client content/images | High | Medium | Content checklist at kickoff; phased deadlines |
| Scope creep post-kickoff | Medium | High | Formal change request process |
| Payment gateway approval delay | Medium | Medium | Start Razorpay KYC at kickoff |
| WhatsApp Business API approval | Medium | Medium | Begin Meta verification early in Phase 2 |
| Third-party API cost overruns | Medium | Low | Usage monitoring; cost alerts |
| Timeline slippage | Medium | High | Milestone-based delivery; weekly reviews |

---

## 16. Approvals

| Role | Name | Signature | Date |
|---|---|---|---|
| Client / Hotel Management | | | |
| Development Partner | | | |

---

*Document Version 1.0 — July 2026 · Prices in Section 14 verified against vendor pricing pages, July 2026.*

# Satya Hospital — Design Redesign Plan

**Author:** Senior UI/UX review
**Date:** 2026-11-13
**Scope:** Visual design, layout, motion, interaction, accessibility and performance.
**Status:** Proposal — no code changed yet.

---

## 0. Ground rules (non-negotiable)

| Allowed to change | Must not change |
| --- | --- |
| Layout, grid, section order *within* a page | Any sentence, heading text, label, number, name, qualification, phone, email, address, FAQ copy |
| Typography (family, scale, weight, rhythm) | Brand colours from the logo: blue `#0f559f`, lime `#b7db13`, ink `#373737` |
| Which colour is the **accent** / primary action | The data in `src/lib/hospital-data.ts` (names, stats, testimonials, insurers, treatments) |
| Hero composition, cards, lists, tables, badges | Razorpay links, Google Maps embed, omnidim widget |
| Scroll/entrance animation and micro-interactions | Routes and URLs (`/orthopedics#knee-pain` etc.) |
| Component anatomy, spacing, radius, shadows, icons | Factual claims ("since 1995", "35+ years", "3 Modular OTs") |

Everything below is **presentation only**. Where a section is re-composed, the exact same strings move with it.

---

## 1. Diagnosis — why it currently reads as "AI-generated"

Evidence from the codebase, not opinion:

| # | Finding | Evidence |
| --- | --- | --- |
| 1 | **One card, repeated forever.** Nearly every section is the same thing: a 3- or 4-column grid of white `rounded-2xl/3xl` cards, each with a 48×48 gradient icon tile, a semibold title and a one-line grey description. Specialities, Services, Technology, Awards, Journey, Resources — six consecutive sections, one visual idea. | `Home.tsx:230-261, 349-363, 389-400, 458-470, 544-557, 658-681` |
| 2 | **Every section has the same header.** `SectionHeader` (uppercase tracked eyebrow → 3xl title → grey intro) is used **24 times**. The cadence itself is the tell. | 24 × `<SectionHeader>` |
| 3 | **Uniform motion.** `<Reveal>` wraps **76 elements** with the identical 16px fade-up and a mechanical `i * 60ms` stagger. Everything enters the same way, so nothing is emphasised. | `Reveal.tsx`, `styles.css:206-220` |
| 4 | **No typographic contrast.** `--font-display` and `--font-sans` are both Open Sans. Headings and body differ only by size. There is no editorial voice. | `styles.css:36-37` |
| 5 | **Dead font loads.** `index.html` fetches **Inter + Space Grotesk**; the stylesheet loads **Open Sans** and uses only that. Two render-blocking requests for fonts that never paint. | `index.html:22-25` vs `styles.css:5` |
| 6 | **The shadows do not exist.** `shadow-elevated/50` is used on **31 cards** — Tailwind v4 does not accept an opacity modifier on a custom `@utility`, so the class compiles to *nothing*. Verified in the built CSS: only `.shadow-elevated` exists. Those 31 cards render as flat 1px outlines. | `dist/assets/index-w6O8KMiH.css` |
| 7 | **Gradients as decoration.** `gradient-brand` appears **24 times**, mostly as a blue gradient chip behind an icon. This is 2021 SaaS-template language, not healthcare. | `Home.tsx:353, 393`, etc. |
| 8 | **Incoherent accent.** The hero CTA is lime, the header CTA is a blue gradient, the doctor-card CTA is a blue gradient, `btn.primary` is flat blue. Four treatments for "the main action". | `Home.tsx:106, 324`, `Header.tsx`, `buttons.ts` |
| 9 | **Flat section rhythm.** Every band is `py-20 lg:py-28` on alternating white / `#f5fbf8`. Fifteen equal-weight sections on the homepage with no climax and no density change. | `Home.tsx:58-79` |
| 10 | **Hover lies.** Static `<div>` cards lift on hover (`hover:-translate-y-0.5`) even though nothing is clickable. | `Home.tsx:352, 392` |
| 11 | **Header eats the fold.** On `/` there are three stacked bars — utility strip (44px) + nav (80–96px) + anchor rail (~44px) ≈ 190px of chrome, plus the `scroll-margin-top: 10rem` hack to compensate. | `Header.tsx`, `styles.css:201-203` |
| 12 | **Weak trust signalling.** Stats are four unexplained numbers; testimonials are three identical cards with a hard-coded `★★★★★` string in low-contrast mint; insurers are grey text boxes pretending to be logos. | `Home.tsx:132-149, 476-507, 565-589` |
| 13 | **Dead dark mode.** A full `.dark` palette exists; the `dark` class is never applied anywhere. Unused surface area that will rot. | `styles.css:127-168` |
| 14 | **Accessibility gaps.** Hover-only dropdowns (keyboard users cannot open them), no `aria-expanded` on the mobile toggle, no visible focus ring, decorative stars unlabelled, group `<label>` with no `htmlFor`/fieldset on the booking form, lime on white fails AA for text. | `Header.tsx`, `Appointment.tsx:133-135` |
| 15 | **43 MB of source images.** Four PNGs over 5 MB each, a 2.6 MB portrait, a 2.4 MB **PDF** in `src/assets`. No `srcset`, no modern formats, no dimensions on the hero → poor LCP and layout shift on 4G, which is how most Kanpur patients will arrive. | `du -sh src/assets` → 43M |

**Summary:** the site is tidy and inoffensive, and that is exactly the problem. It has one idea repeated fifteen times. A real hospital site has a *hierarchy* — one thing on the page matters most (booking / emergency), a few things matter next (doctors, specialities), and the rest is reference material presented densely.

---

## 2. What the best hospital sites do (Medanta, Apollo, Fortis, Mayo, Cleveland Clinic)

Patterns worth borrowing — all achievable with our existing content:

1. **Task-first hero.** The hero is not a poster; it is a doorway. Medanta puts a search + a rail of patient tasks ("Find a Doctor", "Book Appointment", "Health Checkup", "Second Opinion", "Virtual Consultation") immediately under the banner. Patients arrive with a job, not to read a tagline.
2. **One obvious emergency path, always visible.** Phone number persistent, high-contrast, reachable in one tap on mobile.
3. **Specialities as a dense, scannable index**, not a sparse card grid. A patient scanning for "knee" should see 20 entries at once, not six giant tiles.
4. **Doctors are the product.** Large portraits, structured credentials, a direct "Book with Dr. X". This is the highest-trust asset Satya has (Dr. A.K. Agrawal, Dr. Manisha Agrawal) and it is currently the 4th section down, styled like everything else.
5. **Accreditation and insurance presented as a quiet, credible band** — small, dense, factual. Not a hero-sized section with a card grid.
6. **Editorial depth pages** (health library / patient resources) with real reading typography — measure, scale, subheads — which signals a real institution.
7. **Sticky mobile action bar** (Call · Book · Directions). Non-negotiable for an Indian hospital site; majority of traffic is mobile.

---

## 3. Design direction: **"Clinical Warmth"**

The current system is named "Clinical Minimalism" in the stylesheet comment. The problem is it achieved the *minimalism* and not the *clinical confidence*. The new direction keeps the restraint but adds hierarchy, warmth and editorial character.

**Three principles:**

1. **Structure in blue, energy in lime.** Blue is the architecture — headers, footer, section bands, body hierarchy. Lime is the single reserved accent for *action and progress*. If it's lime, it's something you can do.
2. **Density is trust.** Hospitals earn credibility by showing depth, not whitespace. Dense, well-set lists beat sparse card grids.
3. **Motion is punctuation, not decoration.** At most three sections on a page animate meaningfully. Everything else simply appears.

### 3.1 Colour & accent strategy

Logo colours are fixed. What changes is **role assignment**, plus derived tints (same hues, different luminance — not new brand colours).

**Recommendation: lime becomes the primary action accent; blue becomes structure.**

Why: every hospital in India is blue-on-white. Satya's logo already contains a distinctive lime that is currently demoted to a pastel background wash (`--accent-mint: #deee8c`). Promoting it to the action colour makes the site instantly recognisable and gives a single, unambiguous "this is clickable" signal. Blue solid stays as the secondary button and as the structural colour, which keeps medical trust intact.

```css
:root {
  /* ——— Brand (unchanged, from logo) ——— */
  --blue-700:  #0f559f;   /* primary brand */
  --blue-800:  #0b3a6b;   /* deep — footer, hero scrim, page headers */
  --blue-600:  #2e6093;
  --lime-500:  #b7db13;   /* action accent */
  --lime-400:  #bbd53f;
  --ink:       #373737;

  /* ——— Derived (tints of the same hues — not new brand colours) ——— */
  --blue-050:  #eef4fb;   /* tinted surface, replaces the mint-ish #f5fbf8 */
  --blue-100:  #d8e6f5;   /* hairlines, chips */
  --lime-700:  #5f7405;   /* AA-safe lime for TEXT on light (7.1:1 on white) */
  --lime-050:  #f4fade;   /* lime surface wash */
  --ink-600:   #5b6672;   /* secondary text — AA on white */
  --ink-400:   #8995a3;   /* tertiary / meta only, never body */

  /* ——— Roles ——— */
  --action:        var(--lime-500);   /* primary CTA fill */
  --action-ink:    #15200a;           /* text on lime — 11.4:1 */
  --action-hover:  var(--lime-400);
  --surface:       #ffffff;
  --surface-sunk:  var(--blue-050);
  --surface-deep:  var(--blue-800);   /* inverted bands */
  --border:        var(--blue-100);
  --focus:         var(--blue-700);
}
```

**Colour usage rules (enforce in review):**

- Lime fill + `--action-ink` text = **primary action only**. Book Appointment, Pay, Submit, Next.
- Lime **never** as text or icon on white — use `--lime-700` if a lime-flavoured text is wanted.
- Blue `--blue-700` solid = secondary action; outline-on-white = tertiary.
- Inverted bands use `--blue-800`, never a gradient.
- **Retire `gradient-brand` and `gradient-signal` as decoration.** Flat fills only. Gradient survives in exactly one place: the hero scrim.
- Maximum three colours visible in any one viewport (blue, lime, ink + neutrals).

> **Alternative, if lime-as-CTA feels too bold for a maternity/trauma brand:** keep blue CTAs and use lime strictly as an *emphasis marker* — active nav underline, step indicator, stat figures, key-word highlight. Decide at sign-off (§11).

### 3.2 Typography

**Pair a serif display with a neutral UI sans.** A serif headline is the single cheapest signal of "established institution, written by humans" and immediately separates the site from template output.

```
Display / headings:  "Source Serif 4"  (400, 600) — or Lora as a fallback choice
UI / body:           "Inter"           (400, 500, 600) — already preconnected
```

- **Delete Open Sans and Space Grotesk.** One `&family=` request for two families, `display=swap`, Latin subset only.
- Fluid scale with `clamp()`, tight tracking on large sizes only:

```css
--step--1: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
--step-0:  clamp(1rem,     0.97rem + 0.15vw, 1.0625rem);
--step-1:  clamp(1.25rem,  1.18rem + 0.35vw, 1.4375rem);
--step-2:  clamp(1.5rem,   1.38rem + 0.6vw,  1.875rem);
--step-3:  clamp(1.875rem, 1.65rem + 1.1vw,  2.5rem);
--step-4:  clamp(2.25rem,  1.85rem + 2vw,    3.25rem);
--step-5:  clamp(2.75rem,  2.1rem + 3.2vw,   4.25rem);  /* hero only */
```

- Body copy measure capped at **68ch**; intros at 58ch.
- Stats and any figure: `font-variant-numeric: tabular-nums`.
- Body line-height 1.65; headings 1.1–1.2; `text-wrap: balance` on headings, `pretty` on paragraphs.
- **Kill the uppercase-tracked eyebrow as the universal device.** Keep it on at most three sections per page; elsewhere use a short rule + small-caps label, or nothing.

### 3.3 Space, rhythm and radius

- Spacing scale on a 4px base; section padding varies by section *weight*: hero (0) → feature bands `clamp(4rem, 8vw, 7rem)` → reference bands `clamp(2.5rem, 5vw, 4rem)`. **No more identical `py-20 lg:py-28` everywhere.**
- Radius ladder tightened: `--r-sm: 6px`, `--r-md: 10px`, `--r-lg: 14px`. **Retire `rounded-3xl`/`rounded-[2.5rem]`** (28 usages) — oversized radii are a strong template tell. Pills stay pills for buttons/chips only.
- Elevation: three tokens only, and **fix the `/50` bug** by defining a real `shadow-card` instead of an opacity modifier.

```css
--shadow-card:  0 1px 2px rgb(15 85 159 / .06), 0 2px 8px -2px rgb(11 58 107 / .08);
--shadow-hover: 0 2px 4px rgb(15 85 159 / .08), 0 12px 28px -10px rgb(11 58 107 / .18);
--shadow-pop:   0 24px 48px -24px rgb(11 58 107 / .35);   /* dropdowns, modals */
```

Default card = hairline border + `--shadow-card`. Hover elevation **only on interactive cards**.

### 3.4 Iconography & imagery

- Lucide stays, but **stroke 1.5**, sized 20/24, coloured `--blue-700` or inherited — **no gradient tiles**. Where an icon adds nothing (equipment names, treatment chips), remove it.
- Photography gets a consistent treatment: 3:2 or 4:5 crops, a `--blue-800` 6% multiply wash for cohesion, and `object-position` tuned per portrait.
- Portraits: single consistent crop (shoulders up, eyes on the upper third). Currently `object-top` on mixed source ratios gives inconsistent framing.

---

## 4. Motion system (replaces the uniform `Reveal`)

**Budget: no more than 3 "moment" animations per page. Everything else enters plainly or not at all.**

| Tier | Where | Spec |
| --- | --- | --- |
| **0 — None** | Above-the-fold hero text and image (never animate the LCP element), dense lists, tables, footers, nav | — |
| **1 — Appear** | Default for content blocks | opacity 0→1, `translateY(8px)`, 320ms, `cubic-bezier(.2,.6,.2,1)`, once. Stagger 40ms, **capped at 4 items**, then the rest appear together |
| **2 — Moment** | Max 3 per page: stats count-up, patient-journey step reveal, featured quote | 500–700ms, sequenced, triggered at 35% visibility |
| **3 — Continuous** | Hero only | Parallax ≤ 12px, `transform` only, disabled under 768px and under reduced-motion |

Implementation notes:

- Keep `IntersectionObserver` + `once: true` (the current `Reveal` is sound; it is *over-applied*). Reduce 76 usages to ~20 and introduce `<Reveal tier="appear|moment">`.
- Progressive enhancement with CSS scroll-driven animations where supported:
  `@supports (animation-timeline: view()) { … }` — removes JS work on modern browsers.
- Animate only `opacity` and `transform`. Never `height`, `top`, `box-shadow`.
- `prefers-reduced-motion: reduce` → all tiers collapse to tier 0 (already partly handled in `styles.css:222`; extend to count-up and parallax).
- **Sticky-scroll section** (the one genuine scrollytelling moment): "What to expect" / Patient Journey — the 5 steps pin while an index advances. Same five strings, far more memorable.

Micro-interactions (from `references/interaction_patterns.md` in the installed `modern-web-design` skill):

- Buttons: 150ms `transform: translateY(-1px)` + shadow on hover, `scale(.98)` on `:active`, visible `:focus-visible` ring (`2px` `--focus`, `2px` offset).
- Cards: border-colour and shadow transition only. No lift on non-interactive cards.
- Nav: active item marked with a 2px lime underline, animated between items.
- Form fields: label floats, 2px focus ring, inline validation on blur, never on keystroke.

---

## 5. Section vocabulary — breaking the card grid

Define six section archetypes. **Rule: no two adjacent sections may use the same archetype or the same background.**

| Type | Use for | Anatomy |
| --- | --- | --- |
| **A — Editorial split** | About, consultant intros | Asymmetric 7/5 grid, serif headline, image cluster, inline facts list |
| **B — Index** | Specialities, Treatments, Conditions, Insurance | Dense two/three-column list with hairline rules; hover reveals arrow. Scannable, 20+ items visible |
| **C — Feature band** | Emergency CTA, Technology | Full-bleed `--blue-800`, inverted type, one image or one number, one action |
| **D — Data band** | Stats, accreditation | Horizontal row separated by vertical rules, tabular numerals, label beneath, count-up on first view |
| **E — Testimony** | Patient stories | One large pull-quote (serif, `--step-3`) + two compact supporting quotes. Not three equal cards |
| **F — Utility strip** | Timings, insurers, helpline | Compact, low-contrast, high-density. Half the vertical padding of other bands |

**Cards survive only where cards are right:** doctors, patient resources, speciality landing tiles. That is 3 usages, not 10.

---

## 6. Page-by-page plan

### 6.1 Home — `src/routes/Home.tsx`

Current order (15 equal sections): Hero → Stats → About → Specialities → Doctors → Services → Technology → Treatments → Journey → Stories → Awards → Insurance → FAQ → Resources → Visit → CTA.

**Proposed composition (same sections, same copy, re-weighted and re-typed):**

| # | Section | Archetype | Change |
| --- | --- | --- | --- |
| 1 | **Hero** | — | Full-bleed image, layered scrim (not a single 65% diagonal) so white text clears 4.5:1 across the whole plate. Headline in serif at `--step-5`. Existing eyebrow, headline, paragraph **verbatim**. Two actions only: **Book Appointment** (lime) + **24×7 Emergency — call** (outline). "Get Directions" moves to the rail below. |
| 2 | **Action rail** *(new composition, no new data)* | — | A 4-up bar overlapping the hero bottom edge: **Book Appointment · Find a Doctor · Emergency 24×7 · Get Directions**. All four already exist as links in the header/hero/footer — this just gives patients the Medanta-style doorway. Collapses to a 2×2 grid on mobile. |
| 3 | **Stats** | D | Vertical rules, tabular numerals, count-up once. Same four pairs from `stats`. |
| 4 | **About** | A | Keep the split; asymmetric 7/5, serif headline, image cluster with consistent crops and a real shadow. |
| 5 | **Doctors** | A / card | **Promote above Specialities.** Dr. A.K. Agrawal and Dr. Manisha Agrawal as large featured profiles — portrait at 4:5, credentials in a structured definition row, focus list, one lime "Book Appointment". This is Satya's strongest asset and is currently buried. |
| 6 | **Specialities** | B | Convert six cards → an index list. Name + one-line description + arrow, hairline-separated, 2 columns. Dentistry (non-linked) rendered without the affordance. |
| 7 | **Services** | B | Index list, same treatment, no icon tiles. |
| 8 | **Technology** | C | Inverted `--blue-800` band. The equipment names set as a typographic list, with the "Robotic Knee Resurfacing" line from the existing intro given emphasis. No 4-up icon grid. |
| 9 | **Treatments** | B | Keep the chip cloud but tighten: smaller chips, hairline borders, lime hover. Fine as-is conceptually. |
| 10 | **Journey** | Moment | Sticky-scroll: steps pin and advance. Five steps, same copy. |
| 11 | **Stories** | E | One featured quote large, two compact. Replace the hard-coded `★★★★★` mint string with a single serif quote mark (decorative stars with no rating data are a credibility risk). |
| 12 | **Standards** | F | Halve the padding. Four items as a compact 4-up with rules, not cards. |
| 13 | **Insurance** | F | Single line of text + chips. Stop styling plain text as if it were a logo grid. |
| 14 | **Resources** | card | Keep as cards — genuinely clickable, genuinely distinct. Tighten radius, fix the shadow. |
| 15 | **FAQ** | — | Full-width accordion on a sunk surface; larger touch targets; `--lime-500` rule on the open item. |
| 16 | **Visit** | A | Map gets a 4:3 ratio box and lazy `loading`; contact rows become a definition list with proper `<dl>` semantics (already close). |
| 17 | **Final CTA** | C | Flat `--blue-800`, not a `rounded-[2.5rem]` gradient slab. Lime primary + phone outline. |

**Net effect:** three card grids instead of eight, four distinct background treatments, one typographic voice with real contrast, and a clear climax (Doctors + Booking) instead of a flat run of equals.

### 6.2 Header — `src/components/site/Header.tsx`

- **Collapse three bars to two.** Merge the utility strip into the main bar on desktop (address left, emergency number right at `--step--1`); on scroll past 120px, the bar condenses 96px → 64px and the utility line fades out.
- **Anchor rail appears only after the hero leaves the viewport**, and sticks under the condensed bar. Removes the 190px fold-eater and the `scroll-margin-top: 10rem` hack (retune to `6rem`).
- **Fix the dropdowns:** `:focus-within` + click/Escape handling, `aria-expanded`, `aria-controls`, roving focus. Currently keyboard users cannot reach the Orthopedics submenu at all.
- Active state: 2px lime underline instead of a filled pill.
- `Book Appointment` becomes the lime action; `Emergency 24×7` becomes an outline button with the phone icon.
- Mobile: `aria-expanded` on the toggle, focus trap while open, 48px row heights, and a **sticky bottom action bar** (Call · Book · Directions) on all pages.

### 6.3 Page headers — `src/components/site/PageHeader.tsx`

- Replace the blue gradient with flat `--blue-800` and a 1px lime rule at the baseline.
- Breadcrumb in `--step--1`, lime current-page token, proper `aria-current="page"`.
- Title in serif `--step-4`, intro capped at 58ch.
- Optional per-page portrait/image slot for speciality pages (reuses existing assets only).

### 6.4 Speciality pages — `SpecialtyPage.tsx`, `Orthopedics.tsx`, `Infertility.tsx`, …

- **Semantic fix:** the rule-flanked `<h2>` currently used for the section label is a heading used as decoration; and in `SpecialtyPage` the card's section title is an `h2` inside a list of peers. Restructure to `h1 → h2 → h3` cleanly.
- Topic articles (`Orthopedics.tsx:109-138`) keep the 1/3 + 2/3 split but gain: a sticky in-page topic index on the left at `lg`, numbered topics, and generous reading typography. This is the site's deepest content — it should look like a reference, not a card.
- The repeated rule-flanked label device (used on every group) is reduced to a single small-caps label + hairline.
- Bottom "Consult" band → archetype C, consistent across all speciality pages.

### 6.5 Appointment — `src/routes/Appointment.tsx`

Design changes:

- Stepper → horizontal progress with lime fill, step labels beneath, current step announced via `aria-current` and a `role="status"` live region.
- Selection cards → radio cards with real `<input type="radio">` inside `<fieldset>/<legend>` (currently a bare `<label>` with no control — invisible to screen readers).
- Date/time → a proper two-pane picker, times as a wrapped chip grid with 44px targets and disabled states.
- Summary panel sticky on desktop so the patient always sees what they are booking.
- Confirmation screen: lime check, appointment ID in tabular numerals with a copy affordance.

**One flow recommendation (needs your sign-off — it changes step order, not data):** payment is currently step 1 of 5, before the patient has chosen a department, doctor or time. Asking for ₹500 before showing availability is the single biggest conversion leak on the site. Recommended order: **Department → Doctor → Date & time → Details → Payment**. Same five steps, same fee, same Razorpay links — only the sequence changes. Flagged separately in §11 because it is a flow decision, not a styling one.

### 6.6 Footer — `src/components/site/Footer.tsx`

- Flat `--blue-800`, lime hairline at the top edge.
- Four columns → a 5-col grid with the brand block spanning 2 (already close); column labels in small-caps, links at `--step-0` with 32px rhythm.
- Social links as labelled icon buttons (44px targets), not underlined text.
- Keep all links and copy exactly as they are.

---

## 7. Accessibility — target WCAG 2.2 AA (AAA on body text)

| Item | Action |
| --- | --- |
| Contrast | Audit every pair. `--lime-500` text on white **fails** (1.9:1) → use `--lime-700`. `text-white/85` on the hero image → layered scrim + raise to `/95`. `--muted-foreground: #6b7d90` on `#f5fbf8` is 3.9:1 → replace with `--ink-600`. |
| Focus | Global `:focus-visible` ring token; never `outline: none` without a replacement. |
| Keyboard | Dropdowns operable by keyboard (currently hover-only), Escape closes, focus trap in the mobile sheet. |
| Targets | 44×44 minimum for all buttons, chips, nav rows, time slots. |
| Semantics | `h1` once per page; fix heading-as-decoration in the speciality pages; `<nav aria-label>` on each nav; `<dl>` for contact pairs. |
| Forms | `fieldset`/`legend` for grouped choices, `label[for]` on every input, errors tied with `aria-describedby`. |
| Motion | Full `prefers-reduced-motion` coverage including count-up and parallax. |
| Skip link | Add "Skip to content" as the first focusable element. |
| Decorative text | Remove or label the `★★★★★` string; mark decorative icons `aria-hidden`. |
| Language | `lang="en"` present; add `lang` on any Hindi strings if introduced later. |

Verify with axe-core + manual keyboard pass per page.

---

## 8. Performance — budget and asset pipeline

Target on a 4G Indian mobile connection: **LCP < 2.5s, CLS < 0.1, INP < 200ms**, total homepage transfer **< 900 KB**.

| Issue | Action |
| --- | --- |
| 43 MB in `src/assets`, four PNGs > 5 MB | Re-encode everything to AVIF + WebP with JPEG fallback; cap longest edge at 1920px. Expect ~95% reduction. |
| `hero-hospital.pdf` (2.4 MB) shipped in assets | Delete — it is not referenced by the app. |
| No `srcset` / dimensions | `<picture>` with `srcset` at 640/960/1440/1920; explicit `width`/`height` on every `<img>` to kill CLS. |
| Hero not prioritised | `fetchpriority="high"`, `loading="eager"`, preload the chosen source; everything else `loading="lazy"` + `decoding="async"`. |
| Two unused font families | Remove Open Sans and Space Grotesk; load one request for Source Serif 4 + Inter, Latin subset, `display=swap`, with the existing preconnects. |
| No route splitting | `React.lazy` + `Suspense` per route; the 964-line data module should not ship with the first paint of every page. |
| Map iframe | `loading="lazy"` (present) + fixed aspect box so it cannot shift layout. |
| Third-party widget | `omnidim` script stays `async`; constrain its container (already done) and verify it is not blocking INP. |
| Dead CSS | Remove the unused `.dark` block (or implement a real toggle — see §11) and the broken `glass-card` / unused gradient utilities. |

Add a CI check: `vite build` + a size budget assertion on the JS/CSS bundles.

---

## 9. Defects found during the review (fix as part of this work)

1. **`shadow-elevated/50` compiles to nothing** — 31 cards across the site have no shadow at all. Replace with `shadow-card`. *(Verified against the built CSS.)*
2. **Duplicate nav entry:** "Hip Replacement" is listed twice in the Orthopedics dropdown (`Header.tsx`).
3. **Unused fonts** fetched render-blocking in `index.html`.
4. **Dark-mode palette** fully defined and never activated.
5. **Hover-lift on non-interactive cards** — false affordance.
6. **Hover-only dropdowns** — keyboard-inaccessible navigation.
7. **`<label>` without a control** on the booking form's consultation-type group.
8. **2.4 MB PDF** sitting in `src/assets`.

---

## 10. Implementation roadmap

Phased so the site stays shippable after every phase. No copy changes at any point.

### Phase 1 — Foundation (tokens, type, motion primitives)
**Files:** `src/styles.css`, `index.html`, `src/components/site/Reveal.tsx`, `src/components/site/buttons.ts`
- New colour/role tokens, derived tints, radius ladder, shadow tokens (fixes the `/50` bug).
- Font swap: Source Serif 4 + Inter; remove Open Sans / Space Grotesk; fluid type scale.
- `Reveal` gains tiers; global reduced-motion coverage; `:focus-visible` ring.
- `btn` becomes a variant map: `action` (lime) / `solid` (blue) / `outline` / `ghost` / `link`, with sizes.
- **Acceptance:** site renders unchanged in structure, visibly changed in type and colour weighting; zero copy diffs; Lighthouse a11y ≥ 95.

### Phase 2 — Chrome (header, footer, page headers, mobile bar)
**Files:** `Header.tsx`, `Footer.tsx`, `PageHeader.tsx`, `SiteLayout.tsx`, new `MobileActionBar.tsx`
- Two-bar header with scroll condense; deferred anchor rail; accessible dropdowns; sticky mobile action bar; flat page headers.
- **Acceptance:** full keyboard pass through nav; fold gains ~120px on mobile; `scroll-margin-top` retuned.

### Phase 3 — Section archetypes
**Files:** new `src/components/site/sections/` — `IndexList.tsx`, `DataBand.tsx`, `FeatureBand.tsx`, `EditorialSplit.tsx`, `Testimony.tsx`, `UtilityStrip.tsx`
- Build the six archetypes with props only; no content embedded.
- **Acceptance:** each archetype documented with a usage example; no archetype hard-codes a string.

### Phase 4 — Home recomposition
**Files:** `src/routes/Home.tsx`
- Hero + action rail, section re-weighting per §6.1, Doctors promoted, card grids reduced to three.
- **Acceptance:** every string in the file is byte-identical to today (verify with a word-level diff of rendered text); no two adjacent sections share an archetype or background.

### Phase 5 — Inner pages
**Files:** `SpecialtyPage.tsx`, `Orthopedics.tsx`, `Infertility.tsx`, `Services.tsx`, `Doctors.tsx`, `Departments.tsx`, `About.tsx`, `Facilities.tsx`, `Infrastructure.tsx`, `Contact.tsx`, `NotFound.tsx`
- Apply archetypes, fix heading semantics, sticky topic index on long speciality pages.

### Phase 6 — Appointment flow
**Files:** `src/routes/Appointment.tsx`
- Accessible radio cards, real stepper, sticky summary, improved date/time picker. Step reorder **only if approved** (§11).

### Phase 7 — Assets & performance
- Image re-encode pipeline, `<picture>` everywhere, route splitting, dead-CSS removal, bundle budget in CI.
- **Acceptance:** homepage transfer < 900 KB, LCP < 2.5s on simulated 4G, CLS < 0.1.

### Phase 8 — QA
- Axe pass on every route; keyboard pass; 320px / 768px / 1024px / 1440px / 1920px; iOS Safari + Android Chrome; reduced-motion pass; **content diff audit** confirming zero copy changes.

---

## 11. Decisions needed from you before Phase 1

1. **Accent strategy** — lime as the primary CTA colour (recommended, differentiating), or blue CTAs with lime as an emphasis-only marker (safer, more conventional)?
2. **Display typeface** — serif (Source Serif 4 / Lora — recommended, institutional warmth) or a second sans (e.g. a grotesk) for a more clinical-modern feel?
3. **Appointment step order** — keep payment first, or move it last? *(Flow change, no data change. Strongly recommend moving it last.)*
4. **Dark mode** — delete the dead palette, or implement a real toggle?
5. **Action rail labels** — the four doorway tasks reuse existing destinations ("Book Appointment", "Find a Doctor" → `/doctors`, "Emergency 24×7" → tel, "Get Directions" → maps). Confirm these labels are acceptable, since the rail itself is a new UI element even though every destination already exists.
6. **Patient photography** — the current library is heavy on facility/OT shots. Any appetite for new photography (consultation rooms, reception, staff at work)? Not required, but it is the largest remaining lever on perceived quality.

---

## 12. Definition of done

- [ ] Zero changes to any user-visible string, number, name or link (verified by text diff).
- [ ] Brand blue and lime unchanged; only role assignment and derived tints differ.
- [ ] No more than three card-grid sections on any page.
- [ ] No two adjacent sections share an archetype or background.
- [ ] `<Reveal>` usage reduced from 76 to ≈20; at most three tier-2 moments per page.
- [ ] All 31 broken shadows fixed.
- [ ] Lighthouse: Performance ≥ 90 mobile, Accessibility ≥ 95, Best Practices ≥ 95.
- [ ] LCP < 2.5s, CLS < 0.1, INP < 200ms on simulated 4G.
- [ ] Full keyboard operation of nav, dropdowns, mobile menu and booking flow.
- [ ] `prefers-reduced-motion` honoured by every animation including count-up and parallax.
- [ ] Homepage transfer < 900 KB; `src/assets` under 5 MB.

---

*Design references consulted: Medanta, Apollo Hospitals, Fortis, Mayo Clinic, Cleveland Clinic; plus the `modern-web-design` skill installed at `.claude/skills/modern-web-design/` (`references/interaction_patterns.md`, `references/accessibility_guide.md`, `references/performance_checklist.md`).*

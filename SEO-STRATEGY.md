# H-World Ad Hoc — Branded SEO Domination Plan

**Site:** `adhoc.hworldinc.com` · **Parent:** `hworldinc.com`
**Goal:** own the search results for *hworld*, *hworld adhoc*, *hworld construction*, *hworld marine*, *hworld inc*.
**Status:** Phases 1–3 implemented. Phase 4 (off-site) is account work, still outstanding.

> **Brand note:** the company's actual name is **H-World**. The `hworldinc` domain was chosen only because `hworld.com` was already taken (by the hotel group, see §1). We therefore optimise for **both** `hworld` and `hworld inc`, treating "H-World Inc" as an alternate name rather than the primary. Every `alternateName` in the schema and every page title reflects this.

---

## 1. Reality check: what we can and cannot win

I researched the live search landscape before writing this. One finding changes the whole strategy and you need it before anything else.

### The blocker: "H World" is already owned by a NASDAQ-listed giant

**H World Group Limited** (NASDAQ: **HTHT**, formerly Huazhu Hotels Group) is a Chinese hotel operator running **13,215 hotels and 1.3 million rooms across 21 countries**. They own `hworld.com` and `ir.hworld.com`, and they have a Wikipedia entity, an investor-relations site, and coverage on GlobalData, ZoomInfo and TradingKey.

Google has already resolved the string "hworld" to that company as a **Knowledge Graph entity**. For the bare query `hworld`, we are not competing on page quality; we are competing against an established entity match backed by a multi-billion-dollar public company.

**Honest verdict on the five targets:**

| Target query | Winnable? | Why | Realistic outcome |
|---|---|---|---|
| `hworld adhoc` | **Yes — easily** | Nothing currently ranks. Our subdomain doesn't even appear. Near-zero competition. | **#1, plus sitelinks.** 2–6 weeks. |
| `h-world adhoc` | **Yes — easily** | Same. Hyphen variant, zero competition. | **#1.** 2–6 weeks. |
| `hworld inc` / `hworldinc` | **Yes** | `hworldinc.com` already ranks. We add the subdomain as a second result. | **#1 + #2 (parent + adhoc).** 1–3 months. |
| `hworld construction` | **Yes, but it's the parent's job** | This is an `hworldinc.com` division, not this site. Generic "construction" competitors are weak on the *branded* combination. | **#1 for hworldinc.com.** Needs parent-site work. |
| `hworld marine` | **Yes, but it's the parent's job** | Same. Note `H&H Marine Construction`, `C&H Marine` etc. compete on the generic term, not the branded one. | **#1 for hworldinc.com.** Needs parent-site work. |
| `hworld` (bare) | **No — not realistically** | H World Group (HTHT) entity. | **Realistic: page-1 presence, not #1.** See §2. |

**The reframe you should accept:** chasing #1 for bare `hworld` is a losing use of budget. But that query has almost no commercial value to you anyway — the people typing it want a Chinese hotel. Every query that carries **buying intent for your business** (`hworld adhoc`, `hworld inc`, `hworld planning`, `hworld construction`) is winnable, and most are winnable quickly because **nobody is competing for them at all right now**.

> **The single biggest fact in this document:** `adhoc.hworldinc.com` does not currently appear in search results for its own brand name. That is not a ranking problem. That is an *indexing* problem, and §3 explains why.

---

## 2. The core strategy: entity disambiguation

Everything below serves one objective: **teach Google that "H-World Inc" is a distinct entity from "H World Group (hotels)."**

Right now Google has no reason to believe you exist as a separate organisation. You have no structured data, no sitemap, no cross-property signals, and a subdomain that isn't indexed. To Google, `hworldinc.com` is a small unaffiliated site and `adhoc.hworldinc.com` is nearly invisible.

Entity separation is achieved through four signal types, in order of power:

1. **Structured data (schema.org)** — explicitly declare the Organization, its divisions, its address, and its `sameAs` social profiles. This is the strongest lever we control directly.
2. **Consistent NAP** (Name, Address, Phone) — identical across the site, the parent site, Google Business Profile, LinkedIn, and every directory.
3. **Cross-property internal linking** — parent ↔ subdomain links that declare the relationship.
4. **Third-party corroboration** — Companies House, LinkedIn company page, industry directories, all using the *same* name and address.

Once Google forms the entity, branded queries resolve to you and you get **sitelinks** (the indented sub-links under a result), which is what "dominating" a branded SERP actually looks like in practice.

---

## 3. Technical audit: what is broken right now

I audited the codebase. This is the current state:

| Asset | Status | SEO impact |
|---|---|---|
| `sitemap.xml` | **Missing** | Google has no crawl map. Deep pages may never be discovered. |
| `robots.txt` | **Missing** | No crawl directives, no sitemap pointer. |
| `metadataBase` | **Missing** | **Canonical URLs and OG image URLs cannot resolve.** This is the most damaging single gap. |
| Canonical tags | **Missing** | Duplicate-content risk; Google picks its own canonical. |
| Open Graph / Twitter cards | **Missing** | Links shared to LinkedIn/WhatsApp/Slack render as bare grey boxes. Kills social CTR. |
| JSON-LD structured data | **Missing** | **No entity signal at all.** Root cause of the disambiguation problem. |
| **Homepage metadata** | **Missing entirely** | `app/page.tsx` is `"use client"`, so it **cannot export metadata**. Your most important page has only the generic layout fallback title and no unique description. |
| **Contact page metadata** | **Missing entirely** | Same cause (`"use client"`). |
| Service detail metadata | Present | 13 pages use `generateMetadata`. Good, but titles are not brand-optimised. |
| Orphaned pages | **5 pages** | `financial-services`, `document-management`, `risk-management`, `commercial-management`, `project-estimations` are `hidden: true` — unlinked from nav and listing, but still crawlable. Thin/orphan pages dilute crawl budget. |

**The `"use client"` homepage is the priority-one fix.** It exists because of the scroll-snap `useEffect`. The fix is to split it: keep `app/page.tsx` as a server component that exports `metadata`, and move the snap logic into a small client child component.

---

## 4. Sitemap: the full URL inventory

20 indexable URLs. Priorities reflect commercial value, not vanity.

| URL | Priority | Change freq | Notes |
|---|---|---|---|
| `/` | **1.0** | monthly | Primary brand landing target |
| `/services` | 0.9 | monthly | "hworld adhoc services" |
| `/forensics` | 0.9 | monthly | "hworld forensics" |
| `/about` | 0.8 | yearly | **Entity page** — critical for disambiguation |
| `/contact` | 0.8 | yearly | **NAP page** — critical for local/entity signals |
| `/sectors` | 0.7 | yearly | Includes marine + construction sector terms |
| `/services/program-management` | 0.7 | yearly | |
| `/services/planning-and-controls` | 0.7 | yearly | |
| `/services/project-controls` | 0.7 | yearly | |
| `/services/4d-planning` | 0.7 | yearly | |
| `/services/functional-lead` | 0.7 | yearly | |
| `/forensics/claims-analysis` | 0.7 | yearly | |
| `/forensics/dispute-resolution` | 0.7 | yearly | |
| `/forensics/expert-witness` | 0.7 | yearly | |
| `/services/financial-services` | 0.4 | yearly | **Decision needed** — see below |
| `/services/document-management` | 0.4 | yearly | Currently orphaned |
| `/services/risk-management` | 0.4 | yearly | Currently orphaned |
| `/services/commercial-management` | 0.4 | yearly | Currently orphaned |
| `/services/project-estimations` | 0.4 | yearly | Currently orphaned |

**Decision required on the 5 hidden services.** Pick one:
- **(A) Publish them** — remove `hidden: true`, link them from `/services`. More indexed pages, more long-tail coverage. *Recommended* — the copy is already written and good.
- **(B) Noindex them** — keep them hidden and add `robots: { index: false }`. Cleaner crawl profile.
- Doing neither (current state) is the worst option: crawlable but unlinked.

---

## 5. Meta tags: page-by-page

**Title formula:** `Primary Keyword | Brand`, front-loaded, under 60 characters.
**Rule:** every title contains **"H-World"** — this is how branded search gets won.

| Page | Title (target ≤60 chars) | Description (≤155 chars) |
|---|---|---|
| `/` | `H-World Ad Hoc \| On-Demand Project Planning & Controls` | Expert planning, controls and forensics professionals on your programme within days. H-World Ad Hoc, part of H-World Inc. UK-based, deployed on demand. |
| `/services` | `Ad Hoc Management Services \| H-World Ad Hoc` | Programme management, planning, controls and 4D planning from H-World Ad Hoc. Specialists deployed to your project within days, for as long as you need. |
| `/forensics` | `Construction Forensics & Claims \| H-World Ad Hoc` | Forensic delay analysis, EOT claims, dispute resolution and expert witness services from H-World Ad Hoc. Evidence that holds up in adjudication. |
| `/about` | `About H-World Ad Hoc \| Part of H-World Inc` | H-World Ad Hoc is the on-demand planning and forensics division of H-World Inc, alongside engineering & construction, marine and deal sourcing. |
| `/contact` | `Contact H-World Ad Hoc \| Basingstoke, UK` | Contact H-World Ad Hoc in Basingstoke, Hampshire. Email adhoc@hworldinc.com or call +44 1256 232342. We respond within 24 hours. |
| `/sectors` | `Sectors We Serve \| H-World Ad Hoc` | Rail, energy, marine, oil & gas, infrastructure and commercial construction. H-World Ad Hoc specialists with genuine sector experience. |
| Service pages | `{Service} \| H-World Ad Hoc` | Existing `shortDesc` (already rewritten and strong) |

**Note on `/about` and `/contact`:** these two carry the entity-disambiguation load. `/about` must explicitly state the relationship to H-World Inc and name the sister divisions (construction, marine, deal sourcing) — that is how we associate this domain with `hworld construction` and `hworld marine` without competing against the parent.

---

## 6. Structured data (the highest-leverage item)

Three schema blocks. This is what creates the entity.

**A. Organization + parent relationship** — on every page, in the root layout:
```
Organization
├── name: "H-World Ad Hoc"
├── alternateName: ["H-World Adhoc", "HWorld Ad Hoc", "H World Ad Hoc"]  ← catches spelling variants
├── url: https://adhoc.hworldinc.com
├── logo, email, telephone
├── address: PostalCode RG22 5FE, Basingstoke, Hampshire, GB
├── parentOrganization: { name: "H-World Inc", url: "https://www.hworldinc.com" }
└── sameAs: [LinkedIn, Instagram, X, Facebook]  ← corroboration links
```

**B. Service schema** — on each of the 13 service detail pages, using the existing `title`, `shortDesc`, and `techniques` data. Zero new copy needed.

**C. BreadcrumbList** — on all subpages. This is what produces the breadcrumb trail in the SERP instead of a raw URL.

The `alternateName` array matters more than it looks: it explicitly tells Google that *hworld*, *h-world* and *h world* are the same entity, which is how you capture all the spelling variants your customers actually type.

---

## 7. Off-site: the half we don't control from code

Ranking for a brand name is ~50% on-site and ~50% corroboration. Code alone will not finish this.

| Action | Effort | Impact | Owner |
|---|---|---|---|
| **Google Search Console** — verify domain, submit sitemap, request indexing | 30 min | **Critical** | You |
| **Google Business Profile** — Basingstoke address, category "Construction Consultant" | 1 hr | **Very high** — triggers the branded knowledge panel | You |
| **Bing Webmaster Tools** — submit sitemap | 15 min | Medium | You |
| **LinkedIn company page** — exact-match name + link to site | 30 min | High — LinkedIn ranks well for brand queries | You |
| **Parent-site link** — `hworldinc.com` must link to `adhoc.hworldinc.com` with anchor text "H-World Ad Hoc" | 15 min | **Very high** — passes authority + declares the relationship | Parent site dev |
| **Reciprocal link** — this site's footer links to `hworldinc.com` | 5 min | High | Code (§8) |
| **Companies House / directories** — consistent NAP | 1 hr | Medium-high | You |

**The parent-site link is the highest-value off-site action.** A subdomain inherits far less authority than most people assume; an explicit link with correct anchor text is what binds the two properties into one entity in Google's index.

---

## 8. Architecture decision: subdomain vs subdirectory

You are on `adhoc.hworldinc.com` (subdomain). Google treats subdomains as **partially separate sites** — authority does not flow as freely as within one domain.

- **Subdirectory** (`hworldinc.com/adhoc`) would consolidate all ranking authority into one domain and is **strictly better for SEO**.
- **Subdomain** is easier to deploy and keep independent.

**My recommendation:** stay on the subdomain for now. The migration cost and redirect risk outweigh the gain *at your current traffic level*, and aggressive cross-linking (§7) recovers most of the lost authority. Revisit only if you later consolidate the group's web estate.

---

## 9. Execution plan

**Phase 1 — Foundation (do first; ~2 hours of code)**
1. `app/sitemap.ts` — all 20 URLs, generated from `lib/services.ts` so it never drifts.
2. `app/robots.ts` — allow all, point to sitemap.
3. `metadataBase` in root layout — **unblocks canonicals and OG images**.
4. Fix the `"use client"` homepage so it can export metadata. Same for `/contact`.
5. Canonical URL on every page via `alternates.canonical`.

**Phase 2 — Entity signals (~2 hours)**
6. Organization + parentOrganization JSON-LD in root layout.
7. Service JSON-LD on the 13 detail pages (driven off existing data).
8. BreadcrumbList on subpages.
9. Open Graph + Twitter card defaults; generate a branded 1200×630 OG image.
10. Footer link to `hworldinc.com`.

**Phase 3 — Copy & coverage (~1 hour)**
11. Apply the §5 titles/descriptions.
12. Resolve the 5 hidden services (publish or noindex).
13. Add the sister-division sentence to `/about`.

**Phase 4 — Off-site (yours, ~4 hours)**
14. Search Console + sitemap submission + indexing requests.
15. Google Business Profile.
16. LinkedIn + directory NAP consistency.
17. **Parent-site link** (needs the other site's dev).

---

## 10. Proof: how we verify this actually worked

You asked for proof, so here is the measurement framework. **Baseline everything before Phase 1** or the evidence is worthless.

### Baseline (capture now, before any change)
Run each query in an incognito window and screenshot:
`hworld adhoc` · `h-world adhoc` · `hworld inc` · `hworldinc` · `hworld construction` · `hworld marine` · `hworld planning` · `hworld ad hoc services`
Record: our position (or "not present"), and what occupies positions 1–5.

Also record in Search Console: total indexed pages, total impressions, total clicks (all likely near zero today).

### Verification gates

| Gate | Check | Pass condition | When |
|---|---|---|---|
| **G1 — Technical** | `site:adhoc.hworldinc.com` in Google | ≥15 pages indexed | Week 2–4 |
| **G2 — Crawlability** | Search Console → Pages report | 0 "Discovered, not indexed" errors | Week 2–4 |
| **G3 — Structured data** | [Rich Results Test](https://search.google.com/test/rich-results) | Organization + Service + Breadcrumb all valid, 0 errors | Day 1 after Phase 2 |
| **G4 — Social rendering** | Paste URL into LinkedIn/Slack | Branded image + title + description render | Day 1 after Phase 2 |
| **G5 — Branded rank** | Query `hworld adhoc` | **Position #1** | Week 4–8 |
| **G6 — Brand cluster** | Queries `h-world adhoc`, `hworld ad hoc` | Position #1 | Week 6–10 |
| **G7 — Sitelinks** | Query `hworld adhoc` | Sitelinks appear under our result | Month 2–4 |
| **G8 — Entity formed** | Query `hworld inc` | Both parent and adhoc rank on page 1 | Month 2–4 |
| **G9 — Impressions** | Search Console, branded queries | Sustained upward trend from ~0 | Month 1 onward |

### Honest timeline
- **Weeks 1–2:** indexing begins. No ranking movement yet — this is normal, do not panic.
- **Weeks 4–8:** `hworld adhoc` and variants should hit #1. These are uncontested.
- **Months 2–4:** sitelinks, knowledge-panel eligibility, `hworld inc` dual-ranking.
- **Bare `hworld`:** expect page-1 presence at best. **Not #1.** See §1.

### The one number that matters
> **Can a customer who was told "look up H-World Ad Hoc" find you in one search?**
> Today: **no**. That is the entire problem, and G5 is the gate that closes it.

---

## 11. Legal entity disclosure (added — also fixes Twilio verification)

**Trigger:** Twilio Trust Hub rejected the compliance profile with *"the business name does not match the website ssl certificate, or the website url, or the association cannot be verified."*

**Root cause:** the registered company is **Project World Ltd** (Companies House no. **15385102**, incorporated 3 Jan 2024, registered office 37 Harewood Gardens, Bournemouth, BH7 7RH). Nothing on `hworldinc.com` or this site mentioned that name or number, so no automated check could associate the legal entity with the website. The error was accurate, not a glitch.

**Implemented here:**
- Footer legal disclosure naming Project World Ltd, the company number, jurisdiction and registered office.
- `legalName` + Companies House `identifier` added to the Organization JSON-LD, so machine checks resolve the brand to the entity without parsing the footer.
- Central `site.legal` config in `lib/site.ts`.

**Why this matters beyond Twilio:** UK companies are required under the Companies (Trading Disclosures) Regulations 2008 to display the registered name, company number, place of registration and registered office on their websites. The site was non-compliant. The same disclosure also strengthens the entity signal in §2.

> **Still required:** the Twilio profile points at **`hworldinc.com`**, not this subdomain. The identical disclosure must be added to the parent site before resubmitting. See the handover note in §12.

---

## 12. Scope note

This plan covers `adhoc.hworldinc.com` — the site in this repo. Two of your five target queries (`hworld construction`, `hworld marine`) are **parent-site divisions** and cannot be won from here. This plan makes this site reinforce those terms through entity linking and the sectors page, but winning them outright needs the same Phase 1–2 treatment applied to `hworldinc.com`. Flag it if you want that scoped as a follow-up.

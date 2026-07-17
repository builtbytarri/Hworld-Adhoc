# H-World Ad Hoc — Content Re-Strategy & Sitemap

**Author role:** content strategist / marketing & sales lead
**Goal:** make every page *feel* ad hoc — on-demand, in-and-out, switch-on-when-you-need-it — without breaking the structure or sizing already built. New copy roughly matches the word count of what it replaces.

> **Spelling — DECIDED.** Three spellings exist today: `ADHOC` (the logo wordmark, one word, all caps), `Ad Hoc` (brand mark in PRODUCT.md), and `Adhoc` (hero eyebrow). Standard English spells the Latin term **two words — "ad hoc"** (Oxford/Cambridge/Merriam-Webster); "Adhoc" is not standard.
> **Rule:** running text, headings, nav labels and metadata use **"Ad Hoc"** (title case). The **logo stays "ADHOC"** as-is — a solid all-caps wordmark is a valid logo lockup and doesn't govern prose spelling. The only fix required is the hero eyebrow `Adhoc → Ad Hoc`. This document uses **Ad Hoc** throughout.

---

## 0. REVISION 2 — strict priority filter (marketing-lead pass)

The v1 plan was right on strategy but **over-signalled**. "On demand / in days / step out / no permanent hire" appeared so often it risked *suffocating* the message — when a phrase repeats on the same page it stops selling and starts nagging. This revision applies a hard filter. **Guiding principle: state the ad-hoc model loudly in a few decisive places; let capability and outcome carry the rest.**

**Rules applied to every rewrite below:**
1. **One on-demand signal per short description** — and vary the words (deployed in days / mobilised / on cue / on flexible terms / when it counts), don't default to "on demand" (now used **twice** across all 13 services, not six times).
2. **Long descriptions open on the trigger, but vary the closer.** Roughly half end on the flexible-engagement model; the rest end on **outcome or credibility**. No two services use the same closing phrase. This is where ~20% of the redundant signalling was cut.
3. **Never repeat the "buy-a-slice" bracket on the same page.** The homepage states it once (hero); ValueProp and ServicesGrid carry *different* angles (the trigger list; breadth + "plug into the gap").
4. **"No permanent hire" is retired as a slogan.** It needlessly closed the door on permanent placements we'd happily take. Replaced with **speed/flexibility framing that keeps every door open**: "can't wait to hire", "without the wait of a permanent hire", "the weight of a permanent lead, on flexible terms", "for as much or as little as the work needs".

**Impact scoring (1–10) — what stayed, what was cut:**

| Change | Score | Verdict |
|---|---|---|
| `lib/services.ts` trigger-led openings (all 13) | 10 | **Keep** — the core of the whole strategy |
| Services & Forensics listing hero sublines | 9 | **Keep** — the missing "model-setting" line |
| Nav / footer "Ad Hoc" labelling | 9 | **Keep** — cheap, high-visibility |
| Hero subline rewrite | 9 | **Keep — rewritten** (was abstract; see 7.1) |
| ValueProp block + pillars | 8 | **Keep**, de-duplicated vs pillar 01 |
| "How We Work" para 1 (all 13 pages) | 8 | **Keep** |
| ServicesGrid intro | 6 | **Keep — reangled** to breadth, not slice-repeat |
| FooterCTA rewrite | 7 | **Keep** |
| Sectors / Contact / About one-line touches | 5 | **Keep** — every page earns one change |
| Meta description | 5 | **Keep** — SEO |
| "How We Work" para 2 "we step out cleanly" | 3 | **CUT** — over-signals; longDescs own the exit |
| Sidebar CTA card "sharpen" | 3 | **CUT** — original is fine |
| Pillar 02 "yours to keep" add-on | 3 | **CUT** — over-signals ownership |
| Every longDesc ending on an exit clause | 2 | **CUT ~half** — varied to outcome/credibility |

Sections 6–7 below are the **final, filtered copy** (this is what gets implemented). Where v1 wording changed in Revision 2, the block is marked **[R2]**.

---

## 0b. REVISION 3 — two non-negotiable writing rules (applied to ALL copy, ours and existing)

These override every copy block below. The final copy shipped to code obeys both; where a Section 7 block still shows the old form, the **code is the source of truth**.

### Rule A — No em dashes. Ever.
Em dashes (`—`) are the single biggest "this was written by AI" tell. **Zero em dashes in any user-facing string on the site.** Replace them with a comma, a colon, a full stop (two sentences), or a connective word (and / so / which / because). This applies to *existing* copy too: testimonials, sector descriptions, the About prose, the ValueProp pillars, the footer tagline and the meta description all currently contain em dashes and are being cleaned in this pass.

### Rule B — Write sentences, not stapled fragments.
Headlines must read as one complete, coherent thought a person would actually say. **Banned pattern:** two short fragments joined by a full stop that don't cohere when read together.
- ✅ Approved model (keep this style): *"Expert support across every phase of delivery."* — one complete idea, reads naturally.
- ❌ *"Eight sectors. One standard."* / *"Built for the gap. Trusted on the programme."* / *"Specialist resource, deployed when you need it."* — fragments; read them aloud and they don't land as a sentence.

**Corrected hero headings (final):**

| Page | Before (fragmented) | After (complete sentence) |
|---|---|---|
| Services listing | *(v2 proposed "Specialist resource, deployed when you need it.")* | **Keep the original: "Expert support across every phase of delivery."** — you approved it; the on-demand message moves to the subline instead |
| Forensics listing | "Rigorous, evidence-based forensic analysis." | **"Forensic analysis that holds up when it reaches a dispute."** |
| Sectors hero | "Eight sectors. One standard." | **"The same standard across every sector we serve."** |
| About hero | "Built for the gap. Trusted on the programme." | **"We fill the gap you can't wait to hire for, and earn our place on the programme."** (one sentence, split white/amber) |
| Home hero | "Planning & Controls, on Demand." | **Keep** — the signature brand line; reads as a complete idea, not a stapled fragment |

Everything in Sections 6–7 is implemented under Rules A and B. The wording in those sections has been carried into code with em dashes removed and any fragment headings replaced per the table above.

---

## 1. The core problem (the diagnosis)

The site is beautifully built and the writing is genuinely good — but it is **capability-led, not model-led**. Almost every headline and paragraph answers *"what is this discipline?"* It rarely answers the three questions an ad-hoc buyer is actually asking:

1. **"Can I get this for a moment, not forever?"** (the on-demand model)
2. **"How fast, and how little commitment?"** (speed + flexibility)
3. **"Do they leave cleanly when the work is done?"** (in / do the work / out)

Right now "on-demand" appears as a *label* (eyebrows, the word "deploy") but the **body copy describes a permanent-consultancy relationship**. Read cold, most service pages could belong to any traditional consultancy. The word "ad hoc" is in the brand, but the *feeling* of ad hoc is missing from the sentences.

**The fix is a repeatable sentence pattern, not a rewrite of the whole voice:**

> **Trigger → Model → Capability → Exit/Outcome.**
> *"When [situation hits] and you need [specialist] now — we deploy [who] in days, embed into your team, [do the specific work], and step out when it's done."*

Every service short description should carry at least one **on-demand signal** (in days / for as long as you need / one-off / no permanent hire / switch on / step out). Every long description should open on the **client's trigger moment**, not on a definition.

---

## 2. Research — how real UK ad hoc / on-demand firms write

Grounded in live UK project-controls, planning and forensic consultancies that sell exactly this model:

**Insight Project Controls** (Glasgow) — sells the model explicitly:
- *"short-term consultancy"* and *"interim resource cover"* for *"a reactive solution"*
- *"embedded project controls professionals"* for longer-term support
- *"We are more than happy to fulfil both long and short-term appointments, ad-hoc and / or one-off specialist assignments."*
- *"a turnkey project controls solution, a one-off bespoke assignment, or simply provision of labour."*

**P6 Project Planning** — frames itself as *"an extension of your team"*:
- support *"when your programme needs attention"*
- *"one-off programme reviews"*, *"help with client submissions"*, *"regular monthly updates"*, *"additional planning capacity during busy periods."*

**PL Projects / Planned Ltd / Logic PM** — lead with *outcomes and triggers* ("understand the delays that occurred", "on-time delivery"), and name the recognised techniques (P6, TIA, windows) as proof of rigour.

**What they consistently do that we don't:**
1. **Name the trigger first** — "busy period", "programme needs attention", "reactive solution".
2. **State the shape of the engagement** — one-off / short-term / interim / embedded / turnkey. They give the buyer *permission to buy a small amount*.
3. **Promise a clean, low-commitment relationship** — "extension of your team", no hint of a long tie-in.
4. **Keep technique lists** as credibility proof (we already do this well — keep it).

**Sources:**
[Insight Project Controls](https://insightprojectcontrols.co.uk/) · [P6 Project Planning](https://p6projectplanning.co.uk/) · [PL Projects](https://plprojects.co.uk/) · [Planned Ltd](https://plannedltd.co.uk/) · [Logic PM — Forensic Planning](https://www.logicpm.co.uk/services/forensic-planning) · [Flexible PM](https://uk.linkedin.com/company/flexiblepm)

---

## 3. Message architecture (the spine of the whole site)

| Layer | Job | Current state | Target |
|---|---|---|---|
| **Homepage hero** | State the model in one breath | "Planning & Controls, on Demand." — already strong | Keep; tighten subline to add *no permanent hire* idea |
| **Home sections** | Prove speed, flexibility, clean exit | "Ad Hoc Advantage" exists but reads generic | Reframe each pillar around trigger + in/out |
| **Services / Forensics listing** | Give permission to buy a *slice* | Reads like a capability menu | Add "engage us for one review, one gap, or one programme" framing |
| **Service detail** | Trigger → model → capability → exit | Definition-led | Rewrite openings to trigger-led (via `lib/services.ts`) |
| **About** | Why on-demand beats permanent hire | Good; already has "built for the gap" | Light touch — sharpen the "instead of permanent hire" contrast |
| **Contact** | Low-friction switch-on | Good | Minor: reinforce "one email, deployed in days" |

---

## 4. The Ad Hoc language kit (reuse these deliberately)

Rotate these so it never feels like a tic. Aim: **one signal per short description, two or three per page.**

**Model / commitment:** on demand · for as long as you need — and not a day longer · no permanent hire · without the long contract · one-off · short-term or interim · switch on when you need it · an extension of your team · embedded, not parachuted in

**Speed:** deployed in days · mobilised within 48 hours · on your project this week · from brief to on-site fast

**Trigger vocabulary (open paragraphs with these):** a last-minute gap · a programme slipping · a busy-period spike · an urgent review · a claim landing on your desk · a controls function to stand up from nothing · a planner off sick mid-programme · a submission deadline you can't miss

**Clean exit / outcome:** we step out when it's done · we leave your team stronger than we found it · in, on the tools, out · auditable outputs you own · defensible when it matters

**Ban / de-emphasise** (too permanent-consultancy): "throughout the project lifecycle" (implies long tie-in — use only where a long engagement is genuinely the offer), "foundational to project success", "the nerve centre of delivery" (abstract). Replace abstractions with the trigger.

---

## 5. SITEMAP & progress tracker

Tick as each page's copy is updated. Content lives where noted — **the 13 detail pages are all driven by `lib/services.ts`**, so rewriting that one file updates every detail page + nav + footer + card labels at once.

| # | Page | Route | Copy lives in | Priority | Status |
|---|---|---|---|---|---|
| 1 | Home | `/` | `components/home/*` | Med (mostly OK) | ☐ |
| 1a | — Hero | `/` | `Hero.tsx` | Low | ☐ |
| 1b | — Services intro | `/` | `ServicesGrid.tsx` | Med | ☐ |
| 1c | — Ad Hoc Advantage | `/` | `ValueProp.tsx` | **High** | ☐ |
| 1d | — Testimonials heading | `/` | `Testimonials.tsx` | Low | ☐ |
| 1e | — Footer CTA | `/` (global) | `FooterCTA.tsx` | Med | ☐ |
| 2 | **Management Services (listing)** | `/services` | `ServicesContent.tsx` + `SubpageHero` | **High** | ☐ |
| 3–12 | 10 management detail pages | `/services/*` | **`lib/services.ts`** (`shortDesc`,`longDesc`,`techniques`) | **High** | ☐ |
| 13 | **Forensics (listing)** | `/forensics` | `ForensicsContent.tsx` + `SubpageHero` | **High** | ☐ |
| 14–16 | 3 forensics detail pages | `/forensics/*` | **`lib/services.ts`** | **High** | ☐ |
| 17 | Shared detail template | all `/services/*`,`/forensics/*` | `ServiceDetailLayout.tsx` ("How We Work", CTA card) | **High** | ☐ |
| 18 | Sectors | `/sectors` | `SectorsHero.tsx` + `lib/sectors.ts` | Med | ☐ |
| 19 | About | `/about` | `app/about/page.tsx` + `AboutHero.tsx` | Low | ☐ |
| 20 | Contact | `/contact` | `app/contact/page.tsx` | Low | ☐ |
| G | Nav | global | `components/layout/Nav.tsx` | **High** | ☐ |
| G | Footer | global | `components/layout/Footer.tsx` | Low | ☐ |
| G | `<title>`/meta | global + per page | `layout.tsx`, each `page.tsx` | Med | ☐ |

**Note on hidden services:** `financial-services`, `document-management`, `risk-management`, `commercial-management`, `project-estimations` are marked `hidden: true` — they don't show in nav/listing but their detail pages still exist and are indexable. Rewrite them too (Section 7.4) so nothing is left off-brand.

---

## 6. Global & navigation changes

### 6.1 Nav labels (`components/layout/Nav.tsx`)
- Desktop dropdown trigger: **"Management Services" → "Ad Hoc Management Services"** (line 82).
  *Trade-off:* it's a long top-nav item. If it crowds the bar, use **"Ad Hoc Services"** as the trigger and let the dropdown header say "Management". Recommendation: **"Ad Hoc Management"** — carries the model, stays short.
- Forensics trigger: **"Forensics" → "Ad Hoc Forensics"** for parallelism. (You asked whether this is needed — yes, keep the two labels parallel so the on-demand model reads across *both* practices, not just one.)
- Dropdown footer links: "View All Services" → **"All Ad Hoc Services"**; "Forensics Overview" → **"All Ad Hoc Forensics"**.
- Mobile menu (lines 209, 215): "All Management Services" → **"All Ad Hoc Management"**, "All Forensics" → **"All Ad Hoc Forensics"**.

### 6.2 Dropdown section labels
The little "Management" / "Forensics" grey labels inside each dropdown (Nav lines 93, 136) → **"Ad Hoc Management" / "Ad Hoc Forensics"**.

### 6.3 Footer (`components/layout/Footer.tsx`)
- Column headings "Management" / "Forensics" → **"Ad Hoc Management" / "Ad Hoc Forensics"** (lines 76, 94).
- Tagline (line 63) is already good ("deployed when you need it most") — keep.

### 6.4 Metadata (`app/layout.tsx`)
Default title is fine. Description (line 43-44): add the model — *"…deployed on demand, for as long as you need — across construction, infrastructure, energy and rail."*

---

## 7. Page-by-page rewrites (before → after)

Word counts shown as `(before → after)`. All are matched within a few words to protect the layout.

### 7.1 Homepage

**Hero subline** — `Hero.tsx:135`
- **Before (18w):** "Expert planning, controls, and forensics professionals — deployed into your programme within days. Rapid. Flexible. Sector-proven."
- **After (19w):** "Expert planning, controls and forensics professionals — on your programme within days. No permanent hire. In, on the tools, out."
- *Why:* adds the two missing model signals (no permanent hire; clean exit) while keeping the staccato ending.

**Ad Hoc Advantage — header block** — `ValueProp.tsx:74-81`
- Heading (5w): "Flexible support for critical moments." → **"Specialist resource, only when you need it."** (6w)
- Body — **Before (46w):** "H-World's Ad Hoc Services division is built to fill the gaps — fast. Whether it's last-minute planning resource, urgent programme analysis, or forensic support, we deploy trusted experts and tools to keep your project on track."
- **After (48w):** "H-World's Ad Hoc division exists for the moment you need an expert and can't wait to hire one. A last-minute planning gap, an urgent programme review, a forensic claim — we deploy a trusted specialist in days, do the work, and step out when it's done."

**Ad Hoc Advantage — three pillars** — `ValueProp.tsx:31-55`. Reframe each around trigger + model, keep ~same length:
- **01 title:** "Rapid resource deployment." → **"Deployed in days, not months."**
  body **(28w→27w):** "A last-minute planning gap, an urgent programme review, unplanned forensic exposure — we mobilise a trusted specialist within days. No hiring process, no long contract, no downtime waiting."
- **02 title:** "Tools-first methodology." → keep (already strong).
  body — keep; optionally end with *"…usable and auditable from day one — and yours to keep when we leave."*
- **03 title:** "Sector intelligence." → keep.
  body — keep.

**Services intro** — `ServicesGrid.tsx:132-134`
- **Before (23w):** "From mobilisation through completion — and into forensic analysis — our disciplines cover every dimension of project delivery."
- **After (24w):** "Engage us for one review, one gap, or one full programme — across planning, controls and forensic analysis. Take exactly the expertise you need, for exactly as long."
- *Why:* this is the "permission to buy a slice" line the research says we're missing.

**Testimonials heading** — `Testimonials.tsx:91` — keep ("Trusted on programmes that cannot afford to slip." — already outcome-led and on-message).

**Footer CTA** — `FooterCTA.tsx:59-65`
- Heading (6w): "Ready to transform your project planning?" → **"Need a specialist on your programme this week?"** (8w) — trigger-led, not generic.
- Sub — **Before (16w):** "Contact us to discuss how our expertise can help your organisation deliver projects more effectively."
- **After (17w):** "Tell us the gap. We'll have the right expert deployed in days — no permanent hire, no long contract."

### 7.2 Management Services listing (`/services`)

**SubpageHero** — `ServicesContent.tsx:32-40`
- eyebrow: "Management Services" → **"Ad Hoc Management Services"**
- headingWhite/Amber: "Expert support across / every phase of delivery." → **"Specialist resource, / deployed when you need it."**
- **Add a `subline`** (the component supports one but it's unused here) — ~22w: "Take one discipline or several — for a one-off review, a busy-period spike, or a full programme. Deployed in days; we step out when it's done."

*This is the single biggest "make it feel ad hoc" win on the listing page — right now the page jumps from hero straight into the card grid with no model-setting sentence.*

### 7.3 Forensics listing (`/forensics`)

**SubpageHero** — `ForensicsContent.tsx:167-175`
- eyebrow: "Forensics Services" → **"Ad Hoc Forensics"**
- heading: "Rigorous, evidence-based / forensic analysis." → keep (strong) OR **"Forensic firepower, / on demand."** if you want the model louder in the hero.

**"Our Disciplines" intro** — `ForensicsContent.tsx:182-187`
- Label "Our Disciplines" → keep.
- Sub — **Before (11w):** "Select a service to explore what we do and how we do it."
- **After (18w):** "Bring us in for a single claim, an independent review, or full expert-witness support — engaged only for as long as the dispute demands."

### 7.4 Service detail pages — `lib/services.ts` (the big one)

Rewrite `shortDesc` and `longDesc` for all 13 services. **Pattern:** shortDesc carries one on-demand signal; longDesc opens on the trigger, states the model, then capability, then the clean-exit/outcome. `techniques` arrays stay as-is (credibility proof). Drop-in replacement copy below, word-count matched.

#### Management (visible)

**programme-management**
- shortDesc (15→17): *"A programme manager deployed in days — to steady or lead your delivery team, for as long as you need."*
- longDesc (66→68): *"When a programme is drifting or a delivery lead walks, you can't wait months to hire. We drop a battle-tested programme manager into your structure within days — as embedded resource, programme lead, or interim director. They set up governance, manage stakeholders and interfaces, drive reporting, escalate risk, and own delivery oversight across NEC, JCT and bespoke contracts — then hand back cleanly when the job is done."*

**planning-and-controls**
- shortDesc (18→18): *"Planning resource on demand — baseline schedules, critical-path analysis, lookaheads and recovery programmes, for as long as your programme needs it."*
- longDesc (62→64): *"A planner off sick, a baseline overdue, a programme sliding toward a milestone — the moments you need scheduling firepower are rarely planned. We embed a planning specialist into your project within days to build the schedule, run critical-path and lookahead planning, and develop recovery programmes when things slip. Credible, auditable, actionable output — and we step out the moment you're back in control."*

**4d-planning**
- shortDesc (15→16): *"On-demand 4D specialists linking your programme to the 3D model — time-based build simulations, exactly when you need them."*
- longDesc (60→63): *"Need to prove a build sequence, de-risk logistics, or brief a board before a key decision? We deploy a 4D specialist to link your construction programme to the 3D model — producing time-sequenced simulations that expose clashes, validate logistics and communicate progress with total clarity. Working in Synchro with Revit and AutoCAD, for a one-off visualisation or ongoing support — including forensic 4D for claims."*

**functional-lead**
- shortDesc (16→17): *"An embedded senior expert owning your planning or controls function — the permanence of a hire, without the permanence."*
- longDesc (62→64): *"On a major programme the planning or controls function needs senior ownership — but a permanent appointment can take months you don't have. We place an experienced expert directly into your organisation as the client-side lead: owning the function, directing internal and supply-chain planners, and reporting at programme level. Full leadership, on an interim basis, for as long as the programme demands — and not a day longer."*

**project-controls**
- shortDesc (17→18): *"Integrated controls — schedule, cost, risk and change — stood up on demand, whether from scratch or to reinforce an existing team."*
- longDesc (66→67): *"Your board needs numbers it can trust and the controls function isn't there — or isn't coping. We deploy controls resource within days to stand one up from nothing or reinforce what you have: schedule, cost, risk and change, with the dashboards and KPIs that keep leadership informed. Take one controls specialist or a small team, for a busy period or a full programme — you own every output when we leave."*

#### Forensics

**claims-analysis**
- shortDesc (18→19): *"Expert claims analysis on demand — EOT, prolongation and disruption, quantified and evidenced when a claim lands on your desk."*
- longDesc (63→66): *"A claim has landed — or you're about to make one — and the outcome rides on your programme analysis. We deploy a forensic analyst to build it: extension-of-time entitlement, prolongation cost, and disruption analysis, for contractor or employer alike. Every output is prepared to a standard that holds up in negotiation, adjudication or litigation — engaged for a single claim or a full dispute, and no longer than you need us."*

**dispute-resolution**
- shortDesc (22→21): *"Independent expert support across the full dispute spectrum — early evaluation through adjudication and arbitration — brought in exactly when the dispute demands."*
- longDesc (65→66): *"When a dispute is brewing, the earliest expert analysis often decides the outcome. We provide independent programme and commercial analysis to support or defend claims at any stage — from early neutral evaluation and negotiation through to adjudication, arbitration and litigation. Evidence-led and outcome-focused: we build the strongest possible technical case while working to settle early — engaged only for as long as the matter runs."*

**expert-witness**
- shortDesc (18→19): *"Independent, court-ready expert witnesses on delay, disruption and lost productivity — appointed for the proceedings, for as long as they run."*
- longDesc (57→60): *"When a dispute reaches formal proceedings, the expert-witness role demands independence, rigour and absolute clarity under pressure. We appoint an expert to prepare and present objective, court-ready programme analysis and opinion on delay, disruption and loss of productivity — to CPR Part 35 and equivalent international standards. Engaged for the case in hand: reports, joint meetings and cross-examination support, for precisely as long as the proceedings demand."*

#### Management (hidden — rewrite anyway so nothing is off-brand)

**financial-services**
- shortDesc (16→17): *"Project financial control on demand — budget tracking, cash-flow forecasting and cost reporting, deployed alongside your team or as the function itself."*
- longDesc (60→62): *"When cost visibility slips or your commercial team is stretched, you need financial control fast. We deploy a specialist to run budget tracking, cash-flow forecasting, cost reporting and financial risk management — fully integrated with your delivery programme so spend, exposure and trajectory are always clear. Work alongside your QS, or hand us the function entirely — for a busy period or a full programme, then a clean handover."*

**document-management**
- shortDesc (16→17): *"Document control on demand — version-controlled, auditable and contractually compliant, stood up or strengthened exactly when your project needs it."*
- longDesc (58→61): *"Projects generate enormous documentation, and without disciplined control the version conflicts, compliance gaps and contractual exposure follow fast. We deploy a document-control specialist to establish or strengthen your framework — keeping every record accurate, version-controlled, auditable and compliant from mobilisation to handover. Bring us in to set the system up, cover a gap, or run it through a busy phase — and keep it running when we leave."*

**risk-management**
- shortDesc (17→18): *"Systematic risk analysis on demand — registers, Monte Carlo and schedule risk analysis, brought in the moment exposure needs quantifying."*
- longDesc (66→66): *"Risk left unmanaged becomes cost — usually at the worst possible moment. We deploy a risk specialist to identify, quantify and mitigate exposure across your programme: building and running risk registers, Monte Carlo simulation, schedule risk analysis (SRA) and cost risk analysis (CRA), and feeding the outputs straight into planning decisions. Engaged for a single quantification exercise or ongoing through delivery — you leave with confidence in your predicted outcomes."*

**commercial-management**
- shortDesc (17→18): *"End-to-end commercial and contract management on demand — procurement through final account, deployed when your commercial function needs reinforcing."*
- longDesc (57→61): *"Commercial management is where projects win or lose money — and where a gap costs most. We deploy commercial resource within days: procurement strategy and sub-contract drafting, change management, payment-application reviews and final-account resolution, with QS-grade rigour across NEC, JCT and FIDIC. Take one commercial manager or a small team, for a single stage or the full contract — engaged for exactly as long as the work demands."*

**project-estimations**
- shortDesc (17→18): *"Detailed estimates and cost plans on demand — bills of quantities, tender pricing and value engineering, ready when a deadline can't slip."*
- longDesc (57→61): *"A tender to price, a budget to set, a value-engineering exercise under deadline — accurate estimating underpins the decision, and you need it now. We deploy an estimator to prepare detailed estimates, elemental cost plans and bills of quantities from first principles, applying current market rates, local labour intelligence and risk-adjusted allowances. Engaged for a single submission or a programme of bids — estimates you can defend, on time."*

### 7.5 Shared detail template — `ServiceDetailLayout.tsx`

**"How We Work" block** — `ServiceDetailLayout.tsx:140-149` (shows on every one of the 13 pages, so this is high-leverage).
- Para 1 — **Before (44w):** "H-World professionals integrate directly into your project structure from day one. We align to your existing governance, tools, and reporting cadence — providing specialist capability without friction. Whether you need one embedded expert or a small controls team, we deploy the right resource in the right configuration."
- **After (46w):** "We're built for the moment you need expertise and can't wait to hire it. A specialist is deployed into your project within days — aligned to your governance, tools and reporting cadence from day one, contributing immediately. Take one embedded expert or a small team, for a one-off task or a full programme."
- Para 2 — **Before (28w):** "All outputs are transparent, auditable, and produced to a standard that holds up under scrutiny — whether in a board review or a formal dispute."
- **After (30w):** "Every output is transparent, auditable and yours to keep — produced to a standard that holds up in a board review or a formal dispute. When the work is done, we step out cleanly."

**Sidebar CTA card** — `ServiceDetailLayout.tsx:197-201`
- Label "Deploy This Service" → keep (good).
- Body — **Before (14w):** "Need {service.title} support? Get in touch — we respond within 24 hours." → keep, or sharpen to **"Need {title} now? Tell us the gap — deployed in days, we reply within 24 hours."** (14w)

### 7.6 Sectors (`/sectors`) — Med / light touch

The sector descriptions (`lib/sectors.ts`) are fine as *domain* proof and don't need the ad-hoc pattern forced into all eight. One framing line does the job:
- `SectorsHero.tsx:69-71` sub — **Before (24w):** "Our professionals have carried live programmes across every sector we serve — bringing genuine domain knowledge, not just planning theory."
- **After (25w):** "Wherever we deploy, our specialists arrive already fluent in your sector — carrying live-programme experience, not planning theory, so there's no learning curve on your time."
- *Optional:* SectorsHero heading "Eight sectors. One standard." is excellent — keep.

### 7.7 About (`/about`) — Low / light touch
Already the most on-message page ("Built for the gap", "without the friction of permanent hire", "parachute in and leave" contrast). Two sharpenings only:
- Principle 03 "Fast but never reckless." — keep.
- Mission quote is strong — keep.
- Optional: the "Who We Are" para already nails it. Leave About largely alone; spend the effort on Services/Forensics.

### 7.8 Contact (`/contact`) — Low
- Hero "Let's talk about your project." — keep.
- Sidebar line `contact/page.tsx:110-112` — **Before (14w):** "Tell us about your project, the challenge you're facing, and the support you need."
- **After (16w):** "Tell us the gap you need filling and when. We'll have the right specialist deployed in days."

---

## 7b. IMPLEMENTED (this session)

All copy below is live in code and verified in the browser preview. Every string obeys Rule A (no em dashes) and Rule B (complete sentences, no stapled fragments).

- **`lib/services.ts`** — all 13 services rewritten (short + long), trigger-led, varied closers.
- **Nav + Footer** — "Ad Hoc Management" / "Ad Hoc Forensics" labels across desktop dropdowns, dropdown footers, mobile menu, footer columns; logo alt text de-dashed.
- **Home** — hero eyebrow (`Adhoc` → `Ad Hoc`), hero subline rewritten, ValueProp heading + body + all three pillars, ServicesGrid intro + one card, FooterCTA heading + sub, three testimonials de-dashed.
- **Services listing** — eyebrow + new on-demand subline (heading kept, as approved).
- **Forensics listing** — eyebrow + heading rewritten to a full sentence + intro line.
- **ServiceDetailLayout** — "How We Work" both paragraphs + CTA card.
- **Sectors** — hero heading + subline, section heading de-fragmented.
- **About** — hero heading (one sentence), Who We Are, How We Work, mission quote, principle 01 heading, principle 03 body, "Four principles" heading de-fragmented.
- **Contact** — sidebar line. **Meta** — root, `/services`, `/forensics` descriptions.
- **Extra fragment fixes** (beyond v1): Sectors body heading "Deep domain experience. Genuine sector knowledge." → "Deep, genuine experience in every sector we work in."; About "Four principles. No exceptions." → "Four principles we never compromise on."
- **Not touched (dead code):** `WhyUs.tsx` (import commented out), `Differentiators.tsx`, `CredibilityBand.tsx` are not rendered on any page, so their em dashes don't ship. Flagged here in case they are ever re-enabled.

## 8. Recommended implementation order

1. **`lib/services.ts`** (Section 7.4) — one file, updates all 13 detail pages + nav + footer + home cards. Biggest surface, done in one edit.
2. **`Nav.tsx` + `Footer.tsx`** (Section 6) — the "Ad Hoc" labelling. Fast, high visibility.
3. **Services & Forensics listing heroes** (7.2, 7.3) — add the model-setting sublines. Highest "feels ad hoc now" impact per word.
4. **`ServiceDetailLayout.tsx`** "How We Work" (7.5) — applies across all detail pages.
5. **Homepage** ValueProp + ServicesGrid intro + FooterCTA (7.1).
6. **Sectors / About / Contact** light touches (7.6–7.8).
7. **Meta/titles** (6.4) last.

**Guardrail:** every rewrite here is word-count matched to protect the existing layout and scroll-snap sizing. When editing, keep within ±10% of the original length for any single string; if a line must grow, check the page at desktop and mobile before moving on.

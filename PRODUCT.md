# H-World Ad Hoc — adhoc.hworldinc.com

## Product Purpose

A standalone B2B landing site for H-World's Ad Hoc Services division — an on-demand project management, planning, controls, and forensics consultancy that deploys expert professionals into construction, infrastructure, energy, and rail projects on a flexible basis.

**What the site does**: Converts high-value B2B prospects (project directors, commercial managers, contractors, developers, programme sponsors) who need specialist resource right now. The site is not a brochure — it is a conversion surface for serious buyers in acute need.

**Register**: Brand — design IS the product. First impression creates or destroys the trust of a professional buyer who is assessing credibility in under 30 seconds.

## Users

**Primary**: Senior project professionals — Project Directors, Commercial Managers, Programme Sponsors, Quantity Surveyors — at Tier 1 and Tier 2 contractors, infrastructure clients, and developer organisations. They are experienced, sceptical, and have been burned by bad consultancies before. They are scanning for credibility signals fast.

**Secondary**: Legal and commercial teams seeking forensics support — adjudication, arbitration, expert witness.

**Context of use**: Desktop-first (these are office professionals making serious purchasing decisions), often under time pressure, often comparing against 2-3 competitors. They will read if the copy earns it; they will not scroll past noise.

## Brand Voice

Engineering-first. Minimalist-premium. Outcome-focused. Clarity over decoration.

- NOT: a marketing agency, a staffing firm, a generic construction company
- IS: specialist experts, trusted advisors, tools-led practitioners, forensic-grade rigour

**Three brand-voice words (physical object test)**: Precise. Monumental. Decisive.

Think: a site-wide QA specification document on heavy bond paper. A steel bridge construction drawing. A Bloomberg terminal used by someone who already knows exactly what they're looking at.

## Anti-References (do not design toward)

- Startup SaaS landing page aesthetics (gradient orbs, purple AI palette, frosted glass everywhere)
- Generic recruitment/staffing site (stock photos of handshakes, smiling teams)
- Corporate grey enterprise software (dense nav, blue CTA buttons, accordion FAQs)
- Overworked "editorial typographic" aesthetic — display serif + italic drop cap + small mono labels + broadsheet layout. This is AI slop lane. BANNED.

## Existing Brand Elements to Preserve

- **Amber/gold accent**: `#D97706` — retained from H-World brand. This is a COMMITTED colour strategy. Amber is not an accent; it earns significant real estate.
- **H•WORLD wordmark**: Space between letters, amber bullet. Retain this.
- **Dark sections**: Charcoal `#1A1A1A` for hero and CTA sections.
- **Site architecture**: 25 pages already built. We are redesigning Hero.tsx and homepage page composition. Component system will cascade.

## Typography Direction

**Reflex-rejected (already used, must replace)**: DM Serif Display, DM Sans, Space Mono — all on the impeccable reflex-reject list.

**Correct direction**: ONE committed grotesque family. Heavy weight contrast inside a single family. Engineering-spec precision. Not editorial, not SaaS, not warm-humanist.

**Target**: `Barlow Semi Condensed` (headings, 700–800) + `Barlow` (body, 300–500). Condensed grotesque. Feels like a technical specification document. Precise tracking, tight leading on large text, generous breathing on body.

No dedicated mono font. Labels use the sans at 11px with 0.15em tracking max — not the All Caps Mono Repeated Label pattern that's saturating every AI-generated landing page.

## Colour Strategy

**COMMITTED** — not Restrained. Amber `#D97706` carries 20–40% surface presence in hero and CTA sections, not just dots and borders. Canvas remains warm off-white `#F8F7F5`. Charcoal `#1A1A1A` for dark sections. Steel `#334155` as a supporting tone.

## Design System in Place

- Next.js 15 App Router, TypeScript, Tailwind v4 (CSS theme variables in globals.css)
- Framer Motion installed
- Lucide React for icons
- No CMS — static content in lib/services.ts, lib/sectors.ts
- Colour tokens in globals.css `@theme inline` block

## What's Being Redesigned

- `components/home/Hero.tsx` — complete rewrite (typography, layout, visual panel)
- `app/globals.css` — font replacement, updated design tokens
- `app/layout.tsx` — new font loading
- `components/home/ValueProp.tsx` — layout and typography
- `components/home/ServicesGrid.tsx` — card design and section treatment
- `components/home/Differentiators.tsx` — layout rethink
- `components/home/FooterCTA.tsx` — typography
- `components/layout/Nav.tsx` — typography only (structure stays)
- `components/ui/SectionBadge.tsx` — may be retired or radically reduced
- `components/ui/ServiceCard.tsx` — typography and hover state
- `components/ui/AnimatedSection.tsx` — easing and timing improvements

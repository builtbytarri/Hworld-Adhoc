"use client";

/*
 * Testimonials — Biograph bento grid style
 * ──────────────────────────────────────────────────────────────────────────────
 * INSPIRED BY: Biograph "Trusted by industry leaders"
 * Pattern: white bg, centered heading, 3-column masonry grid where cards
 * have different heights based on quote length — creating organic visual rhythm.
 *
 * Each card:
 *   - Monogram avatar (charcoal circle with initials)
 *   - Name (bold) + title + org
 *   - Quote text (light weight, airy line-height)
 *   - Subtle border + very soft shadow (Biograph's card treatment)
 *   - Amber accent: small quotation mark in top-right corner
 *
 * 6 testimonials distributed into 3 columns by quote length:
 *   Left:   T1 (medium) + T4 (short)
 *   Center: T5 (long, featured) + T6 (short)
 *   Right:  T2 (medium) + T3 (medium)
 *
 * Entrance: staggered fade-up per card column, once.
 */

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const testimonials = [
  {
    id: "t1",
    initials: "PD",
    name: "Programme Director",
    org: "Tier 1 Rail Contractor",
    quote:
      "H-World had a senior planner embedded on our station upgrade within four days. The recovery programme they built was the reason we held our key milestone — nothing less.",
  },
  {
    id: "t2",
    initials: "CM",
    name: "Commercial Manager",
    org: "Major Infrastructure JV",
    quote:
      "Their forensic team produced the delay analysis that anchored our EOT claim. Clear, defensible, and it stood up through adjudication without a wobble.",
  },
  {
    id: "t3",
    initials: "PS",
    name: "Project Sponsor",
    org: "Energy Developer",
    quote:
      "We needed project controls stood up from nothing on a live energy scheme. They built the reporting, ran the risk, and made our board reviews genuinely useful.",
  },
  {
    id: "t4",
    initials: "PM",
    name: "Planning Manager",
    org: "Tier 2 Civil Engineering",
    quote:
      "Best planning resource I've worked with in fifteen years. Embedded on day one, P6 running by day two — and we didn't miss a single update window.",
  },
  {
    id: "t5",
    initials: "PD",
    name: "Project Director",
    org: "National Infrastructure Programme",
    quote:
      "When our programme was in distress, H-World's forensics team turned six months of fragmented records into a coherent, evidenced narrative that the client accepted without challenge. The quality of analysis was in a different league to what we'd seen elsewhere, and the turnaround time was genuinely remarkable under the circumstances.",
  },
  {
    id: "t6",
    initials: "CD",
    name: "Commercial Director",
    org: "Building Contractor, London",
    quote:
      "They turned up, got their heads down, and delivered. No noise, no learning curve — just solid controls from the first week.",
  },
];

/* Column distribution: [left, center, right] */
const columns = [
  [testimonials[0], testimonials[3]],
  [testimonials[4], testimonials[5]],
  [testimonials[1], testimonials[2]],
];

function TestimonialCard({ t, delay }: { t: typeof testimonials[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="relative rounded-2xl border border-[#EBEBEB] bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
    >
      {/* Amber quote accent — top right */}
      <span
        aria-hidden
        className="absolute right-6 top-5 font-serif text-4xl leading-none text-amber-600/20 select-none"
      >
        &ldquo;
      </span>

      {/* Avatar + attribution */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#0E0E0E] text-[11px] font-semibold tracking-wider text-white">
          {t.initials}
        </div>
        <div>
          <p className="text-[14px] font-semibold text-[#0E0E0E]">{t.name}</p>
          <p className="text-[12px] font-light text-[#0E0E0E]/45">{t.org}</p>
        </div>
      </div>

      {/* Hairline divider */}
      <div className="mb-4 h-px bg-[#EBEBEB]" />

      {/* Quote */}
      <p className="text-[15px] font-light leading-[1.7] text-[#0E0E0E]/70">
        {t.quote}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#FAFAF9] py-10 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* Centered heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
            Testimonials
          </p>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#0E0E0E]">
            Trusted on programmes that cannot afford to slip.
          </h2>
        </motion.div>

        {/* 3-column masonry bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-start">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((t, ti) => (
                <TestimonialCard
                  key={t.id}
                  t={t}
                  delay={ci * 0.1 + ti * 0.06}
                />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

/*
 * Testimonials — auto-scrolling columns (21st.dev pattern)
 * ──────────────────────────────────────────────────────────────────────────────
 * Three columns of testimonial cards that auto-scroll infinitely using a
 * translateY loop. A mask gradient fades the top and bottom edges so cards
 * appear and disappear smoothly. Each column runs at a different speed for
 * organic rhythm.
 *
 * Brand colours and copy are preserved from the original section.
 * Cards match the existing card treatment: white, hairline border, soft shadow,
 * dark monogram avatar, amber quotation mark accent.
 */

import { motion } from "framer-motion";
import {
  TestimonialsColumn,
  type TestimonialItem,
} from "@/components/ui/testimonials-columns";

const EASE = [0.16, 1, 0.3, 1] as const;

const testimonials: TestimonialItem[] = [
  {
    initials: "PD",
    name: "Programme Director",
    org: "Tier 1 Rail Contractor",
    quote:
      "H-World had a senior planner embedded on our station upgrade within four days. The recovery programme they built was the reason we held our key milestone, nothing less.",
  },
  {
    initials: "CM",
    name: "Commercial Manager",
    org: "Major Infrastructure JV",
    quote:
      "Their forensic team produced the delay analysis that anchored our EOT claim. Clear, defensible, and it stood up through adjudication without a wobble.",
  },
  {
    initials: "PS",
    name: "Project Sponsor",
    org: "Energy Developer",
    quote:
      "We needed project controls stood up from nothing on a live energy scheme. They built the reporting, ran the risk, and made our board reviews genuinely useful.",
  },
  {
    initials: "PM",
    name: "Planning Manager",
    org: "Tier 2 Civil Engineering",
    quote:
      "Best planning resource I've worked with in fifteen years. Embedded on day one, P6 running by day two, and we didn't miss a single update window.",
  },
  {
    initials: "PD",
    name: "Project Director",
    org: "National Infrastructure Programme",
    quote:
      "When our programme was in distress, H-World's forensics team turned six months of fragmented records into a coherent, evidenced narrative that the client accepted without challenge. The quality of analysis was in a different league.",
  },
  {
    initials: "CD",
    name: "Commercial Director",
    org: "Building Contractor, London",
    quote:
      "They turned up, got their heads down, and delivered. No noise, no learning curve, just solid controls from the first week.",
  },
];

/* Distribute across three columns */
const col1 = [testimonials[0], testimonials[3]];
const col2 = [testimonials[4], testimonials[5]];
const col3 = [testimonials[1], testimonials[2]];

export default function Testimonials() {
  return (
    <section className="bg-[#FAFAF9] py-6 lg:py-10">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
            Testimonials
          </p>
          <h2 className="text-[clamp(1.75rem,3vw,2.75rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#0E0E0E]">
            Trusted on programmes that cannot afford to slip.
          </h2>
        </motion.div>

        {/* ── Scrolling columns with fade mask ── */}
        <div
          className="flex justify-center gap-4 overflow-hidden"
          style={{
            maxHeight: "560px",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          }}
        >
          {/* Col 1 — always visible */}
          <TestimonialsColumn testimonials={col1} duration={18} />

          {/* Col 2 — md+ */}
          <TestimonialsColumn
            testimonials={col2}
            duration={23}
            className="hidden md:block"
          />

          {/* Col 3 — lg+ */}
          <TestimonialsColumn
            testimonials={col3}
            duration={20}
            className="hidden lg:block"
          />
        </div>

      </div>
    </section>
  );
}

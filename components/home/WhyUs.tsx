"use client";

/*
 * WhyUs — "The experts who show up and deliver."
 *
 * Redesign: full-width textured section.
 * Background: truss-lattice.jpg (white + orange structural mesh) at 8% opacity
 * over the warm canvas — gives an engineering specification-paper quality.
 * The orange threads of the lattice match brand amber and are barely visible,
 * adding depth without competing with the content.
 *
 * Layout: heading left-aligned → 2×2 statement grid → stats row
 * No separate image column — the texture IS the visual element.
 * Statement cards float over the bg as white panels with hairline borders.
 */

import Image from "next/image";
import { motion } from "framer-motion";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const statements = [
  {
    n: "01",
    heading: "Deployed within days — not weeks.",
    body: "When a programme gap opens, we have already matched the right person to your brief. On-site or remote, contributing from day one.",
  },
  {
    n: "02",
    heading: "Independent by design.",
    body: "No parent contractor. No preferred supply chain. Our advice is evidence-led, and our experts have no vested interest in the outcome.",
  },
  {
    n: "03",
    heading: "Professional-grade tools, from day one.",
    body: "Primavera P6, Asta Powerproject, Aphex, Synchro — operated at programme level on day one. Not just listed on a CV.",
  },
  {
    n: "04",
    heading: "Eight sectors. Genuine domain knowledge.",
    body: "Rail, energy, oil & gas, marine, infrastructure, commercial — our professionals have carried live programmes in each of these environments.",
  },
];

const stats = [
  { value: "10+",  label: "Disciplines" },
  { value: "8",    label: "Sectors" },
  { value: "48h",  label: "Brief to deployment" },
  { value: "100%", label: "Independent" },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F5] py-14 lg:py-20">

      {/* ── Background texture: truss-lattice at 8% ──
          The orange threads of the structural mesh echo the brand amber.
          Reduced opacity keeps it as texture, not noise. */}
      <Image
        src={img.trussLattice.src}
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover opacity-[0.08]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-10 max-w-2xl"
        >
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
            Why H-World
          </p>
          <h2 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0E0E0E]">
            The experts who show up and deliver.
          </h2>
          <p className="mt-4 max-w-xl text-[17px] font-light leading-relaxed text-[#0E0E0E]/55">
            We built this practice for the moments when your programme can&apos;t afford to wait.
            Four things set us apart — and all four matter.
          </p>
        </motion.div>

        {/* 2×2 statement grid — cards float over textured bg */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 border-t border-[#E5E2DC] pt-8">
          {statements.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              className="rounded-2xl border border-[#E5E2DC] bg-white/80 p-7 backdrop-blur-sm"
            >
              <span className="mb-4 block text-[13px] font-semibold tabular-nums text-amber-600">
                {s.n}
              </span>
              <h3 className="text-[18px] font-semibold leading-snug text-[#0E0E0E]">
                {s.heading}
              </h3>
              <p className="mt-2.5 text-[15px] font-light leading-relaxed text-[#0E0E0E]/55">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
          className="mt-8 grid grid-cols-2 gap-6 border-t border-[#E5E2DC] pt-7 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-bold tabular-nums text-[#0E0E0E]">
                {stat.value}
              </p>
              <p className="mt-1 text-[12px] font-light text-[#0E0E0E]/40">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

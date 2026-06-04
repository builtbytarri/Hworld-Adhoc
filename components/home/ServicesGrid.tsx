"use client";

/*
 * ServicesGrid — "What We Do" (Biograph "Our Tests" pattern)
 * ──────────────────────────────────────────────────────────────────────────────
 * INSPIRED BY: Biograph "Our Tests" section.
 * Pattern:
 *   1. Floating photo thumbnails scattered around the centered heading on lg screens.
 *      Each thumbnail orbits continuously with a different speed + rotation (CSS).
 *      They fade in on scroll entrance from slightly off-position.
 *   2. Centered: eyebrow + large heading + short copy + CTA
 *   3. Below: 3-column list — icon | title | description, rows divided by hairlines.
 *      On hover: subtle amber left-border + slight background tint.
 *
 * The 7 floating thumbnails are cropped photos from the stock library, matching
 * Biograph's literal photo-crop approach rather than generic icon placeholders.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel, ArrowRight,
} from "lucide-react";
import { managementServices, forensicsServices, type Service } from "@/lib/services";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Lucide icon map */
const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel,
};

/*
 * REAL PHOTOS ONLY — no illustrations, no infographics, no 3D renders.
 * Structured two-row layout:
 *   topRow:    4 images spread above the heading, alternating vertical offset for rhythm
 *   bottomRow: 3 images spread below the heading, offset between top positions
 *
 * Each image has a unique size, rotation angle, orbit animation and delay so
 * they feel organic but remain visually consistent as a set of real photography.
 */
/*
 * Top row: 4 images — chosen for colour contrast on white bg:
 *   - architectsBlueprint: warm tones, diverse team, blueprint texture ✓
 *   - teamScaleModel:  busy office, green vest accent on warm bg ✓
 *   - handsBlueprints: rich blueprints + orange hardhat = brand amber ✓
 *   - buildersGlass:   exterior shot, sky + glass building, strong light ✓
 *
 * Bottom row: 3 images that sit between the top 4 positions:
 *   - architectsOffice: warm indoor light, figures in discussion ✓
 *   - inspectors:       orange hi-vis = amber brand, on-site credibility ✓
 *   - teamPortrait:     overhead light, neutral concrete + 3 figures ✓
 */
const topRow = [
  { src: img.architectsBlueprint.src, orbit: "orbit-a", delay: "0s",    size: 88,  mt: "mt-0",  rotate: "-7deg"  },
  { src: img.teamScaleModel.src,      orbit: "orbit-b", delay: "1.8s",  size: 80,  mt: "mt-10", rotate: "5deg"   },
  { src: img.handsBlueprints.src,     orbit: "orbit-c", delay: "0.7s",  size: 84,  mt: "mt-4",  rotate: "-4deg"  },
  { src: img.buildersGlass.src,       orbit: "orbit-d", delay: "2.3s",  size: 96,  mt: "mt-0",  rotate: "6deg"   },
];

const bottomRow = [
  { src: img.architectsOffice.src,    orbit: "orbit-c", delay: "1.1s",  size: 88,  mb: "mb-0",  rotate: "5deg"   },
  { src: img.inspectors.src,          orbit: "orbit-a", delay: "0.4s",  size: 80,  mb: "mb-8",  rotate: "-6deg"  },
  { src: img.teamPortrait.src,        orbit: "orbit-b", delay: "1.6s",  size: 84,  mb: "mb-0",  rotate: "4deg"   },
];

/*
 * ServiceRow — fixed layout issues:
 *
 * PROBLEM 1 — "bleeding into each other":
 *   The old code used `-mx-3 px-3` (negative margin expansion) on the Link to
 *   create a wider hover background. Inside a CSS Grid this bleeds outside the
 *   column cell boundaries and visually overlaps adjacent columns.
 *   FIX: Remove the negative margin entirely. Hover bg is now contained within
 *   the natural cell bounds with a `rounded-lg` and border-l amber indicator.
 *
 * PROBLEM 2 — misaligned `border-b` lines:
 *   `border-b` on the Link element means each cell's divider line sits at the
 *   bottom of *that cell's content height*. Because descriptions wrap differently,
 *   the lines appear at different Y positions across columns — looks broken.
 *   FIX: Border is now on the outer `motion.div` wrapper, not the Link. The
 *   wrapper always creates a consistent hairline underneath the entire cell block.
 *
 * HOVER STATE:
 *   - Amber left-border indicator slides in (width 0 → 3px) — clear visual feedback
 *     without needing a background that expands beyond cell bounds
 *   - Icon flips from amber-50 → amber-600 (consistent with before)
 *   - Arrow reveals and nudges right
 *   - `transition-[background-color,border-color]` — specific, not `all`
 */
function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? LayoutGrid;
  const href = service.category === "management"
    ? `/services/${service.slug}`
    : `/forensics/${service.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.32), ease: EASE }}
      className="border-b border-[#ECEAE6] last:border-0"
    >
      <Link
        href={href}
        className="
          group relative flex items-start gap-4
          py-4 px-3
          rounded-lg
          transition-[background-color] duration-150
          hover:bg-[#F8F7F5]
        "
      >
        {/* Amber left-border indicator — slides in on hover without layout shift */}
        <span
          aria-hidden
          className="
            absolute left-0 top-2 bottom-2
            w-0 rounded-full bg-amber-600
            transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:w-[3px]
          "
        />

        {/* Icon tile */}
        <div className="
          mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center
          rounded-xl bg-amber-50 text-amber-600
          transition-colors duration-200
          group-hover:bg-amber-600 group-hover:text-white
        ">
          <Icon size={17} strokeWidth={1.6} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[15px] font-semibold text-[#0E0E0E]">{service.title}</h3>
            <ArrowRight
              size={13}
              strokeWidth={2}
              className="
                flex-shrink-0 text-amber-600
                opacity-0 translate-x-0
                transition-[opacity,transform] duration-200
                group-hover:opacity-100 group-hover:translate-x-1
              "
            />
          </div>
          <p className="mt-1 text-sm font-light leading-relaxed text-[#0E0E0E]/50">
            {service.shortDesc}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* ── Floating thumbnails + centered heading ── */}
        <div className="relative mb-10">

          {/* ── Structured floating rows — desktop only ──
               Top row: 4 photos spread above heading with alternating mt offset
               Bottom row: 3 photos spread below heading, offset between top positions
               All real photography, same category, different sizes+rotations+orbits. */}
          <div className="pointer-events-none hidden lg:block" aria-hidden>
            {/* Top row */}
            <div className="flex items-end justify-between px-2 pb-0">
              {topRow.map((f, i) => (
                <motion.div
                  key={`top-${i}`}
                  initial={{ opacity: 0, y: -20, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.05 + i * 0.1, ease: EASE }}
                  className={`${f.orbit} ${f.mt}`}
                  style={{ animationDelay: f.delay }}
                >
                  <div
                    className="overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.13)]"
                    style={{ width: f.size, height: f.size, transform: `rotate(${f.rotate})` }}
                  >
                    <Image src={f.src} alt="" width={f.size} height={f.size} className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Centered heading block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative mx-auto max-w-2xl py-12 text-center lg:py-16"
          >
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
              Our Services
            </p>
            <h2 className="text-[clamp(2.5rem,4.5vw,4rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#0E0E0E]">
              Expert support across every phase of delivery.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg font-light leading-relaxed text-[#0E0E0E]/50">
              From mobilisation through completion — and into forensic analysis — our
              disciplines cover every dimension of project delivery.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#E5E2DC] px-6 py-3 text-sm font-medium text-[#0E0E0E] transition-[border-color,background-color,color] duration-200 hover:border-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-white"
            >
              View all services
            </Link>
          </motion.div>
          {/* Bottom row — 3 images, spaced to sit between the top 4 positions */}
          <div className="pointer-events-none hidden lg:block" aria-hidden>
            {/* Bottom row: 3 images offset between the 4 top positions — use wider px spread */}
            <div className="flex items-start justify-between px-[12%] pt-0">
              {bottomRow.map((f, i) => (
                <motion.div
                  key={`bot-${i}`}
                  initial={{ opacity: 0, y: 20, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.2 + i * 0.1, ease: EASE }}
                  className={`${f.orbit} ${f.mb}`}
                  style={{ animationDelay: f.delay }}
                >
                  <div
                    className="overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.13)]"
                    style={{ width: f.size, height: f.size, transform: `rotate(${f.rotate})` }}
                  >
                    <Image src={f.src} alt="" width={f.size} height={f.size} className="h-full w-full object-cover" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Management services list — 3 columns, hairline rows ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 pb-3 border-b border-[#ECEAE6]"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/30">
              Management Services
            </p>
          </motion.div>

          {/* gap-x-8 creates column separation — prevents hover backgrounds
              from visually touching between columns */}
          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {managementServices.map((s, i) => (
              <ServiceRow key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>

        {/* ── Forensics services ── */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-2 pb-3 border-b border-[#ECEAE6]"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/30">
              Forensics Services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
            {forensicsServices.map((s, i) => (
              <ServiceRow key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

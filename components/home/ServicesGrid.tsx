"use client";

/*
 * ServicesGrid — "What We Do" intro (Biograph "Our Tests" pattern)
 * ──────────────────────────────────────────────────────────────────────────────
 * Floating photo thumbnails scattered around a centered heading on lg screens.
 * Each thumbnail orbits continuously with a different speed + rotation (CSS).
 * They fade in on scroll entrance from slightly off-position.
 *
 * Centered: eyebrow + large heading + short copy + "View all services" CTA.
 * The actual service grids live on the /services page.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

/*
 * REAL PHOTOS ONLY — no illustrations, no infographics, no 3D renders.
 * Structured two-row layout:
 *   topRow:    4 images spread above the heading, alternating vertical offset for rhythm
 *   bottomRow: 3 images spread below the heading, offset between top positions
 *
 * Each image has a unique size, rotation angle, orbit animation and delay so
 * they feel organic but remain visually consistent as a set of real photography.
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

export default function ServicesGrid() {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* ── Floating thumbnails + centered heading ── */}
        <div className="relative">

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
            className="relative mx-auto max-w-2xl py-6 text-center lg:py-16"
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

      </div>
    </section>
  );
}

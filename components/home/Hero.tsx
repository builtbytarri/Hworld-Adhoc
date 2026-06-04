"use client";

/*
 * Hero.tsx — H-World Ad Hoc  (Biograph-level restraint)
 * ──────────────────────────────────────────────────────────────────────────────
 * REFERENCE: Biograph. The lesson is restraint — one moody full-bleed image,
 * one massive elegant headline anchored bottom-left, a quiet stat row with
 * hairline dividers bottom-right, a single understated CTA, slow cinematic motion.
 *
 * IMAGE: workers-tablet-topview — vast moody concrete with the negative space on
 * the left (where the headline sits) and two small figures on the right for human
 * scale. Yellow hi-vis harmonises with amber. The slow zoom-OUT settles the frame.
 *
 * TYPE: the hero uses the wider, lighter Barlow (not the condensed display face)
 * for Biograph elegance — monumental but airy, not shouty.
 *
 * MOTION (impeccable motion-design + emil):
 *   - Image: one-time 18s ease-out zoom-out (kb-settle). Premium "settle", not a loop.
 *   - Text: masked line reveal for the headline (slide up from a clip) + a
 *     blur-fade for the supporting lines. Staggered ~120ms, ease-out-expo.
 *   - All reduced-motion-safe (globals.css disables animation/transition).
 */

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Masked line reveal — the line slides up out of an overflow-hidden clip */
const lineReveal = (i: number): Variants => ({
  hidden: { y: "118%" },
  show: {
    y: "0%",
    transition: { duration: 0.95, delay: 0.15 + i * 0.12, ease: EASE },
  },
});

/* Soft blur-fade for supporting copy */
const blurFade = (i: number): Variants => ({
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: EASE },
  },
});

const stats = [
  { value: "10+", label: "Disciplines" },
  { value: "8", label: "Sectors served" },
  { value: "48h", label: "To mobilise" },
];

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[#0E0E0E]"
    >
      {/* ── Full-bleed image, slow cinematic zoom-out ── */}
      <KenBurnsImage
        src={img.workersTablet.src}
        alt={img.workersTablet.alt}
        variant="settle"
        priority
        sizes="100vw"
        position="68% 45%"
        className="absolute inset-0"
      />

      {/* ── Scrims: dark weighted to bottom-left for the headline, clear top-right ── */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-tr from-[#0E0E0E] via-[#0E0E0E]/55 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-transparent to-[#0E0E0E]/25"
      />
      {/* whisper of amber warmth, bottom-left — committed brand, kept quiet */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(70%_60%_at_10%_95%,rgba(217,119,6,0.14),transparent_60%)]"
      />

      {/* ── Content, anchored to the base ── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-end px-6 pb-14 pt-40 lg:px-10 lg:pb-20">

        {/* Eyebrow */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={blurFade(0)}
          className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45"
        >
          Ad hoc planning &amp; project controls
        </motion.p>

        {/* Headline — masked line reveal */}
        <h1 className="font-sans text-white">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial="hidden"
              animate="show"
              variants={lineReveal(0)}
              className="block text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.02em]"
            >
              Planning &amp; controls,
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              initial="hidden"
              animate="show"
              variants={lineReveal(1)}
              className="block text-[clamp(3rem,8vw,7.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-white/55"
            >
              on demand.
            </motion.span>
          </span>
        </h1>

        {/* Subline */}
        <motion.p
          initial="hidden"
          animate="show"
          variants={blurFade(2)}
          className="mt-7 max-w-[520px] text-lg font-light leading-relaxed text-white/65"
        >
          Expert planning, controls, and forensics professionals — deployed into your
          programme within days. Rapid. Flexible. Sector-proven.
        </motion.p>

        {/* Bottom row: CTA left, stats right (Biograph layout) */}
        <div className="mt-12 flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial="hidden"
            animate="show"
            variants={blurFade(3)}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 bg-amber-600 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0E0E0E] transition-[background-color,transform] duration-150 hover:bg-amber-500 active:scale-[0.97]"
            >
              See our services
              <ArrowRight
                size={15}
                strokeWidth={2.2}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide text-white/70 underline-offset-8 transition-colors duration-150 hover:text-white hover:underline"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Stat row with hairline dividers */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={blurFade(4)}
            className="flex items-stretch"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="border-l border-white/15 px-5 first:border-l-0 first:pl-0 sm:px-6"
              >
                <p className="font-sans text-2xl font-semibold tabular-nums text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-white/45">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

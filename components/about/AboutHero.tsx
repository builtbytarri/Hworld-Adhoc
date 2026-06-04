"use client";

/*
 * AboutHero — compact, does NOT compete with the homepage hero.
 * The homepage hero is a full-screen cinematic experience.
 * This is a page header — it orients the visitor, then steps aside.
 *
 * Height: ~50dvh instead of 92dvh. Text is smaller. One line of copy.
 * The image still does the work — the section just breathes less.
 */

import { motion } from "framer-motion";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AboutHero() {
  return (
    <section
      aria-label="About Hero"
      className="relative flex overflow-hidden bg-[#0E0E0E]"
      style={{ minHeight: "clamp(320px, 50dvh, 520px)" }}
    >
      <KenBurnsImage
        src={img.architectsBlueprint.src}
        alt={img.architectsBlueprint.alt}
        variant="zoom-in"
        priority
        sizes="100vw"
        position="50% 35%"
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/90 via-[#0E0E0E]/55 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-[#0E0E0E]/20" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-6 pb-12 pt-32 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500"
        >
          About H-World
        </motion.p>

        <h1 className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
          >
            Built for the gap.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-amber-500"
          >
            Trusted on the programme.
          </motion.span>
        </h1>
      </div>
    </section>
  );
}

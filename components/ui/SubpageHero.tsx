"use client";

/*
 * SubpageHero — compact photographic hero for overview pages
 * (services/, forensics/, and any other section-level page)
 *
 * Same height + pattern as About / Sectors heroes (~50dvh).
 * Image prop lets each page pick a relevant photo.
 * No competing with homepage hero.
 */

import { motion } from "framer-motion";
import KenBurnsImage from "./KenBurnsImage";

const EASE = [0.16, 1, 0.3, 1] as const;

interface SubpageHeroProps {
  eyebrow: string;
  headingWhite: string;
  headingAmber?: string;
  subline?: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  variant?: "zoom-in" | "zoom-out" | "pan-left" | "pan-right" | "drift";
  compact?: boolean;
}

export default function SubpageHero({
  eyebrow,
  headingWhite,
  headingAmber,
  subline,
  imageSrc,
  imageAlt,
  imagePosition = "50% 40%",
  variant = "zoom-in",
  compact = false,
}: SubpageHeroProps) {
  return (
    <section
      className="relative flex overflow-hidden bg-[#0E0E0E]"
      style={{ minHeight: compact ? "clamp(80px, 10dvh, 100px)" : "clamp(300px, 48dvh, 500px)" }}
    >
      <KenBurnsImage
        src={imageSrc}
        alt={imageAlt}
        variant={variant}
        priority
        sizes="100vw"
        position={imagePosition}
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/90 via-[#0E0E0E]/60 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-[#0E0E0E]/25" />

      <div className={`relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-6 lg:px-10 ${compact ? "pb-5 pt-[80px] lg:pt-[84px] lg:pb-6" : "pb-12 pt-32"}`}>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className={`text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500 ${compact ? "mb-2.5" : "mb-4"}`}
        >
          {eyebrow}
        </motion.p>

        <h1>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            className={`block font-bold leading-[1.05] tracking-[-0.03em] text-white ${compact ? "text-[clamp(2rem,3.4vw,2.85rem)]" : "text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.0]"}`}
          >
            {headingWhite}
          </motion.span>
          {headingAmber && (
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
              className={`block font-bold leading-[1.05] tracking-[-0.03em] text-amber-500 ${compact ? "text-[clamp(2rem,3.4vw,2.85rem)]" : "text-[clamp(2.25rem,4.5vw,4rem)] leading-[1.0]"}`}
            >
              {headingAmber}
            </motion.span>
          )}
        </h1>

        {subline && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="mt-5 max-w-lg text-[16px] font-light leading-relaxed text-white/55"
          >
            {subline}
          </motion.p>
        )}
      </div>
    </section>
  );
}

"use client";

/*
 * SectorsHero — compact header, does not compete with homepage.
 * Aerial infrastructure image: roads threading between buildings = cross-sector.
 * Height matches About hero (~50dvh). Staggered entrance on load.
 */

import { motion } from "framer-motion";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SectorsHero() {
  return (
    <section
      aria-label="Sectors Hero"
      className="relative flex overflow-hidden bg-[#0E0E0E]"
      style={{ minHeight: "clamp(300px, 48dvh, 500px)" }}
    >
      <KenBurnsImage
        src={img.aerialInfra.src}
        alt={img.aerialInfra.alt}
        variant="pan-right"
        priority
        sizes="100vw"
        position="50% 60%"
        className="absolute inset-0"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/90 via-[#0E0E0E]/60 to-transparent" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-[#0E0E0E]/25" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-6 pb-12 pt-32 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500"
        >
          Sectors We Serve
        </motion.p>

        <h1>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
            className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
          >
            Eight sectors.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
            className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-amber-500"
          >
            One standard.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
          className="mt-5 max-w-lg text-[16px] font-light leading-relaxed text-white/55"
        >
          Our professionals have carried live programmes across every sector we serve —
          bringing genuine domain knowledge, not just planning theory.
        </motion.p>
      </div>
    </section>
  );
}

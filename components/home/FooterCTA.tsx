"use client";

/*
 * FooterCTA — Biograph "curved card" CTA
 * ──────────────────────────────────────────────────────────────────────────────
 * INSPIRED BY: Biograph "Live healthier for longer" section.
 *
 * The key technique: rounded-t-[40px] on the section creates a soft curved arc
 * at the TOP — because the section above (Testimonials) is near-white, the dark
 * image section appears as a "card" that curves up from the bottom of the page.
 * This is the signature Biograph visual device.
 *
 * Photo: site-warehouse-aerial — drone top-down of a construction site footprint.
 * From this distance it reads as abstract geometry rather than a literal site,
 * giving the same atmospheric quality as Biograph's water-reflection image.
 *
 * Text: centered, white, headline + subline + single CTA (ghost outlined button).
 * No amber on dark — keep it clean and light-on-dark like Biograph.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FooterCTA() {
  return (
    /* rounded-t-[40px] is the Biograph curved-card effect */
    <section className="relative overflow-hidden rounded-t-[40px] bg-[#0E0E0E]" style={{ minHeight: "520px" }}>

      {/* Atmospheric photo — slow drift */}
      <KenBurnsImage
        src={img.siteWarehouse.src}
        alt=""
        variant="drift"
        sizes="100vw"
        position="50% 40%"
        className="absolute inset-0"
      />

      {/* Dark scrim — heavier than hero, this is a closing emotional beat */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[#0E0E0E]/70"
      />
      {/* Subtle amber warmth at the very bottom edge — brand whisper */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-900/20 to-transparent"
      />

      {/* Centered content */}
      <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-white/40">
            Ready When You Are
          </p>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.025em] text-white">
            Ready to transform your project planning?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg font-light leading-relaxed text-white/55">
            Contact us to discuss how our expertise can help your organisation
            deliver projects more effectively.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium tracking-wide text-white backdrop-blur-sm transition-[background-color,border-color] duration-200 hover:border-white/60 hover:bg-white/20 active:scale-[0.97]"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium tracking-wide text-white/50 underline-offset-8 transition-colors hover:text-white hover:underline"
            >
              Explore services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

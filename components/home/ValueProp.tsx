"use client";

/*
 * ValueProp — "The Ad Hoc Advantage"
 * ──────────────────────────────────────────────────────────────────────────────
 * INSPIRED BY: Biograph "How it works" section.
 * Pattern: centered eyebrow + big heading + short paragraph + quiet CTA,
 * then THREE tall full-bleed image panels each anchoring a core pillar.
 *
 * The 3 pillars map directly to the 3 panels:
 *   1. Fill the gap. Fast.       → hands-blueprints-overhead (planning/analysis)
 *   2. Tools-first methodology.  → inspectors-site (on-site, tools in hand)
 *   3. Sector intelligence.      → architects-blueprint (team expertise)
 *
 * Each panel:
 *   - Full-bleed photo, tall aspect (portrait ~3:4 on desktop)
 *   - Dark gradient anchored at bottom for text legibility
 *   - Title + description anchored bottom-left
 *   - Slow CSS scale on hover (Emil: specific property, not 'all', ease-out-expo)
 *
 * Scroll entrance: panels stagger in from below with blur-fade.
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const panels = [
  {
    src: img.handsBlueprints.src,
    alt: img.handsBlueprints.alt,
    position: "60% 50%",
    num: "01",
    title: "Deployed in days, not months.",
    body: "When a planning gap, an urgent review or a forensic exposure lands, we mobilise a trusted specialist within days, with no downtime and someone contributing from the first morning.",
  },
  {
    src: img.inspectors.src,
    alt: img.inspectors.alt,
    position: "50% 35%",
    num: "02",
    title: "Tools-first methodology.",
    body: "Our professionals lead with the industry's standard tools, including P6, MS Project, Asta, Aphex and Synchro, so every output is immediately usable and auditable.",
  },
  {
    src: img.architectsBlueprint.src,
    alt: img.architectsBlueprint.alt,
    position: "50% 30%",
    num: "03",
    title: "Sector intelligence.",
    body: "From energy to rail, oil and gas to marine, commercial to infrastructure, our experts carry genuine domain knowledge rather than just planning theory.",
  },
];

export default function ValueProp() {
  return (
    <section className="bg-white pt-2 pb-8 lg:pt-4 lg:pb-12">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

        {/* ── Centered header block (Biograph pattern) ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mx-auto mb-5 max-w-2xl text-center"
        >
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
            The Ad Hoc Advantage
          </p>
          <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-medium leading-[1.05] tracking-[-0.02em] text-[#0E0E0E]">
            We put a specialist on your programme the moment you need one.
          </h2>
          <p className="mt-3 text-[15px] font-light leading-relaxed text-[#0E0E0E]/55">
            H-World&apos;s Ad Hoc division exists for the moment you need an expert and can&apos;t
            wait to hire one. We put a trusted specialist on your programme within days, do the
            work to the standard a major project demands, and hand it back cleanly once it&apos;s done.
          </p>
          <Link
            href="/services"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#E5E2DC] px-6 py-3 text-sm font-medium text-[#0E0E0E] transition-[border-color,background-color] duration-200 hover:border-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-white"
          >
            Learn more
          </Link>
        </motion.div>

        {/* ── Three tall image panels ── */}
        {/* -mx extends panels slightly past the container like Biograph's edge-to-edge feel */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {panels.map((panel, i) => (
            <motion.div
              key={panel.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
              className="group relative overflow-hidden rounded-2xl bg-[#0E0E0E]"
              style={{ minHeight: "clamp(240px, 30vw, 380px)" }}
            >
              {/* Photo — scales in on hover (Emil: transform only, no all) */}
              <Image
                src={panel.src}
                alt={panel.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                quality={82}
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                style={{ objectPosition: panel.position }}
              />

              {/* Dark gradient scrim anchored at bottom */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/30 to-transparent"
              />

              {/* Bottom-anchored label */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-amber-500">
                  {panel.num}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {panel.title}
                </h3>
                {/* Description slides up on hover (Emil: specific transform) */}
                <p className="mt-2 max-h-0 overflow-hidden text-sm font-light leading-relaxed text-white/65 transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-24 group-hover:opacity-100 opacity-0">
                  {panel.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

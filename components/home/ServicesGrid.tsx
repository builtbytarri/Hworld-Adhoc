"use client";

/*
 * ServicesGrid — "Our Services" viewport snap section
 * ──────────────────────────────────────────────────────────────────────────────
 * Layout:
 *   TOP (centered)  — eyebrow + heading + description + "View all" CTA
 *   BOTTOM          — CardStack: auto-advancing fan of service cards at 1000ms
 *
 * Each card uses a real site photo + service title/description/link.
 * Cards fan out left/right from the active card and can be dragged or
 * dot-navigated. The active card shows an amber "Learn more" CTA.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const serviceCards: CardStackItem[] = [
  {
    id: 1,
    title: "Programme Management",
    description: "On-demand programme managers deployed to supplement or lead delivery at any stage.",
    imageSrc: img.architectsOffice.src,
    href: "/services/program-management",
    ctaLabel: "Learn more",
    tag: "Management",
  },
  {
    id: 2,
    title: "Planning & Controls",
    description: "Baseline scheduling, critical path analysis, lookahead planning and recovery programmes.",
    imageSrc: img.handsBlueprints.src,
    href: "/services/planning-and-controls",
    ctaLabel: "Learn more",
    tag: "Management",
  },
  {
    id: 3,
    title: "4D Planning",
    description: "Linking construction schedules to 3D models for time-based visual simulations.",
    imageSrc: img.teamScaleModel.src,
    href: "/services/4d-planning",
    ctaLabel: "Learn more",
    tag: "Management",
  },
  {
    id: 4,
    title: "Functional Lead Service",
    description: "Embedded senior expert owning the planning function on major programmes.",
    imageSrc: img.teamPortrait.src,
    href: "/services/functional-lead",
    ctaLabel: "Learn more",
    tag: "Management",
  },
  {
    id: 5,
    title: "Project Controls",
    description: "Integrated controls covering schedule, cost, risk and change — the data infrastructure for informed decisions.",
    imageSrc: img.staffBriefing.src,
    href: "/services/project-controls",
    ctaLabel: "Learn more",
    tag: "Management",
  },
  {
    id: 6,
    title: "Claims Analysis",
    description: "Rigorous EOT assessments, prolongation costs and disruption claim analysis.",
    imageSrc: img.networkPins.src,
    href: "/services/claims-analysis",
    ctaLabel: "Learn more",
    tag: "Forensics",
  },
  {
    id: 7,
    title: "Dispute Resolution",
    description: "Independent expert support through adjudication, arbitration and litigation.",
    imageSrc: img.architectsBlueprint.src,
    href: "/services/dispute-resolution",
    ctaLabel: "Learn more",
    tag: "Forensics",
  },
  {
    id: 8,
    title: "Expert Witness",
    description: "Court-ready programme analysis and opinions on delay, disruption and productivity.",
    imageSrc: img.buildersGlass.src,
    href: "/services/expert-witness",
    ctaLabel: "Learn more",
    tag: "Forensics",
  },
];

export default function ServicesGrid() {
  return (
    <section className="flex h-[100dvh] flex-col overflow-hidden bg-white pt-16 pb-4 lg:pt-[68px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col px-6 lg:px-10">

        {/* ── Centered heading block ── */}
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600"
          >
            Our Services
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-[clamp(2rem,3.5vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#0E0E0E]"
          >
            Expert support across every phase of delivery.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="mt-3 text-[14.5px] font-light leading-relaxed text-[#0E0E0E]/50"
          >
            From mobilisation through completion — and into forensic analysis — our
            disciplines cover every dimension of project delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease: EASE }}
            className="mt-5"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E2DC] px-6 py-2.5 text-sm font-medium text-[#0E0E0E] transition-[border-color,background-color,color] duration-200 hover:border-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-white"
            >
              View all services
              <ArrowRight size={13} strokeWidth={2.2} />
            </Link>
          </motion.div>
        </div>

        {/* ── CardStack — fills remaining height ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="flex flex-1 items-center justify-center"
        >
          <CardStack
            items={serviceCards}
            initialIndex={0}
            autoAdvance
            intervalMs={1000}
            pauseOnHover={false}
            showDots
            loop
            cardWidth={480}
            cardHeight={300}
            overlap={0.5}
            spreadDeg={44}
            maxVisible={7}
            activeLiftPx={20}
            activeScale={1.03}
            inactiveScale={0.93}
          />
        </motion.div>

      </div>
    </section>
  );
}

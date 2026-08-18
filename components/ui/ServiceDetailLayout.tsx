"use client";

/*
 * ServiceDetailLayout — shared across all 10 management + 3 forensics sub-pages.
 *
 * CHANGES from previous version:
 *   - Hero: compact photographic (~50dvh), KenBurns, staggered entrance
 *     (inspectors-site.jpg — consistent across all service pages)
 *   - Typography: all old font-serif / font-mono remnants replaced with Barlow system
 *   - Removed: inline "Ready to Deploy?" bottom CTA section
 *   - Added: FooterCTA (global curved-top CTA) at the very end
 *   - Sidebar cards: updated to match new design system colours
 */

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel, CheckCircle2, ArrowLeft, ArrowRight,
} from "lucide-react";
import { Service, commonTools } from "@/lib/services";
import AnimatedSection from "./AnimatedSection";
import KenBurnsImage from "./KenBurnsImage";
import FooterCTA from "@/components/home/FooterCTA";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel,
};

interface ServiceDetailLayoutProps {
  service: Service;
  related: Service[];
}

export default function ServiceDetailLayout({ service, related }: ServiceDetailLayoutProps) {
  const Icon = iconMap[service.icon] ?? LayoutGrid;
  // Service-specific tools first, then the common practice-wide toolset (deduped).
  const tools = Array.from(new Set([...(service.tools ?? []), ...commonTools]));
  /* Retained (currently unused) so the commented-out back-nav block below can
     be restored as-is. Do not delete while that block is still commented. */
  const backHref  = service.category === "management" ? "/services"  : "/forensics";
  const backLabel = service.category === "management" ? "Management Services" : "Forensics Services";
  const eyebrow   = service.category === "management" ? "Management Service"  : "Forensics Service";

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
      {/* ── HERO — slim photographic banner ── */}
      <section
        className="relative flex overflow-hidden bg-[#0E0E0E]"
        style={{ minHeight: "var(--v-hero)" }}
      >
        {/* Consistent image across all service pages */}
        <KenBurnsImage
          src={img.inspectors.src}
          alt={img.inspectors.alt}
          variant="zoom-in"
          priority
          sizes="100vw"
          position="50% 35%"
          className="absolute inset-0"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/92 via-[#0E0E0E]/65 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-[#0E0E0E]/25" />

        {/* Top padding derives from --v-nav so the eyebrow always clears the
            fixed navbar. Applies to all 10 management + 3 forensics sub-pages. */}
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-6 pb-6 pt-[calc(var(--v-nav)+6px)] lg:px-10 lg:pb-[var(--v-hero-pad)] lg:pt-[max(calc(var(--v-nav)+7px),calc(var(--v-hero)*0.4))]">
          {/* Back navigation — commented out across all sub-pages. It sat
              directly beneath the fixed nav with almost no clearance, and the
              global nav already provides the route back.
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <Link
              href={backHref}
              className="mb-3 md:mb-[var(--v-lead-mt)] inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft size={13} strokeWidth={2} />
              {backLabel}
            </Link>
          </motion.div>
          */}

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="mb-2 md:mb-[var(--v-label-mb)] text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500"
          >
            {eyebrow}
          </motion.p>

          <h1>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
              className="block text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
            >
              {service.title}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="mt-2 md:mt-[var(--v-lead-mt)] max-w-[520px] text-[length:var(--v-lead)] font-light leading-relaxed text-white/82"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="flex flex-1 flex-col justify-center bg-white py-8 md:py-[var(--v-section)]">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px] lg:gap-10">

            {/* Left — description */}
            <div>
              <AnimatedSection>
                <p className="mb-2 md:mb-[var(--v-label-mb)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/80">
                  Overview
                </p>
                <p className="text-[length:var(--v-text)] font-light leading-[1.7] text-body">
                  {service.longDesc}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mt-7 md:mt-[var(--v-block)]">
                <div className="h-px bg-[#EBEBEB]" />
                <div className="mt-5 md:mt-[var(--v-block-sm)]">
                  <p className="mb-2 md:mb-[var(--v-label-mb)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/80">
                    How We Work
                  </p>
                  <p className="text-[length:var(--v-text)] font-light leading-[1.7] text-body">
                    We are built for the moment you need expertise and can&apos;t wait to hire it.
                    A specialist joins your project within days, aligned to your governance, tools
                    and reporting cadence, and contributing from day one. Take one embedded expert
                    or a small team, for a single task or a full programme.
                  </p>
                  <p className="mt-3 md:mt-[var(--v-block-sm)] text-[length:var(--v-text)] font-light leading-[1.7] text-body">
                    Every output is transparent, auditable and yours to keep, produced to a
                    standard that holds up in a board review or a formal dispute.
                  </p>
                </div>
              </AnimatedSection>

              {/* Tools — inline below text (service-specific + common practice tools) */}
              <AnimatedSection delay={0.15} className="mt-7 md:mt-[var(--v-block)]">
                <div className="h-px bg-[#EBEBEB]" />
                <div className="mt-5 md:mt-[var(--v-block-sm)]">
                  <p className="mb-3 md:mb-[var(--v-label-mb)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/80">
                    Tools We Use
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-amber-600/20 bg-amber-50 px-4 py-1.5 text-[13px] font-medium text-amber-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-3 md:space-y-[var(--v-stack)]">

              {/* Techniques / Scope */}
              <AnimatedSection delay={0.12}>
                <div className="rounded-xl border border-[#EBEBEB] bg-[#F8F7F5] p-4 md:p-[var(--v-card)]">
                  <p className="mb-2.5 md:mb-[var(--v-label-mb)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/80">
                    {service.category === "forensics" ? "Techniques & Approaches" : "Scope Includes"}
                  </p>
                  <ul className="divide-y divide-[#EBEBEB]">
                    {service.techniques.map((t) => (
                      <li key={t} className="flex items-center gap-2.5 py-2 md:py-[var(--v-li)]">
                        <CheckCircle2 size={13} strokeWidth={2} className="flex-shrink-0 text-amber-600" />
                        <span className="text-[length:var(--v-text-sm)] font-light leading-tight text-body">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Inline CTA card */}
              <AnimatedSection delay={0.18}>
                <div className="rounded-xl bg-[#0E0E0E] p-4 md:p-[var(--v-card)]">
                  <p className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                    Deploy This Service
                  </p>
                  <p className="text-[13px] font-light leading-relaxed text-white/82">
                    Need {service.title} support? Get in touch and we&apos;ll respond within 24 hours.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-3 md:mt-[var(--v-stack)] inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-2.5 text-[12px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-150 hover:bg-amber-500 active:scale-[0.97]"
                  >
                    Get in Touch <ArrowRight size={13} strokeWidth={2} />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* ── GLOBAL FOOTER CTA ── */}
      <FooterCTA />
    </>
  );
}

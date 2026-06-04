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
import { Service } from "@/lib/services";
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
  const backHref  = service.category === "management" ? "/services"  : "/forensics";
  const backLabel = service.category === "management" ? "Management Services" : "Forensics Services";
  const eyebrow   = service.category === "management" ? "Management Service"  : "Forensics Service";

  return (
    <>
      {/* ── HERO — compact photographic, same style as About / Sectors ── */}
      <section
        className="relative flex overflow-hidden bg-[#0E0E0E]"
        style={{ minHeight: "clamp(300px, 48dvh, 500px)" }}
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

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-6 pb-12 pt-32 lg:px-10">
          {/* Back navigation */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
          >
            <Link
              href={backHref}
              className="mb-6 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white/70"
            >
              <ArrowLeft size={13} strokeWidth={2} />
              {backLabel}
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500"
          >
            {eyebrow}
          </motion.p>

          <h1>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
              className="block text-[clamp(2rem,4.5vw,3.75rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
            >
              {service.title}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: EASE }}
            className="mt-4 max-w-[520px] text-[16px] font-light leading-relaxed text-white/55"
          >
            {service.shortDesc}
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">

            {/* Left — description */}
            <div>
              <AnimatedSection>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                  Overview
                </p>
                <p className="text-[17px] font-light leading-[1.75] text-[#0E0E0E]/65">
                  {service.longDesc}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.1} className="mt-12">
                <div className="h-px bg-[#EBEBEB]" />
                <div className="mt-8">
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                    How We Work
                  </p>
                  <p className="text-[16px] font-light leading-[1.75] text-[#0E0E0E]/60">
                    H-World professionals integrate directly into your project structure from day one.
                    We align to your existing governance, tools, and reporting cadence — providing
                    specialist capability without friction. Whether you need one embedded expert
                    or a small controls team, we deploy the right resource in the right configuration.
                  </p>
                  <p className="mt-4 text-[16px] font-light leading-[1.75] text-[#0E0E0E]/60">
                    All outputs are transparent, auditable, and produced to a standard that holds up
                    under scrutiny — whether in a board review or a formal dispute.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Right — sidebar */}
            <div className="space-y-5">

              {/* Techniques / Scope */}
              <AnimatedSection delay={0.12}>
                <div className="rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-6">
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                    {service.category === "forensics" ? "Techniques & Approaches" : "Scope Includes"}
                  </p>
                  <ul className="space-y-2.5">
                    {service.techniques.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 flex-shrink-0 text-amber-600" />
                        <span className="text-[14px] font-light text-[#0E0E0E]/65">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              {/* Tools */}
              {service.tools && service.tools.length > 0 && (
                <AnimatedSection delay={0.18}>
                  <div className="rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-6">
                    <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                      Tools We Use
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full border border-amber-600/20 bg-white px-3 py-1 text-[12px] font-medium text-amber-700"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {/* Inline CTA card */}
              <AnimatedSection delay={0.24}>
                <div className="rounded-2xl bg-[#0E0E0E] p-6">
                  <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/30">
                    Deploy This Service
                  </p>
                  <p className="text-[15px] font-light leading-relaxed text-white/55">
                    Need {service.title} support? Get in touch — we respond within 24 hours.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-600 py-3 text-[12px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-150 hover:bg-amber-500 active:scale-[0.97]"
                  >
                    Get in Touch <ArrowRight size={13} strokeWidth={2} />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      {related.length > 0 && (
        <section className="bg-[#F8F7F5] py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <AnimatedSection className="mb-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                Related Services
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.slice(0, 3).map((s, i) => {
                const RelatedIcon = iconMap[s.icon] ?? LayoutGrid;
                const href = s.category === "management" ? `/services/${s.slug}` : `/forensics/${s.slug}`;
                return (
                  <AnimatedSection key={s.slug} delay={i * 0.07}>
                    <Link
                      href={href}
                      className="group flex items-start gap-4 rounded-xl border border-[#EBEBEB] bg-white p-5 transition-[border-color,box-shadow] duration-200 hover:border-amber-200 hover:shadow-[0_6px_20px_rgba(217,119,6,0.08)]"
                    >
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600 transition-colors duration-200 group-hover:bg-amber-600 group-hover:text-white">
                        <RelatedIcon size={16} strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-semibold text-[#0E0E0E]">{s.title}</h3>
                        <p className="mt-1 line-clamp-2 text-[13px] font-light text-[#0E0E0E]/45">
                          {s.shortDesc}
                        </p>
                      </div>
                    </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── GLOBAL FOOTER CTA (replaces the old inline "Ready to Deploy?" strip) ── */}
      <FooterCTA />
    </>
  );
}

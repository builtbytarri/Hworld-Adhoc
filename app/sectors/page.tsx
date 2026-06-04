import type { Metadata } from "next";
import {
  Building2, Globe, Zap, Train, Settings,
  Droplets, Anchor, Landmark, ArrowRight,
} from "lucide-react";
import SectorsHero from "@/components/sectors/SectorsHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FooterCTA from "@/components/home/FooterCTA";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Sectors",
  description:
    "H-World Ad Hoc deploys planning and controls expertise across construction, infrastructure, energy, rail, marine, oil & gas, and public sector projects.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Building2, Globe, Zap, Train, Settings, Droplets, Anchor, Landmark,
};

export default function SectorsPage() {
  return (
    <>
      {/* 1. HERO — compact, aerial infrastructure photo */}
      <SectorsHero />

      {/* 2. SECTORS GRID
          Taste-skill applied: 4-col equal card grid banned.
          Redesigned as an editorial two-column numbered list.
          Each sector: amber number + icon + title + description.
          Hairline dividers between rows — no card boxes, no rounded shadows.
          Hover: amber left-border slides in + subtle bg tint.
          (Same interaction language as the ServicesGrid rows.)
      */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

          {/* Section heading */}
          <AnimatedSection className="mb-10">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
              Our Sectors
            </p>
            <h2 className="max-w-2xl text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0E0E0E]">
              Deep domain experience. Genuine sector knowledge.
            </h2>
          </AnimatedSection>

          {/* Two-column editorial list */}
          <div className="grid grid-cols-1 gap-x-12 border-t border-[#EBEBEB] lg:grid-cols-2">
            {sectors.map((sector, i) => {
              const Icon = iconMap[sector.icon] ?? Building2;
              const num = String(i + 1).padStart(2, "0");

              return (
                <AnimatedSection
                  key={sector.slug}
                  delay={Math.min(i * 0.05, 0.3)}
                  className="border-b border-[#EBEBEB]"
                >
                  {/* Sector row — hover reveals amber left bar + bg tint */}
                  <div className="group relative flex items-start gap-5 py-7 px-2 -mx-2 rounded-xl transition-colors duration-150 hover:bg-[#F8F7F5] cursor-default">
                    {/* Amber left-border indicator */}
                    <span
                      aria-hidden
                      className="absolute left-0 top-4 bottom-4 w-0 rounded-full bg-amber-600 transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-[3px]"
                    />

                    {/* Number */}
                    <span className="mt-0.5 w-8 flex-shrink-0 text-[12px] font-semibold tabular-nums text-amber-600/70">
                      {num}
                    </span>

                    {/* Icon */}
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#F8F7F5] text-[#0E0E0E]/50 transition-colors duration-200 group-hover:bg-amber-50 group-hover:text-amber-600">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[17px] font-semibold text-[#0E0E0E]">
                          {sector.title}
                        </h3>
                        <ArrowRight
                          size={14}
                          strokeWidth={2}
                          className="flex-shrink-0 text-amber-600 opacity-0 transition-[opacity,transform] duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      </div>
                      <p className="mt-1.5 text-[15px] font-light leading-relaxed text-[#0E0E0E]/50">
                        {sector.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. RIGOUR STATEMENT — kept as-is, updated typography only */}
      <section className="bg-[#F8F7F5] py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="text-center">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,3.5vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0E0E0E]">
              The same rigour. Every sector.
            </h2>
            <p className="mx-auto mt-6 max-w-[560px] text-[17px] font-light leading-relaxed text-[#0E0E0E]/55">
              Whether you&apos;re building a data centre, a rail depot, or an offshore platform —
              the principles of sound planning, controls, and forensic analysis are universal.
              H-World brings that consistency of standard regardless of sector.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}

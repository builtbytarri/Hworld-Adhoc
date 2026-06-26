import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import FooterCTA from "@/components/home/FooterCTA";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "H-World is part of the H-World Group. Our Ad Hoc Services division deploys expert planning, controls, and forensics professionals on a flexible, on-demand basis.",
};

const principles = [
  {
    n: "01",
    heading: "Expert-grade. Always.",
    body: "Every professional we deploy operates at the standard required by major programmes — not the standard of a general resourcing agency.",
  },
  {
    n: "02",
    heading: "Transparent and accountable.",
    body: "We produce outputs that are auditable, defensible, and clear. Whether it ends up in a board review or a formal adjudication, our work holds up.",
  },
  {
    n: "03",
    heading: "Fast but never reckless.",
    body: "Rapid deployment means the right people ready, the right processes in place — not cutting corners. We start contributing from day one.",
  },
  {
    n: "04",
    heading: "Independent by design.",
    body: "No parent contractor, no preferred supply chain, no vested interest in the outcome. That independence is the foundation of every piece of advice we give.",
  },
];

const evidencePanels = [
  {
    src: img.handsBlueprints.src,
    alt: img.handsBlueprints.alt,
    label: "Planning & Programme Analysis",
    position: "60% 50%",
  },
  {
    src: img.staffBriefing.src,
    alt: img.staffBriefing.alt,
    label: "On-Site Deployment",
    position: "50% 30%",
  },
  {
    src: img.workersTablet.src,
    alt: img.workersTablet.alt,
    label: "Controls & Reporting",
    position: "50% 25%",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
      {/* 1. HERO — photographic, staggered entrance */}
      <AboutHero />

      {/* 2. STORY */}
      <section className="flex-1 bg-white py-8 lg:py-10">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">

          <AnimatedSection className="mb-6 max-w-3xl">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
              About
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,3rem)] font-bold leading-[1.0] tracking-[-0.03em] text-[#0E0E0E]">
              Specialists in the moments that matter.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_380px]">

            {/* Left — two-column editorial prose */}
            <div className="pr-0 lg:pr-14">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-[#E5E2DC] pt-6">
                <AnimatedSection delay={0.05}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E0E0E]/35">
                    Who We Are
                  </h3>
                  <p className="text-[14px] font-light leading-[1.7] text-[#0E0E0E]/60">
                    H-World exists because the market needed something that didn&apos;t exist:
                    expert-grade planning, controls, and forensic professionals available
                    on demand — without the friction of permanent hire or the compromise
                    of a generalist agency.
                  </p>
                  <p className="mt-2 text-[14px] font-light leading-[1.7] text-[#0E0E0E]/60">
                    A programme drifting. A claim needing analysis. A controls function
                    that needs standing up from scratch. These are the moments we are
                    built for.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.12}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E0E0E]/35">
                    How We Work
                  </h3>
                  <p className="text-[14px] font-light leading-[1.7] text-[#0E0E0E]/60">
                    We embed into your team. We align to your governance, your tools,
                    and your reporting cadence from day one — not as consultants who
                    parachute in and leave, but as professionals who carry the work
                    alongside you.
                  </p>
                  <p className="mt-2 text-[14px] font-light leading-[1.7] text-[#0E0E0E]/60">
                    The goal is always to deliver value immediately — and to leave your
                    team stronger than we found it.
                  </p>
                </AnimatedSection>
              </div>

              {/* Stats */}
              <AnimatedSection delay={0.2} className="mt-5 border-t border-[#E5E2DC] pt-4">
                <p className="text-[13px] font-light tracking-wide text-[#0E0E0E]/40">
                  <span className="font-semibold text-[#0E0E0E]/70">10+</span> disciplines
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <span className="font-semibold text-[#0E0E0E]/70">8</span> sectors
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <span className="font-semibold text-[#0E0E0E]/70">48h</span> from brief to deployment
                  &nbsp;&nbsp;·&nbsp;&nbsp;
                  <span className="font-semibold text-[#0E0E0E]/70">100%</span> independent
                </p>
              </AnimatedSection>
            </div>

            {/* Right — image */}
            <AnimatedSection
              className="mt-8 hidden overflow-hidden rounded-xl lg:mt-0 lg:block"
              delay={0.08}
            >
              <div style={{ minHeight: "340px" }} className="relative h-full w-full">
                <KenBurnsImage
                  src={img.teamScaleModel.src}
                  alt={img.teamScaleModel.alt}
                  variant="drift"
                  sizes="380px"
                  position="50% 35%"
                  className="absolute inset-0"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      </div>

      {/* 3. MISSION QUOTE */}
      <section className="relative overflow-hidden bg-[#0E0E0E]" style={{ minHeight: "200px" }}>
        <KenBurnsImage
          src={img.siteWarehouse.src}
          alt=""
          variant="pan-left"
          sizes="100vw"
          position="50% 50%"
          className="absolute inset-0"
        />
        <div aria-hidden className="absolute inset-0 bg-[#0E0E0E]/80" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-8 text-center lg:px-10 lg:py-10">
          <AnimatedSection>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500">
              Our Mission
            </p>
            <blockquote className="mx-auto max-w-3xl text-[clamp(1.2rem,2.2vw,1.9rem)] font-medium leading-[1.3] tracking-[-0.02em] text-white">
              &ldquo;To give project owners, contractors, and developers direct access
              to specialist planning and forensic capability — flexibly, responsively,
              and at the quality level that major programmes demand.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. EVIDENCE STRIP — 3 photo panels */}
      <section className="bg-[#F8F7F5] py-7 lg:py-8">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
              What We Do In Practice
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {evidencePanels.map((panel, i) => (
              <AnimatedSection key={panel.label} delay={i * 0.08}>
                <div
                  className="group relative overflow-hidden rounded-xl bg-[#0E0E0E]"
                  style={{ minHeight: "clamp(160px, 20vw, 240px)" }}
                >
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={82}
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    style={{ objectPosition: panel.position }}
                  />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/85 via-[#0E0E0E]/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-amber-500">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-0.5 text-[13px] font-semibold text-white">
                      {panel.label}
                    </h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OPERATING PRINCIPLES */}
      <section className="relative overflow-hidden bg-white py-8 lg:py-10">
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[38%] lg:block"
        >
          <Image
            src={img.networkPins.src}
            alt=""
            fill
            sizes="38vw"
            className="object-cover object-left opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-5 max-w-xl">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
              How We Operate
            </p>
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-medium leading-[1.05] tracking-[-0.025em] text-[#0E0E0E]">
              Four principles. No exceptions.
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-px bg-[#EBEBEB] sm:grid-cols-2 rounded-xl overflow-hidden">
            {principles.map((p, i) => (
              <AnimatedSection
                key={p.n}
                delay={i * 0.06}
                className="bg-white p-5 lg:p-6"
              >
                <span className="text-[12px] font-semibold tabular-nums text-amber-600">
                  {p.n}
                </span>
                <h3 className="mt-2 text-[16px] font-semibold text-[#0E0E0E]">
                  {p.heading}
                </h3>
                <p className="mt-1.5 text-[13px] font-light leading-relaxed text-[#0E0E0E]/55">
                  {p.body}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}

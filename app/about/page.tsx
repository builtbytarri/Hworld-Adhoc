import type { Metadata } from "next";
import Image from "next/image";
import AboutHero from "@/components/about/AboutHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import FooterCTA from "@/components/home/FooterCTA";
import { img } from "@/lib/images";
import { site, absoluteUrl, breadcrumbs, jsonLdProps } from "@/lib/site";

export const metadata: Metadata = {
  /* `absolute` bypasses the "%s | H-World Ad Hoc" template — the brand is
     already in this title and would otherwise appear twice. */
  title: { absolute: "About H-World Ad Hoc | Part of H-World" },
  description:
    "H-World Ad Hoc is the on-demand planning and forensics division of H-World, alongside engineering & construction, marine and deal sourcing.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About H-World Ad Hoc | Part of H-World",
    description:
      "The on-demand planning, controls and forensics division of H-World. Expert-grade specialists, deployed when you need them.",
    url: absoluteUrl("/about"),
  },
};

/*
 * AboutPage schema naming the sister divisions. This is the primary
 * entity-disambiguation signal on the site: it associates this domain with
 * "H-World construction" and "H-World marine" without competing against the
 * parent site for those terms. See SEO-STRATEGY.md §2.
 */
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${absoluteUrl("/about")}#aboutpage`,
  url: absoluteUrl("/about"),
  name: "About H-World Ad Hoc",
  isPartOf: { "@id": `${site.url}/#website` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: [...site.alternateNames],
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      url: site.parent.url,
      description:
        "H-World operates across ad hoc project planning, engineering & construction, marine, and deal sourcing.",
      subOrganization: [
        { "@type": "Organization", name: "H-World Ad Hoc", url: site.url },
        { "@type": "Organization", name: "H-World Engineering & Construction" },
        { "@type": "Organization", name: "H-World Marine" },
        { "@type": "Organization", name: "H-World Deal Sourcing" },
      ],
    },
  },
};

const breadcrumbSchema = breadcrumbs([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const principles = [
  {
    n: "01",
    heading: "Always expert-grade.",
    body: "Every professional we deploy operates at the standard required by major programmes, not the standard of a general resourcing agency.",
  },
  {
    n: "02",
    heading: "Transparent and accountable.",
    body: "We produce outputs that are auditable, defensible, and clear. Whether it ends up in a board review or a formal adjudication, our work holds up.",
  },
  {
    n: "03",
    heading: "Fast but never reckless.",
    body: "Rapid deployment means the right people ready and the right processes in place, not corners cut. We start contributing from day one.",
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
      <script {...jsonLdProps(aboutSchema)} />
      <script {...jsonLdProps(breadcrumbSchema)} />
      <div className="flex min-h-[100dvh] flex-col">
      {/* 1. HERO — photographic, staggered entrance */}
      <AboutHero />

      {/* 2. STORY */}
      <section className="flex flex-1 flex-col justify-center bg-white py-8 md:py-[var(--v-section)]">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">

          <AnimatedSection className="mb-6 md:mb-[var(--v-block-sm)] max-w-3xl">
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
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E0E0E]/80">
                    Who We Are
                  </h3>
                  <p className="text-[length:var(--v-text-sm)] font-light leading-[1.6] text-body">
                    H-World exists because the market needed something that didn&apos;t exist:
                    expert-grade planning, controls and forensic professionals available
                    on demand, without the wait of a permanent hire or the compromise
                    of a generalist agency.
                  </p>
                  <p className="mt-2 text-[length:var(--v-text-sm)] font-light leading-[1.6] text-body">
                    A programme drifting. A claim needing analysis. A controls function
                    that needs standing up from scratch. These are the moments we are
                    built for.
                  </p>
                  <p className="mt-2 text-[length:var(--v-text-sm)] font-light leading-[1.6] text-body">
                    We are the ad hoc division of{" "}
                    <a
                      href={site.parent.url}
                      target="_blank"
                      rel="noopener"
                      className="font-medium text-amber-700 transition-colors hover:text-amber-600"
                    >
                      H-World
                    </a>
                    , which also delivers engineering and construction, marine, and deal
                    sourcing.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.12}>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0E0E0E]/80">
                    How We Work
                  </h3>
                  <p className="text-[length:var(--v-text-sm)] font-light leading-[1.6] text-body">
                    We embed into your team. We align to your governance, your tools
                    and your reporting cadence from day one, not as consultants who
                    parachute in and leave, but as professionals who carry the work
                    alongside you.
                  </p>
                  <p className="mt-2 text-[length:var(--v-text-sm)] font-light leading-[1.6] text-body">
                    The goal is always to deliver value immediately, and to leave your
                    team stronger than we found it.
                  </p>
                </AnimatedSection>
              </div>

              {/* Stats */}
              <AnimatedSection delay={0.2} className="mt-5 md:mt-[var(--v-block-sm)] border-t border-[#E5E2DC] pt-4">
                {/* Figures inherit the paragraph colour and are set apart by
                    weight alone, so the line reads as one sentence rather than
                    numbers floating away from their labels. Explicit {" "}
                    because JSX swallows the space after a closing tag. */}
                <p className="text-[13px] font-light tracking-wide text-body">
                  <span className="font-semibold">10+</span>{" "}disciplines
                  <span aria-hidden className="mx-2.5 text-[#0E0E0E]/35">·</span>
                  <span className="font-semibold">8</span>{" "}sectors
                  <span aria-hidden className="mx-2.5 text-[#0E0E0E]/35">·</span>
                  <span className="font-semibold">48h</span>{" "}from brief to deployment
                  <span aria-hidden className="mx-2.5 text-[#0E0E0E]/35">·</span>
                  <span className="font-semibold">100%</span>{" "}independent
                </p>
              </AnimatedSection>
            </div>

            {/* Right — image */}
            <AnimatedSection
              className="mt-8 hidden overflow-hidden rounded-xl lg:mt-0 lg:block lg:self-start"
              delay={0.08}
            >
              <div style={{ height: "clamp(200px,42dvh,360px)" }} className="relative w-full">
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
              &ldquo;To give project owners, contractors and developers direct access
              to specialist planning and forensic capability, flexibly, responsively,
              and at the quality level that major programmes demand.&rdquo;
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. EVIDENCE STRIP — 3 photo panels */}
      <section className="bg-[#F8F7F5] py-7 lg:py-8">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/80">
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
              Four principles we never compromise on.
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
                <p className="mt-1.5 text-[13px] font-light leading-relaxed text-body">
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

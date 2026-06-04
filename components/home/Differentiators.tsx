/*
 * Differentiators — "Why H-World"
 * ──────────────────────────────────────────────────────────────────────────────
 * Dark section over the amber isometric lattice texture (brand-matched abstract).
 * Frosted dark-glass cards float over it with hover lift — the user's brief:
 * "glassmorphic designs so cards can look more defined while floating".
 *
 * design-taste: cards justified by elevation/grouping; amber accent carries the
 * numbering. EMIL: hover lift on interactive glass uses ease-out-expo, transform
 * + shadow only.
 */

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { img } from "@/lib/images";

const points = [
  {
    n: "01",
    t: "Rapid mobilisation",
    b: "Experts on-site or remote within days, not weeks. When a programme slips or a gap opens, speed is everything — we are built for that.",
  },
  {
    n: "02",
    t: "Multi-sector expertise",
    b: "Construction, energy, infrastructure, rail, marine and oil & gas. Our people have carried live programmes in each of these environments.",
  },
  {
    n: "03",
    t: "Tools mastery",
    b: "Primavera P6, Asta Powerproject, Microsoft Project, Aphex, Synchro — operated at a professional level, not just understood in theory.",
  },
  {
    n: "04",
    t: "Forensic-grade rigour",
    b: "The same analytical discipline we apply to formal claims is embedded into all our live project support — so your data is always defensible.",
  },
  {
    n: "05",
    t: "Independent & objective",
    b: "No vested interest in the outcome. Our advice is grounded in evidence and professional judgement — exactly what hard moments demand.",
  },
  {
    n: "06",
    t: "Embedded, not bolted-on",
    b: "We align to your governance, tools and reporting cadence from day one — adding capability without disrupting the team you already have.",
  },
];

export default function Differentiators() {
  return (
    <section className="relative overflow-hidden bg-[#161616] py-14 lg:py-20">
      {/* amber lattice texture */}
      <Image
        src={img.amberLatticeDark.src}
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        className="pointer-events-none absolute inset-0 object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#161616] via-[#161616]/60 to-[#161616]"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <AnimatedSection className="mb-14 max-w-2xl">
          <p className="label-sm text-amber-500">Why H-World</p>
          <h2 className="heading-lg mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-white">
            What sets us apart.
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <AnimatedSection key={p.n} delay={Math.min(i * 0.07, 0.35)}>
              <GlassCard tone="light" interactive className="h-full p-7">
                <span className="font-display text-sm font-bold tabular-nums text-amber-500">
                  {p.n}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{p.t}</h3>
                <p className="mt-2.5 text-[15px] font-light leading-relaxed text-white/55">
                  {p.b}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

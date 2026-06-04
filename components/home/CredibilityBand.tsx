/*
 * CredibilityBand — full-bleed proof moment
 * ──────────────────────────────────────────────────────────────────────────────
 * A photographic band (professional team + blueprint) under a charcoal scrim,
 * carrying the hard numbers. Breaks the page rhythm between the light services
 * grid and the dark differentiators — impeccable: "art direction per section".
 *
 * Stats animate in once; figures use the display grotesque at large scale with
 * tabular numerals.
 */

import AnimatedSection from "@/components/ui/AnimatedSection";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import { img } from "@/lib/images";

const stats = [
  { figure: "10+", label: "Management & forensics disciplines" },
  { figure: "8", label: "Sectors served across the UK & beyond" },
  { figure: "48h", label: "Typical scope-to-mobilisation window" },
  { figure: "100%", label: "Independent — no vested interest" },
];

export default function CredibilityBand() {
  return (
    <section className="relative overflow-hidden bg-[#1A1A1A] py-14 lg:py-20">
      <KenBurnsImage
        src={img.architectsBlueprint.src}
        alt={img.architectsBlueprint.alt}
        variant="pan-right"
        sizes="100vw"
        position="50% 30%"
        className="absolute inset-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/55"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
        <AnimatedSection className="max-w-2xl">
          <p className="label-sm text-amber-500">Why Teams Call Us First</p>
          <h2 className="heading-lg mt-5 text-[clamp(2rem,3.5vw,3.25rem)] text-white">
            Specialist capability, available the moment your programme needs it.
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/15 pt-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <p className="font-display text-[clamp(2.75rem,5vw,4rem)] font-extrabold leading-none tabular-nums text-amber-500">
                {s.figure}
              </p>
              <p className="mt-3 max-w-[180px] text-sm font-light leading-snug text-white/55">
                {s.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

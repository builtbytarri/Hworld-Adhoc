import type { Metadata } from "next";
import SubpageHero from "@/components/ui/SubpageHero";
import ServiceCard from "@/components/ui/ServiceCard";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FooterCTA from "@/components/home/FooterCTA";
import { managementServices, forensicsServices } from "@/lib/services";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Management Services",
  description:
    "Expert ad hoc project management, planning, controls, and financial services — deployed rapidly at any stage of your project.",
};

export default function ServicesPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Management Services"
        headingWhite="Expert support across"
        headingAmber="every phase of delivery."
        subline="From mobilisation through completion — and beyond, into forensic analysis — our services cover every phase of the project lifecycle."
        imageSrc={img.handsBlueprints.src}
        imageAlt={img.handsBlueprints.alt}
        imagePosition="60% 50%"
        variant="drift"
      />

      <section className="bg-[#F8F7F5] py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-10">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
              Management Services
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0E0E0E]">
              Ten disciplines. One standard.
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {managementServices.map((service, i) => (
              <AnimatedSection key={service.slug} delay={Math.min(i * 0.05, 0.35)}>
                <ServiceCard service={service} featured />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Forensics teaser */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-10">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">
              Also Available
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0E0E0E]">
              Forensics Services
            </h2>
            <p className="mt-4 max-w-[500px] text-[16px] font-light leading-relaxed text-[#0E0E0E]/55">
              When claims arise or disputes escalate, our forensics team provides independent, evidence-led programme analysis.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {forensicsServices.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <ServiceCard service={service} featured />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}

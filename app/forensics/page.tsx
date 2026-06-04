import type { Metadata } from "next";
import Link from "next/link";
import {
  Search, Scale, Gavel, CheckCircle2, ArrowRight,
} from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FooterCTA from "@/components/home/FooterCTA";
import { forensicsServices } from "@/lib/services";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Forensics Services",
  description:
    "Rigorous, evidence-based forensic analysis — claims analysis, dispute resolution, and expert witness services for construction and infrastructure projects.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Search, Scale, Gavel,
};

export default function ForensicsPage() {
  return (
    <>
      <SubpageHero
        eyebrow="Forensics Services"
        headingWhite="Rigorous, evidence-based"
        headingAmber="forensic analysis."
        subline="When schedules slip, claims arise, or disputes escalate, H-World provides the independent programme expertise to establish facts and protect your position."
        imageSrc={img.networkPins.src}
        imageAlt={img.networkPins.alt}
        imagePosition="50% 40%"
        variant="pan-right"
      />

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="space-y-6">
            {forensicsServices.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Search;
              return (
                <AnimatedSection key={service.slug} delay={i * 0.1}>
                  <div className="rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-8 lg:p-10">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
                      <div>
                        <div className="mb-5 flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                            <Icon size={20} strokeWidth={1.5} />
                          </div>
                          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                            Forensics Service
                          </span>
                        </div>
                        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#0E0E0E]">
                          {service.title}
                        </h2>
                        <p className="mt-4 max-w-[560px] text-[16px] font-light leading-relaxed text-[#0E0E0E]/60">
                          {service.longDesc}
                        </p>
                        <Link
                          href={`/forensics/${service.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-600 transition-colors hover:text-amber-700"
                        >
                          Learn More <ArrowRight size={12} strokeWidth={2.5} />
                        </Link>
                      </div>
                      <div>
                        <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                          Techniques &amp; Approaches
                        </p>
                        <ul className="space-y-2.5">
                          {service.techniques.map((t) => (
                            <li key={t} className="flex items-start gap-3">
                              <CheckCircle2
                                size={14}
                                strokeWidth={2}
                                className="mt-0.5 flex-shrink-0 text-amber-600"
                              />
                              <span className="text-[14px] font-light text-[#0E0E0E]/65">{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <FooterCTA />
    </>
  );
}

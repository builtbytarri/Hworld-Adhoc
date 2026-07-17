"use client";

import Link from "next/link";
import { Search, Scale, Gavel, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import SubpageHero from "@/components/ui/SubpageHero";
import FooterCTA from "@/components/home/FooterCTA";
import { forensicsServices } from "@/lib/services";
import { img } from "@/lib/images";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Search, Scale, Gavel,
};

/* ── Accordion item ───────────────────────────────────────────── */
function ForensicsAccordionItem({
  service,
  index,
  isOpen,
  onToggle,
}: {
  service: (typeof forensicsServices)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = iconMap[service.icon] ?? Search;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-amber-200 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
          : "border-[#EBEBEB] bg-[#F8F7F5] shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* ── Header row (always visible) ── */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 px-6 py-5 text-left group"
      >
        {/* Icon badge */}
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
            isOpen ? "bg-amber-500 text-white" : "bg-amber-50 text-amber-600"
          }`}
        >
          <Icon size={18} strokeWidth={1.5} />
        </div>

        {/* Title + short desc */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35 mb-0.5">
            Forensics Service
          </p>
          <h2 className="text-[1.05rem] font-bold leading-snug tracking-[-0.02em] text-[#0E0E0E]">
            {service.title}
          </h2>
          {!isOpen && (
            <p className="mt-0.5 text-[13px] font-light text-[#0E0E0E]/50 truncate">
              {service.shortDesc}
            </p>
          )}
        </div>

        {/* Chevron */}
        <div
          className={`ml-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-amber-100 text-amber-600" : "bg-[#E8E8E6] text-[#0E0E0E]/50"
          }`}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChevronDown size={15} strokeWidth={2.5} />
          </motion.div>
        </div>
      </button>

      {/* ── Expanded content ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              {/* Divider */}
              <div className="mb-5 h-px bg-[#EBEBEB]" />

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_260px]">
                {/* Left: description + CTA */}
                <div>
                  <p className="text-[15px] font-light leading-relaxed text-[#0E0E0E]/60">
                    {service.longDesc}
                  </p>
                  <Link
                    href={`/forensics/${service.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-amber-600 transition-colors hover:text-amber-700"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More <ArrowRight size={11} strokeWidth={2.5} />
                  </Link>
                </div>

                {/* Right: techniques */}
                <div>
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#0E0E0E]/35">
                    Techniques &amp; Approaches
                  </p>
                  <ul className="space-y-2">
                    {service.techniques.map((t) => (
                      <li key={t} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={13}
                          strokeWidth={2}
                          className="mt-0.5 flex-shrink-0 text-amber-500"
                        />
                        <span className="text-[13px] font-light text-[#0E0E0E]/65">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function ForensicsContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => {
      const isOpening = prev !== i;
      if (isOpening) {
        // After state + DOM update, snap the section into view
        requestAnimationFrame(() => {
          sectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        });
      }
      return isOpening ? i : null;
    });
  };

  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <SubpageHero
          eyebrow="Ad Hoc Forensics"
          headingWhite="Forensic analysis that holds up"
          headingAmber="when it reaches a dispute."
          imageSrc={img.networkPins.src}
          imageAlt={img.networkPins.alt}
          imagePosition="50% 40%"
          variant="pan-right"
          compact
        />

        <section ref={sectionRef} className="flex flex-1 flex-col justify-center bg-white py-10 md:py-[var(--v-section)]">
        <div className="mx-auto w-full max-w-[900px] px-6 lg:px-10">
          {/* Section label */}
          <div className="mb-6 md:mb-[var(--v-block-sm)]">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600 mb-1">
              Our Disciplines
            </p>
            <p className="text-[14px] font-light text-[#0E0E0E]/45 max-w-md">
              Bring us in for a single claim, an independent review, or full expert-witness
              support, for as long as the dispute demands.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {forensicsServices.map((service, i) => (
              <ForensicsAccordionItem
                key={service.slug}
                service={service}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
        </section>
      </div>

      <FooterCTA />
    </>
  );
}

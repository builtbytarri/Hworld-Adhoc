"use client";

import {
  LayoutGrid, Calendar, Box, Users, BarChart2,
} from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import FooterCTA from "@/components/home/FooterCTA";
import MagicBento, { type BentoItem } from "@/components/ui/magic-bento";
import { visibleManagementServices } from "@/lib/services";
import { img } from "@/lib/images";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  LayoutGrid, Calendar, Box, Users, BarChart2,
};

const bentoItems: BentoItem[] = visibleManagementServices.map((svc) => {
  const Icon = iconMap[svc.icon] ?? LayoutGrid;
  return {
    title: svc.title,
    description: svc.shortDesc,
    label: "Management",
    icon: <Icon size={18} strokeWidth={1.5} />,
    href: `/services/${svc.slug}`,
  };
});

export default function ServicesContent() {
  return (
    <>
      <div className="flex min-h-[100dvh] flex-col">
        <SubpageHero
          eyebrow="Management Services"
          headingWhite="Expert support across"
          headingAmber="every phase of delivery."
          imageSrc={img.handsBlueprints.src}
          imageAlt={img.handsBlueprints.alt}
          imagePosition="60% 50%"
          variant="drift"
          compact
        />

        <section className="flex flex-1 flex-col justify-center bg-white py-8 md:py-[var(--v-section)]">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-10">
            <MagicBento items={bentoItems} enableTilt={false} />
          </div>
        </section>
      </div>

      <FooterCTA />
    </>
  );
}

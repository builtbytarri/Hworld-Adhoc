import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ValueProp from "@/components/home/ValueProp";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCTA";
import ScrollSnapProvider from "@/components/home/ScrollSnapProvider";
import { site } from "@/lib/site";

/*
 * This is a SERVER component so it can export `metadata`. The scroll-snap
 * behaviour lives in <ScrollSnapProvider>, a thin client wrapper.
 * See SEO-STRATEGY.md §3 — the homepage previously carried no metadata at all.
 */
export const metadata: Metadata = {
  title: "H-World Ad Hoc | On-Demand Project Planning & Controls",
  description:
    "Expert planning, controls and forensics professionals on your programme within days. H-World Ad Hoc deploys specialists on demand, for as long as you need.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "H-World Ad Hoc | On-Demand Project Planning & Controls",
    description:
      "Expert planning, controls and forensics professionals on your programme within days. H-World Ad Hoc deploys specialists on demand, for as long as you need.",
    url: site.url,
    type: "website",
  },
};

const snapSection = {
  scrollSnapAlign: "start" as const,
  scrollSnapStop: "always" as const,
};

export default function HomePage() {
  return (
    <ScrollSnapProvider>
      {/* 1 — Hero (full screen, natural snap point) */}
      <div style={snapSection}>
        <Hero />
      </div>

      {/* 2 — Our Services intro */}
      <div style={snapSection}>
        <ServicesGrid />
      </div>

      {/* 3 — The Ad Hoc Advantage */}
      <div style={snapSection}>
        <ValueProp />
      </div>

      {/* 4 — Social proof */}
      <div style={snapSection}>
        <Testimonials />
      </div>

      {/* 5 — Closing CTA */}
      <div style={snapSection}>
        <FooterCTA />
      </div>
    </ScrollSnapProvider>
  );
}

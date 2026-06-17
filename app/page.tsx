"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import ValueProp from "@/components/home/ValueProp";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import FooterCTA from "@/components/home/FooterCTA";

/*
 * Scroll snapping — homepage only.
 * Applies scroll-snap-type to <html> while this page is mounted,
 * cleans up when navigating away so other pages are unaffected.
 * Each section group gets scroll-snap-align: start so the browser
 * always snaps to a clean section boundary on scroll settle.
 */
/* Nav is fixed, ~64px tall. scroll-padding-top shifts every snap point
   down by that amount so sections never land behind the nav bar.
   The hero (first section, y=0) is unaffected since scrollTop can't go negative. */
const NAV_HEIGHT = 64;

function useHomepageSnap() {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y mandatory";
    html.style.scrollBehavior = "smooth";
    html.style.scrollPaddingTop = `${NAV_HEIGHT}px`;
    return () => {
      html.style.scrollSnapType = "";
      html.style.scrollBehavior = "";
      html.style.scrollPaddingTop = "";
    };
  }, []);
}

const snapSection = {
  scrollSnapAlign: "start" as const,
  scrollSnapStop: "always" as const,
};

export default function HomePage() {
  useHomepageSnap();

  return (
    <>
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

      {/* 4 — Why us (hidden) */}
      {/* <div style={snapSection}>
        <WhyUs />
      </div> */}

      {/* 5 — Social proof */}
      <div style={snapSection}>
        <Testimonials />
      </div>

      {/* 6 — Closing CTA */}
      <div style={snapSection}>
        <FooterCTA />
      </div>
    </>
  );
}

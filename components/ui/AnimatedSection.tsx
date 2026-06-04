"use client";

/*
 * AnimatedSection.tsx
 * ──────────────────────────────────────────────────────────────────────────────
 * EMIL DESIGN ENG applied:
 *   - Duration: 650ms — entrance animations per 500–800ms rule
 *   - Easing: ease-out-expo, not generic "ease". Elements entering use ease-out.
 *   - Only `opacity` and `transform` are animated — never layout-driving properties.
 *   - Viewport margin: -80px so animation starts slightly before fully in view.
 *   - `once: true` — elements only animate in once (not every time they scroll in/out).
 *   - reduced-motion: global CSS handles it (globals.css @media prefers-reduced-motion).
 *
 * DESIGN-TASTE-FRONTEND applied:
 *   - No `will-change: transform` on all instances — only apply where needed.
 *   - No `transition: all` — Framer Motion handles specific properties.
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  distance = 20,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

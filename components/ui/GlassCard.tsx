import { ReactNode } from "react";

/*
 * GlassCard — "liquid glass" refraction
 * ──────────────────────────────────────────────────────────────────────────────
 * design-taste-frontend §4: glassmorphism done properly — beyond backdrop-blur.
 *   - 1px inner highlight border (white/10) simulating a refracting edge
 *   - inset top highlight shadow (light catching the bevel)
 *   - outer ambient shadow tinted toward the surface, never harsh black
 *
 * Performance (motion-design.md + design-taste §5): backdrop-blur is bounded to
 * these discrete cards, never applied to large scrolling containers.
 *
 * tone:
 *   "light"  → frosted white glass, for use over photography / dark backgrounds
 *   "dark"   → smoked charcoal glass, for use over amber / light backgrounds
 */

type GlassTone = "light" | "dark";

interface GlassCardProps {
  children: ReactNode;
  tone?: GlassTone;
  className?: string;
  /** adds hover lift micro-interaction */
  interactive?: boolean;
}

const toneClass: Record<GlassTone, string> = {
  light: `
    bg-white/10
    border border-white/15
    shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)]
  `,
  dark: `
    bg-[#1A1A1A]/80
    border border-white/10
    shadow-[0_24px_64px_-16px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)]
  `,
};

export default function GlassCard({
  children,
  tone = "light",
  className = "",
  interactive = false,
}: GlassCardProps) {
  return (
    <div
      className={`
        rounded-2xl backdrop-blur-xl
        ${toneClass[tone]}
        ${
          interactive
            ? "transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_28px_72px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.22)]"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}

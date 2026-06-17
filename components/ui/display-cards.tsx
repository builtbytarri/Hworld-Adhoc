"use client";

/*
 * DisplayCards — stacked skewed service cards (H-World brand, white card variant)
 * ──────────────────────────────────────────────────────────────────────────────
 * Adapted from 21st.dev DisplayCards pattern.
 * Brand overrides:
 *   - White card bg, brand hairline border (#E5E2DC)
 *   - Amber icon badge + amber title (desaturated via grayscale on non-front cards)
 *   - after: gradient fades right card edge to white (= section bg) — creates depth
 *   - Hover lifts front card, all cards: grayscale → full amber on hover
 *   - Sizing matches 21st.dev demo: h-36 w-[22rem]
 */

import { cn } from "@/lib/utils";
import { LayoutGrid } from "lucide-react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  category?: string;
  href?: string;
}

export function DisplayCard({
  className,
  icon = <LayoutGrid className="size-4 text-amber-500" />,
  title = "Service",
  description = "Expert consultancy support",
  category = "Management",
  href = "/services",
}: DisplayCardProps) {
  const Tag = href ? "a" : "div";

  return (
    <Tag
      href={href}
      className={cn(
        /* Base — demo proportions */
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between",
        "rounded-xl border border-[#E5E2DC] bg-white px-5 py-4",
        "shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-700",
        /* Right-edge gradient hides stacked card edges — must match section bg (white) */
        "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem]",
        "after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']",
        /* Hover lift + border reveal */
        "hover:border-amber-300/60 hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]",
        /* Row helpers */
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2.5",
        className
      )}
    >
      {/* Icon + Title */}
      <div>
        <span className="inline-flex items-center justify-center rounded-full bg-amber-50 p-1.5">
          {icon}
        </span>
        <p className="text-[15px] font-semibold leading-snug text-amber-600 truncate max-w-[12rem]">
          {title}
        </p>
      </div>

      {/* Description */}
      <p className="text-[12.5px] leading-relaxed text-[#0E0E0E]/55 line-clamp-2 pr-2">
        {description}
      </p>

      {/* Category label */}
      <p className="text-[10px] uppercase tracking-[0.18em] text-[#0E0E0E]/35">
        {category}
      </p>
    </Tag>
  );
}

export interface DisplayCardsProps {
  cards: DisplayCardProps[];
}

export default function DisplayCards({ cards }: DisplayCardsProps) {
  /*
   * Three-card fan — same offsets as 21st.dev demo.
   * grayscale on cards 0–1 so only the hovered card shows amber;
   * card 2 (back) is always in full colour (it's mostly hidden anyway).
   */
  const stackClasses = [
    /* Front card */
    "[grid-area:stack] hover:-translate-y-10 grayscale hover:grayscale-0",
    /* Middle card */
    "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 grayscale hover:grayscale-0",
    /* Back card — always visible in colour */
    "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  ];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center animate-in fade-in-0 duration-700">
      {cards.map((cardProps, index) => (
        <DisplayCard
          key={index}
          {...cardProps}
          className={cn(stackClasses[index] ?? stackClasses[2], cardProps.className)}
        />
      ))}
    </div>
  );
}

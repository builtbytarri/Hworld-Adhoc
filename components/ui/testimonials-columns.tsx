"use client";

/*
 * TestimonialsColumn — animated infinite-scroll column for testimonials.
 * Uses framer-motion to translateY from 0 → -50% on a loop,
 * duplicating cards so the transition is seamless.
 *
 * Usage:
 *   <TestimonialsColumn testimonials={slice} duration={20} />
 */

import React from "react";
import { motion } from "framer-motion";

export interface TestimonialItem {
  initials: string;
  name: string;
  org: string;
  quote: string;
}

interface TestimonialsColumnProps {
  testimonials: TestimonialItem[];
  duration?: number;       // seconds for one full loop (default 15)
  className?: string;
}

export function TestimonialsColumn({
  testimonials,
  duration = 15,
  className,
}: TestimonialsColumnProps) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4"
      >
        {/* Render twice so the list loops seamlessly */}
        {[0, 1].map((pass) => (
          <React.Fragment key={pass}>
            {testimonials.map(({ initials, name, org, quote }, i) => (
              <div
                key={`${pass}-${i}`}
                className="relative max-w-xs w-full rounded-xl border border-[#EBEBEB] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
              >
                {/* Amber quote accent */}
                <span
                  aria-hidden
                  className="absolute right-4 top-4 font-serif text-3xl leading-none text-amber-600/20 select-none"
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="text-[13px] font-light leading-[1.65] text-[#0E0E0E]/70 pr-6">
                  {quote}
                </p>

                {/* Attribution */}
                <div className="mt-3 flex items-center gap-2.5 border-t border-[#EBEBEB] pt-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E0E0E] text-[10px] font-semibold tracking-wider text-white">
                    {initials}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0E0E0E]">{name}</p>
                    <p className="text-[11px] font-light text-[#0E0E0E]/45">{org}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

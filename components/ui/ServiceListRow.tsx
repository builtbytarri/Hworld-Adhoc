"use client";

/*
 * ServiceListRow — shared list-row design for services.
 * ──────────────────────────────────────────────────────────────────────────────
 * Originally lived on the homepage "What We Do" grid (ServicesGrid). Moved here
 * so the All Services page can use the same icon | title | description rows,
 * with hairline dividers and an amber left-border hover indicator, in place of
 * the old card grid.
 */

import { motion } from "framer-motion";
import {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel, ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { type Service } from "@/lib/services";

const EASE = [0.16, 1, 0.3, 1] as const;

export const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel,
};

export default function ServiceListRow({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? LayoutGrid;
  const href = service.category === "management"
    ? `/services/${service.slug}`
    : `/forensics/${service.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: Math.min(index * 0.04, 0.32), ease: EASE }}
      className="border-b border-[#ECEAE6] last:border-0"
    >
      <Link
        href={href}
        className="
          group relative flex items-start gap-4
          py-4 px-3
          rounded-lg
          transition-[background-color] duration-150
          hover:bg-[#F8F7F5]
        "
      >
        {/* Amber left-border indicator — slides in on hover without layout shift */}
        <span
          aria-hidden
          className="
            absolute left-0 top-2 bottom-2
            w-0 rounded-full bg-amber-600
            transition-[width] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
            group-hover:w-[3px]
          "
        />

        {/* Icon tile */}
        <div className="
          mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center
          rounded-xl bg-amber-50 text-amber-600
          transition-colors duration-200
          group-hover:bg-amber-600 group-hover:text-white
        ">
          <Icon size={17} strokeWidth={1.6} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[15px] font-semibold text-[#0E0E0E]">{service.title}</h3>
          <p className="mt-1 text-sm font-light leading-relaxed text-[#0E0E0E]/50">
            {service.shortDesc}
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-widest text-amber-600">
            Read more
            <ArrowRight
              size={12}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

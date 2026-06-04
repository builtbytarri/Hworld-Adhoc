import Link from "next/link";
import {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel, ArrowRight,
} from "lucide-react";
import { Service } from "@/lib/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  LayoutGrid, Calendar, TrendingUp, FileText, Shield,
  Box, Briefcase, Calculator, Users, BarChart2,
  Search, Scale, Gavel,
};

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

/*
 * EMIL micro-interactions:
 *   - specific transitions only (transform, border-color, box-shadow) — never `all`
 *   - hover: gentle lift + amber border + tinted shadow (shadow tinted to brand hue)
 *   - the "Learn More" arrow translates on group-hover (kinetic affordance)
 *   - icon tile shifts to amber on hover — colour change communicates state
 */
export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? LayoutGrid;
  const href =
    service.category === "management"
      ? `/services/${service.slug}`
      : `/forensics/${service.slug}`;

  return (
    <Link
      href={href}
      className="
        group flex h-full flex-col justify-between
        rounded-2xl border border-[#E5E2DC] bg-white/80 backdrop-blur-sm
        p-6 lg:p-7
        transition-[transform,border-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:-translate-y-1 hover:border-amber-300
        hover:shadow-[0_18px_48px_-16px_rgba(217,119,6,0.25)]
      "
    >
      <div>
        <div className="
          mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl
          bg-amber-50 text-amber-600
          transition-colors duration-300
          group-hover:bg-amber-600 group-hover:text-white
        ">
          <Icon size={featured ? 22 : 19} strokeWidth={1.6} />
        </div>
        <h3 className={`font-semibold text-charcoal ${featured ? "text-xl" : "text-lg"}`}>
          {service.title}
        </h3>
        <p className="mt-2 text-[15px] font-light leading-relaxed text-slate-500">
          {service.shortDesc}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5">
        <span className="label-sm text-amber-600">Learn More</span>
        <ArrowRight
          size={13}
          strokeWidth={2}
          className="text-amber-600 transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

import { sectors } from "@/lib/sectors";

export default function SectorsTicker() {
  const doubled = [...sectors, ...sectors];

  return (
    <div className="overflow-hidden bg-[#1A1A1A] py-4 border-t border-white/5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((sector, i) => (
          <span key={i} className="flex items-center">
            <span className="font-sans font-medium text-[11px] uppercase tracking-widest text-amber-600 px-6">
              {sector.title}
            </span>
            <span className="text-white/20 text-xs">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

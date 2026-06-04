interface SectionBadgeProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionBadge({ children, light = false }: SectionBadgeProps) {
  if (light) {
    return (
      <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-700">
      {children}
    </span>
  );
}

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  subline?: string;
  dark?: boolean;
}

export default function PageHero({
  eyebrow,
  heading,
  subline,
  dark = true,
}: PageHeroProps) {
  if (dark) {
    return (
      <section className="bg-[#1A1A1A] pt-40 pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            {eyebrow}
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          {subline && (
            <p className="mt-6 max-w-[580px] text-lg leading-relaxed text-white/50">
              {subline}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-canvas pt-40 pb-20">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <span className="inline-flex items-center rounded-full border border-amber-600/30 bg-amber-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-700">
          {eyebrow}
        </span>
        <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-charcoal md:text-5xl lg:text-6xl">
          {heading}
        </h1>
        {subline && (
          <p className="mt-6 max-w-[580px] text-lg leading-relaxed text-slate-500">
            {subline}
          </p>
        )}
      </div>
    </section>
  );
}

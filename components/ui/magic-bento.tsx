"use client";

import { useRef, useEffect, useState, useCallback, type ReactNode } from "react";
import { gsap } from "gsap";

const GLOW_COLOR = "217, 119, 6";
const SPOTLIGHT_RADIUS = 300;
const MOBILE_BREAKPOINT = 768;

function updateCardGlow(card: HTMLElement, mx: number, my: number, glow: number, radius: number) {
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--glow-x", `${((mx - rect.left) / rect.width) * 100}%`);
  card.style.setProperty("--glow-y", `${((my - rect.top) / rect.height) * 100}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  enableTilt?: boolean;
}

function BentoCard({ children, className = "", href, disabled = false, enableTilt = true }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || !ref.current) return;
    const el = ref.current;

    const onEnter = () => {
      gsap.to(el, { y: -3, duration: 0.3, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(el, { y: 0, ...(enableTilt ? { rotateX: 0, rotateY: 0 } : {}), duration: 0.3, ease: "power2.out" });
    };
    const onMove = (e: MouseEvent) => {
      if (!enableTilt) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gsap.to(el, {
        rotateX: ((y - cy) / cy) * -6,
        rotateY: ((x - cx) / cx) * 6,
        duration: 0.15,
        ease: "power2.out",
        transformPerspective: 1000,
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
    };
  }, [disabled, enableTilt]);

  const Tag = href ? "a" : "div";

  return (
    <Tag
      {...(href ? { href } : {})}
      ref={ref as never}
      className={`bento-card card relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#DDD9D2] bg-[#FAFAF8] p-6 md:p-[var(--v-card)] transition-shadow duration-300 will-change-transform ${className}`.trim()}
      style={{ position: "relative" }}
    >
      {children}
    </Tag>
  );
}

function GlobalSpotlight({ gridRef, disabled }: { gridRef: React.RefObject<HTMLDivElement | null>; disabled: boolean }) {
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (disabled || !gridRef.current) return;

    const spot = document.createElement("div");
    spot.style.cssText = `
      position:fixed;width:800px;height:800px;border-radius:50%;pointer-events:none;
      background:radial-gradient(circle,
        rgba(${GLOW_COLOR},0.12) 0%, rgba(${GLOW_COLOR},0.06) 20%,
        rgba(${GLOW_COLOR},0.02) 40%, transparent 65%);
      z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:normal;
    `;
    document.body.appendChild(spot);
    spotRef.current = spot;

    const onMove = (e: MouseEvent) => {
      if (!spotRef.current || !gridRef.current) return;
      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const inside =
        rect && e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll<HTMLElement>(".card");

      if (!inside) {
        gsap.to(spotRef.current, { opacity: 0, duration: 0.3 });
        cards.forEach((c) => c.style.setProperty("--glow-intensity", "0"));
        return;
      }

      const prox = SPOTLIGHT_RADIUS * 0.5;
      const fade = SPOTLIGHT_RADIUS * 0.75;
      let minD = Infinity;

      cards.forEach((card) => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2;
        const cy = cr.top + cr.height / 2;
        const d = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
        minD = Math.min(minD, d);
        const g = d <= prox ? 1 : d <= fade ? (fade - d) / (fade - prox) : 0;
        updateCardGlow(card, e.clientX, e.clientY, g, SPOTLIGHT_RADIUS);
      });

      gsap.to(spotRef.current, { left: e.clientX, top: e.clientY, duration: 0.1 });
      const op = minD <= prox ? 0.7 : minD <= fade ? ((fade - minD) / (fade - prox)) * 0.7 : 0;
      gsap.to(spotRef.current, { opacity: op, duration: op > 0 ? 0.2 : 0.5 });
    };

    const onLeave = () => {
      gridRef.current?.querySelectorAll<HTMLElement>(".card").forEach((c) => c.style.setProperty("--glow-intensity", "0"));
      if (spotRef.current) gsap.to(spotRef.current, { opacity: 0, duration: 0.3 });
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      spotRef.current?.remove();
    };
  }, [gridRef, disabled]);

  return null;
}

export interface BentoItem {
  title: string;
  description: string;
  label: string;
  icon?: ReactNode;
  href?: string;
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
  enableTilt?: boolean;
  fillHeight?: boolean;
}

export default function MagicBento({ items, className = "", enableTilt = true, fillHeight = false }: MagicBentoProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <style>{`
        .bento-section {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
        }
        .bento-card::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 4px;
          background: radial-gradient(
            var(--glow-radius) circle at var(--glow-x) var(--glow-y),
            rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.7)) 0%,
            rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.3)) 30%,
            transparent 60%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
        }
        .bento-card:hover {
          background: #FFFDF7;
          border-color: #D4A96A44;
          box-shadow: 0 8px 32px rgba(217, 119, 6, 0.10), 0 2px 12px rgba(0,0,0,0.05);
        }
      `}</style>

      <GlobalSpotlight gridRef={gridRef} disabled={isMobile} />

      <div
        className={`bento-section grid gap-3 md:gap-4 ${className}`.trim()}
        ref={gridRef}
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: fillHeight ? "1fr" : "minmax(var(--v-bento-row, 160px), auto)",
        }}
      >
        {items.map((item, i) => {
          const spans = getSpanClass(i, items.length);
          return (
            <BentoCard key={i} className={spans} href={item.href} disabled={isMobile} enableTilt={enableTilt}>
              <div className="flex items-center gap-3">
                {item.icon && (
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-100/70 text-amber-600 ring-1 ring-amber-200/60">
                    {item.icon}
                  </div>
                )}
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600/70">
                  {item.label}
                </span>
              </div>
              <div className="mt-auto pt-6 md:pt-[var(--v-block-sm)]">
                <h3 className="text-[clamp(1.1rem,1.8vw,1.4rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0E0E0E]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] font-light leading-relaxed text-[#0E0E0E]/60 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </>
  );
}

function getSpanClass(index: number, total: number): string {
  if (total === 5) {
    switch (index) {
      case 0: return "col-span-4 sm:col-span-2 row-span-1";
      case 1: return "col-span-4 sm:col-span-2 row-span-1";
      case 2: return "col-span-4 sm:col-span-2 lg:col-span-1 row-span-1";
      case 3: return "col-span-4 sm:col-span-2 row-span-1";
      case 4: return "col-span-4 sm:col-span-2 lg:col-span-1 row-span-1";
      default: return "";
    }
  }
  return "col-span-4 sm:col-span-2";
}

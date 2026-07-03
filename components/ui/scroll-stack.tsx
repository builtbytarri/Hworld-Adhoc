"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";

/* ─────────────────────────────────────────────
   ScrollStackItem — semantic wrapper only
───────────────────────────────────────────── */
interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
}

export function ScrollStackItem({
  children,
  className = "",
}: ScrollStackItemProps) {
  return (
    <div
      className={`scroll-stack-card will-change-transform ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   ScrollStack

   HOW IT WORKS
   ─────────────
   Each card sits inside a "slot" div.
   A slot's height is set to exactly `dist` px —
   just enough scroll travel for the next card
   to fully overlay this one.
   The last slot gets `endGap` instead of `dist`.

   Each card is `position: sticky; top: pinTop`
   inside its slot. The browser handles all the
   pinning automatically.

   The outer wrapper also gets `padding-top: pinTop`
   so card 0 is already centred in the viewport
   on first load (before any scrolling).

   Scale/blur are driven by scrollY vs each
   slot's document-absolute top.
───────────────────────────────────────────── */
interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  /** Height of the fixed navbar, in px */
  navOffset?: number;
  /**
   * How many px of scrolling each card-to-card
   * transition takes (higher = slower transition)
   */
  scrollDistancePx?: number;
  /** Extra space after last card before footer */
  endGap?: number;
  /** Incoming card scale overshoot (0.05 = 1.05→1.0) */
  entranceScale?: number;
  /** Covered card shrink (0.05 = 1.0→0.95) */
  scaleAmount?: number;
  /** Blur applied to covered card, in px */
  blurAmount?: number;
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

export default function ScrollStack({
  children,
  className = "",
  navOffset = 90,
  scrollDistancePx = 260,
  endGap = 120,
  entranceScale = 0.05,
  scaleAmount = 0.05,
  blurAmount = 2.5,
}: ScrollStackProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const slots = Array.from(
      wrap.querySelectorAll<HTMLElement>(":scope > .scroll-stack-slot")
    );
    const cards = slots.map(
      (slot) => slot.querySelector<HTMLElement>(".scroll-stack-card")!
    );
    const N = cards.length;
    if (!N || cards.some((c) => !c)) return;

    const dist = scrollDistancePx;

    /* ─────────────────────────────────────────
       layout()
       • Resets all inline styles for clean measurement
       • Computes pinTop = vertically centred, min navOffset
       • Sets slot heights: dist for all except last (endGap)
       • Applies sticky + top to each card
       • Adds padding-top to wrap so card 0 is centred on load
       • Snapshots slot document-tops for use in render()
    ───────────────────────────────────────── */
    let pinTop = 0;
    let slotDocTops: number[] = [];

    const layout = () => {
      /* 1. Reset */
      wrap.style.paddingTop = "";
      cards.forEach((card) => {
        card.style.position = "";
        card.style.top = "";
        card.style.transform = "";
        card.style.filter = "";
        card.style.zIndex = "";
      });
      slots.forEach((slot) => {
        slot.style.height = "";
      });

      /* 2. Measure card height (first card; assume all cards are same height) */
      const cardH = cards[0].offsetHeight;
      const vh = window.innerHeight;
      pinTop = Math.max(navOffset, (vh - cardH) / 2);

      /* 3. Set slot heights:
              A sticky element inside a slot is pinned for
              (slotHeight - cardH) px of scrolling.
              We want exactly `dist` px per transition, so:
                non-last slots: cardH + dist
                last slot:      cardH + endGap
      */
      slots.forEach((slot, i) => {
        slot.style.height = `${cardH + (i < N - 1 ? dist : endGap)}px`;
      });

      /* 4. Add top padding to wrapper so first card starts centred */
      wrap.style.paddingTop = `${pinTop}px`;

      /* 5. Apply sticky */
      cards.forEach((card, i) => {
        card.style.position = "sticky";
        card.style.top = `${pinTop}px`;
        card.style.zIndex = String(i + 1);
        card.style.transformOrigin = "center center";
      });

      /* 6. Snapshot slot tops (after all sizing applied) */
      slotDocTops = slots.map(
        (slot) => slot.getBoundingClientRect().top + window.scrollY
      );
    };

    /* ─────────────────────────────────────────
       render()
       Each slot's doc-top is the reference point.
       
       Card i EXIT: progress from slotDocTops[i] → slotDocTops[i] + dist
       Card i ENTRANCE: progress from slotDocTops[i] → slotDocTops[i] + dist
         (same window, but inverted: entering card scales 1+e → 1)
         
       Why same window?
         Card i+1 is in slot i+1, which starts right after slot i ends.
         When scrollY = slotDocTops[i], slot i's card starts being covered
         AND slot i+1's card starts to appear (they're adjacent slots).
         dist px later, the cover is complete.
    ───────────────────────────────────────── */
    const render = () => {
      const sy = window.scrollY;

      cards.forEach((card, i) => {
        let scale = 1;
        let blur = 0;

        /* EXIT: card i covered by card i+1.
           Trigger: when card i+1 first becomes sticky =
             scrollY = slotDocTops[i+1] - pinTop
           Duration: dist px */
        if (i < N - 1) {
          const exitStart = slotDocTops[i + 1] - pinTop;
          const p = clamp((sy - exitStart) / dist, 0, 1);
          if (p > 0) {
            scale = 1 - scaleAmount * p;
            blur = blurAmount * p;
          }
        }

        /* ENTRANCE: card i rising in.
           Trigger: when card i first becomes sticky =
             scrollY = slotDocTops[i] - pinTop
           Duration: dist px
           Only active while not yet being exited itself */
        if (i > 0 && blur === 0) {
          const entStart = slotDocTops[i] - pinTop;
          const p = clamp((sy - entStart) / dist, 0, 1);
          const notYetSettled = 1 - p;
          if (notYetSettled > 0) {
            scale = 1 + entranceScale * notYetSettled;
          }
        }

        card.style.transform = scale !== 1 ? `scale(${scale.toFixed(4)})` : "";
        card.style.filter = blur > 0.05 ? `blur(${blur.toFixed(2)}px)` : "";
      });
    };


    const onScroll = () => render();
    const onResize = () => {
      layout();
      render();
    };

    layout();
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      wrap.style.paddingTop = "";
      cards.forEach((card) => {
        card.style.position = "";
        card.style.top = "";
        card.style.zIndex = "";
        card.style.transform = "";
        card.style.filter = "";
        card.style.transformOrigin = "";
      });
      slots.forEach((slot) => {
        slot.style.height = "";
      });
    };
  }, [navOffset, scrollDistancePx, endGap, entranceScale, scaleAmount, blurAmount]);

  const childArray = Children.toArray(children);

  return (
    <div ref={wrapRef} className={className}>
      {childArray.map((child, i) => (
        <div key={i} className="scroll-stack-slot overflow-visible">
          {child}
        </div>
      ))}
    </div>
  );
}

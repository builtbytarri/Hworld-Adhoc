"use client";

import { useEffect } from "react";

/*
 * Scroll snapping — homepage only.
 *
 * Applies scroll-snap-type to <html> while mounted, and cleans up when
 * navigating away so other pages are unaffected.
 *
 * This exists as its own client component so that app/page.tsx can stay a
 * SERVER component and export `metadata`. Client components cannot export
 * metadata, and the homepage is the single most important page for branded
 * search — it must carry its own title, description, canonical and OG tags.
 *
 * Nav is fixed, ~64px tall. scroll-padding-top shifts every snap point down by
 * that amount so sections never land behind the nav bar. The hero (first
 * section, y=0) is unaffected since scrollTop can't go negative.
 */
const NAV_HEIGHT = 64;

export default function ScrollSnapProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y mandatory";
    html.style.scrollBehavior = "smooth";
    html.style.scrollPaddingTop = `${NAV_HEIGHT}px`;
    return () => {
      html.style.scrollSnapType = "";
      html.style.scrollBehavior = "";
      html.style.scrollPaddingTop = "";
    };
  }, []);

  return <>{children}</>;
}

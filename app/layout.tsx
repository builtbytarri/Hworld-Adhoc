import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

/*
 * FONT RATIONALE (impeccable brand.md applied):
 * ─────────────────────────────────────────────
 * Reflex-rejected (all were in use): DM Serif Display, DM Sans, Space Mono.
 * All three are on the impeccable reflex-reject list. "Editorial-typographic"
 * (display serif + italic + small-mono labels) is an explicitly saturated AI slop lane.
 *
 * New direction: ONE committed grotesque family — Barlow.
 * Brand-voice words: Precise. Monumental. Decisive.
 * Physical object: a site-wide QA specification document on heavy bond paper.
 *                  a steel bridge construction drawing.
 * Barlow Semi Condensed (700/800) for all display/heading use.
 * Barlow (300/400/500) for body, UI, labels — no separate mono family.
 * Weight contrast WITHIN the family creates hierarchy without typeface noise.
 */
const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "H-World Ad Hoc | Project Management & Planning Consultancy",
    template: "%s | H-World Ad Hoc",
  },
  description:
    "Expert ad hoc project management, planning, controls, and forensics support — deployed rapidly across construction, infrastructure, energy, and rail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowSemiCondensed.variable} ${barlow.variable}`}>
      <body className="min-h-screen bg-canvas text-charcoal antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

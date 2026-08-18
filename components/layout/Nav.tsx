"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { visibleManagementServices, forensicsServices } from "@/lib/services";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mgmtOpen, setMgmtOpen] = useState(false);
  const [forensicsOpen, setForensicsOpen] = useState(false);
  const mgmtRef = useRef<HTMLDivElement>(null);
  const forensicsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (mgmtRef.current && !mgmtRef.current.contains(e.target as Node)) setMgmtOpen(false);
      if (forensicsRef.current && !forensicsRef.current.contains(e.target as Node)) setForensicsOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Every page opens on a dark hero, so at the top the nav sits on dark: use
  // light text. Once scrolled onto the light canvas, switch to charcoal.
  //
  // Both states run at full opacity and semibold. Small uppercase text at 11px
  // with wide tracking needs the extra weight and full contrast to stay legible
  // — faded nav links were the worst offender on the whole site.
  const navLinkClass = `font-sans font-semibold text-[11px] uppercase tracking-widest transition-colors duration-200 ${
    scrolled
      ? "text-[#0E0E0E] hover:text-amber-700"
      : "text-white hover:text-amber-300"
  }`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#E5E2DC] bg-[#F8F7F5]/90 backdrop-blur-md shadow-[0_1px_16px_rgba(0,0,0,0.04)]"
            : "border-b border-white/10 bg-transparent"
        }`}
      >
        {/* Minimal vertical padding — the logo should fill nearly the whole bar. */}
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-1 lg:px-10">
          {/* Logo — H-World Ad Hoc combined mark (height scales with viewport)
              Swaps to the dark-text variant once the nav turns white on scroll,
              so "Project Planning & Controls" stays legible either way.

              CROP NOTE: the source PNGs are square canvases where the visible
              mark only fills ~57% of the height (large built-in transparent
              padding top/bottom). Sizing the <img> box alone scales that
              padding along with the mark, so the logo still reads as tiny no
              matter how big the box gets. The fix: render the image ~1.6x
              taller than the visible box and clip the overflow, so the crop
              itself does the work the container size can't. */}
          <Link href="/" className="group flex items-center">
            <div className="h-[var(--v-logo)] flex items-center overflow-y-hidden">
              <Image
                src={scrolled ? "/logoblack2.png" : "/logowhite2.png"}
                alt="H-World Ad Hoc, Project Planning & Controls"
                width={2326}
                height={2204}
                priority
                className="h-[calc(var(--v-logo)*1.6)] w-auto max-w-none"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="/" className={navLinkClass}>
              Home
            </Link>

            {/* Management Services dropdown */}
            <div ref={mgmtRef} className="relative">
              <button
                className={`flex items-center gap-1 ${navLinkClass}`}
                onClick={() => { setMgmtOpen(!mgmtOpen); setForensicsOpen(false); }}
                aria-expanded={mgmtOpen}
              >
                Ad Hoc Management
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${mgmtOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mgmtOpen && (
                <div className="absolute top-full left-1/2 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[#E5E2DC] bg-white p-3 shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
                  <div className="mb-2 px-3 pt-1">
                    <span className="font-sans font-medium text-[9px] uppercase tracking-widest text-slate-600">
                      Ad Hoc Management
                    </span>
                  </div>
                  {visibleManagementServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMgmtOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-normal text-[#0E0E0E] transition-colors hover:bg-amber-50 hover:text-amber-700"
                    >
                      {s.title}
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-[#E5E2DC] pt-2">
                    <Link
                      href="/services"
                      onClick={() => setMgmtOpen(false)}
                      className="block rounded-xl px-3 py-2 font-sans font-medium text-[10px] uppercase tracking-widest text-amber-600 transition-colors hover:bg-amber-50"
                    >
                      All Ad Hoc Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Forensics dropdown */}
            <div ref={forensicsRef} className="relative">
              <button
                className={`flex items-center gap-1 ${navLinkClass}`}
                onClick={() => { setForensicsOpen(!forensicsOpen); setMgmtOpen(false); }}
                aria-expanded={forensicsOpen}
              >
                Ad Hoc Forensics
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${forensicsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {forensicsOpen && (
                <div className="absolute top-full left-1/2 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-[#E5E2DC] bg-white p-3 shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
                  <div className="mb-2 px-3 pt-1">
                    <span className="font-sans font-medium text-[9px] uppercase tracking-widest text-slate-600">
                      Ad Hoc Forensics
                    </span>
                  </div>
                  {forensicsServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/forensics/${s.slug}`}
                      onClick={() => setForensicsOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm font-normal text-[#0E0E0E] transition-colors hover:bg-amber-50 hover:text-amber-700"
                    >
                      {s.title}
                    </Link>
                  ))}
                  <div className="mt-2 border-t border-[#E5E2DC] pt-2">
                    <Link
                      href="/forensics"
                      onClick={() => setForensicsOpen(false)}
                      className="block rounded-xl px-3 py-2 font-sans font-medium text-[10px] uppercase tracking-widest text-amber-600 transition-colors hover:bg-amber-50"
                    >
                      All Ad Hoc Forensics
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/sectors" className={navLinkClass}>
              Sectors
            </Link>
            <Link href="/about" className={navLinkClass}>
              About Us
            </Link>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden rounded-full bg-amber-600 px-5 py-2.5 font-sans font-medium text-[11px] uppercase tracking-widest text-white transition-[background-color,transform] duration-150 hover:bg-amber-700 active:scale-[0.97] lg:inline-flex"
            >
              Get in Touch
            </Link>
            <button
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-white/10 lg:hidden ${scrolled ? "text-charcoal" : "text-white"}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-charcoal">
          <div className="flex items-center justify-between px-6 py-5">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
              <div className="h-14 flex items-center overflow-y-hidden">
                <Image src="/logowhite2.png" alt="H-World Ad Hoc, Project Planning & Controls" width={2344} height={2178} className="h-[5.6rem] w-auto max-w-none" />
              </div>
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/80 hover:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 pt-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "All Ad Hoc Management" },
              ...visibleManagementServices.map((s) => ({
                href: `/services/${s.slug}`,
                label: s.title,
                indent: true,
              })),
              { href: "/forensics", label: "All Ad Hoc Forensics" },
              ...forensicsServices.map((s) => ({
                href: `/forensics/${s.slug}`,
                label: s.title,
                indent: true,
              })),
              { href: "/sectors", label: "Sectors" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-3 font-sans font-medium text-[11px] uppercase tracking-widest transition-colors hover:bg-white/5 ${
                  "indent" in item && item.indent
                    ? "ml-4 text-white/70 hover:text-white"
                    : "text-white hover:text-amber-300"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="border-t border-white/10 px-6 py-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-amber-600 py-4 font-sans font-medium text-[11px] uppercase tracking-widest text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

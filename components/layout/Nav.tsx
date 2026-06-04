"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { managementServices, forensicsServices } from "@/lib/services";

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
  // light text. Once scrolled onto the light canvas, switch to slate/charcoal.
  const navLinkClass = `font-sans font-medium text-[11px] uppercase tracking-widest transition-colors duration-200 ${
    scrolled
      ? "text-slate-500 hover:text-charcoal"
      : "text-white/75 hover:text-white"
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
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 lg:px-10">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span className={`font-sans text-sm font-bold tracking-[0.15em] transition-colors duration-200 ${scrolled ? "text-charcoal" : "text-white"}`}>
                H<span className="text-amber-600">•</span>WORLD
              </span>
              <span className={`font-sans font-medium text-[9px] uppercase tracking-[0.2em] transition-colors duration-200 ${scrolled ? "text-slate-400" : "text-white/50"}`}>
                Ad Hoc Services
              </span>
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
                Management Services
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${mgmtOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mgmtOpen && (
                <div className="absolute top-full left-1/2 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[#E5E2DC] bg-white p-3 shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
                  <div className="mb-2 px-3 pt-1">
                    <span className="font-sans font-medium text-[9px] uppercase tracking-widest text-slate-400">
                      Management
                    </span>
                  </div>
                  {managementServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMgmtOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
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
                      View All Services
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
                Forensics
                <ChevronDown
                  size={12}
                  strokeWidth={2}
                  className={`transition-transform duration-200 ${forensicsOpen ? "rotate-180" : ""}`}
                />
              </button>
              {forensicsOpen && (
                <div className="absolute top-full left-1/2 mt-3 w-60 -translate-x-1/2 rounded-2xl border border-[#E5E2DC] bg-white p-3 shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
                  <div className="mb-2 px-3 pt-1">
                    <span className="font-sans font-medium text-[9px] uppercase tracking-widest text-slate-400">
                      Forensics
                    </span>
                  </div>
                  {forensicsServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/forensics/${s.slug}`}
                      onClick={() => setForensicsOpen(false)}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-600 transition-colors hover:bg-amber-50 hover:text-amber-700"
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
                      Forensics Overview
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
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex flex-col">
              <span className="font-sans font-medium text-sm font-bold tracking-[0.15em] text-white">
                H<span className="text-amber-600">•</span>WORLD
              </span>
              <span className="font-sans font-medium text-[9px] uppercase tracking-[0.2em] text-white/40">
                Ad Hoc Services
              </span>
            </Link>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-xl text-white/60 hover:text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 pt-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "All Management Services" },
              ...managementServices.map((s) => ({
                href: `/services/${s.slug}`,
                label: s.title,
                indent: true,
              })),
              { href: "/forensics", label: "All Forensics" },
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
                    ? "ml-4 text-white/40 hover:text-white/70"
                    : "text-white/80 hover:text-white"
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

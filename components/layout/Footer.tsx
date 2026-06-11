import Link from "next/link";
import { visibleManagementServices, forensicsServices } from "@/lib/services";

/*
 * Footer — Biograph minimal light style
 * ──────────────────────────────────────────────────────────────────────────────
 * INSPIRED BY: Biograph footer.
 * Pattern: near-white background, logo + tagline top-left, clean link columns,
 * hairline divider + minimal copyright bar.
 *
 * The curved FooterCTA above (rounded-t-[40px] dark section) sits against this
 * light footer — creating the same "card lifting off a light surface" effect
 * that makes the Biograph end-of-page sequence feel architectural.
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F6F4] border-t border-[#EBEBEB]">
      <div className="mx-auto max-w-[1280px] px-6 py-12 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">

          {/* Brand — takes 2 cols on large */}
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-3">
              <span className="text-sm font-bold tracking-[0.15em] text-[#0E0E0E]">
                H<span className="text-amber-600">•</span>WORLD
              </span>
              <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/35">
                Ad Hoc Services
              </p>
            </div>
            <p className="mt-4 max-w-[240px] text-sm font-light leading-relaxed text-[#0E0E0E]/50">
              Expert project management, planning, and forensics support — deployed when you need it most.
            </p>
            <a
              href="mailto:adhoc@hworldinc.com"
              className="mt-5 block text-sm text-amber-700 transition-colors hover:text-amber-600"
            >
              adhoc@hworldinc.com
            </a>
          </div>

          {/* Management */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/35">
              Management
            </h4>
            <ul className="space-y-3">
              {visibleManagementServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[13px] font-light text-[#0E0E0E]/60 transition-colors hover:text-[#0E0E0E]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Forensics + Company */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/35">
              Forensics
            </h4>
            <ul className="space-y-3">
              {forensicsServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/forensics/${s.slug}`}
                    className="text-[13px] font-light text-[#0E0E0E]/60 transition-colors hover:text-[#0E0E0E]"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-5 mt-8 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/35">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/sectors", label: "Sectors" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] font-light text-[#0E0E0E]/60 transition-colors hover:text-[#0E0E0E]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#0E0E0E]/35">
              Deploy Expertise
            </h4>
            <p className="mb-6 text-[13px] font-light leading-relaxed text-[#0E0E0E]/50">
              Need rapid resource deployment or forensic support?
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#0E0E0E] px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest text-white transition-[background-color,transform] duration-150 hover:bg-[#333] active:scale-[0.97]"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-[#EBEBEB] pt-8 sm:flex-row sm:items-center">
          <p className="text-[11px] font-light text-[#0E0E0E]/30">
            &copy; {year} H-World. Part of the H-World Group.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <span key={item} className="text-[11px] font-light text-[#0E0E0E]/30">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

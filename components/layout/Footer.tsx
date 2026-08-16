import Link from "next/link";
import Image from "next/image";
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

/* Brand social accounts. Instagram / LinkedIn / X links are the real H-World
 * accounts (from the main hworldinc site). NOTE: no Facebook link exists in the
 * source — the Facebook URL below is a best-guess placeholder to confirm. */
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/hworldinc",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/Hworldinc",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/hworldinc/",
    path: "M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hworld-incorporated-8a75043b2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F7F6F4] border-t border-[#EBEBEB]">
      <div className="mx-auto max-w-[1280px] px-6 py-5 lg:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">

          {/* Brand — takes 2 cols on large */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="mb-2 inline-block">
              <Image
                src="/logob.png"
                alt="H-World Ad Hoc, Project Planning & Controls"
                width={1080}
                height={1080}
                className="h-24 w-auto lg:h-28"
              />
            </Link>
            <p className="mt-2 max-w-[240px] text-sm font-normal leading-relaxed text-[#0E0E0E]/75">
              Expert project management, planning and forensics support, deployed when you need it most.
            </p>
            <a
              href="mailto:adhoc@hworldinc.com"
              className="mt-2 block text-sm text-amber-700 transition-colors hover:text-amber-600"
            >
              adhoc@hworldinc.com
            </a>
          </div>

          {/* Management */}
          <div>
            <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E0E]/70">
              Ad Hoc Management
            </h4>
            <ul className="space-y-1.5">
              {visibleManagementServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-[13px] font-light text-[#0E0E0E] transition-colors hover:text-amber-700"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Forensics — own column */}
          <div>
            <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E0E]/70">
              Ad Hoc Forensics
            </h4>
            <ul className="space-y-1.5">
              {forensicsServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/forensics/${s.slug}`}
                    className="text-[13px] font-light text-[#0E0E0E] transition-colors hover:text-amber-700"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E0E]/70">
              Company
            </h4>
            <ul className="space-y-1.5">
              {[
                { href: "/sectors", label: "Sectors" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[13px] font-light text-[#0E0E0E] transition-colors hover:text-amber-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* Parent-site link. Declares the group relationship to search
                  engines and passes authority between the two properties. */}
              <li>
                <a
                  href="https://www.hworldinc.com"
                  target="_blank"
                  rel="noopener"
                  className="text-[13px] font-light text-[#0E0E0E] transition-colors hover:text-amber-700"
                >
                  H-World Group
                </a>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0E0E0E]/70">
              Deploy Expertise
            </h4>
            <p className="mb-3 text-[13px] font-normal leading-relaxed text-[#0E0E0E]/75">
              Need rapid resource deployment or forensic support?
            </p>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-[#0E0E0E] px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest text-white transition-[background-color,transform] duration-150 hover:bg-[#333] active:scale-[0.97]"
            >
              Get in Touch
            </Link>

            {/* Social accounts */}
            <div className="mt-4 flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8D4CC] text-[#0E0E0E]/75 transition-colors duration-150 hover:border-amber-600 hover:bg-amber-600 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Legal entity disclosure.
            Required of UK companies under the Companies (Trading Disclosures)
            Regulations 2008 — the registered name, number, place of
            registration and registered office must appear on the website.
            It is also what lets identity-verification vendors (Twilio/Persona,
            payment processors, KYC checks) associate the trading brand
            "H-World" with the legal entity "Project World Ltd". */}
        <div className="mt-4 border-t border-[#EBEBEB] pt-3">
          <p className="text-[11px] font-light leading-relaxed text-[#0E0E0E]/80">
            H-World and H-World Ad Hoc are trading names of Project World Ltd,
            a company registered in England and Wales. Company number 15385102.
            Registered office: 37 Harewood Gardens, Bournemouth, England, BH7 7RH.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-3 flex flex-col items-start justify-between gap-2 border-t border-[#EBEBEB] pt-3 sm:flex-row sm:items-center">
          <p className="text-[11px] font-light text-[#0E0E0E]/80">
            &copy; {year} Project World Ltd, trading as H-World.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <span key={item} className="text-[11px] font-light text-[#0E0E0E]/80">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

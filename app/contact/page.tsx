"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle, Building2 } from "lucide-react";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const enquiryTypes = [
  "Project Management", "Planning & Controls", "Financial Services",
  "Document Management", "Risk Management", "4D Planning",
  "Commercial Management", "Project Estimations", "Functional Lead Service",
  "Project Controls", "Claims Analysis", "Dispute Resolution",
  "Expert Witness", "General Enquiry",
];

const headOffice = {
  label: "Head Office",
  lines: ["Basingstoke", "Hampshire", "RG22 5FE", "United Kingdom"],
};

const otherOffices = [
  {
    country: "Scotland",
    lines: ["Aberdeen", "Aberdeenshire", "AB11 6LZ", "United Kingdom"],
  },
  {
    country: "Latvia",
    lines: ["Basuskas Novads", "Islices Pagasts", "Kalnares", "LV-3914 Bauska"],
  },
  {
    country: "United States",
    lines: ["Richmond", "Texas", "77407"],
  },
  {
    country: "Nigeria",
    lines: ["Ikate Lekki", "Lagos"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", enquiryType: "", message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative flex overflow-hidden bg-[#0E0E0E]"
        style={{ minHeight: "clamp(280px, 44dvh, 460px)" }}
      >
        <KenBurnsImage
          src={img.handsBlueprints.src}
          alt={img.handsBlueprints.alt}
          variant="zoom-in"
          priority
          sizes="100vw"
          position="60% 50%"
          className="absolute inset-0"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#0E0E0E]/92 via-[#0E0E0E]/65 to-transparent" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/70 via-transparent to-[#0E0E0E]/25" />
        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col justify-end px-6 pb-12 pt-32 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500"
          >
            Contact
          </motion.p>
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
              className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
            >
              Let&apos;s talk about
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
              className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-amber-500"
            >
              your project.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="mt-5 max-w-md text-[16px] font-light leading-relaxed text-white/55"
          >
            We respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* ── FORM + CONTACT DETAILS ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[320px_1fr] lg:gap-20">

            {/* Contact details */}
            <div>
              <AnimatedSection>
                <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0E0E0E]">
                  We respond within 24 hours.
                </h2>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-[#0E0E0E]/55">
                  Tell us about your project, the challenge you&apos;re facing, and the support you need.
                </p>
              </AnimatedSection>

              <div className="mt-10 space-y-6 border-t border-[#EBEBEB] pt-8">
                {/* Email */}
                <AnimatedSection delay={0.05} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F7F5] text-amber-600">
                    <Mail size={17} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/35">Email</p>
                    <a href="mailto:adhoc@hworldinc.com" className="mt-1 block text-[15px] font-medium text-[#0E0E0E] transition-colors hover:text-amber-600">
                      adhoc@hworldinc.com
                    </a>
                  </div>
                </AnimatedSection>

                {/* Phone */}
                <AnimatedSection delay={0.09} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F7F5] text-amber-600">
                    <Phone size={17} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/35">Phone</p>
                    <a href="tel:+441256232342" className="mt-1 block text-[15px] font-medium text-[#0E0E0E] transition-colors hover:text-amber-600">
                      +44 1256 232342
                    </a>
                  </div>
                </AnimatedSection>

                {/* Head Office */}
                <AnimatedSection delay={0.13} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F7F5] text-amber-600">
                    <Building2 size={17} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/35">Head Office</p>
                    {headOffice.lines.map((line) => (
                      <p key={line} className="mt-0.5 text-[15px] font-medium text-[#0E0E0E]">{line}</p>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Form */}
            <AnimatedSection delay={0.08}>
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-12 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
                    <CheckCircle size={26} strokeWidth={1.5} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#0E0E0E]">Enquiry received.</h3>
                  <p className="mt-3 max-w-[340px] text-[16px] font-light leading-relaxed text-[#0E0E0E]/55">
                    A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-8 lg:p-10">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">Full Name *</label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="James Okafor"
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">Company</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Meridian Construction Ltd"
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="james@meridian.co.uk"
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="enquiryType" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">Service Area</label>
                      <select id="enquiryType" name="enquiryType" value={form.enquiryType} onChange={handleChange}
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors">
                        <option value="">Select a service...</option>
                        {enquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="message" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">Your Message *</label>
                      <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                        placeholder="Describe your project, the challenge you're facing, and the type of support you need..."
                        className="resize-none rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors" />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-[13px] font-light text-[#0E0E0E]/35">We typically respond within one business day.</p>
                    <button type="submit"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-amber-600 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-150 hover:bg-amber-500 active:scale-[0.97]">
                      Send Enquiry
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight size={13} strokeWidth={2} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── HEAD OFFICE MAP — OpenStreetMap embed (free, no API key) ── */}
      <section className="bg-[#F8F7F5] py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-6">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">Head Office Location</p>
            <h2 className="text-[clamp(1.5rem,2.5vw,2.25rem)] font-bold tracking-[-0.02em] text-[#0E0E0E]">
              Basingstoke, Hampshire, UK
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="overflow-hidden rounded-2xl border border-[#EBEBEB] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <iframe
              title="H-World Ad Hoc Head Office — Basingstoke, Hampshire"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-1.1350%2C51.2300%2C-1.0550%2C51.2900&layer=mapnik&marker=51.2490%2C-1.0950"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.12} className="mt-3">
            <a
              href="https://www.openstreetmap.org/?mlat=51.2490&mlon=-1.0950#map=14/51.2490/-1.0950"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-medium text-amber-600 transition-colors hover:text-amber-700"
            >
              View larger map →
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ── OTHER OFFICES ── */}
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <AnimatedSection className="mb-10">
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-600">Global Presence</p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-[#0E0E0E]">
              Our Other Offices
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherOffices.map((office, i) => (
              <AnimatedSection key={office.country} delay={i * 0.07}>
                <div className="flex h-full flex-col rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <MapPin size={17} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-[16px] font-bold text-[#0E0E0E]">{office.country}</h3>
                  <div className="space-y-0.5">
                    {office.lines.map((line) => (
                      <p key={line} className="text-[14px] font-light text-[#0E0E0E]/55">{line}</p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

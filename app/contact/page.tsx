"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import KenBurnsImage from "@/components/ui/KenBurnsImage";
import { img } from "@/lib/images";

const EASE = [0.16, 1, 0.3, 1] as const;

const enquiryTypes = [
  "Project Management",
  "Planning & Controls",
  "Financial Services",
  "Document Management",
  "Risk Management",
  "4D Planning",
  "Commercial Management",
  "Project Estimations",
  "Functional Lead Service",
  "Project Controls",
  "Claims Analysis",
  "Dispute Resolution",
  "Expert Witness",
  "General Enquiry",
];

const contactDetails = [
  {
    Icon: Mail,
    label: "Email",
    value: "adhoc@hworldinc.com",
    href: "mailto:adhoc@hworldinc.com",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+44 (0) 20 0000 0000",
    href: "tel:+442000000000",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "London — UK & International",
    href: undefined,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    enquiryType: "",
    message: "",
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
      {/* ── HERO — compact, matching About/Sectors style ── */}
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
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em] text-amber-500"
          >
            Contact
          </motion.p>
          <h1>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: EASE }}
              className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
            >
              Let&apos;s talk about
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.25, ease: EASE }}
              className="block text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.0] tracking-[-0.03em] text-amber-500"
            >
              your project.
            </motion.span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="mt-5 max-w-md text-[16px] font-light leading-relaxed text-white/55"
          >
            We respond within one business day.
          </motion.p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-20">

            {/* ── Left: contact details ── */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: EASE }}
              >
                <h2 className="text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0E0E0E]">
                  We respond within 24 hours.
                </h2>
                <p className="mt-4 text-[16px] font-light leading-relaxed text-[#0E0E0E]/55">
                  Tell us about your project, the challenge you&apos;re facing, and the
                  support you need. We&apos;ll match the right expert and come back to
                  you with a scoped proposal.
                </p>
              </motion.div>

              <div className="mt-10 space-y-7 border-t border-[#EBEBEB] pt-8">
                {contactDetails.map(({ Icon, label, value, href }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#F8F7F5] text-amber-600">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/35">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-[15px] font-medium text-[#0E0E0E] transition-colors hover:text-amber-600"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-[15px] font-medium text-[#0E0E0E]">
                          {value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right: form ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            >
              {submitted ? (
                /* ── Success state ── */
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-12 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50">
                    <CheckCircle size={26} strokeWidth={1.5} className="text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#0E0E0E]">
                    Enquiry received.
                  </h3>
                  <p className="mt-3 max-w-[340px] text-[16px] font-light leading-relaxed text-[#0E0E0E]/55">
                    A member of our team will be in touch within one business day.
                  </p>
                </div>
              ) : (
                /* ── Form ── */
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-[#EBEBEB] bg-[#F8F7F5] p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">
                        Full Name *
                      </label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="James Okafor"
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">
                        Company
                      </label>
                      <input
                        id="company" name="company" type="text"
                        value={form.company} onChange={handleChange}
                        placeholder="Meridian Construction Ltd"
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">
                        Email Address *
                      </label>
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="james@meridian.co.uk"
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>

                    {/* Enquiry type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="enquiryType" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">
                        Service Area
                      </label>
                      <select
                        id="enquiryType" name="enquiryType"
                        value={form.enquiryType} onChange={handleChange}
                        className="rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label htmlFor="message" className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#0E0E0E]/40">
                        Your Message *
                      </label>
                      <textarea
                        id="message" name="message" required rows={5}
                        value={form.message} onChange={handleChange}
                        placeholder="Describe your project, the challenge you're facing, and the type of support you need..."
                        className="resize-none rounded-xl border border-[#E5E2DC] bg-white px-4 py-3 text-[15px] text-[#0E0E0E] placeholder:text-[#0E0E0E]/25 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <p className="text-[13px] font-light text-[#0E0E0E]/35">
                      We typically respond within one business day.
                    </p>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-amber-600 px-7 py-3.5 text-[13px] font-semibold tracking-wide text-white transition-[background-color,transform] duration-150 hover:bg-amber-500 active:scale-[0.97]"
                    >
                      Send Enquiry
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-200 group-hover:translate-x-0.5">
                        <ArrowRight size={13} strokeWidth={2} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

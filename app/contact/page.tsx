"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Dark hero */}
      <section className="bg-[#1A1A1A] pt-40 pb-20">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Contact
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s Talk About Your Project
          </h1>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-white/50">
            Whether you need rapid resource deployment or forensic analysis support, get in touch and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-canvas py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr]">
            {/* Left — contact info */}
            <div>
              <SectionBadge>Get in Touch</SectionBadge>
              <h2 className="mt-6 font-serif text-3xl tracking-tight text-charcoal">
                We Respond Within 24 Hours
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-500">
                Tell us about your project, the challenge you&apos;re facing, and the support you need. We&apos;ll match the right expert and respond with a scoped proposal.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Mail size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:adhoc@hworldinc.com"
                      className="mt-1 block text-base text-charcoal transition-colors hover:text-amber-600"
                    >
                      adhoc@hworldinc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <Phone size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Phone
                    </p>
                    <a
                      href="tel:+442000000000"
                      className="mt-1 block text-base text-charcoal transition-colors hover:text-amber-600"
                    >
                      +44 (0) 20 0000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Location
                    </p>
                    <p className="mt-1 text-base text-charcoal">
                      London-based
                    </p>
                    <p className="text-sm text-slate-500">
                      UK &amp; international projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-[#E5E2DC] bg-white p-12 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50">
                    <Send size={24} strokeWidth={1.5} className="text-amber-600" />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">
                    Enquiry Received
                  </h3>
                  <p className="mt-3 max-w-[360px] text-base leading-relaxed text-slate-500">
                    Thank you for getting in touch. A member of our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-[#E5E2DC] bg-white p-8 lg:p-10"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="font-mono text-[10px] uppercase tracking-widest text-slate-400"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="James Okafor"
                        className="rounded-xl border border-[#E5E2DC] bg-canvas px-4 py-3 text-sm text-charcoal placeholder:text-slate-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="company"
                        className="font-mono text-[10px] uppercase tracking-widest text-slate-400"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Meridian Construction Ltd"
                        className="rounded-xl border border-[#E5E2DC] bg-canvas px-4 py-3 text-sm text-charcoal placeholder:text-slate-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="font-mono text-[10px] uppercase tracking-widest text-slate-400"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="james@meridian.co.uk"
                        className="rounded-xl border border-[#E5E2DC] bg-canvas px-4 py-3 text-sm text-charcoal placeholder:text-slate-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      />
                    </div>

                    {/* Enquiry type */}
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="enquiryType"
                        className="font-mono text-[10px] uppercase tracking-widest text-slate-400"
                      >
                        Enquiry Type
                      </label>
                      <select
                        id="enquiryType"
                        name="enquiryType"
                        value={form.enquiryType}
                        onChange={handleChange}
                        className="rounded-xl border border-[#E5E2DC] bg-canvas px-4 py-3 text-sm text-charcoal focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2 sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="font-mono text-[10px] uppercase tracking-widest text-slate-400"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Describe your project, the challenge you're facing, and the type of support you need..."
                        className="rounded-xl border border-[#E5E2DC] bg-canvas px-4 py-3 text-sm text-charcoal placeholder:text-slate-300 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600 resize-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-400">
                      We typically respond within one business day.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-3.5 font-mono text-[11px] uppercase tracking-widest text-white transition-all duration-200 hover:bg-amber-700 active:scale-[0.98]"
                    >
                      Send Enquiry
                      <Send size={13} strokeWidth={2} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

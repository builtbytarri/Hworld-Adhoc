import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { site, absoluteUrl } from "@/lib/site";

/*
 * Server wrapper so the contact page can export metadata (the form itself is
 * client-side, in ContactContent). This page carries the NAP — Name, Address,
 * Phone — which is a primary entity signal. It must stay character-identical
 * to the parent site, Google Business Profile and every directory listing.
 */
export const metadata: Metadata = {
  /* `absolute` — brand already present, don't let the template duplicate it. */
  title: { absolute: "Contact H-World Ad Hoc | Basingstoke, UK" },
  description:
    "Contact H-World Ad Hoc in Basingstoke, Hampshire. Email info@adhoc.hworldinc.com or call +44 1256 232342. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact H-World Ad Hoc | Basingstoke, UK",
    description:
      "Tell us the gap you need filled. We'll have the right specialist on your programme within days.",
    url: absoluteUrl("/contact"),
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#contactpage`,
  url: absoluteUrl("/contact"),
  name: "Contact H-World Ad Hoc",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  mainEntity: {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    email: site.contact.email,
    telephone: site.contact.telephone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.address.locality,
      addressRegion: site.contact.address.region,
      postalCode: site.contact.address.postalCode,
      addressCountry: site.contact.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.contact.email,
      telephone: site.contact.telephone,
      areaServed: "GB",
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactContent />
    </>
  );
}

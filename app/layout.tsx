import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

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
  metadataBase: new URL(site.url),
  title: {
    default: "H-World Ad Hoc | On-Demand Project Planning & Controls",
    template: "%s | H-World Ad Hoc",
  },
  description: site.description,
  applicationName: site.name,
  /* Brand variants customers actually type. Not a ranking factor on its own,
   * but harmless and it documents intent alongside the JSON-LD alternateName. */
  keywords: [
    "H-World",
    "HWorld",
    "H-World Ad Hoc",
    "H-World Inc",
    "H-World planning",
    "ad hoc project planning",
    "on-demand project controls",
    "forensic delay analysis UK",
  ],
  authors: [{ name: site.parent.name, url: site.parent.url }],
  creator: site.parent.name,
  publisher: site.parent.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "H-World Ad Hoc | On-Demand Project Planning & Controls",
    description: site.description,
    url: site.url,
    locale: "en_GB",
    images: [{ url: site.ogImage, width: 1080, height: 1080, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "H-World Ad Hoc | On-Demand Project Planning & Controls",
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

/*
 * Organization JSON-LD — the single highest-leverage SEO asset on the site.
 *
 * This is what tells Google that "H-World" (us) is a DIFFERENT entity from
 * "H World Group Limited" (NASDAQ: HTHT, the Chinese hotel operator that
 * currently owns the bare "hworld" query). The alternateName array captures
 * every spelling variant customers type; parentOrganization + sameAs provide
 * the corroboration that binds the group's web properties into one entity.
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: [...site.alternateNames],
  url: site.url,
  logo: { "@type": "ImageObject", url: `${site.url}/logo2.png` },
  image: `${site.url}/logo2.png`,
  description: site.description,
  email: site.contact.email,
  telephone: site.contact.telephone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.address.locality,
    addressRegion: site.contact.address.region,
    postalCode: site.contact.address.postalCode,
    addressCountry: site.contact.address.country,
  },
  parentOrganization: {
    "@type": "Organization",
    name: site.parent.name,
    url: site.parent.url,
  },
  /* Machine-readable link between the trading brand and the registered
   * company. Lets automated identity checks resolve "H-World" to
   * "Project World Ltd" without a human reading the footer. */
  legalName: site.legal.name,
  identifier: {
    "@type": "PropertyValue",
    propertyID: "GB-COH",
    name: "Companies House company number",
    value: site.legal.companyNumber,
  },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Europe" },
  ],
  knowsAbout: [
    "Project planning and controls",
    "Programme management",
    "Forensic delay analysis",
    "Construction claims and dispute resolution",
    "4D planning",
  ],
  sameAs: [...site.sameAs],
};

/* WebSite schema — enables the sitelinks search box and reinforces the
 * site-level entity alongside the Organization above. */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.description,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-GB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${barlowSemiCondensed.variable} ${barlow.variable}`}>
      <body className="min-h-screen bg-canvas text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

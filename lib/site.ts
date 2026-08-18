/*
 * Central site + brand configuration.
 *
 * Single source of truth for canonical URLs, brand naming, and NAP
 * (Name / Address / Phone). Everything SEO-related reads from here so the
 * sitemap, canonicals, JSON-LD and metadata can never drift apart.
 *
 * BRAND NOTE: the company's actual name is "H-World". The `hworldinc` domain
 * was only chosen because hworld.com was already taken. "H-World Inc" is
 * therefore an ALTERNATE name, not the primary one — but we optimise for both,
 * since customers search both. See SEO-STRATEGY.md §1.
 */

export const site = {
  /* Canonical origin — no trailing slash. */
  url: "https://adhoc.hworldinc.com",

  /* Primary brand name, used in titles. */
  name: "H-World Ad Hoc",

  /* Parent organisation. */
  parent: {
    name: "H-World",
    url: "https://www.hworldinc.com",
  },

  /*
   * Spelling / spacing variants customers actually type. These are fed to
   * schema.org `alternateName` so Google resolves every variant to one entity.
   * Order matters: most-important first.
   */
  alternateNames: [
    "H-World",
    "HWorld",
    "H World",
    "H-World Inc",
    "HWorld Inc",
    "H-World Adhoc",
    "HWorld Adhoc",
    "H World Ad Hoc",
    "H-World Ad Hoc Services",
    "H-World Project Planning & Controls",
  ],

  description:
    "Expert planning, controls and forensics professionals on your programme within days. H-World Ad Hoc deploys specialists on demand across construction, infrastructure, energy, rail and marine.",

  /*
   * Legal entity behind the H-World trading name.
   *
   * "H-World" is a brand; the registered company is Project World Ltd. Any
   * identity check (Twilio Trust Hub, payment processors, KYC) compares the
   * LEGAL name against the website, so the association must be published
   * on-site or verification fails. UK trading-disclosure rules require it
   * regardless. Source: Companies House, company no. 15385102.
   */
  legal: {
    name: "Project World Ltd",
    companyNumber: "15385102",
    jurisdiction: "England and Wales",
    registeredOffice: {
      street: "37 Harewood Gardens",
      locality: "Bournemouth",
      postalCode: "BH7 7RH",
      country: "GB",
    },
  },

  /* NAP — must match the parent site, Google Business Profile and every
   * directory listing character-for-character. */
  contact: {
    email: "adhoc@hworldinc.com",
    telephone: "+44 1256 232342",
    address: {
      locality: "Basingstoke",
      region: "Hampshire",
      postalCode: "RG22 5FE",
      country: "GB",
    },
  },

  /* Corroboration links — proves the entity exists off-site. */
  sameAs: [
    "https://www.hworldinc.com",
    "https://www.linkedin.com/in/hworld-incorporated-8a75043b2",
    "https://www.instagram.com/hworldinc/",
    "https://x.com/Hworldinc",
    "https://www.facebook.com/hworldinc",
  ],

  /* Default social share image and the schema.org Organization logo.
   * Deliberately the BLACK-wordmark variant: search results, knowledge panels
   * and social cards render on white, where the white-wordmark logo would be
   * invisible. The white variant is for the site's own dark surfaces only. */
  ogImage: "/logoblack2.png",
} as const;

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path = "/"): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * BreadcrumbList JSON-LD. Google renders this as a breadcrumb trail in the
 * search result instead of a bare URL, which measurably lifts click-through.
 */
export function breadcrumbs(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

/** Renders a JSON-LD <script>. Safe: input is our own structured data. */
export function jsonLdProps(schema: object) {
  return {
    type: "application/ld+json" as const,
    dangerouslySetInnerHTML: { __html: JSON.stringify(schema) },
  };
}

/**
 * Shared metadata builder for the 13 service detail pages, so titles,
 * canonicals and OG tags stay consistent across every one of them.
 * Hidden services are marked noindex: they are unlinked from nav and listings,
 * and indexing orphan pages dilutes crawl budget. Flip `hidden` in
 * lib/services.ts to publish one and it becomes indexable automatically.
 */
export function serviceMetadata(service: {
  slug: string;
  title: string;
  shortDesc: string;
  category: "management" | "forensics";
  hidden?: boolean;
}) {
  const path = `/${service.category === "management" ? "services" : "forensics"}/${service.slug}`;
  return {
    title: service.title,
    description: service.shortDesc,
    alternates: { canonical: path },
    ...(service.hidden ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.shortDesc,
      url: absoluteUrl(path),
    },
  };
}

/** Service + BreadcrumbList JSON-LD for a service detail page. */
export function serviceSchema(service: {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  techniques: string[];
  category: "management" | "forensics";
}) {
  const isForensics = service.category === "forensics";
  const path = `/${isForensics ? "forensics" : "services"}/${service.slug}`;
  const sectionName = isForensics ? "Ad Hoc Forensics" : "Ad Hoc Management Services";

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${absoluteUrl(path)}#service`,
      name: service.title,
      description: service.longDesc,
      serviceType: service.title,
      url: absoluteUrl(path),
      provider: { "@id": `${site.url}/#organization` },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      category: isForensics
        ? "Construction Forensics"
        : "Project Management Consultancy",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.title} scope`,
        itemListElement: service.techniques.map((t) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: t },
        })),
      },
    },
    breadcrumbs([
      { name: "Home", path: "/" },
      { name: sectionName, path: isForensics ? "/forensics" : "/services" },
      { name: service.title, path },
    ]),
  ];
}

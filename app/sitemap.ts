import type { MetadataRoute } from "next";
import { visibleManagementServices, forensicsServices } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

/*
 * sitemap.xml — generated from lib/services.ts so it can never drift from the
 * actual routes. Hidden services are deliberately excluded: they are unlinked
 * from nav and listings, and are marked noindex on their own pages.
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const core: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/services"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/forensics"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: absoluteUrl("/sectors"), lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];

  const services: MetadataRoute.Sitemap = visibleManagementServices.map((s) => ({
    url: absoluteUrl(`/services/${s.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const forensics: MetadataRoute.Sitemap = forensicsServices.map((s) => ({
    url: absoluteUrl(`/forensics/${s.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...core, ...services, ...forensics];
}

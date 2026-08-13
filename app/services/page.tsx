import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { absoluteUrl, breadcrumbs, jsonLdProps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ad Hoc Management Services",
  description:
    "Programme management, planning, controls and 4D planning from H-World Ad Hoc. Specialists deployed to your project within days, for as long as you need.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Ad Hoc Management Services | H-World Ad Hoc",
    description:
      "Programme management, planning, controls and 4D planning from H-World Ad Hoc. Specialists deployed within days.",
    url: absoluteUrl("/services"),
  },
};

/* Breadcrumbs produce the trail in the SERP instead of a raw URL. */
const breadcrumbSchema = breadcrumbs([
  { name: "Home", path: "/" },
  { name: "Ad Hoc Management Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema)} />
      <ServicesContent />
    </>
  );
}

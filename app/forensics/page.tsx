import type { Metadata } from "next";
import ForensicsContent from "./ForensicsContent";
import { absoluteUrl, breadcrumbs, jsonLdProps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Construction Forensics & Claims",
  description:
    "Forensic delay analysis, EOT claims, dispute resolution and expert witness services from H-World Ad Hoc. Evidence that holds up in adjudication.",
  alternates: { canonical: "/forensics" },
  openGraph: {
    title: "Construction Forensics & Claims | H-World Ad Hoc",
    description:
      "Forensic delay analysis, EOT claims, dispute resolution and expert witness services. Evidence that holds up in adjudication.",
    url: absoluteUrl("/forensics"),
  },
};

const breadcrumbSchema = breadcrumbs([
  { name: "Home", path: "/" },
  { name: "Ad Hoc Forensics", path: "/forensics" },
]);

export default function ForensicsPage() {
  return (
    <>
      <script {...jsonLdProps(breadcrumbSchema)} />
      <ForensicsContent />
    </>
  );
}

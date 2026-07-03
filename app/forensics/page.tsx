import type { Metadata } from "next";
import ForensicsContent from "./ForensicsContent";

export const metadata: Metadata = {
  title: "Forensics Services",
  description:
    "Rigorous, evidence-based forensic analysis — claims analysis, dispute resolution, and expert witness services for construction and infrastructure projects.",
};

export default function ForensicsPage() {
  return <ForensicsContent />;
}

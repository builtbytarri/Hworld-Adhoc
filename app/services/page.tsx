import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Management Services",
  description:
    "Expert ad hoc project management, planning, controls, and financial services — deployed rapidly at any stage of your project.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Management Services",
  description:
    "Expert ad hoc management services across planning, controls and project delivery, deployed to your programme within days and for as long as you need.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}

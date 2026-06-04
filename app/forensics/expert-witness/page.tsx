import type { Metadata } from "next";
import { forensicsServices, managementServices, getServiceBySlug } from "@/lib/services";
import ServiceDetailLayout from "@/components/ui/ServiceDetailLayout";
import { notFound } from "next/navigation";

const SLUG = "expert-witness";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDesc,
  };
}

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = [
    ...forensicsServices.filter((s) => s.slug !== SLUG),
    ...managementServices.slice(0, 1),
  ].slice(0, 3);
  return <ServiceDetailLayout service={service} related={related} />;
}

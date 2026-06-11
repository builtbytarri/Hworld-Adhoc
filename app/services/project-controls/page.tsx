import type { Metadata } from "next";
import { visibleManagementServices, getServiceBySlug } from "@/lib/services";
import ServiceDetailLayout from "@/components/ui/ServiceDetailLayout";
import { notFound } from "next/navigation";

const SLUG = "project-controls";

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
  const related = visibleManagementServices
    .filter((s) => s.slug !== SLUG)
    .slice(0, 3);
  return <ServiceDetailLayout service={service} related={related} />;
}

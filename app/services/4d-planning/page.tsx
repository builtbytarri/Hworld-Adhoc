import type { Metadata } from "next";
import { visibleManagementServices, getServiceBySlug } from "@/lib/services";
import ServiceDetailLayout from "@/components/ui/ServiceDetailLayout";
import { notFound } from "next/navigation";
import { serviceMetadata, serviceSchema, jsonLdProps } from "@/lib/site";

const SLUG = "4d-planning";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return serviceMetadata(service);
}

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = visibleManagementServices
    .filter((s) => s.slug !== SLUG)
    .slice(0, 3);
  const schemas = serviceSchema(service);
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} {...jsonLdProps(schema)} />
      ))}
      <ServiceDetailLayout service={service} related={related} />
    </>
  );
}

import type { Metadata } from "next";
import { forensicsServices, visibleManagementServices, getServiceBySlug } from "@/lib/services";
import ServiceDetailLayout from "@/components/ui/ServiceDetailLayout";
import { notFound } from "next/navigation";
import { serviceMetadata, serviceSchema, jsonLdProps } from "@/lib/site";

const SLUG = "dispute-resolution";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(SLUG);
  if (!service) return {};
  return serviceMetadata(service);
}

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  const related = [
    ...forensicsServices.filter((s) => s.slug !== SLUG),
    ...visibleManagementServices.slice(0, 1),
  ].slice(0, 3);
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
